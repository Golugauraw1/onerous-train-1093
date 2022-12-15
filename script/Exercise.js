/*
* =========>List of all exercises
*/
// const options7 = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': '924add4fcfmsh269d7f1c598e180p115d78jsnfc96436f7d36',
// 		'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
// 	}
// };

import { exerciseOptions, fetchData } from "./fetchData.js"

// fetch('https://exercisedb.p.rapidapi.com/exercises', options7)
// 	.then(response => response.json())
// 	.then(response => console.log(response))
// 	.catch(err => console.error(err));

let search_btn = document.getElementsByClassName('SearchButton')
search_btn.onclick = () => {
    handleSearch();
};

const handleSearch = async () => {
	try{
		const excercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);
		console.log(excercisesData)
	}
	catch(err){
		console.log(err);
	}
}








