import Styles from './config-forms.css';
class CoForms extends HTMLElement {
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
                <input class="Forms" type="text" name="Lastname" id="" placeholder="Lastname">
                <input class="Forms" type="email" name="Username" id="" placeholder="Username">
                <input class="Forms" type="Passaword" name="Email" id="" placeholder="Email">
                <input class="Forms" type="Passaword" name="Passaword" id="" placeholder="Passaword">

			</div>

			</section>
			`;
		}
	}
}

customElements.define('custom-coforms', CoForms);
export default CoForms;
