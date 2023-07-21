// تابع برای ایجاد فرم و عناصر آن به صورت پویا
function createForm() {
  const form = document.createElement("form");
  form.setAttribute("id", "myForm");

  const nameLabel = document.createElement("label");
  nameLabel.setAttribute("for", "name");
  nameLabel.textContent = "Name:";
  form.appendChild(nameLabel);

  const nameInput = document.createElement("input");
  nameInput.setAttribute("type", "text");
  nameInput.setAttribute("autocomplete", "off");
  nameInput.setAttribute("id", "name");
  nameInput.setAttribute("required", "true");
  form.appendChild(nameInput);

  const lineBreak = document.createElement("br");

  form.appendChild(lineBreak);

  const ageLabel = document.createElement("label");
  ageLabel.setAttribute("for", "age");
  ageLabel.textContent = "Age:";
  form.appendChild(ageLabel);

  const ageInput = document.createElement("input");
  ageInput.setAttribute("type", "number");
  ageInput.setAttribute("id", "age");
  ageInput.setAttribute("required", "true");
  ageInput.setAttribute("max", "100");
  ageInput.setAttribute("min", "7");
  form.appendChild(ageInput);

  const submitButton = document.createElement("input");
  submitButton.setAttribute("type", "submit");
  submitButton.setAttribute("value", "Submit");
  submitButton.setAttribute("id", "submitButton");
  form.appendChild(submitButton);

  document.body.appendChild(form);

  // اضافه کردن یک گوش‌گیری رویداد برای کنترل ارسال فرم
  form.addEventListener("submit", handleSubmit);
}

// تابع برای کنترل ارسال فرم
function handleSubmit(event) {
  event.preventDefault(); // جلوگیری از ارسال فرم برای جلوگیری از بازنشانی صفحه
  const name = document.getElementById("name").value;
  const age = document.getElementById("age").value;

  if (name && age) {
    // فراخوانی توابع برای کنترل ورودی‌های نام و سن
    saveNameToLocalStorage(name);
    saveAgeToLocalStorage(age);

    alert("اطلاعات با موفقیت ذخیره شد!");

    // start the test.............................
    loadQuestion();
  } else {
    alert("لطفاً همه‌ی فیلدها را پر کنید.");
  }
}

// تابع برای ذخیره‌سازی نام در لوکال استوریج
function saveNameToLocalStorage(name) {
  localStorage.setItem("name", name);
}

// تابع برای ذخیره‌سازی سن در لوکال استوریج
function saveAgeToLocalStorage(age) {
  localStorage.setItem("age", age);
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

// 2. an Array..........................................

const tests = [];
correctAnswers = [
  3, 1, 5, 5, 2, 1, 2, 2, 2, 6, 4, 1, 4, 7, 2, 3, 1, 6, 5, 8, 4, 4, 7, 6, 4, 7,
  7, 3, 2, 8,
];

for (let i = 1; i <= 13; i++) {
  const choices = [];

  for (let j = 1; j <= 6; j++) {
    choices.push(`Images/${i}/${i}-${j}.png`);
  }

  tests.push({
    question: `Images/${i}/test${i}.png`,
    // choices: choices
    choices,
    answer: correctAnswers[i - 1],
  });
}

for (let i = 14; i <= 30; i++) {
  const choices = [];

  for (let j = 1; j <= 8; j++) {
    choices.push(`Images/${i}/${i}-${j}.png`);
  }

  tests.push({
    question: `Images/${i}/test${i}.png`,
    // choices: choices
    choices,
    answer: correctAnswers[i - 1],
  });
}

//  3. we start form 0..................................

let test = 0;
let score = 0;

// 4. loading the test with its question & choices......

function loadQuestion() {
  // adding it to html
  body.innerHTML = template();

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
  choicesDiv.innerHTML = "";
  currentTest.choices.forEach((choice, index) => {
    //  create & add each choice in html
    const answerImg = document.createElement("img");
    answerImg.src = choice;
    choicesDiv.appendChild(answerImg);

    // choicesDiv.innerHTML += `<img src="${choice}">`;

    // onclick
    answerImg.addEventListener("click", () => {
      checkAnswer(index + 1);
    });
  });
}

// 5. checking the answer...............................
function checkAnswer(userChoice) {
  const currentTest = tests[test];
  // if answer is correct
  if (userChoice === currentTest.answer) {
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
  return `<h2>Your Score: ${score} out of ${tests.length}</h2>
  <div id="tryAgainDiv"><h2> Do you want to take the test again?</h2>
  <button id="tryAgainBtn" type="submit">Yes</button></div>`;
}

// 7. showing the result................................
function result() {
  // variable......
  const container = document.querySelector("#container");
  // add score & array length text in html
  container.innerHTML = resultTemp();

  test = 0;
  score = 0;

  // 8. take the test again onclick
  document
    .querySelector("#tryAgainBtn")
    .addEventListener("click", loadQuestion);
}

