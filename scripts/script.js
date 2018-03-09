function backGroundToggle(x) {
    $(`.project${x}Link`).hover(function () {
        $(`.project${x}`).toggleClass('backGroundOff backGroundOn');
        console.log('hhihi');
    })
};

backGroundToggle('One');
backGroundToggle('Two');
backGroundToggle('Three');


// function backGroundFade(x) {
//     $(`.project${x}Link`)
//         .mouseenter(function () {
//             $(`.project${x}`).animate({ opacity: 0 }, 0).css('background-image',
//             `url(../images/project${x}Background.jpg)`).animate({ opacity: 1 }, 2500);
//             console.log('fadein')
//         })
//         .mouseleave(function() {
//             $(`.project${x}`).animate({ opacity: 1 }, 0).css('background-image',
//                 `url(../images/project${x}Background.jpg)`).animate({ opacity: 0 }, 2500);
//             console.log('fadeout')
//         });
// };

let myEfficientFn = debounce(function() {

}, 250;


function debounce(wait) {
    return function(x){
        $(`.project${x}Link`)
            .mouseenter(function () {
                $(`.project${x}`).animate({ opacity: 0 }, 0).css('background-image',
                    `url(../images/project${x}Background.jpg)`).animate({ opacity: 1 }, 2500);
                console.log('fadein')
            })
            .mouseleave(function () {
                $(`.project${x}`).animate({ opacity: 1 }, 0).css('background-image',
                    `url(../images/project${x}Background.jpg)`).animate({ opacity: 0 }, 2500);
                console.log('fadeout')
            });  
    };
};







// backGroundFade('Four')
