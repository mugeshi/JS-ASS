let player1 = "",
    player2 = ""
intro = true;

const gameDisplay = document.querySelector('#game');
const introDisplay = document.querySelector('#intro')
const player1Input = document.querySelector('#player1')
const player2Input = document.querySelector('#player2')
const submitBtn = document.querySelector('#submitBtn');

const onSubmitNames = () => {
    // TODO: validation  to check if it's empty
    const player1Name = player1Input.value;
    const player2Name = player2Input.value;

    player1 = player1Name;
    player2 = player2Name;

    console.log({ player1, player2 });
    changeMode();
}

const changeMode = () => {
    intro = !intro;
    gameDisplay.classList.toggle("hidden")
    introDisplay.classList.toggle("hidden")
}

submitBtn.addEventListener('click', onSubmitNames)