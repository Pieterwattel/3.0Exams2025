import './styles.css';
import { checkdates } from './checkdates';
import { nodes } from './domNodes';
import { getUnixTime } from 'date-fns';

const names = [
  ['Noah Claassen'],
  ['Yasha Mostert'],
  ['Gosse van Dijk', 'Free entrance.'],
  ['Minne van der Veen', '€5,- at the door.'],
  [
    'Marte Teuben',
    '<a href="https://ekko.nl/event/flats/" target="_blank">https://ekko.nl/event/flats/</a>',
  ],
  [
    'Carmela Michailidis',
    '<a href="https://dethomas.nl/activiteiten/licking-the-fingers-of-your-fire-floor-carmela-michailidis/" target="_blank">https://dethomas.nl/activiteiten/licking-the-fingers-of-your-fire-floor-carmela-michailidis/</a>',
  ],
  [
    'Marie Scheuermann',
    '<a href="https://www.vogelfrei.nl/agenda/a-cosmic-joke" target="_blank">https://www.vogelfrei.nl/agenda/a-cosmic-joke</a><br>WeArePublic: <a href="https://www.wearepublic.nl/alles?programma=a-cosmic-joke%252F210686" target="_blank">https://www.wearepublic.nl/alles?programma=a-cosmic-joke%252F210686</a>',
  ],
  [
    'Floor Dijkstra',
    '<a href="https://www.zimihc.nl/agenda/floor-dijkstra-everything-became-dust-again/" target="_blank">https://www.zimihc.nl/agenda/floor-dijkstra-everything-became-dust-again/</a>',
  ],
  [
    'Marius Blokhuis',
    '<a href="https://www.zimihc.nl/agenda/marius-blokhuis-alles-was-er-al/" target="_blank">https://www.zimihc.nl/agenda/marius-blokhuis-alles-was-er-al/</a>',
  ],
  ['Iris de Boer'],
  [
    'Jorike Tuinstra',
    '<a href="https://docs.google.com/forms/d/1jn8nv_U12dGtk5RvkENip3h7KEgfuwLimZHYCZ6UyIQ/alreadyresponded?edit_requested=true" target="_blank">Google Form</a>',
  ],
  [
    'August Vervuurt',
    '<a href="https://docs.google.com/forms/d/e/1FAIpQLSfSG0W5TIjzROfmAHi1034Nl5X74Oisx-QpC8N0UNgyy0iX4g/viewform" target="_blank">Google Form</a>',
  ],
  ['Auke de Lange', 'Free entrance.'],
  ['Clemens van Laar'],
  [
    'Marijn Kuijlman',
    '<a href="https://www.zimihc.nl/agenda/marijn-kuijlman-unfolding/" target="_blank">https://www.zimihc.nl/agenda/marijn-kuijlman-unfolding/</a>',
  ],
  [
    'Djoszuwa Zwier',
    '<a href="https://www.zimihc.nl/agenda/djoszuwa-zwier-staat-een-man-op-de-bus-te-wachten/" target="_blank">https://www.zimihc.nl/agenda/djoszuwa-zwier-staat-een-man-op-de-bus-te-wachten/</a>',
  ],
  [
    'Lucas van Rens',
    '<a href="https://www.zimihc.nl/agenda/lucas-van-rens-lost-inside-the-evident/" target="_blank">https://www.zimihc.nl/agenda/lucas-van-rens-lost-inside-the-evident/</a>',
  ],
  [
    'Damian Bosch',
    'First round: <a href="https://www.zimihc.nl/agenda/hester-friends-the-dispatch-hour/" target="_blank">https://www.zimihc.nl/agenda/hester-friends-the-dispatch-hour/</a><br>Second round: <a href="https://www.zimihc.nl/agenda/hester-friends-the-dispatch-hour-2/" target="_blank">https://www.zimihc.nl/agenda/hester-friends-the-dispatch-hour-2/</a>',
  ],
  [
    'Benjamin Dight',
    '<a href="https://ekko.nl/event/ben-stryder/" target="_blank">https://ekko.nl/event/ben-stryder/</a><br>WeArePublic: <a href="https://www.wearepublic.nl/programma/ben-stryder/210707" target="_blank">https://www.wearepublic.nl/programma/ben-stryder/210707</a>',
  ],
  [
    'Zaza van Duijvenbode',
    '<a href="https://www.zimihc.nl/agenda/zaza-van-duijvenbode-can-i-stay-here/" target="_blank">https://www.zimihc.nl/agenda/zaza-van-duijvenbode-can-i-stay-here/</a>',
  ],
];

let highlightedNode = '';

nodes.allNameNodes.forEach((node) => {
  const match = names.find((arr) => arr[0] === node.textContent.trim());
  if (match && match.length > 1) {
    node.style.cursor = 'pointer';
    node.style.textDecoration = 'underline';
    node.style.color = 'rgb(93, 135, 190)';
    node.addEventListener('click', (event) => {
      event.stopPropagation(); // prevent closing immediately
      let popup = document.getElementById('popupscreen');
      if (!popup) {
        popup = document.createElement('div');
        popup.id = 'popupscreen';
        document.body.appendChild(popup);
        node.style.backgroundColor = 'rgba(21, 0, 61, 1)';
        node.style.color = 'white';
        node.style.textShadow = '0 0 20px rgb(231, 255, 97)';
        highlightedNode = node;
      } else {
        highlightedNode.style.backgroundColor = '';
        highlightedNode.style.color = 'rgb(93, 135, 190)';
        highlightedNode.style.textShadow = '';
        popup.remove();
      }
      popup.innerHTML = match[1];
    });
  }
});

document.addEventListener('click', (e) => {
  const popup = document.getElementById('popupscreen');
  if (popup && !popup.contains(e.target)) {
    popup.remove();
    highlightedNode.style.backgroundColor = '';
    highlightedNode.style.color = 'rgb(93, 135, 190)';
    highlightedNode.style.textShadow = '';
  }
});

console.log("don't look here, this is all working fine, I Promise.");

checkdates();
