// Include stylesheet
import "./style.scss";

// // Import Gutenberg Boilerplate Block
// import "./block.js";

// // Import Gutenberg Boilerplate Sidebar
// import "./sidebar.js";

import "./Form";
import "./Question";
import "./Option";


function ready(fn) {
    if (document.attachEvent ? document.readyState === "complete" : document.readyState !== "loading") {
        fn();
    } else {
        document.addEventListener("DOMContentLoaded", fn);
    }
}

ready(() => {
    console.log("Ready!");
});