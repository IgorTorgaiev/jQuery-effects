// jQuery Effects
// First, let's see what can happen with the text when you click the buttons one by one.

// $(document).ready(function(){
//     $("#hide").click(function(){
//         $("p").hide();
//     });
//     $("#show").click(function(){
//         $("p").show();
//     });
// });

// Slow and Fast

// $(document).ready(function(){
//     $("#hide").click(function(){
//         $("#first").hide(1000);
//     });
//     $("#show").click(function(){
//         $("#second").show("fast");
//     });
//     $("#show").click(function(){
//         $("#first").show("fast");
//     });
// });

// Fade: fadeIn() and fadeOut()

// $(document).ready(function(){
//     $("button").click(function(){
//         $("#first").fadeIn("slow");
//     });
//     $("button").click(function(){
//         $("#second").fadeIn(1000);
//     });
//     $("button").click(function(){
//         $("#third").fadeIn("fast");
//     });
//     $("button").click(function(){
//         $("#answer").show(3000);
//     });
//     $("button").click(function(){
//         $("#answer").hide("slow");
//     });
// });

// $(document).ready(function(){
//     $("#clear").click(function(){
//         $("#third").fadeOut("fast");
//     });
//     $("#clear").click(function(){
//         $("#second").fadeOut();
//     });
//     $("#clear").click(function(){
//         $("#first").fadeOut("fast");
//     });
// });

// fadeToggle()

// $(document).ready(function(){
//     $("button").click(function(){
//         $("#first").fadeToggle("slow");
//     });
//     $("button").click(function(){
//         $("#second").fadeToggle(1000);
//     });
//     $("button").click(function(){
//         $("#third").fadeToggle("fast");
//     });
// });

// $(document).ready(function(){
//     $("#smile").click(function(){
//         $("img").fadeIn("slow");
//     });
// });

// Now, we will substitute all the previous fade-related sub-topics with the fadeTo()

// $(document).ready(function(){
//     $("button").click(function(){
//         $("#first").fadeTo("slow", 0.3);
//     });
//     $("button").click(function(){
//         $("#second").fadeTo("slow", 0.6);
//     });
//     $("button").click(function(){
//         $("#third").fadeTo("slow", 0.9);
//     });
//     $("button").click(function() {
//         $("img").fadeTo("slow", 0.5);
//     });
// });

// Slide: slideDown()

// $(document).ready(function(){
//     $("#click").click(function(){
//         $("#text").slideDown("slow");
//     });
// });

// Slide: slideUp()

// $(document).ready(function(){
//     $("#click").click(function(){
//         $("#text").slideUp(1000);
//     });
// });

// SlideToggle()

// $(document).ready(function(){
//     $("#push").click(function(){
//         $("img").slideToggle();
//     });
// });

// Animations

// $(document).ready(function(){
//     $("#right").click(function(){
//         $("img").animate({
//             left: '400px'
//         });
//     });
//     $("#left").click(function(){
//         $("img").animate({
//             left: '0px'
//         });
//     });
// });


// $(document).ready(function(){
//     $("#right").click(function(){
//         $("img").animate({left: '400px'});
//     });
//     $("#right").click(function(){
//         $("img").animate({left: '0px'});
//     });
// });

// Animate: Manipulation

// $(document).ready(function(){
//     $("button").click(function(){
//         $("div").animate({
//             left: '250px',
//             opacity: 0.4,
//             height: '+=50px',
//             width: '+=50px'
//         });
//     });
// });


// $(document).ready(function(){
//     $("button").click(function(){
//         $("div").animate({
//             height: 'toggle'
//         });
//     });
// });

// $(document).ready(function(){
//     $("button").click(function(){
//         var div = $("div");
//         div.animate({left: '400px'}, "slow");
//         div.animate({fontSize: '3em'}, 3000);
//     });
// });

// Stop()

// $(document).ready(function(){
//     $("#slide").click(function(){
//         $("#text").slideDown(3000);
//     });
//     $("button").click(function(){
//         $("#text").stop();
//     });
// });

// Callback

// $(document).ready(function(){
//     $("button").click(function(){
//         $("p").hide("slow", function(){
//             alert('The text has gone away');
//         });
//     });
// });


// Other option

// $(document).ready(function(){
//     $("button").click(function(){
//         $("p").hide(1000);
//         alert('The text is hidden');
//     });
// });

// Chaining

$(document).ready(function(){
    $("button").click(function(){
        $("p").css("color", "yellow").slideUp(2000).slideDown(2000);
    });
});