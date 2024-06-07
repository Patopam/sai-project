import Styles from './Sign-In-Forms.css';
import { users } from '../../../types/users-sign';
import { createUser } from '../../../services/firebase';
import { appState } from '../../../store/store';

const formData: Omit<users, 'id'> = {
	name: '',
	username: '',
	email: '',
	password: '',
	confirmPass: '',
};

class Forms extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}

	connectedCallback() {
		this.render();
		const save = this.shadowRoot?.querySelector('custom-singbutton');
		save?.addEventListener('click', this.submitForm.bind(this));
	}

	async submitForm() {
		// Obtener el elemento errorMessage dentro de la función submitForm
		const errorMessageElement = this.shadowRoot?.getElementById('errorMessage');
		if (!errorMessageElement) {
			console.error('Error: errorMessage element not found');
			return;
		}

		errorMessageElement.innerHTML = '';
		errorMessageElement.style.display = 'none';

		// Validación de campos
		if (!formData.name || !formData.username || !formData.email || !formData.password || !formData.confirmPass) {
			errorMessageElement.innerHTML = 'All fields are required';
			errorMessageElement.style.display = 'block';
			return;
		}

		if (formData.password !== formData.confirmPass) {
			errorMessageElement.innerHTML = 'Passwords do not match';
			errorMessageElement.style.display = 'block';
			return;
		}

		if (!isValidEmail(formData.email)) {
			errorMessageElement.innerHTML = 'Invalid email';
			errorMessageElement.style.display = 'block';
			return;
		}

		// Crear usuario si los campos son válidos
		try {
			await createUser(formData.email, formData.password, formData.name, formData.username, formData.confirmPass);
			console.log('User registered successfully');
			// Cambiar la pantalla a Home solo si la creación de usuario fue exitosa
			appState.screen = 'Home';
		} catch (error) {
			console.error('Error registering user: ', error);
			errorMessageElement.innerHTML = 'Error registering user';
			errorMessageElement.style.display = 'block';
		}
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
            <input id="changeForms1" class="Forms" type="text" name="Name" placeholder="Name">
            <input id="changeForms2" class="Forms" type="text" name="Username" placeholder="Username">
            <input id="changeForms3" class="Forms" type="email" name="Email" placeholder="Email">
            <input id="changeForms4" class="Forms" type="password" name="Password" placeholder="Password">
            <input id="changeForms5" class="Forms" type="password" name="ConfirmPassword" placeholder="Confirm Password">
            <div id="errorMessage" style="color: red; display: none;"></div>
          </div>
          <custom-singbutton></custom-singbutton>
        </section>
      `;
		}
	}
}

// Función de validación de email
function isValidEmail(email: string): boolean {
	// Expresión regular para validar el formato del email
	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	return emailRegex.test(email);
}
customElements.define('custom-forms', Forms);
export default Forms;
