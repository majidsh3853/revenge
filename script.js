// let body = document.querySelector("body")

// // let load = addEventListener("load", temp1())

// function temp1 (){
//    return `<div class="tests" id="test1">
//         <div id="q1">
//             <img  src="Images/1/test1.png" alt="">
//         </div>
//         <div id="answers">
//             <img src="Images/1/1-1.png" alt="">
//             <img src="Images/1/1-2.png" alt="">
//             <img src="Images/1/1-3.png" alt="">
//             <img src="Images/1/1-4.png" alt="">
//             <img src="Images/1/1-5.png" alt="">
//             <img src="Images/1/1-6.png" alt="">
//         </div>
//     </div>`
// }

// body.insertAdjacentHTML('afterbegin', temp1() );

// console.log(body);



// تابع برای ایجاد فرم و عناصر آن به صورت پویا
function createForm() {
    
    const form = document.createElement('form');
    form.setAttribute('id', 'myForm');
  
    const nameLabel = document.createElement('label');
    nameLabel.setAttribute('for', 'name');
    nameLabel.textContent = 'Name:';
    form.appendChild(nameLabel);
  
    const nameInput = document.createElement('input');
    nameInput.setAttribute('type', 'text');
    nameInput.setAttribute('id', 'name');
    nameInput.setAttribute('required', 'true');
    form.appendChild(nameInput);
  
    const lineBreak = document.createElement('br');
    
    form.appendChild(lineBreak);
   
  
    const ageLabel = document.createElement('label');
    ageLabel.setAttribute('for', 'age');
    ageLabel.textContent = 'Age:';
    form.appendChild(ageLabel);
  
    const ageInput = document.createElement('input');
    ageInput.setAttribute('type', 'number');
    ageInput.setAttribute('id', 'age');
    ageInput.setAttribute('required', 'true');
    form.appendChild(ageInput);
  
    const submitButton = document.createElement('input');
    submitButton.setAttribute('type', 'submit');
    submitButton.setAttribute('value', 'Submit');
    submitButton.setAttribute('id', 'submitButton');
    form.appendChild(submitButton);
  
    document.body.appendChild(form);
  
    // اضافه کردن یک گوش‌گیری رویداد برای کنترل ارسال فرم
    form.addEventListener('submit', handleSubmit);
  }
  
  // تابع برای کنترل ارسال فرم
  function handleSubmit(event) {
    event.preventDefault(); // جلوگیری از ارسال فرم برای جلوگیری از بازنشانی صفحه
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
  
    if (name && age) {
      // فراخوانی توابع برای کنترل ورودی‌های نام و سن
      saveNameToLocalStorage(name);
      saveAgeToLocalStorage(age);
  
      alert('اطلاعات با موفقیت ذخیره شد!');
      // می‌توانید از اینجا منطق دیگری را اضافه کنید، مثلاً هدایت به صفحه دیگر.
    } else {
      alert('لطفاً همه‌ی فیلدها را پر کنید.');
    }
  }
  
  // تابع برای ذخیره‌سازی نام در لوکال استوریج
  function saveNameToLocalStorage(name) {
    localStorage.setItem('name', name);
  }
  
  // تابع برای ذخیره‌سازی سن در لوکال استوریج
  function saveAgeToLocalStorage(age) {
    localStorage.setItem('age', age);
  }
  
  // ساخت فرم هنگام اجرای اسکریپت
  createForm();