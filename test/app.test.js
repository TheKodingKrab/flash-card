import { html } from 'lit';
import { fixture, expect } from '@open-wc/testing';

import '../krusty-kard.js';

describe('FlashCard', () => {
  let element;
  beforeEach(async () => {
    element = await fixture(html`<krusty-kard>
      <span slot="question">What is strawberry in Spanish?</span>
      <p>fresa</p>
    </krusty-kard>`);
  });

  it('renders main content', () => {
    const para = element.querySelector('p');
    expect(para).to.exist;
    expect(para.textContent).to.equal('fresa');
  });

  it('passes the a11y audit', async () => {
    await expect(element).shadowDom.to.be.accessible();
  });
});
