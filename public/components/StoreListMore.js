import { Component } from '../core/heropy.js';
import eatStore, { searchRestaurantStores } from '../store/restaurant'; 

export default class StoreListMore extends Component { 
    constructor() {
        super({
            tagName: 'button'
        });
        // 페이지와 최대 페이지를 모두 구독하여 변경 시 버튼을 업데이트
        eatStore.subscribe('page', this.updateButtonVisibility.bind(this));
        eatStore.subscribe('pageMax', this.updateButtonVisibility.bind(this));
    }

    updateButtonVisibility() {
        const { page, pageMax } = eatStore.state;
        if (pageMax > page) {
            this.el.classList.remove('hide');
        } else {
            this.el.classList.add('hide');
        }
    }

    render() {
        this.el.classList.add('btn', 'view-more', 'hide');
        this.el.textContent = 'View more...';
        this.el.addEventListener('click', async () => {
            await searchRestaurantStores(eatStore.state.searchText, eatStore.state.page + 1);
        });
    }
}
