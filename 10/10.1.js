 // Предсказания: номер -> [текст, тип]
        const pred = {
            1: ["Тебя ждет успех!", "good"],
            2: ["Будь осторожен", "bad"],
            3: ["Приятный сюрприз", "good"],
            4: ["Избегай конфликтов", "bad"],
            5: ["Деньги придут", "good"],
            6: ["Не торопись", "bad"],
            7: ["Встретишь любовь", "good"],
            8: ["Береги здоровье", "bad"],
            9: ["Удача с тобой", "good"],
            10: ["Жди проблем", "bad"]
        };
        
        let timer = null;
        let num = 1;
        
        const timerDiv = document.getElementById('timer');
        const textDiv = document.getElementById('text');
        const startBtn = document.getElementById('start');
        const stopBtn = document.getElementById('stop');
        
        // Случайное число от 1 до 10
        function rand() {
            return Math.floor(Math.random() * 10) + 1;
        }
        
        // Кнопка СТАРТ
        startBtn.onclick = function() {
            timer = setInterval(function() {
                num = rand();
                timerDiv.innerHTML = num;
            }, 100);
            
            startBtn.style.display = 'none';
            stopBtn.style.display = 'inline-block';
        };
        
        // Кнопка СТОП
        stopBtn.onclick = function() {
            clearInterval(timer); // Останавливаем таймер
            
            const p = pred[num]; // Берем предсказание
            textDiv.innerHTML = p[0]; // Текст
            textDiv.className = p[1]; // Цвет (good/bad)
            
            stopBtn.style.display = 'none'; // Прячем кнопки
        };