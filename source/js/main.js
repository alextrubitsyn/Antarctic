'use strict';

(function () {

  var noJsPage = document.querySelector('.page--nojs');
  var noJsHeader = document.querySelector('.page-header--nojs');
  var noJsLabel = document.querySelector('.page-label--nojs');
  var pageHeader = document.querySelector('.page-header');
  var toggleButton = pageHeader.querySelector('.page-header__toggle');

  if (noJsHeader) {
    noJsHeader.classList.remove('page-header--nojs');
  }

  if (noJsPage) {
    noJsPage.classList.remove('page--nojs');
  }

  if (noJsLabel) {
    noJsLabel.classList.remove('page-label--nojs');
  }

  if (toggleButton) {
    toggleButton.onclick = function () {
      pageHeader.classList.toggle('page-header--menu-open');
    };
  }

})();
