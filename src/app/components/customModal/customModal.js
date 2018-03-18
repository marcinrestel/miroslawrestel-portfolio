angular
  .module('app')
  .component('customModal', {
    templateUrl: 'app/components/customModal/customModal.html',
    bindings: {
      item: '=',
      active: '='
    },
    controller: customModalController

  });

function customModalController() {
  const vm = this;
  vm.changeSlide = changeSlide;

  vm.$onInit = function () {
    vm.activeSlide = 0;
  };

  function changeSlide(slideNumber, length) {
    if (slideNumber < length && slideNumber >= 0) {
      vm.activeSlide = slideNumber;
    } else if (slideNumber >= length) {
      vm.activeSlide = length - 1;
    } else if (slideNumber < 0) {
      vm.activeSlide = 0;
    }
  }
}
