import '../sass/style.scss';

import { $, $$ } from './modules/bling';
import autocomplete from './modules/autocomplete';
import typeAhead from './modules/typeAhead';

typeAhead( document.querySelector('.search') );


autocomplete(document.getElementById('address'), document.getElementById('lat'), document.getElementById('lng'));


