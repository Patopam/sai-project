export enum Attribute {
	'image' = 'image',
	'name' = 'name',
	'username' = 'username',
}

class user extends HTMLElement {
	name?: string;
	image?: string;
	username?: string;

	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}

	static get observedAttributes() {
		const attrs: Record<Attribute, null> = {
			name: null,
			image: null,
			username: null,
		};

		return Object.keys(attrs);
	}

	connectedCallback() {
		this.render();
	}

	attributeChangedCallback(propName: Attribute, oldValue: string | undefined, newValue: string | undefined) {
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
      <link rel="stylesheet" href="../user/user.css">
      <section>
      <section class="top">
      <img src="${this.image}"></img>
      <h1>${this.name}</h1>
      <h2>${this.username}</h2>
      </section>

            </section>
            `;
		}
	}
}

customElements.define('custom-user', user);
export default user;
