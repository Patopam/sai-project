(()=>{"use strict";var t={91:(t,e,n)=>{n.d(e,{A:()=>d});var o=n(601),s=n.n(o),i=n(314),a=n.n(i)()(s());a.push([t.id,"/*feed*/\n\n.contenedorfeed{\n\n    position: absolute;\n    width: 50%;\n    height: 50%;\n    left: 25%;\n    right: 25%;\n    top: 25%;\n    display: flex;\n   flex-direction: row;\n   gap: 10px;\n   flex-wrap: wrap;\n    /*background-color: rgb(255, 0, 0);*/\n\n}\n\n@media (max-width: 800px) {\n    .contenedorfeed{\n        width: 90%;\n        height: 90%;\n        left: 5%;\n        right: 10%;\n\n    } \n\n}\n@media (max-width: 400px) {\n    .contenedorfeed{\n        width: 90%;\n        height: 90%;\n        display: flex;\n        justify-content: center;\n    } \n\n}\n\n/*followers*/\n\n.contenedorfollowers{\n    display: flex;\n    flex-direction: column;\n    position: relative;\n    top: 650px;\n    left: 25px;\n   \n}\nnav-app{\n    display: none;\n}\n@media (max-width: 800px) {\n    nav-app{\n        display: flex;\n\n    } \n\n}\n@media (max-width: 800px) {\n    .contenedorfollowers{\n        display: none;\n\n    } \n\n} \n@media (max-width: 800px) {\n    custom-follobackgrond{\n        display: none;\n\n    } \n\n} \n\n/*user*/\n\n.contenedoruser {\n\tdisplay: flex;\n\tflex-direction: column;\n\tposition: relative;\n\ttop: 80px;\n\tleft: 20px;\n}\n\n@media (max-width: 800px) {\n\t.contenedoruser {\n\t\tdisplay: none;\n\t}\n}\n\n/*trend*/\n\n.contenedortrend {\n\tflex-direction: column;\n\tposition: relative;\n\tleft: 80%;\n}\n\ncustom-trending {\n\tflex-direction: column;\n\tposition: relative;\n\ttop: 80px;\n\tleft: 80%;\n}\n\n@media (max-width: 800px) {\n\t.contenedortrend {\n\t\tdisplay: none;\n\t}\n}\n\n@media (max-width: 800px) {\n\tconstume-trending {\n\t\tdisplay: none;\n\t}\n}",""]);const d=a},314:t=>{t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n="",o=void 0!==e[5];return e[4]&&(n+="@supports (".concat(e[4],") {")),e[2]&&(n+="@media ".concat(e[2]," {")),o&&(n+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),n+=t(e),o&&(n+="}"),e[2]&&(n+="}"),e[4]&&(n+="}"),n})).join("")},e.i=function(t,n,o,s,i){"string"==typeof t&&(t=[[null,t,void 0]]);var a={};if(o)for(var d=0;d<this.length;d++){var r=this[d][0];null!=r&&(a[r]=!0)}for(var l=0;l<t.length;l++){var c=[].concat(t[l]);o&&a[c[0]]||(void 0!==i&&(void 0===c[5]||(c[1]="@layer".concat(c[5].length>0?" ".concat(c[5]):""," {").concat(c[1],"}")),c[5]=i),n&&(c[2]?(c[1]="@media ".concat(c[2]," {").concat(c[1],"}"),c[2]=n):c[2]=n),s&&(c[4]?(c[1]="@supports (".concat(c[4],") {").concat(c[1],"}"),c[4]=s):c[4]="".concat(s)),e.push(c))}},e}},601:t=>{t.exports=function(t){return t[1]}}},e={};function n(o){var s=e[o];if(void 0!==s)return s.exports;var i=e[o]={id:o,exports:{}};return t[o](i,i.exports,n),i.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var o in e)n.o(e,o)&&!n.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{const t=[{id:1,name:"Sofía Rodríguez",username:"SophiArt",image:"https://i.pinimg.com/564x/20/6f/0b/206f0bad1f2f2a4db78e1cd5ba04b1cd.jpg",following:514,followers:1020,postimage:"https://i.pinimg.com/736x/5d/62/56/5d6256b2311dd6e08a5a1e3b269a8c7d.jpg"},{id:2,name:"Lucas Smith",username:"LSmithy",image:"https://i.pinimg.com/564x/6d/5f/78/6d5f78f90d6c86b418dff1f529cb1f0d.jpg",following:409,followers:600,postimage:"https://i.pinimg.com/564x/e1/e9/47/e1e947932d1cb620ee2a4ae7fe7ca7de.jpg"},{id:3,name:"Diego Ramírez",username:"DexRRR",image:"https://i.pinimg.com/564x/3b/17/e8/3b17e8caa28529d8dccac61bc0c70f50.jpg",following:200,followers:13e3,postimage:"https://i.pinimg.com/564x/d2/64/93/d2649367cf87ad44b57b9bd4a9c7b1a3.jpg"},{id:4,name:"Annie Martínez",username:"AnnieWonderland",image:"https://i.pinimg.com/564x/2b/fc/b2/2bfcb2acadbed0094faf6e6af21a186f.jpg",following:20,followers:160,postimage:"https://i.pinimg.com/564x/62/80/53/628053f93672c05dbb85f1ee93ea96e6.jpg"},{id:5,name:"Daniel Rodríguez",username:"DanTheMan",image:"https://i.pinimg.com/564x/34/53/3a/34533a55ffd99a67143f066c38dc31ac.jpg",following:46,followers:1220,postimage:"https://i.pinimg.com/564x/6f/70/10/6f701099714c983225eb3b3038c896ae.jpg"},{id:6,name:"María González",username:"MiaGonz",image:"https://i.pinimg.com/564x/6e/f1/3b/6ef13baae58cd95503b90412340f5b56.jpg",following:345,followers:14e4,postimage:"https://i.pinimg.com/564x/e0/c8/b5/e0c8b55ed4ec89ddc75eefc63bcb7f7b.jpg"},{id:7,name:"Sebastián Cruz",username:"SebbyCruz",image:"https://i.pinimg.com/564x/48/8a/73/488a73a3b069d07df92ac3ec9a143236.jpg",following:129,followers:1452,postimage:"https://i.pinimg.com/736x/41/c8/4b/41c84b371c3ee70d36b5eee78c97cfad.jpg"},{id:8,name:"Valentina Sánchez",username:"Val_intheStars",image:"https://i.pinimg.com/564x/c3/13/25/c31325b4a2c910c880d52f0eb9cbf8d3.jpg",following:400,followers:15e3,postimage:"https://i.pinimg.com/564x/df/fe/87/dffe8757a9fd8c967d904b13ab14f8c3.jpg"},{id:9,name:"Juan López",username:"JayL",image:"https://i.pinimg.com/564x/34/48/9b/34489b9b3f9c585eb9af8c1be80fc0bf.jpg",following:1200,followers:1e3,postimage:"https://i.pinimg.com/564x/46/3e/c8/463ec8a4f6e7f350fe34127cba59e2f9.jpg"},{id:10,name:"Carlos García",username:"CarlitosG",image:"https://i.pinimg.com/564x/e6/fe/f1/e6fef1b1e9f0a0ad375da838f70db178.jpg",following:600,followers:4e4,postimage:"https://i.pinimg.com/564x/ed/21/3a/ed213aade929d0527e1e49b24f096978.jpg"},{id:11,name:"Gabriela Díaz",username:"GabyDOO",image:"https://i.pinimg.com/564x/5e/75/c5/5e75c53d06246a3a1de5b61e70a74bfd.jpg",following:200,followers:1e3,postimage:"https://i.pinimg.com/736x/a5/ab/f8/a5abf825ad3f3882f0daba2fdbdc5113.jpg"},{id:12,name:"Andrés Pérez",username:"AndyPerezL",image:"https://i.pinimg.com/564x/0a/97/d9/0a97d94d23672cd55fe065dfe513fbd0.jpg",following:500,followers:13e3,postimage:"https://i.pinimg.com/564x/da/c2/79/dac2790dafa5acbace3f752cb9d221d4.jpg"},{id:13,name:"Natalia López",username:"NatyStarlet",image:"https://i.pinimg.com/564x/8e/34/9c/8e349c3f1a4efdc1015a36d08f5d33b9.jpg",following:200,followers:1300,postimage:"https://i.pinimg.com/564x/68/ee/59/68ee5916b32d01c5519cf69d9a39f5ac.jpg"},{id:14,name:"Andrea Flores",username:"AndyFOO",image:"https://i.pinimg.com/564x/42/8d/71/428d71de5adc8105091a2825587ef9ee.jpg",following:340,followers:120300,postimage:"https://i.pinimg.com/564x/2e/51/ec/2e51ec76b6ead6d7c6f2affe56df299a.jpg"},{id:15,name:"Isabella Ruiz",username:"BellaRose",image:"https://i.pinimg.com/564x/81/e2/9b/81e29b3c7353b11ca0580bea99e9f41d.jpg",following:20,followers:200,postimage:"https://i.pinimg.com/564x/ca/f3/31/caf331b93b58766479e675c71a739dc0.jpg"},{id:16,name:"Mateo Morales",username:"MattyMo",image:"https://i.pinimg.com/564x/fe/e2/ed/fee2ed6090c25ce98880982ea1e7b1ea.jpg",following:670,followers:9e3,postimage:"https://i.pinimg.com/564x/e8/12/18/e81218689803f1dcf7f3a697362ffda4.jpg"},{id:17,name:"Laura Pérez",username:"LauDreamer",image:"https://i.pinimg.com/564x/dc/b2/ed/dcb2edae125daa3ff3069a8f17a2fb08.jpg",following:100,followers:13e4,postimage:"https://i.pinimg.com/736x/3c/28/3d/3c283d816511ab0369e9efadb39d22df.jpg"},{id:18,name:"Gabriel González",username:"GabeMGonzo",image:"https://i.pinimg.com/564x/b3/f3/42/b3f342b65105eb6143284a110ec857f1.jpg",following:10,followers:12e3,postimage:"https://i.pinimg.com/736x/34/dd/b3/34ddb3cdf51c7e27dd850c59b66356f7.jpg"},{id:19,name:"Camila Torres",username:"CamiSunshine",image:"https://i.pinimg.com/564x/3c/f2/88/3cf2882de424d4c52cbd9bc21bb09bca.jpg",following:2,followers:3e3,postimage:"https://i.pinimg.com/564x/de/07/d0/de07d0dd2ce364c69a7d9d0b958d0683.jpg"},{id:20,name:"Nicolás Martínez",username:"NicoMM",image:"https://i.pinimg.com/564x/41/64/d1/4164d14aaaebaa0034fd29cb7c2beb77.jpg",following:120,followers:14e3,postimage:"https://i.pinimg.com/564x/6d/5f/78/6d5f78f90d6c86b418dff1f529cb1f0d.jpg"}],e=[{id:1,trend:"Cats",post:21},{id:2,trend:"Paint",post:20.7},{id:3,trend:"Sketch",post:20},{id:4,trend:"Mouse",post:19.68},{id:5,trend:"Halloween",post:19.4},{id:6,trend:"Oil Painting",post:18},{id:7,trend:"Watercolors",post:17.9},{id:8,trend:"Photography",post:17.05},{id:9,trend:"Green",post:16.78},{id:10,trend:"Forest",post:16.2}];var o,s,i,a;!function(t){t.image="image",t.name="name",t.username="username",t.followers="followers",t.following="following"}(o||(o={}));class d extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}static get observedAttributes(){return Object.keys({name:null,image:null,username:null,followers:null,following:null})}connectedCallback(){this.render()}attributeChangedCallback(t,e,n){switch(t){case o.following:this.following=n?Number(n):void 0;break;case o.followers:this.followers=n?Number(n):void 0;break;default:this[t]=n}this.render()}render(){this.shadowRoot&&(this.shadowRoot.innerHTML=`\n\t\t\t<link rel="stylesheet" href="../src/Components/user/user.css" />\n\t\t\t<section class= "user">\n      \t\t\t<div class="top">\n      \t\t\t<img src="${this.image}"></img>\n      \t\t\t<h1>${this.name}</h1>\n      \t\t\t<h2>${this.username}</h2>\n      \t\t\t</div>\n\t\t\t\t\t\t<section class="bottom">\n\t\t\t\t\t\t<div class="following">\n\t\t\t\t\t\t<h1>${this.following}</h1>\n\t\t\t\t\t\t<h2>Following</h2>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class="follower">\n\t\t\t\t\t\t<h1>${this.followers}</h1>\n\t\t\t\t\t\t<h2>Followers</h2>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<nav class="myProfile">My Profle</nav>\n\n\t\t\t\t\t\t</section>\n\n            </section>\n            `)}}customElements.define("custom-user",d),function(t){t.image="image",t.username="username",t.postimage="postimage"}(s||(s={}));class r extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}static get observedAttributes(){return Object.keys({image:null,username:null,postimage:null})}connectedCallback(){this.render()}attributeChangedCallback(t,e,n){this[t]=n,this.render()}render(){this.shadowRoot&&(this.shadowRoot.innerHTML=`\n\t\n\n\n       \t\t <link rel="stylesheet" href="../src/Components/feed/feed.css">\n\t\t\t\t<div class="componente">\n\t\t\t\t\t<div class="info">\n\t\t\t\t\t\t<img src="${this.image}" class="imagen-usuario"></img>\n\t\t\t\t\t\t<p>@${this.username}</p>\n\t\t\t\t\t\t<Fa2 size={24} color="blue"/>\n\t\t\t\t\t</div>\n\t\t\t\t\t\t<i class="fa-solid fa-heart" style="color: #ff1a1a;"></i>\n\t\t\t\t\t<div class="post">\n\t\t\t\t\t\t<img class="imagen-post" src="${this.postimage}"></img>\n\t\t\t\t\t</div>\n\t\t\t\t\t\n\t\t\t\t</div>\n      `)}}customElements.define("custom-feed",r),function(t){t.image="image",t.username="username",t.name="name",t.uid="uid"}(i||(i={}));class l extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}static get observedAttributes(){return Object.keys({image:null,username:null,name:null,uid:null})}connectedCallback(){this.render()}attributeChangedCallback(t,e,n){t===i.uid?this.uid=n?Number(n):void 0:this[t]=n,this.render()}render(){this.shadowRoot&&(this.shadowRoot.innerHTML=`\n            <link rel="stylesheet" href="../src/Components/Followers/Followers.css">\n\t\t\t\n\t\t\t\t\t<div class="infoFollo">\n\t\t\t\t\t\t<div class="ImgUsuario">\n\t\t\t\t\t\t\t<img src="${this.image}" class="imagen-usuario"></img>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class="names">\n\t\t\t\t\t\t\t\t<p class="name-follower">${this.name}</p>\n\t\t\t\t\t\t\t\t<p class="username-follower">@${this.username}</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class="box-button ">\n\t\t\t\t\t\t\t<button>follow</button>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\n            `)}}customElements.define("custom-followers",l);class c extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.render()}render(){this.shadowRoot&&(this.shadowRoot.innerHTML='\n            <link rel="stylesheet" href="../src/Components/FolloBackgroud/FolloBackgrond.css">\n\t\t\t<div class="box-followers">\n\t\t\t\t<div class="Who">\n\t\t\t\t\t<h2>Who is follow you </h2>\n\t\t\t\t</div>\n\t\t\t\t<div class="Show">\n\t\t\t\t\t<p>Show more</p>\n\t\t\t\t</div>\n\t\t\t</div>\n            ')}}customElements.define("custom-follobackgrond",c);class m extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.render()}render(){this.shadowRoot&&(this.shadowRoot.innerHTML='\n            <link rel="stylesheet" href="../src/Components/nav-app/nav-app.css">\n           <div class="box-nav">\n                <div class="box-buttoms">\n                    <div class="home">\n                        <button class="Box-boton1">home</button>\n                    </div>\n                    <div class="search">\n                        <button class="Box-boton2">search</button>\n                    </div>\n                    <div class="photo">\n                        <button class="Box-boton3">photo</button>\n                    </div>\n                    <div class="followers">\n                        <button class="Box-boton4">followers</button>\n                    </div>\n                    <div class="user">\n                        <button class="Box-boton5">user</button>\n                    </div>\n                </div>\n           </div>\n            ')}}customElements.define("nav-app",m),function(t){t.uid="uid",t.trend="trend",t.post="post"}(a||(a={}));class p extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}static get observedAttributes(){return Object.keys({uid:null,trend:null,post:null})}connectedCallback(){this.render()}attributeChangedCallback(t,e,n){switch(t){case a.uid:this.uid=n?Number(n):void 0;break;case a.post:this.post=n?Number(n):void 0}this.render()}render(){this.shadowRoot&&(this.shadowRoot.innerHTML=`\n            <link rel="stylesheet" href="../src/Components/trends/trend.css">\n            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />\n\n            <div class="Trendss">\n\n\t\t\t\t\t\t<div class="Tnames">\n\t\t\t\t\t\t\t\t<h2 class="name-trend">#${this.trend}</h2>\n\t\t\t\t\t\t\t\t<p class="number-post">@${this.post} Posts</p>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t<div class="dots">\n            <span class="material-symbols-outlined">more_horiz</span>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\n            </div>\n\n\n            `)}}customElements.define("custom-trends",p);class h extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.render()}render(){this.shadowRoot&&(this.shadowRoot.innerHTML='\n            <link rel="stylesheet" href="../src/Components/trending/trending.css">\n\t\t\t<div class="box-trending">\n\t\t\t\t<div class="now">\n\t\t\t\t\t<h2>TRENDING RIGHT NOW</h2>\n\t\t\t\t</div>\n\t\t\t\t<div class="Show">\n\t\t\t\t\t<p>Show more</p>\n\t\t\t\t</div>\n\t\t\t</div>\n            ')}}customElements.define("custom-trending",h);var f=n(91);class u extends HTMLElement{constructor(){super(),this.users=[],this.feeds=[],this.followers=[],this.trends=[],this.currentTrendIndex=0,this.currentTrendIndex2=1,this.currentTrendIndex3=2,this.currentTrendIndex4=4,this.currentUserIndex=0,this.currentUserIndex2=1,this.currentUserIndex3=2,this.attachShadow({mode:"open"})}connectedCallback(){e.forEach((t=>{const e=this.ownerDocument.createElement("custom-trend");e.setAttribute(a.trend,t.trend),e.setAttribute(a.post,String(t.post)),this.trends.push(e)})),t.forEach((t=>{const e=this.ownerDocument.createElement("custom-user");e.setAttribute(o.name,t.name),e.setAttribute(o.image,t.image),e.setAttribute(o.username,t.username),e.setAttribute(o.following,String(t.following)),e.setAttribute(o.followers,String(t.followers)),this.users.push(e)})),t.forEach((t=>{const e=this.ownerDocument.createElement("custom-feed");e.setAttribute(s.image,t.image),e.setAttribute(s.username,t.username),e.setAttribute(s.postimage,t.postimage),this.feeds.push(e)})),t.forEach((t=>{const e=this.ownerDocument.createElement("custom-followers");e.setAttribute(i.image,t.image),e.setAttribute(i.username,t.username),e.setAttribute(i.name,t.name),this.followers.push(e)})),this.render()}render(){var t,e,n,o;if(this.shadowRoot){this.shadowRoot.innerHTML=`\n\t\t\t\n\t\t\t\t<style>\n\t\t\t\t\t${f.A}\n\t\t\t\t</style>\n\t\t\t\t<custom-follobackgrond></custom-follobackgrond>\n\t\t\t\t<nav-app></nav-app>\n\t\t\t\t<custom-trending></custom-trending>\t\n\t\t\t`;const s=this.ownerDocument.createElement("div");s.className="contenedoruser",s.appendChild(this.users[this.currentUserIndex]),null===(t=this.shadowRoot)||void 0===t||t.appendChild(s);const i=this.ownerDocument.createElement("section");i.className="contenedorfeed",this.feeds.forEach((t=>{null==i||i.appendChild(t)})),null===(e=this.shadowRoot)||void 0===e||e.appendChild(i);const a=this.ownerDocument.createElement("div");a.className="contenedorfollowers",a.appendChild(this.followers[this.currentUserIndex]),a.appendChild(this.followers[this.currentUserIndex2]),a.appendChild(this.followers[this.currentUserIndex3]),null===(n=this.shadowRoot)||void 0===n||n.appendChild(a);const d=this.ownerDocument.createElement("div");d.className="contenedortrend",d.appendChild(this.trends[this.currentTrendIndex]),d.appendChild(this.trends[this.currentTrendIndex2]),d.appendChild(this.trends[this.currentTrendIndex3]),d.appendChild(this.trends[this.currentTrendIndex4]),null===(o=this.shadowRoot)||void 0===o||o.appendChild(d)}}}customElements.define("app-container",u)})()})();