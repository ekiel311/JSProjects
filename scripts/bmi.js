// Check input and calculate the BMI
function bmiCalc() {
    let weight = document.getElementById("weight").value;
    let height = document.getElementById("height").value;
    let wLength = weight.length;
    let hLength = height.length;

    if (wLength == 0 && hLength == 0) {
        document.getElementById("bmiResult").innerHTML =
            'Please enter your <b class="text-info">Height(in cm)</b><br>and your <b class="text-info">Weight(in kg)<b>.';
    } else if (hLength == 0) {
        document.getElementById("bmiResult").innerHTML = 'Please enter your <b class="text-info">Height(in cm).';
    } else if (wLength == 0) {
        document.getElementById("bmiResult").innerHTML = 'Please enter your <b class="text-info">Weight(in kg).';
    } else {
        document.getElementById("bmiBtn").innerHTML =
            '<span class="spinner-border spinner-border-sm" aria-hidden="true"></span><span role="status"> Calculating...</span>';
        document.getElementById("bmiResult").innerHTML = "";
        setTimeout(bmiFeedback, 3000);
    }
}

function bmiFeedback() {
    bmiCalculating();

    let bmiNum = bmiCalculating();

    if (bmiNum < 18.5) {
        document.getElementById("bmiResult").innerHTML =
            'Your BMI is <b class="fs-5 text-success">' +
            bmiNum +
            '</b>. You are <b class= "fs-5 text-success fw-bolder">UNDERWEIGHT</b>. Time to eat more Go, Grow, and Glow Foods.';
    } else if (bmiNum >= 18.5 && bmiNum <= 24.9) {
        document.getElementById("bmiResult").innerHTML =
            'Your BMI is <b class="fs-5 text-primary">' +
            bmiNum +
            '</b>. You are in a <b class= "fs-5 text-primary fw-bolder">NORMAL WEIGHT</b>. Witwiwww...."Sana All!"😙';
    } else if (bmiNum >= 25 && bmiNum <= 29.9) {
        document.getElementById("bmiResult").innerHTML =
            'Your BMI is <b class="fs-5 text-warning">' +
            bmiNum +
            '</b>. You are <b class= "fs-5 text-warning fw-bolder">OVERWEIGHT</b>. <br>That\'s okay, just eat your veggies, and stay away from Jollibee.😉';
    } else {
        document.getElementById("bmiResult").innerHTML =
            'Your BMI is <b class="fs-5 text-danger">' +
            bmiNum +
            '</b>. You are already <b class= "fs-5 text-danger fw-bolder">OBESE</b>. <br>Have you heard of <b>Fasting</b>? Try it, Gutumin mo sarili mo nang ilang araw. <br> <b>Pero DON\'T,</b> ang sarap kaya kumain.<br> ༼ つ ◕_◕ ༽つ🍰🍔🍗🥤';
    }

    document.getElementById("weight").value = "";
    document.getElementById("height").value = "";
    document.getElementById("bmiBtn").innerHTML = "Calculate BMI";
}

function bmiCalculating() {
    let weight = document.getElementById("weight").value;
    let height = document.getElementById("height").value;

    let bmi = weight / ((height / 100) * (height / 100));
    bmi = bmi.toFixed(1);
    return bmi;
}
