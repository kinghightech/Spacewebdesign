let elements = document.querySelectorAll(".space-obj");
let images = document.querySelectorAll(".space-obj-img");
let texts = document.querySelectorAll(".uncovered");

texts.forEach((text) => {
  text.style.display = "none";
});

function resetToCoverStyle(element, image, text) {
  image.style.display = "flex";
  text.style.display = "none";
  element.style.alignItems = "center";
  element.style.justifyContent = "center";
}

elements.forEach((element, i) => {
  element.addEventListener("click", function () {
    if (images[i].style.display == "none") {
      resetToCoverStyle(elements[i], images[i], texts[i]);
    } else {
      images[i].style.display = "none";
      texts[i].style.display = "flex";
      elements[i].style.alignItems = "normal";
      elements[i].style.justifyContent = "normal";
    }
  });
});

for (let i = 0; i < elements.length; ++i) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          resetToCoverStyle(elements[i], images[i], texts[i]);
        }
      });
    },
    {
      threshold: 0,
    }
  );

  observer.observe(elements[i]);
}
