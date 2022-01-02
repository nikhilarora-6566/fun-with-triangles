const angles = document.querySelectorAll('.angle-input');
const isTriangleBtn = document.querySelector('#is-triangle-btn');
const isTriangleOutput = document.querySelector('#is-triangle-output');

function calculateSumOfAngles() {
	const angle1 = Number(angles[0].value);
	const angle2 = Number(angles[1].value);
	const angle3 = Number(angles[2].value);
	const sumOfAngles = angle1 + angle2 + angle3;
	console.log(sumOfAngles);
	return sumOfAngles;
}

function isTriangle() {
	const angle1 = Number(angles[0].value);
	const angle2 = Number(angles[1].value);
	const angle3 = Number(angles[2].value);
	if(angle1<0 || angle2<0|| angle3<0)
	{
	
		isTriangleOutput.innerText = 'Enter valid inputs!!'
		
	}
	else{
		if (calculateSumOfAngles() === 180) {
			console.log('Yayy, the angles form a triangle');
			isTriangleOutput.innerText = 'Yayy, the angles form a triangle';
		} else {
			if(calculateSumOfAngles()<0)
			{
				console.log("Enter Positive Values");
				isTriangleOutput.innerText = 'Enter Positive Values';
			}
			else{
				console.log('Oh Oh!, the angles do not form a triangle');
				isTriangleOutput.innerText = 'Oh Oh!, the angles do not form a triangle';
			}
	}
		
	}
}
isTriangleBtn.addEventListener('click', isTriangle);
