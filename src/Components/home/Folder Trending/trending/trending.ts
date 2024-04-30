class trending extends HTMLElement {
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
            <link rel="stylesheet" href="../src/Components/trending/trending.css">
			<div class="box-trending">
				<div class="now">
					<h2>TRENDING RIGHT NOW</h2>
				</div>
				<div class="Show">
					<button>Show more</button>
				</div>
			</div>
            `;
		}
	}
}

customElements.define('custom-trending', trending);
export default trending;
