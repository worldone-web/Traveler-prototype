import { Component } from '../core/heropy.js';
import eatStore, { getRestaurantDetails } from '../store/restaurant.js';

export default class Restaurant extends Component {
    async render() {
        // 쿼리 파라미터에서 query와 analyze_type 추출
        const queryParams = new URLSearchParams(location.hash.split('?')[1]);
        const query = queryParams.get('query');
        const analyzeType = queryParams.get('analyze_type') || 'similar'; // 기본값 'similar'

        if (!query) {
            this.el.innerHTML = '<p>잘못된 요청입니다. 가게 이름이 없습니다.</p>';
            return;
        }

        try {
            // 디버깅: getRestaurantDetails 호출 전
            console.log('Fetching details for:', query, analyzeType);
            
            await getRestaurantDetails(query, analyzeType);

            // 디버깅: eatStore의 상태 확인
            console.log('Restaurant state after fetching details:', eatStore.state.restaurant);

            const restaurant = eatStore.state.restaurant;

            console.log('Restaurant data:', restaurant);

            if (!restaurant) {
                this.el.innerHTML = '<p>해당 가게 정보를 가져올 수 없습니다.</p>';
                return;
            }

            this.el.classList.add('container', 'the-restaurant');
            this.el.innerHTML = /* html */ `
                <div class="map"></div>
                <div class="specs">
                    <div class="title">
                        ${restaurant.name || 'Unknown Place'}
                    </div>
                    
                    <div>
                        <h3>Location</h3>
                        ${restaurant.address || 'No address provided'}
                    </div>
                    <div>
                        <h3>Phone-Number</h3>
                        ${restaurant.phone || 'No phone number'}

                    </div>
                    <div>
                        <h3>Rating</h3>
                        ${restaurant.rating || 'N/A'}                           
                    </div>
                </div>
            `;
        } catch (error) {
            console.error('Error in Restaurant render:', error); // 디버깅 로그
            this.el.innerHTML = `<p>데이터를 가져오는 중 오류 발생: ${error.message}</p>`;
        }
    }
}
