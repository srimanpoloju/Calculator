const buttons = document.querySelectorAll('button');
const display = document.querySelector('.display');
const themeSelect = document.getElementById('theme-select');
const creativeBtn = document.getElementById('creative-btn');
const body = document.body;

// init: attach button listeners
buttons.forEach(function (button) {
    button.addEventListener('click', calculate);
});

// Restore theme from localStorage (if present)
const savedTheme = localStorage.getItem('calc-theme') || 'dark';
applyTheme(savedTheme);
if (themeSelect) themeSelect.value = savedTheme;

if (themeSelect) {
    themeSelect.addEventListener('change', function (e) {
        const t = e.target.value || 'dark';
        applyTheme(t);
        localStorage.setItem('calc-theme', t);
    });
}

// Creative mode toggle
let creativeMode = false;
let savedDisplayValue = '';
if (creativeBtn) {
    creativeBtn.addEventListener('click', function () {
        creativeMode = !creativeMode;
        if (creativeMode) {
            // Enter creative mode
            savedDisplayValue = display.value;
            display.value = '🎨 Creative Time!';
            body.classList.add('creative');
            creativeBtn.textContent = 'Stop Creative';
        } else {
            // Exit creative mode
            body.classList.remove('creative');
            display.value = savedDisplayValue || '';
            creativeBtn.textContent = 'Creative Time';
        }
    });
}

function applyTheme(themeName) {
    // Remove existing theme-* classes
    document.documentElement.classList.remove('theme-light', 'theme-neon');
    body.classList.remove('theme-light', 'theme-neon');
    if (themeName === 'light') {
        body.classList.add('theme-light');
    } else if (themeName === 'neon') {
        body.classList.add('theme-neon');
    } else {
        // default: dark -> ensure any theme classes removed
    }
}

function calculate(event) {
    const clickedButtonValue = event.target.value;

    if (clickedButtonValue === '=') {
        if (display.value !== '') {
            try {
                // safer eval wrapper
                // eslint-disable-next-line no-eval
                const result = eval(display.value);
                display.value = result;
            } catch (err) {
                display.value = 'Error';
                setTimeout(() => (display.value = ''), 1200);
            }
        }
    } else if (clickedButtonValue === 'C') {
        display.value = '';
    } else {
        // append clicked value
        display.value += clickedButtonValue;
    }
}