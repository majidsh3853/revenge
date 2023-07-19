// تابع برای ایجاد فرم و عناصر آن به صورت پویا
// function createForm() {
//   const form = document.createElement("form");
//   form.setAttribute("id", "myForm");

//   const nameLabel = document.createElement("label");
//   nameLabel.setAttribute("for", "name");
//   nameLabel.textContent = "Name:";
//   form.appendChild(nameLabel);

//   const nameInput = document.createElement("input");
//   nameInput.setAttribute("type", "text");
//   nameInput.setAttribute("id", "name");
//   nameInput.setAttribute("required", "true");
//   form.appendChild(nameInput);

//   const lineBreak = document.createElement("br");

//   form.appendChild(lineBreak);

//   const ageLabel = document.createElement("label");
//   ageLabel.setAttribute("for", "age");
//   ageLabel.textContent = "Age:";
//   form.appendChild(ageLabel);

//   const ageInput = document.createElement("input");
//   ageInput.setAttribute("type", "number");
//   ageInput.setAttribute("id", "age");
//   ageInput.setAttribute("required", "true");
//   ageInput.setAttribute("max", "100");
//   ageInput.setAttribute("min", "7");
//   form.appendChild(ageInput);

//   const submitButton = document.createElement("input");
//   submitButton.setAttribute("type", "submit");
//   submitButton.setAttribute("value", "Submit");
//   submitButton.setAttribute("id", "submitButton");
//   form.appendChild(submitButton);

//   document.body.appendChild(form);

//   // اضافه کردن یک گوش‌گیری رویداد برای کنترل ارسال فرم
//   form.addEventListener("submit", handleSubmit);
// }

// // تابع برای کنترل ارسال فرم
// function handleSubmit(event) {
//   event.preventDefault(); // جلوگیری از ارسال فرم برای جلوگیری از بازنشانی صفحه
//   const name = document.getElementById("name").value;
//   const age = document.getElementById("age").value;

//   if (name && age) {
//     // فراخوانی توابع برای کنترل ورودی‌های نام و سن
//     saveNameToLocalStorage(name);
//     saveAgeToLocalStorage(age);

//     alert("اطلاعات با موفقیت ذخیره شد!");
//     // می‌توانید از اینجا منطق دیگری را اضافه کنید، مثلاً هدایت به صفحه دیگر.
//   } else {
//     alert("لطفاً همه‌ی فیلدها را پر کنید.");
//   }
// }

// // تابع برای ذخیره‌سازی نام در لوکال استوریج
// function saveNameToLocalStorage(name) {
//   localStorage.setItem("name", name);
// }

// // تابع برای ذخیره‌سازی سن در لوکال استوریج
// function saveAgeToLocalStorage(age) {
//   localStorage.setItem("age", age);
// }

// // ساخت فرم هنگام اجرای اسکریپت
// createForm();


 // ........................................................................

// 1. a template for diffrent questions.................
const body = document.querySelector("body");

function template() {
  return `<div id="container">
        <div id="question"></div>
        <button id="choices"></button>
    </div>`;
}
// adding it to html
body.innerHTML = template();


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
    question: "Images/1/test1.png",
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


 //  3. we start form 0..................................

let test = 0;
let score = 0;
// console.log(tests[test]);
// console.log(test);

// 4. loading the test with its question & choices......

function loadQuestion() {
  // variables......
  const questionDiv = document.querySelector("#question");
  const choicesDiv = document.querySelector("#choices");

  //   for question................................
  // index of tests.......
  const currentTest = tests[test];
  
  // روش اول برای جایگزین کردن
// we want it to be replaced by the new img so we use innerHTML
  questionDiv.innerHTML = `<img src="${currentTest.question}">`;

  //   for choices................................

  // روش دوم برای جایگزین کردن
  // Clear previous choices
  choicesDiv.innerHTML = '';
  currentTest.choices.forEach((choice, index) => {
    //  create & add each choice in html
    const answerImg = document.createElement("img");
    answerImg.src = choice;
    choicesDiv.appendChild(answerImg);

    // onclick
    answerImg.addEventListener("click", () => {
      checkAnswer(index);
    });
  });
}

// 5. checking the answer...............................
function checkAnswer(index) {
  const currentTest = tests[test];
  // if answer is correct
  if (index === currentTest.answer) {
    // user score + 1
    score++;
  }

  // array index + 1 > go to the next question
  test++;

  if (test < tests.length) {
    // more question > next question
    loadQuestion();
  } else {
    // no question > show result
    result();
  }
}

// 6. a template for showing result
function resultTemp() {
  return `<div>Your Score: ${score} out of ${tests.length}</div>
  <div><h2> Do you want to take the test again?</h2>
  <button id="tryAgainBtn" type="submit">Yes</button></div>`; 
}
// اسم کاربر رو از لوکال استورج بگیریم و توی نتیحه نمایشش بدیم******************

// 7. showing the result................................
function result() {
  // variable......
  const container = document.querySelector("#container");
  // add score & array length text in html
  container.innerHTML = resultTemp();

    // 8. take the test again onclick
document.querySelector("#tryAgainBtn").addEventListener('click', loadQuestion);
}

// بعد از فورم این فانکشن اتفاق میفته**********************
// show the first test
loadQuestion();


