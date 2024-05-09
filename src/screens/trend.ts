import './Components/indexP';
import { trendData } from '../data/trendsData';
import Mytag, { AttributeTa } from '../Components/Folder-Tags/tags/tags';
import stylesB from './trend.css';

class AppContainer extends HTMLElement {
	tags: Mytag[] = [];

	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}

	connectedCallback() {
		trendData.forEach((tag) => {
			const tagCard = this.ownerDocument.createElement('custom-trenFe') as Mytag;
			tagCard.setAttribute(AttributeTa.image, tag.image);
			tagCard.setAttribute(AttributeTa.trend, tag.trend);
			this.tags.push(tagCard);
		});
		this.render();
	}

	render() {
		if (this.shadowRoot) {
			this.shadowRoot.innerHTML = `

			<style>
			${stylesB}
		</style>
			<custom-back></custom-back>
			<custom-head></custom-head>


			`;

			const ContenedorTag = this.ownerDocument.createElement('section');
			ContenedorTag.className = 'contenedortag';
			this.tags.forEach((tag) => {
				ContenedorTag?.appendChild(tag);
			});
			this.shadowRoot?.appendChild(ContenedorTag);
		}
	}
}

customElements.define('app-container', AppContainer);
