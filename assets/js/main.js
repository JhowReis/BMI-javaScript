const form = document.querySelector(`.form`);

form.addEventListener('submit', function (e) {
    e.preventDefault();
    const inputWeight = e.target.querySelector('#weight');
    const inputHeight = e.target.querySelector('#height');
    const weight = Number(inputWeight.value);
    const height = Number(inputHeight.value);


    if (!weight) {
        setResult('Invalid Weight ', false);
        return;
    }
    if (!height) {
        setResult('Invalid Height ', false);
        return;
    }


    const bmi = getBmi(weight, height);
    const bmiIndex = getIndexBmi(bmi);

    const message = `Your BMI:  ${bmi} (${bmiIndex}).`;

    setResult(message, true);
    console.log(bmi, bmiIndex);
});

function getIndexBmi(bmi) {
    const index = ['Underweight', 'Normal range',
        'Overweight', 'Obese class I', 'Obese class II', 'Obese class III'];
    if (bmi >= 39.9) return index[5];

    if (bmi >= 34.9) return index[4];
    if (bmi >= 29.9) return index[3];
    if (bmi >= 24.9) return index[2];
    if (bmi >= 18.5) return index[1];
    if (bmi < 18.5) return index[0];
}

function getBmi(weight, height) {
    const bmi = weight / (height * height);
    return bmi.toFixed(2);

}
function createParagraphs() {
    const p = document.createElement('p');
    return p;
}

function setResult(message, isValid) {
    const result = document.querySelector(`#result`);
    result.innerHTML = '';
    const p = createParagraphs();
    if (isValid) {
        p.classList.add('paragraphResult');
    } else {
        p.classList.add('bad');

    }

    p.innerHTML = message;
    result.appendChild(p);
}


