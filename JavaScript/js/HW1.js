function Btn(){
    if (document.getElementById('link').text == "button green") 
    {
        document.getElementById('link').text = "button yellow";
    }
    else 
    {
      document.getElementById('link').text = "button green";
    }
    if (document.getElementById('link').style.background == "yellow") 
    {
        document.getElementById('link').style.background = "green";
    }
    else 
    {
      document.getElementById('link').style.background = "yellow";
    }

}
function Link(){
    document.getElementsByClassName("feature-content-link blue-btn")[0].href = "https://www.facebook.com/anastasia.koleda";
}