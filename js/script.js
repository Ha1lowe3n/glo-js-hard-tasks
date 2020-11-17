// создаем стрелочную функцию, передаем туда два параметра, один через spread оператор
// c помощью метода filter откидываем все значения, не прошедшие проверку 
const filterByType = (type, ...values) => values.filter(value => typeof value === type),

	// создаем еще стрелочную функцию
	hideAllResponseBlocks = () => {
		// записываем в переменную responseBlocksArray новый массив, преобразованный из псевдомассива querySelectorAll
		const responseBlocksArray = Array.from(document.querySelectorAll('div.dialog__response-block'));
		// перебираем все item'ы (элементы) нового массива и устанавливаем им всем display none - скрываем их
		responseBlocksArray.forEach(block => block.style.display = 'none');
	},

	// создаем еще стрелочную функцию с 3 входящими параметрами
	showResponseBlock = (blockSelector, msgText, spanSelector) => {
		// вызываем hideAllResponseBlocks
		hideAllResponseBlocks();
		// получаем из документа DOM элемент с помощью селектора, который передается прараметром для функции, и задаем стиль display block - элемент становится видимым
		document.querySelector(blockSelector).style.display = 'block';
		// условие - если spanSelector true
		if (spanSelector) {
			// то DOM элемент с селектором spanSelector меняет или получает контент текста на msgText - параметр функции
			document.querySelector(spanSelector).textContent = msgText;
		}
	},

	// создаем стрелочную функцию с параметром msgText, которая вызывает функцию showResponseBlock, в которую передается msgText
	// функция, судя по названию, нужна, чтобы показать ошибку 
	showError = msgText => showResponseBlock('.dialog__response-block_error', msgText, '#error'),

	// создаем стрелочную функцию с параметром msgText, которая вызывает функцию showResponseBlock, в которую передается msgText
	// функция, судя по названию, нужна, чтобы показать найденные результаты 
	showResults = msgText => showResponseBlock('.dialog__response-block_ok', msgText, '#ok'),

	// создаем стрелочную функцию, которая вызывает функцию showResponseBlock
	// функция, судя по названию, нужна, чтобы показать, что результаты не найдены
	showNoResults = () => showResponseBlock('.dialog__response-block_no-results'),

	// функция с двумя параметрами
	tryFilterByType = (type, values) => {
		// кострукция try catch для перехвата ошибок
		// в try выполняется код, если все окей и нет ошибок
		try {
			// в переменную записываем выполнение кода, указанного в методе eval 
			// метод join объединяет в строку с разделителем запятой и пробелом
			const valuesArray = eval(`filterByType('${type}', ${values})`).join(", ");
			// тернарный оператор
			const alertMsg = (valuesArray.length) ? // если в valuesArray есть что-то
				`Данные с типом ${type}: ${valuesArray}` : // то выполняется этот код
				`Отсутствуют данные типа ${type}`;  // иначе выполняется этот код
			// вызов функции
			showResults(alertMsg);
		// в catch выполняется код, если в коде try возникли ошибки
		} catch (e) {
			showError(`Ошибка: ${e}`);
		}
	};

// в переменную filterButton передаем DOM элемент, найденному по айди
const filterButton = document.querySelector('#filter-btn');

// навешиваем обработчик событий, вызывающийся по клику, e - событие
filterButton.addEventListener('click', e => {
	// получаем DOM ЭЛЕМЕНТЫ
	const typeInput = document.querySelector('#type');
	const dataInput = document.querySelector('#data');

	if (dataInput.value === '') { // если в инпуте ничего нет (пустое значение)
		// метод setCustomValidity устанавливает специальное сообщение для выбранного элемента
		dataInput.setCustomValidity('Поле не должно быть пустым!');
		// вызов функции
		showNoResults();
	} else { // иначе
		// элемент не имеет пользовательской ошибки 
		dataInput.setCustomValidity('');
		// уюираем поведение браузера по умолчанию
		e.preventDefault();
		// вызов функции, педеаем два параметра
		// trim() - убирает пробелы из строки
		tryFilterByType(typeInput.value.trim(), dataInput.value.trim());
	}
});

