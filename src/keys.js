export const DOWN = new Set
export const PRESSED = new Set

const NO_DEFAULT = new Set([
  'w',
  'a',
  's',
  'd',
  ' ',
  'ArrowUp',
  'ArrowDown',
  'ArrowLeft',
  'ArrowRight'
])

export const upKey = () => (
  DOWN.has('w') || DOWN.has('ArrowUp') || PRESSED.has(0) || PRESSED.has(12)
)

export const leftKey = () => (
  DOWN.has('a') || DOWN.has('ArrowLeft') || PRESSED.has(14)
)

export const rightKey = () => (
  DOWN.has('d') || DOWN.has('ArrowRight') || PRESSED.has(15)
)

document.addEventListener('keydown', (event) => {
  DOWN.add(event.key)
  if (NO_DEFAULT.has(event.key)) event.preventDefault()
})

document.addEventListener('keyup', ({key}) => {
  DOWN.delete(key)
})

//  Mobile control keys
// Mobile control keys
// Add '#' to select by ID - this is the key fix for your undefined error
const upButton = document.getElementById('up-button');
const rightButton = document.querySelector('#right-button');
const leftButton = document.querySelector('#left-button');
const toggleButton = document.getElementById('toggle-button');

if (upButton && rightButton && leftButton && toggleButton) {
    // Up button controls
    upButton.addEventListener('touchstart', (e) => {
      console.log('Touch started on up button');
      e.preventDefault(); // Prevent any default touch behavior
      e.stopPropagation(); // Stop event from bubbling up
      DOWN.add('w');
  }, { passive: false }); // Ensure preventDefault works

  // Add touchend event with logging
  upButton.addEventListener('touchend', (e) => {
      console.log('Touch ended on up button');
      e.preventDefault();
      e.stopPropagation();
      DOWN.delete('w');
  }, { passive: false });

  // Keep existing mouse events as fallback
  upButton.addEventListener('mousedown', (e) => {
      console.log('Mouse down on up button');
      DOWN.add('w');
  });

  upButton.addEventListener('mouseup', (e) => {
      console.log('Mouse up on up button');
      DOWN.delete('w');
  });

    // Right button controls
    rightButton.addEventListener('mousedown', (event) => {
        event.preventDefault()
        if(leftKey()) {
          DOWN.delete('a')
          leftButton.classList.remove("enabled")
        }
        if(rightKey()) {
          DOWN.delete('d')
          rightButton.classList.remove("enabled")
        } else {
          DOWN.add('d');
          rightButton.classList.add("enabled")
        }        
    });
    // rightButton.addEventListener('mouseup', () => {
    //     DOWN.delete('d');
    // });

    // Left button controls
    leftButton.addEventListener('mousedown', (event) => {
        event.preventDefault();
        if(rightKey()) {
          DOWN.delete('d')
          rightButton.classList.remove("enabled")
        }
        if(leftKey()) {
          DOWN.delete('a')
          leftButton.classList.remove("enabled")
        } else {
          DOWN.add('a');
          leftButton.classList.add("enabled")
        }        
    });
    // leftButton.addEventListener('mouseup', () => {
    //     DOWN.delete('a');
    // });

    // Toggle button controls
    // toggleButton.addEventListener('mousedown', () => {
    //   console.log("Toggle it")
    //     DOWN.add(' ');
    // });
    // toggleButton.addEventListener('mouseup', () => {
    //     DOWN.delete(' ');
    // });
} else {
    console.warn('Some control buttons could not be found on the page');
}

const HANDLERS = new Map
export const onPress = (index, f) => {
  if (!HANDLERS.has(index)) HANDLERS.set(index, [])
  HANDLERS.get(index).push(f)
}

requestAnimationFrame(function tick (time) {
  const pad = navigator.getGamepads()[0]
  if (!pad) {
    PRESSED.clear()
    return
  }
  pad.buttons.forEach((button, index) => {
    if (button.pressed) {
      if (!PRESSED.has(index)) {
        const handlers = HANDLERS.get(index)
        if (handlers) handlers.forEach((f) => f())
      }
      PRESSED.add(index)
    } else {
      PRESSED.delete(index)
    }
  })
  requestAnimationFrame(tick)
})
