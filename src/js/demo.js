$('.demo-skill').skillPercent({
	'speed': 40 //Скорость
});

$('.react').skillPercent({
	'settings': true, //Включить - выключить настройки
	'speed': 50, //Скорость
	'color': '#61DAFB',
	'mount-color': 'rgba(255,255,255,.1)',
	'percent': 55
});

$('.angular').skillPercent({
	'settings': true, //Включить - выключить настройки
	'speed': 40, //Скорость
	'color': '#C3002F',
	'mount-color': 'rgba(255,255,255,.2)',
	'percent': 45
});

$('.node').skillPercent({
	'settings': true, //Включить - выключить настройки
	'speed': 30, //Скорость
	'color': '#3E863D',
	'mount-color': 'rgba(255,255,255,.3)',
	'percent': 35
});

$('.php').skillPercent({
	'settings': true, //Включить - выключить настройки
	'speed': 20, //Скорость
	'color': '#777BB3',
	'mount-color': 'rgba(255,255,255,.4)',
	'percent': 25
});

//Date
let date = new Date();
let year = date.getFullYear();
$('.year').text(year);