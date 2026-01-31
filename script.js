const loader=document.getElementById("loader");
const nav=document.getElementById("nav");
const menuBtn=document.getElementById("menuBtn");
const themeBtn=document.getElementById("themeBtn");
const html=document.documentElement;
const logo=document.getElementById("navLogo");

// LOADER
window.addEventListener("load",()=>{
  setTimeout(()=>{
    loader.style.opacity="0";
    setTimeout(()=>loader.remove(),1200);
  },1900);
});

// NAV
menuBtn.onclick=()=>nav.classList.toggle("active");

// THEME
themeBtn.onclick=()=>{
  if(html.dataset.theme==="dark"){
    html.dataset.theme="light";
    themeBtn.textContent="НОЧЬ";
    logo.src="img/logo2.jpg";
  }else{
    html.dataset.theme="dark";
    themeBtn.textContent="ДЕНЬ";
    logo.src="img/logo.jpg";
  }
};

// REVEAL
const reveals=document.querySelectorAll(".reveal");
const obs=new IntersectionObserver(entries=>{
  entries.forEach(e=>{
    if(e.isIntersecting)e.target.classList.add("active");
  });
},{threshold:.2});

reveals.forEach(r=>obs.observe(r));

// SMOOTH SCROLL NAV
document.querySelectorAll('#nav a').forEach(link=>{
  link.addEventListener('click', e=>{
    e.preventDefault();

    const id = link.getAttribute('href');
    const target = document.querySelector(id);

    if(target){
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }

    nav.classList.remove('active');
  });
});

