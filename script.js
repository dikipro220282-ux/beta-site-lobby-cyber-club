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
link.style.color='#a855f7';
}

});

});

/* =========================
   LANGUAGE SWITCH (RU / EN)
========================= */

const langBtn = document.getElementById("langBtn");

const text = {
ru: {
about: "О клубе",
equipment: "Оборудование",
rates: "Тарифы",
games: "Игры",
media: "Медиа",
contacts: "Контакты",
ratesBtn: "Наши тарифы"
},
en: {
about: "About Club",
equipment: "Equipment",
rates: "Prices",
games: "Games",
media: "Media",
contacts: "Contacts",
ratesBtn: "Our Prices"
}
};

let currentLang = "ru";

if(langBtn){

langBtn.addEventListener("click", ()=>{

currentLang = currentLang === "ru" ? "en" : "ru";

langBtn.textContent = currentLang === "ru" ? "EN" : "RU";

const t = text[currentLang];

/* MENU */
document.querySelector('a[href="#about"]').textContent = t.about;
document.querySelector('a[href="#equipment"]').textContent = t.equipment;
document.querySelector('a[href="#rates"]').textContent = t.rates;
document.querySelector('a[href="#games"]').textContent = t.games;
document.querySelector('a[href="#media"]').textContent = t.media;
document.querySelector('a[href="#contacts"]').textContent = t.contacts;

/* TITLES */
const titles = document.querySelectorAll("section h2");
if(titles.length >= 6){
titles[0].textContent = t.about;
titles[1].textContent = t.equipment;
titles[2].textContent = t.rates;
titles[3].textContent = t.games;
titles[4].textContent = t.media;
titles[5].textContent = t.contacts;
}

/* HERO BUTTON */
const heroBtn = document.querySelector(".primary-btn");
if(heroBtn){
heroBtn.textContent = t.ratesBtn;
}

});
}