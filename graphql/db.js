export const people = [
	{
		id : "0",
		name : "sujin",
		age : "27",
		gender : "men"
	},{
		id : "1",
		name : "sujin",
		age : "27",
		gender : "men"
	},{
		id : "2",
		name : "sujin",
		age : "27",
		gender : "men"
	},{
		id : "3",
		name : "sujin",
		age : "27",
		gender : "men"
	},{
		id : "4",
		name : "sujin",
		age : "27",
		gender : "men"
	},{
		id : "5",
		name : "sujin",
		age : "27",
		gender : "men"
	},
];

export const getById = id => {
	const filteredMoviesPeople = people.filter(person => String(id) === person.id);
	return filteredMoviesPeople[0];
}