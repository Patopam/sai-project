import { UserData } from './data/data';
import './Components/indexP';
import MyUser, { Attribute } from './Components/user/user';
import MyFeed, { Attribute2 } from './Components/feed/feed';
import Myfollower, { Attribute3 } from './Components/Followers/Followers';
import './styleA.css';
class AppContainer extends HTMLElement {
	users: MyUser[] = [];
	feeds: MyFeed[]=[];
	followers: Myfollower[]=[];
	currentUserIndex: number = 0;
	currentUserIndex2: number = 1;
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	
	

	}
	connectedCallback() {

		UserData.forEach((user) => {
			const UserCard = this.ownerDocument.createElement('custom-user') as MyUser;
			UserCard.setAttribute(Attribute.name, user.name);
			UserCard.setAttribute(Attribute.image, user.image);
			UserCard.setAttribute(Attribute.username, user.username);
			UserCard.setAttribute(Attribute.following, String(user.following));
			UserCard.setAttribute(Attribute.followers, String(user.followers));
			this.users.push(UserCard);
		});

		UserData.forEach((feed)=> {
			const FeedCard = this.ownerDocument.createElement('custom-feed') as MyFeed;
			FeedCard.setAttribute(Attribute2.image, feed.image);
			FeedCard.setAttribute(Attribute2.username, feed.username);
			FeedCard.setAttribute(Attribute2.postimage, feed.postimage);
			this.feeds.push(FeedCard);
		});
		UserData.forEach((follower)=> {
			const followerCard = this.ownerDocument.createElement('custom-followers') as Myfollower;
			followerCard.setAttribute(Attribute3.image, follower.image);
			followerCard.setAttribute(Attribute3.username, follower.username);
			followerCard.setAttribute(Attribute3.name, follower.name);
			this.followers.push(followerCard);
		});

		this.render();
	}
	render() {
		if (this.shadowRoot) {
			this.shadowRoot.innerHTML = `
				<style>
					${styles}
				</style>
				<custom-follobackgrond></custom-follobackgrond>
			`;
			this.shadowRoot.appendChild(this.users[this.currentUserIndex]);

			const pepitoDiv = document.createElement('div');
			pepitoDiv.className = 'pepito';
			this.shadowRoot.appendChild(pepitoDiv);

			this.feeds.forEach((feed) => {
				pepitoDiv?.appendChild(feed);
			});

			const closingDiv = document.createElement('div');
			this.shadowRoot.appendChild(closingDiv);
				
			this.shadowRoot.appendChild(this.followers[this.currentUserIndex]);
			this.shadowRoot.appendChild(this.followers[this.currentUserIndex2]);
		}
	}
}

customElements.define('app-container', AppContainer);
