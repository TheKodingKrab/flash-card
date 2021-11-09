import { html } from 'lit';

import '../krusty-kard.js';

export default {
  title: 'Krusty Kard',
  component: 'krusty-kard',
  argTypes: {
    need: { control: 'text' },
  },
};

function Template({ need = 'rename', slot }) {
  return html` <krusty-kard need="${need}"> ${slot} </krusty-kard> `;
}
export const Card = Template.bind({});

export const ScienceCard = Template.bind({});
ScienceCard.args = {
  need: 'science',
  slot: html`<p>slotted content that should render</p>`,
};
