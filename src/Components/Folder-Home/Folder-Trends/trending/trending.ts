import Styles from './trending.css';
class trending extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}

	connectedCallback() {
		this.render();
	}

	render() {
		if  (this.shadowRoot) {
			this.shadowRoot.innerHTML = ``;
			
			const css = this.ownerDocument.createElement('style');
			css.innerHTML = Styles;
			this.shadowRoot?.appendChild(css);
			
			this.shadowRoot.innerHTML = `
			<style> ${Styles}</style>
          
			<div class="box-trending">
				<div class="now">
					<h2>TRENDING RIGHT NOW</h2>
				</div>
				<div class="Show">
					<button>Show more</button>
				</div>
			</div>
            `;
		}
	}
}

customElements.define('custom-trending', trending);
export default trending;
