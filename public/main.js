import App from './App.js';
import router from './routes/index.js';

// 앱을 렌더링
const root = document.querySelector("#root");
root.append(new App().el);

// 라우터 설정
router();

// Kakao Maps API가 로드된 후에 지도를 초기화합니다.
window.addEventListener('load', () => {
    if (window.kakao && kakao.maps) {
        const mapContainer = document.getElementById('map');
        if (mapContainer) {
            const mapOption = { 
                center: new kakao.maps.LatLng(37.5665, 126.9780), // 서울시청
                level: 3 // 확대 레벨
            };

            const map = new kakao.maps.Map(mapContainer, mapOption);

            const markerPosition = new kakao.maps.LatLng(37.5665, 126.9780);
            const marker = new kakao.maps.Marker({
                position: markerPosition
            });

            marker.setMap(map);
        } else {
            console.error('Map container element is not found.');
        }
    } else {
        console.error('Kakao Maps API is not loaded.');
    }
});
