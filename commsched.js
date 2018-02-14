  var index, index2, eObj, eArray, thisItem, i;
  var sStation = [];
  sStation["Bekasi"] = ["Destination..", "Cikarang", "Jakarta Kota"];
  sStation["Cikarang"] = ["Destination..", "Bekasi", "Jakarta Kota"];
  sStation["Jakarta Kota"] = ["Destination..", "Bekasi", "Cikarang"];
  var h, m, min, name;

  name = prompt("Hello, What is your name?");
  document.getElementById("username").innerHTML="Hello, " + name + "!";

  function startTime() {
     var today = new Date();
     var y = today.getFullYear();
     var mt = today.getMonth();
     var dt = today.getDate();
     var d = today.getDay();
     h = today.getHours();
     m = today.getMinutes();
     var s = today.getSeconds();
     var day = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
     var month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
     h = checkTime(h);
     m = checkTime(m);
     s = checkTime(s);
     document.getElementById('currDate').innerHTML = day[d] + ", " + dt + " " + month[mt] + " " + y;
     document.getElementById('currTime').innerHTML = h + ":" + m + ":" + s;
     var t = setTimeout(startTime, 500);
  }
  function checkTime(i) {
     if (i < 10) {i = "0" + i};
     return i;
  }

  // Get the modal
  var modal = document.getElementById('myModal');

  var img = document.getElementById('route');
  var modalImg = document.getElementById("img01");
  var captionText = document.getElementById("caption");
  img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = "https://jakartabytrain.files.wordpress.com/2013/03/commuterline-route-map-update-8-october-2017.jpg?w=724&h=1024";
    captionText.innerHTML = "CommuterLine Route";
  }

  var span = document.getElementsByClassName("close")[0];

  span.onclick = function() { 
    modal.style.display = "none";
  }

  function sFunc(sObj){    
    index = sObj.options.selectedIndex;

    if(index === 0){
      eObj = document.getElementById("ePoint");
      eObj.disabled = true;
    }

    eObj = document.getElementById("ePoint");
    eObj.removeAttribute("disabled");
    eObj.options.length = 0;
    thisItem = 0;

    eArray = sStation[sObj.options[index].value];

    for (i=0;i<eArray.length;i++){
      thisItem = eArray[i];
      eObj.options[i] = new Option(thisItem, thisItem, false, false);
    }
    //sObj.blur();
  }

  function eFunc(enObj){
    index2 = enObj.options.selectedIndex;
  }  

  function done(){
    var h1=h.toString()+":";
    var m1=m.toString();

    var strTime = h1.concat(m1);
  
    if((index===1) && (index2===1)){
      document.getElementById("table1").style.display="inline";
      document.getElementById("table2").style.display="none";
      document.getElementById("table3").style.display="none";
      document.getElementById("table4").style.display="none";
      document.getElementById("table5").style.display="none";
      document.getElementById("table6").style.display="none";
    }
    else if((index===1) && (index2===2)){
      document.getElementById("table2").style.display="inline";
      document.getElementById("table1").style.display="none";
      document.getElementById("table3").style.display="none";
      document.getElementById("table4").style.display="none";
      document.getElementById("table5").style.display="none";
      document.getElementById("table6").style.display="none";
    }
    else if((index===2) && (index2===1)){
      document.getElementById("table3").style.display="inline";
      document.getElementById("table1").style.display="none";
      document.getElementById("table2").style.display="none";
      document.getElementById("table4").style.display="none";
      document.getElementById("table5").style.display="none";
      document.getElementById("table6").style.display="none";
    }
    else if((index===2) && (index2===2)){
      document.getElementById("table4").style.display="inline";
      document.getElementById("table1").style.display="none";
      document.getElementById("table2").style.display="none";
      document.getElementById("table3").style.display="none";
      document.getElementById("table5").style.display="none";
      document.getElementById("table6").style.display="none";
    }
    else if((index===3) && (index2===1)){
      document.getElementById("table5").style.display="inline";
      document.getElementById("table1").style.display="none";
      document.getElementById("table2").style.display="none";
      document.getElementById("table3").style.display="none";
      document.getElementById("table4").style.display="none";
      document.getElementById("table6").style.display="none";
    }
    else if((index===3) && (index2===2)){
      document.getElementById("table6").style.display="inline";
      document.getElementById("table1").style.display="none";
      document.getElementById("table2").style.display="none";
      document.getElementById("table3").style.display="none";
      document.getElementById("table4").style.display="none";
      document.getElementById("table5").style.display="none";
    }
    else{
      document.getElementById("table1").style.display="none";
      document.getElementById("table2").style.display="none";
      document.getElementById("table3").style.display="none";
      document.getElementById("table4").style.display="none";
      document.getElementById("table5").style.display="none";
      document.getElementById("table6").style.display="none";
    }


    var q;
    var t1c1=[], t1c2=[], t2c1=[], t2c2=[], t3c1=[], t3c2=[], t4c1=[], t4c2=[], t5c1=[], t5c2=[], t6c1=[], t6c2=[];
    
    for(q=2;q<19;q++){
      t1c1[q]=document.getElementById("table1").rows[q].cells[0].innerText;
      t1c2[q]=document.getElementById("table1").rows[q].cells[1].innerText;
      if(strTime<t1c1[q]){
        min=q;
        document.getElementById("table1").rows[min].cells[0].setAttribute("style","font-weight:bold;");
        document.getElementById("table1").rows[min].cells[1].setAttribute("style","font-weight:bold;");
        break;
      }
    }

    for(q=2;q<61;q++){
      t2c1[q]=document.getElementById("table2").rows[q].cells[0].innerText;
      t2c2[q]=document.getElementById("table2").rows[q].cells[1].innerText;
      if(strTime<t2c1[q]){
        min=q;
        document.getElementById("table2").rows[min].cells[0].setAttribute("style","font-weight:bold;");
        document.getElementById("table2").rows[min].cells[1].setAttribute("style","font-weight:bold;");
        break;
      }
    }

    for(q=2;q<20;q++){
      t3c1[q]=document.getElementById("table3").rows[q].cells[0].innerText;
      t3c2[q]=document.getElementById("table3").rows[q].cells[1].innerText;
      if(strTime<t3c1[q]){
        min=q;
        document.getElementById("table3").rows[min].cells[0].setAttribute("style","font-weight:bold;");
        document.getElementById("table3").rows[min].cells[1].setAttribute("style","font-weight:bold;");
        break;
      }
    }

    for(q=2;q<14;q++){
      t4c1[q]=document.getElementById("table4").rows[q].cells[0].innerText;
      t4c2[q]=document.getElementById("table4").rows[q].cells[1].innerText;
      if(strTime<t4c1[q]){
        min=q;
        document.getElementById("table4").rows[min].cells[0].setAttribute("style","font-weight:bold;");
        document.getElementById("table4").rows[min].cells[1].setAttribute("style","font-weight:bold;");
        break;
      }
    }

    for(q=2;q<60;q++){
      t5c1[q]=document.getElementById("table5").rows[q].cells[0].innerText;
      t5c2[q]=document.getElementById("table5").rows[q].cells[1].innerText;
      if(strTime<t5c1[q]){
        min=q;
        document.getElementById("table5").rows[min].cells[0].setAttribute("style","font-weight:bold;");
        document.getElementById("table5").rows[min].cells[1].setAttribute("style","font-weight:bold;");
        break;
      }
    }

    for(q=2;q<12;q++){
      t6c1[q]=document.getElementById("table6").rows[q].cells[0].innerText;
      t6c2[q]=document.getElementById("table6").rows[q].cells[1].innerText;
      if(strTime<t6c1[q]){
        min=q;
        document.getElementById("table6").rows[min].cells[0].setAttribute("style","font-weight:bold;");
        document.getElementById("table6").rows[min].cells[1].setAttribute("style","font-weight:bold;");
        break;
      }
    }

  }