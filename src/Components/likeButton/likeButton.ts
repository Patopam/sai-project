class likeButton extends HTMLElement {
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
            <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>
				<link rel="stylesheet" href="../src/Components/likeButton/likeButton.css">
                <button id="like" ><i class='bx bxs-like'></i></button>
			`;
		}
	}
}

customElements.define('custom-like', likeButton);
export default likeButton;

