export const parsingCategories = (categoriesResponse) => {
	let newArray = [];
	categoriesResponse.map((category) => {
		newArray.push({ label: category.category, value: category._id, url: category.urlImage });
	});
	return newArray;
};

export const groupByDay = (list) => {
	let groups = list.reduce(function (reducer, item) {
		let day = item['releaseDate'].split('T')[0];
		reducer[day] ? reducer[day].data.push(item) : (reducer[day] = { group: day, data: [item] });
		return reducer;
	}, {});
	let groupedArray = Object.keys(groups).map(function (k) {
		return groups[k];
	});
	return parsingArrayGrouped(groupedArray);
};

export const parsingArrayGrouped = (array) => {
	let newArray = [];
	array.map((item) => {
		newArray = [...newArray, item['group']];
		item['data'].map((subItem) => {
			newArray = [...newArray, subItem];
		});
	});
	return newArray;
};

export const getTimeOfDate = (date) => {
	let time = date.split('T')[1];
	return `${time.split(':')[0]}:${time.split(':')[1]}`;
};

export const filterFalseItem = (array) => {
	return array.filter((item) => typeof item !== 'string');
};

export const converToDailyDate = (dateToParse) => {
	const date = new Date(dateToParse);
	const dateTimeFormat = new Intl.DateTimeFormat('en', {
		year: 'numeric',
		month: 'short',
		day: '2-digit',
	});
	const [{ value: month }, , { value: day }, , { value: year }] = dateTimeFormat.formatToParts(date);

	return `${day} of ${month} from ${year}`;
};
