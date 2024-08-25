import { Component } from '../core/heropy.js';
import eatStore from '../store/restaurant.js';
import StoreItem from './StoreItem.js';

export default class StoreList extends Component {
    constructor() {
        super();
        eatStore.subscribe('restaurants', () => {
            this.render();
        });
    }

    render() {
        this.el.classList.add('restaurant-list');
        this.el.innerHTML = /*html*/`
            <div class="restaurants"></div>
        `;

        const storesEl = this.el.querySelector('.restaurants');
        storesEl.innerHTML = ''; // Clear existing content

        eatStore.state.restaurants.forEach(restaurant => {
            // Assuming `StoreItem` is used for each restaurant item
            const storeItem = new StoreItem({
                store: restaurant
            }).el;
            storesEl.append(storeItem);
        });
    }
}
