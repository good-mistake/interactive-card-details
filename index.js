console.log("dwqdwq");
const name = document.getElementById("name");
const number = document.getElementById("number");
const month = document.getElementById("month");
const year = document.getElementById("year");
const cvc = document.getElementById("cvc");
const btn = document.getElementById("btn");
const showname = document.getElementById("showName");
const showNumber = document.getElementById("showNumber");
const showMonth = document.getElementById("showMonth");
const showYear = document.getElementById("showYear");
const showCvc = document.getElementById("showCvc");
const form = document.getElementById("form");
const error = document.getElementById("error");
const success = document.querySelector("#success");
const handleValidNumber = (num) => {
  return /^\d{16}$/.test(num);
};

const handleValidname = (nam) => {
  return /^[a-zA-Z]+ [a-zA-Z]+$/.test(nam) && nam.split(" ").length >= 2;
};

const handleTwoDigits = (val) => {
  return /^\d{2}$/.test(val);
};

const handleThreeDigits = (val) => {
  return /^\d{3}$/.test(val);
};

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (!handleValidNumber(number.value)) {
    error.innerHTML = "Invalid Card Number. Please enter a 16-digit number.";
    e.preventDefault();
    error.style.color = "red";
    return;
  } else if (!handleValidname(name.value)) {
    error.innerHTML =
      "Invalid Name. Please enter a valid name and last name with at least 2 words.";

    e.preventDefault();
    error.style.color = "red";
    return;
  } else if (
    !handleTwoDigits(year.value) ||
    !handleTwoDigits(month.value) ||
    !handleThreeDigits(cvc.value)
  ) {
    error.innerHTML =
      "Invalid Year, Month, or CVC. Please enter valid 2-digit year and month, and 3-digit CVC.";

    e.preventDefault();
    error.style.color = "red";
    return;
  } else {
    showNumber.innerHTML = number.value.replace(/(\d{4})/g, "$1 ").trim();
    showname.innerHTML = name.value;

    showCvc.innerHTML = cvc.value;
    showMonth.innerHTML = month.value;
    showYear.innerHTML = year.value;
    form.style.display = "none";
    success.style.display = "block";
  }

  name.value = "";
  number.value = "";
  month.value = "";
  year.value = "";
  cvc.value = "";
});
