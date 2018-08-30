// Getting elements from the DOM
let btn = document.getElementById('btn__submit');
let chrName = document.getElementById('character__name');
let chrJob = document.getElementById('character__job');
let chrRacial = document.getElementById('character__racial');
let chrTrait = document.getElementById('character__trait');
let chrStuff = document.getElementById('character__stuff');


// Show the box for the Character
let chrBox = document.querySelector('.character__creation');


btn.addEventListener('click', generateChar);




// Flag the gender

function gender() {
    let isChecked = document.getElementById('gender--male').checked;
    // console.log(isChecked);
    return isChecked;
}

// Character Generator Function
function generateChar() {

    

    // *
    // Choose Race from the HTML selector
    // *
    let chrSelect = document.getElementById('character__selector').value;

    switch (chrSelect) {
        case 'humain':
            x = races.human
            break;
        case 'elf':
            x = races.elf
            break;
        case 'nain':
            x = races.dwarf
            break;
        case 'orc':
            x = races.halforc
            break;
        case 'gnome':
            x = races.gnome
            break
        case 'halfelin':
            x = races.halfelin
            break;
        case 'halfelf':
            x = races.halfelf
            break;
        default :
            x = races.human;
    }

    
    // *
    // Choose job from the HTML selector
    // *
    let jobSelect = document.getElementById('job__selector').value;

    switch (jobSelect) {
        case 'marchand':
            y = jobs.merchant
            break;
        case 'barde':
            y = jobs.bard
            break;
        case 'druide':
            y = jobs.druid
            break;
        case 'magicien':
            y = jobs.magician
            break;
        case 'moine':
            y = jobs.monk
            break
        case 'guerrier':
            y = jobs.warrior
            break;
        case 'paladin':
            y = jobs.paladin
            break;
        case 'prêtre':
            y = jobs.priest
            break;
        case 'rodeur':
            y = jobs.ranger
            break;
        case 'roublard':
            y = jobs.thief
            break;
        default :
            y = jobs.merchant
    }

    // Generate the Name depending on the sex with gender() function
    
    let isMale = gender();
    if (isMale == true) {
        firstName = x.maleFirstName[Math.floor(x.maleFirstName.length*Math.random())];
    } else {
        firstName = x.femaleFirstName[Math.floor(x.femaleFirstName.length*Math.random())];
    }
    let lastName = x.lastName[Math.floor(x.lastName.length*Math.random())];

    // RNG Function to generate random integer for the jobs
    let max = jobs.length;
    // console.log(max);
    function getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }
    
    // Job Random
     let getRngInt = getRandomInt(3);
     console.log(getRngInt);
    // let job = jobs[getRngInt];

    // Job

    let job = y;
    
    // Racial chaned in Specificity
    // let racial = [];

    // Randomly generating racials for the character
    // for (let i = 0; i < getRandomInt(7); i++) {
    //     racial.push(x.racial[Math.floor(x.racial.length*Math.random())])
    //     console.log(racial);
    // }
    let specificity = spec[Math.floor(spec.length*Math.random())];

    // Trait
    // let trait = job.trait[getRngInt];
    let trait = traits[Math.floor(traits.length*Math.random())];

    // Equipment
    // let equipment = stuff[getRngInt];
    // let equipment = y.stuff[Math.floor(y.stuff.length*Math.random())];
    let equipment = stuff[Math.floor(stuff.length*Math.random())] + ', ' +
                    stuff[Math.floor(stuff.length*Math.random())] + ', ' +
                    stuff[Math.floor(stuff.length*Math.random())];


    // Switch CSS to display:block
    // Still need more work to avoid flicking of the card /!\
    // chrBox.style.display="block";
    if(chrBox.classList.contains("display--off") ) {
        chrBox.classList.remove("display--off");
        chrBox.classList.add("display--on");

            // Add the character DATAS into the DOM
            chrName.innerHTML = firstName + ' ' + lastName;
            chrJob.innerHTML = job.name;
            chrRacial.innerHTML =  specificity;
            chrTrait.innerHTML =  trait;
            chrStuff.innerHTML =  equipment;

    } else if(chrBox.classList.contains("display--on") ) {
        chrBox.classList.remove("display--on");
        chrBox.classList.add("display--off");
        setTimeout(function(){
            chrBox.classList.add("display--on");
            chrBox.classList.remove("display--off");

            // Add the character DATAS into the DOM
            chrName.innerHTML = firstName + ' ' + lastName;
            chrJob.innerHTML = job.name;
            chrRacial.innerHTML =  specificity;
            chrTrait.innerHTML =  trait;
            chrStuff.innerHTML =  equipment;

        }, 500);
    }

}