function hitungBmi(){
    let bb = document.getElementById("bb").value
    let tb = document.getElementById("tb").value
   let katagori = ""

    tinggiMeter = tb/100
    bmi = bb/Math.pow(tinggiMeter,2)

    if(bmi <= 18.5){
        katagori = "Underweight";
    } else if (bmi <= 24.9){
        katagori = "Normal weight";
    } else if(bmi <= 29.9){
        katagori = "Overweight";
    } else{
        katagori = "Obesity";
    }
    
    console.log(bmi + katagori)
}