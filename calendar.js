// Напишите функцию, которая умеет генерировать календарь для заданной пары (месяц, год).
// Календарь должен быть таблицей, где каждый день – это TD. У таблицы должен быть заголовок с названиями дней недели, каждый день – TH.
// Синтаксис: createCalendar(id, year, month).
// Такой вызов должен генерировать текст для календаря месяца month в году year, а затем помещать его внутрь элемента с указанным id.
// Например: createCalendar("cal", 2012, 9) сгенерирует в <div id=„cal“></div> следующий календарь:

function createCalendar(id) {
  if (document.getElementById('caldiv')) {
    document.getElementById('caldiv').remove();
  }

  let allMonths = [
    'january',
    'february',
    'march',
    'april',
    'may',
    'june',
    'july',
    'august',
    'september',
    'october',
    'november',
    'december'
  ];
  let week = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

  let year = document.getElementById('selectYear').value;
  if (!year) {
    alert('Select year please');
    return;
  }
  let monthName = document.getElementById('selectMonth').value;
  for (i = 0; i < allMonths.length; i++) {
    if (monthName === allMonths[i]) {
      month = i;
    }
  }

  let date = new Date(year, month, 1);
  let day = date.getDay();
  let offset = day === 0 ? 6 : day - 1;
  date.setDate(date.getDate() - offset);

  let calendarDiv = document.createElement('div');
  calendarDiv.setAttribute('id', id);
  let calendarTable = document.createElement('table');
  calendarDiv.appendChild(calendarTable);

  let headerRaw = document.createElement('tr');
  calendarTable.appendChild(headerRaw);

  for (let i = 0; i < week.length; i++) {
    let headerCell = document.createElement('th');
    headerRaw.appendChild(headerCell);
    headerCell.innerHTML = week[i];
  }

  do {
    let calendarRaw = document.createElement('tr');
    calendarTable.appendChild(calendarRaw);

    for (i = 0; i <= 6; i++) {
      let calendarCell = document.createElement('td');
      calendarRaw.appendChild(calendarCell);
      calendarCell.innerHTML = date.getDate();
      date.setDate(date.getDate() + 1);
    }
  } while (date.getMonth() <= month && date.getFullYear() <= year);
  document.body.appendChild(calendarDiv);
}
