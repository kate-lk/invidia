$("a[href='#']").on("click", function(a) {
    $([document.documentElement, document.body]).animate({
        scrollTop: $(".form-box").offset().top - 100
    }, 500);
    return false
});
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
        $("#textInput2").val("");
        $(".overlay_form").toggleClass("hide");
        $(".popup2").toggleClass("hide");
        $(".blur").toggleClass("active")
    })
});
let num = document.querySelectorAll(".counter-num");
let counter = document.querySelectorAll(".counter");
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
$("button.mobile").click(function() {
    $(".modal").css("display", "flex")
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
window.onload = function() {
    document.getElementById("timer-text-33f3fdb5f9b35f9c6488f7d8e44f54bd-hours").innerHTML = "घड़ी";
    document.getElementById("timer-text-33f3fdb5f9b35f9c6488f7d8e44f54bd-minutes").innerHTML = "घड़ी";
    document.getElementById("timer-text-33f3fdb5f9b35f9c6488f7d8e44f54bd-secundes").innerHTML = "सेकंड"
}
;
