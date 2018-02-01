function getFirstSelector(selector) {
  return document.querySelector(selector);
};

function nestedTarget() {
  // return document.getElementById('nested').getElementByClassName('target');
  return document.getElementsByClassName('target')[0];
}


function increaseRankBy(n) {
  // grab all ranked-list elements, assigning them to a variable -> []
  // iterate through ranked-list
  // parseInt() each element and increase by n

  const rankedLi = document.querySelectorAll('ul.ranked-list li')
  let i = 0;
  for (i = 0; i < rankedLi.length; i++ ) {
    // console.log(rankedLi[i])
    rankedLi[i].textContent = parseInt(rankedLi[i].textContent, 10) + n
  }
}


function deepestChild() {
  const gndiv = document.getElementById('grand-node')
  const divs = gndiv.querySelectorAll('div')
  return divs[divs.length - 1]
}
