const menuItems = document.querySelectorAll(".gnb > li");

menuItems.forEach((item) => {
  item.addEventListener("mouseenter", () => {
    const lnb = item.querySelector(".lnb");
    if (lnb) {
      lnb.classList.add("active");
    }
  });
  item.addEventListener("mouseleave", () => {
    const lnb = item.querySelector(".lnb");
    if (lnb) {
      lnb.classList.remove("active");
    }
  });
});

// notice

const notices = [
  "시스템 개선 및 서비스 점검 안내",
  "개인정보처리방침 개정 안내",
  "홈페이지 이용약관 및 스타벅스 카드 이용약관 개정 안내",
];

const noticeEl = document.querySelector(".notice");
let index = 0;

function changeNotice() {
  // 페이드 아웃
  noticeEl.classList.remove("show");

  setTimeout(() => {
    // 텍스트 변경
    noticeEl.textContent = notices[index];
    // 페이드 인
    noticeEl.classList.add("show");

    // 다음 텍스트 인덱스
    index = (index + 1) % notices.length;
  }, 500); // CSS transition 시간과 맞춰줌
}

// 초기 텍스트 표시
noticeEl.textContent = notices[index];
noticeEl.classList.add("show");
index++;

// 10초마다 텍스트 변경
setInterval(changeNotice, 5000);

// 헤더

let lastScroll = 0;
const header = document.querySelector("header");
const delta = 5; // 감도 설정 (작을수록 더 민감)
let ticking = false;
let isMouseNearTop = false;

// 스크롤 시 헤더 숨김/보임
window.addEventListener("scroll", () => {
  if (!ticking) {
    window.requestAnimationFrame(() => {
      handleScroll();
      ticking = false;
    });
    ticking = true;
  }
});

function handleScroll() {
  const currentScroll = window.scrollY;

  // 최상단에서는 항상 보이게
  if (currentScroll <= 0) {
    header.classList.remove("hide");
    lastScroll = 0;
    return;
  }

  // 미세한 스크롤 무시
  if (Math.abs(currentScroll - lastScroll) < delta) return;

  if (currentScroll > lastScroll && !isMouseNearTop) {
    // 아래로 스크롤 → 숨김
    header.classList.add("hide");
  } else {
    // 위로 스크롤 → 보이게
    header.classList.remove("hide");
  }

  lastScroll = currentScroll;
}

// 마우스가 화면 상단 근처로 왔을 때 헤더 표시
document.addEventListener("mousemove", (e) => {
  if (e.clientY < 50) {
    // 화면 상단 50px 영역
    isMouseNearTop = true;
    header.classList.remove("hide");
  } else {
    isMouseNearTop = false;
  }
});
