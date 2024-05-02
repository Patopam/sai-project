import Styles from './photoButton.css';
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
        <button class="button">
		
          <div class="overlap-group">
            <div class="text-wrapper">Photo</div>
            <div class="rectangle"></div>
          </div>
		  
        </button>
      </div>
			`;
		}
	}
}

customElements.define('custom-photo', PhotoButton);
export default PhotoButton;
