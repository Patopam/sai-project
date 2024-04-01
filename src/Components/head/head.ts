import logosai from '../../assets/Iconography - Caesarzkn.png'
export enum Attribute6 {
	'image' = 'image',
	'username' = 'username',
	'uid' = 'uid'
	
	
}

class head extends HTMLElement {
	image?: string;
	username?: string;
	uid?: number;

	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}

	static get observedAttributes() {
		const attrs: Record<Attribute6, null> = {
			image: null,
			username: null,
			uid:null,
			
		};

		return Object.keys(attrs);
	}
	

	connectedCallback() {
		this.render();
		
	}

	attributeChangedCallback(propName: Attribute6, oldValue: string | undefined, newValue: string | undefined) {
		switch(propName){
            case Attribute6.uid:
                this.uid = newValue ? Number(newValue) : undefined;
             break;
			 default:
                this[propName] = newValue;
             break;
        }
		this.render();
	}

	render() {
		if (this.shadowRoot) {
			this.shadowRoot.innerHTML = `
            <link rel="stylesheet" href="../src/Components/head/head.css">
            <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>
					<div class="box-head">
                        <div class="box-logo">
                            <img src="${logosai}" alt="logosai"  draggable="false"/> 
                        </div>
                        <div class="box-text">
                            <input type="text" class="Bar-text" placeholder="search">

                        </div>
                        <div class="box-Buttons">
                            
                            <div class="box-home" >
                                <button><i class='bx bxs-home'></i></i></button>
                                <p>Home</p>
                            </div>
                            <button><i class='bx bxs-chat'></i></button>
                            <button><i class='bx bxs-bell'></i></button>
                            
                        </div>
                        <div class="box-user">
                            <img src="${this.image}" class="perfil"></img>
                            <p class="name">@${this.username}</p>
                        </div>
                        <div class="box-menu">
                            <button><i class='bx bx-menu'></i></button>
                        </div>
					</div>

            `;

		}
	}
}

customElements.define('custom-head', head);
export default head;