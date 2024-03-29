import { UserData } from './data/data';
import { trendData } from './data/trendsData';
import './Components/indexP';
import MyUser, { Attribute } from './Components/user/user';
import MyFeed, { Attribute2 } from './Components/feed/feed';
import Myfollower, { Attribute3 } from './Components/Followers/Followers';
import MyTrend, { Attribute4 } from './Components/trends/trend';

import stylesA from './styleA.css';
class AppContainer extends HTMLElement {
	users: MyUser[] = [];
	feeds: MyFeed[] = [];
	followers: Myfollower[] = [];
	trends: MyTrend[] = [];
	currentTrendIndex: number = 0;
	currentTrendIndex2: number = 1;
	currentTrendIndex3: number = 2;
	currentTrendIndex4: number = 4;
	currentUserIndex: number = 0;
	currentUserIndex2: number = 1;
	currentUserIndex3: number = 2;
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}

	connectedCallback() {
		trendData.forEach((trend) => {
			const trendCard = this.ownerDocument.createElement('custom-trend') as MyTrend;
			trendCard.setAttribute(Attribute4.trend, trend.trend);
			trendCard.setAttribute(Attribute4.post, String(trend.post));
			this.trends.push(trendCard);
		});

		UserData.forEach((user) => {
			const UserCard = this.ownerDocument.createElement('custom-user') as MyUser;
			UserCard.setAttribute(Attribute.name, user.name);
			UserCard.setAttribute(Attribute.image, user.image);
			UserCard.setAttribute(Attribute.username, user.username);
			UserCard.setAttribute(Attribute.following, String(user.following));
			UserCard.setAttribute(Attribute.followers, String(user.followers));
			this.users.push(UserCard);
		});

		UserData.forEach((feed) => {
			const FeedCard = this.ownerDocument.createElement('custom-feed') as MyFeed;
			FeedCard.setAttribute(Attribute2.image, feed.image);
			FeedCard.setAttribute(Attribute2.username, feed.username);
			FeedCard.setAttribute(Attribute2.postimage, feed.postimage);
			this.feeds.push(FeedCard);
		});

		UserData.forEach((follower) => {
			const followerCard = this.ownerDocument.createElement('custom-followers') as Myfollower;
			followerCard.setAttribute(Attribute3.image, follower.image);
			followerCard.setAttribute(Attribute3.username, follower.username);
			followerCard.setAttribute(Attribute3.name, follower.name);
			this.followers.push(followerCard);
		});

		trendData.forEach((trend) => {
			const trendCard = this.ownerDocument.createElement('custom-trend') as MyTrend;
			trendCard.setAttribute(Attribute4.trend, trend.trend);
			trendCard.setAttribute(Attribute4.post, String(trend.post));
			this.trends.push(trendCard);
		});

		this.render();
	}

	render() {
		if (this.shadowRoot) {
			this.shadowRoot.innerHTML = `

				<style>
					${stylesA}
				</style>
				<custom-follobackgrond></custom-follobackgrond>
				<custom-trending></custom-trending>

			`;

			const ContenedorUser = this.ownerDocument.createElement('div');
			ContenedorUser.className = 'contenedoruser';
			ContenedorUser.appendChild(this.users[this.currentUserIndex]);
			this.shadowRoot?.appendChild(ContenedorUser);

			const ContenedorFeed = this.ownerDocument.createElement('section');
			ContenedorFeed.className = 'contenedorfeed';
			this.feeds.forEach((feed) => {
				ContenedorFeed?.appendChild(feed);
			});
			this.shadowRoot?.appendChild(ContenedorFeed);

			const ContenedorFollowers = this.ownerDocument.createElement('div');
			ContenedorFollowers.className = 'contenedorfollowers';
			ContenedorFollowers.appendChild(this.followers[this.currentUserIndex]);
			ContenedorFollowers.appendChild(this.followers[this.currentUserIndex2]);
			ContenedorFollowers.appendChild(this.followers[this.currentUserIndex3]);
			this.shadowRoot?.appendChild(ContenedorFollowers);

			const ContenedorTrends = this.ownerDocument.createElement('div');
			ContenedorTrends.className = 'contenedortrend';
			ContenedorTrends.appendChild(this.trends[this.currentTrendIndex]);
			ContenedorTrends.appendChild(this.trends[this.currentTrendIndex2]);
			ContenedorTrends.appendChild(this.trends[this.currentTrendIndex3]);
			ContenedorTrends.appendChild(this.trends[this.currentTrendIndex4]);
			this.shadowRoot?.appendChild(ContenedorTrends);
		}
	}
}

customElements.define('app-container', AppContainer);
