document.addEventListener('DOMContentLoaded', function () {
    // Elements
    const loginForm = document.getElementById('loginForm');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const togglePassword = document.querySelector('.toggle-password');
    const loginBtn = document.querySelector('.login-btn');
    const notification = document.getElementById('notification');
    const personContainer = document.querySelector('.person-animation-container');
    const bag = document.querySelector('.bag');

    // Animation sequence
    function startAnimationSequence() {
        // Person walks in (already handled by CSS animation)

        // After 3 seconds, drop the bag
        setTimeout(() => {
            bag.style.animation = 'bagDrop 1s ease-out forwards';

            // After bag drops, person exits
            setTimeout(() => {
                personContainer.style.animation = 'personExit 2s ease-out forwards';
            }, 1000);
        }, 3000);
    }

    // Start the animation sequence
    startAnimationSequence();

    // Input focus animations
    const inputFields = document.querySelectorAll('.input-field input');

    inputFields.forEach(input => {
        input.addEventListener('focus', function () {
            this.parentElement.classList.add('focused');
        });

        input.addEventListener('blur', function () {
            if (!this.value) {
                this.parentElement.classList.remove('focused');
            }
        });

        // Add floating label effect
        input.addEventListener('input', function () {
            if (this.value) {
                this.parentElement.classList.add('has-value');
            } else {
                this.parentElement.classList.remove('has-value');
            }
        });
    });

    // Password toggle
    togglePassword.addEventListener('click', function () {
        const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
        passwordInput.setAttribute('type', type);

        // Toggle icon
        this.classList.toggle('fa-eye');
        this.classList.toggle('fa-eye-slash');
    });

    // Form submission
    loginForm.addEventListener('submit', async function (e) {
        e.preventDefault();

        const username = usernameInput.value.trim();
        const password = passwordInput.value.trim();

        // Validation
        if (!username || !password) {
            showNotification('Please fill in all fields', 'error');
            return;
        }

        // Show loading state
        loginBtn.classList.add('loading');
        loginBtn.disabled = true;

        try {
            const response = await fetch('/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username: username,
                    password: password
                })
            });

            const data = await response.json();

            if (response.ok) {
                showNotification(data.message, 'success');

                // Add success animation
                loginBtn.style.background = 'linear-gradient(135deg, #4CAF50, #45a049)';

                // Redirect after delay
                setTimeout(() => {
                    window.location.href = '/dashboard';
                }, 1500);
            } else {
                showNotification(data.message, 'error');

                // Add shake animation for error
                loginBtn.classList.add('shake');
                setTimeout(() => {
                    loginBtn.classList.remove('shake');
                }, 500);
            }
        } catch (error) {
            showNotification('Network error. Please try again.', 'error');
        } finally {
            // Reset button state
            setTimeout(() => {
                loginBtn.classList.remove('loading');
                loginBtn.disabled = false;
                loginBtn.style.background = '';
            }, 2000);
        }
    });

    // Notification function
    function showNotification(message, type) {
        const notificationContent = notification.querySelector('.notification-message');
        const notificationIcon = notification.querySelector('.notification-icon');

        notificationContent.textContent = message;
        notification.className = `notification ${type}`;
        notification.classList.add('show');

        // Auto hide after 5 seconds
        setTimeout(() => {
            notification.classList.remove('show');
        }, 5000);
    }

    // Add floating animation to shapes
    const shapes = document.querySelectorAll('.shape');
    shapes.forEach((shape, index) => {
        shape.style.animationDelay = `${index * 0.5}s`;
    });

    // Add parallax effect to background
    document.addEventListener('mousemove', function (e) {
        const shapes = document.querySelectorAll('.shape');
        const mouseX = e.clientX / window.innerWidth;
        const mouseY = e.clientY / window.innerHeight;

        shapes.forEach((shape, index) => {
            const speed = (index + 1) * 0.5;
            const x = (mouseX - 0.5) * speed * 20;
            const y = (mouseY - 0.5) * speed * 20;

            shape.style.transform = `translate(${x}px, ${y}px) rotate(${x * 2}deg)`;
        });
    });

    // Add ripple effect to button
    loginBtn.addEventListener('click', function (e) {
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;

        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.classList.add('ripple');

        this.appendChild(ripple);

        setTimeout(() => {
            ripple.remove();
        }, 600);
    });

    // Add CSS for ripple effect
    const style = document.createElement('style');
    style.textContent = `
        .login-btn {
            position: relative;
            overflow: hidden;
        }
        
        .ripple {
            position: absolute;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.3);
            transform: scale(0);
            animation: ripple-animation 0.6s linear;
            pointer-events: none;
        }
        
        @keyframes ripple-animation {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }
        
        .shake {
            animation: shake 0.5s ease-in-out;
        }
        
        @keyframes shake {
            0%, 100% { transform: translateX(0); }
            25% { transform: translateX(-5px); }
            75% { transform: translateX(5px); }
        }
        
        .input-field.focused input {
            transform: scale(1.02);
        }
        
        .input-field.has-value input {
            border-color: #667eea;
        }
    `;
    document.head.appendChild(style);

    // Add keyboard navigation
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' && document.activeElement === passwordInput) {
            loginForm.dispatchEvent(new Event('submit'));
        }
    });

    // Add smooth scroll for better UX
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Add loading animation for page load
    window.addEventListener('load', function () {
        document.body.classList.add('loaded');
    });

    // Add CSS for page load animation
    const loadStyle = document.createElement('style');
    loadStyle.textContent = `
        body {
            opacity: 0;
            transition: opacity 0.5s ease;
        }
        
        body.loaded {
            opacity: 1;
        }
    `;
    document.head.appendChild(loadStyle);
}); 