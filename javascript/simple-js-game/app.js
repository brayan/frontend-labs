const CHARACTER_ID = "character"
const BLOCK_ID = "block"

const ANIMATE_CLASS = "animate"

const JUMP_TIMEOUT_IN_MILLIS = 500

const character = document.getElementById(CHARACTER_ID)
const block = document.getElementById(BLOCK_ID)

document.onclick = jump

document.addEventListener('keyup', event => {
    if (event.code === 'Space') {
      jump()
    }
  })

function jump() {
    if (character.classList != ANIMATE_CLASS) {
        character.classList.add(ANIMATE_CLASS)
    }
    setTimeout(onFinishJumping, JUMP_TIMEOUT_IN_MILLIS)
}

function onFinishJumping() {
    character.classList.remove(ANIMATE_CLASS)
}

const checkDead = setInterval()
