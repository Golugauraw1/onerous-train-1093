export const exerciseOptions = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'ef64b4469bmsh6a9563b93666788p166408jsn26b5277e7fa0',
		'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
	}
};



export const fetchData = async (url, options) => {
    const response = await fetch (url, options);
    const data = await response.json();

    return data;
}