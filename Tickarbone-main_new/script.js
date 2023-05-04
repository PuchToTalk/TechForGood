document.addEventListener("DOMContentLoaded", function() {
  const span = document.querySelector(".welcome-container span");
  const welcomeSection = document.querySelector(".welcome-section");
  const calculatorSection = document.querySelector(".calculator-section");
  const body = document.querySelector("body");

  span.addEventListener("click", function() {
    welcomeSection.classList.add("started");
    calculatorSection.classList.add("started");
    body.style.backgroundColor = "var(--body-color)";
  });
});


var form_1 = document.querySelector(".form_1");
var form_2 = document.querySelector(".form_2");
var form_3 = document.querySelector(".form_3");
var form_4 = document.querySelector(".form_4");
var alert_box_screen = document.querySelector(".alert-box-screen");
var form_5 = document.querySelector(".form_5");


var form_1_btns = document.querySelector(".form_1_btns");
var form_2_btns = document.querySelector(".form_2_btns");
var form_3_btns = document.querySelector(".form_3_btns");
var form_4_btns = document.querySelector(".form_4_btns");


var form_1_next_btn = document.querySelector(".form_1_btns .btn_next");
var form_2_back_btn = document.querySelector(".form_2_btns .btn_back");
var form_2_next_btn = document.querySelector(".form_2_btns .btn_next");
var form_3_back_btn = document.querySelector(".form_3_btns .btn_back");
var form_3_next_btn = document.querySelector(".form_3_btns .btn_next");
var form_4_back_btn = document.querySelector(".form_4_btns .btn_back");
var form_4_next_btn = document.querySelector(".form_4_btns .btn_next");
var cancel_form_btn = document.querySelector("#cancel_form_btn");
var send_form_btn = document.querySelector("#send_form_btn");

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
	form_3.style.display = "block";

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
	form_3.style.display = "block";
	form_4.style.display = "none";

	form_4_btns.style.display = "none";
	form_3_btns.style.display = "flex";

	form_4_progressbar.classList.remove("active");
});

form_4_next_btn.addEventListener("click", function(){
	alert_box_screen.style.display = "grid";
});

cancel_form_btn.addEventListener("click", function(){
	alert_box_screen.style.display = "none";
});

