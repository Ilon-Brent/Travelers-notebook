(function () {
// поместить все текстовые узлы в элемент <span>
// он занимает только то место, которое необходимо для текста
for (let li of list_sights.querySelectorAll('li')) {
    let span = document.createElement('span');
    li.prepend(span);
    span.append(span.nextSibling); // поместить текстовый узел внутрь элемента <span>
}

//  ловим клики на всём дереве
list_sights.onclick = function (event) {

    if (event.target.tagName != 'SPAN') {
        return;
    }

    let childrenContainer = event.target.parentNode.querySelector('ul');
    if (!childrenContainer) return; // нет детей

    childrenContainer.hidden = !childrenContainer.hidden;
}


// создаем подсказки

let tooltipElem;

document.onmouseover = function (event) {
    let target = event.target;

    // если у нас есть подсказка...
    let tooltipHtml = target.dataset.tooltip;
    if (!tooltipHtml) return;

    // ...создадим элемент для подсказки

    tooltipElem = document.createElement('div');
    tooltipElem.className = 'tooltip';
    tooltipElem.innerHTML = tooltipHtml;
    document.body.append(tooltipElem);

    // спозиционируем его сверху от аннотируемого элемента (top-center)
    let coords = target.getBoundingClientRect();

    let left = coords.left + (target.offsetWidth - tooltipElem.offsetWidth) / 2;
    if (left < 0) left = 0; // не заезжать за левый край окна

    let top = coords.top - tooltipElem.offsetHeight - 5;
    if (top < 0) { // если подсказка не помещается сверху, то отображать её снизу
        top = coords.top + target.offsetHeight + 5;
    }

    tooltipElem.style.left = left + 'px';
    tooltipElem.style.top = top + 'px';
};

document.onmouseout = function (e) {

    if (tooltipElem) {
        tooltipElem.remove();
        tooltipElem = null;
    }

};
})();