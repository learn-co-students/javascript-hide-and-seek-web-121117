function getFirstSelector(selector){
  return document.querySelector(selector)
  }

function nestedTarget(){
  return document.getElementById('nested').querySelector('.target')
}

function deepestChild(){
  return document.querySelector('#grand-node div div div div')
}

function increaseRankBy(n){
  let rankedLists = document.querySelectorAll('.ranked-list')

  const firstList = rankedLists[0]
  let firstChildren = firstList.children
  for (let i = 0; i < firstChildren.length; i ++){
    firstChildren[i].innerHTML = (parseInt(firstChildren[i].innerHTML) + n)
  }

  const secondList = rankedLists[1]
  let secondChildren = secondList.children
  for (let i = 0; i < secondChildren.length; i ++){
    secondChildren[i].innerHTML = (parseInt(secondChildren[i].innerHTML) + n)
  }
}



// for (let i = 0; i < lis.length; i++) {
//   lis[i].innerHTML = (i + 1).toString()
// }
//.ranked-lists by n. (You might need to make use of parseInt()
