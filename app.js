var lower=document.getElementById('lower')
var add=document.getElementById('add')
var counter=document.getElementById('count')

var count=0

lower.addEventListener('click' , lowerCount)
add.addEventListener('click' , addCount)


function lowerCount(e){
 if(count>0){
     count= count-1
     counter.style.color='red'
     counter.textContent=count
 }
 
}
function addCount(e){
    count= count+1
    counter.textContent=count
    counter.style.color='red'
 }