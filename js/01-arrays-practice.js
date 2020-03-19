// import Employee from "./Employee.js";
// import Employee from 'js/Employee';
// import {sayHi} from './Employee.js';

function divider(step) {
    if (step) {return `<h3> *********************** STEP ${step} *************************** </h3> <br>`}
    else {
        return `<h3> ********************************************************** </h3> <br>`
    }
}


//STEP 1
console.log(`********************** STEP 1 *********************************`)
const favMovies =['Limitless', 'The Shawshank Redemption', 'The Barber of Siberia', 'Terminator', 'Seventeen Moments of Spring' ]
console.log(favMovies[1])
let step1 = favMovies[1]
//STEP 2
console.log(`********************** STEP 2 *********************************`)
let movies = new Array(5)
// movies = favMovies.slice()
movies = Array.from(favMovies)
console.log(movies[0])
let step2 = movies[0]
//STEP 3
console.log(`********************** STEP 3 *********************************`)
movies.push('Scare face')
console.log(movies.length)
let step3 = movies.length
//STEP 4
console.log(`********************** STEP 4 *********************************`)
movies = [...favMovies]
delete movies[0]
console.log(movies)
let step4 = movies
//STEP 5
console.log(`********************** STEP 5 *********************************`)
movies = [...favMovies, 'Frida', 'evil wears Prada']
let step5 =[]
movies.forEach( (item, index,array) => {
    step5.push(item)
    console.log(`element number: ${index + 1} - element value: ${item} `)})

//STEP 6
console.log(`********************** STEP 6 *********************************`)
movies = [...favMovies, 'Frida', 'evil wears Prada']
let step6 =[]
for (const item in movies) {
    step6.push(`${item}: ${movies[item]}`)
    console.log( `${item}: ${movies[item]}`)
}
//STEP 7
console.log(`********************** STEP 7 *********************************`)
let step7 = [];
movies = [...favMovies, 'Frida', 'evil wears Prada']
let capitalizedMovies = movies.map( (item) => { return item.toUpperCase()})
capitalizedMovies.sort()
for (const item in capitalizedMovies) {
    step7.push(`${item}: ${capitalizedMovies[item]}`)
    console.log( `${item}: ${capitalizedMovies[item]}`)
}

//STEP 8
console.log(`********************** STEP 8 *********************************`)
let step8;
movies = [...favMovies, 'Frida', 'evil wears Prada']
let leastFavMovies = ['Spaceballs','CIAŁO', 'Terminator: Dark Fate']
// let htmlFavMovies = document.createElement("p")
let htmlFavMovies = ''
// let htmlLeastFavMovies = document.createElement("p")
let htmlLeastFavMovies = ''

// movies.forEach( (item) => {
//     htmlFavMovies += item + "\n"
// })
for (let item in movies) {
    // let newlement = document.createTextNode(movies[item] + "<br>")
    // htmlFavMovies.appendChild(newlement)
    htmlFavMovies += movies[item] + "<br>"
}

for (let item in leastFavMovies) {
    htmlLeastFavMovies += leastFavMovies[item] + "<br>"
}

// console.log(htmlFavMovies);
// leastFavMovies.forEach( (item) => {
//     htmlLeastFavMovies += item + "\n"
// })

step8 = `<h3>Movies I like:</h3> <br> ${htmlFavMovies}  <h3>Movies I regret watching:</h3> <br> ${htmlLeastFavMovies}  <br> `
console.log(step8)


//STEP 9
console.log(`********************** STEP 9 *********************************`)
movies = [...favMovies, 'Frida', 'evil wears Prada']
leastFavMovies = ['Spaceballs','CIAŁO', 'Terminator: Dark Fate']
let capitalizedFavMovies = movies.map( (item) => { return item.toUpperCase()})
let capitalizedLeastFavMovies = leastFavMovies.map( (item) => { return item.toUpperCase()})
let step9;
step9 = capitalizedFavMovies.concat(capitalizedLeastFavMovies).sort()

console.log(step9);

//STEP 10
console.log(`********************** STEP 10 *********************************`)
let step10;
step10 = step9.pop()
console.log(step10);
//STEP 11
console.log(`********************** STEP 11 *********************************`)
let step11;
step11 = step9.shift()
console.log(step11);

//STEP 12
console.log(`********************** STEP 12 *********************************`)
let step12Movies =[];
step12Movies = [...step9];
let notLikedMoviesIndexes = [];
let newLikedMovies =[];
['Braking Bad','Ford vs Ferrari', 'Fast&Furious'].map(item => {
    newLikedMovies.push(item.toUpperCase())
})
console.log(newLikedMovies)
for (let item of capitalizedLeastFavMovies) {
    let index = step9.indexOf(item)
    if (index !== -1) {
        notLikedMoviesIndexes.push(index)
    }
}
console.log('initial array',step12Movies);
console.log('indexes if not liked movies',notLikedMoviesIndexes)
notLikedMoviesIndexes.map( (index) => {
    if (newLikedMovies.length !== 0) {
        step12Movies[index] = newLikedMovies.shift();
    }
})
console.log('replaced',step12Movies);
let step12;
step12 = step12Movies

