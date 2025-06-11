const childDiv=document.getElementById("child-div")

    setInterval(function(){
    let time=new Date().toLocaleTimeString()
    
    childDiv.innerHTML=`${time}`

},1000)

