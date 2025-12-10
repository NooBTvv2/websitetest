const fonts = ['Arial', 'Georgia', 'Courier New', 'Times New Roman', 'Verdana', 'Helvetica', 'Comic Sans MS', 'Impact', 'Tahoma', 'Trebuchet MS', 'Lucida Console', 'Palatino Linotype', 'Segoe UI', 'Arial Black', 'Garamond', 'Bookman', 'Arial Narrow', 'Century Gothic', 'Frank Ruhl Libre', 'Futura'];
const h1 = document.querySelector('.fontchange');
let index = 0;

setInterval(() => {
    h1.style.fontFamily = fonts[index % fonts.length];
    index++;
}, 100);

const submitBtn = document.querySelector('input.submit');
const blockDiv = document.querySelector('.block');

submitBtn.addEventListener('click', () => {
    const nameInput = document.querySelector('input[name="name"]');
    const emailInput = document.querySelector('input[name="email"]');

    if (!nameInput.value.trim() || !emailInput.value.trim()) {
        return;
    }
    blockDiv.innerHTML = `Thank you for submitting, <span style="font-weight: bold; color: #0066cc;">${nameInput.value}</span>. We'll contact you at <span style="font-weight: bold; color: #0066cc;">${emailInput.value}</span>`;
});