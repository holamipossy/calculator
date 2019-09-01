var calculator = {
    init: function() {
      // create an empty array for the operands and assign operator to null
      this.operands = new Array(3);
      this.operands[0] = null;
  
      //retrieve the display textfield and the equals button
      this.txtDisplay = document.getElementById("display");
      this.btnEquals = document.getElementById("equals");
      this.btnClear = document.getElementById("clear");
      this.btnDot = document.getElementById("dot");
      this.btnPercent = document.getElementById("percent");
      this.setClearListener();
      this.setDotListener();
      this.setEqualsListener();
  
      // set event listener for numbers
      this.numbers = document.getElementsByClassName("digit");
      for (var i = 0; i < this.numbers.length; i++) {
        this.setNumberListener(this.numbers[i])
      }
  
      // set event listeners for operators
      this.operators = document.getElementsByClassName("operator");
      console.log(this.operators)
      for (var j = 0; j < this.operators.length; j++) {
        this.setOperatorListener(this.operators[j])
      }
    },
  
    setClearListener: function() {
      var self = this;
      this.btnClear.onclick = function() {
        self.operands.splice(0, 3);
        self.txtDisplay.value = "0";
      };
    },
  
    setDotListener: function() {
      var self = this;
      self.btnDot.onclick = function() {
        if (calculator.operands[1] == null) {
          var dot = calculator.operands[0].indexOf(".");
          if (dot < 0) {
            calculator.operands[0] = calculator.operands[0] + self.btnDot.value
            var text = self.txtDisplay.value + self.btnDot.value
            return self.txtDisplay.value = text
          } else {
            return;
          }
        } else {
          var dot = calculator.operands[2].indexOf(".");
          if(dot < 0) {
            calculator.operands[2] = calculator.operands[2] + self.btnDot.value;
            var text = self.txtDisplay.value + self.btnDot.value;
            return self.txtDisplay.value = text;
          } else {
            return;
          }
        }
      }
    },
  
    setPercentListener: function() {
  
    },
  
    setOperatorListener: function(operator) {
      var self = this;
      operator.onclick = function() {
        var text = operator.value;
        calculator.operands[1] = operator.value;
        return self.txtDisplay.value = text;
        // Does this work???
      }
    },
  
    setNumberListener: function(number) {
      var self = this;
      number.onclick = function() {
        if (calculator.operands[1] == null) {
          if (calculator.operands[0] != null) {
            calculator.operands[0] = calculator.operands[0] + number.value
            var text = self.txtDisplay.value + number.value;
            return self.txtDisplay.value = text
          } else {
            calculator.operands[0] = number.value;
            console.log(calculator.operands[0]);
            return self.txtDisplay.value = number.value;
          }
        } else {
          if (calculator.operands[2] != null) {
            calculator.operands[2] = calculator.operands[2] + number.value
            var text = self.txtDisplay.value + number.value;
            return self.txtDisplay.value = text
          } else {
            calculator.operands[2] = number.value;
            console.log(calculator.operands[2]);
            return self.txtDisplay.value = number.value;
          }
        }
      }
    },
  
    setEqualsListener: function() {
      var self = this;
      self.btnEquals.onclick = function() {
        var operands = calculator.operands;
        console.log(operands);
  
        if (operands[1] == "+") {
          if (operands[0].indexOf(".") > 0 || operands[2].indexOf(".") > 0) {
            var result = parseFloat(operands[0]) + parseFloat(operands[2]);
            console.log(result)
            self.txtDisplay.value = result;
            return calculator.operands.splice(0, 3)
          } else {
            var result = parseInt(operands[0]) + parseInt(operands[2]);
            console.log(result)
            self.txtDisplay.value = result;
            return calculator.operands.splice(0, 3)
          }
        } else if (operands[1] == "-") {
          if (operands[0].indexOf(".") > 0 || operands[2].indexOf(".") > 0) {
            var result = parseFloat(operands[0]) - parseFloat(operands[2]);
            console.log(result)
            self.txtDisplay.value = result;
            return calculator.operands.splice(0, 3)
          } else {
            var result = parseInt(operands[0]) - parseInt(operands[2]);
            console.log(result)
            self.txtDisplay.value = result;
            return calculator.operands.splice(0, 3)
          }
        } else if (operands[1] == "*") {
          if (operands[0].indexOf(".") > 0 || operands[2].indexOf(".") > 0) {
            var result = parseFloat(operands[0]) * parseFloat(operands[2]);
            console.log(result)
            self.txtDisplay.value = result;
            return calculator.operands.splice(0, 3)
          } else {
            var result = parseInt(operands[0]) * parseInt(operands[2]);
            console.log(result)
            self.txtDisplay.value = result;
            return calculator.operands.splice(0, 3)
          }
        } else if (operands[1] == "/") {
          if (operands[0].indexOf(".") > 0 || operands[2].indexOf(".") > 0) {
            var result = parseFloat(operands[0]) / parseFloat(operands[2]);
            console.log(result)
            self.txtDisplay.value = result;
            return calculator.operands.splice(0, 3)
          } else {
            var result = parseInt(operands[0]) / parseInt(operands[2]);
            console.log(result)
            self.txtDisplay.value = result;
            return calculator.operands.splice(0, 3)
          }
        }
      }
    }
  
  };
  
  window.onload = calculator.init();
  