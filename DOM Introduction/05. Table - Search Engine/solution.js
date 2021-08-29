function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      let searchString = document.getElementById('searchField').value
      let table = document.querySelectorAll("table tr td")
      for (let td of table) {
         td.parentElement.classList.remove('select')
      }
      for (let td of table) {
         if (td.textContent.toLowerCase().includes(searchString)) {
            td.parentElement.classList.add('select')
         }
      }
   }
}