import { html, css } from 'lit';
import './LearningIcon.js';

export class FlashcardImage {
  static get tag() {
    return 'flash-card-image';
  }

  constructor() {
    super();
    this.image = null;
    this.text = "image text";
  }

  static get properties() {
    return {
      ...super.properties,
      image: { type: Image, reflect: true },
      text: { type: String, reflect: true },
    };
  }

  static get styles() {
    return [
      ...super.styles,
      css`
        :host {
          display: inline-block;
        }
        img {
          display: inline-flex;
          height: var(--lrn-card-height, 150px);
          width: var(--lrn-card-width, 150px);
          background-color: transparent;
        }
      `,
    ];
  }

  render() {
    return html`
      <div>
        <img alt="${this.text}" src="${this.image}"></img>
        <slot> </slot>
      </div>
    `;
  }
}