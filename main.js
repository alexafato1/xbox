
function openModal(){
  const menuBtn = document.querySelector('.menu-burger');
  const menu = document.querySelector('.header__nav');
  menuBtn.addEventListener('click', function(){
    menuBtn.classList.toggle('openBtn')
    if(menuBtn.classList.contains('openBtn')){
      menu.style.display = 'flex'
      menu.classList.add('menu-open');}
      else{
        menu.style.display = 'none'
        menu.classList.remove('menu-open');
      }
  })
}

function openVideo(){
  
const openVideo = document.querySelectorAll('.slide .btn-green');
const mainVideo =  document.querySelectorAll('.slide .main__video');
const close = document.querySelectorAll('.close')

  openVideo.forEach(btn =>{
    btn.addEventListener('click', function(e){
    mainVideo.forEach(video =>{
     video.style.display = 'block';
     const players = video.querySelectorAll('.player')
     players.forEach(player=>{
      const src = player.getAttribute('src')
     close.forEach(btnClose => {
      btnClose.addEventListener('click', function(){
        video.style.display = 'none'; 
        player.setAttribute('src', src)
      }) 
     });
     })
    
    })
  })
})
}

function slideShoe(i){
  const slides = document.querySelectorAll('.slide');
   
  slides.forEach(slide =>{
    slide.classList.remove('active');  
  })
  slides[i].classList.add('active');
}

function carousel(){
  const slides = document.querySelectorAll('.slide');
  const next = document.querySelector('#next');
  const prev = document.querySelector('#prev');
  let i = 0;
  console.log(i);
  
  next.addEventListener('click', function(){
    i++;
    if(i > slides.length - 1){
      i = 0
    }
    console.log(i)
    
    slideShoe(i)
  })
  prev.addEventListener('click', function(){
    i--;
    if(i < 0){
      i = slides.length - 1
    }
    
    slideShoe(i)
  })

}


document.addEventListener("DOMContentLoaded",() => {
  openModal()
   openVideo();
   carousel()
});