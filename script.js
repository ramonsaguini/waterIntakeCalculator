function checkLts() {
       const name = document.getElementById('name').value;
       const weight = parseFloat(document.getElementById('weight').value);
       const calc = 0.033; 

       if (isNaN(weight)) {
           alert('Please enter a valid weight.');
           return;
       }
       const calcPL = (weight * calc).toFixed(2);
       document.getElementById('res').innerHTML = `${name} you should drink approximately ${calcPL} liters of water/day.`;
}

function clearF(){
       document.getElementById('weight').value = '';
       document.getElementById('res').innerHTML = 'Fill the form Please!!'; 
       document.getElementById('name').value = '';
}
