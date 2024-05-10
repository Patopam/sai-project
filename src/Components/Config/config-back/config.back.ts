import { addObserver, appState, dispatch } from '../../../store/store';
import { navigate } from '../../../store/actions';
import Styles from './config-back.css';

class ConfBack extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
		addObserver(this);
	}

	connectedCallback() {
		this.render();
		const ChangeHome = this.shadowRoot?.querySelector('#lerorle');
		ChangeHome?.addEventListener('click', () => {
			dispatch(navigate('Home'));
		});
		const Changies = this.shadowRoot?.querySelector('#bye');
		Changies?.addEventListener('click', () => {
			dispatch(navigate('LogIn'));
		});
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
								<button id="lerorle"><i class='bx bx-chevron-left bx-lg'></i></button>
						</div>
						<custom-coforms></custom-coforms>
								<div class="done">
                        <button>Done</button>
                    </div>
                    <div class="exit">
                        <button id="bye" >Close session</button>
                    </div>

                </div>
            `;
		}
	}
}

customElements.define('custom-backed', ConfBack);

export default ConfBack;
