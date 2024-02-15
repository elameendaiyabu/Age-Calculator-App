document.addEventListener("DOMContentLoaded", function () {
  const btn = document.getElementById("btn");
  btn.addEventListener("click", calculateAge);

  function calculateAge() {
    const day = parseInt(document.getElementById("day").value);
    const month = parseInt(document.getElementById("month").value);
    const year = parseInt(document.getElementById("year").value);

    // Check for invalid year, month, or day
    if (!isValidYear(year)) {
      document.querySelector(".invalid-year").textContent = "Invalid year";
      return;
    } else {
      document.querySelector(".invalid-year").textContent = ""; // Clear error message if year is valid
    }

    if (!isValidMonth(month)) {
      document.querySelector(".invalid-month").textContent = "Invalid month";
      return;
    } else {
      document.querySelector(".invalid-month").textContent = ""; // Clear error message if month is valid
    }

    if (!isValidDay(year, month, day)) {
      document.querySelector(".invalid-day").textContent = "Invalid day";
      return;
    } else {
      document.querySelector(".invalid-day").textContent = ""; // Clear error message if day is valid
    }

    // If all inputs are valid, calculate age
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth() + 1;
    const currentDay = currentDate.getDate();

    let ageYears = currentYear - year;
    let ageMonths = currentMonth - month;
    let ageDays = currentDay - day;

    if (ageMonths < 0 || (ageMonths === 0 && ageDays < 0)) {
      ageYears--;
      ageMonths = 12 + ageMonths;
    }
    if (ageDays < 0) {
      ageMonths--;
      ageDays = new Date(year, month, 0).getDate() + ageDays;
    }

    document.getElementById("year-display").textContent = ageYears;
    document.getElementById("month-display").textContent = ageMonths;
    document.getElementById("day-display").textContent = ageDays;
  }

  function isValidYear(year) {
    return year > 0 && year <= new Date().getFullYear();
  }

  function isValidMonth(month) {
    return month >= 1 && month <= 12;
  }

  function isValidDay(year, month, day) {
    return day >= 1 && day <= new Date(year, month, 0).getDate();
  }
});
