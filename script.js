const nav = document.querySelector('header nav');
  
  function bgImg(img, color)
  {

    const image = document.querySelector('.image');
    const home = document.querySelector('.home');

    image.src = img;
    home.style.background = color;
    nav.style.background = color;

  }

  const dot = document.querySelectorAll('.dots img');

  function active()
  {
    dot.forEach((item) => 
    {
      item.classList.remove('active');
      this.classList.add('active');
    })
  }

  dot.forEach((item) => 
  {
    item.addEventListener('click', active)
  })

const icon = document.querySelector('.bx-menu')
icon.onclick = () =>
{
  nav.classList.toggle('ativo')
}