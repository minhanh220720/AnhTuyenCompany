document.getElementById('contactBtn').addEventListener('click', function() {
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
});

document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Cảm ơn bạn đã gửi tin nhắn! Chúng tôi sẽ liên hệ với bạn sớm nhất.');
    this.reset();
});



