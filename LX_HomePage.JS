// -------------- 平滑滚动 --------------
document.querySelectorAll('a[href^="#"]').forEach(anchor=>{
    anchor.addEventListener('click',function(e){
        e.preventDefault();
        const tgt=document.querySelector(this.getAttribute('href'));
        if(tgt) tgt.scrollIntoView({behavior:'smooth',block:'start'});
        // 移动端关闭菜单
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// -------------- 导航高亮 --------------
const sections=document.querySelectorAll('section');
const navLinks=document.querySelectorAll('.nav-menu a');
window.addEventListener('scroll',()=>{
    let cur='';
    sections.forEach(sec=>{
        const secTop=sec.offsetTop-100;
        if(scrollY>=secTop) cur=sec.getAttribute('id');
    });
    navLinks.forEach(link=>{
        link.classList.toggle('active',link.getAttribute('href').slice(1)===cur);
    });
});

// -------------- 汉堡菜单 --------------
const hamburger=document.getElementById('hamburger');
const navMenu=document.getElementById('navMenu');
hamburger.addEventListener('click',()=>{
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// -------------- 页脚年份 --------------
document.getElementById('year').textContent=new Date().getFullYear();