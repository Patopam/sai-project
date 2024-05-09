import Styles from './Sign-In-Button.css';

import { addObserver, appState } from '../../../store/store';

class SingButton extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
		addObserver(this);


	connectedCallback() {
		this.render();

		const ChangeHome = this.shadowRoot?.querySelector('#changeHome');
		ChangeHome?.addEventListener('click', () => {

		})
	} 


	render() {
		if (this.shadowRoot) {
			this.shadowRoot.innerHTML = ``;
			
			const css = this.ownerDocument.createElement('style');
			css.innerHTML = Styles;
			this.shadowRoot?.appendChild(css);
		
			this.shadowRoot.innerHTML = `
			<style> ${Styles}</style>

			<section>


			<button id="changeHome" class="Button-Continue">Continue</button>
				<div class="Box-LogIn">
					<p>Already have an occount?</p>
					<button id="changeLogIn" class="Button-LogIn">Log in</button>

				</div>
				
			</section>
			`;
		}
	}
}

customElements.define('custom-singbutton', SingButton);
export default SingButton;