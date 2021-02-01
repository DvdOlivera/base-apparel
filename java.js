document.querySelector("#botoningreso").addEventListener("click",validateEmail)
function validateEmail() {
    if (/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(document.querySelector("#email-input").value)){
       document.querySelector("#email-input").classList.remove("borderojo");
       document.querySelector("#email-input").classList.add("borderosa");
       document.querySelector("#alertamail").classList.remove("alertainvisible");
       return (true)
       
      }

    else if( document.querySelector("#email-input").value.length < 12 ){
      document.querySelector("#email-input").classList.add("borderojo");
      document.querySelector("#email-input").classList.remove("borderosa");
      document.querySelector("#alertamail").classList.remove("alertainvisible");
       return (false)
      }

    else { 
      
      document.querySelector("#email-input").classList.add("borderojo");
      document.querySelector("#email-input").classList.remove("borderosa");
      document.querySelector("#alertamail").classList.add("alertainvisible")
       return (false)
      }
}

/*
  <div id="prueba">
    <img src="images/hero-desktop.jpg" alt="">
  </div>
#prueba{
  width: 300px;
  height: 400px;
}
#prueba img{
  max-width: 100%;
  max-height: 100%;
  display: block; remove extra space below image 
}*/