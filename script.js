///////////////////////////////////////////////////////////////////////////////////////////
//back-js
let img0father0back=document.querySelectorAll(".img-father-back")
let arr00back=Array.from(img0father0back)
let cuurent00img=0
let next0back=document.querySelector(".next-back")
let prev0back=document.querySelector(".prev-back")
let all0son=document.querySelectorAll(".son-back")
let arr0son=Array.from(all0son)
let current00son=0
let all00h1son=document.querySelectorAll(".h1-son-back")
let arr00h1son=Array.from(all00h1son)
let current00h1son=0
let allpson=document.querySelectorAll(".p-son-bak")
let arrpson=Array.from(allpson)
let current0pson=0
let all0button0son=document.querySelectorAll(".button-son-back")
let arr0button0son=Array.from(all0button0son)
let current0button0son=0


arr0button0son[current0button0son].classList.add("button-son-back-js")
arrpson[current0pson].classList.add("p-son-bak-js")
arr00h1son[current00h1son].classList.add("h1-son-back-js")
arr0son[current00son].classList.add("son-back-js")
arr00back[cuurent00img].classList.add("img-father-back-js")

//////////////////////////////////////////
//////////////////////////////////////////
//////////////////////////////////////////
//************************************** */
//////////////////////////////////////////
//////////////////////////////////////////



next0back.onclick=function(){
remove00img()
cuurent00img++;
if(cuurent00img==3){cuurent00img=0}
active0back()
///////////////
remove00son()
current00son++;
if(current00son==3){current00son=0}
active0son()

/////////
remove0h1son()
current00h1son++;
if(current00h1son==3){current00h1son=0}
acctive00h100son()

////////////
remove0pson()
current0pson++;
if(current0pson==3){current0pson=0}
acctive0pson()

//////////////////////
remove0button0son()
current0button0son++;
if(current0button0son==3){current0button0son=0}
acctive0button0son()



}

//////////////////////////////////////////
//////////////////////////////////////////
//////////////////////////////////////////
//************************************** */
//////////////////////////////////////////
//////////////////////////////////////////

prev0back.onclick=function(){
remove00img()
cuurent00img--;
if(cuurent00img==-1){cuurent00img=2}
active0back()
///////////////
remove00son()
current00son--;
if(current00son==-1){current00son=2}
active0son()
//////////
remove0h1son()
current00h1son--;
if(current00h1son==-1){current00h1son=2}
acctive00h100son()
///////////

remove0pson()
current0pson--;
if(current0pson==-1){current0pson=2}
acctive0pson()


//////////////////////
remove0button0son()
current0button0son--;
if(current0button0son==-1){current0button0son=2}
acctive0button0son()

}

//////////////////////////////////////////
//////////////////////////////////////////
//////////////////////////////////////////


function active0back(){
arr00back[cuurent00img].classList.add("img-father-back-js")
}



function remove00img(){
arr00back.forEach((e)=>{
arr00back[cuurent00img].classList.remove("img-father-back-js")

})
}




//////////////////////////////////////////
//////////////////////////////////////////
//////////////////////////////////////////


function remove00son(){
arr0son.forEach((e)=>{
arr0son[current00son].classList.remove("son-back-js")
// arr0son[current00son].classList.add("son-back")

})
}

function active0son(){
// arr0son[current00son].classList.remove("son-back")
arr0son[current00son].classList.add("son-back-js")

}

//////////////////////////////////////////
//////////////////////////////////////////
//////////////////////////////////////////
function remove0h1son(){
arr00h1son.forEach((e)=>{
arr00h1son[current00h1son].classList.remove("h1-son-back-js")

})
}

function acctive00h100son(){
arr00h1son[current00h1son].classList.add("h1-son-back-js")

}

//////////////////////////////////////////
//////////////////////////////////////////
//////////////////////////////////////////



//////////////////////////////////////////
//////////////////////////////////////////
//////////////////////////////////////////
function remove0pson(){
arrpson.forEach((e)=>{
arrpson[current0pson].classList.remove("p-son-bak-js")

})
}

function acctive0pson(){
arrpson[current0pson].classList.add("p-son-bak-js")

}

//////////////////////////////////////////
//////////////////////////////////////////
//////////////////////////////////////////



//////////////////////////////////////////
//////////////////////////////////////////
//////////////////////////////////////////
function remove0button0son(){
arr0button0son.forEach((e)=>{
arr0button0son[current0button0son].classList.remove("button-son-back-js")

})
}

function acctive0button0son(){
arr0button0son[current0button0son].classList.add("button-son-back-js")

}

//////////////////////////////////////////
//////////////////////////////////////////
//////////////////////////////////////////











setInterval(back00canges,7000)

