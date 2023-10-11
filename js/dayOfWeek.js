function calculateDay() {
    const birthDate = document.getElementById("birthDate").value;

    const [year, month, day] = birthDate.split("-").map(Number);

    const a = Math.floor((14 - month) / 12);
    const y = year - a;
    const m = month + 12 * a - 2;
    const dayOfWeek = (day + y + Math.floor(y / 4) - Math.floor(y / 100) + Math.floor(y / 400) + Math.floor((31 * m) / 12)) % 7;

    const daysOfWeek = ["Неділя", "Понеділок", "Вівторок", "Середа", "Четвер", "П'ятниця", "Субота"];

    const resultElement = document.getElementById("result");
    resultElement.textContent = `Ви народилися в ${daysOfWeek[dayOfWeek]}.`;
}
