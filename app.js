"use strict";

// Mission: If input is a first name: 
// Make the first character in a name uppercase, 
// and the rest lowercase

// grab user input

const userInput = document.querySelector('.user-input');

// grab output 

const output = document.querySelector('.output');

// grab selector 

const manyOptions = document.querySelector('#manyOptions');

// grab btn 

const btn = document.querySelector('.btn');

// event listener 

btn.addEventListener('click', () => {

    if (manyOptions.value === "first-name"){
        
        // store user input in variable and turn everything to lowercase

        let name = userInput.value.toLowerCase();

        // store everything but the first letter in a new variable 

        let nameUden = name.slice(1);

        // grab the first letter and make it uppercase
        
        let firstLetter = name[0].toUpperCase();

        // concatenate first letter and remaining name
        
        let newName = firstLetter.concat(nameUden);

        // make the new name the output's value
        
        output.value = newName;

    } else if (manyOptions.value === "full-name"){

        // Mission: If input is a full name: Find the first name

        // store user input in variable and trim potential spaces in the beginning

        let fullName = userInput.value.trimStart();

        // find index of the first white space

         let cutHere = fullName.indexOf(' ');

        // keep everything from the beginning until the whitespace

         let newFirstName = fullName.substring(0, cutHere);       

        // make the first name the output's value
        
        output.value = newFirstName;

    } else if (manyOptions.value === "first-name-length"){

        // Mission: If input is a full name: Find the first name's length

        // store user input in variable and trim potential spaces in the beginning

        let fullName = userInput.value.trimStart();

        // find index of the first white space

         let cutHere = fullName.indexOf(' ');

        // keep everything from the beginning until the whitespace

         let newFirstName = fullName.substring(0, cutHere);       

        // make the first name's length the output's value
        
        output.value = `${newFirstName} has ${newFirstName.length} characters`;


    }
})

