var form_1 = document.querySelector(".form_1");
var form_2 = document.querySelector(".form_2");
var form_3 = document.querySelector(".form_3");
var form_4 = document.querySelector(".form_4");
var form_5 = document.querySelector(".form_5");


var form_1_btns = document.querySelector(".form_1_btns");
var form_2_btns = document.querySelector(".form_2_btns");
var form_3_btns = document.querySelector(".form_3_btns");
var form_4_btns = document.querySelector(".form_4_btns");
var form_5_btns = document.querySelector(".form_5_btns");


var form_1_next_btn = document.querySelector(".form_1_btns .btn_next");
var form_2_back_btn = document.querySelector(".form_2_btns .btn_back");
var form_2_next_btn = document.querySelector(".form_2_btns .btn_next");
var form_3_back_btn = document.querySelector(".form_3_btns .btn_back");
var form_3_next_btn = document.querySelector(".form_3_btns .btn_next");
var form_4_back_btn = document.querySelector(".form_4_btns .btn_back");
var form_4_next_btn = document.querySelector(".form_4_btns .btn_next");
var form_5_back_btn = document.querySelector(".form_5_btns .btn_back");
var form_5_done_btn = document.querySelector(".btn_done");

var form_2_progressbar = document.querySelector(".form_2_progressbar");
var form_3_progressbar = document.querySelector(".form_3_progressbar");
var form_4_progressbar = document.querySelector(".form_4_progressbar");
var form_5_progressbar = document.querySelector(".form_5_progressbar");


form_1_next_btn.addEventListener("click", function(){
	form_1.style.display = "none";
	form_2.style.display = "block";

	form_1_btns.style.display = "none";
	form_2_btns.style.display = "flex";

	form_2_progressbar.classList.add("active");
});

form_2_back_btn.addEventListener("click", function(){
	form_1.style.display = "block";
	form_2.style.display = "none";

	form_1_btns.style.display = "flex";
	form_2_btns.style.display = "none";

	form_2_progressbar.classList.remove("active");
});

form_2_next_btn.addEventListener("click", function(){
	form_2.style.display = "none";
	form_3.style.display = "grid";

	form_3_btns.style.display = "flex";
	form_2_btns.style.display = "none";

	form_3_progressbar.classList.add("active");
});

form_3_back_btn.addEventListener("click", function(){
	form_2.style.display = "block";
	form_3.style.display = "none";

	form_3_btns.style.display = "none";
	form_2_btns.style.display = "flex";

	form_3_progressbar.classList.remove("active");
});

form_3_next_btn.addEventListener("click", function(){
	form_3.style.display = "none";
	form_4.style.display = "block";

	form_4_btns.style.display = "flex";
	form_3_btns.style.display = "none";

	form_4_progressbar.classList.add("active");
});

form_4_back_btn.addEventListener("click", function(){
	form_3.style.display = "grid";
	form_4.style.display = "none";

	form_4_btns.style.display = "none";
	form_3_btns.style.display = "flex";

	form_4_progressbar.classList.remove("active");
});

form_4_next_btn.addEventListener("click", function(){
	form_4.style.display = "none";
	form_5.style.display = "block";

	form_5_btns.style.display = "flex";
	form_4_btns.style.display = "none";

	form_5_progressbar.classList.add("active");
});

form_5_back_btn.addEventListener("click", function(){
	form_4.style.display = "block";
	form_5.style.display = "none";

	form_5_btns.style.display = "none";
	form_4_btns.style.display = "flex";

	form_5_progressbar.classList.remove("active");
});



// To open and close the dropdown
const selectBtns = document.querySelectorAll(".select-btn"),
	  dropdownItems = document.querySelectorAll(".dropdown-item");

let openSelectBtn = null;

selectBtns.forEach(selectBtn => {
	selectBtn.addEventListener("click", () => {
		if (openSelectBtn && openSelectBtn !== selectBtn) {
			openSelectBtn.classList.remove("open");
		}
		selectBtn.classList.toggle("open");
		openSelectBtn = selectBtn;
	});
});
  
document.addEventListener("click", (event) => {
	if (!event.target.closest('.dropdown')) {
		if (openSelectBtn) {
			openSelectBtn.classList.remove("open");
			openSelectBtn = null;
		}
	}
});



