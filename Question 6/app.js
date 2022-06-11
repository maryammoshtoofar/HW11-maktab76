const getAdd = () => {
  const v1 = document.getElementById("val1").value;
  const v2 = document.getElementById("val2").value;
  const res = document.getElementById("result");
  const sum = Number(v1) + Number(v2);
  if (!sum) {
    res.innerText = "Please Add Numbers only";
    res.style.color = "black";
  } else {
    res.innerText = sum;
    if (sum % 2 === 0) {
      res.style.color = "blue";
    } else {
      res.style.color = "red";
    }
  }
};
