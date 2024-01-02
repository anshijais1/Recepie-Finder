
let button=document.querySelector("#button");
button.addEventListener("click",async(evt)=>
{
    let inp=document.querySelector("#input");
    val=inp.value;
   console.log(val);
   console.log("Hello")

   url=`https://www.themealdb.com/api/json/v1/1/filter.php?i=${val}`;
   let response=await fetch(url);
   let data=await response.json();
   console.log(data);
   if(data.meals){
    data.meals.array.forEach( => {
        
    });
   } 
});


/*baseurl=`${BASE_URL}/${fromCurr.value.toLowerCase()}/${toCurr.value.toLowerCase()}.json`;
let response=await fetch(baseurl);
console.log(response);
let data=await response.json();
let rate = data[toCurr.value.toLowerCase()];

let finalAmount = amtVal * rate;
msg.innerText = `${amtVal} ${fromCurr.value} = ${finalAmount} ${toCurr.value}`;



    });*/