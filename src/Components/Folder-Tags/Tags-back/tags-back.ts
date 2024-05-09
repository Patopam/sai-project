import Styles from './tags-back.css';

class TagsBack extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}

	connectedCallback() {
		this.render();
	}

	render() {
		if (this.shadowRoot) {
			const currentDate = new Date();
			const dayOfWeek = currentDate.toLocaleDateString('en-US', { weekday: 'long' });

			this.shadowRoot.innerHTML = '';

			const css = this.ownerDocument.createElement('style');
			css.innerHTML = Styles;
			this.shadowRoot?.appendChild(css);

			this.shadowRoot.innerHTML = `
                <style> ${Styles}</style>
                <div class="title">
                    <div class="day">
                        <h3>${dayOfWeek}</h3>
                    </div>
                    <div class="now">
                        <h1>Keep inspiring yourself</h1>
                    </div>
                    <div class="end">
                        <h2>Come back tomorrow for more inspiration</h2>
                    </div>
                    <div class="go">
                        <button>Back to Home</button>
                    </div>

                </div>
            `;
		}
	}
}

customElements.define('custom-back', TagsBack);

export default TagsBack;
