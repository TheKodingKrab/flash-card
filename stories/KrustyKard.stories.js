import { html } from 'lit';

import '../krusty-kard.js';

export default {
  title: 'Krusty Kard',
  component: 'krusty-kard',
  argTypes: {
    sideToShow: { 
      control: 'select',
      options: ['front', 'back'],
    },
    imgSrc: {
      control: "text"
    },
    cardStatus: { control: "text" },
    front: { control: "text"},
  },
};

function Template({ 
  sideToShow = 'front', 
  imgSrc='',
  cardStatus='',
  front="",
  back="",
  }) {
  return html` <krusty-kard sideToShow="${sideToShow}" keyword="${imgSrc}" status="${cardStatus}">
  <p slot="front">${front}</p>
  <p slot="back">${back}
  </krusty-kard> `;
  
}

export const Card = Template.bind({});

export const FlashCard = Template.bind({});
FlashCard.args = {
  sideToShow: 'front',
  imgSrc: 'school',
  imgTag: 'https://loremflickr.com/320/240/school',
  answerIcon: { type: Boolean, reflect: true },
  icon: { type: String },
  front: 'What is college in Spanish?',
  back: 'colegio',
};