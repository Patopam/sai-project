import Styles from './photoButton.css';
import { uploadfile } from '../../../../services/firebase';
class PhotoButton extends HTMLElement {
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
			<script src="https://unpkg.com/boxicons@2.1.4/dist/boxicons.js"></script>
        <div class="box">
        <button class="button">Photo</button>
      </div>
			`;
		 const input = this.ownerDocument.createElement('input');
		 input.className= 'hola'
		 input.type = 'file';
		 input.addEventListener('change', () => {
		 	const file = input.files?.[0];
			if (file) uploadfile(file);
		 })
		 this.shadowRoot?.appendChild(input)
		}
	}
}

customElements.define('custom-photo', PhotoButton);
export default PhotoButton;
