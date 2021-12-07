import { I18NMixin } from '@lrnwebcomponents/i18n-manager/lib/I18NMixin.js';
import { html, css } from 'lit';
import { SimpleColors } from '@lrnwebcomponents/simple-colors';

export class FlashcardBody extends I18NMixin(SimpleColors) {
  static get tag() {
    return 'flash-card-body';
  }

  constructor() {
    super();
    this.back = false;
    this.correct = false;
    this.showResult = false;
    this.statusIcon = '';
    this.sideToShow = 'front';
    this.userAnswer = '';
    this.t = {
      yourAnswer: 'Your answer',
      checkAnswer: 'Check answer',
      restartActivity: 'Restart activity',
    };
    this.registerLocalization({
      context: this,
      localesPath: new URL('../locales', import.meta.url).href,
      locales: ['es', 'fr', 'de'],
    });
  }

  static get properties() {
    return {
      ...super.properties,
      back: { type: Boolean, reflect: true },
      sideToShow: { type: String, reflect: true, attribute: 'side-to-show' },
      userAnswer: { type: String, attribute: 'user-answer' },
      correct: { type: Boolean, reflect: true },
      showResult: { type: Boolean, attribute: 'show-result', reflect: true },
      statusIcon: { type: String, attribute: false },
    };
  }

  updated(changedProperties) {
    if (super.updated) {
      super.updated(changedProperties);
      changedProperties.forEach((oldValue, propName) => {
        if (propName === 't') {
          this.i18store = window.I18NManagerStore.requestAvailability();
          this.speech.lang = this.i18store.lang;
          console.log(this.speech.lang);
        }
      });
    }
    changedProperties.forEach((oldValue, propName) => {
      if (propName === 'correct') {
        this.statusIcon = this[propName]
          ? 'icons:check-circle'
          : 'icons:cancel';
      }
      if (propName === 'back') {
        this.sideToShow = this[propName] ? 'back' : 'front';
      }
      if (propName === 'showResult' && this[propName]) {
        import('@lrnwebcomponents/simple-icon/lib/simple-icon-lite.js');
        import('@lrnwebcomponents/simple-icon/lib/simple-icons.js');
      }
    });
  }

  firstUpdated(changedProperties) {
    if (super.firstUpdated) {
      super.firstUpdated(changedProperties);
    }
    const btn = this.shadowRoot.querySelector('#check');
    this.shadowRoot
      .querySelector('#answer')
      .addEventListener('keyup', event => {
        if (event.keyCode === 13) {
          event.preventDefault();
          btn.click();
        }
      });
  }

  // Need this instead of .toUpperCase() for i18n
  equalsIgnoringCase(text) {
    return (
      text.localeCompare(this.userAnswer, undefined, {
        sensitivity: 'base',
      }) === 0
    );
  }

  // Use data-correct-answer so that parent elements will be able to
  // know if the answer was correct or incorrect
  checkUserAnswer() {
    const side = this.back ? 'front' : 'back';
    const comparison = this.shadowRoot
      .querySelector(`slot[name="${side}"]`)
      .assignedNodes({ flatten: true })[0].innerText;
    this.correct = this.equalsIgnoringCase(comparison);
    this.showResult = true;
    this.sideToShow = !this.back ? 'back' : 'front';
    this.shadowRoot.querySelector('#check').disabled = true;
  }

  // as the user types input, grab the value
  // this way we can react to disable state among other things
  inputChanged(e) {
    this.userAnswer = e.target.value;
  }

  // reset the interaction to the defaults
  resetCard() {
    this.userAnswer = '';
    this.correct = false;
    this.showResult = false;
    this.sideToShow = this.back ? 'back' : 'front';
  }

  // CSS - specific to Lit
  static get styles() {
    return css`
      :host {
        display: flex;
        flex-direction: column;
        align-items: center;
      }
      input {
        padding: 12px;
        margin: 2px;
        border-radius: 15px;
        font-size: 13px;
        border-color: black;
        border-width: 2px;
      }
      input:focus {
        outline: none;
        box-shadow: 5px 5px 5px #7fb7ff;
      }
      button#check {
        background-color: #2abee8;
        color: white;
        font-size: 12px;
        margin: none;
        padding: 10px;
        border-radius: 20px 20px 20px 20px;
        border-width: 1px;
      }

      button#retry {
        background-color: #2abee8;
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

      button:disabled {
        opacity: 0.3;
        cursor: not-allowed;
      }
      p {
        font-family: san serif;
        color: black;
        font-size: 25px;
      }
      :host([side-to-show='front']) slot[name='back'] {
        display: none;
      }
      :host([side-to-show='back']) slot[name='front'] {
        display: none;
      }
      :host([correct]) simple-icon-lite {
        color: green;
      }
      simple-icon-lite {
        --simple-icon-width: 35px;
        --simple-icon-height: 35px;
        color: red;
      }
    `;
  }

  // HTML - specific to Lit
  render() {
    return html`
      <div>
        <p id="question">
          <slot name="front"></slot>
          <slot name="back"></slot>
        </p>
        <input
          id="answer"
          type="text"
          .placeholder="${this.t.yourAnswer}"
          @input="${this.inputChanged}"
          .value="${this.userAnswer}"
        />
        <button
          id="check"
          ?disabled="${this.userAnswer === ''}"
          @click="${this.checkUserAnswer}"
        >
          ${this.t.checkAnswer}
        </button>
      </div>
      ${this.showResult
        ? html`<simple-icon-lite icon="${this.statusIcon}"></simple-icon-lite>
            <button id="retry" @click="${this.resetCard}">
              ${this.t.restartActivity}
            </button>`
        : ``}
    `;
  }
}

customElements.define(FlashcardBody.tag, FlashcardBody);
