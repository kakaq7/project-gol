document.addEventListener('DOMContentLoaded',()=>{
  const toggle=document.querySelector('.menu-toggle');
  const wrap=document.querySelector('.nav-wrap');
  if(toggle) toggle.addEventListener('click',()=>wrap.classList.toggle('open'));
  document.querySelectorAll('.nav a').forEach(a=>a.addEventListener('click',()=>wrap?.classList.remove('open')));
  document.querySelectorAll('.filter').forEach(btn=>btn.addEventListener('click',()=>{
    document.querySelectorAll('.filter').forEach(x=>x.classList.remove('active')); btn.classList.add('active');
  }));
});
function demoSubmit(e){
  e.preventDefault();
  const m=document.getElementById('formMessage');
  if(m){m.textContent='Terima kasih. Minat kontribusi Anda sudah tercatat di prototipe ini.';}
  e.target.reset();
  return false;
}