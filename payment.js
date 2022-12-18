

document.querySelector("#confirm_purchase").addEventListener("click",()=>{
  let obj={};
  let generated_otp;
  obj.card_number=document.querySelector("#card_number").value;
  obj.expiration_date=document.querySelector("#expiration_date").value;
  obj.cvv_number=document.querySelector("#cvv_number").value;
  obj.address=document.querySelector("#address").value;
  obj.city=document.querySelector("#city").value;
  obj.state=document.querySelector("#state").value;
  obj.zip_code=document.querySelector("#zip_code").value;
  if (obj.card_number=="" || obj.expiration_date==""|| obj.cvv_number==""|| obj.address==""|| obj.city==""|| obj.state==""|| obj.zip_code==""){
    alert("Fill All Details...");
  }
  else {
          document.querySelector(".body2").innerHTML=`<div class="otp">
          <div>
              <p>Enter OTP</p>
              <input type="number" id="otp">
          </div>
          <button id="otp_btn">Submit OTP</button>
          </div>`;
          let generated_otp=Math.floor(Math.random() * (9999-1000)) + 1000;
          alert(`Your Otp is ${generated_otp}`);

          //after otp entered process
document.querySelector("#otp_btn").addEventListener("click",()=>{
  let entered_otp=document.querySelector("#otp").value;
  console.log(entered_otp,generated_otp)
  if (entered_otp==generated_otp){
          document.querySelector(".mainbody>div:nth-child(1)>div").innerHTML=`Processing`;
        setTimeout(() => {
            document.querySelector(".mainbody>div:nth-child(1)>div").innerHTML=`Placed`;
        }, 4000);
        setTimeout(() => {
            document.querySelector(".mainbody>div:nth-child(1)>div").innerHTML=` <div class="card_details">
            <div >
              <input id="card_number" type="tel" inputmode="numeric" pattern="[0-9\s]{13,19}" autocomplete="cc-number" maxlength="19" placeholder="Card Number">
            </div>
            <div>
              <input type="number" name="" id="expiration_date" placeholder="Expiration Date">
              <input type="number" name="" id="cvv_number" placeholder="CVV">
            </div>
            <div>
              <input type="text" name="" id="address" placeholder="Address">
            </div>
            <div>
              <input type="text" name="" id="city" placeholder="City">
              <input type="text" name="" id="state" placeholder="State">
              <input type="number" name="" id="zip_code" placeholder="Zip Code">
            </div>
            <button id="confirm_purchase" data-toggle="modal" data-target="#myModal">Confirm Purchase</button>
        </div>`;
        window.location.href="coach.html"
        }, 6000);
  }
  else {
    alert("Entered Otp is Incorrect");
  } 
  })
}
 
});