//STEP 13
console.log(`********************** STEP 13 *********************************`)
let employee1, employee2, employee3;
employee1 = [];
employee2 = [];
employee3 = [];
employee1["name"] = 'Vasya'
employee1["employed"] = true
employee1["employeeid"] = 1000;
employee1.title = 'engineer'
employee1.department = 'automation'
employee2["name"] = 'Dima'
employee2["employed"] = true
employee2["employeeid"] = 2000
employee2.title = 'manager'
employee2.department = 'AC Protection'
let employees;
employees = [employee1, employee2]
let step13;
step13 = employees[1].name
console.log(step13)

//STEP 14
console.log(`********************** STEP 14 *********************************`)
let employeesNames = [];
employees.forEach( value => employeesNames.push(value.name) );
let step14;
step14 = employeesNames
console.log(step14);

//STEP 15
console.log(`********************** STEP 15 *********************************`)
let step15 = [];
let arr = [];
employee3["name"] = 'Fedor'
employee3["employed"] = false
employee3["employeeid"] = 3000
employee3.title = 'engineer'
employee3.department = 'DC Protection'
employees.push(employee3)

for (let item of employees) {
    console.log(item)
    if (item.employed === true) {
        arr.push(item)
    }
}

for (let item of arr) {
    for (let i in item) {
        step15.push(`${i}: ${item[i]}`)
    }
    step15.push('***********')
}

console.log(step15)

//STEP 16
console.log(`********************** STEP 16 *********************************`)
let favoriteMoviesRate = [["Limitless", 5], ["Terminator", 2], ["Wallstreet never sleeps", 4], ["P.S. I love you", 3], ["Gladiator", 1]];

// using Map, finter is for onather case
let step16 = favoriteMoviesRate.map( item => {
    console.log(item[0])
        return item[0]
} )



console.log('step16',step16)
//STEP 17
console.log(`********************** STEP 17 *********************************`)
let employeeNames = ['ZAK',
    'JESSICA',
    'MARK',
    'FRED',
    'SALLY'
]

function showEmployee(arr) {
    return arr.map( item => {return `${item} <br>`}).toString()
}

let step17 = showEmployee(employeeNames);
console.log(step17)

//STEP 18
console.log(`********************** STEP 18 *********************************`)
function filter_array_values(arr) {
    arr = arr.filter(isEligible);
    return arr;
}

function isEligible(value) {
    if(value !== false || value !== null || value !== 0 || value !== "") {
        return value;
    }
}

let step18 = filter_array_values([58, '', 'abcd', true, null, false, 0])
console.log(step18)

//STEP 19
console.log(`********************** STEP 19 *********************************`)
function random_item(items)
{

    return items[Math.floor(Math.random()*items.length)];

}

var items = [254, 45, 212, 365, 2543];
console.log(random_item(items));
let step19 = random_item(items);
console.log(step19)

//STEP 20
console.log(`********************** STEP 20 *********************************`)
  let arrToSort =  [3, 8, 9, 7, 2]
const bubbleSort = arr => {
    for (let i = 0; i < arr.length - 1; i++) {
        let change = false;
        for (let j = 0; j < arr.length - (i + 1); j++) {
            if (arr[j] > arr[j + 1]) {
                change = true;
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
        if (!change) break;
    }
    return arr;
};

const quickSort = arr => {
    if (arr.length < 2) return arr;

    const pivot = arr[Math.floor(Math.random() * arr.length)];

    let left = [];
    let equal = [];
    let right = [];

    for (let element of arr) {
        if (element > pivot) right.push(element);
        else if (element < pivot) left.push(element);
        else equal.push(element);
    }

    return quickSort(left)
        .concat(equal)
        .concat(quickSort(right));
};



let step20 = bubbleSort(arrToSort)
console.log(step20)

window.document.write( divider(1) + step1 + divider() , divider(2) + step2 + divider(), divider(3) + step3 + divider(),
    divider(4) + step4 + divider(), divider(5) + step5 + divider(), divider(6) + step6 + divider(),
    divider(7) + step7 + divider(), divider(8) + step8 + divider(), divider(9) + step9 + divider(),
    divider(10) + step10 + divider(), divider(11) + step11 + divider(), divider(12) + step12 + divider(),
    divider(13) + step13 + divider(),divider(14) + step14 + divider(), divider(15) + step15  + divider(),
    divider(16) + step16  + divider(), divider(17) + step17  + divider(),divider(18) + step18  + divider(),
    divider(19) + step19  + divider(),divider(20) + step20  + divider()
)

// let p = document.createElement('p');
// p.appendChild(document.createTextNode( divider(1) + step1 + divider() , divider(2) + step2 + divider(), divider(3) + step3 + divider(),
//     divider(4) + step4 + divider(), divider(5) + step5 + divider(), divider(6) + step6 + divider(),
//     divider(7) + step7 + divider(), divider(8) + step8 + divider(), divider(9) + step9 + divider(),
//     divider(10) + step10 + divider(), divider(11) + step11 + divider(), divider(12) + step12 + divider(),
//     divider(13) + step13 + divider(),divider(14) + step14 + divider(),))