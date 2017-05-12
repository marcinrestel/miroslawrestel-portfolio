var app = angular.module("portfolio", ['duScroll', 'ngScrollbars']);

app.controller("appCtrl", function ($scope, $window) {

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

    $scope.jsModalImagesScrollConfig = {
        autoHideScrollbar: false,
        theme: 'light-3',
        advanced: {
            updateOnContentResize: true
        },
        setHeight: 500,
        scrollInertia: 300,
        axis: 'y'
    }

    $scope.changeModalShowcaseImage = function (event) {
        $scope.modalShowcaseImage = event.currentTarget.attributes['data-image'].value;
        angular.element(".js-modal-image.active").removeClass("active");
        angular.element(event.target).addClass('active');
    }

    $scope.aboutImageSrc = "https://drive.google.com/uc?id=0B1IBSEQW965yeWNyeEliVmV4Z28";
    $scope.aboutText = "Moja przygoda z grafiką rozpoczęła się na studiach, kiedy stworzyłem pierwsze wizualizacje 3D.\
                        Swoje umiejętności doskonaliłem w polskich i niemieckich biurach architektonicznych. W ostatnim czasie pracowałem przy\
                        dwóch filmowych produkcjach fulldome zrealizowanych dla Planetarium Niebo Kopernika.";

    $scope.portfolioItems = [
        {
            name: "HALO ZIEMIA",
            nameEN: "HELLO EARTH",
            shortDescription: "CENTRUM NAUKI KOPERNIK",
            shortDescriptionEN: "COPERNICUS SCIENCE CENTRE",
            portfolioItemImage: "https://drive.google.com/uc?id=0B1IBSEQW965yUFRzd1FubElCOEk",
            imagesList: [{LQ: "https://drive.google.com/uc?id=0B1IBSEQW965ydFhaalJSUUhYY2c", HQ: ""},
                {LQ: "https://drive.google.com/uc?id=0B1IBSEQW965yQm9yWWFfVUJvc0k", HQ: ""},
                {LQ: "https://drive.google.com/uc?id=0B1IBSEQW965yWDFTMDlDazZQWDg", HQ: ""},
                {LQ: "https://drive.google.com/uc?id=0B1IBSEQW965yYTlMNER0RjM4ZTg", HQ: ""},
                {LQ: "https://drive.google.com/uc?id=0B1IBSEQW965yTC1ibVVTUGduME0", HQ: ""},
                {LQ: "https://drive.google.com/uc?id=0B1IBSEQW965yb0dCUFN3aEpOdEE", HQ: ""},
                {LQ: "https://drive.google.com/uc?id=0B1IBSEQW965yMlUybm1fZGRHMzA", HQ: ""},
                {LQ: "https://drive.google.com/uc?id=0B1IBSEQW965yQVVMQzZDWDQ0MWM", HQ: ""},
                {LQ: "https://drive.google.com/uc?id=0B1IBSEQW965yWkltV0dIdkNBN3M", HQ: ""},
                {LQ: "https://drive.google.com/uc?id=0B1IBSEQW965yTkhOT2lxbTlPeG8", HQ: ""},
                {LQ: "https://drive.google.com/uc?id=0B1IBSEQW965yREE0R0dZa0VIdUU", HQ: ""},
                {LQ: "https://drive.google.com/uc?id=0B1IBSEQW965ydzZOT0N1ZGE5RWM", HQ: ""},
                {LQ: "https://drive.google.com/uc?id=0B1IBSEQW965yM0xrWnlMZi1MRE0", HQ: ""},
                {LQ: "https://drive.google.com/uc?id=0B1IBSEQW965yZ2F5aGxHR05VSEU", HQ: ""},
                {LQ: "https://drive.google.com/uc?id=0B1IBSEQW965yNzNLUThmVlNDRWc", HQ: ""},
                {LQ: "https://drive.google.com/uc?id=0B1IBSEQW965yNTc4TEVSY0oxc0E", HQ: ""},
                {LQ: "https://drive.google.com/uc?id=0B1IBSEQW965yUFRzd1FubElCOEk", HQ: ""}],
            description: "Projekt wykonany w technologii fulldome na zlecenie Planetarium Niebo Kopernika i Centrum Nauki Kopernik.",
            descriptionEN: "Fulldome project commissioned by Copernicus Copernicus Planetarium and Copernicus Science Center."
        },
        {
            name: "NA SKRZYDŁACH MARZEŃ",
            nameEN: "DREAM TO FLY",
            shortDescription: "CENTRUM NAUKI KOPERNIK",
            shortDescriptionEN: "COPERNICUS SCIENCE CENTRE",
            portfolioItemImage: "https://drive.google.com/uc?id=0B1IBSEQW965yYTEtVTNsNjRST3M",
            imagesList: [{LQ: "https://drive.google.com/uc?id=0B1IBSEQW965yYTEtVTNsNjRST3M", HQ: ""},
                {LQ: "https://drive.google.com/uc?id=0B1IBSEQW965yNG03THUwSG1NMGM", HQ: ""},
                {LQ: "https://drive.google.com/uc?id=0B1IBSEQW965yWVlaNHZPd2ZheXM", HQ: ""},
                {LQ: "https://drive.google.com/uc?id=0B1IBSEQW965ydzg1M19yeTktQ1k", HQ: ""},
                {LQ: "https://drive.google.com/uc?id=0B1IBSEQW965yUFBqaHR6SlVkajg", HQ: ""},
                {LQ: "https://drive.google.com/uc?id=0B1IBSEQW965yMVNYT09OQzVkRWM", HQ: ""},
                {LQ: "https://drive.google.com/uc?id=0B1IBSEQW965yNFZBWlliMlRONHc", HQ: ""},
                {LQ: "https://drive.google.com/uc?id=0B1IBSEQW965yUzRwOEhrUEdaSDQ", HQ: ""},
                {LQ: "https://drive.google.com/uc?id=0B1IBSEQW965yRzd5N0ktRGt0c00", HQ: ""},
                {LQ: "https://drive.google.com/uc?id=0B1IBSEQW965yMVFnMG14S2h1YnM", HQ: ""},
                {LQ: "https://drive.google.com/uc?id=0B1IBSEQW965ybk1WNlk4UlRMOTA", HQ: ""},
                {LQ: "https://drive.google.com/uc?id=0B1IBSEQW965yd1J6elloNm85QjQ", HQ: ""},
                {LQ: "https://drive.google.com/uc?id=0B1IBSEQW965ycVFkRFFuNTVHbXc", HQ: ""}],
            description: "Projekt wykonany w technologii fulldome na zlecenie Planetarium Niebo Kopernika i Centrum Nauki Kopernik.\n\
                            Jest to pierwsza produkcja w tej technologii w Polsce.\n\
                            \n\
                            Nagrody:\n\
                            \n\
                            Best Fulldome Film\n\
                            2016 Immersive Festival Madrid\n\
                            \n\
                            Best 3D film\n\
                            2015 Immersive Film Festival Espinho\n\
                            \n\
                            Feature Films - 3rd Prize\n\
                            2015 Russian Fulldome Festival Yaroslav\n\
                            \n\
                            Best Movie\n\
                            2015 Central European Fulldome Festival Brno\n\
                            \n\
                            Golden Star Award\n\
                            2014 IIPF Korea\n\
                            \n\
                            Best Audience Choice\n\
                            2014 Macau International Fulldome Film Festival\n\
                            \n\
                            Best Visuals\n\
                            2014 Macau International Fulldome Film Festival\n\
                            \n\
                            Best Script / Story\n\
                            2013 Imiloa Festival\n\
                            \n\
                            Directors Award\n\
                            2013 FullDome Festival Jena",
            descriptionEN: "Fulldome project commissioned by Copernicus Copernicus Planetarium and Copernicus Science Center.\n\
                            This is the first production in this technology in Poland.\n\
                            \n\
                            Nagrody:\n\
                            \n\
                            Best Fulldome Film\n\
                            2016 Immersive Festival Madrid\n\
                            \n\
                            Best 3D film\n\
                            2015 Immersive Film Festival Espinho\n\
                            \n\
                            Feature Films - 3rd Prize\n\
                            2015 Russian Fulldome Festival Yaroslav\n\
                            \n\
                            Best Movie\n\
                            2015 Central European Fulldome Festival Brno\n\
                            \n\
                            Golden Star Award\n\
                            2014 IIPF Korea\n\
                            \n\
                            Best Audience Choice\n\
                            2014 Macau International Fulldome Film Festival\n\
                            \n\
                            Best Visuals\n\
                            2014 Macau International Fulldome Film Festival\n\
                            \n\
                            Best Script / Story\n\
                            2013 Imiloa Festival\n\
                            \n\
                            Directors Award\n\
                            2013 FullDome Festival Jena"
        },
        {
            name: "NA PRZEDMIEŚCIACH",
            nameEN: "THE 'BURBS",
            shortDescription: "PROJEKT ARCHITEKTURA",
            shortDescriptionEN: "",
            portfolioItemImage: "https://drive.google.com/uc?id=0B1IBSEQW965yb3gxNmdTNnpLV00",
            imagesList: [{LQ: "https://drive.google.com/uc?id=0B1IBSEQW965yb3gxNmdTNnpLV00", HQ: ""},
                {LQ: "https://drive.google.com/uc?id=0B1IBSEQW965yeUhzZTA0cXpZa2s", HQ: ""},
                {LQ: "https://drive.google.com/uc?id=0B1IBSEQW965yd0tZUHlrUHRkTG8", HQ: ""},
                {LQ: "https://drive.google.com/uc?id=0B1IBSEQW965yQVV5czZ3T2oxWmc", HQ: ""},
                {LQ: "https://drive.google.com/uc?id=0B1IBSEQW965yWmwxZGloWkI1d3c", HQ: ""}],
            description: "",
            descriptionEN: ""
        },
        {
            name: "POŻEGNANIE Z AFRYKĄ",
            nameEN: "OUT OF AFRICA",
            shortDescription: "PROJEKT ARCHITEKTURA",
            shortDescriptionEN: "",
            portfolioItemImage: "https://drive.google.com/uc?id=0B1IBSEQW965yaTBNOTREN3o0cXM",
            imagesList: [{LQ: "https://drive.google.com/uc?id=0B1IBSEQW965yaTBNOTREN3o0cXM", HQ: ""},
                {LQ: "https://drive.google.com/uc?id=0B1IBSEQW965yblZLSGFDLWd5RDQ", HQ: ""},
                {LQ: "https://drive.google.com/uc?id=0B1IBSEQW965yelE3MTcza0ZIcDg", HQ: ""}],
            description: "",
            descriptionEN: ""
        },
        {
            name: "HOME, SWEET HOME",
            nameEN: "HOME, SWEET HOME",
            shortDescription: "CREATIVE PLANET",
            shortDescriptionEN: "CREATIVE PLANET",
            portfolioItemImage: "https://drive.google.com/uc?id=0B1IBSEQW965yUmtvdXdpS05LdjA",
            imagesList: [{LQ: "https://drive.google.com/uc?id=0B1IBSEQW965yUmtvdXdpS05LdjA", HQ: ""},
                {LQ: "https://drive.google.com/uc?id=0B1IBSEQW965ybDFucG1va0lJd3c", HQ: ""},
                {LQ: "https://drive.google.com/uc?id=0B1IBSEQW965yR0lXbU9kRER3dU0", HQ: ""},
                {LQ: "https://drive.google.com/uc?id=0B1IBSEQW965yVGRaZDRlM2dLa2c", HQ: ""},
                {LQ: "https://drive.google.com/uc?id=0B1IBSEQW965yZlZsYUFsT29maUE", HQ: ""},
                {LQ: "https://drive.google.com/uc?id=0B1IBSEQW965yc3A5SGtfbzJEcFE", HQ: ""},
                {LQ: "https://drive.google.com/uc?id=0B1IBSEQW965ybENnQndMXzExWFU", HQ: ""},
                {LQ: "https://drive.google.com/uc?id=0B1IBSEQW965ySDJ0NEVmWFNQUUE", HQ: ""},
                {LQ: "https://drive.google.com/uc?id=0B1IBSEQW965ybDMxTEZEbWF2NTg", HQ: ""},
                {LQ: "https://drive.google.com/uc?id=0B1IBSEQW965ybnJVYWFIM0tjMVE", HQ: ""},
                {LQ: "https://drive.google.com/uc?id=0B1IBSEQW965yTER3OWFmX2xxams", HQ: ""},
                {LQ: "https://drive.google.com/uc?id=0B1IBSEQW965yUGRuMnNaYTJhUEk", HQ: ""}],
            description: "",
            descriptionEN: ""
        },
        {
            name: "ROBINSON CRUSOE",
            nameEN: "ROBINSON CRUSOE",
            shortDescription: "CENTRUM NAUKI KOPERNIK",
            shortDescriptionEN: "COPERNICUS SCIENCE CENTRE",
            portfolioItemImage: "https://drive.google.com/uc?id=0B1IBSEQW965yZG9yd3hrenJkZnM",
            imagesList: [{LQ: "https://drive.google.com/uc?id=0B1IBSEQW965yZG9yd3hrenJkZnM", HQ: ""},
                {LQ: "https://drive.google.com/uc?id=0B1IBSEQW965ydFNkeWJVU1U0emM", HQ: ""},
                {LQ: "https://drive.google.com/uc?id=0B1IBSEQW965yQ2NfczhYeEVEZHM", HQ: ""},
                {LQ: "https://drive.google.com/uc?id=0B1IBSEQW965yaDVkSlFMTEVxMzQ", HQ: ""},
                {LQ: "https://drive.google.com/uc?id=0B1IBSEQW965yTllnakRFZy1fb0k", HQ: ""},
                {LQ: "https://drive.google.com/uc?id=0B1IBSEQW965yVDlzUG9fbkNvOWc", HQ: ""},
                {LQ: "https://drive.google.com/uc?id=0B1IBSEQW965yWm1wdFUyS29VVU0", HQ: ""},
                {LQ: "https://drive.google.com/uc?id=0B1IBSEQW965yV0E1SU9MZ3VmeDQ", HQ: ""},
                {LQ: "https://drive.google.com/uc?id=0B1IBSEQW965yS09JZTJUQXRfb00", HQ: ""},
                {LQ: "https://drive.google.com/uc?id=0B1IBSEQW965yOHcwbTRld0xpdjQ", HQ: ""},
                {LQ: "https://drive.google.com/uc?id=0B1IBSEQW965yZE4ydy0tcVNrd0U", HQ: ""},
                {LQ: "https://drive.google.com/uc?id=0B1IBSEQW965yalNOWDZPOEtOSm8", HQ: ""}],
            description: "",
            descriptionEN: ""
        },
        {
            name: "TABULA RASA",
            nameEN: "TABULA RASA",
            shortDescription: "CREATIVE PLANET",
            shortDescriptionEN: "CREATIVE PLANET",
            portfolioItemImage: "https://drive.google.com/uc?id=0B1IBSEQW965yZGVSYl9FZEVWelk",
            imagesList: [{LQ: "https://drive.google.com/uc?id=0B1IBSEQW965yZGVSYl9FZEVWelk", HQ: ""},
                {LQ: "https://drive.google.com/uc?id=0B1IBSEQW965yWnhreXdmcmRqTms", HQ: ""},
                {LQ: "https://drive.google.com/uc?id=0B1IBSEQW965ySUgwNF83ZlRoUlU", HQ: ""},
                {LQ: "https://drive.google.com/uc?id=0B1IBSEQW965yQzFZTnFXQ3dBeGM", HQ: ""},
                {LQ: "https://drive.google.com/uc?id=0B1IBSEQW965yU0NiUVZYRlJHWTA", HQ: ""},
                {LQ: "https://drive.google.com/uc?id=0B1IBSEQW965ybU1lSVVwYllTUmc", HQ: ""}],
            description: "",
            descriptionEN: ""
        },
        {
            name: "BIBLIA GUTENBERGA",
            nameEN: "GUTENBERG BIBLE",
            shortDescription: "CENTRUM NAUKI KOPERNIK",
            shortDescriptionEN: "COPERNICUS SCIENCE CENTRE",
            portfolioItemImage: "https://drive.google.com/uc?id=0B1IBSEQW965ydTBaMWE0MGN4OUk",
            imagesList: [{LQ: "https://drive.google.com/uc?id=0B1IBSEQW965ydTBaMWE0MGN4OUk", HQ: ""},
                {LQ: "https://drive.google.com/uc?id=0B1IBSEQW965yLXZiN083VGRJNUU", HQ: ""},
                {LQ: "https://drive.google.com/uc?id=0B1IBSEQW965yLUd2aFNVOXVCYlk", HQ: ""},
                {LQ: "https://drive.google.com/uc?id=0B1IBSEQW965yc2RSTGNRR0ktbVE", HQ: ""},
                {LQ: "https://drive.google.com/uc?id=0B1IBSEQW965yZmF1TXBNRFhNZUE", HQ: ""},
                {LQ: "https://drive.google.com/uc?id=0B1IBSEQW965yV3Bma0JjVml6VE0", HQ: ""},
                {LQ: "https://drive.google.com/uc?id=0B1IBSEQW965ybEpmcEZkYTZwM2M", HQ: ""},
                {LQ: "https://drive.google.com/uc?id=0B1IBSEQW965yT0plQm82QlFab2c", HQ: ""},
                {LQ: "https://drive.google.com/uc?id=0B1IBSEQW965yb2NtdTNiVnl6SjA", HQ: ""},
                {LQ: "https://drive.google.com/uc?id=0B1IBSEQW965yUkk4OXgxeWczTnM", HQ: ""}],
            description: "",
            descriptionEN: ""
        },
        {
            name: "ŻYCIE WEWNĘTRZNE",
            nameEN: "INNER LIFE",
            shortDescription: "CADMAN",
            shortDescriptionEN: "CADMAN",
            portfolioItemImage: "https://drive.google.com/uc?id=0B1IBSEQW965ycGYzOE56OGNZTGs",
            imagesList: [{LQ: "https://drive.google.com/uc?id=0B1IBSEQW965ycGYzOE56OGNZTGs", HQ: "https://drive.google.com/uc?id=0B1IBSEQW965yU01NTmotY0pSQjQ"},
                {LQ: "https://drive.google.com/uc?id=0B1IBSEQW965yd0h5alVXNGVOSjA", HQ: "https://drive.google.com/uc?id=0B1IBSEQW965yTzVaY2tNZHFCdm8"},
                {LQ: "https://drive.google.com/uc?id=0B1IBSEQW965yS2dXbG1sRlpBR1E", HQ: "https://drive.google.com/uc?id=0B1IBSEQW965yN2hoWjdUV1oyTFU"},
                {LQ: "https://drive.google.com/uc?id=0B1IBSEQW965yemF5TTBDbXprQ3c", HQ: "https://drive.google.com/uc?id=0B1IBSEQW965yTDRwOVBwb2xncUk"},
                {LQ: "https://drive.google.com/uc?id=0B1IBSEQW965yT1pjXzVCeEx4QVU", HQ: "https://drive.google.com/uc?id=0B1IBSEQW965ycTM3b1RTd0FmdDg"},
                {LQ: "https://drive.google.com/uc?id=0B1IBSEQW965yRlNySkdlOGZWcjg", HQ: "https://drive.google.com/uc?id=0B1IBSEQW965yWjlLSTNDNEdoMnM"}],
            description: "",
            descriptionEN: ""
        },
        {
            name: "DOM WSCHODZĄCEGO SŁOŃCA",
            nameEN: "HOUSE OF THE RISING SUN",
            shortDescription: "QUADRO",
            shortDescriptionEN: "QUADRO",
            portfolioItemImage: "https://drive.google.com/uc?id=0B1IBSEQW965yaDVERlg2Rld2S0k",
            imagesList: [{LQ: "https://drive.google.com/uc?id=0B1IBSEQW965yaDVERlg2Rld2S0k", HQ: "https://drive.google.com/uc?id=0B1IBSEQW965yVW11REdSLWcxclE"},
                {LQ: "https://drive.google.com/uc?id=0B1IBSEQW965yWXlnSHFJbVgwVkU", HQ: "https://drive.google.com/uc?id=0B1IBSEQW965yM2MtQ1VjeHhEdm8"}],
            description: "",
            descriptionEN: ""
        },
        {
            name: "PUSTYNNA BURZA",
            nameEN: "DESERT STORM",
            shortDescription: "CENTRUM NAUKI KOPERNIK",
            shortDescriptionEN: "COPERNICUS SCIENCE CENTRE",
            portfolioItemImage: "https://drive.google.com/uc?id=0B1IBSEQW965yejRJLXFRbG91WVE",
            imagesList: [{LQ: "https://drive.google.com/uc?id=0B1IBSEQW965yejRJLXFRbG91WVE", HQ: ""},
                {LQ: "https://drive.google.com/uc?id=0B1IBSEQW965yS3NIbVZBOTZDXzA", HQ: ""},
                {LQ: "https://drive.google.com/uc?id=0B1IBSEQW965yX0F5QkxXeGVqUUk", HQ: ""},
                {LQ: "https://drive.google.com/uc?id=0B1IBSEQW965yYWEzeUo5bkMxSWM", HQ: ""},
                {LQ: "https://drive.google.com/uc?id=0B1IBSEQW965yREJKTUpBM0lIZ1E", HQ: ""},
                {LQ: "https://drive.google.com/uc?id=0B1IBSEQW965ybVltT0ljaWpOU1E", HQ: ""},
                {LQ: "https://drive.google.com/uc?id=0B1IBSEQW965yX1R2ZzY3dlE3Ykk", HQ: ""},
                {LQ: "https://drive.google.com/uc?id=0B1IBSEQW965yWUVKWi1GQmplNFk", HQ: ""},
                {LQ: "https://drive.google.com/uc?id=0B1IBSEQW965ySHNmaHNjRlp3aEE", HQ: ""},
                {LQ: "https://drive.google.com/uc?id=0B1IBSEQW965ybVU1QVAtUUNKWGs", HQ: ""},
                {LQ: "https://drive.google.com/uc?id=0B1IBSEQW965yNU5uYTcwZWNqclU", HQ: ""},
                {LQ: "https://drive.google.com/uc?id=0B1IBSEQW965yLU9RcGx0dGd5XzA", HQ: ""},
                {LQ: "https://drive.google.com/uc?id=0B1IBSEQW965ybk9tb3k4R0lNdXc", HQ: ""},
                {LQ: "https://drive.google.com/uc?id=0B1IBSEQW965yOEZsRGl0VnRFbG8", HQ: ""},
                {LQ: "https://drive.google.com/uc?id=0B1IBSEQW965yV3FOUTdnemRnNTQ", HQ: ""},
                {LQ: "https://drive.google.com/uc?id=0B1IBSEQW965yZGtoS2pxTkhNRzg", HQ: ""},
                {LQ: "https://drive.google.com/uc?id=0B1IBSEQW965yWEo2UXpDSVJLMUU", HQ: ""},
                {LQ: "https://drive.google.com/uc?id=0B1IBSEQW965ySlV6cFh3aXQ0MGM", HQ: ""},
                {LQ: "https://drive.google.com/uc?id=0B1IBSEQW965yR1U4WW9TbXFpY28", HQ: ""},
                {LQ: "https://drive.google.com/uc?id=0B1IBSEQW965yNEhLbGVsUHZaNGM", HQ: ""}],
            description: "",
            descriptionEN: ""
        },
        {
            name: "NEW YORK, NEW YORK",
            nameEN: "NEW YORK, NEW YORK",
            shortDescription: "CENTRUM NAUKI KOPERNIK / P2 ARCHITEKTEN",
            shortDescriptionEN: "COPERNICUS SCIENCE CENTRE / P2 ARCHITEKTEN",
            portfolioItemImage: "https://drive.google.com/uc?id=0B1IBSEQW965yTkZfU0ZXZlBubVE",
            imagesList: [{LQ: "https://drive.google.com/uc?id=0B1IBSEQW965yTkZfU0ZXZlBubVE", HQ: ""},
                {LQ: "https://drive.google.com/uc?id=0B1IBSEQW965yeklydUkzSVpKcW8", HQ: ""},
                {LQ: "https://drive.google.com/uc?id=0B1IBSEQW965ySmpmRUl3bERJSTg", HQ: ""},
                {LQ: "https://drive.google.com/uc?id=0B1IBSEQW965yY2NyTWhhQzdKTXc", HQ: ""},
                {LQ: "https://drive.google.com/uc?id=0B1IBSEQW965yVVdYeE1WZlZidkk", HQ: ""},
                {LQ: "https://drive.google.com/uc?id=0B1IBSEQW965yMFlLTzNSb09nYVk", HQ: ""},
                {LQ: "https://drive.google.com/uc?id=0B1IBSEQW965yWGNUT0FORUo4eDA", HQ: ""},
                {LQ: "https://drive.google.com/uc?id=0B1IBSEQW965yVmRka2JRZTNzTzQ", HQ: ""},
                {LQ: "https://drive.google.com/uc?id=0B1IBSEQW965yZXNjNzRRUHZYMEE", HQ: ""},
                {LQ: "https://drive.google.com/uc?id=0B1IBSEQW965yMmJHVG5fQkNHTHM", HQ: ""}],
            description: "",
            descriptionEN: ""
        },
        {
            name: "MORSKIE OPOWIEŚCI",
            nameEN: "SEA STORIES",
            shortDescription: "CENTRUM NAUKI KOPERNIK",
            shortDescriptionEN: "COPERNICUS SCIENCE CENTRE",
            portfolioItemImage: "https://drive.google.com/uc?id=0B1IBSEQW965yb0E3cFRPbmktSHM",
            imagesList: [{LQ: "https://drive.google.com/uc?id=0B1IBSEQW965yb0E3cFRPbmktSHM", HQ: ""},
                {LQ: "https://drive.google.com/uc?id=0B1IBSEQW965yWjBlMkVOWWxFU00", HQ: ""},
                {LQ: "https://drive.google.com/uc?id=0B1IBSEQW965yM3FpTGk4X2VITjA", HQ: ""},
                {LQ: "https://drive.google.com/uc?id=0B1IBSEQW965yOHp1SjJ0N3dseDg", HQ: ""},
                {LQ: "https://drive.google.com/uc?id=0B1IBSEQW965yUi15X1pXd3BnYk0", HQ: ""},
                {LQ: "https://drive.google.com/uc?id=0B1IBSEQW965yRXpFSV9veERKNHc", HQ: ""},
                {LQ: "https://drive.google.com/uc?id=0B1IBSEQW965yTlVva3hlYzg3NTQ", HQ: ""},
                {LQ: "https://drive.google.com/uc?id=0B1IBSEQW965yLVNCQVJsUDUxTWc", HQ: ""},
                {LQ: "https://drive.google.com/uc?id=0B1IBSEQW965ycHlNT2hlM1o3bWc", HQ: ""},
                {LQ: "https://drive.google.com/uc?id=0B1IBSEQW965yTkpwOHB1by1mcjA", HQ: ""},
                {LQ: "https://drive.google.com/uc?id=0B1IBSEQW965yTm1IY1JsQS1YbjA", HQ: ""},
                {LQ: "https://drive.google.com/uc?id=0B1IBSEQW965yNmhWb0N0R0ZOZlE", HQ: ""},
                {LQ: "https://drive.google.com/uc?id=0B1IBSEQW965yMndqVmRjRmR6cWc", HQ: ""},
                {LQ: "https://drive.google.com/uc?id=0B1IBSEQW965yYm82V1NwQ29Pd0U", HQ: ""},
                {LQ: "https://drive.google.com/uc?id=0B1IBSEQW965yc3BHY3k4ZzNYVE0", HQ: ""},
                {LQ: "https://drive.google.com/uc?id=0B1IBSEQW965yRUFpR0d0MVdmMnc", HQ: ""},
                {LQ: "https://drive.google.com/uc?id=0B1IBSEQW965yQWVNbWoyeFcwMlk", HQ: ""},
                {LQ: "https://drive.google.com/uc?id=0B1IBSEQW965yci1YTEpZR0VWWDA", HQ: ""},
                {LQ: "https://drive.google.com/uc?id=0B1IBSEQW965yaXc2bXJ5d0ZJQ00", HQ: ""},
                {LQ: "https://drive.google.com/uc?id=0B1IBSEQW965yQnBFcWs1bm9JaXM", HQ: ""},
                {LQ: "https://drive.google.com/uc?id=0B1IBSEQW965yVDJCUTNkZUI0NFk", HQ: ""}],
            description: "",
            descriptionEN: ""
        },
        {
            name: "GALILEO GALILEI",
            nameEN: "GALILEO GALILEI",
            shortDescription: "CREATIVE PLANET",
            shortDescriptionEN: "CREATIVE PLANET",
            portfolioItemImage: "https://drive.google.com/uc?id=0B1IBSEQW965yTjROanlONV9CT1E",
            imagesList: [{LQ: "https://drive.google.com/uc?id=0B1IBSEQW965yTjROanlONV9CT1E", HQ: ""},
                {LQ: "https://drive.google.com/uc?id=0B1IBSEQW965yU24zSklXTl9ucVE", HQ: ""},
                {LQ: "https://drive.google.com/uc?id=0B1IBSEQW965ydUdHXzFLbXk0dG8", HQ: ""},
                {LQ: "https://drive.google.com/uc?id=0B1IBSEQW965yTTlwQ3JZci0zTlU", HQ: ""},
                {LQ: "https://drive.google.com/uc?id=0B1IBSEQW965ySTFTSi1xNFYyRE0", HQ: ""},
                {LQ: "https://drive.google.com/uc?id=0B1IBSEQW965yYkNWR19nMlZKbEE", HQ: ""},
                {LQ: "https://drive.google.com/uc?id=0B1IBSEQW965yd2NNa1kzWmFNLTA", HQ: ""},
                {LQ: "https://drive.google.com/uc?id=0B1IBSEQW965ybmd6Y3Z6dEdVWms", HQ: ""},
                {LQ: "https://drive.google.com/uc?id=0B1IBSEQW965ySV9NcXRPeGlyY1E", HQ: ""}],
            description: "",
            descriptionEN: ""
        },
        {
            name: "KUCHENNE REWOLUCJE",
            nameEN: "KITCHEN REVOLUTIONS",
            shortDescription: "CODASTUDIO",
            shortDescriptionEN: "CODASTUDIO",
            portfolioItemImage: "https://drive.google.com/uc?id=0B1IBSEQW965yUjQ2ZGpiSG5pdU0",
            imagesList: [{LQ: "https://drive.google.com/uc?id=0B1IBSEQW965yUjQ2ZGpiSG5pdU0", HQ: "https://drive.google.com/uc?id=0B1IBSEQW965yLWQ3WlRMZzZhTTg"},
                {LQ: "https://drive.google.com/uc?id=0B1IBSEQW965ySU1Famp0NG9NdVk", HQ: "https://drive.google.com/uc?id=0B1IBSEQW965yZUw5RW9aQ3BVUnc"}],
            description: "",
            descriptionEN: ""
        },
        {
            name: "POKÓJ Z WIDOKIEM",
            nameEN: "A ROOM WITH A VIEW",
            shortDescription: "PRACA WŁASNA",
            shortDescriptionEN: "OWN WORK",
            portfolioItemImage: "https://drive.google.com/uc?id=0B1IBSEQW965ya2hTRkt3ZFRjeEk",
            imagesList: [{LQ: "https://drive.google.com/uc?id=0B1IBSEQW965ya2hTRkt3ZFRjeEk", HQ: "https://drive.google.com/uc?id=0B1IBSEQW965yd2F1NUstU0l6Y3c"},
                {LQ: "https://drive.google.com/uc?id=0B1IBSEQW965yZmk0bmdNc1lUUjQ", HQ: "https://drive.google.com/uc?id=0B1IBSEQW965yYXRvZTJIYjBPQ28"}],
            description: "",
            descriptionEN: ""
        },
        {
            name: "BONNER STRASSE",
            nameEN: "BONNER STRASSE",
            shortDescription: "P2 ARCHITEKTEN",
            shortDescriptionEN: "P2 ARCHITEKTEN",
            portfolioItemImage: "https://drive.google.com/uc?id=0B1IBSEQW965yNU4ybnBWNmRQWE0",
            imagesList: [{LQ: "https://drive.google.com/uc?id=0B1IBSEQW965yNU4ybnBWNmRQWE0", HQ: "https://drive.google.com/uc?id=0B1IBSEQW965yQ1lteEZrRkZuU1k"},
                {LQ: "https://drive.google.com/uc?id=0B1IBSEQW965yWTNfTkpudVNPTVE", HQ: "https://drive.google.com/uc?id=0B1IBSEQW965ya3F5dGN2a29uLWs"},
                {LQ: "https://drive.google.com/uc?id=0B1IBSEQW965yOXQyaEljeFdXNDA", HQ: "https://drive.google.com/uc?id=0B1IBSEQW965yQ0lJN3pWQlhwMWM"},
                {LQ: "https://drive.google.com/uc?id=0B1IBSEQW965yeWhnUkJBamdlRVE", HQ: "https://drive.google.com/uc?id=0B1IBSEQW965yVi1CSHBOQjVHTzg"}],
            description: "",
            descriptionEN: ""
        },
        {
            name: "PRĘDKOŚĆ DŹWIĘKU",
            nameEN: "SOUND SPEED",
            shortDescription: "INARKO",
            shortDescriptionEN: "INARKO",
            portfolioItemImage: "https://drive.google.com/uc?id=0B1IBSEQW965yRV83aVRZT1V3emM",
            imagesList: [{LQ: "https://drive.google.com/uc?id=0B1IBSEQW965yRV83aVRZT1V3emM", HQ: "https://drive.google.com/uc?id=0B1IBSEQW965yMmZBRjh3NUFkd0U"},
                {LQ: "https://drive.google.com/uc?id=0B1IBSEQW965yVDg0N2s5T2lKY28", HQ: "https://drive.google.com/uc?id=0B1IBSEQW965yN1d5QnFnSDNETUk"}],
            description: "",
            descriptionEN: ""
        },
        {
            name: "TAJEMNICZY OGRÓD",
            nameEN: "THE SECRET GARDEN",
            shortDescription: "PRACA WŁASNA",
            shortDescriptionEN: "OWN WORK",
            portfolioItemImage: "https://drive.google.com/uc?id=0B1IBSEQW965yT1o2VUlPOWdWUGc",
            imagesList: [{LQ: "https://drive.google.com/uc?id=0B1IBSEQW965yT1o2VUlPOWdWUGc", HQ: "https://drive.google.com/uc?id=0B1IBSEQW965yem9zN1RTUHA5aWc"}],
            description: "",
            descriptionEN: ""
        },
        {
            name: "DZIENNIKI MOTOCYKLOWE",
            nameEN: "MOTORCYCLE DIARIES",
            shortDescription: "PRACA WŁASNA",
            shortDescriptionEN: "OWN WORK",
            portfolioItemImage: "https://drive.google.com/uc?id=0B1IBSEQW965yaVFpdDZZSEZLeGs",
            imagesList: [{LQ: "https://drive.google.com/uc?id=0B1IBSEQW965yaVFpdDZZSEZLeGs", HQ: "https://drive.google.com/uc?id=0B1IBSEQW965yN3lUWkh2S2luRU0"},
                {LQ: "https://drive.google.com/uc?id=0B1IBSEQW965ydzRUNmc3RHhmZGM", HQ: ""},
                {LQ: "https://drive.google.com/uc?id=0B1IBSEQW965yQWxYdWR4ZTJGaGs", HQ: "https://drive.google.com/uc?id=0B1IBSEQW965yTTFKNjdjNkppZ1E"},
                {LQ: "https://drive.google.com/uc?id=0B1IBSEQW965ydUdIN1JUbmdQUDQ", HQ: ""}],
            description: "",
            descriptionEN: ""
        }]


    $scope.carouselItems = [
        { name: "TABULA RASA", description: "Lorem ipsum dolor sit amed", src: "https://drive.google.com/uc?id=0B1IBSEQW965yNkpDQW1OV1FsWE0" },
        { name: "POŻEGNANIE Z AFRYKĄ", description: "Lorem ipsum dolor sit amed", src: "https://drive.google.com/uc?id=0B1IBSEQW965ySFZ4UVhxdFBLMU0" },
        { name: "BIBLIA GUTENBERGA", description: "Lorem ipsum dolor sit amed", src: "https://drive.google.com/uc?id=0B1IBSEQW965ybERvbkI3bk4zdk0" }
    ]
});



