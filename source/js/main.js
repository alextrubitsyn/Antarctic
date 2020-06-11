'use strict';

(function () {

  var noJsHeader = document.querySelector('.page-header--nojs');
  var pageHeader = document.querySelector('.page-header');
  var toggleButton = pageHeader.querySelector('.page-header__toggle');
  var formBooking = document.querySelector('.early-booking__form');
  var telInput = formBooking.querySelector('input[type="tel"]');


  function setCursorPosition(pos, elem) {
    elem.focus();
    if (elem.setSelectionRange) {
      elem.setSelectionRange(pos, pos);
    } else if (elem.createTextRange) {
      var range = elem.createTextRange();
      range.collapse(true);
      range.moveEnd('character', pos);
      range.moveStart('character', pos);
      range.select();
    }
  }


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
      if (/[_\d]/.test(a) && index < val.length) {
        ret = val.charAt(index++);
      } else if (index >= val.length) {
        ret = '';
      } else {
        ret = a;
      }
      return ret;
    });

    if (evt.type === 'blur') {
      if (telValue.length === 2) {
        telValue = '';
      }
    } else {
      setCursorPosition(telValue.length, telValue);
    }

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
    telInput.addEventListener('input', onInputChange, false);
    telInput.addEventListener('focus', onInputChange, false);
    telInput.addEventListener('blur', onInputChange, false);
  }

})();
