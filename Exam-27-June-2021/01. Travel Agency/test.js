function solution() {
    // inputs
    let inputName = document.getElementById('fname');
    let inputEmail = document.getElementById('email');
    let inputPhone = document.getElementById('phone');
    let inputAddress = document.getElementById('address');
    let inputPostCode = document.getElementById('code');
   
    let name;
    let email ;
    let phone ;
    let address ;
    let code;
   
    // submit Btn
    let submitBtn = document.getElementById('submitBTN');
   
    // UL
    let getUl = document.getElementById('infoPreview');
   
    submitBtn.addEventListener('click', () => {
      //let pattern = /([a-zA-Z]{2,}\s[a-zA-Z]{1,})/;
      if (inputEmail.value === '' || inputName.value === '') {
        return;
      }
   
       name = inputName.value;
       email = inputEmail.value;
       phone = inputPhone.value;
       address = inputAddress.value;
       code = inputPostCode.value;
   
      // create li elements, set textContent, append to UL (using function)
      createEl('li', 'Full Name: ' + inputName.value, getUl);
      createEl('li', 'Email: ' + inputEmail.value, getUl);
      createEl('li', 'Phone Number: ' + inputPhone.value, getUl);
      createEl('li', 'Address: ' + inputAddress.value, getUl);
      createEl('li', 'Postal Code: ' + inputPostCode.value, getUl);
   
      // clear input fields
      clearInputFields();
   
      // disable submit btn
      submitBtn.disabled = true;
   
      // enable edit and continue btns
      document.getElementById('editBTN').disabled = false;
      document.getElementById('continueBTN').disabled = false;
    });
   
    document.getElementById('editBTN').addEventListener('click', () => {
      // remove all LI elements form the UL
      document.getElementById('infoPreview').innerHTML = '';
   
      inputName.value = name;
      inputEmail.value = email;
      inputPhone.value = phone;
      inputAddress.value = address;
      inputPostCode.value = code;
     
      // disable edit and continue btn
      document.getElementById('editBTN').disabled = true;
      document.getElementById('continueBTN').disabled = true;
      // enable submit button
      submitBtn.disabled = false;
    });
   
    // DIV
    let getDivBlock = document.getElementById('block');
   
    document.getElementById('continueBTN').addEventListener('click', () => {
      getDivBlock.innerHTML = '';
      createEl('h3', `Thank you for your reservation!`, getDivBlock)
    });
    
    function createEl(type, content, parent) {
      const element = document.createElement(type);
      element.textContent = content;
      if (parent) {
        parent.appendChild(element);
      }
      return element;
    }
   
    function clearInputFields() {
      inputName.value = "";
      inputEmail.value = "";
      inputPhone.value = "";
      inputAddress.value = "";
      inputPostCode.value = "";
    }
  }