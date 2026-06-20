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