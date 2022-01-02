const inputs = document.querySelectorAll('.area-input');
const areaBtn = document.querySelector('#area-btn');
const areaOutput = document.querySelector('#area-output');
function multiplyBaseAndHeight(base, height) {

		const multipliedOutput = base * height;
		return multipliedOutput;
	
}

function calculateArea() {
	var base = Number(inputs[0].value);
  var height = Number(inputs[1].value);
	if(base > 0 && height > 0)
	{
		const basexheight = multiplyBaseAndHeight(inputs[0].value, inputs[1].value);
		const area = basexheight / 2;
		console.log({ area });
		areaOutput.innerText = `The area of the triangle is ${area} cm²`;
	}
	else
	{
		areaOutput.innerText = 'Enter valid inputs';
	}
	
}

areaBtn.addEventListener('click', calculateArea);
