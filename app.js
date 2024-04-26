// Open / Close Mobile Nav
document.getElementById("open-nav").onclick = () =>
  document.getElementById("mobile-nav").classList.add("active");

document.getElementById("close-nav").onclick = () =>
  document.getElementById("mobile-nav").classList.remove("active");

// Move Slider Taps
const sliderTitles = Array.from(
    document.getElementById("slider-titles").children
  ),
  sliderTaps = Array.from(document.getElementById("slider").children);

sliderTitles.forEach((title, index) => {
  title.addEventListener("click", () => {
    // remove active titles
    sliderTitles.forEach((t) => {
      t.classList.remove("active");
    });
    // add active title for clicked one
    title.classList.add("active");
    // Move Red-Bar On lg-screens
    title.parentElement.style.cssText = `--bar-left: ${(100 / 3) * index}%;`;
    // Change Showen Slider
    // remove active titles
    sliderTaps.forEach((tap) => {
      tap.classList.remove("active");
    });
    // add active title for clicked one
    sliderTaps[index].classList.add("active");
  });
});

// Open / Close Answers Of Questions Section
Array.from(
  document.querySelectorAll(".questions-container article .headding")
).forEach((q) => {
  q.onclick = () => {
    q.parentElement.classList.toggle("active");
  };
});

// Check email validation
const email = document.getElementById("email");
function isValid() {
  if (/\w+@\w+(\.\w+)+/.test(email.value)) {
    email.parentElement.classList.remove("invalid");
  } else {
    email.parentElement.classList.add("invalid");
  }
}
document.getElementById("submit").onclick = () => {
  if (/\w+@\w+(\.\w+)+/.test(email.value)) {
    email.parentElement.classList.remove("invalid");
  } else {
    email.parentElement.classList.add("invalid");
  }
};
email.oninput = () => {
  if (/\w+@\w+(\.\w+)+/.test(email.value)) {
    email.parentElement.classList.remove("invalid");
  }
};
