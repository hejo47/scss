window.onload = function(){

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
