/* Given the 'id' attribute of a form element, this
   will return the value entered by the user into
   that form element. */
function formValue(id) {
  // Get the form element.
  let formElement = document.getElementById(id);
  // LEVEL-UP - the formValue function calls for an argument, which is from the 'id' container each time it is used. Example: let noun1 = formValue("noun-1") calls for argument equal to the id="noun-1" form value and stores it to noun1.


  // When the form element isn't found, return
  // a string that signifies that.
  if (formElement === null) {
    return `[${id} NOT FOUND]`;
  }

  let value = formElement.value;

  // When the value is empty, return a string
  // with the placeholder text.
  if (formElement.value.trim() === "") {
    return `[${formElement.placeholder}]`;
  }

  return document.getElementById(id).value;
}

/* Given the 'id' of an HTML element and a 
   'className', this will add that class to
   the HTML element. */
function addClassToElement(id, className) {
  let element = document.getElementById(id);
  element.classList.add(className);
}

/* The code here will be executed each time
   that the form button is clicked. */
function generate() {
// Retrtieve Form values
let noun1 = formValue("noun-1");
let adjective1 = formValue("adjective-1");
let adjective2 = formValue("adjective-2");
let bodyPart = formValue("body-part");
let verb1 = formValue("verb-1");
let place = formValue("place");
let celebrity = formValue("celebrity");
let animal = formValue("animal");
let number = formValue("number");
let adjective3 = formValue("adjective-3");
let lastName = formValue("last-name");
let noun2 = formValue("noun-2");
let foodType = formValue("food-type");
let personInRoom = formValue("person-room");
let maleName = formValue("male-name");
let verbIng = formValue("verb-ing");
let exclamation = formValue("exclamation");
let verb2 = formValue("verb-2");

// Insert form values into MadLibs
let madLib = `
  Convincing your ${noun1} to let you stay up past your bedtime to play
  video games can be ${adjective1}, but it's not impossible. Here are some 
  ${adjective2} excuses to use when you need one last game.<br><br>
  1. My ${bodyPart} hurts. The only way it'll feel better is if I ${verb1} these 
  cyborgs and save (the) ${place}.<br>
  2. ${celebrity} also plays ${animal} Hut so if you want me to be successful in life, 
  please give me ${number} minutes to finish the ${adjective3} level.<br>
  3. Mrs. ${lastName}, my ${noun2} teacher, said that video games make you smart. She 
  plays ${foodType} Assault, so she knows.<br>
  4. There's nothing else to do! ${personInRoom} isn't here to play with, Grandpa ${maleName} 
  went to bed, and it's ${verbIng} outside.<br>
  5. ${exclamation}! If you let me play Night ${verb2}, I'll clean my room. Think about it.
  `;


//  Output MadLib to player with form values in place
document.getElementById("output").innerHTML = madLib;
addClassToElement("container", "generated");
}
  // LEVEL-UP - the formValue function calls for an argument, which is from the 'id' container each time it is used. Example: let noun1 = formValue("noun-1") calls for argument equal to the id="noun-1" form value and stores it to noun1.