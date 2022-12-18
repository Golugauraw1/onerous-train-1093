/*
* =========>List of all exercises
*/


import { exerciseOptions, fetchData } from "./fetchData.js"


let form = document.getElementById('form')
form.addEventListener("submit", (e) => {
	e.preventDefault();
	let search1 = document.querySelector('#searchText')
	// console.log(search1.value)
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
			.then(response => appendExercise(response))
			
			.catch(err => console.error(err));
	}

// }


function appendExercise(response) {
	let exercise_div = document.getElementById('conatiner');
	exercise_div.innerHTML = null;
	console.log(response)
	console.log(response[0]['bodypart'])

	response.forEach(function (el) {
		let div = document.createElement('div');

		let gif = document.createElement('img');
		gif.src = el.gifUrl

		let h3 = document.createElement('h3');
        h3.innerText = el.name

        let h4 = document.createElement('h4');
        h4.innerText = el.equipment

        let h5 = document.createElement('h5');
        h5.innerText = el.bodyPart

		div.append(gif, h3, h4, h5);
		exercise_div.append(div)
	})
}












