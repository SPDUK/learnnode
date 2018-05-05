import '../sass/style.scss';

import { $, $$ } from './modules/bling';
import autocomplete from './modules/autocomplete';
import typeAhead from './modules/typeAhead';
import makeMap from './modules/map';
import ajaxHeart from './modules/heart';

autocomplete(
  document.getElementById('address'),
  document.getElementById('lat'),
  document.getElementById('lng')
);

typeAhead(document.querySelector('.search'));

makeMap(document.getElementById('map'));

const heartForms = document.querySelectorAll('form.heart');
heartForms.addEventListener('submit', ajaxHeart);
