document.addEventListener('DOMContentLoaded', () => {
    let body = document.getElementsByTagName('body');

    let content = document.createElement('div');
    content.id = 'content';
    body[0].appendChild(content);

    let menu = document.createElement('div');
    menu.classList.add('menu', 'dark-grey');
    content.appendChild(menu);

    for (let i = 1; i <= 5; i++) {
        let item = document.createElement('div');
        item.classList.add('item', 'light-grey');
        if (i === 1 || i === 4) {
            item.innerHTML = `<h2>${i}</h2><span>cible 1</span>`;
        } else {
            item.innerHTML = `<h2>${i}</h2><span>cible 2</span>`;
        }
        menu.appendChild(item);
    }

    let targets = document.createElement('div');
    targets.classList.add('targets', 'grey');
    content.appendChild(targets);

    for (let i = 1; i <= 2; i++) {
        let target = document.createElement('div');
        if (i === 1) {
            target.classList.add('target', 'pink');
            target.innerHTML = `<h3>cible ${i}</h3><span class="compteur">0</span>`;
        } else {
            target.classList.add('target', 'red');
            target.innerHTML = `<h3>cible ${i}</h3><span class="compteur">0</span>`;
        }
        targets.appendChild(target);
    }
})