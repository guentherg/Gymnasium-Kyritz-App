fontFamily = Cookies.get('font-family');
fontSize = Cookies.get('font-size');
theme = Cookies.get('theme');

function apply(){
    document.body.style.fontFamily = fontFamily;
    document.body.style.fontSize = fontSize+"px";

    if(theme == "Hell"){
        document.body.style.backgroundColor = "white";
    }else if(theme=="Dunkel"){
        document.body.style.backgroundColor = "grey";
    }
}