function back00canges(){
remove00img()
cuurent00img++;
if(cuurent00img==3){cuurent00img=0}
active0back()
;
remove00son()
current00son++;
if(current00son==3){current00son=0}
active0son()
;
remove0h1son()
current00h1son++;
if(current00h1son==3){current00h1son=0}
acctive00h100son()
;
remove0pson()
current0pson++;
if(current0pson==3){current0pson=0}
acctive0pson()
;
remove0button0son()
current0button0son++;
if(current0button0son==3){current0button0son=0}
acctive0button0son()


}






// let button0son00back=document.querySelectorAll(".button-son-back")
// console.log(button0son00back)
// button0son00back.forEach((e)=>{
// button0son00back.onmouseenter=function(){
// let text0button0son0back=document.querySelectorAll(".text-button-son-back")
// text0button0son0back.forEach((a)=>{
// let pos0button0son0back=document.querySelectorAll(".pos-button-son-back")
// pos0button0son0back.forEach((b)=>{

// if(e.dataset.bute==a.dataset.bute&&e.dataset.bute==b.dataset.bute)    
// {
// a.classList.add("text-button-js")
// b.classList.add("pos-button-js")

// }


// })})}})




//end-back-ks










/////////////////////////////////////////////////////////////////////////////
//header
let li0header=document.querySelectorAll(".li-header")
li0header.forEach((e)=>{
e.onmouseenter=function(){
let text0header=document.querySelectorAll(".text-li-header")
text0header.forEach((a)=>{
let pos0header=document.querySelectorAll(".pos-header")
pos0header.forEach((b)=>{
if(e.dataset.head==a.dataset.head&&e.dataset.head==b.dataset.head)
{
a.classList.add("text-li-header-js")
b.classList.add("pos-header-js")
}})})}})


li0header.forEach((e)=>{
e.onmouseleave=function(){
let text0header=document.querySelectorAll(".text-li-header")
text0header.forEach((a)=>{
let pos0header=document.querySelectorAll(".pos-header")
pos0header.forEach((b)=>{
if(e.dataset.head==a.dataset.head&&e.dataset.head==b.dataset.head)
{
a.classList.remove("text-li-header-js")
b.classList.remove("pos-header-js")
}})})}})



window.addEventListener("scroll",function(){
let con0header=document.querySelector(".con-header2")
let bod =document.querySelector("body")
let ws=window.scrollY
console.log(ws)
if(ws>=400){
con0header.classList.add("con-header2-js")
}



else if(ws<400){
con0header.classList.remove("con-header2-js")
}
})


let icon0headero=document.querySelector(".icon-headero")
let header0phone=document.querySelector(".header-phone")
let icon0serch=document.querySelector(".icon-serch")
let icon0serch2=document.querySelector(".icon-serch2")
let con0inp0search=document.querySelector(".con-inp-search")
let con0inp0search2=document.querySelector(".con-inp-search2")


icon0headero.addEventListener("click",function(){
header0phone.classList.toggle("header-phone-js")
icon0headero.classList.toggle("icon-headero-js")

})


let icon0headero2=document.querySelector(".icon-headero2")
icon0headero2.addEventListener("click",function(){
header0phone.classList.toggle("header-phone-js")
icon0headero2.classList.toggle("icon-headero2-js")

})



icon0serch.addEventListener("click",function(){
con0inp0search.classList.toggle("con-inp-search-js")
icon0serch.classList.toggle("icon-serch-js")

})


icon0serch2.addEventListener("click",function(){
con0inp0search2.classList.toggle("con-inp-search2-js")
icon0serch2.classList.toggle("icon-serch2-js")

})



//end-header
////////////////////////////////////////////////////////////////////////////////////////////

//about
//////////////////////////////////////////////////////////////////////////////////////////////////
let botton0about=document.querySelector(".botton-about")
let pos0botton0about=document.querySelector(".pos-botton-about")
let text0botton0about=document.querySelector(".text-botton-about")
botton0about.addEventListener("mouseenter",function(){
pos0botton0about.classList.add("pos-botton-about-js")
text0botton0about.classList.add("text-botton-about-js")

})


botton0about.addEventListener("mouseleave",function(){
pos0botton0about.classList.remove("pos-botton-about-js")
text0botton0about.classList.remove("text-botton-about-js")

})







let enargy1=document.querySelector(".enargy1")
let enargy2=document.querySelector(".enargy2")
let enargy3=document.querySelector(".enargy3")
let father0about=document.querySelector(".father-about")

window.addEventListener("scroll",function(){
let windo00scroll=window.scrollY
let offst0father0about=father0about.offsetTop
if(windo00scroll>=offst0father0about)
{
enargy1.classList.add("enargy1-js")
enargy2.classList.add("enargy2-js")
enargy3.classList.add("enargy3-js")






}

})
//end-about
//////////////////////////////////////////////////////////////////////////////////////


