angular
  .module('app')
  .component('app', {
    templateUrl: 'app/main.html',
    controller: appCtrl
  });

function appCtrl($scope, $http, MODAL_SCROLL_CONFIG, DATABASE, PORTFOLIO_ITEMS) {
  const vm = this;

  vm.jsModalImagesScrollConfig = MODAL_SCROLL_CONFIG;
  vm.getPortfolioItemData = getPortfolioItemData;
  init();

  function init() {
    const response = DATABASE;
    vm.aboutImageSrc = response.aboutImageSrc;
    vm.carouselItems = response.carouselItems;
    vm.aboutMail = response.aboutMail;
    vm.aboutLinkedin = response.aboutLinkedin;
    vm.aboutText = response.aboutText;
    vm.aboutPhone = response.aboutPhone;
    vm.portfolioItems = PORTFOLIO_ITEMS;
    vm.availablePortfolioItemsTypes = [...new Set(PORTFOLIO_ITEMS.map(each => each.type))];

    preloadImages();
  }

  function preloadImages() {
    const c = [];
    const carouselItemsLength = vm.carouselItems.length;
    // const portfolioItemsLength = vm.portfolioItems.length + carouselItemsLength;
    let counter = 0;
    let i = 0;

    function onloadFunction() {
      counter++;
      if (counter === carouselItemsLength) {
        vm.imagesLoaded = true;
        $scope.$apply();
      }
    }

    for (i = 0; i < carouselItemsLength; i++) {
      c[i] = new Image();
      c[i].onload = onloadFunction;
      c[i].onerror = onloadFunction;
      c[i].src = vm.carouselItems[i].src;
    }

    // for (i; i < portfolioItemsLength; i++) {
    //   c[i] = new Image();
    //   c[i].onload = onloadFunction;
    //   c[i].onerror = onloadFunction;
    //   c[i].src = vm.portfolioItems[i - carouselItemsLength].portfolioItemImage;
    // }
  }

  function getPortfolioItemData(event) {
    return vm.portfolioItems[event.currentTarget.attributes['data-id'].value];
  }
}
