const section = document.querySelectorAll('.section');
const sectBtns = document.querySelectorAll('.controlles');
const sectBtn = document.querySelectorAll('.control');
const allSections = document.querySelector('.main-container');

function pageTranstions() {
  // button clicked active class

  for (let i = 0; i < sectBtn.length; i++) {
    sectBtn[i].addEventListener('click', function () {
      let currentBtn = document.querySelectorAll('.active-btn');
      currentBtn[0].className = currentBtn[0].className.replace(
        ' active-btn',
        ''
      );
      this.className += ' active-btn';
    });
   }
   
   // section Active class
   allSections.addEventListener('click', (e) => {
      const id = e.target.dataset.id;
      if (id) {
         // remove selected from the other
         sectBtns.forEach((btn)=>{
            btn.classList.remove('active');
         })
         e.target.classList.add('active')

         // hide other sections

         section.forEach((section)=> {
           section.classList.remove('active') 
         })

         const element = document.getElementById(id);
         element.classList.add('active');
      }
   })
}

pageTranstions();
