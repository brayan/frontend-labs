const CHARACTER_ID = "character"
const BLOCK_ID = "block"

const ANIMATE_CLASS = "animate"

const JUMP_TIMEOUT_IN_MILLIS = 500

const character = document.getElementById(CHARACTER_ID)
const block = document.getElementById(BLOCK_ID)

document.onclick = jump

document.addEventListener("keyup", event => {
    if (event.code === "Space") {
      jump()
    }
  })

setInterval(checkIfIsDead, 10);

function jump() {
  if (character.classList != ANIMATE_CLASS) {
      character.classList.add(ANIMATE_CLASS)
  }
  setTimeout(onFinishJumping, JUMP_TIMEOUT_IN_MILLIS)
}

function onFinishJumping() {
  character.classList.remove(ANIMATE_CLASS)
}

function checkIfIsDead() {
  const characterStyle = window.getComputedStyle(character)
  const blockStyle = window.getComputedStyle(block)

  const characterTop = parseInt(characterStyle.getPropertyValue("top"))
  const blockLeft = parseInt(blockStyle.getPropertyValue("left"))

  if (blockLeft < 20 && blockLeft > 0 && characterTop >= 130) {
    block.style.animation = "none"
    block.style.display = "none"

    alert("You lose :(")
  }
}
