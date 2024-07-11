import "./_components.js";

// // Маска для номера телефона
// // document.addEventListener('DOMContentLoaded', function () {
// //     var input = document.getElementById('phone_number');
// //     var im = new Inputmask("+7 (999) 999-99-99"); // Маска для российского номера телефона
// //     im.mask(input);
// //   });

// // Для HEAD подключение
// //   <!-- Маска из CDN -->
// //   <script src="https://cdnjs.cloudflare.com/ajax/libs/inputmask/5.0.7/inputmask.min.js"></script>

document.addEventListener("DOMContentLoaded", function () {
  let burgerButton = document.querySelector(".burger-menu__button");
  let burgerContent = document.querySelector(".burger-menu__content");

  if (!burgerButton) {
    console.error("Бургер кнопка не найдена");
    return;
  }

  if (!burgerContent) {
    console.error("Контент бургер-меню не найден");
    return;
  }

  burgerButton.addEventListener("click", function () {
    console.log("Бургер кнопка нажата");
    burgerContent.classList.toggle("burger-menu__content--visible");
  });
});
