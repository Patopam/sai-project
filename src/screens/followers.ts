import './Components/indexP';
import { UserData } from '../src/data/data';
import Myfollower, { Attribute3 } from '../src/Components/Folder-Followers/follows/follows';
import stylesA from './styleA.css';

class AppContainer extends HTMLElement {
	follows: Myfollower[] = [];

	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}

	connectedCallback() {
		UserData.forEach((follo) => {
			const followsCard = this.ownerDocument.createElement('custom-follows') as Myfollower;
			followsCard.setAttribute(Attribute3.image, follo.image);
			followsCard.setAttribute(Attribute3.username, follo.username);
			followsCard.setAttribute(Attribute3.name, follo.name);
			this.follows.push(followsCard);
		});
		this.render();
	}

	render() {
		if (this.shadowRoot) {
			this.shadowRoot.innerHTML = `

			<style>
			${stylesA}
		</style>
			<custom-back></custom-back>
			<custom-head></custom-head>


			`;
			const ContenedorFollo = this.ownerDocument.createElement('section');
			ContenedorFollo.className = 'contenedorfollo';
			this.follows.forEach((follo) => {
				ContenedorFollo?.appendChild(follo);
			});
			this.shadowRoot?.appendChild(ContenedorFollo);
		}
	}
}

customElements.define('app-container', AppContainer);