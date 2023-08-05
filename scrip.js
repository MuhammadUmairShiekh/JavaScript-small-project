 const calcu = () =>{
    // alert(888)
        let one= document.getElementById('english').value;
        let two =document.getElementById("math").value;
        let three=document.getElementById("urdu").value;
        let four =document.getElementById("bio").value;
        let five =document.getElementById("che").value;
        let six =document.getElementById("isl").value;
        // alert(total)
         
        
    if( one > 100 || two > 100 ||three > 100 || four > 100 || five >100 ||six > 100 ){
        alert("Please Enter out of 100 value! ☺")
    }   else{
        let totalObtain =parseFloat(one) +parseFloat(two) +parseFloat(three) +parseFloat(four) +parseFloat(five) +parseFloat(six)
        document.getElementById("Obtain").innerHTML= totalObtain
        let Persentage = (totalObtain/600)*100
        document.getElementById("Persentage").innerHTML =Persentage.toFixed(2)+"%"
        if (Persentage >= 90 ){
            document.getElementById("Grade").innerHTML="A-One Congratulation Brilliant Performance 🥰"
        } else if( Persentage >=80){
            document.getElementById("Grade").innerHTML="A+ Congratulation Excellent Performance 🤗"           

        } else if( Persentage >=70){
            document.getElementById("Grade").innerHTML="A Congratulation Good Performance ☺"           

        } else if( Persentage >=60){
            document.getElementById("Grade").innerHTML="B Congratulation You Pass 🙂"           

        } else if( Persentage >=50){
            document.getElementById("Grade").innerHTML="C You Pass  Fair 😑"           

        } else if( Persentage >=40){
            document.getElementById("Grade").innerHTML="D You Pass Poor Performance 🤐"           

        } else if( Persentage < 40){
            document.getElementById("Grade").innerHTML="Fail 😳"           

        }
        

    }      

       


}




// if( one === "number" ){
//     console.log("Is number")
// }    else{
// console.log("is not number")
// }
// console.log(one)











