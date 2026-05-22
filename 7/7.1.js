// База данных: тег -> описание
        const tags = {
            'div': 'Блок для группировки элементов',
            'p': 'Абзац текста',
            'h1': 'Главный заголовок',
            'h2': 'подзаголовок второго уровня.',
            'h3': 'подзаголовок третьего уровня.',
            'h4': 'подзаголовок четвертого уровня.',
            'a': 'Ссылка',
            'img': 'Картинка',
            'button': 'Кнопка',
            'input': 'Поле ввода',
            'ul': 'Список с маркерами',
            'table': 'Таблица'
        };
        // Получаем элементы с страницы
        const input = document.getElementById('tagInput');
        const result = document.getElementById('result');
        // Когда нажимаем клавишу в поле ввода
        input.onkeypress = function(event) {
            if (event.key === 'Enter') {  // Если нажали Enter
                let tag = input.value.trim().toLowerCase();  // Убираем пробелы и приводим к нижнему регистру
                tag = tag.replace(/[<>]/g, '');  // Удаляем < и > если они есть                
                if (tags[tag]) {  // Если тег есть в базе
                    result.innerHTML = '<b>&lt;' + tag + '&gt;</b> - ' + tags[tag];  // Показываем описание
                } else {  // Если тега нет
                    result.innerHTML = 'Тег "' + tag + '" не найден';  // Сообщаем об ошибке
                }
            }
        };