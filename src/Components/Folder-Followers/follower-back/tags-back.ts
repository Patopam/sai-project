import { addObserver, appState, dispatch } from '../../../store/store';
import { navigate } from '../../../store/actions';
import Styles from './tags-back.css';

class FollBack extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}

	connectedCallback() {
		this.render();
		const ChangeHome = this.shadowRoot?.querySelector('#showf');
		ChangeHome?.addEventListener('click', () => {
			dispatch(navigate('Follow'));
		});
	}

	render() {
		if (this.shadowRoot) {
			this.shadowRoot.innerHTML = '';

			const css = this.ownerDocument.createElement('style');
			css.innerHTML = Styles;
			this.shadowRoot?.appendChild(css);

			this.shadowRoot.innerHTML = `
                <style> ${Styles}</style>
                <div class="title2">
                    <div class="now">
                        <h1>Here are some people you might know</h1>
                    </div>

                    <div class="go">
                        <button id="showf">Back to Home</button>
                    </div>

                </div>
            `;
		}
	}
}

customElements.define('custom-back', FollBack);

export default FollBack;
