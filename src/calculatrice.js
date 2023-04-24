class Calculatrice {
    constructor() {
      this.res = document.getElementById("result");
      document.addEventListener("keydown", this.keyboardInputHandler.bind(this));
    }
  
    calculate(value) {
      const calculatedValue = eval(value || null);
      if (isNaN(calculatedValue)) {
        this.res.value = "Bah non, pas de division par 0 !";
        setTimeout(() => {
          this.res.value = "";
        }, 1300);
      } else {
        this.res.value = calculatedValue;
      }
    }

    clear() {
        this.res.value = "";
    }

    delete() {
        this.res.value = this.res.value.slice(0, -1);
    }
  
    liveScreen(enteredValue) {
      if (!this.res.value) {
        this.res.value = "";
      }
      this.res.value += enteredValue;
    }
  
    keyboardInputHandler(e) {
      e.preventDefault();
  
      if (e.key.match(/[0-9]/)) {
        this.liveScreen(e.key);
      }
  
      if (["+", "-", "*", "/", "."].includes(e.key)) {
        this.liveScreen(e.key);
      }
  
      if (e.which === 27) {
        this.res.value = "";
      }
  
      if (e.key === "Enter") {
        this.calculate(this.res.value);
      }
  
      if (e.key === "Backspace") {
        const resultInput = this.res.value;
        this.res.value = resultInput.substring(0, this.res.value.length - 1);
      }
    }
  }
  
  const calculatrice = new Calculatrice();
  