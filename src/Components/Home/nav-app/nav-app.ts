import Styles from './nav-app.css';
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
			this.shadowRoot.innerHTML = ``;
			
			const css = this.ownerDocument.createElement('style');
			css.innerHTML = Styles;
			this.shadowRoot?.appendChild(css);
			
			this.shadowRoot.innerHTML = `
			<style> ${Styles}</style>
            <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>
           <div class="box-nav">
                <div class="box-buttoms">
                    <div class="home">
                        <button class="Box-boton1"><i class='bx bx-home-alt-2 bx-md' style='color:#ffffff' ></i></button>
                    </div>
                    <div class="search">
                        <button class="Box-boton2"><i class='bx bx-search bx-md' style='color:#ffffff' ></i></button>
                    </div>
                    <div class="photo">
                        <button class="Box-boton3"><i class='bx bx-plus bx-md' style='color:#ffffff' ></i></button>
                    </div>
                    <div class="followers">
                        <button class="Box-boton4"><i class='bx bx-user-plus bx-md' style='color:#ffffff'  ></i></button>
                    </div>
                    <div class="user">
                        <button class="Box-boton5"><i class='bx bx-user-circle bx-md' style='color:#ffffff' ></i></button>
                    </div>
                </div>
           </div>
            `;
		}
	}
}

customElements.define('nav-app', NavApp);
export default NavApp;