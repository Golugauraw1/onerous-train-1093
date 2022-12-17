document.querySelector("#confirm_purchase").addEventListener("click",()=>{
    
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
});