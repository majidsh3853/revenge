
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
    form.appendChild(submitButton);
  
    document.body.appendChild(form);
  
    // اضافه کردن یک رویداد برای کنترل ارسال فرم
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

  // ........................................................................

// 1. a template for diffrent questions.................
const body = document.querySelector("body");

function template() {
  return `<div id="container">
        <div id="question"></div>
        <div id="choices"></div>
    </div>`;
}
// adding it to html
// body.insertAdjacentHTML("afterbegin", template());

// 2. an Array..........................................

const tests = [
  {
    question: "Images/1/test1.png",
    choices: [
      "Images/1/1-1.png",
      "Images/1/1-2.png",
      "Images/1/1-3.png",
      "Images/1/1-4.png",
      "Images/1/1-5.png",
      "Images/1/1-6.png",
    ],
    answer: 0,
  },
  {
    question: "Images/1/test2.png",
    choices: [
      "Images/2/2-1.png",
      "Images/2/2-2.png",
      "Images/2/2-3.png",
      "Images/2/2-4.png",
      "Images/2/2-5.png",
      "Images/2/2-6.png",
    ],
    answer: 0,
  },
  {
    question: "Images/1/test1.png",
    choices: [
      "Images/3/3-1.png",
      "Images/3/3-2.png",
      "Images/3/3-3.png",
      "Images/3/3-4.png",
      "Images/3/3-5.png",
      "Images/3/3-6.png",
    ],
    answer: 0,
  },
];

//  3. we start form 0..................................( 3 for Amirhosein)****
let test = 0;
let score = 0;

// 4. loading the test with its question & choices......

function loadQuestion() {
  // variables......
  const questionDiv = document.querySelector("#question");
  const choicesDiv = document.querySelector("#choices");

  //   for question................................
  // the fist index of tests.......
  const currentTest = tests[test];

  //   create an img for the question........
  const QuestionImg = document.createElement("img");

  //   we select the src in the array for img src
  QuestionImg.src = currentTest.question;

  // add the question in html
  questionDiv.appendChild(QuestionImg);

  //   for choices................................
  currentTest.choices.forEach((choice, index)=>{
      //  create & add the choices in html
    const answerImg = document.createElement("img");
    answerImg.src = choice;
    choicesDiv.appendChild(answerImg);

    // onclick
    // answerImg.addEventListener("click", () => {
    //     checkAnswer(index);
    //   });
  });

};


// ( 5 & 6 for Amirhosein)****

// 5. checking the answer...............................
// function checkAnswer() {
    
// }

// 6. showing the result................................
