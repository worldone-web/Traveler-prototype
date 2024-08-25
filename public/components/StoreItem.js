import { Component } from '../core/heropy.js';

export default class StoreItem extends Component {
    constructor(props) {
        super({
            props,
            tagName: 'a'
        });
    }

    render() {
        const { store } = this.props;

        this.el.setAttribute('href', `#/store?id=${store.id}`);
        this.el.classList.add('restaurant');
        this.el.style.backgroundImage = `url(${store.photoUrl || 'default-image.jpg'})`; // 음식점 이미지 또는 기본 이미지 사용
        

        this.el.innerHTML = /*html*/`
            <div class="info">
                <h3 class="name">${store.name || 'Unknown Place'}</h3>
                <p class="address">${store.formatted_address || 'No address provided'}</p>
                
            </div>
        `;
    }
}
