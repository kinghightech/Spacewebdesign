let fun_fact_blocks = document.querySelectorAll(".fun-fact-block");
let titles = document.querySelectorAll(".fun-fact-title");
let fun_fact_texts = document.querySelectorAll(".fun-fact-text");

fun_fact_texts.forEach((text) => {
  text.style.display = "none";
});

function resetFunFactToCoverStyle(title, text) {
  title.style.display = "block";
  text.style.display = "none";
}

fun_fact_blocks.forEach((element, i) => {
  element.addEventListener("click", function (event) {
    if (titles[i].style.display == "none") {
      resetFunFactToCoverStyle(titles[i], fun_fact_texts[i]);
    } else {
      titles[i].style.display = "none";
      fun_fact_texts[i].style.display = "block";
    }
    event.stopPropagation();
  });
});
