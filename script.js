const displayLine = document.getElementById('display');
const evalLine = document.getElementById('print');
const numberButtons = document.querySelectorAll('.butt-num .number');
const numberZero = document.getElementById('btn0');
const doubleZero = document.getElementById('btn10')
const pointBtn = document.getElementById('btn11');
const addBtn = document.getElementById('opadd');
const subBtn = document.getElementById('opsub');
const divBtn = document.getElementById('opdiv');
const mulBtn = document.getElementById('opmul');
const evBtn = document.getElementById('opev');
const clear = document.getElementById('clear');

let opsBtn = [addBtn, subBtn, divBtn, mulBtn];

const addOps = opsBtn[0].value;
const subOps = opsBtn[1].value;
const mulOps = opsBtn[2].value;
const divOps = opsBtn[3].value;



let currentExpression = "";
let currentDisplay = "";


let k;

let memory;

let opP;
let opS;
let opD;
let opM;
let lastIndex;
let lastOps;
let lastOpsIndex;
let lastSlice;
let firstSlice;
let evLastSlice;

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        k = String(currentExpression);
        if (displayLine.innerHTML == "" && evalLine.innerHTML == "") {
            currentExpression += button.textContent;
            updateBox();
            clearLine();
        }
        else if (displayLine.innerHTML != "" && evalLine.innerHTML == "") {
                currentExpression = (displayLine.innerHTML) + button.textContent;
                updateBox();
                updateDsp();
                clearLine();
        }
        else if (displayLine.innerHTML != "" && evalLine.innerHTML != "") {
                currentExpression = button.value;
                updateBox();
                updateDsp();
                clearLine();
            }
        }
    )
});

// single & double zero buttons 
doubleZero.addEventListener('click', () => {
    if (displayLine.innerHTML == "" && evalLine.innerHTML == "") {
        clearLine();
        clearBox();
        resetExp();
    }
    else if (displayLine.innerHTML != "" && evalLine.innerHTML == "") {
      k = String(currentExpression);


        if (k.indexOf("+") < 1 & k.indexOf("-") < 1 & k.indexOf("/") < 1 & k.indexOf("*") < 1) {
            currentExpression += "00";
            updateBox();
        }
        else {
            if (k.charAt(k.length - 1) == addOps | k.charAt(k.length - 1) == subOps | k.charAt(k.length - 1) == mulOps | k.charAt(k.length - 1) == divOps) {
                currentExpression += "";
                updateBox();
            }
            else {
                currentExpression += "00";
                updateBox();
            }
        }
    }
    else if (displayLine.innerHTML != "" && evalLine.innerHTML != "") {
        currentExpression = "";
        updateBox();
        clearLine();
    }
});


numberZero.addEventListener('click', () => {
    if (displayLine.innerHTML == "" && evalLine.innerHTML == "") {
        currentExpression = '';
        clearLine();
        updateBox();
        resetDsp();
    }
    else if (displayLine.innerHTML == "0" && evalLine.innerHTML == "") {
        currentExpression += "";
        updateBox();
    }
    else if (displayLine.innerHTML != "" && evalLine.innerHTML == "") {
     k = String(currentExpression);


        if (k.indexOf("+") < 1 & k.indexOf("-") < 1 & k.indexOf("/") < 1 & k.indexOf("*") < 1) {
            currentExpression += "0";
            updateBox();
        }
        else {
            if (k.charAt(k.length - 1) == addOps | k.charAt(k.length - 1) == subOps | k.charAt(k.length - 1) == mulOps | k.charAt(k.length - 1) == divOps) {
                currentExpression += "";
                updateBox();
            }
            else if (k.charAt(k.length - 1) == "0") {
                currentExpression += "0";
                updateBox();
            }
            else {
                currentExpression += "0";
                updateBox();
            }
        }
    }
    else if (displayLine.innerHTML != "" && evalLine.innerHTML != "") {
        currentExpression = '';
        updateBox();
        clearLine();
        resetExp();
        resetDsp();
    }
});

