import { UserData } from './data/data';
import './Components/indexP';
import MyUser, { Attribute } from './Components/user/user';

class AppContainer extends HTMLElement {
	users: MyUser[] = [];
	currentUserIndex: number = 0;

	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
		UserData.forEach((user) => {
			const UserCard = this.ownerDocument.createElement('custom-user') as MyUser;
			UserCard.setAttribute(Attribute.name, user.name);
			UserCard.setAttribute(Attribute.image, user.image);
			UserCard.setAttribute(Attribute.username, user.username);
			UserCard.setAttribute(Attribute.following, String(user.following));
			UserCard.setAttribute(Attribute.followers, String(user.followers));

			this.users.push(UserCard);
		});
	}
	connectedCallback() {
		this.render();
	}
	render() {
		if (this.shadowRoot) {
			this.shadowRoot.innerHTML = '';
			this.shadowRoot.appendChild(this.users[this.currentUserIndex]);
		}
	}
}

customElements.define('app-container', AppContainer);
