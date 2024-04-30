class folloButton extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}

    followprofile() {
		console.log('123', this);
		if (this.innerHTML == 'UNFOLLOW') {
			this.innerHTML = 'FOLLOW';
			this.className = 'habilitar';
		} else {
			this.innerHTML = 'UNFOLLOW';
			this.className = 'deshabilitar';
		}
	}
	connectedCallback() {

		this.render();
        this.shadowRoot?.querySelector('#seguir')?.addEventListener('click', this.followprofile);
	}

	render() {
		if (this.shadowRoot) {
			this.shadowRoot.innerHTML = `
				<link rel="stylesheet" href="../src/Components/folloButton/folloButton.css">
                <button id="seguir">FOLLOW</button>
			`;
		}
	}
}

customElements.define('custom-button', folloButton);
export default folloButton;