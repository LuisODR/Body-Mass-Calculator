
const form = document.querySelector('#form');



form.addEventListener('submit', function (event) {
    event.preventDefault();
    const inputWeight = event.target.querySelector('#person-weight');
    const inputHeight = event.target.querySelector('#person-height');

    const weight = Number(inputWeight.value);
    const height = Number(inputHeight.value);

    if (!weight && !height) {
        setResult('Invalid weight and height!', false)
        return;
    }

    if (!weight) {
        setResult('Invalid weight!', false)
        return;
    }

    if (!height) {
        setResult('Invalid height!', false)
        return;
    }

    const bmi = getBMI(weight, height);
    const levelBmi = calcBMI(bmi);

    const msg = `Your bmi is ${bmi} and you are ${levelBmi}!`;

    setResult(msg, true);

});


function calcBMI(bmi) {
    const levelBmi = ['Underweight', 'Normal weight', 'Overweight', 'Obesity Class 1', 'Obesity Class 2', 'Obesity Class 3'];

    if (bmi >= 39.9) return levelBmi[5];
    if (bmi >= 34.9) return levelBmi[4];
    if (bmi >= 29.9) return levelBmi[3];
    if (bmi >= 24.9) return levelBmi[2];
    if (bmi >= 18.5) return levelBmi[1];
    if (bmi < 18.5) return levelBmi[0];
}

function getBMI(weight, height) {
    const bmi = weight / (height ** 2);
    return bmi.toFixed(2);
}

function createP() {
    const p = document.createElement('p');
    return p;
}

function setResult(msg, isValid) {
    const result = document.querySelector('#result');
    result.innerHTML = '';

    const p = createP();

    if (isValid) {
        p.classList.add('paragrafh-result');
      } else {
        p.classList.add('wrong-result');
      }
    
    p.innerHTML = msg;
    result.appendChild(p)
}










