import imgSrc from '@/assets/img/logo.jpg';
export function createBEl() {
    const divEl = document.createElement('h2');
    divEl.textContent = 'Hello World';
    divEl.classList.add('content');
    document.body.appendChild(divEl);

    const imgEl = document.createElement('img');
    imgEl.src = imgSrc;
    document.body.appendChild(imgEl);
}