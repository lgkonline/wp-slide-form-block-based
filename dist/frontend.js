function ready(fn) {
    if (document.attachEvent ? document.readyState === "complete" : document.readyState !== "loading") {
        fn();
    } else {
        document.addEventListener("DOMContentLoaded", fn);
    }
}

ready(function () {
    var finalTextarea = document.querySelector("#slideForm-form-field textarea");
    var forms = document.getElementsByClassName("slideForm-Form");
    for (var i = 0; i < forms.length; i++) {
        (function (form) {
            var formObj = {};
            var questions = form.getElementsByClassName("slideForm-Question");

            if (questions) {
                questions[0].classList.add("active");

                for (var j = 0; j < questions.length; j++) {
                    (function (question, prevQuestion, nextQuestion) {
                        var q = question.getAttribute("data-question");
                        formObj[q] = "";

                        var options = question.getElementsByClassName("slideForm-Option");
                        for (var k = 0; k < options.length; k++) {
                            (function (option) {
                                option.addEventListener("click", function () {
                                    var label = option.getAttribute("data-label");
                                    formObj[q] = label;

                                    var activeOption = question.querySelector(".slideForm-Option.active");
                                    if (activeOption) {
                                        activeOption.classList.remove("active");
                                    }
                                    option.classList.add("active");

                                    question.classList.remove("active");
                                    if (nextQuestion) {
                                        nextQuestion.classList.add("active");
                                    }

                                    if (finalTextarea) {
                                        var text = "";
                                        for (var l = 0; l < Object.keys(formObj).length; l++) {
                                            var key = Object.keys(formObj)[l];
                                            text += key + "\n";
                                            text += formObj[key] + "\n\n";
                                        }

                                        finalTextarea.value = text;
                                    }
                                });
                            })(options[k]);
                        }

                        var nextButton = question.querySelector(".slideForm-back");
                        if (nextButton) {
                            if (prevQuestion) {
                                nextButton.addEventListener("click", function () {
                                    question.classList.remove("active");
                                    prevQuestion.classList.add("active");
                                });
                            }
                            else {
                                nextButton.classList.add("disabled");
                            }
                        }
                    })(questions[j], questions[j - 1], questions[j + 1]);
                }
            }
        })(forms[i]);
    }
});