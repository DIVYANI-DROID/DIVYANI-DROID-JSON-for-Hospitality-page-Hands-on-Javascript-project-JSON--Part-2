// JavaScript Document
var xhr = new XMLHttpRequest();

xhr.open('GET', 'data.json', true);
xhr.responseType = 'text';  


//xhr.onreadystatechange = function() {
//    console.log(xhr.readyState);
//    console.log(xhr.status);
//    console.log(xhr.statusText);
//}//end function

xhr.onload = function() {
    if(xhr.status===200) {
        var myStuff = JSON.parse(xhr.responseText);
        console.log(myStuff);
    } //end if
    
}//end onload function

xhr.send();