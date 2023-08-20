const webDesigner = {
    name: "YOUR NAME",
    yearsAlive: [1992, 2022],
    imgSrc: "user.jpg",
    skills: ["Photoshop", "HTML", "CSS", "JS"],
    diet: {
        food: "Indomi",
        drinks: ["Coffee", "Nescafe", "tea", "water"],
    },
};

//write your name instead of the YOUR NAME placeholder
//document.getElementsByName("eman hemida")[0]
webDesigner.name="Eman Hemida";

/*write a getAge function that takes the years alive array and returns your age,
save the value you return in a const of name age*/
/*
let currentYear = new Date().getFullYear();
let getAge = (person) => {
    return (person.yearOfDeath ? person.yearOfDeath : currentYear) - person.yearOfBirth
};
*/

/*

let getAge =(yearsAlive) => {
    let yearsAlive= [2002, 2023];
    const years={...yearsAlive};
    ddate=(years[1]);
    bdate =(years[0]);
    age =( ddate - bdate);
    return age;

    };
    getAge()*/

    /*
    let yearsAlive= [2002, 2023];
    const years={...yearsAlive};
    ddate=(years[1]);
    bdate =(years[0]);
    age =( ddate - bdate);
    console.log( age);
*/

/*Divide the Webdesign skills into designSkills and developmentskills using ES6*/


let skills = ["Photoshop", "HTML", "CSS", "JS"];
let [a,...b]=skills;
let designSkills = (a);
let developmentskills = (b);
console.log(designSkills);
const develop ={...developmentskills}
console.log(develop);



/*add Those extra skills to the developmentskills array ['ES6', 'ES5'] and add all of them into a new updatedDevSkills const*/

/*destructure the diet object and using new ES6 write a function that returns drinks that contain the letter t*/

function buildID() {
    const userID = `
    <div class="inner-container">
    <img src="img" alt="">
    <div class="info">
        <h1>placeholder</h1>
        <p><span class="text-grey">Age:${Age}</span> placeholder</p>
        <p><span class="text-grey">Design Skills:</span> placeholder</p>
        <p><span class="text-grey">Dev Skills:</span> placeholder</p>
        <p><span class="text-grey">Food:</span> placeholder</p>
        <p><span class="text-grey">Drinks:</span>placeholder</p>
        </div>
    </div>
    `;
}
