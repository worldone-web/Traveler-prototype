import { Store } from '../core/heropy.js';

const store = new Store({
    searchText: '',
    page: 1,
    restaurants: [],
    pageMax: 1 ,
    loading: false
});

export default store;

export const searchRestaurantStores = async (query, page = 1) => {
    try {
        store.state.loading = true
        const response = await fetch(`/api/places?query=${encodeURIComponent(query)}&page=${page}`);
        
        if (!response.ok) {
            throw new Error(`Network response was not ok: ${response.statusText}`);
        }

        const data = await response.json();
        
        if (data.documents && Array.isArray(data.documents)) {
            // Append new results to existing ones
            store.state.restaurants = store.state.restaurants.concat(data.documents.map(place => ({
                name: place.place_name || 'Unknown Place',
                address: place.road_address_name || place.address_name || 'No address provided',
                url: place.place_url || '#',
                category: place.category_name || 'No category',
                phone: place.phone || 'No phone number',
                photoUrl: place.image_url || 'default-image.jpg'
            })));
            
            store.state.page = page;
            store.state.pageMax = data.meta ? Math.ceil(data.meta.total_count / 10) : 1;
            store.state.loading = false
        } else {
            console.error('유효한 검색 결과가 없습니다.');
            store.state.restaurants = [];
        }
    } catch (error) {
        console.error('데이터를 가져오는 중 오류 발생:', error);
        store.state.restaurants = []; // 오류 발생 시 빈 배열로 설정
    }
};
