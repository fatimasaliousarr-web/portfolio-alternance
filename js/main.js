const button = document.querySelector(".btn");

button.addEventListener("click", function() {
  document.querySelector("#projects").scrollIntoView({
    behavior: "smooth"
  });
});

