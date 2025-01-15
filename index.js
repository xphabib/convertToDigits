const digitMappings = {
    bangla: ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯'],
    hindi: ['०', '१', '२', '३', '४', '५', '६', '७', '८', '९'],
    arabic: ['٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩'],
    // Add more languages as needed
};

function convertToDigits(input, language = 'bangla') {
    const digits = digitMappings[language];
    if (!digits) {
        throw new Error(`Unsupported language: ${language}`);
    }

    const inputStr = input.toString();

    const convertedStr = inputStr.split('').map((char) => {
        if (/\d/.test(char)) {
            return digits[parseInt(char)];
        } else {
            return char;
        }
    }).join('');
    return convertedStr;
}

module.exports = { convertToDigits };
