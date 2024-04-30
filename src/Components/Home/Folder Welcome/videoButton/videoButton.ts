class VideoButton extends HTMLElement {
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
				<link rel="stylesheet" href="../src/Components/videoButton/videoButton.css">
        <div class="box">
        <button class="button">
          <div class="overlap-group">
            <div class="text-wrapper">Video</div>
            <div class="rectangle"></div>
          </div>
			`;
		}
	}
}

customElements.define('custom-video', VideoButton);
export default VideoButton;
