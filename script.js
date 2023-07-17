let body = document.querySelector("body")

// let load = addEventListener("load", temp1())

function temp1 (){
   return `<div class="tests" id="test1">
        <div id="q1">
            <img  src="Images/1/test1.png" alt="">
        </div>
        <div id="answers">
            <img src="Images/1/1-1.png" alt="">
            <img src="Images/1/1-2.png" alt="">
            <img src="Images/1/1-3.png" alt="">
            <img src="Images/1/1-4.png" alt="">
            <img src="Images/1/1-5.png" alt="">
            <img src="Images/1/1-6.png" alt="">
        </div>
    </div>`
}

body.insertAdjacentHTML('afterbegin', temp1() );

console.log(body);