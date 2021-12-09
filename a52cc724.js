import{S as t,r as e,p as r}from"./d4b63519.js";import"./2bf2e7e3.js";import"./ebca1161.js";import"./78af3006.js";class i extends t{static get tag(){return"krusty-image"}static get styles(){return e`:host{display:block;width:320px;height:265px}img{display:flex;margin:25px auto auto;height:200px;width:275px;border:7px solid #fff;border-radius:30px;box-shadow:0 0 10px grey}.backgroundbox{display:flex;background-color:var(--simple-colors-default-theme-cyan-1);color:var(--simple-colors-default-theme-accent-3);border:1px var(--simple-colors-default-theme-accent-6);border-radius:30px 30px 30px 30px;height:265px;width:320px}.overlay{position:relative}.overlay::before{content:‘’;width:100%;height:100%;position:absolute;border:1px;border-radius:19px 19px 0 0}simple-icon-lite{--simple-icon-height:100px;--simple-icon-width:100px;color:#fff;transform:translate(-50%,-190%);top:50%;left:50%;z-index:100}:host([status='‘pending’']) .overlay::before{display:flex;background:0 0}:host([status='‘correct’']) .overlay::before{display:flex;background:green;filter:opacity(.65)}:host([status='‘incorrect’']) .overlay::before{display:flex;background:red;filter:opacity(.65)}`}constructor(){super(),this.imgSrc=this.keyword,this.imgTag=`https://loremflickr.com/320/240/${this.imgSrc}`,this.status="pending",this.answerIcon=!1,this.icon=""}static get properties(){return{...super.properties,imgSrc:{type:String,reflect:!0,attribute:"img-src"},imgTag:{type:String},status:{type:String,reflect:!0},answerIcon:{type:Boolean,reflect:!0},icon:{type:String}}}updated(t){t.forEach(((t,e)=>{"status"===e&&"correct"===this[e]&&(this.answerIcon=!0,this.icon="check"),"status"===e&&"incorrect"===this[e]&&(this.answerIcon=!0,this.icon="cancel"),"status"===e&&"pending"===this[e]&&(this.answerIcon=!1),"imgSrc"===e&&(this.imgTag=`https://loremflickr.com/320/240/${this.imgSrc}`)}))}firstUpdated(t){super.firstUpdated&&super.firstUpdated(t),this.imgTag=`https://loremflickr.com/320/240/${this.imgSrc}`}connectedCallback(){super.connectedCallback()}disconnectedCallback(){super.disconnectedCallback()}render(){return r` <div> <div class="overlay"> <div class="backgroundbox"> <img src="${this.imgTag}" alt=""> </div> </div> ${this.answerIcon?r`<simple-icon-lite icon="${this.icon}"></simple-icon-lite>`:""} </div> `}static get haxProperties(){return new URL("../lib/FlashCard.haxProperties.json",import.meta.url).href}}customElements.define(i.tag,i);export{i as FlashcardImage};