//team
//////////////////////////////////////////////////////////////////////////////////////////////////

let box0team=document.querySelectorAll(".box-team")
box0team.forEach((e)=>{
e.onmouseenter=function(){
let img0team=document.querySelectorAll(".img-team")
img0team.forEach((a)=>{
let h10team0name=document.querySelectorAll(".h1-team-name")
h10team0name.forEach((b)=>{
let meida0team=document.querySelectorAll(".meida-team")
meida0team.forEach((c)=>{
if(e.dataset.team==a.dataset.team&&e.dataset.team==b.dataset.team&&e.dataset.team==c.dataset.team)
{
a.classList.add("img-team-js")
b.classList.add("h1-team-name-js")
c.classList.add("meida-team-js")

}

})})})}})


box0team.forEach((e)=>{
e.onmouseleave=function(){
let img0team=document.querySelectorAll(".img-team")
img0team.forEach((a)=>{
let h10team0name=document.querySelectorAll(".h1-team-name")
h10team0name.forEach((b)=>{
let meida0team=document.querySelectorAll(".meida-team")
meida0team.forEach((c)=>{
if(e.dataset.team==a.dataset.team&&e.dataset.team==b.dataset.team&&e.dataset.team==c.dataset.team)
{
a.classList.remove("img-team-js")
b.classList.remove("h1-team-name-js")
c.classList.remove("meida-team-js")
}

})})})}})





// window.addEventListener("scroll",function(){
// let wind=window.scrollY
// console.log(wind)
// let son0team=document.querySelector(".son-team")
// let offst0son0team=son0team.offsetTop
// if(wind>=offst0son0team){
// let box0team=document.querySelectorAll(".box-team")
// box0team.forEach((e)=>{
// e.setAttribute("id","box-team")
// })
// }

// })






//end-tem
//////////////////////////////////////////////////////////////////////////////////////////////////



//price
//////////////////////////////////////////////////////////////////////////////////////////////////

let box0price=document.querySelectorAll(".box-price")
box0price.forEach((e)=>{
e.onmouseenter=function(){
let circle0price=document.querySelectorAll(".circle-price")
circle0price.forEach((a)=>{
let h10circle0price=document.querySelectorAll(".h1-circle-price")
h10circle0price.forEach((b)=>{
let line0offer0circle=document.querySelectorAll(".line-offer-circle")
line0offer0circle.forEach((c)=>{
let button0price=document.querySelectorAll(".button-price")
button0price.forEach((d)=>{

if(e.dataset.price==a.dataset.price&&e.dataset.price==b.dataset.price&&e.dataset.price==c.dataset.price&&e.dataset.price==d.dataset.price)
{
e.classList.add("box-price-js")
a.classList.add("circle-price-js")
b.classList.add("h1-circle-price-js")
c.classList.add("line-offer-circle-js")
d.classList.add("button-price-js")
}



})})})})}})




box0price.forEach((e)=>{
e.onmouseleave=function(){
let circle0price=document.querySelectorAll(".circle-price")
circle0price.forEach((a)=>{
let h10circle0price=document.querySelectorAll(".h1-circle-price")
h10circle0price.forEach((b)=>{
let line0offer0circle=document.querySelectorAll(".line-offer-circle")
line0offer0circle.forEach((c)=>{
let button0price=document.querySelectorAll(".button-price")
button0price.forEach((d)=>{

if(e.dataset.price==a.dataset.price&&e.dataset.price==b.dataset.price&&e.dataset.price==c.dataset.price)
{
e.classList.remove("box-price-js")
a.classList.remove("circle-price-js")
b.classList.remove("h1-circle-price-js")
c.classList.remove("line-offer-circle-js")
d.classList.remove("button-price-js")
}



})})})})}})

//edn-price
//////////////////////////////////////////////////////////////////////////////////////////////////




//scroll
////////////////////////////////////////////////////////////////////////////////////////////

let scrolls =document.querySelector(".button-scrool")

scrolls.onclick=function(){
window.scrollTo({top: 0, behavior: 'smooth'});
}
window.addEventListener("scroll",function(){
let wys=window.scrollY
if(wys>=500){
scrolls.classList.add("button-scrool-js")
}

else if(wys<500){
scrolls.classList.remove("button-scrool-js")
}
})


//end-scroll
////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////





//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////
//app

let left0app=document.querySelector(".left-app")
let right0app=document.querySelector(".right-app")
window.addEventListener("scroll",function(){
let win =window.scrollY
console.log(win)
if(win>=3700){
left0app.classList.add("left-app-js")
right0app.classList.add("right-app-js")

}
else{
left0app.classList.remove("left-app-js")
right0app.classList.remove("right-app-js")
}
})



//end-app
//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////