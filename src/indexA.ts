import { UserData } from './data/data';
import './Components/indexP';
import MyUser, { Attribute } from './Components/user/user';

class AppContainer extends HTMLElement {
	users: MyUser[] = [];
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
		UserData.forEach((user) => {
			const UserCard = this.ownerDocument.createElement('custom-user') as MyUser;
			UserCard.setAttribute(Attribute.name, user.name);
			UserCard.setAttribute(Attribute.image, user.image);
			UserCard.setAttribute(Attribute.username, user.username);
			this.users.push(UserCard);
		});
	}
	connectedCallback() {
		this.render();
	}
	render() {
		if (this.shadowRoot) {
			this.users.forEach((user) => {
				this.shadowRoot?.appendChild(user);
			});
		}
	}
}

customElements.define('app-container', AppContainer);
