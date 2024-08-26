
import {Component} from './core/heropy.js' // Default import
//import {Component} from './core/heropy.js' // Named import
// 모든 컴포넌트의 집합체


export default class App extends Component {
    render(){
        const routerView = document.createElement('router-view');
        this.el.append(
            routerView
        )
    }
}