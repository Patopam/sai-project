(() => {
	'use strict';
	const e = [
		{
			id: 1,
			name: 'Sofía Rodríguez',
			username: 'SophiArt',
			image: 'https://i.pinimg.com/564x/20/6f/0b/206f0bad1f2f2a4db78e1cd5ba04b1cd.jpg',
		},
		{
			id: 2,
			name: 'Lucas Smith',
			username: 'LSmithy',
			image: 'https://i.pinimg.com/564x/6d/5f/78/6d5f78f90d6c86b418dff1f529cb1f0d.jpg',
		},
		{
			id: 3,
			name: 'Diego Ramírez',
			username: 'DexRRR',
			image: 'https://i.pinimg.com/564x/3b/17/e8/3b17e8caa28529d8dccac61bc0c70f50.jpg',
		},
		{
			id: 4,
			name: 'Annie Martínez',
			username: 'AnnieWonderland',
			image: 'https://i.pinimg.com/564x/2b/fc/b2/2bfcb2acadbed0094faf6e6af21a186f.jpg',
		},
		{
			id: 5,
			name: 'Daniel Rodríguez',
			username: 'DanTheMan',
			image: 'https://i.pinimg.com/564x/34/53/3a/34533a55ffd99a67143f066c38dc31ac.jpg',
		},
		{
			id: 6,
			name: 'María González',
			username: 'MiaGonz',
			image: 'https://i.pinimg.com/564x/6e/f1/3b/6ef13baae58cd95503b90412340f5b56.jpg',
		},
		{
			id: 7,
			name: 'Sebastián Cruz',
			username: 'SebbyCruz',
			image: 'https://i.pinimg.com/564x/48/8a/73/488a73a3b069d07df92ac3ec9a143236.jpg',
		},
		{
			id: 8,
			name: 'Valentina Sánchez',
			username: 'Val_intheStars',
			image: 'https://i.pinimg.com/564x/c3/13/25/c31325b4a2c910c880d52f0eb9cbf8d3.jpg',
		},
		{
			id: 9,
			name: 'Juan López',
			username: 'JayL',
			image: 'https://i.pinimg.com/564x/34/48/9b/34489b9b3f9c585eb9af8c1be80fc0bf.jpg',
		},
		{
			id: 10,
			name: 'Carlos García',
			username: 'CarlitosG',
			image: 'https://i.pinimg.com/564x/e6/fe/f1/e6fef1b1e9f0a0ad375da838f70db178.jpg',
		},
		{
			id: 11,
			name: 'Gabriela Díaz',
			username: 'GabyDOO',
			image: 'https://i.pinimg.com/564x/5e/75/c5/5e75c53d06246a3a1de5b61e70a74bfd.jpg',
		},
		{
			id: 12,
			name: 'Andrés Pérez',
			username: 'AndyPerezL',
			image: 'https://i.pinimg.com/564x/0a/97/d9/0a97d94d23672cd55fe065dfe513fbd0.jpg',
		},
		{
			id: 13,
			name: 'Natalia López',
			username: 'NatyStarlet',
			image: 'https://i.pinimg.com/564x/8e/34/9c/8e349c3f1a4efdc1015a36d08f5d33b9.jpg',
		},
		{
			id: 14,
			name: 'Andrea Flores',
			username: 'AndyFOO',
			image: 'https://i.pinimg.com/564x/42/8d/71/428d71de5adc8105091a2825587ef9ee.jpg',
		},
		{
			id: 15,
			name: 'Isabella Ruiz',
			username: 'BellaRose',
			image: 'https://i.pinimg.com/564x/81/e2/9b/81e29b3c7353b11ca0580bea99e9f41d.jpg',
		},
		{
			id: 16,
			name: 'Mateo Morales',
			username: 'MattyMo',
			image: 'https://i.pinimg.com/564x/fe/e2/ed/fee2ed6090c25ce98880982ea1e7b1ea.jpg',
		},
		{
			id: 17,
			name: 'Laura Pérez',
			username: 'LauDreamer',
			image: 'https://i.pinimg.com/564x/dc/b2/ed/dcb2edae125daa3ff3069a8f17a2fb08.jpg',
		},
		{
			id: 18,
			name: 'Gabriel González',
			username: 'GabeMGonzo',
			image: 'https://i.pinimg.com/564x/b3/f3/42/b3f342b65105eb6143284a110ec857f1.jpg',
		},
		{
			id: 19,
			name: 'Camila Torres',
			username: 'CamiSunshine',
			image: 'https://i.pinimg.com/564x/3c/f2/88/3cf2882de424d4c52cbd9bc21bb09bca.jpg',
		},
		{
			id: 20,
			name: 'Nicolás Martínez',
			username: 'NicoMM',
			image: 'https://i.pinimg.com/564x/41/64/d1/4164d14aaaebaa0034fd29cb7c2beb77.jpg',
		},
	];
	var a;
	!(function (e) {
		(e.image = 'image'), (e.name = 'name'), (e.username = 'username');
	})(a || (a = {}));
	class i extends HTMLElement {
		constructor() {
			super(), this.attachShadow({ mode: 'open' });
		}
		static get observedAttributes() {
			return Object.keys({ name: null, image: null, username: null });
		}
		connectedCallback() {
			this.render();
		}
		attributeChangedCallback(e, a, i) {
			(this[e] = i), this.render();
		}
		render() {
			this.shadowRoot &&
				(this.shadowRoot.innerHTML = `\n      <link rel="stylesheet" href="../user/user.css">\n      <section>\n      <section class="top">\n      <img src="${this.image}"></img>\n      <h1>${this.name}</h1>\n      <h2>${this.username}</h2>\n      </section>\n\n            </section>\n            `);
		}
	}
	customElements.define('custom-user', i);
	class n extends HTMLElement {
		constructor() {
			super(),
				(this.Users = []),
				this.attachShadow({ mode: 'open' }),
				e.forEach((e) => {
					const i = this.ownerDocument.createElement('custom-profile');
					i.setAttribute(a.name, e.name),
						i.setAttribute(a.image, e.image),
						i.setAttribute(a.username, e.username),
						this.Users.push(i);
				});
		}
		connectedCallback() {
			this.render();
		}
		render() {
			this.shadowRoot &&
				this.Users.forEach((e) => {
					var a;
					null === (a = this.shadowRoot) || void 0 === a || a.appendChild(e);
				});
		}
	}
	customElements.define('app-container', n);
})();
