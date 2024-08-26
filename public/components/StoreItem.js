import { Component } from '../core/heropy.js';

export default class StoreItem extends Component {
    constructor(props) {
        super({
            props,
            tagName: 'a' // 링크 형태로 렌더링
        });
    }

    render() {
        const { store } = this.props;

        if (!store) {
            console.error('Store object is missing');
            return;
        }

        const { name, address, url, photoUrl } = store;

        this.el.setAttribute('href', url);
        this.el.classList.add('restaurant');
        this.el.style.backgroundImage = `url(${photoUrl || 'default-image.jpg'})`;

        this.el.innerHTML = /*html*/`
            <div class="info">
                <h3 class="name">${name}</h3>
                <p class="address">${address}</p>
            </div>
        `;
    }
}
