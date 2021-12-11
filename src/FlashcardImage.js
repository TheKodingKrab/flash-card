import { html, css } from 'lit';
import '@lrnwebcomponents/simple-icon/lib/simple-icons.js';
import '@lrnwebcomponents/simple-icon/lib/simple-icon-lite.js';
import { SimpleColors } from '@lrnwebcomponents/simple-colors';

export class FlashcardImage extends SimpleColors {
  static get tag() {
    return 'krusty-image';
  }

  static get styles() {
    return css`
      :host {
        display: block;
        width: 320px;
        height: 265px;
      }
      img {
        display: flex;
        margin: 25px auto auto;
        height: 200px;
        width: 275px;
        border: 7px solid white;
        border-radius: 30px;
        box-shadow: 0 0 10px grey;
      }
      .backgroundbox {
        display: flex;
        background-color: var(--simple-colors-default-theme-cyan-1);
        color: var(--simple-colors-default-theme-accent-3);
        border: 1px var(--simple-colors-default-theme-accent-6);
        border-radius: 30px 30px 30px 30px;
        height: 265px;
        width: 320px;
      }
      .overlay {
        position: relative;
      }
      .overlay::before {
        content: ‘’;
        width: 100%;
        height: 100%;
        position: absolute;
        border: 1px;
        border-radius: 19px 19px 0px 0px;
      }
      simple-icon-lite {
        --simple-icon-height: 100px;
        --simple-icon-width: 100px;
        color: white;
        transform: translate(-50%, -190%);
        top: 50%;
        left: 50%;
        z-index: 100;
      }
      :host([status='‘pending’']) .overlay::before {
        display: flex;
        background: transparent;
      }
      :host([status='‘correct’']) .overlay::before {
        display: flex;
        background: green;
        filter: opacity(0.65);
      }
      :host([status='‘incorrect’']) .overlay::before {
        display: flex;
        background: red;
        filter: opacity(0.65);
      }
    `;
  }

  constructor() {
    super();
    this.imgTag = `https://loremflickr.com/320/240/${this.imgSrc}`;
    this.status = 'pending';
    this.answerIcon = false;
    this.icon = '';
  }

  static get properties() {
    return {
      ...super.properties,
      imgSrc: { type: String, reflect: true, attribute: 'img-src' },
      imgTag: { type: String },
      status: { type: String, reflect: true }, // Correct, incorrect, pending
      answerIcon: { type: Boolean, reflect: true },
      icon: { type: String },
    };
  }

  updated(changedProperties) {
    changedProperties.forEach((oldValue, propName) => {
      if (propName === 'status' && this[propName] === 'correct') {
        this.answerIcon = true;
        this.icon = 'check';
      }
      if (propName === 'status' && this[propName] === 'incorrect') {
        this.answerIcon = true;
        this.icon = 'cancel';
      }
      if (propName === 'status' && this[propName] === 'pending') {
        this.answerIcon = false;
      }
      if (propName === 'imgSrc') {
        this.imgTag = `https://loremflickr.com/320/240/${this.imgSrc}`;
        console.log('updated',this.imgTag,this.imgSrc);
      }
    });
  }

  firstUpdated(changedProperties) {
    if (super.firstUpdated) {
      super.firstUpdated(changedProperties);
    }
    this.imgTag = `https://loremflickr.com/320/240/${this.imgSrc}`;
  }

  connectedCallback() {
    super.connectedCallback();
  }

  disconnectedCallback() {
    super.disconnectedCallback();
  }

  render() {
    return html`
      <div>
        <div class="overlay">
          <div class="backgroundbox">
            <img src="${this.imgTag}" alt="" />
          </div>
        </div>
        ${this.answerIcon
          ? html`<simple-icon-lite icon="${this.icon}"></simple-icon-lite>`
          : ``}
      </div>
    `;
  }

  static get haxProperties() {
    return new URL(`../lib/FlashCard.haxProperties.json`, import.meta.url).href;
  }
}
customElements.define(FlashcardImage.tag, FlashcardImage);
