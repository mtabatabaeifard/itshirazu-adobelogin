const container = document.querySelector('.container');
const registerBtn = document.querySelector('.register-btn');
const regBtn = document.querySelector('.reg-btn');
const loginBtn = document.querySelector('.login-btn');

registerBtn.addEventListener('click', () => {
    container.classList.add('active');
})
regBtn.addEventListener('click', () => {
    container.classList.add('active');
})

loginBtn.addEventListener('click', () => {
    container.classList.remove('active');
})

const userName = document.querySelector("#username");
const submit = document.querySelector("#submit");
const error = document.querySelector("#error");

submit.addEventListener("click", (e) => {
  e.preventDefault();
  if (userName.value === "") {
    userName.style.border = "1px solid red";
    error.style.display = "block";
  } else {
    userName.style.border = "1px solid gray";
    error.style.display = "none";
    const nameOfUser = userName.value.replace(/ی/gi, "ي");
     location.href = `https://live3.pentaserver.ir/tabatabaei?guestname=${nameOfUser}&html-view=true`;
  }
});