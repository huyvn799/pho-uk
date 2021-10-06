const btnView=document.getElementById('btn-view');
const locationView=document.getElementById('all_location_cu');
const greyBackground=document.getElementById('grey_background');
btnView.onclick=function(){
    locationView.style.display="block";
    greyBackground.style.display="none";
}