//  float
pointBtn.addEventListener('click', () => {
    k = String(currentExpression);
    if (displayLine.innerHTML == "" && evalLine.innerHTML == "") {
        currentExpression = "0."
        updateBox();
    }
    else if (displayLine.innerHTML != "" && evalLine.innerHTML == "") {
        if (k.charAt(k.length - 1) == '.') {
            currentExpression += "";
            updateBox();
        }
        else if ((k.charAt(k.length - 1) == addOps) || (k.charAt(k.length - 1) == subOps) || (k.charAt(k.length - 1) == mulOps) || (k.charAt(k.length - 1) == divOps)) {
            currentExpression += "0.";
            updateBox();
        }
        else if ((k.charAt(k.length - 1) == '0') || (k.charAt(k.length - 1) == '1') || (k.charAt(k.length - 1) == '2') || (k.charAt(k.length - 1) == '3') || (k.charAt(k.length - 1) == '4') || (k.charAt(k.length - 1) == '5') || (k.charAt(k.length - 1) == '6') || (k.charAt(k.length - 1) == '7') || (k.charAt(k.length - 1) == '8') || (k.charAt(k.length - 1) == '9')) {
            if ((k.includes(addOps) == true) || (k.includes(divOps) == true) || (k.includes(subOps) == true) || (k.includes(mulOps) == true)) {
                lastIndex = Math.max(k.lastIndexOf(addOps), k.lastIndexOf(subOps), k.lastIndexOf(mulOps), k.lastIndexOf(divOps));
                lastOps = k.charAt(lastIndex);
                lastOpsIndex = k.lastIndexOf(lastOps);
                lastSlice = k.slice(lastOpsIndex, k.length)
                if (lastSlice.includes('.') == true) {
                    currentExpression += '';
                    updateBox();
                }
                else {
                    currentExpression += '.';
                    updateBox();
                }
            }
            else {
                firstSlice = k.slice(0);
                if (firstSlice.includes('.') == true) {
                    currentExpression += '';
                    updateBox();
                }
                else {
                    currentExpression += '.';
                    updateBox();
                }
            }
        }
    }
    else if (displayLine.innerHTML != "" && evalLine.innerHTML != "") {
        memory = evalLine.textContent;
        if (memory.includes('.') == false) {
            currentExpression =String(memory) + '.';
           updateBox();
            clearLine();
        }
        else if (memory.includes('.') == true) {
            currentExpression ="0.";
            updateBox();
            clearLine();
            resetDsp();
            resetExp();
            
        }
    }
});


// operators
opsBtn.forEach(button => {
    button.addEventListener('click', () => {
        k = String(currentExpression)
        if (displayLine.innerHTML == "" && evalLine.innerHTML == "") {
            currentExpression = 0 + button.value;
            updateBox();
            clearLine();
        }
        else if (displayLine.innerHTML != "" && evalLine.innerHTML == "") {
            if ((k.charAt(k.length - 1) == ".") || (k.charAt(k.length - 1) == addOps) || (k.charAt(k.length - 1) == subOps) || (k.charAt(k.length - 1) == mulOps) || (k.charAt(k.length - 1) == divOps)) {
                currentExpression += "";
                updateBox();
            }
            else {
                
                currentExpression += button.value;
                updateBox();
                clearLine();
            }
        }
        else if (displayLine.innerHTML != "" && evalLine.innerHTML != "") {
            resetExp();
            clearLine();
            currentExpression = (currentDisplay * 1) + button.value;
            updateBox();
        }
    });
});


// equal
evBtn.addEventListener('click', () => {
    if (displayLine.innerHTML != "" && evalLine.innerHTML == "") {
        k = String(currentExpression);
        lastIndex = Math.max(k.lastIndexOf(addOps), k.lastIndexOf(subOps), k.lastIndexOf(mulOps), k.lastIndexOf(divOps));
        lastOps = k.charAt(lastIndex);
        lastOpsIndex = k.lastIndexOf(lastOps);
        evLastSlice = k.slice(0, lastOpsIndex)
        if ((k.charAt(k.length - 1) == addOps) || (k.charAt(k.length - 1) == subOps) || (k.charAt(k.length - 1) == mulOps) || k.charAt(k.length - 1) == divOps) {
            currentDisplay = eval(evLastSlice);
            updateLine();
            displayLine.innerHTML = currentDisplay;
        }
        else {
            let render = eval(currentExpression);
            currentExpression = render;
            updateDsp();
            updateLine();
        };
    }
    else if (displayLine.innerHTML != "" && evalLine.innerHTML != "") {
        resetExp();
        clearLine();
        clearBox();
        resetDsp();

    }
});



// point




// clear 
clear.addEventListener('click', () => {
    clearBox();
    clearLine();
    resetExp();
    resetDsp();

});

// Update box
function updateBox() {
    displayLine.innerHTML = currentExpression;
};
function clearBox() {
    displayLine.innerHTML = "";
};
function updateLine() {
    evalLine.textContent = currentDisplay;
};
function clearLine() {
    evalLine.textContent = "";
};
function updateDsp() {
    currentDisplay = currentExpression;
};
function resetDsp() {
    currentDisplay = "";
};
function resetExp() {
    currentExpression = "";
}



