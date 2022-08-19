const agent = () => {
	return { agent:'Phoenix', color:'F92B2B' };
}

const getAgent = () => {
	switch (random()) {
	case 0:
		return { agent:'Phoenix', color:'F92B2B' };
	case 1:
		return { agent:'Jett', color:'FFFFFF' };
	case 2:
		return { agent:'Neon', color:'4279F0' };
	case 3:
		return { agent:'Yoru', color:'0A3591' };
	case 4:
		return { agent:'Reyna', color:'4F1153' };
	case 5:
		return { agent:'Raze', color:'B65618' };
	}
};

const random = () => {
	return Math.floor(Math.random() * 6);
};

console.log(agent().color);