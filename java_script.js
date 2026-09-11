function showContent(sectionId) {
    // 1. إخفاء جميع الأقسام الموجودة في الشاشة
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(sec => {
        sec.classList.remove('active');
    });

    // 2. إظهار القسم المطلوب فقط بناءً على الـ ID
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.classList.add('active');
    }
}