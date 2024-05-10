import Styles from './Sign-In-Forms.css';
class Forms extends HTMLElement {
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
				<input class="Forms" type="text" name="Name" id="" placeholder="Name">
                <input class="Forms" type="text" name="Username" id="" placeholder="Username">
                <input class="Forms" type="email" name="Email" id="" placeholder="Email">
                <input class="Forms" type="Passaword" name="Passaword" id="" placeholder="Passaword">
                <input class="Forms" type="Passaword" name="Passaword" id="" placeholder="Confirm Passaword">
			</div>

			</section>
			`;
		}
	}
}

customElements.define('custom-forms', Forms);
export default Forms;
