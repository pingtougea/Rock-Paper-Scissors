function getComputerChoice (){
  let temp = Math.floor(Math.random() * 3)
  console.log(arr[temp]) //
}
function getHumanChoice(){
  let userc = prompt("请输入rock,paper,scissors 其中的一种")
  console.log(userc)//
}
let arr = ['rock','paper','scissors']
getComputerChoice()//
getHumanChoice()//

