export const  genRandomColors = (num) => {
	var arr = [];
	for (var i = 0; i < num; i++) {
		arr.push(makeColor());
	}
	return arr;
}

export const makeColor = () => {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`
}

export const getColorIndex = (arr) => {
    return Math.floor(Math.random() * arr.length);
    
}