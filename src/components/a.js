export function createAEl() {
    const divEl = document.createElement('div');
    divEl.textContent = 'Hello World';
    divEl.classList.add('hello');
    document.body.appendChild(divEl);
}