# Convert To Digits

A utility to convert numerical digits to Bangla or other language digits.

1. **Install the Package:**

    ```bash
    npm install convert-to-digits
    ```

2. **Use in Your Project:**

    ```javascript
    const { convertToDigits } = require('convert-to-digits');

    // Convert to Bangla
    const banglaNumber = convertToDigits(1234567890, 'bangla');
    console.log(banglaNumber); // Outputs: ১২৩৪৫৬৭৮৯০

    // Convert to Hindi
    const hindiNumber = convertToDigits(1234567890, 'hindi');
    console.log(hindiNumber); // Outputs: १२३४५६७८९०
    ```