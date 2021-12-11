import { html } from 'lit';

import '../krusty-kard.js';

export default {
  title: 'Krusty Kard',
  component: 'krusty-kard',
  argTypes: {
    need: { control: 'text' },
  },
};

function Template({ need = 'flashcard', slot }) {
  return html` <krusty-kard need="${need}"> ${slot} </krusty-kard> `;
}
export const Card = Template.bind({});

export const FlashCard = Template.bind({});
FlashCard.args = {
  need: 'flashcard',
  imgSrc: { type: String, reflect: true, attribute: 'img-src' },
  imgTag: { type: String },
  status: { type: String, reflect: true },
  answerIcon: { type: Boolean, reflect: true },
  icon: { type: String },
  slot: html`<p>slotted content that should render</p>`,
};