import { addObserver, appState, dispatch } from '../../../store/store';
import { navigate } from '../../../store/actions';
import Styles from './config-back.css';

class ConfBack extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}

	connectedCallback() {
		this.render();
	}

	render() {
		if (this.shadowRoot) {
			this.shadowRoot.innerHTML = '';

			const css = this.ownerDocument.createElement('style');
			css.innerHTML = Styles;
			this.shadowRoot?.appendChild(css);

			this.shadowRoot.innerHTML = `

            <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>
                <style> ${Styles}</style>
                <div class="coonfi">
								<div class="back">
								<button><i class='bx bx-chevron-left bx-md'></i></button>
						</div>
						<custom-coforms></custom-coforms>
								<div class="done">
                        <button>Done</button>
                    </div>
                    <div class="exit">
                        <button>Close session</button>
                    </div>

                </div>
            `;
		}
	}
}

customElements.define('custom-backed', ConfBack);

export default ConfBack;
