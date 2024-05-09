import Styles from './Log-In-Button.css';
class LogButton extends HTMLElement {
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
				<div class="Box-SingIn">
					<p>Don’t have a account?</p>
					<button class="Button-SingIn">Sign in</button>
				</div>

			</section>
			`;
		}
	}
}

customElements.define('custom-logbutton', LogButton);
export default LogButton;
