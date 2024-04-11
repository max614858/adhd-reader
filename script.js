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

  let countSpeed = 40;
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
    chunk = ""
  })

  let chunk = ""
  let prevChunk = ""
  let contu = []
  let edtd = []
  let current = ""
  let ab;
  let bc;
  let ba;
  let indx = 0
  let oox = ""

  function animate() {
    requestAnimationFrame(animate)
    if (!stop) {
      count ++
      if (count >= countSpeed) {
        if (pArray[i].value != "undefined") {
        pArray[i] = "<mark> " + pArray[i] + " </mark> "
        chunk += pArray[i];
        if (i % 8 == 0) {
          contu.push(chunk)
          if (contu.length > 1) {
            current = contu[indx - 1];
            ab = current.replace(/<\s*mark\s*> /g, "");
            ba = ab.replace(/ <\s*\/\s*mark\s*>/g, "");
            bc = ba.replace(",", "")
            contu[indx-1] = bc
            oox = ""
            for (let i of contu) {
              oox += i
            }
            console.log(contu)
            paragraph.innerHTML = oox
          }
          prevChunk = chunk
          chunk = ""
          audio.play()
          indx++
        }
        }
        i++
        count = 0
      }
    
  }}
  animate();
})