var app = angular.module("portfolio", ['duScroll', 'ngScrollbars']);

app.controller("appCtrl", function ($scope, $http) {
    $http.get('database.json').then(function (reply) {
        $scope.aboutImageSrc = reply.data.aboutImageSrc;
        $scope.portfolioItems = reply.data.portfolioItems;
        $scope.carouselItems = reply.data.carouselItems;
        $scope.aboutMail = reply.data.aboutMail;
        $scope.aboutLinkedin = reply.data.aboutLinkedin;
        $scope.aboutText = reply.data.aboutText;
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
        $scope.modalShowcaseImage = event.currentTarget.attributes['data-image'].value;
        angular.element(".js-modal-image.active").removeClass("active");
        angular.element(event.target).addClass('active');
    }
});



