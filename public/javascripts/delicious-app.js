import '../sass/style.scss';

import { $, $$ } from './modules/bling';
import autocomplete from './modules/autocomplete';
autocomplete(document.getElementById('address'), document.getElementById('lat'), document.getElementById('lng'));

