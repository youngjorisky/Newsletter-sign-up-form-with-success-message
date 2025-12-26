const firstSection = document.getElementById("first-section");
const secondSection = document.getElementById("second-section");
const subscribe = document.getElementById("subscribe");
const emailInput = document.querySelector('input[type = "email"]');

subscribe.addEventListener("click", () => {
  const email = emailInput.value.trim();

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (emailPattern.test(email)) {
    firstSection.classList.add("hidden");
    secondSection.classList.remove("hidden");
  } else {
    alert("Please input an email");
  }
});

document.addEventListener("click", (e) => {
  if (e.target.id === "dismiss-button") {
    firstSection.classList.remove("hidden");
    secondSection.classList.add("hidden");
    emailInput.value = "";
  }
});
