(()=>{"use strict";var t={91:(t,e,n)=>{n.d(e,{A:()=>r});var o=n(601),i=n.n(o),a=n(314),s=n.n(a)()(i());s.push([t.id,"\n.contenedorfeed{\n\n    position: absolute;\n    width: 50%;\n    height: 50%;\n    left: 25%;\n    right: 25%;\n    top: 25%;\n    display: flex;\n   flex-direction: row;\n   gap: 10px;\n   flex-wrap: wrap;\n    /*background-color: rgb(255, 0, 0);*/\n\n}\n@media (max-width: 800px) {\n    .contenedorfeed{\n        width: 90%;\n        height: 90%;\n        left: 5%;\n        right: 10%;\n\n    } \n\n}\n@media (max-width: 400px) {\n    .contenedorfeed{\n        width: 90%;\n        height: 90%;\n        display: flex;\n        justify-content: center;\n    } \n\n}\n.contenedorfollowers{\n    display: flex;\n    flex-direction: column;\n    position: relative;\n    top: 650px;\n    left: 25px;\n   \n}\n@media (max-width: 800px) {\n    .contenedorfollowers{\n        display: none;\n\n    } \n\n} \n@media (max-width: 800px) {\n    custom-follobackgrond{\n        display: none;\n\n    } \n\n} \n",""]);const r=s},314:t=>{t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n="",o=void 0!==e[5];return e[4]&&(n+="@supports (".concat(e[4],") {")),e[2]&&(n+="@media ".concat(e[2]," {")),o&&(n+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),n+=t(e),o&&(n+="}"),e[2]&&(n+="}"),e[4]&&(n+="}"),n})).join("")},e.i=function(t,n,o,i,a){"string"==typeof t&&(t=[[null,t,void 0]]);var s={};if(o)for(var r=0;r<this.length;r++){var c=this[r][0];null!=c&&(s[c]=!0)}for(var l=0;l<t.length;l++){var d=[].concat(t[l]);o&&s[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),n&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=n):d[2]=n),i&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=i):d[4]="".concat(i)),e.push(d))}},e}},601:t=>{t.exports=function(t){return t[1]}}},e={};function n(o){var i=e[o];if(void 0!==i)return i.exports;var a=e[o]={id:o,exports:{}};return t[o](a,a.exports,n),a.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var o in e)n.o(e,o)&&!n.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{const t=[{id:1,name:"Sofía Rodríguez",username:"SophiArt",image:"https://i.pinimg.com/564x/20/6f/0b/206f0bad1f2f2a4db78e1cd5ba04b1cd.jpg",following:514,followers:1020,postimage:"https://i.pinimg.com/736x/5d/62/56/5d6256b2311dd6e08a5a1e3b269a8c7d.jpg"},{id:2,name:"Lucas Smith",username:"LSmithy",image:"https://i.pinimg.com/564x/6d/5f/78/6d5f78f90d6c86b418dff1f529cb1f0d.jpg",following:409,followers:600,postimage:"https://i.pinimg.com/564x/e1/e9/47/e1e947932d1cb620ee2a4ae7fe7ca7de.jpg"},{id:3,name:"Diego Ramírez",username:"DexRRR",image:"https://i.pinimg.com/564x/3b/17/e8/3b17e8caa28529d8dccac61bc0c70f50.jpg",following:200,followers:13e3,postimage:"https://i.pinimg.com/564x/d2/64/93/d2649367cf87ad44b57b9bd4a9c7b1a3.jpg"},{id:4,name:"Annie Martínez",username:"AnnieWonderland",image:"https://i.pinimg.com/564x/2b/fc/b2/2bfcb2acadbed0094faf6e6af21a186f.jpg",following:20,followers:160,postimage:"https://i.pinimg.com/564x/62/80/53/628053f93672c05dbb85f1ee93ea96e6.jpg"},{id:5,name:"Daniel Rodríguez",username:"DanTheMan",image:"https://i.pinimg.com/564x/34/53/3a/34533a55ffd99a67143f066c38dc31ac.jpg",following:46,followers:1220,postimage:"https://i.pinimg.com/564x/6f/70/10/6f701099714c983225eb3b3038c896ae.jpg"},{id:6,name:"María González",username:"MiaGonz",image:"https://i.pinimg.com/564x/6e/f1/3b/6ef13baae58cd95503b90412340f5b56.jpg",following:345,followers:14e4,postimage:"https://i.pinimg.com/564x/e0/c8/b5/e0c8b55ed4ec89ddc75eefc63bcb7f7b.jpg"},{id:7,name:"Sebastián Cruz",username:"SebbyCruz",image:"https://i.pinimg.com/564x/48/8a/73/488a73a3b069d07df92ac3ec9a143236.jpg",following:129,followers:1452,postimage:"https://i.pinimg.com/736x/41/c8/4b/41c84b371c3ee70d36b5eee78c97cfad.jpg"},{id:8,name:"Valentina Sánchez",username:"Val_intheStars",image:"https://i.pinimg.com/564x/c3/13/25/c31325b4a2c910c880d52f0eb9cbf8d3.jpg",following:400,followers:15e3,postimage:"https://i.pinimg.com/564x/df/fe/87/dffe8757a9fd8c967d904b13ab14f8c3.jpg"},{id:9,name:"Juan López",username:"JayL",image:"https://i.pinimg.com/564x/34/48/9b/34489b9b3f9c585eb9af8c1be80fc0bf.jpg",following:1200,followers:1e3,postimage:"https://i.pinimg.com/564x/46/3e/c8/463ec8a4f6e7f350fe34127cba59e2f9.jpg"},{id:10,name:"Carlos García",username:"CarlitosG",image:"https://i.pinimg.com/564x/e6/fe/f1/e6fef1b1e9f0a0ad375da838f70db178.jpg",following:600,followers:4e4,postimage:"https://i.pinimg.com/564x/ed/21/3a/ed213aade929d0527e1e49b24f096978.jpg"},{id:11,name:"Gabriela Díaz",username:"GabyDOO",image:"https://i.pinimg.com/564x/5e/75/c5/5e75c53d06246a3a1de5b61e70a74bfd.jpg",following:200,followers:1e3,postimage:"https://i.pinimg.com/736x/a5/ab/f8/a5abf825ad3f3882f0daba2fdbdc5113.jpg"},{id:12,name:"Andrés Pérez",username:"AndyPerezL",image:"https://i.pinimg.com/564x/0a/97/d9/0a97d94d23672cd55fe065dfe513fbd0.jpg",following:500,followers:13e3,postimage:"https://i.pinimg.com/564x/da/c2/79/dac2790dafa5acbace3f752cb9d221d4.jpg"},{id:13,name:"Natalia López",username:"NatyStarlet",image:"https://i.pinimg.com/564x/8e/34/9c/8e349c3f1a4efdc1015a36d08f5d33b9.jpg",following:200,followers:1300,postimage:"https://i.pinimg.com/564x/68/ee/59/68ee5916b32d01c5519cf69d9a39f5ac.jpg"},{id:14,name:"Andrea Flores",username:"AndyFOO",image:"https://i.pinimg.com/564x/42/8d/71/428d71de5adc8105091a2825587ef9ee.jpg",following:340,followers:120300,postimage:"https://i.pinimg.com/564x/2e/51/ec/2e51ec76b6ead6d7c6f2affe56df299a.jpg"},{id:15,name:"Isabella Ruiz",username:"BellaRose",image:"https://i.pinimg.com/564x/81/e2/9b/81e29b3c7353b11ca0580bea99e9f41d.jpg",following:20,followers:200,postimage:"https://i.pinimg.com/564x/ca/f3/31/caf331b93b58766479e675c71a739dc0.jpg"},{id:16,name:"Mateo Morales",username:"MattyMo",image:"https://i.pinimg.com/564x/fe/e2/ed/fee2ed6090c25ce98880982ea1e7b1ea.jpg",following:670,followers:9e3,postimage:"https://i.pinimg.com/564x/e8/12/18/e81218689803f1dcf7f3a697362ffda4.jpg"},{id:17,name:"Laura Pérez",username:"LauDreamer",image:"https://i.pinimg.com/564x/dc/b2/ed/dcb2edae125daa3ff3069a8f17a2fb08.jpg",following:100,followers:13e4,postimage:"https://i.pinimg.com/736x/3c/28/3d/3c283d816511ab0369e9efadb39d22df.jpg"},{id:18,name:"Gabriel González",username:"GabeMGonzo",image:"https://i.pinimg.com/564x/b3/f3/42/b3f342b65105eb6143284a110ec857f1.jpg",following:10,followers:12e3,postimage:"https://i.pinimg.com/736x/34/dd/b3/34ddb3cdf51c7e27dd850c59b66356f7.jpg"},{id:19,name:"Camila Torres",username:"CamiSunshine",image:"https://i.pinimg.com/564x/3c/f2/88/3cf2882de424d4c52cbd9bc21bb09bca.jpg",following:2,followers:3e3,postimage:"https://i.pinimg.com/564x/de/07/d0/de07d0dd2ce364c69a7d9d0b958d0683.jpg"},{id:20,name:"Nicolás Martínez",username:"NicoMM",image:"https://i.pinimg.com/564x/41/64/d1/4164d14aaaebaa0034fd29cb7c2beb77.jpg",following:120,followers:14e3,postimage:"https://i.pinimg.com/564x/6d/5f/78/6d5f78f90d6c86b418dff1f529cb1f0d.jpg"}];var e,o,i;!function(t){t.image="image",t.name="name",t.username="username",t.followers="followers",t.following="following"}(e||(e={}));class a extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}static get observedAttributes(){return Object.keys({name:null,image:null,username:null,followers:null,following:null})}connectedCallback(){this.render()}attributeChangedCallback(t,n,o){switch(t){case e.following:this.following=o?Number(o):void 0;break;case e.followers:this.followers=o?Number(o):void 0;break;default:this[t]=o}this.render()}render(){this.shadowRoot&&(this.shadowRoot.innerHTML=`\n\t\t\t<link rel="stylesheet" href="../src/Components/user/user.css" />\n\t\t\t<section class= "user">\n      \t\t\t<div class="top">\n      \t\t\t<img src="${this.image}"></img>\n      \t\t\t<h1>${this.name}</h1>\n      \t\t\t<h2>${this.username}</h2>\n      \t\t\t</div>\n\t\t\t\t\t\t<section class="bottom">\n\t\t\t\t\t\t<div class="following">\n\t\t\t\t\t\t<h1>${this.following}</h1>\n\t\t\t\t\t\t<h2>Following</h2>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class="follower">\n\t\t\t\t\t\t<h1>${this.followers}</h1>\n\t\t\t\t\t\t<h2>Followers</h2>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<nav class="myProfile">My Profle</nav>\n\n\t\t\t\t\t\t</section>\n\n            </section>\n            `)}}customElements.define("custom-user",a),function(t){t.image="image",t.username="username",t.postimage="postimage"}(o||(o={}));class s extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}static get observedAttributes(){return Object.keys({image:null,username:null,postimage:null})}connectedCallback(){this.render()}attributeChangedCallback(t,e,n){this[t]=n,this.render()}render(){this.shadowRoot&&(this.shadowRoot.innerHTML=`\n\t\n\n\n       \t\t <link rel="stylesheet" href="../src/Components/feed/feed.css">\n\t\t\t\t<div class="componente">\n\t\t\t\t\t<div class="info">\n\t\t\t\t\t\t<img src="${this.image}" class="imagen-usuario"></img>\n\t\t\t\t\t\t<p>@${this.username}</p>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="post">\n\t\t\t\t\t\t<img class="imagen-post" src="${this.postimage}"></img>\n\t\t\t\t\t</div>\n\t\t\t\t\t<FaAdn size={24} color="red" />\n\t\t\t\t</div>\n      `)}}customElements.define("custom-feed",s),function(t){t.image="image",t.username="username",t.name="name",t.uid="uid"}(i||(i={}));class r extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}static get observedAttributes(){return Object.keys({image:null,username:null,name:null,uid:null})}connectedCallback(){this.render()}attributeChangedCallback(t,e,n){t===i.uid?this.uid=n?Number(n):void 0:this[t]=n,this.render()}render(){this.shadowRoot&&(this.shadowRoot.innerHTML=`\n            <link rel="stylesheet" href="../src/Components/Followers/Followers.css">\n\t\t\t\n\t\t\t\t\t<div class="infoFollo">\n\t\t\t\t\t\t<div class="ImgUsuario">\n\t\t\t\t\t\t\t<img src="${this.image}" class="imagen-usuario"></img>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class="names">\n\t\t\t\t\t\t\t\t<p class="name-follower">${this.name}</p>\n\t\t\t\t\t\t\t\t<p class="username-follower">@${this.username}</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class="box-button ">\n\t\t\t\t\t\t\t<button>follow</button>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\n            `)}}customElements.define("custom-followers",r);class c extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.render()}render(){this.shadowRoot&&(this.shadowRoot.innerHTML='\n            <link rel="stylesheet" href="../src/Components/FolloBackgroud/FolloBackgrond.css">\n\t\t\t<div class="box-followers">\n\t\t\t\t<div class="Who">\n\t\t\t\t\t<h2>Who is follow you </h2>\n\t\t\t\t</div>\n\t\t\t\t<div class="Show">\n\t\t\t\t\t<p>Show more</p>\n\t\t\t\t</div>\n\t\t\t</div>\n            ')}}customElements.define("custom-follobackgrond",c);var l=n(91);class d extends HTMLElement{constructor(){super(),this.users=[],this.feeds=[],this.followers=[],this.currentUserIndex=0,this.currentUserIndex2=1,this.currentUserIndex3=2,this.attachShadow({mode:"open"}),t.forEach((t=>{const n=this.ownerDocument.createElement("custom-user");n.setAttribute(e.name,t.name),n.setAttribute(e.image,t.image),n.setAttribute(e.username,t.username),n.setAttribute(e.following,String(t.following)),n.setAttribute(e.followers,String(t.followers)),this.users.push(n)}))}connectedCallback(){t.forEach((t=>{const e=this.ownerDocument.createElement("custom-feed");e.setAttribute(o.image,t.image),e.setAttribute(o.username,t.username),e.setAttribute(o.postimage,t.postimage),this.feeds.push(e)})),t.forEach((t=>{const e=this.ownerDocument.createElement("custom-followers");e.setAttribute(i.image,t.image),e.setAttribute(i.username,t.username),e.setAttribute(i.name,t.name),this.followers.push(e)})),this.render()}render(){var t,e;if(this.shadowRoot){this.shadowRoot.innerHTML=`\n\t\t\t\n\t\t\t\t<style>\n\t\t\t\t\t${l.A}\n\t\t\t\t</style>\n\t\t\t\t<custom-follobackgrond></custom-follobackgrond>\n\t\t\t\t\n\t\t\t`,this.shadowRoot.appendChild(this.users[this.currentUserIndex]);const n=this.ownerDocument.createElement("section");n.className="contenedorfeed",this.feeds.forEach((t=>{null==n||n.appendChild(t)})),null===(t=this.shadowRoot)||void 0===t||t.appendChild(n);const o=this.ownerDocument.createElement("div");o.className="contenedorfollowers",o.appendChild(this.followers[this.currentUserIndex]),o.appendChild(this.followers[this.currentUserIndex2]),o.appendChild(this.followers[this.currentUserIndex3]),null===(e=this.shadowRoot)||void 0===e||e.appendChild(o)}}}customElements.define("app-container",d)})()})();