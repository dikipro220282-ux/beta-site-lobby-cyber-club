const sections = document.querySelectorAll(
'.card,.rate-card,.stat-card,.media-photo,.media-video,.contacts-content'
);

sections.forEach(section=>{
section.classList.add('reveal');
});

const observer=new IntersectionObserver(entries=>{
entries.forEach(entry=>{
if(entry.isIntersecting){
entry.target.classList.add('active');
}
});
},{
threshold:0.15
});

sections.forEach(section=>{
observer.observe(section);
});

const glow=document.createElement('div');
glow.className='cursor-glow';
document.body.appendChild(glow);

document.addEventListener('mousemove',e=>{
glow.style.left=e.clientX+'px';
glow.style.top=e.clientY+'px';
});

const hero=document.querySelector('.hero-content');

if(hero){
document.addEventListener('mousemove',e=>{
const x=(window.innerWidth/2-e.clientX)/50;
const y=(window.innerHeight/2-e.clientY)/50;
hero.style.transform=`translate(${x}px,${y}px)`;
});
}

const navLinks=document.querySelectorAll('nav a[href^="#"]');

navLinks.forEach(link=>{
link.addEventListener('click',e=>{
e.preventDefault();
const target=document.querySelector(link.getAttribute('href'));

if(target){
window.scrollTo({
top:target.offsetTop-110,
behavior:'smooth'
});
}
});
});

window.addEventListener('scroll',()=>{
let current='';

document.querySelectorAll('section[id]').forEach(section=>{
const sectionTop=section.offsetTop-150;
if(window.scrollY>=sectionTop){
current=section.id;
}
});

navLinks.forEach(link=>{
link.style.color='#fff';
if(link.getAttribute('href')==='#'+current){
link.style.color='#a855f6';
}
});
});

/* =========================
   FULL LANGUAGE SYSTEM
========================= */

const langBtn=document.getElementById("langBtn");

const t={
ru:{
about:"О клубе",
equipment:"Оборудование",
rates:"Тарифы",
games:"Игры",
media:"Медиа",
contacts:"Контакты",
ratesBtn:"Наши тарифы",

vip:"ВИП зона",
standard:"Стандарт",
iron1:"Железо (общий зал)",
iron2:"Железо (VIP)",

address:"Адрес",
phone:"Телефон",
insta:"Instagram"
},

en:{
about:"About Club",
equipment:"Equipment",
rates:"Prices",
games:"Games",
media:"Media",
contacts:"Contacts",
ratesBtn:"Our Prices",

vip:"VIP Zone",
standard:"Standard",
iron1:"PC Setup (Main Hall)",
iron2:"PC Setup (VIP)",

address:"Address",
phone:"Phone",
insta:"Instagram"
}
};

let lang="ru";

function update(){
document.querySelector('a[href="#about"]').textContent=t[lang].about;
document.querySelector('a[href="#equipment"]').textContent=t[lang].equipment;
document.querySelector('a[href="#rates"]').textContent=t[lang].rates;
document.querySelector('a[href="#games"]').textContent=t[lang].games;
document.querySelector('a[href="#media"]').textContent=t[lang].media;
document.querySelector('a[href="#contacts"]').textContent=t[lang].contacts;

/* TITLES */
const h2=document.querySelectorAll("section h2");
if(h2.length>=6){
h2[0].textContent=t[lang].about;
h2[1].textContent=t[lang].equipment;
h2[2].textContent=t[lang].rates;
h2[3].textContent=t[lang].games;
h2[4].textContent=t[lang].media;
h2[5].textContent=t[lang].contacts;
}

/* EQUIPMENT CARDS */
const cards=document.querySelectorAll("#equipment .card h3");
if(cards.length>=4){
cards[0].textContent=t[lang].vip;
cards[1].textContent=t[lang].standard;
cards[2].textContent=t[lang].iron1;
cards[3].textContent=t[lang].iron2;
}

/* HERO BUTTON */
const heroBtn=document.querySelector(".primary-btn");
if(heroBtn){
heroBtn.textContent=t[lang].ratesBtn;
}
}

if(langBtn){
langBtn.addEventListener("click",()=>{
lang=lang==="ru"?"en":"ru";
langBtn.textContent=lang==="ru"?"EN":"RU";
update();
});
}

update();