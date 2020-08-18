let area = document.getElementById("area");
let btn = document.getElementById("btn");
let areaRect = area.getBoundingClientRect();
let btnRect = btn.getBoundingClientRect();

const mouse = () => {
  let randWidth =
    btnRect.width + Math.random() * (areaRect.width - btnRect.width - 30);

  let randHeight =
    btnRect.height + Math.random() * (areaRect.height - btnRect.height - 30);

  btn.style.left = Math.floor(randWidth);
  btn.style.top = Math.floor(randHeight);
};
btn.addEventListener("mousemove", mouse);

btn.addEventListener("click", function () {
  mouse();
  //   alert("Ничего себе, зачет автоматом!");
});
document.getElementById("pay").onclick = function () {
  const elem = document.querySelector(".inActive");
  elem.classList.add("active");
  elem.innerText = "Правильное решение";
  area.classList.add("dn");
  document.querySelector("section").style.height = "50%";
  document.querySelector(".info").innerHTML = `
    <h2>Поздравляем!</h2>
    <h3>Вы зачислены на специальность УС-122.</h3>
    <a href="https://www.instagram.com/ingvar.makarchuk/" id="nau">Внести оплату</a>

    `;
};
