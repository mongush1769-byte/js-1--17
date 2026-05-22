// Простые предсказания для знаков
        const zodiac = {
            "Овен": ["Ждет успех", "Будет удача", "Все получится"],
            "Телец": ["День хороший", "Придут деньги", "Жди подарок"],
            "Близнецы": ["Новые встречи", "Интересный день", "Улыбнись"],
            "Рак": ["Покой и мир", "Забота о семье", "Тепло в душе"],
            "Лев": ["Ты звезда", "Все заметят", "Сияй ярко"],
            "Дева": ["Порядок во всем", "Успех в делах", "План сработает"],
            "Весы": ["Гармония", "Красивый день", "Баланс"],
            "Скорпион": ["Сила внутри", "Победа близко", "Ты сможешь"],
            "Стрелец": ["Вперед!", "Приключения", "Веселье"],
            "Козерог": ["Достижение целей", "Упорство окупится", "Результат"],
            "Водолей": ["Идеи придут", "Творческий день", "Вдохновение"],
            "Рыбы": ["Мечты сбываются", "Чудо случится", "Верь в себя"]
        };
        
        // Узнаем знак по дате рождения
        function getSign(date) {
            const d = new Date(date);
            const day = d.getDate();
            const month = d.getMonth() + 1;
            
            if ((month == 3 && day >= 21) || (month == 4 && day <= 19)) return "Овен";
            if ((month == 4 && day >= 20) || (month == 5 && day <= 20)) return "Телец";
            if ((month == 5 && day >= 21) || (month == 6 && day <= 20)) return "Близнецы";
            if ((month == 6 && day >= 21) || (month == 7 && day <= 22)) return "Рак";
            if ((month == 7 && day >= 23) || (month == 8 && day <= 22)) return "Лев";
            if ((month == 8 && day >= 23) || (month == 9 && day <= 22)) return "Дева";
            if ((month == 9 && day >= 23) || (month == 10 && day <= 22)) return "Весы";
            if ((month == 10 && day >= 23) || (month == 11 && day <= 21)) return "Скорпион";
            if ((month == 11 && day >= 22) || (month == 12 && day <= 21)) return "Стрелец";
            if ((month == 12 && day >= 22) || (month == 1 && day <= 19)) return "Козерог";
            if ((month == 1 && day >= 20) || (month == 2 && day <= 18)) return "Водолей";
            return "Рыбы";
        }
        
        function getHoroscope() {
            const birth = document.getElementById('birthdate').value;
            if (!birth) {
                alert('Введите дату');
                return;
            }
            
            // Какой знак
            const sign = getSign(birth);
            
            // Какой день выбран (0,1,2)
            let day = 0;
            const radios = document.getElementsByName('day');
            for (let i = 0; i < radios.length; i++) {
                if (radios[i].checked) day = parseInt(radios[i].value);
            }
            
            // Предсказание
            const text = zodiac[sign][day];
            
            // Вывод
            document.getElementById('result').innerHTML = '<strong>' + sign + '</strong><br><br> !' + text + ' !';
        }