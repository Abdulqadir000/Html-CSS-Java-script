const input = document.getElementById('textinput');

function toggleStyle(styleProperty, value1, value2) {
    input.style[styleProperty] = input.style[styleProperty] === value1 ? value2 : value1;
}

function toggleBold() {
    toggleStyle('fontWeight', 'bold', 'normal');
}

function toggleItalic() {
    toggleStyle('fontStyle', 'italic', 'normal');
}

function toggleUnderline() {
    toggleStyle('textDecoration', 'underline', 'none');
}

function changeFontFamily() {
    const newFont = prompt('Enter font family:', 'Times New Roman');
    if (newFont) {
        input.style.fontFamily = newFont;
    }
}

function changeTextColor() {
    const newColor = prompt('Enter text color (e.g., #000000 or red):', '');
    if (newColor) {
        input.style.color = newColor;
    }
}

function changeFontSize() {
    const newSize = prompt('Enter font size (in px):', '16');
    if (newSize && !isNaN(newSize)) {
        input.style.fontSize = `${newSize}px`;
    } else {
        alert('Please enter a valid number for font size.');
    }
}


