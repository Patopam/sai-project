import { UserData } from './data/data';
import { trendData } from './data/trendsData';
import './Components/indexP';
import MyUser, { Attribute } from './Components/user/user';
import MyFeed, { Attribute2 } from './Components/feed/feed';
import Myfollower, { Attribute3 } from './Components/Followers/Followers';
import MyTrend, { Attribute4 } from './Components/trends/trend';
import MyWelcome, { Attribute5 } from './Components/welcome/welcome';
import stylesA from './styleA.css';
import user from './Components/user/user';

import Myhead, { Attribute6 } from './Components/head/head';


class AppContainer extends HTMLElement {
	users: MyUser[] = [];
	feeds: MyFeed[] = [];
	followers: Myfollower[] = [];
	trends: MyTrend[] = [];
	welcomes: MyWelcome[] = [];

	head:Myhead[] = []

	currentTrendIndex: number = 0;
	currentTrendIndex2: number = 1;
	currentTrendIndex3: number = 2;
	currentTrendIndex4: number = 4;
	currentUserIndex: number = 0;
	currentUserIndex2: number = 1;
	currentUserIndex3: number = 2;
	currentUserIndex4: number = 3;

	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}

	connectedCallback() {
		trendData.forEach((trend) => {
			const trendCard = this.ownerDocument.createElement('custom-trends') as MyTrend;
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

		UserData.forEach((welcome) => {
			const welcomeCard = this.ownerDocument.createElement('custom-welcome') as MyWelcome;
			welcomeCard.setAttribute(Attribute5.image, welcome.image);
			this.welcomes.push(welcomeCard);
		});

		UserData.forEach((head) => {
			const headcard = this.ownerDocument.createElement('custom-head') as Myhead;
			headcard.setAttribute(Attribute6.image, head.image);
			headcard.setAttribute(Attribute6.username, head.username);
			this.head.push(headcard);
		});
		this.render();
	}

	render() {
		if (this.shadowRoot) {
			this.shadowRoot.innerHTML = `

				<style>
					${stylesA}
				</style>
				<custom-trending></custom-trending>
				<nav-app></nav-app>
				<custom-follobackgrond></custom-follobackgrond>
			`;

			const ContenedorUser = this.ownerDocument.createElement('div');
			ContenedorUser.className = 'contenedoruser';
			ContenedorUser.appendChild(this.users[this.currentUserIndex]);
			this.shadowRoot?.appendChild(ContenedorUser);

			const ContenedorWelcome = this.ownerDocument.createElement('div');
			ContenedorWelcome.className = 'contenedorwelcome';
			ContenedorWelcome.appendChild(this.welcomes[this.currentUserIndex]);
			this.shadowRoot?.appendChild(ContenedorWelcome);

			const ContenedorFeed = this.ownerDocument.createElement('section');
			ContenedorFeed.className = 'contenedorfeed';
			this.feeds.forEach((feed) => {
				ContenedorFeed?.appendChild(feed);
			});
			this.shadowRoot?.appendChild(ContenedorFeed);

			const ContenedorTrends = this.ownerDocument.createElement('div');
			ContenedorTrends.className = 'contenedortrend';
			ContenedorTrends.appendChild(this.trends[this.currentTrendIndex]);
			ContenedorTrends.appendChild(this.trends[this.currentTrendIndex2]);
			ContenedorTrends.appendChild(this.trends[this.currentTrendIndex3]);
			ContenedorTrends.appendChild(this.trends[this.currentTrendIndex4]);
			this.shadowRoot?.appendChild(ContenedorTrends);

			const ContenedorFollowers = this.ownerDocument.createElement('div');
			ContenedorFollowers.className = 'contenedorfollowers';
			ContenedorFollowers.appendChild(this.followers[this.currentUserIndex2]);
			ContenedorFollowers.appendChild(this.followers[this.currentUserIndex3]);
			ContenedorFollowers.appendChild(this.followers[this.currentUserIndex4]);

			this.shadowRoot?.appendChild(ContenedorFollowers);

			this.shadowRoot.appendChild(this.head[this.currentUserIndex]);

		}
	}
}

customElements.define('app-container', AppContainer);
