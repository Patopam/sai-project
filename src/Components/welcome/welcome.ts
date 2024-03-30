export enum Attribute5 {
	'image' = 'image',
}

class welcome extends HTMLElement {
	image?: string;

	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}

	static get observedAttributes() {
		const attrs: Record<Attribute5, null> = {
			image: null,
		};

		return Object.keys(attrs);
	}

	connectedCallback() {
		this.render();
	}

	attributeChangedCallback(propName: Attribute5, oldValue: string | undefined, newValue: string | undefined) {
		switch (propName) {
			default:
				this[propName] = newValue;
				break;
		}
		this.render();
	}

	render() {
		if (this.shadowRoot) {
			this.shadowRoot.innerHTML = `


            <link rel="stylesheet" href="../src/Components/welcome/welcome.css">

					<div class="welBar">

						<div class="ImgUser">
            <img src="${this.image}"></img>
            	</div>
            <div class="text">
            <h2>What's happening?</h2>
            </div>
            <div class="Buttons">
            <custom-photo></custom-photo>
            <custom-video></custom-video>
            </div>

					</div>

            `;
		}
	}
}

customElements.define('custom-welcome', welcome);
export default welcome;
