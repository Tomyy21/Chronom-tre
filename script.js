// Les variables font on a besoins
var sp, btn_start, btn_stop, t, ms, s, mn, h;

// fontcion pour initialiser les variables
window.onload = function () {
  sp = document.getElementsByTagName("span");
  btn_start = document.getElementById("start");
  btn_stop = document.getElementById("stop");
  t;
  (ms = 0), (s = 0), (mn = 0), (h = 0);
};

// mettre en place le compteur

function update_chrono() {
  ms += 1;
  if (ms == 100) {
    ms = 1;
    s += 1;
  }
  if (s == 60) {
    s = 0;
    mn += 1;
  }
  if (mn == 60) {
    mn = 0;
    h += 1;
  }

  sp[0].innerHTML = h + "h";
  sp[1].innerHTML = mn + "min";
  sp[2].innerHTML = s + "s";
  sp[3].innerHTML = ms + "ms";
}

function start() {
  t = setInterval(update_chrono, 10);
  btn_start.disabled = true;
}

// Stop

function stop() {
  clearInterval(t);
  btn_stop.disabled = false;
}

// Reset

function reset() {
  clearInterval(t);
  btn_start.disabled = false;
  (ms = 0), (s = 0), (mn = 0), (h = 0);
  sp[0].innerHTML = h + "h";
  sp[1].innerHTML = mn + "min";
  sp[2].innerHTML = s + "s";
  sp[3].innerHTML = ms + "ms";
}
