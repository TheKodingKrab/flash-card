import { LitElement, html, css } from 'lit';
import { I18NMixin } from '@lrnwebcomponents/i18n-manager/lib/I18NMixin.js';
import '@lrnwebcomponents/simple-icon/lib/simple-icon-lite.js';
import '@lrnwebcomponents/simple-icon/lib/simple-icons.js';

export class FlashcardBody extends I18NMixin(LitElement) {
  static get tag() {
    return 'krusty-card-body';
  }

  static get styles() {
    return css`
      button#check {
        background-color: #0066a2;
        color: white;
        font-size: 12px;
        margin: none;
        padding: 10px;
        border-radius: 20px 20px 20px 20px;
        border-width: 1px;
      }

      button#retry {
        background-color: #0066a2;
        color: white;
        font-size: 12px;
        margin: none;
        padding: 10px;
        border-radius: 20px 20px 20px 20px;
        border-width: 1px;
      }

      button:hover {
        opacity: 0.7;
        cursor: pointer;
      }
    `;
  }

  static get properties() {
    return {
      title: { type: String },
      link: { type: String },
      disabled: { type: Boolean, reflect: true },
      icon: { type: String },
    };
  }

  constructor() {
    super();
    this.title = 'Check Answer';
    this.disabled = false;
    this.iconLeft = 'done';
  }

  render() {
    return html`
      <a
        href="${this.link}"
        target="_blank"
        tabindex="-1"
        rel="noopener noreferrer"
      >
        <button id="check">
          ${this.title}
          <simple-icon-lite icon="${this.iconLeft}"></simple-icon-lite>
        </button>
        <br />
        <br />
        <button id="retry">
          ${this.title}
          <simple-icon-lite icon="${this.iconLeft}"></simple-icon-lite>
        </button>
      </a>
    `;
  }
}
customElements.define(FlashcardBody.tag, FlashcardBody);
