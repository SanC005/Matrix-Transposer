const allCells = document.querySelectorAll(".cell");
const transButton = document.getElementsByClassName('btn')[0]
let array = [];
// console.log(transButton)
transButton.addEventListener('click', (e) => {
    Array.from(allCells).forEach((e) => {
      array.push(e.value)
      
    });
    console.log(array)
    const newArr = [];
    while(array.length) newArr.push(array.splice(0,3));

    transpose(newArr)
    console.log(newArr)
    printele(newArr);
});

const transpose = arr => {
    for (let i = 0; i < arr.length; i++) {
       for (let j = 0; j < i; j++) {
          const tmp = arr[i][j];
          arr[i][j] = arr[j][i];
          arr[j][i] = tmp;
       };
    }
 }
function printele(arr){
    // const output = document.createElement('div');
    const ans=document.querySelector('.ans')
    ans.innerHTML = `<h1>The transpose is</h1><br>
    <input type="text" class="cell" id="b1" value="${arr[0][0]}" readonly>
    
    <input type="text" class="cell" id="b2" value="${arr[0][1]}" readonly>
    
    <input type="text" class="cell" id="b3" value="${arr[0][2]}" readonly>
    <br><br>
    
    <input type="text" class="cell" id="b4" value="${arr[1][0]}" readonly>
    
    <input type="text" class="cell" id="b5" value="${arr[1][1]}" readonly>
    
    <input type="text" class="cell" id="b6" value="${arr[1][2]}" readonly>
    <br><br>
    
    <input type="text" class="cell" id="b7" value="${arr[2][0]}" readonly>
    
    <input type="text" class="cell" id="b8" value="${arr[2][1]}" readonly>
    
    <input type="text" class="cell" id="b9" value="${arr[2][2]}" readonly>`
    console.log(ans)

    document.append(ans)
}

