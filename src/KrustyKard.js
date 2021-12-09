import { html, css } from 'lit';
import { SimpleColors } from '@lrnwebcomponents/simple-colors';
export class KrustyKard extends SimpleColors {
  static get tag() {
    return 'krusty-kard';
  }

  constructor() {
    super();
    setTimeout(() => {
      import('./FlashcardBody.js');
      import('./FlashcardImage.js');
    }, 0);
  }

  static get properties() {
    return {
      ...super.properties,
      inverted: { type: Boolean },
      keyword: { type: String },
      front: {type: String },
      back:{type: String },
    };
  }

  static get styles() {
    return [
      ...super.styles,
      css`
        :host {
          display: block;
          border: 2px solid var(--simple-colors-default-theme-accent-3);
          min-width: 320px;
          border-radius: 20px;
          padding: 20px;
          width: 5em;
          background-color: var(--simple-colors-default-theme-accent-1);
          box-shadow: 5px 5px 5px var(--simple-colors-default-theme-accent-1);
        }
        p {
          color: var(--simple-colors-default-theme-accent-10);
        }
      `,
    ];
  }

  render() {
    return html`
      <krusty-image img-src="${this.keyword}"></krusty-image>
      <flash-card-body>
      <slot slot="front" name="front"><div slot="front">${this.front}</div></slot>
      <slot slot="back" name="back"><div slot="back">${this.back}</div></slot>
      </flash-card-body>
    `;
  }


   haxHooks() {
    return {
      activeElementChanged: "haxactiveElementChanged",
    };
  }
 
  haxactiveElementChanged(el, val) {
    let container = this.shadowRoot.querySelector("#title");
    if (val) {
      container.setAttribute("contenteditable", true);
    } else {
      container.removeAttribute("contenteditable");
      this.title = container.innerText;
    }
    return false;
  }

  static get haxProperties() {
    return new URL(`../lib/krusty-kard.haxProperties.json`, import.meta.url)
      .href;
  }
}