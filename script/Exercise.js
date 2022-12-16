/*
* =========>List of all exercises
*/


import { exerciseOptions, fetchData } from "./fetchData.js"


let form = document.getElementById('form')
form.addEventListener("submit", (e) => {
	e.preventDefault();
	let search1 = document.querySelector('#searchText')
	console.log(search1.value)
	handleSearch(search1.value);
}) 
	

// const [search, setSearch] = useState('')
 async function handleSearch(se){
	// if (search) {
		// try{
		// 	const excercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodypart', exerciseOptions);
		// 	console.log(excercisesData)
		// }
		// catch(err){
		// 	console.log(err);
		// }
		const options = {
			method: 'GET',
			headers: {
				'X-RapidAPI-Key': 'ef64b4469bmsh6a9563b93666788p166408jsn26b5277e7fa0',
				'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
			}
		};

		fetch(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${se}`, options)
			.then(response => response.json())
			.then(response => console.log(response))
			.catch(err => console.error(err));
	}

// }








