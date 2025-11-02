// .menu-toggle을 눌렀을 때, span.img 가 회전을 하면서, ul.submenu가 열려야 함 // 반대로 ul.submenu가 열린 상태에서, .menu-toggle을 다시 눌렀을 때, span.img가 원래의 회전하기 전의 모습으로 돌아오고, ul.submenu는 접힌다.

document.addEventListener("DOMContentLoaded", function () {
  // 모든 .menu-toggle 버튼 선택
  const menuButtons = document.querySelectorAll(".menu-toggle");

  menuButtons.forEach((button) => {
    // 버튼 타입 안전하게 지정
    if (!button.hasAttribute("type")) button.setAttribute("type", "button");

    button.addEventListener("click", function (e) {
      e.stopPropagation(); // 이벤트 버블링 방지

      const li = button.closest("li"); // 현재 버튼의 부모 li
      const submenu = li.querySelector(".submenu"); // li 내부의 서브메뉴
      const arrow = button.querySelector(".menu-toggle .mt-img"); // 회전시킬 화살표
      console.log(arrow);

      // 마우스로 mt-img를 클릭했을 때, mt-imgr가 회전을 한다.

      // mt-img 클릭 시 회전
      if (arrow) {
        arrow.classList.toggle("active");
      }

      //서브메뉴가 있으면 서브메뉴 토글
      if (submenu) {
        submenu.classList.toggle("open");
      }

      // if (!submenu) {
      //   // 서브메뉴가 없으면 화살표 회전만
      //   if (arrow) arrow.classList.toggle("active");

      //   return;
      // }

      const isOpen = submenu.classList.contains("open"); // 현재 서브메뉴 상태

      // **아코디언 기능**: 다른 열린 메뉴 닫기
      document.querySelectorAll(".drawer-menu > li").forEach((otherLi) => {
        const otherSubmenu = otherLi.querySelector(".submenu");
        const otherArrow = otherLi.querySelector(".menu-toggle .mt-img");

        if (otherSubmenu && otherSubmenu !== submenu)
          otherSubmenu.classList.remove("open");
        if (otherArrow && otherArrow !== arrow)
          otherArrow.classList.remove("active");
      });

      // 클릭한 메뉴 토글
      submenu.classList.toggle("open", !isOpen);
      if (arrow) arrow.classList.toggle("active", !isOpen);
    });
  });
});
