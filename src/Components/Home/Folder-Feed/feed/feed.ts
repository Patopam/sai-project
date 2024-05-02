import Styles from './feed.css';
export enum Attribute2 {
	'image' = 'image',
	'username' = 'username',
	'postimage' = 'postimage',
	

}

class feed extends HTMLElement {
	image?: string;
	username?: string;
	postimage?: string;
	
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}

	static get observedAttributes() {
		const attrs: Record<Attribute2, null> = {
			image: null,
			username: null,
			postimage: null,
			
	
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
			this.shadowRoot.innerHTML = ``;
			
			const css = this.ownerDocument.createElement('style');
			css.innerHTML = Styles;
			this.shadowRoot?.appendChild(css);
			
			this.shadowRoot.innerHTML = `
			<style> ${Styles}</style>
			
			<link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>
       	
				<div class="componente">
					<div class="info">
						<img src="${this.image}" class="imagen-usuario"></img>
						<p>@${this.username}</p>
					</div>
					<div class="post">
						<img class="imagen-post" src="${this.postimage}"></img>
					</div>

					<div class="box-like">
						<custom-like></custom-like>
					</div>
					
					

				</div>
      `;
		}
	}
}

customElements.define('custom-feed', feed);
export default feed;
