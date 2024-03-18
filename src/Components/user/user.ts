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
			<link rel="stylesheet" href="../src/Components/user/user.css" />
			<section class= "user">
      			<div class="top">
      			<img src="${this.image}"></img>
      			<h1>${this.name}</h1>
      			<h2>${this.username}</h2>
      			</div>
						<section class="bottom">
						<div class="following">
						<h1>514</h1>
						<h2>Following</h2>
						</div>
						<div class="follower">
						<h1>1020</h1>
						<h2>Followers</h2>
						</div>
						<nav class="myProfile">My Profle</nav>

						</section>

            </section>
            `;
		}
	}
}

customElements.define('custom-user', user);
export default user;
