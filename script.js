var dateelement=document.createElement('input');
dateelement.setAttribute('type','date');
dateelement.setAttribute('id','date');
document.body.append(dateelement);

var button=document.createElement('button');
button.innerHTML="Display data";
button.className="btn btn-primary";
button.setAttribute('type','button');
button.addEventListener('click',displaydata);
document.body.append(button);




function displaydata(){
    let input=document.getElementById("date").value;
   if(Date.parse(input)){
    var inputdate=new Date(input);
    var currentdate=new Date();
    // console.log(inputdate,currentdate);
    var millisecdiff=currentdate.getTime()-inputdate.getTime();
    console.log(millisecdiff);
    var seconddiff=Math.floor(millisecdiff/1000);
    console.log(seconddiff);
    var minutediff=Math.floor(seconddiff/60);
    console.log(minutediff);
    var hrdiff=Math.floor(minutediff/60);
    console.log(hrdiff);
    var daydiff=Math.floor(hrdiff/24);
    console.log(daydiff);
    var yeardiff=currentdate.getFullYear()-inputdate.getFullYear();
    console.log(yeardiff);
    var monthdiff=(yeardiff*12)+(currentdate.getMonth()-inputdate.getMonth());
    monthdiff.innerHTML=monthdiff;
    console.log(monthdiff);


   }
   else{
       console.log("give a proper valid data")
   }

   var data=document.createElement('div');
   data.innerHTML=`Year ${yeardiff} <br> Month ${monthdiff} <br> Day ${daydiff} <br> hours ${hrdiff}<br> Minutes ${minutediff} <br> seconds ${seconddiff} <br> Milliseconds ${millisecdiff}`;
   document.body.append(data)


}
