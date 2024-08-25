// 모든 페이지들의 경로들
// 각각의 js를 하나의 페이지로 생각
import Home from "./Home.js";
import About from "./About.js";
import { createRouter } from '../core/heropy.js'


export default createRouter([
    {path:'#/',component:Home},
    {path:'#/about',component:About},
])