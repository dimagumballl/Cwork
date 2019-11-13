var date = new Date();


var  c=date.getSeconds();
var M=0, D=0, H=0, m=0;
var chec1=false;
function timer(month,day,hour,minute)
{
	if(!chec1)
	{
		var time = [date.getFullYear(),date.getMonth(),date.getDate(),date.getHours(),date.getMinutes()];
		var i=time[1];
		var check = false;
		while(check!=true)
		{
			if(i!=month)
			{
				if(i==11)
				{
					D=D +(32 - new Date(time[0], i, 32).getDate()); 
					i=0;
				}
				else
				{
					D=D +(32 - new Date(time[0], i, 32).getDate()); 
					i++;
				}
			}
			else
			{
				D=D +(32 - new Date(time[0], i, 32).getDate()); 
				check=true;
			}
		}
		D=D-time[2];
		D=D-((32 - new Date(time[0], month, 32).getDate())-day)
		H=24-time[3];
		m=60-time[4];
		chec1=true;
		
	}
	if(c==0)
	{
		c=60;
		if(m==0)
		{
			m=60
			if(H==0)
			{
				D--
			}
			else
			H--
		}
		else
		m--;
	}
	c--;
	document.getElementById("D").innerHTML=D;
	document.getElementById("H").innerHTML=H;
	document.getElementById("m").innerHTML=m;
	if(c==0&&m==0&&H==0&&D==0)
		alert("stop");
	else
		setTimeout("timer()",1000)
}