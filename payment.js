

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
          document.querySelector(".mainbody>div:nth-child(1)>div").innerHTML=`Payment Processing`;
        setTimeout(() => {
            document.querySelector(".mainbody>div:nth-child(1)>div").innerHTML=` <div class="placed">
            <img src="data:image/png;base64,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" alt="">
             <p>Order Placed</p>
             <p>Enjoy Your Day</p>  
        </div>`;
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