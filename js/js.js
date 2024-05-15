$("button.mobile").click(function() {
    $(".modal").css("display", "block")
});
$("button.close3").click(function() {
    $(".modal").css("display", "none")
});
$("#show").click(function() {
    $(".mobile-menu").toggleClass("showPanel");
    $(".close").css("display", "flex");
    $(".burger").css("display", "none")
});
$("#hide").click(function() {
    $(".mobile-menu").toggleClass("showPanel");
    $(".close").css("display", "none");
    $(".burger").css("display", "flex")
});
$("#el").mouseup(function(a) {
    var b = $("#ul");
    if (!b.is(a.target) && b.has(a.target).length === 0) {
        $(".mobile-menu").removeClass("showPanel");
        $(".header-logo").removeClass("active");
        $(".close").css("display", "none");
        $(".burger").css("display", "block");
        $(".bg-blur").removeClass("show")
    }
});
$(document).mouseup(function(a) {
    var b = $(".mobile-menu a");
    if (b.is(a.target)) {
        $(".mobile-menu").removeClass("showPanel");
        $(".header-logo").removeClass("active");
        $(".close").css("display", "none");
        $(".burger").css("display", "block");
        $(".bg-blur").removeClass("show")
    }
});
$(document).ready(function() {
    $(".open-form").on("touchend, click", function(a) {
        a.preventDefault();
        $(".overlay_form").toggleClass("hide");
        $(".popup").toggleClass("hide");
        $(".blur").toggleClass("active")
    });
    $(".popup__close").on("touchend, click", function(a) {
        a.preventDefault();
        $(".overlay_form").toggleClass("hide");
        $(".popup").toggleClass("hide");
        $(".blur").toggleClass("active")
    })
});
let num = document.querySelectorAll(".counter-num");
let counter = document.querySelectorAll(".counter");
$(document).mouseup(function(a) {
    var b = $(".header-nav-mobile");
    if (!b.is(a.target) && b.has(a.target).length === 0) {
        $(".mobile-menu").removeClass("showPanel");
        $(".header-logo").removeClass("active");
        $(".close").css("display", "none");
        $(".burger").css("display", "block");
        $(".bg-blur").removeClass("show")
    }
});
const ReviewMore = $(".comments-items-more");
$("#show-more").click(function(a) {
    a.preventDefault();
    ReviewMore.slideToggle()
});
for (let j = 0; j < counter.length; j++) {
    let count = 0;
    counter[j].addEventListener("click", function() {
        if (count === 0) {
            count++;
            num[j].innerHTML = parseInt(num[j].innerHTML) + 1
        } else {
            if (count === 1) {
                count--;
                num[j].innerHTML = parseInt(num[j].innerHTML) - 1
            }
        }
    })
}
document.getElementById("clearButton").onclick = function(a) {
    document.getElementById("textInput").value = ""
}
;
$(document).ready(function() {
    $(".open-popup").on("touchend, click", function(a) {
        a.preventDefault();
        $(".overlay_form").toggleClass("hide");
        $(".popup2").toggleClass("hide");
        $(".blur").toggleClass("active")
    });
    $(".close2").on("touchend, click", function(a) {
        a.preventDefault();
        $("#textInput").val("");
        $(".overlay_form").toggleClass("hide");
        $(".popup2").toggleClass("hide");
        $(".blur").toggleClass("active")
    })
});
