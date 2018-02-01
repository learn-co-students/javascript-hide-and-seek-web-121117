function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector('#nested .target')
}

function increaseRankBy(n) {
  const lis = document.getElementById('app').querySelectorAll('ul.ranked-list');

  for (let i = 0; i < lis.length; i++) {
  lis[i].innerHTML = (i + n).toString();
  }
}

function deepestChild() {
  const findDeepest = document.getElementById('grand-node').querySelectorAll('div');

  const deepest = findDeepest.length-1;
  return findDeepest[deepest];
}
