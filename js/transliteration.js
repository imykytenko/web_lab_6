const transliterationMap = {
    'а': 'a', 'б': 'b', 'в': 'v', 'г': 'h', 'ґ': 'g',
    'д': 'd', 'е': 'e', 'є': 'ie', 'ж': 'zh', 'з': 'z',
    'и': 'y', 'і': 'i', 'ї': 'yi', 'й': 'i', 'к': 'k',
    'л': 'l', 'м': 'm', 'н': 'n', 'о': 'o', 'п': 'p',
    'р': 'r', 'с': 's', 'т': 't', 'у': 'u', 'ф': 'f',
    'х': 'kh', 'ц': 'ts', 'ч': 'ch', 'ш': 'sh', 'щ': 'shch',
    'ь': '\'', 'ю': 'iu', 'я': 'ia'
}

function transliterate() {
    const ukrainianText = document.getElementById('ukrainianText').value;
    let transliteratedText = '';

    for (let i = 0; i < ukrainianText.length; i++) {
        const char = ukrainianText[i];
        const lowercaseChar = char.toLowerCase();
        const isUppercase = char !== lowercaseChar;

        transliteratedText += (transliterationMap[lowercaseChar] || lowercaseChar);

        // Зберігаємо регістр для великих літер
        if (isUppercase) {
            transliteratedText = transliteratedText.slice(0, -1) + transliteratedText.slice(-1).toUpperCase();
        }
    }

    document.getElementById('transliteratedText').value = transliteratedText;
}