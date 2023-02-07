"use strict";

// Makes variables
let textInput = document.getElementById("input");
let result = document.getElementById("output");
let dropDown = document.getElementById("dropDown");
let textOutput = document.getElementById("output");
const submit = document.getElementById("submit");
// Makes eventlistener
submit.addEventListener("click", submitAnswer);

function submitAnswer() {
  let textInputResult = textInput.value;
  console.log(dropDown.value);
  //   1
  if (dropDown.value === "1") {
    console.log(textInputResult.charAt(0).toUpperCase() + textInputResult.slice(1));
    textOutput.value = textInputResult.charAt(0).toUpperCase() + textInputResult.slice(1);
  }
  //   2
  else if (dropDown.value === "2") {
    console.log(textInputResult.substring(0, textInputResult.lastIndexOf(" ")));
    textOutput.value = textInputResult.substring(0, textInputResult.lastIndexOf(" "));
  }
  //   3
  else if (dropDown.value === "3") {
    console.log(textInputResult.substring(0, textInputResult.lastIndexOf(" ")).length);
    textOutput.value = textInputResult.substring(0, textInputResult.lastIndexOf(" ")).length;
  }
  //   4
  else if (dropDown.value === "4") {
    console.log(
      textInputResult
        .substring(textInputResult.indexOf(" "), textInputResult.lastIndexOf(" "))
        .trim()
    );
    textOutput.value = textInputResult
      .substring(textInputResult.indexOf(" "), textInputResult.lastIndexOf(" "))
      .trim();
  }
  //  5
  else if (dropDown.value === "5") {
    // detects if the input text ends with .jpg, .png or with something else
    if (textInputResult.endsWith(`.jpg`)) {
      textOutput.value = "this is a jpg";
    } else if (textInputResult.endsWith(`.png`)) {
      textOutput.value = "this is a png";
    } else {
      textOutput.value = "this is neither";
    }
  }
  //   6
  else if (dropDown.value === "6") {
    console.log(`*`.repeat(textInputResult.length));
    textOutput.value = `*`.repeat(textInputResult.length);
  }
  //   7
  else if (dropDown.value === "7") {
    console.log(
      textInputResult.substring(0, 2).toLowerCase() +
        textInputResult[2].toUpperCase() +
        textInputResult.slice(3).toLowerCase()
    );
    textOutput.value =
      textInputResult.substring(0, 2).toLowerCase() +
      textInputResult[2].toUpperCase() +
      textInputResult.slice(3).toLowerCase();
  } else if (dropDown.value === "8") {
    textOutput.value = "";
    // creates an Array from each letter and names each letter in the array as an "i"
    Array.from(textInputResult).forEach((letter, i) => {
      // i is each letter and if the space before the letter contains either a space or hyphen, it will capitalize
      if (textInputResult[i - 1] === " " || textInputResult[i - 1] === "-") {
        textOutput.value += textInputResult[i].toUpperCase();
      } else {
        textOutput.value += textInputResult[i];
      }
    });
  }
}

// name.substring(name.indexOf(" "), name.lastIndexOf(" ")).trim();
