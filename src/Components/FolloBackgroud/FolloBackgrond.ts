class follobackgrond extends HTMLElement {
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
            <link rel="stylesheet" href="../src/Components/FolloBackgroud/FolloBackgrond.css">
			<div class="box-followers">
				<div class="Who">
					<h2>Who is follow you </h2>
				</div>
				<div class="Show">
					<button>Show more</button>
				</div>
			</div>
            `;
		}
	}
}

customElements.define('custom-follobackgrond', follobackgrond);
export default follobackgrond;
