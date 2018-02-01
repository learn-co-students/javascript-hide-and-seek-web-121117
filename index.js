function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.getElementById("nested").getElementsByClassName("target")[0]
}

function increaseRankBy(n) {
  const rankedListDivs = document.querySelectorAll('ul.ranked-list li')
  for(let i = 0; i < rankedListDivs.length; i++){
    rankedListDivs[i].textContent = parseInt(rankedListDivs[i].textContent, 10) + n
  }
}

function deepestChild() {
  let node = document.getElementById("grand-node")
  // return node[node.length - 1]
  let childNode = node.children[0]

  while (childNode) {
    node = childNode
    childNode = node.children[0]
  }
  return node
}
