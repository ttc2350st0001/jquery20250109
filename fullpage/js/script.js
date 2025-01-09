$('#fullpage').fullpage( {
    autoScrolling: true,
    navingation: true,
    anchors: [
        'firstPage',
        'secondPage',
        'thirdPage',
        'fourthPage',
    ],
    sectionsColor: [
        `#FF5F44`,
        `#0798EC`,
        `#FC6C7C`,
        `#FEC401`,
    ],
    responsiveWidth: 900 //900px以下の画面端で自動スクロール
});