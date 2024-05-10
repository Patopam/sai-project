import { imgs } from '../../../../types/img-post';
import Styles from './welcome.css';
import { addpost } from '../../../../services/firebase';
export enum Attribute5 {
	'image' = 'image',
}
const formDataImg: Omit<imgs, 'id'> = {
	link: '',
	user: '',
	avatarImg:'',
};
class welcome extends HTMLElement {
	image?: string;

	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}

	static get observedAttributes() {
		const attrs: Record<Attribute5, null> = {
			image: null,
		};

		return Object.keys(attrs);
	}

	connectedCallback() {
		this.render();
		const Change1 = this.shadowRoot?.querySelector('#changeFomrs1');
		Change1?.addEventListener('change', this.addLink)
		const save1 = this.shadowRoot?.querySelector('custom-photo');
		save1?.addEventListener('click', this.submitform)
		const save2 = this.shadowRoot?.querySelector('custom-video');
		save2?.addEventListener('click', this.submitform)
	}
	addLink(e: any){	
		
		formDataImg.link = e?.target?.value;
		formDataImg.user = 'sofia';
		formDataImg.avatarImg = 'https://i.pinimg.com/564x/67/d3/0e/67d30e7a026241b43225f6c61aeace33.jpg';
	}

	submitform(){
		addpost(formDataImg)
	}
	attributeChangedCallback(propName: Attribute5, oldValue: string | undefined, newValue: string | undefined) {
		switch (propName) {
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


					<div class="welBar">

						<div class="ImgUser">
            <img src="${this.image}"></img>
            	</div>
			<input id="changeFomrs1" class="text" type="text" name="Image link"  placeholder="Image link">
            <div class="Buttons">
            <custom-photo></custom-photo>
            <custom-video></custom-video>
            </div>

					</div>

            `;
		}
	}
}

customElements.define('custom-welcome', welcome);
export default welcome;
