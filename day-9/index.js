//Q-1

let temperature = 17

if (temperature < 18) {
  console.log("Q-1","It's too cold, turn on the heater.");
}
  else if (temperature>= 18 && temperature<=25){
  console.log("Q-1","The temperature is comfortable.");
  }
  else {
      console.log("Q-1","It's too hot, turn on the fan.");
  }

  //Q-2

  let score = 89;

  if (score >=90){
    console.log("Q-2","GRADE A")
  }
  else if(score >=75 && score <=89){
    console.log("Q-2","GRADE B")
  }
    else if(score >=50 && score <=74){
    console.log("Q-2","GRADE C")
  }
  else {
    console.log("Q-2","GRADE D")
}

//Q-3


let signal = "green"
 if (signal == "red"){
    console.log("Q-3","Stop")
 }
 else if( signal==="yellow"){
    console.log("Q-3","Slow down")
 } 
 else if(signal ==="green"){
    console.log("Q-3","Go")
 } 
 else console.log("Q-3","Invalid" )


 //Q-4

 let disc = 20
 if (disc >100){
        console.log("Q-4","Give 20% discount")
 }
 else if (disc>=50 && disc<=100){
    console.log("Q-4","Give 10% discount")
 }
 else console.log("Q-4","No discount")

 //Q-5

 let time = 20
 if ( time < 7 ){
    console.log("Q-5","It's too early, sleep a bit more.")
 } else if (time >= 7 && time < 10) {
  console.log("Q-5","Time for breakfast and morning exercise.");
}  else if (time>= 10 && time < 18) {
  console.log("Q-5","Time to work or study.");
} else console.log("Q-5","Relex for the day")