//To check options inside dropdown
dropdownItems.forEach(dropdownItem => {
  dropdownItem.addEventListener("click", () => {
    dropdownItem.classList.toggle("dropdown-checked");

    const parent = dropdownItem.closest('.dropdown');
    let dropdownChecked = parent.querySelectorAll(".dropdown-checked");
    let dropdownBtnText = parent.querySelector(".dropdown-btn-text");

    if (dropdownChecked && dropdownChecked.length > 0) {
      dropdownBtnText.innerText = `${dropdownChecked.length} ${dropdownBtnText.getAttribute('aria-label')}`;
    } else {
      dropdownBtnText.innerText = `${dropdownBtnText.getAttribute('aria-label')}`;
    }
  });
});



//To make the labels clickable
const clickableLabels = document.querySelectorAll('.clickable-label');

clickableLabels.forEach(label => {
  label.addEventListener('click', () => {
    const input = label.previousElementSibling;
    input.checked = true;
  });
});



//To display the input once a "Oui" is clicked and hide once a "Non" is clicked
document.addEventListener("DOMContentLoaded", function() {
	const radioWraps = document.querySelectorAll(".radio-wrap");
  
	for (const radioWrap of radioWraps) {
	  const ouiLabel = radioWrap.querySelector("label.clickable-label");
	  const radioInputs = radioWrap.querySelector(".radio-inputs");
  
	  if (ouiLabel) {
		ouiLabel.addEventListener("click", function() {
		  if (radioInputs) {
			radioInputs.style.display = "block";
		  }
		  ouiLabel.classList.add('active');
		});
	  }
  
	  const nonLabel = radioWrap.querySelectorAll("label.clickable-label")[1];
  
	  if (nonLabel) {
		nonLabel.addEventListener("click", function() {
		  if (radioInputs) {
			radioInputs.style.display = "none";
		  }
		  ouiLabel.classList.remove('active');
		});
	  }
	}
});
  

  

// To limit the input to only numbers
const numbersInput = document.querySelector('.numbers');

numbersInput.addEventListener('input', function() {
    this.value = this.value.replace(/[^0-9]/g, '');
});







// Adds columns depending on the tools selected in form_2
document.addEventListener("DOMContentLoaded", function() {
	const toolLabels = document.querySelectorAll('.form_2 .clickable-label');
	const form4Table = document.querySelector('.form-4-table');
	const form4Thead = form4Table.querySelector('thead tr');
	const form4Tbody = form4Table.querySelector('tbody');
	let ths = {};
	
	toolLabels.forEach(label => {
	  label.addEventListener('click', function() {
		const radioWrap = this.closest('.radio-wrap');
		const radioInputs = radioWrap.querySelector('.radio-inputs');
	
		if (this.textContent === 'Oui') {
		  const index = radioWrap.dataset.index;
		  const thText = 'Utilisation ' + radioWrap.querySelector('.question-labels').textContent;
		  if (!(thText in ths)) {
			const th = document.createElement('th');
			th.textContent = thText;
			form4Thead.appendChild(th);
			ths[thText] = th;
  
			// Add inputs to every row in the column
			const rows = form4Tbody.querySelectorAll('tr');
			rows.forEach(row => {
			  const td = document.createElement('td');
			  const input = document.createElement('input');
			  input.setAttribute('type', 'text');
			  td.appendChild(input);
			  row.appendChild(td);
			});
		  }
		  radioInputs.classList.add('active');
		} else {
		  const index = radioWrap.dataset.index;
		  const thText = 'Utilisation ' + radioWrap.querySelector('.question-labels').textContent;
		  if (thText in ths) {
			// Remove th and corresponding inputs
			const thIndex = Array.from(form4Thead.children).indexOf(ths[thText]);
			ths[thText].remove();
			delete ths[thText];
			const rows = form4Tbody.querySelectorAll('tr');
			rows.forEach(row => {
			  row.children[thIndex].remove();
			});
		  }
		  radioInputs.classList.remove('active');
		}
	  });
	});
});

















// Adds the phytos selected in the form_3 and removes when they are uunselected
const phytoItems = document.querySelectorAll('.form_3 .dropdown-item');
const tableHead = document.querySelector('.form-4-table thead tr');
const tableBody = document.querySelector('.form-4-table tbody');

