function create(words) {
   let content = document.getElementById('content');
   for (const section of words) {
      let newDiv = document.createElement('div')
      let newP = document.createElement('p')
      newP.textContent = section
      newP.style.display = 'none';
      newDiv.appendChild(newP);
      newDiv.addEventListener('click', function(e){
         e.currentTarget.childNodes[0].style.display  = 'block'
      }) 
      content.appendChild(newDiv)
   }
}