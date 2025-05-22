const copyDate = new Date();
let copyRightYear = copyDate.getFullYear();
let allvalues = document.querySelectorAll(".value");
console.log("date");
//start forwach loop for displaying the animated values
allvalues.forEach((singlevalue) => {
  let startValue = 0;
  let endValue = parseInt(singlevalue.getAttribute("data-value"));
  let duration = Math.floor(2000 / endValue);

  // counter for inceasing the values and display

  let counter = setInterval(function () {
    startValue += 1;
    singlevalue.textContent = startValue;
    //Clearing the interval

    if (startValue == endValue) {
      clearInterval(counter);
    }
  }, duration);
});

const year = document.querySelector("#copy-right-year");
year.innerHTML = copyRightYear;
