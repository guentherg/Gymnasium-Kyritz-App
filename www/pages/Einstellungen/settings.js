let fontSize;
let fontFamily;
let theme;

function setup(){

	select("button").mousePressed(apply);

	fontSize = new Value("fontSize", "Schriftgröße", 16, 32, 20);

	fontFamily = new DropDown("font-family", "Schriftart", ["MerriWeather", "Josefin Sans", "Oswald"]);
	
}

function draw(){

	fontSize.update();
	fontFamily.update();
}

function applyStyle(){
	_fontFamily = Cookies.get('font-family');
	_fontSize = Cookies.get('font-size');

	console.log(Cookies.get('font-size'));

	document.body.style.fontFamily = _fontFamily;
}

function apply(){
	_fontFamily = Cookies.get('font-family');
	_fontSize = Cookies.get('font-size');
	

	document.body.style.fontFamily = _fontFamily;


	
	Cookies.set('font-family', fontFamily.sel.value());
	Cookies.set('font-size', fontSize.slide.value());
}

class Value{
	constructor(_name, _text, _min, _max, _start){
		this.name = _name;
		this.text = _text;
		this.textP = createP(_text).parent(select("#holder")).id(this.name);
		this.slide = createSlider(_min, _max, _start).parent(select("#holder"));
		this.slide.class("slider")
		createP("</br>").parent(select("#holder"));
	}

	update(){
		this.textP.html(this.text + ": " + this.slide.value());
	}
}

class DropDown{
	constructor(_name, _text, _arg){
		this.name = _name;
		this.text = _text;
		this.arg = _arg;
		this.textP = createP(_text).parent(select("#holder")).id(this.name);
		this.sel = createSelect().parent(select("#holder"));
		this.sel.class("custom-select");
		this.value = null;
		for (var i = 0; i < this.arg.length; i++) {
			this.sel.option(this.arg[i]);
		}
		createP("</br>").parent(select("#holder"));

	}

	update(){
		this.textP.html(this.text + ": " + this.sel.value());
		this.value = this.sel.value;
	}
}