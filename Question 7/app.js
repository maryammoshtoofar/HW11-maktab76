const makeTable = (arr) => {
  const table = document.createElement("table");

  const makeHead = (table) => {
    const keys = Object.keys(arr[0]);
    const thead = document.createElement("tr");
    for (let element of keys) {
      const headCell = document.createElement("td");
      headCell.innerHTML = element;
      headCell.style.border = "1px solid black";
      thead.append(headCell);
    }
    table.append(thead);
  };

  const makeBody = () => {
    for (let person of arr) {
      const setBg = (age) => {
        let bgColor = "none";
        if (age < 10) {
          bgColor = "yellow";
        } else if (age >= 10 && age < 40) {
          bgColor = "green";
        } else if (age >= 40 && age < 80) {
          bgColor = "red";
        } else if (age >= 80) {
          bgColor = "blue";
        }
        row.style.backgroundColor = bgColor;
      };
      const personInfo = Object.values(person);
      const row = document.createElement("tr");
      for (let i = 0; i < personInfo.length; i++) {
        const cell = document.createElement("td");
        cell.innerHTML = personInfo[i];
        cell.style.border = "1px solid black";
        row.append(cell);
      }
      table.append(row);
      setBg(person.age);
    }
  };

  makeHead(table);
  makeBody();
  document.body.append(table);
};
const tableContent = [
  { name: "James", age: 9, country: "United States" },
  { name: "Rony", age: 31, country: "United Kingdom" },
  { name: "Peter", age: 58, country: "Canada" },
  { name: "Marks", age: 20, country: "Spain" },
];

makeTable(tableContent);
