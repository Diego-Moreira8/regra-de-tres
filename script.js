const field1 = document.getElementById("field-1");
const field2 = document.getElementById("field-2");
const field3 = document.getElementById("field-3");
const field4 = document.getElementById("field-4");

const calculate = () => {
  const result = (field3.value * field2.value) / field1.value;
  // Mostra erro se for NaN ou Infinity
  field4.value = !isNaN(result) && result !== Infinity ? result : "ERRO";
};

field1.addEventListener("change", calculate);
field2.addEventListener("change", calculate);
field3.addEventListener("change", calculate);
