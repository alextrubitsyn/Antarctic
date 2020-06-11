'use strict';

(function () {

  var noJsHeader = document.querySelector('.page-header--nojs');
  var pageHeader = document.querySelector('.page-header');
  var toggleButton = pageHeader.querySelector('.page-header__toggle');
  var formBooking = document.querySelector('.early-booking__form');
  var telInput = formBooking.querySelector('input[type="tel"]');

  var onInputChange = function (evt) {
    var telValue = evt.target.value;
    var matrix = '+7 (___) ___ ____';
    var index = 0;
    var def = matrix.replace(/\D/g, '');
    var val = telValue.replace(/\D/g, '');

    if (def.length >= val.length) {
      val = def;
    }

    telValue = matrix.replace(/./g, function (a) {
      var ret = '';
      if (/[_\d]/.test(a) && index < telValue.length) {
        ret = telValue.charAt(index++);
      } else if (index >= telValue.length) {
        ret = '';
      } else {
        ret = a;
      }
      // return /[_\d]/.test(a) && index < telValue.length ? telValue.charAt(index++) : index >= telValue.length ? '' : a;
      return ret;
    });

  };

  if (noJsHeader) {
    noJsHeader.classList.remove('page-header--nojs');
  }

  if (toggleButton) {
    toggleButton.onclick = function () {
      pageHeader.classList.toggle('page-header--menu-open');
    };
  }

  if (telInput) {
    telInput.addEventListener('input', onInputChange);
  }

})();
