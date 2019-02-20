function ready(fn) {
    if (document.attachEvent ? document.readyState === "complete" : document.readyState !== "loading") {
        fn();
    } else {
        document.addEventListener("DOMContentLoaded", fn);
    }
}

ready(function () {
    var forms = document.getElementsByClassName("slideForm-Form");
    for (var i = 0; i < forms.length; i++) {
        (function (form) {
            var questions = form.getElementsByClassName("slideForm-Question");

            if (questions) {
                questions[0].classList.add("active");
            }
        })(forms[i]);
    }
});