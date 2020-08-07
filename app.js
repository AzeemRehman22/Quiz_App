window.onload = function(){
    show(0)
}

var questionArray = [{

    id : 1,
    question : "which one is the correct answer for this equation 12+9 ?",
    answer :  "B. 21",
    option: [
        "A. 20",
        "B. 21",
        "C. 30",
        "D. 25"

    ]
},
       
{
    id : 2,
    question : "Find the sum of 111 + 222 + 333",
    answer :  "B. 666",
    option: [
        "A. 700",
        "B. 666",
        "C. 10",
        "D. 100"

    ]
},
{
    id : 3,
    question : "Subtract 475 from 832",
    answer : "A. 375",
    option: [
        "A. 375",
        "B. 57",
        "C. 378",
        "D. 456"
    ]
},
{   
    id : 4,
    question: "3. 50 times 5 is equal to",
    answer : "D. None of these",
    option: [
        "A. 2500",
        "B. 505",
        "C. 500",
        "D. None of these"
    ]

},
{   
    id : 5,
    question : " Simplify: 26 + 32 - 12",
    answer : " D. 372",
    option: [
        "A. 216",
        "B. 7230",
        "C. 106",
        "D. 372"
    ]
    
},
]
var q_count = 0;
function next(){
    q_count++
    console.log(q_count) 
    show(q_count)
}

function show(e){
    var ques  = document.getElementById("question") 
    ques.innerHTML = `<h1>"${questionArray[e] .question} </h1>
    
    <ul class="list">
                        <li class="option" >${questionArray[e].option[0]}</li>
                        <li class="option" >${questionArray[e].option[1]}</li>
                        <li class="option" >${questionArray[e].option[2]}</li>
                        <li class="option" >${questionArray[e].option[3]}</li>
</ul> -->`
active()

}
function active(){
    var option1 = document.querySelectorAll("li.option")

    for(let i=0;i <option1.length;i++){
        for(let j=0;j < option1.length;j++){
            if(option1[i].classList.contains("active")){
                option1[i].classList.remove("active")
            }
        }
        option1[i].onclick = function(){
            option1[i].classList.add("active")
        }
    }
}

