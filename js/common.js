window.onload = function(){
  // MODAL
  document.body.style.overflowY = "unset";
  const modalButton = document.querySelectorAll("[data-view='modal']");
  modalButton.forEach(function(elem){
    elem.addEventListener("click", function(){
      const modalID = this.dataset.modal;
      document.querySelector(modalID).classList.add("active");
      scrollForbid(modalID);
      console.log(1);
    });
  });

  const closeButton = document.querySelectorAll(".func__close");
  closeButton.forEach(function(elem){
    elem.addEventListener("click", function(){
      modalClose(elem);
    });
  });
}

function modalClose(close){
  const modal = close.closest(".modal__wrap");
  modal.classList.remove("active");
}

function scrollForbid(id){
  if(document.querySelector(id).classList.contains("active")){
    document.body.style.overflowY = "hidden";
  } else {
    document.body.style.overflowY = "unset";
  }
}

// CLASS TOGGLE
// CLASS TOGGLE (VAR)
const clickElem = document.querySelector(".add-class--fx li");
// CLASS TOGGLE (FUNC)
const addClassList = document.querySelectorAll(".add-class--fx li");
addClassList.forEach(function(addClassElem, idx) {
  addClassElem.addEventListener("click", function(){
    if(addClassElem.classList.contains("active")) {
      addClassElem.classList.remove("active");
    } else {
      addClassElem.classList.add("active");
    }
    // ONLY CLASS (IF)
    // 이미 설정되어 있으면 걔 빼고 나한테 클래스 주라 
    const activeClassList = document.querySelectorAll(".add-class--fx li");
    activeClassList.forEach(function(activeClassElem, idx) {
      if(activeClassElem.classList.contains("active") && activeClassElem !== addClassElem) {
        activeClassElem.classList.remove("active");
      }
    });
  });
});


