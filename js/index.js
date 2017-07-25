var app = angular.module("portfolio", ['duScroll', 'ngScrollbars']);

app.controller("appCtrl", function ($scope, $http) {
    $http.get('database.json').then(function (reply) {
        $scope.aboutImageSrc = reply.data.aboutImageSrc;
        $scope.portfolioItems = reply.data.portfolioItems;
        $scope.carouselItems = reply.data.carouselItems;
        $scope.aboutMail = reply.data.aboutMail;
        $scope.aboutLinkedin = reply.data.aboutLinkedin;
        $scope.aboutText = reply.data.aboutText;
        preloadImages();
    }, function (err) {
        // console.log(err);
    });

    $scope.jsModalImagesScrollConfig = {
        autoHideScrollbar: false,
        theme: 'light-3',
        advanced: {
            updateOnContentResize: true
        },
        scrollInertia: 300,
        axis: 'y'
    }

    $scope.showPortfolioItem = function (event) {
        let clickedItemID = event.currentTarget.attributes['data-id'].value;
        angular.element(event.currentTarget).addClass('active');

        $scope.modalTitle = $scope.portfolioItems[clickedItemID].name;
        $scope.modalDescription = $scope.portfolioItems[clickedItemID].description;
        $scope.modalImages = $scope.portfolioItems[clickedItemID].imagesList;
        $scope.modalShowcaseImage = $scope.modalImages[0].LQ;
        setModalShowcaseImagePrevAndNext(0);

        angular.element('#portfolio-modal').modal('show', {
            keyboard: true
        });

        $('#portfolio-modal').on('shown.bs.modal', function () {
            angular.element(".js-modal-image.active").removeClass("active");
            angular.element(".js-modal-image").first().addClass('active');
        }).on('hidden.bs.modal', function (e) {
            angular.element(event.currentTarget).removeClass('active');
        });
    }

    $scope.changeModalShowcaseImage = function (event) {
        $scope.modalShowcaseImage = $scope.modalImages[event.currentTarget.attributes['data-id'].value].LQ;
        angular.element(".js-modal-image.active").removeClass("active");
        angular.element(".js-modal-image[data-id = " + event.currentTarget.attributes['data-id'].value + "]").addClass("active");
        setModalShowcaseImagePrevAndNext(event.currentTarget.attributes['data-id'].value);
    }

    function setModalShowcaseImagePrevAndNext(currentID) {
        let current = parseInt(currentID);
        let prev = current - 1;
        let next = current + 1;
        let max = $scope.modalImages.length - 1;

        $scope.prevModalShowcaseImageID = prev < 0 ? 0 : prev;
        $scope.nextModalShowcaseImageID = next >= max ? max : next;
    }

    function preloadImages() {
        var c = new Image();

        c.onload = function () {
            console.log("loaded")
        }

        for (var i = 0, carouselItemsLength = $scope.carouselItems.length; i < carouselItemsLength; i++) {
            console.log($scope.carouselItems[i].src);
            c.src = $scope.carouselItems[i].src;
        }

        for (var i = 0, portfolioItemsLength = $scope.portfolioItems.length; i < portfolioItemsLength; i++) {
            console.log($scope.portfolioItems[i].portfolioItemImage);
            c.src = $scope.portfolioItems[i].portfolioItemImage;
        }

    }
});



