const form=document.querySelector("#lead-form");
const status=document.querySelector("#status");

form?.addEventListener("submit",event=>{
  event.preventDefault();

  if(typeof window.oaiq==="function"){
    window.oaiq("measure","lead_created",{type:"customer_action"});
  }else{
    console.warn("OpenAI Ads Measurement Pixel is not available.");
  }

  status.hidden=false;
  form.reset();
});