function sendWhatsApp(){
let d=document.getElementById("destination").value;
let url="https://wa.me/97798XXXXXXXX?text=Tour enquiry: "+d;
window.open(url,"_blank");
}
