import Styles from './Log-In-Forms.css';
class FormsL extends HTMLElement {
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
			<div class="box-Forms">
			<h1>Email/Username</h1>

                <input class="Forms" type="email" name="Email" id="" placeholder="Email">
								<h1>Password</h1>
                <input class="Forms" type="Passaword" name="Passaword" id="" placeholder="Passaword">
			</div>

			</section>
			`;
		}
	}
}

customElements.define('custom-formsl', FormsL);
export default FormsL;
