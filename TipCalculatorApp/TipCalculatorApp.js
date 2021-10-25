const Bill = document.getElementById("bill");
const people = document.getElementById("people");
const button = document.querySelectorAll(".btn");
const Total = document.getElementById("Total");
const TipAm = document.getElementById("TotalSec");
const reset = document.getElementById("RESET");
for (let i = 0; i < button.length; i++) {
  button[i].addEventListener("click", BillCalculate);
}
function BillCalculate(e) {
  const BillVal = Number(Bill.value);
  const darsad = Number(e.target.innerText);
  console.log(darsad.toLocaleString);
  console.log(darsad);
  const javab = (BillVal * darsad) / 100;
  console.log(javab);
  Total.innerHTML = +javab;
  TipAm.innerHTML = +Number(javab) + Number(BillVal) * 1;
}
people.addEventListener("focusout", PeopleCalculate);
function PeopleCalculate() {
  const peopleVal = Number(people.value);
  const Total2 = Total.innerHTML;
  const TipAm2 = TipAm.innerHTML;
  console.log(Total2);
  Total.innerHTML = Total2 / peopleVal;
  TipAm.innerHTML = TipAm2 / peopleVal;
}
reset.addEventListener("click", function () {
  window.location.reload();
});
