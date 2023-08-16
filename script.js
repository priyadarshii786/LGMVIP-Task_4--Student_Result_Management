const resultForm = document.getElementById("resultForm");
const resultTable = document.getElementById("resultTable");
const tbody = resultTable.querySelector("tbody");

resultForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const nameInput = document.getElementById("name");
    const rollInput = document.getElementById("roll");
    const PPSInput = document.getElementById("PPS");
    const BEEInput = document.getElementById("BEE");
    const BMEInput = document.getElementById("BME");

    const name = nameInput.value;
    const roll = rollInput.value;
    const PPS = PPSInput.value;
    const BEE = BEEInput.value;
    const BME = BMEInput.value;

    const total = parseInt(PPS) + parseInt(BEE) + parseInt(BME);
    const percentage = ((total / 300) * 100).toFixed(2);

    const newRow = document.createElement("tr");
    newRow.innerHTML = `
<td>${name}</td>
<td>${roll}</td>
<td>${PPS}</td>
<td>${BEE}</td>
<td>${BME}</td>
<td>${total}</td>
<td>${percentage}%</td>
<td>
<button class="edit-button" onclick="editResult(this)">Edit</button>
<button class="delete-button" onclick="deleteResult(this)">Delete</button>
</td>
`;

    tbody.appendChild(newRow);

    nameInput.value = "";
    rollInput.value = "";
    PPSInput.value = "";
    BEEInput.value = "";
    BMEInput.value = "";
});

function editResult(button) {
    const row = button.parentNode.parentNode;
    const cells = row.querySelectorAll("td");

    const name = cells[0].textContent;
    const roll = cells[1].textContent;
    const PPS = cells[2].textContent;
    const BEE = cells[3].textContent;
    const BME = cells[4].textContent;

    const nameInput = document.getElementById("name");
    const rollInput = document.getElementById("roll");
    const PPSInput = document.getElementById("PPS");
    const BEEInput = document.getElementById("BEE");
    const BMEInput = document.getElementById("BME");

    nameInput.value = name;
    rollInput.value = roll;
    PPSInput.value = PPS;
    BEEInput.value = BEE;
    BMEInput.value = BME;

    row.remove();
}

function deleteResult(button) {
    const row = button.parentNode.parentNode;
    row.remove();
}

function resetForm() {
    resultForm.reset();
}