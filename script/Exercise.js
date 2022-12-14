/*
* =========>List of all exercises
*/
const options7 = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '924add4fcfmsh269d7f1c598e180p115d78jsnfc96436f7d36',
		'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
	}
};

fetch('https://exercisedb.p.rapidapi.com/exercises', options7)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));







/*
* =========>list of bodyparts
*/

// const options = {
//     method: 'GET',
//     headers: {
//         'X-RapidAPI-Key': '924add4fcfmsh269d7f1c598e180p115d78jsnfc96436f7d36',
//         'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
//     }
// };

// fetch('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', options)
//     .then(response => response.json())
//     .then(response => console.log(response))
//     .catch(err => console.error(err));

/*
* =========>List by body part
*/

// const options2 = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': '924add4fcfmsh269d7f1c598e180p115d78jsnfc96436f7d36',
// 		'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
// 	}
// };

// fetch('https://exercisedb.p.rapidapi.com/exercises/bodyPart/%7BbodyPart%7D', options2)
// 	.then(response => response.json())
// 	.then(response => console.log(response))
// 	.catch(err => console.error(err));
/*
* =========>Exercise by ID
*/

// const options3 = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': '924add4fcfmsh269d7f1c598e180p115d78jsnfc96436f7d36',
// 		'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
// 	}
// };

// fetch('https://exercisedb.p.rapidapi.com/exercises/exercise/%7Bid%7D', options3)
// 	.then(response => response.json())
// 	.then(response => console.log(response))
// 	.catch(err => console.error(err));
/*
* =========>List by names
*/
// const options4 = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': '924add4fcfmsh269d7f1c598e180p115d78jsnfc96436f7d36',
// 		'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
// 	}
// };

// fetch('https://exercisedb.p.rapidapi.com/exercises/name/%7Bname%7D', options4)
// 	.then(response => response.json())
// 	.then(response => console.log(response))
// 	.catch(err => console.error(err));

/*
* =========>List of target muscles
*/

// const options5 = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': '924add4fcfmsh269d7f1c598e180p115d78jsnfc96436f7d36',
// 		'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
// 	}
// };

// fetch('https://exercisedb.p.rapidapi.com/exercises/targetList', options5)
// 	.then(response => response.json())
// 	.then(response => console.log(response))
// 	.catch(err => console.error(err));

/*
* =========>List by target muscle
*/
// const options6 = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': '924add4fcfmsh269d7f1c598e180p115d78jsnfc96436f7d36',
// 		'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
// 	}
// };

// fetch('https://exercisedb.p.rapidapi.com/exercises/target/%7Btarget%7D', options6)
// 	.then(response => response.json())
// 	.then(response => console.log(response))
// 	.catch(err => console.error(err));



/*
* =========>List by equipment
*/
// const options8 = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': '924add4fcfmsh269d7f1c598e180p115d78jsnfc96436f7d36',
// 		'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
// 	}
// };

// fetch('https://exercisedb.p.rapidapi.com/exercises/equipment/%7Btype%7D', options8)
// 	.then(response => response.json())
// 	.then(response => console.log(response))
// 	.catch(err => console.error(err));

/*
* =========>List of equipment
*/
// const options9 = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': '924add4fcfmsh269d7f1c598e180p115d78jsnfc96436f7d36',
// 		'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
// 	}
// };

// fetch('https://exercisedb.p.rapidapi.com/exercises/equipmentList', options9)
// 	.then(response => response.json())
// 	.then(response => console.log(response))
// 	.catch(err => console.error(err));

