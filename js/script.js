const dayToday = new Date().getDate();

if (new Date().getMonth() == 8) {
	const list = document.querySelector(`.listik__list li:nth-child(${dayToday})`);
	list.classList.add('today')

	for (let i = 1; i < dayToday; i++) {
		const prevDay = document.querySelector(`.listik__list li:nth-child(${i})`);
		console.log(prevDay);
		prevDay.classList.add('done')
	}
}