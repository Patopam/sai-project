
import Styles from './user.css';
export enum Attribute {
	'image' = 'image',
	'name' = 'name',
	'username' = 'username',
	'followers' = 'followers',
	'following' = 'following',
}

class user extends HTMLElement {
	name?: string;
	image?: string;
	username?: string;
	following?: number;
	followers?: number;

	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}

	static get observedAttributes() {
		const attrs: Record<Attribute, null> = {
			name: null,
			image: null,
			username: null,
			followers: null,
			following: null,
		};

		return Object.keys(attrs);
	}

	connectedCallback() {
		this.render();
	}

	attributeChangedCallback(propName: Attribute, oldValue: string | undefined, newValue: string | undefined) {
		switch (propName) {
			case Attribute.following:
				this.following = newValue ? Number(newValue) : undefined;
				break;
			case Attribute.followers:
				this.followers = newValue ? Number(newValue) : undefined;
				break;

			default:
				this[propName] = newValue;
				break;
		}
		this.render();
	}

	render() {
		if (this.shadowRoot) {
			this.shadowRoot.innerHTML = ``;

			const css = this.ownerDocument.createElement('style');
			css.innerHTML = Styles;
			this.shadowRoot?.appendChild(css);

			this.shadowRoot.innerHTML = `
			<style> ${Styles}</style>
			<section class= "user">
      			<div class="top">
      			<img src="${this.image}"></img>
      			<h1>${this.name}</h1>
      			<h2>${this.username}</h2>
      			</div>
						<section class="bottom">
						<div class="following">
						<h1>${this.following}</h1>
						<h2>Following</h2>
						</div>
						<div class="follower">
						<h1>${this.followers}</h1>
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