send_form_btn.addEventListener("click", function(){
  alert_box_screen.style.display = "none";
	form_4.style.display = "none";
	form_5.style.display = "block";

	form_4_btns.style.display = "none";

	form_5_progressbar.classList.add("active");
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






// Hide and display no bio phytos in dropdowns
document.addEventListener('click', event => {
  const bioDropdown = document.querySelector('.bio');
  const ouiLabel = bioDropdown.querySelector('label.clickable-label:first-of-type');
  const dropdownItems = document.querySelectorAll('.form_3 .dropdown-items .dropdown-item');

  if (event.target.closest('.bio') === bioDropdown) {
    if (ouiLabel.classList.contains('active')) {
      dropdownItems.forEach(item => {
        if (item.classList.contains('phyto-bio')) {
          item.style.display = 'flex';
          item.closest('.dropdown').style.display = 'block'; // show parent dropdown if phyto-bio item is displayed
        } else {
          item.style.display = 'none';
          item.closest('.dropdown').style.display = 'none'; // hide parent dropdown if no phyto-bio item is displayed
        }
      });
    } else {
      dropdownItems.forEach(item => {
        item.style.display = 'flex';
        item.closest('.dropdown').style.display = 'block'; // show parent dropdown if any item is displayed
      });
    }
  }
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

















// Adds the phytos selected in the form_3 and removes when they are unselected
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






document.addEventListener('DOMContentLoaded', () => {
  const dropdown = document.querySelector('.dropdown');
  const dropdownItems = dropdown.querySelectorAll('.dropdown-item');

  if (dropdown.style.display === 'none') {
    dropdownItems.forEach(item => {
      item.classList.remove('dropdown-checked');
    });
  }
});








//SAME AS THE NEXT PART WITHOUT THE ALPHABETICAL SORT
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


// Valeurs fixes

const FE_elec = 0.06;
const FE_gaz = 0.244;
let val_serre_chauffee = 0; // à compléter
let val_haie = 0; // à compléter
let val_foret = 0; // à compléter
const val_tracteur = 5000 / 10;
const val_kangoo = 6000 / 10;

const FE_serre_an = 9.96;
const Amort_serre_an = 20.0;

const FE_bache_an = 2.7;
const Amort_bache_an = 1.0;


const val_whisper = 1.3;

const gazole = 0.84; // en kg/L
const emission_gazole = 2.3; // en kgeqCO2 / kg

// Initialisation nouvelles variables
const liste_phyto = [];
const valeur_phyto = [];
const EM_phyto_liste = [];
const liste_legume_phyto_nul = [];

const vehicule_liste = [];
const livraison_liste = [];
const legume_liste = [];
const EM_serre_legume = [];
const CR_serre = [];
const surface_liste = [];
const s_bache_liste = [];
const CR_bache = [];
const EM_bache_legume = [];
const outils_liste = [];
const duree_outils_liste = [];
const conso_outils_liste = [];
const EM_outils = [];
const EM_outils_legumes = [];
const Ttot_outil_liste = [];
const CR_outil_liste = [];

const conso_livraison_liste = [];
const Mprod_liste = [];
const EM_livraison_liste = [];
const CR_livraison_liste = [];
const EM_legume_liste = [];

const EM_ferme_legume_liste = [];

const EM_legume_total_liste = [];
const EM_final_legume = [];




/** Section Page "la Ferme" pour stocker les données local storage */

let btnContinue = document.querySelector("button");
console.log(btnContinue);

btnContinue.addEventListener("click", () => {
	// stocker les saisies dans le local Storage : format int

	localStorage.setItem("conso_elec_an", document.querySelector('#conso_elec').value);
	localStorage.setItem("conso_gaz_an", document.querySelector('#conso-gaz').value);
	localStorage.setItem("conso_serres", document.querySelector('#serre_chauffee').value);
	localStorage.setItem("serre-non-chauffee", document.querySelector('#serre_non_chauffee').value);

	localStorage.setItem("haie", document.querySelector('#dispo_haie').value);
	localStorage.setItem("foret", document.querySelector('#dispo_foret').value);

	localStorage.setItem("vehicule", document.querySelector('#vehicule_fabrication').value);
	localStorage.setItem("livraison", document.querySelector('#vehicule_livraison').value);

	

	localStorage.setItem("S_serre", document.querySelector('#S_serre').value);
	localStorage.setItem("nbr_legume", document.querySelector('#nbr_legume').value);

  	localStorage.setItem("S_bache", document.querySelector('#S_bache').value);
	localStorage.setItem("nbr_outils", document.querySelector('#nbr_outils').value);
	localStorage.setItem("nbr_phyto", document.querySelector('#nbr_phyto').value);

	





	console.log(document.querySelector("#departement").value);



})

	let conso_elec_an = localStorage.getItem("conso_elec_an")
	let conso_gaz_an = localStorage.getItem("conso_gaz_an")
	let conso_serres = localStorage.getItem("conso_serres")
	let serre_non_chauffee = localStorage.getItem("serre_non_chauffee")
	let haie = localStorage.getItem("haie")
	let foret= localStorage.getItem("foret")
	let vehicule= localStorage.getItem("vehicule")
	let livraison= localStorage.getItem("livraison")
	let S_serre = localStorage.getItem("S_serre")
	let nbr_legume= localStorage.getItem("br_legume")
	let S_bache = localStorage.getItem("S_bache")
	let nbr_outils= localStorage.getItem("nbr_outils")
	let nbr_phyto= localStorage.getItem("nbr_phyto")

/** à changer / optimiser */
const nbr_vehicule = 1
const nbr_livraison = 1
/** à changer / optimiser */






function calculFerme(conso_elec_an, conso_gaz_an, serre_chauffee, haie, foret, nbr_vehicule, nbr_livraison) {
	vehicule_liste.push(vehicule.toUpperCase());
	livraison_liste.push(livraison.toUpperCase());

  	let EM_elec = FE_elec * parseFloat(conso_elec_an);
  	let EM_gaz = FE_gaz * parseFloat(conso_gaz_an);
  	let emission_serre = (serre_chauffee ? val_serre_chauffee : 0);
  	let EM_prod_fabrication = (vehicule_liste.includes("TRACTEUR") ? val_tracteur : 0); // ajouter les autres valeurs en imitant la même méthode
  	let EM_prod_livraison = (livraison_liste.includes("KANGOO") ? val_kangoo : 0); // ajouter les autres valeurs en imitant la même méthode
  	let captage_haie = (haie ? val_haie : 0);
  	let captage_foret = (foret ? val_foret : 0);
  	let total_ferme = EM_elec + EM_gaz + EM_prod_fabrication + EM_prod_livraison + captage_haie + captage_foret;
  	return total_ferme;
}


;
