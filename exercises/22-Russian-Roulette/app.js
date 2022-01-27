let bulletPosition = 4;

let spinChamber = () => {
	var chamberPosition = Math.floor((Math.random() * 6) + 1);
	return chamberPosition;
};

let fireGun = (i) => {
    
    if (i == bulletPosition) return ("You're dead!")//el problema esta aqui, dentro del parentesis del if. no encuentro el match correcto
    else return ("Keep playing!");
    
};

console.log(fireGun());

