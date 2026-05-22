// Текущая отображаемая дата (год и месяц)
let currentYear = new Date().getFullYear();
let currentMonth = new Date().getMonth();

function getDaysInMonth(year, month) {
    // Получаем количество дней в указанном месяце
    return new Date(year, month + 1, 0).getDate();
}

function getMonthName(month) {
    const months = [
        'Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь',
        'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'
    ];
    return months[month];
}

function getCurrentDay() {
    const now = new Date();
    const todayYear = now.getFullYear();
    const todayMonth = now.getMonth();
    const todayDay = now.getDate();
    
    // Возвращаем сегодняшнее число, только если отображаемый месяц - текущий
    if (todayYear === currentYear && todayMonth === currentMonth) {
        return todayDay;
    }
    return null; // Если смотрим другой месяц, сегодняшний день не подсвечиваем
}

function createCalendar() {
    const daysCount = getDaysInMonth(currentYear, currentMonth);
    const currentDay = getCurrentDay();
    const monthName = getMonthName(currentMonth);
    const calendar = document.getElementById('calendar');
    
    // Очищаем календарь
    calendar.innerHTML = '';
    
    // Создаем шапку с навигацией
    const header = document.createElement('div');
    header.className = 'calendar-header';
    
    // Кнопка "Назад"
    const prevLink = document.createElement('a');
    prevLink.className = 'nav-link';
    prevLink.textContent = '← Назад';
    prevLink.onclick = () => {
        changeMonth(-1);
    };
    
    // Заголовок с месяцем и годом
    const title = document.createElement('div');
    title.className = 'month-title';
    title.textContent = `${monthName} ${currentYear}`;
    
    // Кнопка "Вперед"
    const nextLink = document.createElement('a');
    nextLink.className = 'nav-link';
    nextLink.textContent = 'Вперед →';
    nextLink.onclick = () => {
        changeMonth(1);
    };
    
    header.appendChild(prevLink);
    header.appendChild(title);
    header.appendChild(nextLink);
    calendar.appendChild(header);
    
    // Добавляем дни недели
    const weekdays = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];
    const weekdaysRow = document.createElement('div');
    weekdaysRow.className = 'weekdays-row';
    weekdays.forEach(day => {
        const weekdayCell = document.createElement('div');
        weekdayCell.className = 'weekday-cell';
        weekdayCell.textContent = day;
        weekdaysRow.appendChild(weekdayCell);
    });
    calendar.appendChild(weekdaysRow);
    
    // Определяем, с какого дня недели начинается месяц (0 - воскресенье, 1 - понедельник)
    const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();
    // Преобразуем в понедельник как первый день (1 = понедельник, 0 = воскресенье)
    let startOffset = firstDayOfMonth === 0 ? 6 : firstDayOfMonth - 1;
    
    // Создаем пустые ячейки для дней предыдущего месяца
    let weekRow = document.createElement('div');
    weekRow.className = 'week-row';
    
    // Добавляем пустые ячейки для правильного выравнивания
    for (let i = 0; i < startOffset; i++) {
        const emptyCell = document.createElement('div');
        emptyCell.className = 'day-cell';
        emptyCell.style.backgroundColor = 'transparent';
        emptyCell.style.boxShadow = 'none';
        emptyCell.style.cursor = 'default';
        emptyCell.textContent = '';
        weekRow.appendChild(emptyCell);
    }
    
    // Создаем дни месяца
    for (let day = 1; day <= daysCount; day++) {
        const dayCell = document.createElement('div');
        dayCell.className = 'day-cell';
        
        if (currentDay === day) {
            dayCell.classList.add('today');
        }
        
        dayCell.textContent = day;
        weekRow.appendChild(dayCell);
        
        // Если заполнили 7 дней или это последний день, добавляем ряд
        if ((startOffset + day) % 7 === 0 || day === daysCount) {
            calendar.appendChild(weekRow);
            weekRow = document.createElement('div');
            weekRow.className = 'week-row';
        }
    }
}

function changeMonth(delta) {
    // delta = -1 (назад) или +1 (вперед)
    currentMonth += delta;
    
    if (currentMonth < 0) {
        currentMonth = 11;
        currentYear--;
    } else if (currentMonth > 11) {
        currentMonth = 0;
        currentYear++;
    }
    
    createCalendar(); // Перерисовываем календарь
}

// Запускаем создание календаря после загрузки страницы
document.addEventListener('DOMContentLoaded', createCalendar);