phytoItems.forEach(item => {
  item.addEventListener('click', () => {
    const checkedItems = document.querySelectorAll('.form_3 .dropdown-checked');
    checkedItems.forEach(checkedItem => {
      const checkedText = checkedItem.querySelector('.dropdown-item-text').textContent;
      const existingThs = tableHead.querySelectorAll('th:not(:first-child)');
      let exists = false;
      existingThs.forEach(th => {
        if (th.dataset.text === checkedText) {
          exists = true;
        }
      });
      if (!exists) {
        const th = document.createElement('th');
        th.textContent = 'Utilisation ' + checkedText;
        th.dataset.text = checkedText;
        tableHead.appendChild(th);

        const rows = tableBody.querySelectorAll('tr');
        rows.forEach(row => {
          const td = document.createElement('td');
          const input = document.createElement('input');
          input.setAttribute('type', 'text');
          td.appendChild(input);
          row.appendChild(td);
        });
      }
    });
  });

  item.addEventListener('click', () => {
    const uncheckedItems = document.querySelectorAll('.form_3 .dropdown-item:not(.dropdown-checked)');
    uncheckedItems.forEach(uncheckedItem => {
      const uncheckedText = uncheckedItem.querySelector('.dropdown-item-text').textContent;
      const existingThs = tableHead.querySelectorAll('th:not(:first-child)');
      existingThs.forEach(th => {
        if (th.dataset.text === uncheckedText) {
          const index = th.cellIndex;
          tableHead.removeChild(th);

          const rows = tableBody.querySelectorAll('tr');
          rows.forEach(row => {
            row.removeChild(row.cells[index]);
          });
        }
      });
    });
  });
});






















// SAME AS THE NEXT PART WITHOUT THE ALPHABETICAL SORT
// const vegetableItems = document.querySelectorAll('.form_4 .dropdown .dropdown-item');
// const formTableBody = document.querySelector('.form-4-table tbody');
// const formTableHeaderCells = formTableBody.parentElement.querySelector('thead tr').cells;

// function createRow(itemName) {
//   const newRow = formTableBody.insertRow();
//   const firstCell = newRow.insertCell(0);
//   firstCell.textContent = itemName;

//   // Add additional cells with text inputs until the new row has the same number of cells as the header row
//   const numCellsToAdd = formTableHeaderCells.length - 1;
//   for (let i = 0; i < numCellsToAdd; i++) {
//     const newCell = newRow.insertCell();
//     const input = document.createElement('input');
//     input.type = 'text';
//     newCell.appendChild(input);
//   }
//   return newRow;
// }

// vegetableItems.forEach((item) => {
//   item.addEventListener('click', () => {
//     if (item.classList.contains('dropdown-checked')) {
//       const itemName = item.querySelector('.dropdown-item-text').textContent;
//       const newRow = createRow(itemName);
//       item.dataset.rowIndex = newRow.rowIndex;
//     } else if (item.dataset.rowIndex) {
//       const rowIndex = parseInt(item.dataset.rowIndex);
//       formTableBody.deleteRow(rowIndex - 1);
//       delete item.dataset.rowIndex;
//     }
//   });
// });






  

const vegetableItems = document.querySelectorAll('.form_4 .dropdown .dropdown-item');
const formTableBody = document.querySelector('.form-4-table tbody');
const formTableHeaderCells = formTableBody.parentElement.querySelector('thead tr').cells;

function createRow(itemName) {
  const newRow = formTableBody.insertRow();
  const firstCell = newRow.insertCell(0);
  firstCell.textContent = itemName;

  // Add additional cells with text inputs until the new row has the same number of cells as the header row
  const numCellsToAdd = formTableHeaderCells.length - 1;
  for (let i = 0; i < numCellsToAdd; i++) {
    const newCell = newRow.insertCell();
    const input = document.createElement('input');
    input.type = 'text';
    newCell.appendChild(input);
  }
  return newRow;
}

function sortTable() {
  const rows = Array.from(formTableBody.querySelectorAll('tr'));
  const sortedRows = rows.sort((rowA, rowB) => {
    const textA = rowA.cells[0].textContent.toUpperCase();
    const textB = rowB.cells[0].textContent.toUpperCase();
    return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
  });
  sortedRows.forEach((row) => {
    formTableBody.appendChild(row);
  });
}

vegetableItems.forEach((item) => {
  item.addEventListener('click', () => {
    if (item.classList.contains('dropdown-checked')) {
      const itemName = item.querySelector('.dropdown-item-text').textContent;
      const newRow = createRow(itemName);
      item.dataset.rowIndex = newRow.rowIndex;
      sortTable();
    } else if (item.dataset.rowIndex) {
      const rowIndex = parseInt(item.dataset.rowIndex);
      formTableBody.deleteRow(rowIndex - 1);
      delete item.dataset.rowIndex;
      sortTable();
    }
  });
});
