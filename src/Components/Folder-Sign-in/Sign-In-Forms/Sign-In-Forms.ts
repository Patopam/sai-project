import Styles from './Sign-In-Forms.css';
import { users } from '../../../types/users-sign';
import { adduser } from '../../../services/firebase';
const formData: Omit<users, 'id'> = {
	name: '',
	username: '',
	email: '',
	passoword: '',
	confirmpass: '',
};
class Forms extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}

	connectedCallback() {
		this.render();
		const Change1 = this.shadowRoot?.querySelector('#changeFomrs1');
		Change1?.addEventListener('change', this.chageName)
		const Change2 = this.shadowRoot?.querySelector('#changeFomrs2');
		Change2?.addEventListener('change', this.chageUsername)
		const Change3 = this.shadowRoot?.querySelector('#changeFomrs3');
		Change3?.addEventListener('change', this.chageEmail)
		const Change4 = this.shadowRoot?.querySelector('#changeFomrs4');
		Change4?.addEventListener('change', this.chagePassword)
		const Change5 = this.shadowRoot?.querySelector('#changeFomrs5');
		Change5?.addEventListener('change', this.chageConfirmPass)
		const save = this.shadowRoot?.querySelector('custom-singbutton');
		save?.addEventListener('click', this.submitform)
	}
	chageName(e: any){	
		
		formData.name = e?.target?.value;
	}	
	chageUsername(e: any){
	
		formData.username = e?.target?.value;
	}
	chageEmail(e: any){
		;
		formData.email = e?.target?.value;
	}
	chagePassword(e: any){
		
		formData.passoword = e?.target?.value;
	}	
	chageConfirmPass(e: any){
		
		formData.confirmpass = e?.target?.value;
	}			
	submitform(){
		adduser(formData)
	}

	render() {
		if (this.shadowRoot) {
			this.shadowRoot.innerHTML = ``;
			
			const css = this.ownerDocument.createElement('style');
			css.innerHTML = Styles;
			this.shadowRoot?.appendChild(css);
		
			this.shadowRoot.innerHTML = `
			<style> ${Styles}</style>

			<section>
			<div class="box-Forms">
				<input id="changeFomrs1" class="Forms" type="text" name="Name"  placeholder="Name">
                <input id="changeFomrs2" class="Forms" type="text" name="Username"  placeholder="Username">
                <input id="changeFomrs3" class="Forms" type="email" name="Email"  placeholder="Email">
                <input id="changeFomrs4" class="Forms" type="Passaword" name="Passaword"  placeholder="Passaword">
                <input id="changeFomrs5" class="Forms" type="Passaword" name="Passaword"  placeholder="Confirm Passaword">
			</div>
				<custom-singbutton></custom-singbutton>
			</section>
			`;
		}
	}
}

customElements.define('custom-forms', Forms);
export default Forms;