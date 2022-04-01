const colorsList = document.querySelector('.colors');
const colorsArr = ['#27ae60', '#1abc9c', '#1a73e8', '#9b59b6', '#34495e', '#f39c12', '#d35400', '#c0392b', '#7f8c8d'];

const createColor = (hex) => {
    const color = document.createElement('div');
    color.className = 'colors__item';
    color.dataset.color = hex;

    const colorBackground = document.createElement('div');
    colorBackground.className = 'colors__background';
    colorBackground.style.backgroundColor = hex;

    color.append(colorBackground);
    return color;
}

const initColors = () => {
    const colors = [...colorsArr].map(color => createColor(color));
    colorsList.append(...colors);
}

const getColorItem = (e) => {
    const color = e.target.closest('.colors__item');
    if (!color) return;
    setColorCalendar(color.dataset.color);
}

const setColorCalendar = (color) => {
    localStorage.setItem('color', `"${color}"`);
    alert('A new event color has been set');
}

colorsList.addEventListener('click', getColorItem);

window.addEventListener('ContentDOMLoad', initColors());