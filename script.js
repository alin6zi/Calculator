const displayLine = document.getElementById('display');
const evalLine = document.getElementById('print');
const numberButtons = document.querySelectorAll('.butt-num .number
');
const doubleZero = document.getElementById('btn10')
const numberZero = document.getElementById('btn0');
const pointBtn = document.getElementById('btn11');
const addBtn = document.getElementById('opadd');
const subBtn = document.getElementById('opsub');
const divBtn = document.getElementById('opdiv');
const mulBtn = document.getElementById('opmul');
const evBtn = document.getElementById('opev');
const clear = document.getElementById('clear');


let opsBtn = [addBtn, subBtn, divBtn, mulBtn];
let opsObj = "+-/*"



let currentExpression = "";
let currentDisplay = "";
let fuck = (currentExpression) * 1;

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        if (Boolean(evalLine.innerText) == false) {
            currentExpression += button.textContent;
            updateBox();
            clearLine();
        }
        else {
            currentExpression = "";
            currentExpression += button.textContent;
            updateBox();
            clearLine();
        }
    });
});

// 00 button 
doubleZero.addEventListener('click', () => {
    if (currentExpression == "" && currentDisplay == "") {
        clearLine();
        clearBox();
        resetExp();
    }
    else if (currentExpression != "" && currentDisplay == "") {
        currentExpression += "00";
        updateBox();
    }
    else if (currentExpression != "" && currentDisplay != "") {
        currentExpression = 0;
        updateBox();
        clearLine();
        resetExp();
        resetDsp();
    }
});
// zero
numberZero.addEventListener('click', () => {
    if (currentExpression == "" && currentDisplay == "") {
        clearLine();
        clearBox();
        resetExp();
    }
    else if (currentExpression != "" && currentDisplay == "") {
        currentExpression += "00";
        updateBox();
    }
    else if (currentExpression != "" && currentDisplay != "") {
        currentExpression = 0;
        updateBox();
        clearLine();
        resetExp();
        resetDsp();
    }
});
// float point
pointBtn.addEventListener('click', () => {
    (currentExpression == 0) ? pointF1() : pointF2();
    function pointF1() {
        currentExpression = "0.";
        displayLine.innerHTML = "0.";
        updateBox();
    }
    function pointF2() {
        currentExpression += `${memory}`;
        updateBox();
        clearLine();
    }
});

// operators
opsBtn.forEach(button => {
    button.addEventListener('click', () => {
        if (currentExpression == "") {
            currentExpression = 0 + button.value;
            updateBox();
            clearLine();
        }
        else {
            currentExpression += button.value;
            updateBox();
            clearLine();
        }
    });
});


// equal
evBtn.addEventListener('click', () => {
    if (Boolean(displayLine.innerHTML) == true && Boolean(evalLine.innerHTML) == false) {
        let a = eval(currentExpression);
        currentExpression = a * 1;
        updateDsp();
        updateLine();

    }
    else if (Boolean(displayLine.innerHTML) == true && Boolean(evalLine.innerHTML) == true) {
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
