let dynamic = document.getElementById("dynamic");
let noti = document.querySelector(".noti");
dynamic.addEventListener("mouseover", () => {
  // noti.style.display = "block";
  noti.style.transition = "all 2s ease";
  dynamic.style.width = "200px";
  noti.style.width = "250px";
  noti.style.height = "40px";
  noti.style.transition = "1s";
  // noti.style.translate='0 10px'
});

dynamic.addEventListener("mouseout", () => {
  // noti.style.display = "none";
  dynamic.style.width = "105px";
  noti.style.width = "0px";
  noti.style.transition = "0.2s";
  noti.style.height = "0px";
});

let i = document.getElementById("vol");
i.addEventListener("click", () => {
  if (i.style.color == "blue") {
    i.style.color = "white";
  } else {
    i.style.color = "blue";
  }
});
let is = document.querySelector(".pluse");
is.addEventListener("click", () => {
  if (is.style.color == "blue") {
    is.style.color = "white";
  } else {
    is.style.color = "blue";
  }
});
let textarea = document.getElementById("textarea"),
  iss = document.querySelector(".notes"),
  not = document.getElementById("not");

iss.addEventListener("click", () => {
  if (iss.style.color == "blue") {
    iss.style.color = "white";
    textarea.style.display = "none";
    not.style.display = "none";
  } else {
    iss.style.color = "blue";
    textarea.style.display = "block";
    not.style.display = "block";
    iss.style.transition = "0.2s ease";
  }
});
let ias = document.querySelector(".slesh");
ias.addEventListener("click", () => {
  if (ias.style.color == "blue") {
    ias.style.color = "white";
  } else {
    ias.style.color = "blue";
  }
});
let iass = document.querySelector(".hold");
iass.addEventListener("click", () => {
  if (iass.style.color == "blue") {
    iass.style.color = "white";
  } else {
    iass.style.color = "blue";
  }
});
let iasa = document.querySelector(".rcord");
iasa.addEventListener("click", () => {
  if (iasa.style.color == "blue") {
    iasa.style.color = "white";
  } else {
    iasa.style.color = "blue";
  }
});

let ii = document.querySelector(".fa-video");
ii.addEventListener("click", () => {
  if (ii.style.color == "blue") {
    ii.style.color = "white";
  } else {
    ii.style.color = "blue";
  }
});

let a = document.getElementById("col1");
let s = document.getElementById("col");
s.addEventListener("click", () => {
  if ((s.style.color == "blue", a.style.color == "blue")) {
    s.style.color = "white";
    a.style.color = "white";
  } else {
    (s.style.color = "blue"), (a.style.color = "blue");
  }
});

let callDialer = document.querySelector(".call-dialer");
let logiiii = document.querySelector(".log");
logiiii.addEventListener("click", () => {
  callDialer.style.width = "280px";
  callDialer.style.height = "568px";
  logiiii.style.display = "none";
  bck.style.opacity = "1";
  bck.style.transition = "1s ease";
  callDialer.style.transition = "0.2s ease-in";
});

let bck = document.querySelector(".fa-arrow-left"),
  nor = document.getElementById("not");
bck.addEventListener("click", () => {
  pop.style.translate = "0 0";
  contacts.style.display = "none";
  // pop.style.transition='9s ease-in'
  sub.style.transitionDelay = "3s";
  textarea.style.display = "none";
  not.style.display = "none";
});
let sub = document.getElementById("submit");
bck.addEventListener("dblclick", () => {
  // callDialer.style.display='none'
  sub.style.display = "block";
  callDialer.style.width = "0";
  callDialer.style.height = "0";
  callDialer.style.transition = "0.3s ease-in";
  bck.style.opacity = "0";
  sub.style.transitionDelay = "3s";
  logiiii.style.display = "block";
});

// yaha se html ka he is liye dekh ke kaam kare
let result = document.getElementById("textinput");
function insert(value) {
  result.value += value;
}
function deletes() {
  result.value = result.value.slice(0, -1);
}

let del = document.querySelector(".back");
result.style.display = "none";
del.style.display = "none";
document.addEventListener("click", () => {
  del.style.display = "block";
  result.style.display = "block";
});
let callicons = document.querySelector("#conCall");
let pop = document.getElementById("suport");
var phone = document.querySelector(".phone");
phone.addEventListener("click", () => {
  if (((pop.style.translate = "0 -602px"), (pop.style.display = "block"))) {
    pop.style.transition = "0.2s ease-in";
  } else {
  }
});
callicons.addEventListener("click", () => {
  pop.style.display = "block";
  pop.style.translate = "0 -602px";
});
let spa = document.getElementById("spa");
phone.addEventListener("mouseover", () => {
  spa.style.display = "block";
});
phone.addEventListener("mouseout", () => {
  spa.style.display = "none";
});

let contacts = document.querySelector(".contacts"),
  contact = document.querySelector(".contact"),
  contect = document.querySelector(".fa-users");
contect.addEventListener("click", () => {
  contacts.style.display = "block";
  contect.style.color = "";
  contact.style.color = "red";
});

let searchinput = document.getElementById("search"),
  searchicon = document.querySelector(".fa-search");
searchicon.addEventListener("click", () => {
  searchinput.style.width = "85%";
  searchinput.style.opacity = "1";
});

// dbl click
searchicon.addEventListener("dblclick", () => {
  searchinput.style.width = "0%";
  searchinput.style.opacity = "0";
});
let neve = document.querySelector(".neve");
contacts.addEventListener("scroll", () => {
  const scrollTop = contacts.scrollTop;
  if (scrollTop > 50) {
    // contacts.style.background='red'
    neve.style.display = "block";
    bck.style.color = "white";
    searchicon.style.color = "white";
    searchinput.style.outline = "2px solid white";
    searchinput.style.color = "white";
  } else {
    // contacts.style.background='white'
    neve.style.display = "none";
    bck.style.color = "black";
    searchicon.style.color = "black";
    searchinput.style.outline = "2px solid black";
    searchinput.style.color = "black";
  }
});
