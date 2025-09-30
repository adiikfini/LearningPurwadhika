let Phone = 62878220011222;
let textPhone = String(Phone);
let truePhone = textPhone.slice(2,textPhone.length);

if (truePhone.length < 10 || truePhone.length > 13 || textPhone[0] != 6 && textPhone[1] != 2){
    console.log("Nomor telepon tidak valid");
}else{
    console.log(`number : ${textPhone.slice(0, textPhone.length - 2)}***`); 
}
