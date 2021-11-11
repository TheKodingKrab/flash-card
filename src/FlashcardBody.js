import { LitElement, html, css } from 'lit';
import { I18NMixin } from '@lrnwebcomponents/i18n-manager/lib/I18NMixin.js';

export class BtoProBox extends I18NMixin(LitElement) {
    static get tag() {
      return 'FlashcardBody,js';
    }


    constructor(){
        super();
    }
}