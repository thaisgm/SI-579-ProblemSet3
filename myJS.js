/*
* Excercise 1
*
*/
/*
* Then write a function that changes the text and the color inside the div
*
*/

function changeColor(){
    //Write a condition determine what color it should be changed to
    var oldColor = '#F08080';
    var newColor = '#7c7cff';

    var colorBlock = document.getElementById('color-block');


    if (colorBlock.style.background == oldColor || colorBlock.style.background == 'rgb(240, 128, 128)'){
        colorBlock.style.background = newColor;
        document.getElementById("color-name").innerHTML = newColor;
        
    }
    else{
        document.getElementById("color-block").style.background = oldColor;
        document.getElementById("color-name").innerHTML = oldColor;
    }
}

const colorBlock = document.getElementById("color-block");

colorBlock.addEventListener('click', changeColor());



/*
* For excercise 2, you need to write an event handler for the button id "convertbtn"
* on mouse click. For best practice use addEventListener.
*
*/

const convertButton = document.getElementById("convertbtn");

convertButton.addEventListener('click', function(){

    var farenheit = document.getElementById('f-input').value;
    console.log('response, ', farenheit);
    convertTemp(farenheit);

});

/*
* Then write a function that calculates Fahrenheit to Celsius and display it on the webpage
*
*/

function convertTemp(farenheit){

    //Calculate the temperature here

    //Send the calculated temperature to HTML

    var celsius = (farenheit - 32)*(5/9);

    console.log('CELSIUS: ', celsius);

    document.getElementById("c-output").innerHTML = celsius;

    
}


