var xhr= new XMLHttpRequest();
xhr.open("GET","http://contesttrackerapi.herokuapp.com/",true);
xhr.onload=function(){
	{
		var ob=JSON.parse(xhr.responseText).result;
                 var resp=ob.ongoing;
                 //var str="name"+ob.name+"id"+ob.i
                 document.getElementById("live").innerHTML=resp[1].url;
	}
}
xhr.send();