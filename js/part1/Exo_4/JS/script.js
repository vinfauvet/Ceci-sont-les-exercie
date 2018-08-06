var nb = prompt('Choisir un nombre entre 1 et 4');
var a = document.getElementById('a');
var b = document.getElementById('b');
var c = document.getElementById('c');
var main = document.getElementById('main');



if (nb == 1) {
main.style.display = 'flex';
main.style.width = '300px';
main.style.border = '2px solid black';
a.style.height = '200px';
a.style.width = '100px';
a.style.background = 'blue';
a.style.border = "1px solid blue";
b.style.height = '200px';
b.style.width = '100px';
c.style.height = '200px';
c.style.width = '100px';
c.style.background = 'red';
c.style.border = "1px solid red";

}
else if (nb == 2) {
  main.style.border = '2px solid black';
  main.style.width = '600px';
  a.style.height = '100px';
  a.style.background = 'red';
  a.style.border = "1px solid red";
  b.style.height = '100px';
  c.style.height = '100px';
  c.style.background = 'blue';
  c.style.border = "1px solid blue";

}
else if (nb == 3) {
  main.style.display = 'flex';
  main.style.width = '300px';
  main.style.border = '2px solid black';
  a.style.height = '200px';
  a.style.width = '100px';
  a.style.background = 'black';
  a.style.border = "1px solid black";
  b.style.height = '200px';
  b.style.width = '100px';
  b.style.background = 'yellow';
  b.style.border = "1px solid yellow";
  c.style.height = '200px';
  c.style.width = '100px';
  c.style.background = 'red';
  c.style.border = "1px solid red";
}
else if (nb == 4) {
  main.style.border = '2px solid black';
  main.style.width = '600px';
  a.style.height = '100px';
  b.style.background = 'blue';
  b.style.border = "1px solid blue";
  b.style.height = '100px';
  c.style.height = '100px';
  c.style.background = 'red';
  c.style.border = "1px solid red";

}
else {
  a.innerHTML = "Perdu";
}
