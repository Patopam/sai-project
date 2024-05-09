import './screens/home';
import './screens/sign-in';
import './screens/log-in';
import './Components/indexP';
import './screens/trend';
import { appState } from './store/store';
import { addObserver } from './store/store';

class AppContainer extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
		addObserver(this);
	}

	connectedCallback() {
		this.render();
	}
	render() {
		if (this.shadowRoot) this.shadowRoot.innerHTML = '';
		switch (appState.screen) {
			case 'SignIn':
				const SignIn = this.ownerDocument.createElement('app-signin');
				this.shadowRoot?.appendChild(SignIn);
				break;

			case 'Home':
				const Home = this.ownerDocument.createElement('app-home');
				this.shadowRoot?.appendChild(Home);
				break;

			case 'LogIn':
				const LogIn = this.ownerDocument.createElement('app-login');
				this.shadowRoot?.appendChild(LogIn);
				break;
			case 'LogIn':
				const AppTrend = this.ownerDocument.createElement('app-trends');
				this.shadowRoot?.appendChild(AppTrend);
				break;
			default:
				break;
		}
	}
}

customElements.define('app-container', AppContainer);
