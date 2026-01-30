let count = 0;

const p = document.querySelector('#counter');
const addButton = document.querySelector('#addBtn');
const subtractionButton = document.querySelector('#subtractionBtn');
const body = document.querySelector('body');

addButton.addEventListener('click', () => {
    count += 1;
    p.innerText = `Count: ${count}`;   
});

subtractionButton.addEventListener('click', () => {
    count -= 1;
    p.innerText = `Count: ${count}`;
});

const p2 = document.createElement('p');
p2.innerText = 'THIS IS SIMPLE INCREMENT DECREMENT COUNTER CREATED BY JAVASCRIPT';
body.append(p2);
const resetButton = document.createElement('button');
resetButton.innerText = 'Reset Counter';
body.append(resetButton);   

resetButton.addEventListener('click', () => {
    count = 0;
    p.innerText = `Count: ${count}`;
});
resetButton.addEventListener('mouseover', () => {
    resetButton.style.backgroundColor = 'red';
});
resetButton.addEventListener('mouseout', () => {
    resetButton.style.backgroundColor = '';
}); 
