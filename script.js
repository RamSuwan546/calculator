// Function to append value to the display
function appendValue(value) {
    document.getElementById('display').value += value;
  }
  
  // Function to clear the display
  function clearDisplay() {
    document.getElementById('display').value = '';
  }
  
  // Function to calculate the result
  function calculateResult() {
    let expression = document.getElementById('display').value;
    try {
      // Evaluate the expression safely
      let result = eval(expression);
      document.getElementById('display').value = result;
    } catch (e) {
      document.getElementById('display').value = 'Error';
    }
  }
  