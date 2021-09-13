const tile = document.querySelectorAll('.tile');
let checkTurn = true;
const playerX = 'X';
const playerO = 'O';

const combo = [
	[0,1,2],
	[3,4,5],
	[6,7,8],
	[0,3,6],
	[1,4,7],
	[2,5,8],
	[0,4,8],
	[2,4,6]
];

document.addEventListener("click", (event) => {
	if(event.target.matches('.tile')) {
		play(event.target.id);
	}
});

function play(id) {
	const tile = document.getElementById(id);
	turn = checkTurn ? playerX : playerO;
	tile.textContent = turn;
	tile.classList.add(turn);
	checkWinner(turn);
}

function checkWinner(turn) {
	const winner = combo.some((comb)	 => {
		return comb.every((index) => {
			return tile[index].classList.contains(turn);
		})
	});

	if(winner){
		endGame(turn);
	} else if (checkDraw()) {
		endGame();
	} else {
		checkTurn = !checkTurn;
	}
}

function checkDraw() {
	let x = 0;
	let o = 0;

	for(index in tile) {
		if(!isNaN(index)) {
		if(tile[index].classList.contains(playerX)) {
			x++;
		}

		if(tile[index].classList.contains(playerO)) {
			o++;
			}
		}
	}

	return x + o === 9 ? true : false;
}

function endGame(winner = null) {

	const darkScreen = document.getElementById('darkScreen');
	const h2 = document.createElement("h2");
	const h3 = document.createElement("h3");
	let message = null;

	darkScreen.style.display = 'block';
	darkScreen.appendChild(h2);
	darkScreen.appendChild(h3);


	if (winner) {
		h2.innerHTML = 'O jogador ' + winner + ' venceu!';
	} else {
		h2.innerHTML = 'Deu velha!';	
	}

	let count = 3;
	setInterval(() => {
		h3.innerHTML = 'Reiniciando em ' + count-- + ' segundos';
	}, 1000); 
	setTimeout(() => location.reload(), 4000);
}
