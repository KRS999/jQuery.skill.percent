(($) => {
	$.fn.skillPercent = function(options) {
		//Настройки
		let settings = $.extend({
			'settings': false, //Включить выключить настройки
			'speed': 40, //Скорость анимации
			'color': 'green', //Верхний цвет
			'mount-color': 'rgba(255,255,255,.2)' ,//Подложка
			'percent': 65 //Процент
		}, options);
		//Перебираем элемент
		$(this).each((i, el) => {
			//Счетчик для анимации
			let percentCount = 0;
			//Значения аттрибутов элемента
			let dataPercent = $(el).data('percent');
			let dataPercentColor = $(el).data('percent-color');
			let dataPercentMountColor = $(el).data('percent-mount-color');
			//Включаем настройки
			if(settings.settings === true) {
				dataPercent = settings.percent;
				dataPercentColor = settings.color;
				dataPercentMountColor = settings['mount-color'];
			}
			//Если процент итоговый процент больше 100 то добавляем 100 xD
			if(dataPercent > 100) {dataPercent = 100};
			//Таймер для анимации
			let timer = setInterval(() => {
				//Добавляем процент только в том случае если общий процент не равно нулю
				if(dataPercent != 0) {percentCount++};
				//Когда счетчик равен итоговому значению останавливем анимацию
				if(percentCount == dataPercent) {clearInterval(timer)};
				//Число в строке
				$(el).find('.skill__percent').text(`${percentCount}%`);
				//Стиль элемента
				$(el).css({
					'background': `-webkit-linear-gradient(left ,${dataPercentColor} 0%,${dataPercentColor} ${percentCount}%,rgba(255,255,255,.2) ${percentCount}%, rgba(255,255,255,.2) 100%)`
				});
			}, settings.speed)
		});
	}
})(jQuery);