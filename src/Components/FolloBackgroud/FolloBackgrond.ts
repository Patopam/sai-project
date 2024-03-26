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
            <div class="fondo">
        
            </div>
            `;
		}
	}
}

customElements.define('custom-follobackgrond', follobackgrond);
export default follobackgrond;