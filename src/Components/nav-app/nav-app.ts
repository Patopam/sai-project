class NavApp extends HTMLElement {
	

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
            <link rel="stylesheet" href="../src/Components/nav-app/nav-app.css">
           <div class="box-nav">
                <div class="box-buttoms">
                    <div class="home">
                        <button class="Box-boton1">home</button>
                    </div>
                    <div class="search">
                        <button class="Box-boton2">search</button>
                    </div>
                    <div class="photo">
                        <button class="Box-boton3">photo</button>
                    </div>
                    <div class="followers">
                        <button class="Box-boton4">followers</button>
                    </div>
                    <div class="user">
                        <button class="Box-boton5">user</button>
                    </div>
                </div>
           </div>
            `;
		}
	}
}

customElements.define('nav-app', NavApp);
export default NavApp;