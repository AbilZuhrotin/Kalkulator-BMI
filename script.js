function hitungBmi(){
    let bb = document.getElementById("bb").value
    let tb = document.getElementById("tb").value

    tinggiMeter = tb/100
    bmi = bb/Math.pow(tinggiMeter,2)

    console.log(bmi)
}