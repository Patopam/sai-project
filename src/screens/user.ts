import '../Components/indexP';
import MyUser, { Attribute3 } from '../Components/Config/config-user/config-user';
import { UserData } from '../data//data';
import Myhead, { Attribute6 } from '../Components/Config/head/head';

class AppUser extends HTMLElement {
	users: MyUser[] = [];
	currentUserIndex: number = 0;
	heade: Myhead[] = [];

	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}

	connectedCallback() {
		UserData.forEach((user) => {
			const UserCard = this.ownerDocument.createElement('custom-confiuser') as MyUser;
			UserCard.setAttribute(Attribute3.name, user.name);
			UserCard.setAttribute(Attribute3.image, user.image);
			UserCard.setAttribute(Attribute3.username, user.username);
			this.users.push(UserCard);
		});

		UserData.forEach((heade) => {
			const headcard = this.ownerDocument.createElement('custom-heade') as Myhead;
			headcard.setAttribute(Attribute6.image, heade.image);
			headcard.setAttribute(Attribute6.username, heade.username);
			this.heade.push(headcard);
		});
		this.render();
	}

	render() {
		if (this.shadowRoot) {
			this.shadowRoot.innerHTML = `

                <custom-backed></custom-backed>
                <custom-heade></custom-heade>
            `;

			const ContenedorUser = this.ownerDocument.createElement('div');
			ContenedorUser.className = 'contenedoruser';
			ContenedorUser.appendChild(this.users[this.currentUserIndex]);
			this.shadowRoot?.appendChild(ContenedorUser);

			this.users[this.currentUserIndex].addEventListener('click', () => {
				const newImage = prompt('Enter new image URL:');
				if (newImage) {
					this.users[this.currentUserIndex].setAttribute(Attribute3.image, newImage);
					localStorage.setItem('userImage', newImage);
				}
			});
			this.shadowRoot.appendChild(this.heade[this.currentUserIndex]);
		}
	}
}

customElements.define('app-user', AppUser);
