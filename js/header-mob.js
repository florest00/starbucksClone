document.addEventListener("DOMContentLoaded", function () {
  const menuBtn = document.querySelector(".menu-btn");
  const drawer = document.querySelector(".drawer");
  const drawerDim = document.querySelector(".drawer-dim");
  const closeBtn = document.querySelector(".close-btn");

  // 드로어 열기
  menuBtn.addEventListener("click", function () {
    drawer.classList.add("open");
    drawerDim.classList.add("active");
  });

  // 닫기 (close 버튼 클릭 시)
  closeBtn.addEventListener("click", function () {
    drawer.classList.remove("open");
    drawerDim.classList.remove("active");
  });

  // dim 클릭 시 닫기
  drawerDim.addEventListener("click", function () {
    drawer.classList.remove("open");
    drawerDim.classList.remove("active");
  });

  // ✅ submenu 토글
  document.querySelectorAll(".drawer-menu .menu-toggle").forEach((btn) => {
    btn.addEventListener("click", function (e) {
      const submenu = btn.nextElementSibling;
      if (submenu && submenu.classList.contains("submenu")) {
        submenu.classList.toggle("open");
      }
    });
  });
});
