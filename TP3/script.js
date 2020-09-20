const DRAGGABLE_ELEMENTS_WIDTH = 100
const DRAGGABLE_ELEMENTS_HEIGHT = 100

let currentContentWidth = null
let currentContentHeight = null

document.addEventListener('DOMContentLoaded', () => {
    onResize() // to initialize currentContentWidth / currentContentHeight
    renderDraggableElements()
    attachDragEvents()
})

function attachDragEvents() {
    //-- Exercice principal : Implémentez le drag and drop
    const divElements = document.getElementsByClassName('draggableBox');
    const contentElement = document.getElementById('content');

    for (let divElement of divElements) {
        divElement.onmousedown = function (event) {

            let shiftX = event.clientX - divElement.getBoundingClientRect().left;
            let shiftY = event.clientY - divElement.getBoundingClientRect().top;

            divElement.style.position = 'absolute';
            divElement.style.zIndex = 1000;
            contentElement.append(divElement);

            moveAt(event.pageX, event.pageY);

            // moves the ball at (pageX, pageY) coordinates
            // taking initial shifts into account
            function moveAt(pageX, pageY) {
                divElement.style.left = pageX - shiftX + 'px';
                divElement.style.top = pageY - shiftY + 'px';
            }

            function onMouseMove(event) {
                moveAt(event.pageX, event.pageY);
            }

            // move the ball on mousemove
            document.addEventListener('mousemove', onMouseMove);

            // drop the ball, remove unneeded handlers
            divElement.onmouseup = function () {
                document.removeEventListener('mousemove', onMouseMove);
                divElement.onmouseup = null;
            };

        };

        divElement.ondragstart = function () {
            return false;
        };
    }

    //-- Exercice bonus 1 : la dernière box relachée doit être au dessus des autres
    //-- Exercice bonus 2 : lorsque deux box sont en contact, elles doivent être teintes en rouge
}

function renderDraggableElements() {
    const contentElement = document.getElementById('content')
    const maxLeft = currentContentWidth - DRAGGABLE_ELEMENTS_WIDTH
    const maxTop = currentContentHeight - DRAGGABLE_ELEMENTS_HEIGHT

    for (let i = 0; i <= 10; i++) {
        const divElement = document.createElement('div')
        divElement.className = 'draggableBox'
        divElement.appendChild(document.createTextNode(`Box nº${i}`))
        divElement.style.left = Math.floor(Math.random() * maxLeft) + 'px'
        divElement.style.top = Math.floor(Math.random() * maxTop) + 'px'
        contentElement.appendChild(divElement)
    }
}

window.addEventListener('optimizedResize', onResize)

function onResize() {
    const contentElement = document.getElementById('content')

    //-- Exercice Bonus 3: implémenter ici le repositionnement des box lorsque la fenêtre change de taille, les box doivent proportionnellement se retrouver à la même place

    currentContentWidth = contentElement.offsetWidth
    currentContentHeight = contentElement.offsetHeight
}

// See https://developer.mozilla.org/en-US/docs/Web/Events/resize
// Prevent resize event to be fired way too often, this means neither lags nor freezes
{
    function throttle(type, name, obj = window) {
        let running = false
        const event = new CustomEvent(name)
        obj.addEventListener(type, () => {
            if (running) return
            running = true
            requestAnimationFrame(() => {
                obj.dispatchEvent(event)
                running = false
            })
        })
    }

    /* init - you can init any event */
    throttle('resize', 'optimizedResize');
}