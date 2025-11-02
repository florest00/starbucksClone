// 재실행할 애니메이션 대상 요소 선택
const animTargets = document.querySelectorAll(
  ".hero-inner .r .r-inner .img-wrapper .img," + // hero 섹션 이미지
    ".store-inner .r img," + // store 섹션 이미지
    ".fav-inner, .fav-inner-mob .fav-inner-mob-bottom," + // fav 섹션
    ".btn-area," + // 버튼 영역
    ".promo-inner .l .img, .promo-inner .r .img" // promo 섹션 이미지
);

// Intersection Observer 설정
const animObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      const el = entry.target;

      if (entry.isIntersecting) {
        // 화면에 들어오면 애니메이션 재실행
        el.style.animation = "none"; // 기존 애니메이션 제거
        void el.offsetWidth; // reflow 강제
        el.style.animation = ""; // CSS 애니메이션 다시 적용

        // active 클래스로 이동/opacity 애니메이션이 있는 경우 재적용
        if (
          el.classList.contains("active") ||
          el.classList.contains("fav-inner") ||
          el.classList.contains("fav-inner-mob-bottom")
        ) {
          el.classList.remove("active");
          void el.offsetWidth; // reflow
          el.classList.add("active");
        }
      }
    });
  },
  {
    threshold: 0.1, // 10%만 보여도 실행
  }
);

// 모든 대상 요소 관찰 시작
animTargets.forEach((el) => animObserver.observe(el));
