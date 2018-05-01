console.log('linked')
function menuOn() {
    document.getElementById("overlay").style.display = "block";
}

function menuOff() {
    document.getElementById("overlay").style.display = "none";
}

function educationImage(menuItem) {
  if (document.getElementById("homepage") != null){
    document.getElementById("homepage").id = menuItem
    console.log('education')
  } else if(document.getElementById("homepage-education") != null) {
    document.getElementById("homepage-education").id = menuItem
  } else if(document.getElementById("homepage-industry") != null) {
    document.getElementById("homepage-industry").id = menuItem
  } else if(document.getElementById("homepage-outreach") != null) {
    document.getElementById("homepage-outreach").id = menuItem
  } else if(document.getElementById("homepage-research") != null) {
    document.getElementById("homepage-research").id = menuItem
  } else if(document.getElementById("homepage-about") != null) {
    document.getElementById("homepage-about").id = menuItem
  }
}