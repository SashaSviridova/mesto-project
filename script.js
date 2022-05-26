const editButton = document.querySelector(".profile__edit-button");
const closeButton = document.querySelector(".popup__close");
const popupEdit = document.querySelector(".popup-edit");
editButton.addEventListener("click", function () {
  popupEdit.classList.add("popup_opened");
});
closeButton.addEventListener("click", function () {
  popupEdit.classList.remove("popup_opened");
});

const addButton = document.querySelector(".profile__add-button");
const addCloseButton = document.querySelector(".popup__close_button");
const popupAdd = document.querySelector(".popup-add-place");
addButton.addEventListener("click", function () {
  popupAdd.classList.add("popup_opened");
});
addCloseButton.addEventListener("click", function () {
  popupAdd.classList.remove("popup_opened");
});

const likeButton = document.querySelector(".element__feedback");
likeButton.addEventListener("click", function () {
  likeButton.classList.toggle("element__feedback_active");
});

// let likeButtonActive = document.querySelector(".element__feedback");
// likeButtonActive.addEventListener("click", function () {
//   likeButtonActive.classList.remove("element__feedback_active");
// });

const inputItem = document.querySelector(".popup__item");
const inputName = document.querySelector(".popup__item_name");
const submit = (evt) => {
  evt.preventDefault();
  inputItem.textContent = inputName.value;
  inputItem.textContent = inputJob.value;
  closeButton();
};

const inputJob = document.querySelector(".popup__item_job");
