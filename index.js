function showText(){
    document.getElementById("p1").innerHTML="hello Worlde!! <br> i am javascrtipt";
}
function showAlert(){
    alert("This is alert")
}
function showImg() {
    document.getElementById("img1").src="logo.png";
}
function showImg2() {
    document.getElementById("img2").src="wallpaper.jpg";
}
function changeCSS() {
    document.getElementById("p2").style.fontSize="20px"; 
    document.getElementById("p2").style.color="red";
}
 function hidePara() {
    document.getElementById("p3").style.display="none";
 }
 function showPara() {
     document.getElementById("p3").style.display="block";
 }

 var pTags= document.getElementsByTagName("p");
 console.log(pTags);

  var h3Tags= document.getElementsByClassName("heading");
  console.log(h3Tags);
   
  function setImg2() {
     document.getElementById("img2").setAttribute("src","logo.png")
  }
  
  var myElement= document.getElementById("p4");
   document.getElementById("p5").innerHTML= 'coppied text' + myElement.innerHTML;