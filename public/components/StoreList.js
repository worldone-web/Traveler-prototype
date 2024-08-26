import { Component } from '../core/heropy.js';
import eatStore from '../store/restaurant.js';
import StoreItem from './StoreItem.js';

export default class StoreList extends Component {
    constructor() {
        super();
        eatStore.subscribe('restaurants', () => {
            this.render();
        });
        eatStore.subscribe('loading', () => {
            this.render();
        });
    }

    render() {
        this.el.classList.add('restaurant-list');
        this.el.innerHTML = /*html*/`
            <div class="restaurants"></div>
            <div class="the-loader hide"></div>
        `;

        const storesEl = this.el.querySelector('.restaurants');
        storesEl.innerHTML = ''; 

        eatStore.state.restaurants.forEach(restaurant => {
            
            const storeItem = new StoreItem({
                store: restaurant
            }).el;
            storesEl.append(storeItem);
        });

        const loaderEl= this.el.querySelector('.the-loader')
        eatStore.state.loading 
            ? loaderEl.classList.remove('hide') 
            : loaderEl.classList.add('hide')
    }
}
