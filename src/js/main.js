// eslint-disable-next-line import/no-extraneous-dependencies
import 'focus-visible';
import lazyIMages from './modules/lazyIMages';
import documenReady from './helpers/documenReady';
import initModal from './modules/initModal';
import burger from './modules/burger';
import swiper from './modules/swiper';
import choicesSelector from './modules/choice-select';
import calendar from './modules/calendar';

documenReady(() => {
  window.___YOUR_PROJECT___API = {};

  lazyIMages();
  initModal();
  burger();
  swiper();
  choicesSelector();
  calendar();
});
