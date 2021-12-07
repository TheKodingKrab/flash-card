// Booleans/Boolean states for the try button
// Reset components: Custom Events

// dependencies / things imported
import { html, css } from 'lit';
import { SimpleColors } from '@lrnwebcomponents/simple-colors';

// EXPORT (so make available to other documents that reference this file) a class, that extends LitElement
// which has the magic life-cycles and developer experience below added
export class KrustyKard extends SimpleColors {
  static get tag() {
    return 'krusty-kard';
  }

  // HTMLElement life-cycle, built in; use this for setting defaults
  constructor() {
    super();
    setTimeout(() => {
      import('./FlashcardBody.js');
      import('./FlashcardImage.js');
    }, 0);
  }

  // properties that you wish to use as data in HTML, CSS, and the updated life-cycle
  static get properties() {
    return {
      ...super.properties,
      inverted: { type: Boolean },
      keyword: { type: String },
      front: {type: String },
      back:{type: String },
    };
  }

  // CSS - specific to Lit
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

  // HTML - specific to Lit
  render() {
    return html`
      <krusty-image img-src="${this.keyword}"></krusty-image>
      <flash-card-body>
      <slot slot="front" name="front"><div slot="front">${this.front}</div></slot>
      <slot slot="back" name="back"><div slot="back">${this.back}</div></slot>
      </flash-card-body>
    `;
  }

  /**
 * Implements haxHooks to tie into life-cycle if hax exists.
 */
   haxHooks() {
    return {
      activeElementChanged: "haxactiveElementChanged",
    };
  }
  /**
   * double-check that we are set to inactivate click handlers
   * this is for when activated in a duplicate / adding new content state
   */
  haxactiveElementChanged(el, val) {
    // flag for HAX to not trigger active on changes
    let container = this.shadowRoot.querySelector("#title");
    if (val) {
      container.setAttribute("contenteditable", true);
    } else {
      container.removeAttribute("contenteditable");
      this.title = container.innerText;
    }
    return false;
  }
  // HAX specific callback
  // This teaches HAX how to edit and work with your web component
  /**
   * haxProperties integration via file reference
   */
  static get haxProperties() {
    return new URL(`../lib/krusty-kard.haxProperties.json`, import.meta.url)
      .href;
  }
}