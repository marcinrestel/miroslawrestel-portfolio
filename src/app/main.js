angular
  .module('app')
  .component('app', {
    templateUrl: 'app/main.html',
    controller: appCtrl
  });

  function appCtrl($scope, $http, MODAL_SCROLL_CONFIG, DATABASE) {
    var vm = this;
    // vm.changeModalShowcaseImage = changeModalShowcaseImage;
    vm.jsModalImagesScrollConfig = MODAL_SCROLL_CONFIG;
    vm.getPortfolioItemData = getPortfolioItemData;

    init();

    // function changeModalShowcaseImage(event) {
    //     vm.modalShowcaseImage = vm.modalImages[event.currentTarget.attributes['data-id'].value].LQ;
    //     angular.element(".js-modal-image.active").removeClass("active");
    //     angular.element(".js-modal-image[data-id = " + event.currentTarget.attributes['data-id'].value + "]").addClass("active");
    //     setModalShowcaseImagePrevAndNext(event.currentTarget.attributes['data-id'].value);
    // }

    function init() {
        var response = DATABASE;
        vm.aboutImageSrc = response.aboutImageSrc;
        vm.portfolioItems = response.portfolioItems;
        vm.carouselItems = response.carouselItems;
        vm.aboutMail = response.aboutMail;
        vm.aboutLinkedin = response.aboutLinkedin;
        vm.aboutText = response.aboutText;
        preloadImages();
    }

    function preloadImages() {
        var c = []
        var counter = 0;
        var carouselItemsLength = vm.carouselItems.length;
        var portfolioItemsLength = vm.portfolioItems.length + carouselItemsLength;
        var i = 0;

        function onloadFunction() {
            counter++;
            if (counter === portfolioItemsLength) {
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
        for (i; i < portfolioItemsLength; i++) {
            c[i] = new Image();
            c[i].onload = onloadFunction;
            c[i].onerror = onloadFunction;
            c[i].src = vm.portfolioItems[i - carouselItemsLength].portfolioItemImage;
        }

    }

    // function setModalShowcaseImagePrevAndNext(currentID) {
    //     let current = parseInt(currentID);
    //     let prev = current - 1;
    //     let next = current + 1;
    //     let max = vm.modalImages.length - 1;

    //     vm.prevModalShowcaseImageID = prev < 0 ? 0 : prev;
    //     vm.nextModalShowcaseImageID = next >= max ? max : next;
    // }

    // function showPortfolioItem(event) {
    //     let clickedItemID = event.currentTarget.attributes['data-id'].value;
    //     angular.element(event.currentTarget).addClass('active');

    //     vm.modalTitle = vm.portfolioItems[clickedItemID].name;
    //     vm.modalDescription = vm.portfolioItems[clickedItemID].description;
    //     vm.modalImages = vm.portfolioItems[clickedItemID].imagesList;
    //     vm.modalShowcaseImage = vm.modalImages[0].LQ;
    //     setModalShowcaseImagePrevAndNext(0);

    //     angular.element('#portfolio-modal').modal('show', {
    //         keyboard: true
    //     });

    //     $('#portfolio-modal').on('shown.bs.modal', function () {
    //         angular.element(".js-modal-image.active").removeClass("active");
    //         angular.element(".js-modal-image").first().addClass('active');
    //     }).on('hidden.bs.modal', function (e) {
    //         angular.element(event.currentTarget).removeClass('active');
    //     });
    // }

    function getPortfolioItemData(event){
        return vm.portfolioItems[event.currentTarget.attributes['data-id'].value];
    }
}