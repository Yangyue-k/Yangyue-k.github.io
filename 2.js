function finish(){
    alert("Game over.Have a nice day!");
}
function sayHello(){
    var response = prompt("What is your answer?");
    if (response=="西安") {
        alert("恭喜你，答对了！");
    } else {
        alert("很抱歉，答案不正确，请重新输入。");
        sayHello()
    }
}

  function sayHello1(){
    var response = prompt("What is your answer?");
    if (response=="相思") {
        alert("恭喜你，答对了！");
    } else {
        alert("很抱歉，答案不正确，请重新输入。");
        sayHello()
    }
  }

  function sayHello2(){
    var response = prompt("What is your answer?");
    if (response=="失眠") {
        alert("恭喜你，答对了！");
    } else {
        alert("很抱歉，答案不正确，请重新输入。");
        sayHello()
    }
  }
