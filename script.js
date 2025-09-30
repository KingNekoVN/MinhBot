// =============================
// Fade-in animation khi scroll vào phần .fade-in
// =============================
const fadeEls = document.querySelectorAll('.fade-in');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target); // Chỉ hiệu ứng 1 lần
    }
  });
}, {
  threshold: 0.1
});

fadeEls.forEach(el => observer.observe(el));

// =============================
// Animation cho Invite, Support buttons
// =============================
window.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".invite-btn, .support-btn"); // bỏ .login-btn

  buttons.forEach((btn, index) => {
    // Lúc đầu ẩn nút
    btn.style.opacity = "0";
    btn.style.transform = "scale(0.8)";

    // Xuất hiện dần khi load trang (có delay nhẹ giữa các nút)
    setTimeout(() => {
      btn.style.transition = "opacity 0.6s ease, transform 0.6s ease";
      btn.style.opacity = "1";
      btn.style.transform = "scale(1)";
    }, 300 + index * 200);

    // Hover: thêm hiệu ứng Glow + Jelly
    btn.addEventListener("mouseenter", () => {
      btn.classList.add("glow", "jelly");
    });

    btn.addEventListener("mouseleave", () => {
      btn.classList.remove("glow", "jelly");
    });
  });

  // =============================
  // Animation tiêu đề bằng anime.js
  // =============================
  anime({
    targets: 'header h1',
    translateY: [-50, 0],   // đi từ trên xuống
    opacity: [0, 1],        // mờ -> rõ
    scale: [0.8, 1],        // nhỏ -> bình thường
    duration: 1200,         // thời gian chạy
    easing: 'easeOutElastic(1, .8)' // hiệu ứng đàn hồi
  });

  anime({
    targets: 'header p',
    translateY: [20, 0],
    opacity: [0, 1],
    delay: 500,             // chạy sau h1
    duration: 1000,
    easing: 'easeOutExpo'
  });
});
