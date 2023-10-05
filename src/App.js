<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Calculator</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class='CalcContainer'>
        <div class='CalcDisplay' id='display'>
            0
        </div>
        <div class='ButtonContainer'>
            <button class='CalcButton' onclick="addToDisplay('7')">7</button>
            <button class='CalcButton' onclick="addToDisplay('8')">8</button>
            <button class='CalcButton' onclick="addToDisplay('9')">9</button>
            <button class='CalcButton' onclick="addToDisplay('+')">+</button>
            <button class='CalcButton' onclick="addToDisplay('4')">4</button>
            <button class='CalcButton' onclick="addToDisplay('5')">5</button>
            <button class='CalcButton' onclick="addToDisplay('6')">6</button>
            <button class='CalcButton' onclick="addToDisplay('-')">-</button>
            <button class='CalcButton' onclick="addToDisplay('1')">1</button>
            <button class='CalcButton' onclick="addToDisplay('2')">2</button>
            <button class='CalcButton' onclick="addToDisplay('3')">3</button>
            <button class='CalcButton' onclick="addToDisplay('*')">*</button>
            <button class='CalcButton' onclick="clearDisplay()">C</button>
            <button class='CalcButton' onclick="addToDisplay('0')">0</button>
            <button class='CalcButton' onclick="calculate()">=</button>
            <button class='CalcButton' onclick="addToDisplay('/')">÷</button>
            <button class='CalcButton MySurnameButton' onclick="handleMySurnameClick()">
                My Surname
            </button>
        </div>
    </div>
    <script>
        let displayValue = "0";

        function addToDisplay(value) {
            if (displayValue === "0") {
                displayValue = value;
            } else {
                displayValue += value;
            }
            document.getElementById("display").textContent = displayValue;
        }

        function clearDisplay() {
            displayValue = "0";
            document.getElementById("display").textContent = displayValue;
        }

        function calculate() {
            try {
                displayValue = eval(displayValue).toString();
                document.getElementById("display").textContent = displayValue;
            } catch (error) {
                displayValue = "Error";
                document.getElementById("display").textContent = displayValue;
            }
        }

        function handleMySurnameClick() {
            alert("MESIA");
        }
    </script>
</body>
</html>
