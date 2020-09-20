document.addEventListener('DOMContentLoaded', () => {
    let items = document.getElementsByClassName('item');
    let pinkTarget = document.getElementsByClassName('target')[0].lastElementChild;
    let redTarget = document.getElementsByClassName('target')[1].lastElementChild;
    let pinkCount = 0;
    let redCount = 0;

    for (let item of items) {
        let cible = item.lastElementChild;

        if (cible.textContent === 'cible 1') {
            item.classList.replace('light-grey', 'pink');
            pinkCount++;
            pinkTarget.innerText = pinkCount;
        }

        if (cible.textContent === 'cible 2') {
            item.classList.replace('light-grey', 'red');
            redCount++;
            redTarget.innerText = redCount;
        }
    }
})