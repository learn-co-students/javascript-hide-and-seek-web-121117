function getFirstSelector(selector){
  return document.querySelector(selector);
}

function nestedTarget(){
  return document.querySelector("#nested .target")
}

function increaseRankBy(n){
  let list = document.querySelectorAll(".ranked-list");
  for (let i = 0; i < list.length; i++){
    list[i].innerHTML = parseInt(list[i].innerHTML) + n
  }
  return list
}

function deepestChild(){
  let divs = document.querySelector("div#grand-node").querySelectorAll("div");
  return divs[divs.length-1]

  return
}
