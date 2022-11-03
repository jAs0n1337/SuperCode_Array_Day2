// array - Teil 2 - lev1_1: Array sort()
let languages = [
    "JavaScript",
    "Python",
    "Java",
    "Ruby",
    "PHP",
    "C++",
    "CSS",
    "C#",
    "Go",
    "C",
    "TypeScript",
    "Swift"
];

languages.sort();
console.log(languages);
//===============================================

// array - Teil 2 - lev1_3: Array Number sort

let numArray1 = [36, 24, 22, 3, 2, 98, 88, 99, 10, 54, 68, 70];
numArray1.sort(function (a, b) {
    return a - b;
})
console.log(numArray1);
//===============================================

// array - Teil 2 - lev1_11: Array splice()
let array = ["imageTeilnehmer000supercode.jpg", "imageTeilnehmer001supercode.jpg"];
array.splice(2, 0, "imageTeilnehmer008supercode.jpg", "imageTeilnehmer009supercode.jpg", "imageTeilnehmer010supercode.jpg");
console.log(array);
array.splice(5, 0, "imageTeilnehmer014supercode.jpg", "imageTeilnehmer015supercode.jpg", "imageTeilnehmer016supercode.jpg", "imageTeilnehmer017supercode.jpg", "imageTeilnehmer018supercode.jpg", "imageTeilnehmer019supercode.jpg");
console.log(array);
array.splice(11, 0, "imageTeilnehmer002supercode.jpg", "imageTeilnehmer003supercode.jpg", "imageTeilnehmer004supercode.jpg", "imageTeilnehmer005supercode.jpg", "imageTeilnehmer006supercode.jpg", "imageTeilnehmer007supercode.jpg", "imageTeilnehmer011supercode.jpg", "imageTeilnehmer012supercode.jpg", "imageTeilnehmer013supercode.jpg");
array.sort();
console.log(array);
//==============================================

// array - Teil 2 - lev1_12: Arrays slice()
let array2 = [
    "imageTeilnehmer000supercode.jpg",
    "imageTeilnehmer001supercode.jpg",
    "imageTeilnehmer002supercode.jpg",
    "imageTeilnehmer003supercode.jpg",
    "imageTeilnehmer004supercode.jpg",
    "imageTeilnehmer005supercode.jpg",
    "imageTeilnehmer006supercode.jpg",
    "imageTeilnehmer007supercode.jpg",
    "imageTeilnehmer008supercode.jpg",
    "imageTeilnehmer009supercode.jpg",
    "imageTeilnehmer010supercode.jpg",
    "imageTeilnehmer011supercode.jpg",
    "imageTeilnehmer012supercode.jpg",
    "imageTeilnehmer013supercode.jpg",
    "imageTeilnehmer014supercode.jpg",
    "imageTeilnehmer015supercode.jpg",
    "imageTeilnehmer016supercode.jpg",
    "imageTeilnehmer017supercode.jpg",
    "imageTeilnehmer018supercode.jpg",
    "imageTeilnehmer019supercode.jpg"
];
let copyImg1 = array2.slice(7, 15);
console.log(copyImg1);
let copyImg2 = array2.slice(6, 12);
console.log(copyImg2);
//============================================

