'use strict';

(function () {

  var noJsHeader = document.querySelector('.page-header--nojs');
  var pageHeader = document.querySelector('.page-header');
  var toggleButton = pageHeader.querySelector('.page-header__toggle');

  if (noJsHeader) {
    noJsHeader.classList.remove('page-header--nojs');
  }

  if (toggleButton) {
    toggleButton.onclick = function () {
      pageHeader.classList.toggle('page-header--menu-open');
    };
  }

})();
