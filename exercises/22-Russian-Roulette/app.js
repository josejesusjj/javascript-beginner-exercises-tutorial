var bulletPosition = 4;

const spinChamber = () => {
	var chamberPosition = Math.floor((Math.random() * 6) + 1);
	return chamberPosition;
};

// Remove the // below and complete the commented lines
const fireGun = (spinnerPosition) => {
    if (spinChamber() == bulletPosition) return ("You're dead!");//el problema esta aqui, dentro del parentesis del if. no encuentro el match correcto
    else return ("Keep playing!");
};

console.log(fireGun());

console.log(spinChamber());
console.log(bulletPosition);
