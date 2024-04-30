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

			<href ="https://api.fontshare.com/v2/css?f[]=satoshi@500&f[]=cabinet-grotesk@800&display=swap" rel="stylesheet" />

				<link rel="stylesheet" href="../src/Components/folloButton/folloButton.css">
                <button id="seguir">FOLLOW</button>
			`;
		}
	}
}

customElements.define('custom-button', folloButton);
export default folloButton;