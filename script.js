//your JS code here. If required.
const sizeInfo = document.getElementById('sizeInfo');

const update = ()=>{
	const width = window.innerWidth;
	const height = window.innerHeight;

	sizeInfo.querySelector('h1').textContent = `Widht : ${width} and height: ${height}.`;
}

update();


window.addEventListener('resize', update);