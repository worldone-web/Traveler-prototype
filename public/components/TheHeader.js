import {Component} from '../core/heropy.js' 


export default class TheHeader extends Component {
    constructor(){
        super({
            tagName:'header',
            state:{
                menus:[
                    {
                        name:'Search',
                        href:'#/'
                    },
                    {
                        name:'Restaurant',
                        href:'#/restaurant?query=수변최고돼지국밥%20민락본점&analyze_type=exact'
            
                    },
                    {
                        name:'About',
                        href:'#/about'
            
                    }
                ]
            }
        })
        window.addEventListener('popstate',()=>{
            this.render()
        })
    }

    render(){       
        this.el.classList.add('headline')
        this.el.innerHTML= /*html*/`
            <a 
                href="#/"
                class="logo">
                <span>TRAVELER</span>.COM
            </a>
            <nav>
                <ul>
                    ${this.state.menus.map(menu=>{
                        const href=menu.href.split('?')[0]
                        const hash=location.hash.split('?')[0]
                        const isActive = href===hash
                        return /*html */`
                            <li>
                                <a 
                                    class="${isActive?'active':''}"
                                    href="${menu.href}">
                                    ${menu.name}
                                </a>
                            </li>
                        `
                    }).join('')} 
                </ul>    
            </nav>
            <a href="#/about" class="user">
                <img src="https://" alt="user">
            </a>
        `   

    }
}