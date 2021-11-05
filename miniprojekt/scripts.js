const body = document.querySelector('body');
console.log(body);

for (let i = 0; i < 5; i++) {
    const numbers = document.createElement('h3');
    body.append(numbers);
    numbers.innerText = `Rad ${i + 1}`;
    numbers.style.textAlign = 'center';
    numbers.style.border = '2px';

    const textStorlek = i + 1 + `${i + 1}`;
    numbers.style.fontSize = `${textStorlek}px`;

    numbers.style.color = `purple`

}

const allLi = document.querySelectorAll('h3');
console.log(allLi);
console.log(allLi.length);

for (let i = 0; i < allLi.length; i++) {
    let hue = (70 / allLi.length) * i + 580;

    console.log('hue: ', hue);
    allLi[i].style.backgroundColor = `hsl(${hue}, 100%, 80%)`;
}



const div = document.createElement("div");
body.appendChild(div)
div.style.border = '2px solid black';
div.style.display = "flex";
div.style.flexWrap = 'wrap';
div.style.justifyContent = "space-evenly";

const number = document.createElement("ul");
div.appendChild(number);
number.style.border = "10px solid purple";
number.style.padding = 0;
for (let i = 0; i < 10; i++) {
    const h4 = document.createElement('li');
    number.appendChild(h4);
    h4.innerText = (`${i}`)
    console.log(h4);
    h4.style.listStyle = "none";
    h4.style.width = "40px";
    h4.style.textAlign = "left";
    if (i === 4) {
       h4.style.backgroundColor = "purple"
    }
    else if (i%2 === 0) {
       h4.style.backgroundColor = "black"
        h4.style.color = "white"
    }

}

const number2 = document.createElement("ul");
div.appendChild(number2);
number2.style.border = "10px solid purple";
number2.style.padding = 0;
for (let i = 9; i >= 0; i--) {
    const h5 = document.createElement('li');
    number2.appendChild(h5);
    h5.innerText = (`${i}`)
    console.log(h5);
    h5.style.listStyle = "none";
    h5.style.width = "40px";
    h5.style.textAlign = "center"
  if (i === 8) {
       h5.style.backgroundColor = "purple"
    }
    else if (i%2 === 0) {
       h5.style.backgroundColor = "black"
        h5.style.color = "white"
    }

}
const number3 = document.createElement("ul");
div.appendChild(number3);
number3.style.border = "10px solid purple";
number3.style.padding = 0;
let nummer = ["ett", "två", "tre", "fyra", "Fem", "sex", "sju", "åtta", "nio", "tio"]
console.log(typeof nummer, nummer, nummer.length);
for (let i = 0; i < nummer.length; i++) {
    const h6 = document.createElement('li');
    number3.appendChild(h6);
    h6.innerText = (nummer[i])
    h6.style.listStyle = "none";
    h6.style.width = "40px";
    h6.style.textAlign = "right";

    if (i%2 === 0) {
        h6.style.backgroundColor = "black"
        h6.style.color = "white"
    }
      else if (i === 5) {
        h6.style.backgroundColor = "purple"
    }
}