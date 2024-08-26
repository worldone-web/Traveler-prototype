import App from './App.js';
import router from './routes/index.js';

// 앱을 렌더링
const root = document.querySelector("#root");
root.append(new App().el);

// 라우터 설정
router();

/*
// 서버에서 Kakao Maps API 키를 가져와서 스크립트를 동적으로 로드합니다.
async function loadKakaoMaps() {
    try {
        const response = await fetch('/api/kakao-key');
        const data = await response.json();
        const apiKey = data.apiKey;

        // Kakao Maps API를 동적으로 로드
        const script = document.createElement('script');
        script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${apiKey}&libraries=LIBRARY`;
        document.head.appendChild(script);

        script.onload = () => initializeMap();
        script.onerror = () => console.error('Failed to load Kakao Maps API script.');
    } catch (error) {
        console.error('Error fetching Kakao Maps API key:', error);
    }
}

// 지도 초기화 함수
function initializeMap() {
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
}

// DOM이 로드된 후 Kakao Maps API 로드 시도
window.addEventListener('load', loadKakaoMaps);
*/