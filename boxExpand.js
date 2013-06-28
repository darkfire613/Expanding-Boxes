var box_click = function(i,j,k){
	i.classList.toggle("box_click");
	document.getElementById(k).classList.toggle("content_click");
	document.getElementById(j).classList.toggle("title_click");
}