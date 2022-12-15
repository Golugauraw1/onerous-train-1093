export const exerciseOptions = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '924add4fcfmsh269d7f1c598e180p115d78jsnfc96436f7d36',
		'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
	}
};



export const fetchData = async (url, options) => {
    const response = await fetch (url, options);
    const data = await response.json();

    return data;
}