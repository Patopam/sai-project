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
			this.shadowRoot.innerHTML = `
				<link rel="stylesheet" href="../src/Components/photoButton/photoButton.css">
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
