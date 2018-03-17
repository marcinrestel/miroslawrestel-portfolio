angular
    .module("app")
    .constant('MODAL_SCROLL_CONFIG', {
        autoHideScrollbar: false,
        theme: 'light-3',
        advanced: {
            updateOnContentResize: true
        },
        scrollInertia: 300,
        axis: 'y'
    })