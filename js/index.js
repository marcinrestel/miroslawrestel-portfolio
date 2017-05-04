var app = angular.module("portfolio", ['duScroll']);

app.controller("appCtrl", function ($scope) {
    $scope.portfolioItems = [
        { name: "MODELOWANIE", shortDescription: "Lorem ipsum dolor sit amet" },
        { name: "TABULA RASA", shortDescription: "Lorem ipsum dolor sit amet" },
        { name: "POŻEGNANIE Z AFRYKĄ", shortDescription: "Lorem ipsum dolor sit amet" },
        { name: "BIBLIA GUTENBERGA", shortDescription: "Lorem ipsum dolor sit amet" },
        { name: "item5", shortDescription: "Lorem ipsum dolor sit amet" },
        { name: "item6", shortDescription: "Lorem ipsum dolor sit amet" },
        { name: "item7", shortDescription: "Lorem ipsum dolor sit amet" },
        { name: "dupa8", shortDescription: "Lorem ipsum dolor sit amet" },
        { name: "item9", shortDescription: "Lorem ipsum dolor sit amet" },
        { name: "item10", shortDescription: "Lorem ipsum dolor sit amet" },
        { name: "item11", shortDescription: "Lorem ipsum dolor sit amet" },
        { name: "item12", shortDescription: "Lorem ipsum dolor sit amet" },
        { name: "item13", shortDescription: "Lorem ipsum dolor sit amet" },
        { name: "item14", shortDescription: "Lorem ipsum dolor sit amet" },
        { name: "item15", shortDescription: "Lorem ipsum dolor sit amet" }
    ]

    $scope.carouselItems = [
        { name: "TABULA RASA", description: "Lorem ipsum dolor sit amed", src: "data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15bca0075a1%20text%20%7B%20fill%3A%23444%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15bca0075a1%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23666%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22247.2916717529297%22%20y%3D%22218.3%22%3EFirst%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" },
        { name: "POŻEGNANIE Z AFRYKĄ", description: "Lorem ipsum dolor sit amed", src: "data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15bca0075a1%20text%20%7B%20fill%3A%23444%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15bca0075a1%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23666%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22247.2916717529297%22%20y%3D%22218.3%22%3ESecond%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" },
        { name: "BIBLIA GUTENBERGA", description: "Lorem ipsum dolor sit amed", src: "data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15bca0075a1%20text%20%7B%20fill%3A%23444%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15bca0075a1%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23666%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22247.2916717529297%22%20y%3D%22218.3%22%3EThird%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" }
    ]

    $scope.imageSrc = "https://s-media-cache-ak0.pinimg.com/736x/4d/b7/b7/4db7b7ecb39c4eebc5b8f5358773e4a2.jpg";
    $scope.aboutText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

    $scope.showPortfolioItem = function (event) {
        let clickedItemID = event.currentTarget.attributes['data-id'].value;
        angular.element(event.currentTarget).addClass('active');
        
        $scope.modalTitle = $scope.portfolioItems[clickedItemID].name;
        $('#portfolio-modal').modal('show');

        $('#portfolio-modal').on('hidden.bs.modal', function (e) {
            angular.element(event.currentTarget).removeClass('active');
        })
    }
});



