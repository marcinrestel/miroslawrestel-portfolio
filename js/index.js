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

    $scope.aboutImageSrc = "/img/foto_01.png";
    $scope.aboutText = "Moja przygoda z grafiką rozpoczęła się na studiach, kiedy stworzyłem pierwsze wizualizacje 3D.\
                        Swoje umiejętności doskonaliłem w polskich i niemieckich biurach architektonicznych. W ostatnim czasie pracowałem przy\
                        dwóch filmowych produkcjach fulldome zrealizowanych dla Planetarium Niebo Kopernika.";

    $scope.portfolioItems = [
        {
            name: "HALO ZIEMIA",
            nameEN: "HELLO EARTH",
            shortDescription: "CENTRUM NAUKI KOPERNIK",
            shortDescriptionEN: "COPERNICUS SCIENCE CENTRE",
            portfolioItemImage: "/img/01_HALO_ZIEMIA/810/1.jpg",
            imagesList: [{LQ: "/img/01_HALO_ZIEMIA/810/1.jpg", HQ: "/img/01_HALO_ZIEMIA/2048/1.jpg"},
                {LQ: "/img/01_HALO_ZIEMIA/810/2.jpg", HQ: "/img/01_HALO_ZIEMIA/2048/2.jpg"},
                {LQ: "/img/01_HALO_ZIEMIA/810/3.jpg", HQ: "/img/01_HALO_ZIEMIA/2048/3.jpg"},
                {LQ: "/img/01_HALO_ZIEMIA/810/4.jpg", HQ: "/img/01_HALO_ZIEMIA/2048/4.jpg"},
                {LQ: "/img/01_HALO_ZIEMIA/810/5.jpg", HQ: "/img/01_HALO_ZIEMIA/2048/5.jpg"},
                {LQ: "/img/01_HALO_ZIEMIA/810/6.jpg", HQ: "/img/01_HALO_ZIEMIA/2048/6.jpg"},
                {LQ: "/img/01_HALO_ZIEMIA/810/7.jpg", HQ: "/img/01_HALO_ZIEMIA/2048/7.jpg"},
                {LQ: "/img/01_HALO_ZIEMIA/810/8.jpg", HQ: "/img/01_HALO_ZIEMIA/2048/8.jpg"},
                {LQ: "/img/01_HALO_ZIEMIA/810/9.jpg", HQ: "/img/01_HALO_ZIEMIA/2048/9.jpg"},
                {LQ: "/img/01_HALO_ZIEMIA/810/10.jpg", HQ: "/img/01_HALO_ZIEMIA/2048/10.jpg"},
                {LQ: "/img/01_HALO_ZIEMIA/810/11.jpg", HQ: "/img/01_HALO_ZIEMIA/2048/11.jpg"},
                {LQ: "/img/01_HALO_ZIEMIA/810/12.jpg", HQ: "/img/01_HALO_ZIEMIA/2048/12.jpg"},
                {LQ: "/img/01_HALO_ZIEMIA/810/13.jpg", HQ: "/img/01_HALO_ZIEMIA/2048/13.jpg"},
                {LQ: "/img/01_HALO_ZIEMIA/810/14.jpg", HQ: "/img/01_HALO_ZIEMIA/2048/14.jpg"},
                {LQ: "/img/01_HALO_ZIEMIA/810/15.jpg", HQ: "/img/01_HALO_ZIEMIA/2048/15.jpg"},
                {LQ: "/img/01_HALO_ZIEMIA/810/16.jpg", HQ: "/img/01_HALO_ZIEMIA/2048/16.jpg"},
                {LQ: "/img/01_HALO_ZIEMIA/810/17.jpg", HQ: "/img/01_HALO_ZIEMIA/2048/17.jpg"},
                {LQ: "/img/01_HALO_ZIEMIA/810/18.jpg", HQ: "/img/01_HALO_ZIEMIA/2048/18.jpg"}],
            description: "Projekt wykonany w technologii fulldome na zlecenie Planetarium Niebo Kopernika i Centrum Nauki Kopernik.",
            descriptionEN: "Fulldome project commissioned by Copernicus Copernicus Planetarium and Copernicus Science Center."
        },
        {
            name: "NA SKRZYDŁACH MARZEŃ",
            nameEN: "DREAM TO FLY",
            shortDescription: "CENTRUM NAUKI KOPERNIK",
            shortDescriptionEN: "COPERNICUS SCIENCE CENTRE",
            portfolioItemImage: "/img/02_NA_SKRZYDLACH_MARZEN/810/1.jpg",
            imagesList: [{LQ: "/img/02_NA_SKRZYDLACH_MARZEN/810/1.jpg", HQ: "/img/02_NA_SKRZYDLACH_MARZEN/2048/1.jpg"},
                {LQ: "/img/02_NA_SKRZYDLACH_MARZEN/810/2.jpg", HQ: "/img/02_NA_SKRZYDLACH_MARZEN/2048/2.jpg"},
                {LQ: "/img/02_NA_SKRZYDLACH_MARZEN/810/3.jpg", HQ: "/img/02_NA_SKRZYDLACH_MARZEN/2048/3.jpg"},
                {LQ: "/img/02_NA_SKRZYDLACH_MARZEN/810/4.jpg", HQ: "/img/02_NA_SKRZYDLACH_MARZEN/2048/4.jpg"},
                {LQ: "/img/02_NA_SKRZYDLACH_MARZEN/810/5.jpg", HQ: "/img/02_NA_SKRZYDLACH_MARZEN/2048/5.jpg"},
                {LQ: "/img/02_NA_SKRZYDLACH_MARZEN/810/6.jpg", HQ: "/img/02_NA_SKRZYDLACH_MARZEN/2048/6.jpg"},
                {LQ: "/img/02_NA_SKRZYDLACH_MARZEN/810/7.jpg", HQ: "/img/02_NA_SKRZYDLACH_MARZEN/2048/7.jpg"},
                {LQ: "/img/02_NA_SKRZYDLACH_MARZEN/810/8.jpg", HQ: "/img/02_NA_SKRZYDLACH_MARZEN/2048/8.jpg"},
                {LQ: "/img/02_NA_SKRZYDLACH_MARZEN/810/9.jpg", HQ: "/img/02_NA_SKRZYDLACH_MARZEN/2048/9.jpg"},
                {LQ: "/img/02_NA_SKRZYDLACH_MARZEN/810/10.jpg", HQ: "/img/02_NA_SKRZYDLACH_MARZEN/2048/10.jpg"},
                {LQ: "/img/02_NA_SKRZYDLACH_MARZEN/810/11.jpg", HQ: "/img/02_NA_SKRZYDLACH_MARZEN/2048/11.jpg"},
                {LQ: "/img/02_NA_SKRZYDLACH_MARZEN/810/12.jpg", HQ: "/img/02_NA_SKRZYDLACH_MARZEN/2048/12.jpg"},
                {LQ: "/img/02_NA_SKRZYDLACH_MARZEN/810/13.jpg", HQ: "/img/02_NA_SKRZYDLACH_MARZEN/2048/13.jpg"}],
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
            portfolioItemImage: "/img/03_NA_PRZEDMIESCIACH/1.jpg",
            imagesList: [{LQ: "/img/03_NA_PRZEDMIESCIACH/1.jpg", HQ: "/img/03_NA_PRZEDMIESCIACH/1210/1.jpg"},
                {LQ: "/img/03_NA_PRZEDMIESCIACH/2.jpg", HQ: "/img/03_NA_PRZEDMIESCIACH/1210/2.jpg"},
                {LQ: "/img/03_NA_PRZEDMIESCIACH/3.jpg", HQ: "/img/03_NA_PRZEDMIESCIACH/1210/3.jpg"},
                {LQ: "/img/03_NA_PRZEDMIESCIACH/4.jpg", HQ: "/img/03_NA_PRZEDMIESCIACH/1210/4.jpg"},
                {LQ: "/img/03_NA_PRZEDMIESCIACH/5.jpg", HQ: "/img/03_NA_PRZEDMIESCIACH/1210/5.jpg"}],
            description: "",
            descriptionEN: ""
        },
        {
            name: "POŻEGNANIE Z AFRYKĄ",
            nameEN: "OUT OF AFRICA",
            shortDescription: "PROJEKT ARCHITEKTURA",
            shortDescriptionEN: "",
            portfolioItemImage: "/img/04_POZEGNANIE_Z_AFRYKA/1.jpg",
            imagesList: [{LQ: "/img/04_POZEGNANIE_Z_AFRYKA/1.jpg", HQ: "/img/04_POZEGNANIE_Z_AFRYKA/1210/1.jpg"},
                {LQ: "/img/04_POZEGNANIE_Z_AFRYKA/2.jpg", HQ: "/img/04_POZEGNANIE_Z_AFRYKA/1210/2.jpg"},
                {LQ: "/img/04_POZEGNANIE_Z_AFRYKA/3.jpg", HQ: "/img/04_POZEGNANIE_Z_AFRYKA/1210/3.jpg"}],
            description: "",
            descriptionEN: ""
        },
        {
            name: "HOME, SWEET HOME",
            nameEN: "HOME, SWEET HOME",
            shortDescription: "CREATIVE PLANET",
            shortDescriptionEN: "CREATIVE PLANET",
            portfolioItemImage: "/img/05_HOME_SWEET_HOME/01.jpg",
            imagesList: [{LQ: "/img/05_HOME_SWEET_HOME/01.jpg", HQ: ""},
                {LQ: "/img/05_HOME_SWEET_HOME/02.jpg", HQ: ""},
                {LQ: "/img/05_HOME_SWEET_HOME/03.jpg", HQ: ""},
                {LQ: "/img/05_HOME_SWEET_HOME/04.jpg", HQ: ""},
                {LQ: "/img/05_HOME_SWEET_HOME/05.jpg", HQ: ""},
                {LQ: "/img/05_HOME_SWEET_HOME/06.jpg", HQ: ""},
                {LQ: "/img/05_HOME_SWEET_HOME/08.jpg", HQ: ""},
                {LQ: "/img/05_HOME_SWEET_HOME/09.jpg", HQ: ""},
                {LQ: "/img/05_HOME_SWEET_HOME/10.jpg", HQ: ""},
                {LQ: "/img/05_HOME_SWEET_HOME/11.jpg", HQ: ""},
                {LQ: "/img/05_HOME_SWEET_HOME/12.jpg", HQ: ""},
                {LQ: "/img/05_HOME_SWEET_HOME/13.jpg", HQ: ""}],
            description: "",
            descriptionEN: ""
        },
        {
            name: "ROBINSON CRUSOE",
            nameEN: "ROBINSON CRUSOE",
            shortDescription: "CENTRUM NAUKI KOPERNIK",
            shortDescriptionEN: "COPERNICUS SCIENCE CENTRE",
            portfolioItemImage: "/img/06_ROBINSON_CRUSOE/1.jpg",
            imagesList: [{LQ: "/img/06_ROBINSON_CRUSOE/1.jpg", HQ: ""},
                {LQ: "/img/06_ROBINSON_CRUSOE/2.jpg", HQ: ""},
                {LQ: "/img/06_ROBINSON_CRUSOE/3.jpg", HQ: ""},
                {LQ: "/img/06_ROBINSON_CRUSOE/4.jpg", HQ: ""},
                {LQ: "/img/06_ROBINSON_CRUSOE/5.jpg", HQ: ""},
                {LQ: "/img/06_ROBINSON_CRUSOE/6.jpg", HQ: ""},
                {LQ: "/img/06_ROBINSON_CRUSOE/7.jpg", HQ: ""},
                {LQ: "/img/06_ROBINSON_CRUSOE/8.jpg", HQ: ""},
                {LQ: "/img/06_ROBINSON_CRUSOE/9.jpg", HQ: ""},
                {LQ: "/img/06_ROBINSON_CRUSOE/10.jpg", HQ: ""},
                {LQ: "/img/06_ROBINSON_CRUSOE/11.jpg", HQ: ""},
                {LQ: "/img/06_ROBINSON_CRUSOE/12.jpg", HQ: ""},
                {LQ: "/img/06_ROBINSON_CRUSOE/13.jpg", HQ: ""}],
            description: "",
            descriptionEN: ""
        },
        {
            name: "TABULA RASA",
            nameEN: "TABULA RASA",
            shortDescription: "CREATIVE PLANET",
            shortDescriptionEN: "CREATIVE PLANET",
            portfolioItemImage: "/img/07_TABULA_RASA/1.jpg",
            imagesList: [{LQ: "/img/07_TABULA_RASA/1.jpg", HQ: ""},
                {LQ: "/img/07_TABULA_RASA/2.jpg", HQ: ""},
                {LQ: "/img/07_TABULA_RASA/3.jpg", HQ: ""},
                {LQ: "/img/07_TABULA_RASA/4.jpg", HQ: ""},
                {LQ: "/img/07_TABULA_RASA/5.jpg", HQ: ""},
                {LQ: "/img/07_TABULA_RASA/6.jpg", HQ: ""}],
            description: "",
            descriptionEN: ""
        },
        {
            name: "BIBLIA GUTENBERGA",
            nameEN: "GUTENBERG BIBLE",
            shortDescription: "CENTRUM NAUKI KOPERNIK",
            shortDescriptionEN: "COPERNICUS SCIENCE CENTRE",
            portfolioItemImage: "/img/08_BIBLIA_GUTENBERGA/1.jpg",
            imagesList: [{LQ: "/img/08_BIBLIA_GUTENBERGA/1.jpg", HQ: ""},
                {LQ: "/img/08_BIBLIA_GUTENBERGA/2.jpg", HQ: ""},
                {LQ: "/img/08_BIBLIA_GUTENBERGA/3.jpg", HQ: ""},
                {LQ: "/img/08_BIBLIA_GUTENBERGA/4.jpg", HQ: ""},
                {LQ: "/img/08_BIBLIA_GUTENBERGA/5.jpg", HQ: ""},
                {LQ: "/img/08_BIBLIA_GUTENBERGA/6.jpg", HQ: ""},
                {LQ: "/img/08_BIBLIA_GUTENBERGA/7.jpg", HQ: ""},
                {LQ: "/img/08_BIBLIA_GUTENBERGA/8.jpg", HQ: ""},
                {LQ: "/img/08_BIBLIA_GUTENBERGA/9.jpg", HQ: ""},
                {LQ: "/img/08_BIBLIA_GUTENBERGA/10.jpg", HQ: ""}],
            description: "",
            descriptionEN: ""
        },
        {
            name: "ŻYCIE WEWNĘTRZNE",
            nameEN: "INNER LIFE",
            shortDescription: "CADMAN",
            shortDescriptionEN: "CADMAN",
            portfolioItemImage: "/img/09_ZYCIE_WEWNETRZNE/1.jpg",
            imagesList: [{LQ: "/img/09_ZYCIE_WEWNETRZNE/1.jpg", HQ: "/img/09_ZYCIE_WEWNETRZNE/3k/1.jpg"},
                {LQ: "/img/09_ZYCIE_WEWNETRZNE/2.jpg", HQ: "/img/09_ZYCIE_WEWNETRZNE/3k/2.jpg"},
                {LQ: "/img/09_ZYCIE_WEWNETRZNE/3.jpg", HQ: "/img/09_ZYCIE_WEWNETRZNE/3k/3.jpg"},
                {LQ: "/img/09_ZYCIE_WEWNETRZNE/4.jpg", HQ: "/img/09_ZYCIE_WEWNETRZNE/3k/4.jpg"},
                {LQ: "/img/09_ZYCIE_WEWNETRZNE/5.jpg", HQ: "/img/09_ZYCIE_WEWNETRZNE/3k/5.jpg"},
                {LQ: "/img/09_ZYCIE_WEWNETRZNE/6.jpg", HQ: "/img/09_ZYCIE_WEWNETRZNE/3k/6.jpg"}],
            description: "",
            descriptionEN: ""
        },
        {
            name: "DOM WSCHODZĄCEGO SŁOŃCA",
            nameEN: "HOUSE OF THE RISING SUN",
            shortDescription: "QUADRO",
            shortDescriptionEN: "QUADRO",
            portfolioItemImage: "/img/10_DOM_WSCHODZACEGO_SLONCA/1.jpg",
            imagesList: [{LQ: "/img/10_DOM_WSCHODZACEGO_SLONCA/1.jpg", HQ: "/img/10_DOM_WSCHODZACEGO_SLONCA/4k/1.jpg"},
                {LQ: "/img/10_DOM_WSCHODZACEGO_SLONCA/2.jpg", HQ: "/img/10_DOM_WSCHODZACEGO_SLONCA/4k/2.jpg"}],
            description: "",
            descriptionEN: ""
        },
        {
            name: "PUSTYNNA BURZA",
            nameEN: "DESERT STORM",
            shortDescription: "CENTRUM NAUKI KOPERNIK",
            shortDescriptionEN: "COPERNICUS SCIENCE CENTRE",
            portfolioItemImage: "/img/11_PUSTYNNA_BURZA/1.jpg",
            imagesList: [{LQ: "/img/11_PUSTYNNA_BURZA/1.jpg", HQ: ""},
                {LQ: "/img/11_PUSTYNNA_BURZA/2.jpg", HQ: ""},
                {LQ: "/img/11_PUSTYNNA_BURZA/3.jpg", HQ: ""},
                {LQ: "/img/11_PUSTYNNA_BURZA/4.jpg", HQ: ""},
                {LQ: "/img/11_PUSTYNNA_BURZA/5.jpg", HQ: ""},
                {LQ: "/img/11_PUSTYNNA_BURZA/6.jpg", HQ: ""},
                {LQ: "/img/11_PUSTYNNA_BURZA/7.jpg", HQ: ""},
                {LQ: "/img/11_PUSTYNNA_BURZA/8.jpg", HQ: ""},
                {LQ: "/img/11_PUSTYNNA_BURZA/9.jpg", HQ: ""},
                {LQ: "/img/11_PUSTYNNA_BURZA/10.jpg", HQ: ""},
                {LQ: "/img/11_PUSTYNNA_BURZA/11.jpg", HQ: ""},
                {LQ: "/img/11_PUSTYNNA_BURZA/12.jpg", HQ: ""},
                {LQ: "/img/11_PUSTYNNA_BURZA/13.jpg", HQ: ""},
                {LQ: "/img/11_PUSTYNNA_BURZA/14.jpg", HQ: ""},
                {LQ: "/img/11_PUSTYNNA_BURZA/15.jpg", HQ: ""},
                {LQ: "/img/11_PUSTYNNA_BURZA/16.jpg", HQ: ""},
                {LQ: "/img/11_PUSTYNNA_BURZA/17.jpg", HQ: ""},
                {LQ: "/img/11_PUSTYNNA_BURZA/18.jpg", HQ: ""},
                {LQ: "/img/11_PUSTYNNA_BURZA/19.jpg", HQ: ""},
                {LQ: "/img/11_PUSTYNNA_BURZA/20.jpg", HQ: ""},
                {LQ: "/img/11_PUSTYNNA_BURZA/21.jpg", HQ: ""},
                {LQ: "/img/11_PUSTYNNA_BURZA/22.jpg", HQ: ""},
                {LQ: "/img/11_PUSTYNNA_BURZA/23.jpg", HQ: ""}],
            description: "",
            descriptionEN: ""
        },
        {
            name: "NEW YORK, NEW YORK",
            nameEN: "NEW YORK, NEW YORK",
            shortDescription: "CENTRUM NAUKI KOPERNIK / P2 ARCHITEKTEN",
            shortDescriptionEN: "COPERNICUS SCIENCE CENTRE / P2 ARCHITEKTEN",
            portfolioItemImage: "/img/12_NEW_YORK_NEW_YORK/1.jpg",
            imagesList: [{LQ: "/img/12_NEW_YORK_NEW_YORK/1.jpg", HQ: ""},
                {LQ: "/img/12_NEW_YORK_NEW_YORK/2.jpg", HQ: ""},
                {LQ: "/img/12_NEW_YORK_NEW_YORK/3.jpg", HQ: ""},
                {LQ: "/img/12_NEW_YORK_NEW_YORK/4.jpg", HQ: ""},
                {LQ: "/img/12_NEW_YORK_NEW_YORK/5.jpg", HQ: ""},
                {LQ: "/img/12_NEW_YORK_NEW_YORK/6.jpg", HQ: ""},
                {LQ: "/img/12_NEW_YORK_NEW_YORK/7.jpg", HQ: ""},
                {LQ: "/img/12_NEW_YORK_NEW_YORK/8.jpg", HQ: ""},
                {LQ: "/img/12_NEW_YORK_NEW_YORK/9.jpg", HQ: ""},
                {LQ: "/img/12_NEW_YORK_NEW_YORK/10.jpg", HQ: ""},
                {LQ: "/img/12_NEW_YORK_NEW_YORK/11.jpg", HQ: ""}],
            description: "",
            descriptionEN: ""
        },
        {
            name: "MORSKIE OPOWIEŚCI",
            nameEN: "SEA STORIES",
            shortDescription: "CENTRUM NAUKI KOPERNIK",
            shortDescriptionEN: "COPERNICUS SCIENCE CENTRE",
            portfolioItemImage: "/img/13_MORSKIE_OPOWIESCI/1.jpg",
            imagesList: [{LQ: "/img/13_MORSKIE_OPOWIESCI/1.jpg", HQ: ""},
                {LQ: "/img/13_MORSKIE_OPOWIESCI/2.jpg", HQ: ""},
                {LQ: "/img/13_MORSKIE_OPOWIESCI/3.jpg", HQ: ""},
                {LQ: "/img/13_MORSKIE_OPOWIESCI/4.jpg", HQ: ""},
                {LQ: "/img/13_MORSKIE_OPOWIESCI/5.jpg", HQ: ""},
                {LQ: "/img/13_MORSKIE_OPOWIESCI/6.jpg", HQ: ""},
                {LQ: "/img/13_MORSKIE_OPOWIESCI/7.jpg", HQ: ""},
                {LQ: "/img/13_MORSKIE_OPOWIESCI/8.jpg", HQ: ""},
                {LQ: "/img/13_MORSKIE_OPOWIESCI/9.jpg", HQ: ""},
                {LQ: "/img/13_MORSKIE_OPOWIESCI/10.jpg", HQ: ""},
                {LQ: "/img/13_MORSKIE_OPOWIESCI/11.jpg", HQ: ""},
                {LQ: "/img/13_MORSKIE_OPOWIESCI/12.jpg", HQ: ""},
                {LQ: "/img/13_MORSKIE_OPOWIESCI/13.jpg", HQ: ""},
                {LQ: "/img/13_MORSKIE_OPOWIESCI/14.jpg", HQ: ""},
                {LQ: "/img/13_MORSKIE_OPOWIESCI/15.jpg", HQ: ""},
                {LQ: "/img/13_MORSKIE_OPOWIESCI/16.jpg", HQ: ""},
                {LQ: "/img/13_MORSKIE_OPOWIESCI/17.jpg", HQ: ""},
                {LQ: "/img/13_MORSKIE_OPOWIESCI/18.jpg", HQ: ""},
                {LQ: "/img/13_MORSKIE_OPOWIESCI/19.jpg", HQ: ""},
                {LQ: "/img/13_MORSKIE_OPOWIESCI/20.jpg", HQ: ""},
                {LQ: "/img/13_MORSKIE_OPOWIESCI/21.jpg", HQ: ""}],
            description: "",
            descriptionEN: ""
        },
        {
            name: "GALILEO GALILEI",
            nameEN: "GALILEO GALILEI",
            shortDescription: "CREATIVE PLANET",
            shortDescriptionEN: "CREATIVE PLANET",
            portfolioItemImage: "/img/14_GALILEO_GALILEI/1.jpg",
            imagesList: [{LQ: "/img/14_GALILEO_GALILEI/1.jpg", HQ: ""},
                {LQ: "/img/14_GALILEO_GALILEI/2.jpg", HQ: ""},
                {LQ: "/img/14_GALILEO_GALILEI/3.jpg", HQ: ""},
                {LQ: "/img/14_GALILEO_GALILEI/4.jpg", HQ: ""},
                {LQ: "/img/14_GALILEO_GALILEI/5.jpg", HQ: ""},
                {LQ: "/img/14_GALILEO_GALILEI/6.jpg", HQ: ""},
                {LQ: "/img/14_GALILEO_GALILEI/7.jpg", HQ: ""},
                {LQ: "/img/14_GALILEO_GALILEI/8.jpg", HQ: ""},
                {LQ: "/img/14_GALILEO_GALILEI/9.jpg", HQ: ""}],
            description: "",
            descriptionEN: ""
        },
        {
            name: "KUCHENNE REWOLUCJE",
            nameEN: "KITCHEN REVOLUTIONS",
            shortDescription: "CODASTUDIO",
            shortDescriptionEN: "CODASTUDIO",
            portfolioItemImage: "/img/15_KUCHENNE_REWOLUCJE/1.jpg",
            imagesList: [{LQ: "/img/15_KUCHENNE_REWOLUCJE/1.jpg", HQ: "/img/15_KUCHENNE_REWOLUCJE/4k/1.jpg"},
                {LQ: "/img/15_KUCHENNE_REWOLUCJE/2.jpg", HQ: "/img/15_KUCHENNE_REWOLUCJE/4k/2.jpg"}],
            description: "",
            descriptionEN: ""
        },
        {
            name: "POKÓJ Z WIDOKIEM",
            nameEN: "A ROOM WITH A VIEW",
            shortDescription: "PRACA WŁASNA",
            shortDescriptionEN: "OWN WORK",
            portfolioItemImage: "/img/16_POKOJ_Z_WIDOKIEM/1.jpg",
            imagesList: [{LQ: "/img/16_POKOJ_Z_WIDOKIEM/1.jpg", HQ: "/img/16_POKOJ_Z_WIDOKIEM/4k/1.jpg"},
                {LQ: "/img/16_POKOJ_Z_WIDOKIEM/2.jpg", HQ: "/img/16_POKOJ_Z_WIDOKIEM/4k/2.jpg"}],
            description: "",
            descriptionEN: ""
        },
        {
            name: "BONNER STRASSE",
            nameEN: "BONNER STRASSE",
            shortDescription: "P2 ARCHITEKTEN",
            shortDescriptionEN: "P2 ARCHITEKTEN",
            portfolioItemImage: "/img/17_BONNER_STRASSE/1.jpg",
            imagesList: [{LQ: "/img/17_BONNER_STRASSE/1.jpg", HQ: "/img/17_BONNER_STRASSE/2k/1.jpg"},
                {LQ: "/img/17_BONNER_STRASSE/2.jpg", HQ: "/img/17_BONNER_STRASSE/2k/2.jpg"},
                {LQ: "/img/17_BONNER_STRASSE/3.jpg", HQ: "/img/17_BONNER_STRASSE/2k/3.jpg"},
                {LQ: "/img/17_BONNER_STRASSE/4.jpg", HQ: "/img/17_BONNER_STRASSE/2k/4.jpg"}],
            description: "",
            descriptionEN: ""
        },
        {
            name: "PRĘDKOŚĆ DŹWIĘKU",
            nameEN: "SOUND SPEED",
            shortDescription: "INARKO",
            shortDescriptionEN: "INARKO",
            portfolioItemImage: "/img/18_PREDKOSC_DZWIEKU/1.jpg",
            imagesList: [{LQ: "/img/18_PREDKOSC_DZWIEKU/1.jpg", HQ: "/img/18_PREDKOSC_DZWIEKU/2k/1.jpg"},
                {LQ: "/img/18_PREDKOSC_DZWIEKU/2.jpg", HQ: "/img/18_PREDKOSC_DZWIEKU/2k/2.jpg"}],
            description: "",
            descriptionEN: ""
        },
        {
            name: "TAJEMNICZY OGRÓD",
            nameEN: "THE SECRET GARDEN",
            shortDescription: "PRACA WŁASNA",
            shortDescriptionEN: "OWN WORK",
            portfolioItemImage: "/img/19_TAJEMNICZY_OGROD/1.jpg",
            imagesList: [{LQ: "/img/19_TAJEMNICZY_OGROD/1.jpg", HQ: "/img/19_TAJEMNICZY_OGROD/2k/1.jpg"}],
            description: "",
            descriptionEN: ""
        },
        {
            name: "DZIENNIKI MOTOCYKLOWE",
            nameEN: "MOTORCYCLE DIARIES",
            shortDescription: "PRACA WŁASNA",
            shortDescriptionEN: "OWN WORK",
            portfolioItemImage: "https://drive.google.com/uc?id=0B1IBSEQW965yaVFpdDZZSEZLeGs",
            imagesList: [{LQ: "/img/20_DZIENNIKI_MOTOCYKLOWE/1.jpg", HQ: "/img/20_DZIENNIKI_MOTOCYKLOWE/duze/1.jpg"},
                {LQ: "/img/20_DZIENNIKI_MOTOCYKLOWE/2.jpg", HQ: ""},
                {LQ: "/img/20_DZIENNIKI_MOTOCYKLOWE/3.jpg", HQ: "/img/20_DZIENNIKI_MOTOCYKLOWE/duze/3.jpg"},
                {LQ: "/img/20_DZIENNIKI_MOTOCYKLOWE/4.jpg", HQ: ""}],
            description: "",
            descriptionEN: ""
        }]


    $scope.carouselItems = [
        { name: "DOM WSCHODZĄDZEGO SŁOŃCA", description: "", src: "/img/slajdy/1.jpg" },
        { name: "NA PRZEDMIEŚCIACH", description: "", src: "/img/slajdy/2.jpg" },
        { name: "TAJEMNICZY OGRÓD", description: "", src: "/img/slajdy/3.jpg" }
    ]
});



