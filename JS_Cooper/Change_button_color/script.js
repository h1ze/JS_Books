let btnRed = document.getElementById("btnRed");

console.dir(btnRed);

btnRed.onclick = function () {
  alert("На меня нажали левой кнопкой мыши!");
};

// btnRed.oncontextmenu = function () {
//   alert("На меня нажали правой кнопкой мыши!");
// };

btnRed.addEventListener("contextmenu", function () {
  alert("На меня нажали правой кнопкой мыши!");
});

btnRed.onmouseenter = function () {
  alert("На бедную красненькую кнопочку нацелились!");
};

btnRed.addEventListener("wheel", function () {
  alert("На мне вращают колесиком!");
});
