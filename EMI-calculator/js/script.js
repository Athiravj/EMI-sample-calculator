const amountValidation = () => {
  if (document.getElementById("amount").value.length === 0) {
    return false;
  }
  return true;
};

const rateValidation = () => {
  if (document.getElementById("rate").value.length === 0) {
    return false;
  }
  return true;
};

const monthsValidation = () => {
  if (document.getElementById("months").value.length === 0) {
    return false;
  }
  return true;
};

const emiCalculation = () => {
  const amountValidationStatus = amountValidation();
  if (amountValidationStatus === false) {
    alert("Please enter the amoount");
    return;
  }
  let checkAmount = parseInt(document.getElementById("amount").value);
  if (amountValidationStatus === true) {
    if (checkAmount < 10000 || checkAmount > 2000000) {
      alert("amount between 10000 and 2000000");
      return;
    }
  }

  const rateValidationStatus = rateValidation();
  if (rateValidationStatus === false) {
    alert("Please enter the rate of interest");
    return;
  }
  let checkRate = parseInt(document.getElementById("rate").value);
  if (amountValidationStatus === true) {
    if (checkRate < 1 || checkRate > 50) {
      alert("interest range from 1 to 50");
      return;
    }
  }

  const monthsValidationStatus = monthsValidation();
  if (monthsValidationStatus === false) {
    alert("Please enter the period");
    return;
  }
  let checkMonths = parseInt(document.getElementById("months").value);
  if (monthsValidationStatus === true) {
    if (checkMonths < 6) {
      alert("Minimum 6 month validity");
      return;
    }
  }
  const amount = document.getElementById("amount").value;
  const rate = document.getElementById("rate").value;
  const months = document.getElementById("months").value;
  const totalYearInt = amount * (rate * 0.01) * (months / 12);
  const monthlyInterst = totalYearInt / 12;
  const emi = amount / months + monthlyInterst;

  document.getElementById("result1").value = emi.toFixed(2);
  document.getElementById("result2").value = totalYearInt;
  document.getElementById("result3").value = monthlyInterst.toFixed(2);
};
