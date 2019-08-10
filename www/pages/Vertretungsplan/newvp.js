var vp;
var got = false;

function gotData(data) {
  	vp = data.content.rendered;


}

function setup(){
	noCanvas();
	let url = 'http://gymnasium-kyritz.de/wordpress/wp-json/wp/v2/pages/77';
  	loadJSON(url, gotData);

}

function draw(){
	if(vp && !got){
		console.log(vp);
		got = true;
		document.getElementById('container').innerHTML = vp;
		$("p").remove();
	}
}