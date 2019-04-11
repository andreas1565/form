 const besked = document.querySelector('.message')
document.addEventListener('DOMContentLoaded',  () =>{
   
    /* vis og skjul input filter */ 
    let checkja = document.querySelector(".checkja");
    let extratema = document.querySelector(".extra-tema");
    let checkboxspecialmoduler = document.querySelector('.checkboxspecialmoduler');
    let specialmoduler = document.querySelector('.specialmoduler');
    checkja.addEventListener('click',show);
    checkboxspecialmoduler.addEventListener('click',   show2);
    function show(){
        if(extratema.style.display !== "block"){
            extratema.style.display = "block";
        }  else{
            extratema.style.display = "none";
        }
    }
    function show2(){
        if(specialmoduler.style.display !== "block"){
            specialmoduler.style.display = "block";
        }  else{
            specialmoduler.style.display = "none";
        }  
    }
});

function valider(e){
  // hvis navn.value er tom gør navn.fokus opmærksom på hvilket felt der mangler at blive udfyldt. så for brugeren besked "husk at skrive navn" og brugen af return false gør at beskeden ikke bliver sendt hvis felterne er tomme.
  if(e.shopname.value === ""){
    e.shopname.focus();
    besked.innerHTML="skrive noget i butiks navn";
    return false;
}
 
// hvis email.value er tom gør email.fokus opmærksom på hvilket felt der mangler at blive udfyldt. så for brugeren besked "husk at skrive email" og brugen af return false gør at beskeden ikke bliver sendt hvis felterne er tomme. 

if(e.slogan.value === ""){
    e.slogan.focus();
    besked.innerHTML="skriv noget i slogan felet";
    return false;
}
if(e.tema.value === '0'){
    e.tema.focus();
    besked.innerHTML="vælg et tema";
    return false;
}
if(e.fragt.value === '0'){
    e.fragt.focus();
    besked.innerHTML="vælg en fragt";
    return false;
}


 if(e.b2c.checked == false  && e.b2b.checked == false){
    e.b2c.focus();      
    besked.innerHTML="vælg eden b2c eller b2b";
    return false;
}

if(e.day.checked == false && e.day2.checked == false && e.day3.checked == false && e.day4.checked == false && e.day5.checked == false){
    e.day.focus();
    besked.innerHTML="vælg et eller flere  Leveringstider";
    return false;
}
if(e.cash.checked == false && e.visa.checked == false && e.mastercard.checked == false){
    e.cash.focus();
    besked.innerHTML=" vælg en betaling";
    return false;
}
else{
    return true;
}
}
  