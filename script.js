document.addEventListener('DOMContentLoaded', function() {
    const dateSelectors = document.getElementById('dateSelectors');
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const nextYear = month === 11 ? year + 1 : year;
    const nextMonth = (month + 1) % 12;

    // 16日から月末まで
    for (let day = 16; day <= new Date(year, month + 1, 0).getDate(); day++) {
        appendDateSelector(year, month, day);
    }

    // 1日から15日まで
    for (let day = 1; day <= 15; day++) {
        appendDateSelector(nextYear, nextMonth, day);
    }

    function appendDateSelector(year, month, day) {
        const inputContainer = document.createElement('div');
        const label = document.createElement('label');
        const select = document.createElement('select');
        label.textContent = `${day}日:`;
        select.name = `date-${year}-${month + 1}-${day}`;
        select.innerHTML = `
            <option value="出勤">◯ 出勤</option>
            <option value="不出勤">☓ 不出勤</option>
            <option value="有給">有給</option>
        `;

        inputContainer.appendChild(label);
        inputContainer.appendChild(select);
        dateSelectors.appendChild(inputContainer);
    }
});

document.getElementById('shiftForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = {};
    for (let [key, value] of formData.entries()) {
        data[key] = value;
    }
    console.log(data);  // デバッグのためデータをコンソールに出力
    // 実際のアプリケーションでは、ここでデータをサーバーに送信する処理を追加
});