
function calcFib() { //Callback function that calculates the nth term of fibonacci series.
    var firstTerm = 0;
    var secondTerm = 1;
    var requiredNo;
    var nthTerm = document.getElementById('input-no').value;
    if (nthTerm == 1)
        document.getElementById('display-panel').innerText = '0';
    if (nthTerm == 2)
        document.getElementById('display-panel').innerText = '1';
    if (nthTerm != 1 && nthTerm != 2) {
        for (var i = 0; i < nthTerm - 2; i++) {
            requiredNo = firstTerm + secondTerm;
            firstTerm = secondTerm;
            secondTerm = requiredNo;
        }
        document.getElementById('display-panel').innerText = requiredNo;// Displayes the nth term of fibonacci series.
    }
}
document.querySelector('#calcFibonacci').addEventListener('click', calcFib);//Listens to the click event on the
                                                                //specific element and calls the function'calcFib'.
function isNumber(event)
{
    var charcode = event.charCode;
    if(charcode<46 || charcode>57)
{   
    document.querySelector('#display-panel').style.color = 'red';
    document.querySelector('#display-panel').innerHTML = 'Invalid Number !';
}
    else
    {   document.querySelector('#display-panel').innerHTML = '';
        document.querySelector('#display-panel').style.color = 'black';
    }
}                                
var input = document.querySelector('#input-no');
input.addEventListener('keypress', isNumber);
input.addEventListener('paste', isNumber);                         