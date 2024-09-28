const hamburger = document.querySelector(".hamburger");
const sidebar = document.querySelector(".sidebar");
const closeBtn = document.querySelector(".close-btn");

hamburger.addEventListener("click", () => {
  sidebar.style.left = "0";
});

closeBtn.addEventListener("click", () => {
  sidebar.style.left = "-250px";
});

function getFormattedDate(date) {
  const options = { month: "long", day: "numeric" };
  return date.toLocaleDateString(undefined, options);
}

const today = new Date();

const tenDaysLater = new Date(today);
tenDaysLater.setDate(today.getDate() + 10);

const formattedToday = getFormattedDate(today);
const formattedTenDaysLater = getFormattedDate(tenDaysLater);

document.getElementById(
  "dateRangeInput"
).placeholder = `${formattedToday} ~ ${formattedTenDaysLater}`;
