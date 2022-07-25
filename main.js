// let date = new Date();

// let time = date.getDay()

// switch (time) {
//        case 1:
//         console.log("1ci gun");
//         break;
//         case 2:
//             console.log("2ci gun");
//             break;
//         case 3: 
//         console.log("3cu gun");
//         break;
//     default:
//         console.log("gunlerden hec biri deyil");
//         break;
// }


// let i = 3;



// let i=3;


// while (i<=24) {
//     console.log("test");
//    i+=i;
// }
// do {
//     console.log("sss");
//     i+=i;
// } while (i<6);


// let date = new Date()

// let time = date.getDay()



// do {
//     console.log("ss");
// } while (time>2);


// let person1 = "Murad"
// let person2 = "Fexri"




// let persons = ["Murad", "Fexri", "Sebuhi", "Elsever", "Samir"]

// delete persons[0]

// persons.push("Ismayil")
// persons.pop()

// persons.shift()

// persons.unshift("test")

// persons.forEach(e => {
//     console.log(e);
// });

// function work(){
//     console.log("Developer");
// }

// let personOne2 = ["Murad", "Musali", 22, true, null]

// console.log(typeof personOne2);


let personOne = {
    firstName: "Murad",
    lastName: "Musali",
    age: 22,
    work: "Developer",
    profilePhoto:"https://bukovskevrchy.pl/img/64c9c78b19101eadf6e459ddbb0fd69a.jpg" 
}

let jpg = document.createElement("img")
let div = document.createElement("div")
let title = document.createElement("h1")

let body = document.querySelector("body");

body.append(div)
div.append(jpg)
div.appendChild(title)


div.style.width = "300px"
div.style.height = "300px"
div.style.border = "1px solid red"
jpg.setAttribute("src", personOne.profilePhoto)
jpg.style.width = "350px"
jpg.style.height = "350px"
jpg.style.objectFit = "cover"
title.innerHTML = (personOne.firstName + " " + personOne.lastName)
title.style.fontSize = "15px"
// let text = document.querySelector("h1");
// let jpg = document.querySelector("img")
// text.innerHTML = personOne.firstName
// jpg.setAttribute("src", personOne.profilePhoto)
// jpg.style.width = "100px"
// jpg.style.height = "100px"
// jpg.style.objectFit = "cover"




// console.log(typeof personOne);