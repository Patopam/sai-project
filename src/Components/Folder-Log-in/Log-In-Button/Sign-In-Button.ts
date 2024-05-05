import Styles from './Sign-In-Button.css';
class SingButton extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}

	connectedCallback() {
		this.render();
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

			<button class="Button-Continue">Continue</button>
				<div class="Box-LogIn">
					<p>Already have an occount?</p>
					<button class="Button-LogIn">Log in</button>
				</div>
				
			</section>
			`;
		}
	}
}

customElements.define('custom-singbutton', SingButton);
export default SingButton;