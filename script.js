const res = document.getElementById("result");
const toast = document.getElementById("toast");

function calculate(value) {
    const calculatedValue = eval(value || null);
    if (isNaN(calculatedValue)) {
        res.value = "Bah non, pas de division par 0 !";
        setTimeout(() => {
            res.value = "";
        }, 1300);
    } else {
        res.value = calculatedValue;
    }
}

// Afficher la valeur dans l'écran
function liveScreen(enteredValue) {
    if (!res.value) {
        res.value = "";
    }
    res.value += enteredValue;
}

//ajout d'un gestionnaire d'événements sur le document pour gérer les entrées clavier
document.addEventListener("keydown", keyboardInputHandler);

//fonction permettant de gérer les entrées au clavier
function keyboardInputHandler(e) {
    // pour corriger le comportement par défaut du navigateur,
    // Les touches Entrée et Retour arrière provoquaient un comportement indésirable lorsqu'une touche était déjà au centre de l'écran.
    e.preventDefault();
    //saisir l'écran en direct

    // chiffres
    if (e.key === "0") {
        res.value += "0";
    } else if (e.key === "1") {
        res.value += "1";
    } else if (e.key === "2") {
        res.value += "2";
    } else if (e.key === "3") {
        res.value += "3";
    } else if (e.key === "4") {
        res.value += "4";
    } else if (e.key === "5") {
        res.value += "5";
    } else if (e.key === "6") {
        res.value += "6";
    } else if (e.key === "7") {
        res.value += "7";
    } else if (e.key === "7") {
        res.value += "7";
    } else if (e.key === "8") {
        res.value += "8";
    } else if (e.key === "9") {
        res.value += "9";
    }

    //opérateurs
    if (e.key === "+") {
        res.value += "+";
    } else if (e.key === "-") {
        res.value += "-";
    } else if (e.key === "*") {
        res.value += "*";
    } else if (e.key === "/") {
        res.value += "/";
    }

    //chiffre décimal
    if (e.key === ".") {
        res.value += ".";
    }

    //clear
    if (e.which === 27) {
        res.value = "";
    }

    //appuyez sur la touche Entrée pour calculer
    if (e.key === "Enter") {
        calculate(result.value);
    }

    //retour pour effacer
    if (e.key === "Backspace") {
        const resultInput = res.value;
        //effacer le dernier caractère
        res.value = resultInput.substring(0, res.value.length - 1);
    }
}