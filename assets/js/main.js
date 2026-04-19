/**
 * 분당 금거래소 - Main JavaScript
 */

(function () {
  'use strict';

  /* ===== 프리로드 해제 ===== */
  window.addEventListener('load', function () {
    document.body.classList.remove('is-preload');
  });

  /* ===== 사이드 메뉴 ===== */
  const menuToggle = document.querySelector('#header nav a[href="#menu"]');
  const menu = document.getElementById('menu');
  const menuClose = menu ? menu.querySelector('.close') : null;

  // 오버레이 엘리먼트 생성
  const overlay = document.createElement('div');
  overlay.className = 'menu-overlay';
  document.body.appendChild(overlay);

  function openMenu() {
    menu.classList.add('is-active');
    overlay.classList.add('is-active');
    document.body.style.overflow = 'hidden';
  }

  function closeMenu() {
    menu.classList.remove('is-active');
    overlay.classList.remove('is-active');
    document.body.style.overflow = '';
  }

  if (menuToggle) {
    menuToggle.addEventListener('click', function (e) {
      e.preventDefault();
      openMenu();
    });
  }

  if (menuClose) {
    menuClose.addEventListener('click', function (e) {
      e.preventDefault();
      closeMenu();
    });
  }

  overlay.addEventListener('click', closeMenu);

  // 메뉴 내부 링크 클릭 시 닫기
  if (menu) {
    menu.querySelectorAll('.links a').forEach(function (link) {
      link.addEventListener('click', function () {
        closeMenu();
      });
    });
  }

  /* ===== 헤더 스크롤 효과 ===== */
  const header = document.getElementById('header');
  let lastScrollY = 0;

  window.addEventListener('scroll', function () {
    const currentScrollY = window.scrollY;

    if (currentScrollY > 80) {
      header.style.background = 'rgba(14, 14, 14, 0.98)';
      header.style.boxShadow = '0 2px 20px rgba(0,0,0,0.4)';
    } else {
      header.style.background = 'rgba(28, 28, 28, 0.92)';
      header.style.boxShadow = 'none';
    }

    lastScrollY = currentScrollY;
  });

  /* ===== 스무스 스크롤 ===== */
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href === '#' || href === '#menu') return;

      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        const headerH = header ? header.offsetHeight : 80;
        const targetY = target.getBoundingClientRect().top + window.scrollY - headerH;
        window.scrollTo({ top: targetY, behavior: 'smooth' });
      }
    });
  });

  /* ===== 스크롤 페이드인 애니메이션 ===== */
  function initFadeIn() {
    const elements = document.querySelectorAll(
      'article, .item-card, .review-card, .step, .faq-item, .price-table-wrap'
    );

    elements.forEach(function (el) {
      el.classList.add('fade-in');
    });

    const observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry, i) {
          if (entry.isIntersecting) {
            setTimeout(function () {
              entry.target.classList.add('visible');
            }, i * 80);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );

    elements.forEach(function (el) {
      observer.observe(el);
    });
  }

  if ('IntersectionObserver' in window) {
    initFadeIn();
  } else {
    // Fallback for older browsers
    document.querySelectorAll('.fade-in').forEach(function (el) {
      el.classList.add('visible');
    });
  }

  /* ===== 금시세 실시간 표시 (네이버 금시세 링크 안내) ===== */
  // 실제 API 연동 시 이 부분을 교체하세요
  const priceNote = document.querySelector('.price-note');
  if (priceNote) {
    const today = new Date();
    const formatted = today.toLocaleDateString('ko-KR', {
      year: 'numeric', month: 'long', day: 'numeric'
    });
    priceNote.innerHTML =
      '* ' + formatted + ' 기준 금시세는 변동됩니다. 정확한 매입가는 전화 또는 방문 감정 후 안내드립니다.';
  }

  /* ===== 전화번호 클릭 트래킹 (간단 로그) ===== */
  document.querySelectorAll('a[href^="tel:"]').forEach(function (el) {
    el.addEventListener('click', function () {
      // Google Analytics 이벤트 트래킹 (GA 설치 시 활성화)
      // gtag('event', 'phone_call', { event_category: 'contact', event_label: 'bundang_gold' });
      console.log('[분당 금거래소] 전화 문의 클릭');
    });
  });

  /* ===== FAQ 아코디언 부드러운 처리 ===== */
  document.querySelectorAll('.faq-item').forEach(function (item) {
    item.addEventListener('toggle', function () {
      if (this.open) {
        // 다른 FAQ 닫기
        document.querySelectorAll('.faq-item').forEach(function (other) {
          if (other !== item && other.open) {
            other.removeAttribute('open');
          }
        });
      }
    });
  });

})();
