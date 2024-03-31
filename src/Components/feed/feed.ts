
export enum Attribute2 {
	'image' = 'image',
	'username' = 'username',
	'postimage' = 'postimage',
	'icono' = 'icono'

}

class feed extends HTMLElement {
	image?: string;
	username?: string;
	postimage?: string;
	icono?: string

	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}

	static get observedAttributes() {
		const attrs: Record<Attribute2, null> = {
			image: null,
			username: null,
			postimage: null,
			icono: null
		};

		return Object.keys(attrs);
	}

	connectedCallback() {

		this.render();
	}

	attributeChangedCallback(propName: Attribute2, oldValue: string | undefined, newValue: string | undefined) {
		this[propName] = newValue;
		this.render();
	}

	render() {
		if (this.shadowRoot) {
			this.shadowRoot.innerHTML = `
	


       		 <link rel="stylesheet" href="../src/Components/feed/feed.css">
				<div class="componente">
					<div class="info">
						<img src="${this.image}" class="imagen-usuario"></img>
						<p>@${this.username}</p>
					</div>
					<div class="post">
						<img class="imagen-post" src="${this.postimage}"></img>
					</div>
					<button>${this.icono}</button>
				</div>
      `;
		}
	}
}

customElements.define('custom-feed', feed);
export default feed;
