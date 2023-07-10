

function coreCount()
{
	var cores=0;
	var qestions=document.getElementsByClassName("question")
	for(var i=0;i<qestions.length;i++)
	{
		var count=0;
		var flag=1;
		var answer=document.getElementsByName("answer"+(i+1));
		for(var j=0;j<answer.length;j++)
		{
			if(answer[j].checked)
			{
				if(answer[j].value*1<0)
				{
					flag=0;
					break;
				}
				else
					count+=answer[j].value*1;
			}
		}
		if(flag==1)
			cores+=count;
	}
  alert("你的分数是 "+cores);
}

function showWhichWrong()
{
	var qestions=document.getElementsByClassName("question")
	for(var i=0;i<qestions.length;i++)
	{
		var answer=document.getElementsByName("answer"+(i+1));
		for(var j=0;j<answer.length;j++)
		{
			if(answer[j].checked)
			{
				if(answer[j].value*1<=0)
				{
					x=document.getElementById(i+1);
					x.style.color="red";
				}
			}
		}
	}
	for(var i=0;i<qestions.length;i++)
		{
			var answer=document.getElementsByName("answer"+(i+1));
			for(var j=0;j<answer.length;j++)
			{
				if(!answer[j].checked)
				{
					if(answer[j].value*1>0)
					{
						answer[j].style.backgroundColor="red";
					}
				}
			}
		}
}

function rightanswer(){
    alert("宋代;林默娘;农历九月初九;平海天后宫;元代;福建莆田;2009;清代;1987;《天妃娘妈传》");
  }
