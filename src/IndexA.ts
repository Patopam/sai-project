import './screens/home';
import './screens/sing-in';
import './Components/indexP';
import { appState } from './store/store';
import { addObserver } from './store/store';

class AppContainer extends HTMLElement {

    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        addObserver(this);
    }
    
    connectedCallback(){
        this.render()
    }
    render(){
        switch (appState.screen) {
            case 'SignIn':
                const card = this.ownerDocument.createElement('app-singin')
                this.shadowRoot?.appendChild(card)
                break;
        
            default:
                break;
        }
      
    }
    
    }
    
    customElements.define('app-container', AppContainer)