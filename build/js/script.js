'use strict';

(function () {

  var noJS = document.querySelector('.page-header--nojs');
  var pageHeader = document.querySelector('.page-header');
  var toggleButton = pageHeader.querySelector('.page-header__toggle');

  if (noJS) {
    noJS.classList.remove('page-header--nojs');
  }

  if (toggleButton) {
    toggleButton.onclick = function () {
      pageHeader.classList.toggle('page-header--menu-open');
    };
  }

})();
