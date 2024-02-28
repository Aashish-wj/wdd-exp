function calculateSalary() {
  const employeeName = document.getElementById("employeeName").value;
  const employeeID = document.getElementById("employeeID").value;
  const basicPay = parseFloat(document.getElementById("basicPay").value);

  if (!employeeName || !employeeID || !basicPay) {
    alert("All fields are mandatory");
    return;
  }

  const da = basicPay * 0.8;
  const hra = basicPay * 0.2;
  const pf = basicPay * 0.12;
  const tax = basicPay * 0.2;

  const grossPay = basicPay + da + hra;
  const deduction = pf + tax;
  const netPay = grossPay - deduction;

  const salaryReport = `
        Employee Name: ${employeeName}
        Employee ID: ${employeeID}
        Basic Pay: ${basicPay}
        DA: ${da}
        HRA: ${hra}
        PF: ${pf}
        Tax: ${tax}
        Gross Pay: ${grossPay}
        Deduction: ${deduction}
        Net Pay: ${netPay}
    `;

  alert(salaryReport);
}
