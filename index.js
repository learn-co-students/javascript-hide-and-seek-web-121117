function getFirstSelector(arg) {
  return document.querySelector(arg);
}

function nestedTarget() {
  return getFirstSelector("div").querySelectorAll(".target")[0];
}

function deepestChild() {
  let parent = document.getElementById("grand-node").querySelectorAll("div");
  return parent[parent.length - 1];
}

function increaseRankBy(n) {
  const lis = document.getElementById("app").querySelectorAll("ul.ranked-list");
  for (let i = 0; i < lis.length; i++) {
    lis[i].innerHTML = parseInt(lis[i].innerHTML) + n;
  }
}
