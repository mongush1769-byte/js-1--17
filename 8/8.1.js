// Хранилище событий
        const events = {
            2000: [
                { date: "1 января", name: "Начало XXI века", desc: "Наступил 2000 год" },
                { date: "26 марта", name: "Выборы президента", desc: "Путин избран президентом" }
            ],
            2001: [
                { date: "11 сентября", name: "Теракт в США", desc: "Атака на башни-близнецы" }
            ],
            2002: [
                { date: "1 января", name: "Евро", desc: "Введение евро в странах ЕС" }
            ],
           2007: [
                { date: "14 апреля", name: "Рождение", desc: "родилс sigma boy" }
            ]
        };
const input = document.getElementById('input');
        const tbody = document.getElementById('tbody');
        // При нажатии Enter показываем события
        input.onkeypress = function(e) {
            if (e.key === 'Enter') {
                const year = input.value;
                const yearEvents = events[year];
                tbody.innerHTML = '';
                if (yearEvents) {
                    for (let i = 0; i < yearEvents.length; i++) {
                        const ev = yearEvents[i];
                        tbody.innerHTML += '<tr><td>' + ev.date + '</td><td>' + ev.name + '</td><td>' + ev.desc + '</td></tr>';
                    }
                } else {
                    tbody.innerHTML = '<tr><td colspan="3">Нет событий за ' + year + ' год</td></tr>';
                }
            }
        }
        // ========== КАК ДОБАВИТЬ СОБЫТИЕ ==========
        // events[2000].push({ date: "12 апреля", name: "Событие", desc: "Описание" });
        // events[2024] = [{ date: "1 мая", name: "Новое", desc: "Описание" }];