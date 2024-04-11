addEventListener('DOMContentLoaded', function() {
  let paragraph = document.getElementById('paragraph')
  let textinput = document.getElementById('input')
  let pArray = []
const ok = [""];

for (let i of ok) {
  let cArray = (i.split(" "))
  for (let i of cArray) {
    pArray.push(i)
  }
  }


  let count = 0;
  let i = 0;
  let stop = false;
  document.addEventListener('keyup', function(event) {
    if (event.key != "ArrowUp" && event.key != "ArrowDown")
      switch (stop) {
        case true:
          stop = false;
          break;
        case false:
          stop = true;
          break;
        }
    if (event.key == "ArrowUp") {
      countSpeed -= 5;
    }
    else if(event.key == "ArrowDown") {
      countSpeed += 5;
    }


  })

  let countSpeed = 20;
  let copyPara;
  let temp = []
  let a;
  let b;
  let whole = []
  let audio = new Audio('unstuck.mp3')

  textinput.addEventListener('change', function(){
    whole = textinput.value.split(' ')
    pArray = whole
    i = 0
    paragraph.innerHTML = ""
  })

  function animate() {
    requestAnimationFrame(animate)
    if (!stop) {
      count ++
      if (count >= countSpeed) {
        if (pArray[i].value != "undefined") {
        pArray[i] = "<mark> " + pArray[i] + " </mark> "
        paragraph.innerHTML += pArray[i];
        audio.play()
        }
  
        
        


        i++
        count = 0
      }
    
  }}
  animate();
})