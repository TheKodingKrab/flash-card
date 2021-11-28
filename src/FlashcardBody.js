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
      :host {
        display: inline-block;
        padding: 5px;
        --ctabuttonColor: black;
        --ctabuttonBackgroundColor: white;
        --ctabuttonActiveBackgroundColor: red;
        --ctabuttonActiveColor: white;
        --ctabuttonDisabledBackgroundColor: grey;
        --ctabuttonFontFamily: 'Times New Roman', sans-serif;
      }
      .assignment {
        background-color: var(--ctabuttonBackgroundColor: white;);
        color: var(--ctabuttonColor);
        font-size: 25px;
        font-family: var(--ctabuttonFontFamily);
        border-radius: 12px;
        border: 2px solid black;
        text-decoration: none;
        padding: 6px;
      }
      .assignment:hover,
      .assignment:focus,
      .assignment:active {
        background-color: var(--ctabuttonActiveBackgroundColor);
        color: var(--ctabuttonActiveColor);
      }
      .assignment:disabled {
        color: var(--ctabuttonColor);
        background-color: var(--ctabuttonDisabledBackgroundColor);
        cursor: not-allowed;
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
    this.title = 'Click Here!';
    this.disabled = false;
    this.iconLeft = 'hardware:keyboard-arrow-left';
    this.iconRight = 'hardware:keyboard-arrow-right';
  }

  render() {
    return html`
      <a
        href="${this.link}"
        target="_blank"
        tabindex="-1"
        rel="noopener noreferrer"
      >
        <button class="assignment" ?disabled="${this.disabled}">
          <simple-icon-lite icon="${this.iconRight}"></simple-icon-lite> ${this
            .title}
          <simple-icon-lite icon="${this.iconLeft}"></simple-icon-lite>
        </button>
      </a>
    `;
  }
}
customElements.define(FlashcardBody.tag, FlashcardBody);
