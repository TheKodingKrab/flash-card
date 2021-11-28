import { html, css } from 'lit';
import './LearningIcon.js';

export class FlashcardImage {
  static get tag() {
    return 'flash-card-image';
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

  constructor() {
    super();
    this.imgSrc = 'dog';
    this.imgTag = `https://loremflickr.com/320/240/${this.imgSrc}`;
    this.status = 'pending';
    this.icon = '';
  }

  static get properties() {
    return {
      ...super.properties,
      imgSrc: { type: String, reflect: true, attribute: 'img-src' },
      imgTag: { type: String },
      status: { type: String, reflect: true },
      icon: { type: String },
    };
  }

  firstUpdated(changedProperties) {
    if (super.firstUpdated) {
      super.firstUpdated(changedProperties);
    }
    this.imgTag = `https://loremflickr.com/320/240/${this.imgSrc}`;
  }

  render() {
    return html`
      <div>
        <div class="overlay">
          <div class="backgroundbox">
            <img src="${this.imgTag}" alt="default img" />
          </div>
        </div>
      </div>
    `;
  }
}