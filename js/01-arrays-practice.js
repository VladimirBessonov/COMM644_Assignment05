//STEP 1
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
movies = [...favMovies, 'Frida', 'evil wears Prada']
let leastFavMovies = ['Spaceballs','CIAŁO', 'Terminator: Dark Fate']

//STEP 9

//STEP 10

//STEP 11

//STEP 12

//STEP 13

//STEP 14

//STEP 15

//STEP 16

//STEP 17

//STEP 18

//STEP 19

//STEP 20

window.document.write(step1 + "\n" ,step2 + "\n", step3 + "\n", step4 + "\n", step5 + "\n", step6 + "\n", step7 + "\n")