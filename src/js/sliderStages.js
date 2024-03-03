const stagesItems = document.querySelector('.stages__items');
const stagesItemAll = document.querySelectorAll('.stages__item');
const arrows = document.querySelector('.stages__arrows');

let stagesPosition = 0;
let circleActive = 0;

const DIRECTION = {
  'left': 'left',
  'right': 'right',
};

//проверка кнопки на активность
const isDisabled = (arrow) => {
  if (!!arrow.attributes.disabled) {
    return true;
  } else {
    return false;
  }
};

// установка активного класса circle
const itemCircleActive = (active) => {
  const circlesAll = arrows.querySelectorAll('.stages__arrows-circle-item');
  circlesAll.forEach((circle, index) => {
    if (index !== active) {
      circle.classList.remove('stages__arrows-circle-item_active');
    } else {
      circle.classList.add('stages__arrows-circle-item_active');
    }
  })
};

// расчет позиции для смещения по оси х
const stagesItemPosition = (direction) => {
  const widthItem = stagesItemAll[0].clientWidth;
  const gap = (getComputedStyle(stagesItems).columnGap).slice(0, -2).trim();
  const widthItemsAll = widthItem * 5 + gap * 4;

  if (direction === DIRECTION.left) {
    stagesPosition += (widthItem + +gap);
  }

  if (direction === DIRECTION.right) {
    stagesPosition -= (widthItem + +gap);
  }
};

const changeArrowIsDisabled = () => {
  const arrowLeft = arrows.querySelector('.stages__arrows-left');
  const arrowRigt = arrows.querySelector('.stages__arrows-right');

  if (circleActive > 0) {
    arrowLeft.removeAttribute('disabled');
  } else {
    arrowLeft.setAttribute('disabled', true);
  }

  if (circleActive < 4) {
    arrowRigt.removeAttribute('disabled');
  } else {
    arrowRigt.setAttribute('disabled', true);
  }
}

// измененеие активного элемента
const changeCircleActiv = (direction) => {
  if (direction === DIRECTION.left) {
    circleActive -= 1;
  }

  if (direction === DIRECTION.right) {
    circleActive += 1;
  }

  itemCircleActive(circleActive);
  changeArrowIsDisabled();
};

// изменение позиции
const positionСhange = () => {
  stagesItems.style.transform = `translateX(${stagesPosition}px)`;
};

const sliderLeft = (arrow) => {
  if (isDisabled(arrow)) return;
  stagesItemPosition(DIRECTION.left);
  positionСhange();
  changeCircleActiv(DIRECTION.left);
};

const sliderRight = (arrow) => {
  if (isDisabled(arrow)) return;
  stagesItemPosition(DIRECTION.right);
  positionСhange();
  changeCircleActiv(DIRECTION.right);
};

const clickAddStages = () => {
  arrows.addEventListener('click', (event) => {
    event.preventDefault();
    const target = event.target;

    if (target.closest('.stages__arrows-left')) {
      sliderLeft(target.closest('.stages__arrows-left'));
    }

    if (target.closest('.stages__arrows-right')) {
      sliderRight(target.closest('.stages__arrows-right'));
    }
  });
};

export const sliderStages = () => {
  if (window.screen.width <= 768) {
    itemCircleActive(circleActive);
    clickAddStages();
    changeArrowIsDisabled();
  }
};