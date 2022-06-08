const Rows = document.querySelectorAll("tr");
const setBg = (colorName, rowNumber) => {
  Rows[rowNumber].className = `bg-${colorName}`;
};

setBg("default", 1);
setBg("primary", 2);
setBg("secondary", 3);
setBg("success", 4);
setBg("danger", 5);
setBg("warning", 6);
setBg("info", 7);
setBg("light", 8);
setBg("dark", 9);

const delRows = () => {
  for (let i = 1; i < 6; i++) {
    Rows[i].remove();
  }
};

const addRows = () => {
  const table = document.getElementById("tbl");

  for (let i = 0; i < 3; i++) {
    const tr = document.createElement("tr");
    tr.innerHTML = "<td>New Color</td><td>Cell</td><td>Cell</td>";
    tr.firstChild.className = "font-semibold";
    table.append(tr);
  }
};
