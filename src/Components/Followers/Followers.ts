export enum Attribute3 {
	'image' = 'image',
	'username' = 'username',
    'name' = 'name',
	
}

class followers extends HTMLElement {
	image?: string;
	username?: string;
    name?: string;

	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}

	static get observedAttributes() {
		const attrs: Record<Attribute3, null> = {
			image: null,
			username: null,
            name: null,
		};

		return Object.keys(attrs);
	}

	connectedCallback() {
		this.render();
	}

	attributeChangedCallback(propName: Attribute3, oldValue: string | undefined, newValue: string | undefined) {
		this[propName] = newValue;
		this.render();
	}

	render() {
		if (this.shadowRoot) {
			this.shadowRoot.innerHTML = `
            <link rel="stylesheet" href="../src/Components/Followers/Followers.css">
            <div class="fondo">
            <H1>Who is to follow you</H1>
            <div class="info">
                <div class="usurio">
                    <img src="${this.image}" class="imagen-usuario"></img>
                    <div class="names">
                        <p>${this.name}</p>
                        <p>${this.username}</p>
                    </div>
                </div>
                
                  <button>follow</button>
               
            </div>
            <div class="more">
                <h1>Show more</h1>
            </div>
            
        </div>
            `;
		}
	}
}

customElements.define('custom-followers', followers);
export default followers;