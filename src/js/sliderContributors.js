const contributorsItems = document.querySelector('.contributors__items');
const contributorsItem = document.querySelectorAll('.contributors__item');
const contributorsArrows = document.querySelector('.contributors__arrows');

let posit = 0;

const viewArrow = (countChild, countView) => {
  const contributorView = contributorsArrows.querySelector('.contributors__contributor');
  const contributorsCount = contributorsArrows.querySelector('.contributors__count-contributor');

  contributorView.textContent = countView;
  contributorsCount.textContent = countChild;
}

const position = (widthAll, gap, widthOne) => {
  posit = posit - widthOne - gap;

  if (posit < -widthAll) {
    posit = 0;
  }

  return posit;
};

const Loop = (widthAll, gap, widthOne) => {
  const posit = position(widthAll, gap, widthOne);
  setTimeout(() => {
    stepTransformX(posit);
    Loop(widthAll, gap, widthOne);
  }, 4000);
}

const stepTransformX = (position) => {
  contributorsItems.style.transform = `translateX(${position}px)`;
};

export const sliderContributors = () => {
  const contributorsCountView = Math.floor(contributorsItems.clientWidth / contributorsItem[0].clientWidth);
  const countContributors = 6;
  viewArrow(countContributors, contributorsCountView);

  const contributorWidth = contributorsItem[0].clientWidth;
  const contributorGap = (getComputedStyle(contributorsItems).gap).slice(0, -2).trim();
  const contributorsWidthAll = contributorWidth * countContributors + (contributorGap * (countContributors - 1));

  Loop(contributorsWidthAll, contributorGap, contributorWidth);
}