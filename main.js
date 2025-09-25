        // Loading screen
        window.addEventListener("load", function() {
            setTimeout(function() {
                document.getElementById("loading").classList.add("hidden");
            }, 1000);
        });

        // Smooth scrolling
        document.querySelectorAll("a[href^=\"#\"]").forEach(anchor => {
            anchor.addEventListener("click", function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute("href"));
                if (target) {
                    target.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });
                }
            });
        });

        // Scroll animations
        function animateOnScroll() {
            const elements = document.querySelectorAll(".fade-in");
            elements.forEach(element => {
                const elementTop = element.getBoundingClientRect().top;
                const elementVisible = 150;
                
                if (elementTop < window.innerHeight - elementVisible) {
                    element.classList.add("visible");
                }
            });
        }

        window.addEventListener("scroll", animateOnScroll);
        animateOnScroll(); // Run on page load

        // Navbar background on scroll
        window.addEventListener("scroll", function() {
            const navbar = document.querySelector(".navbar");
            if (window.scrollY > 50) {
                navbar.style.background = "rgba(0, 0, 0, 0.98)";
            } else {
                navbar.style.background = "rgba(0, 0, 0, 0.95)";
            }
        });

        // Add hover effects to product cards
        document.querySelectorAll(".product-card").forEach(card => {
            card.addEventListener("mouseenter", function() {
                this.style.transform = "translateY(-10px) scale(1.02)";
            });
            
            card.addEventListener("mouseleave", function() {
                this.style.transform = "translateY(0) scale(1)";
            });
        });

        // Add click effects to buttons
        document.querySelectorAll(".cta-button").forEach(button => {
            button.addEventListener("click", function(e) {
                e.preventDefault();
                
                // Create ripple effect
                const ripple = document.createElement("span");
                const rect = this.getBoundingClientRect();
                const size = Math.max(rect.width, rect.height);
                const x = e.clientX - rect.left - size / 2;
                const y = e.clientY - rect.top - size / 2;
                
                ripple.style.width = ripple.style.height = size + "px";
                ripple.style.left = x + "px";
                ripple.style.top = y + "px";
                ripple.style.position = "absolute";
                ripple.style.borderRadius = "50%";
                ripple.style.background = "rgba(255, 255, 255, 0.3)";
                ripple.style.transform = "scale(0)";
                ripple.style.animation = "ripple 0.6s linear";
                ripple.style.pointerEvents = "none";
                
                this.style.position = "relative";
                this.style.overflow = "hidden";
                this.appendChild(ripple);
                
                setTimeout(() => {
                    ripple.remove();
                }, 600);
            });
        });

        // Add CSS for ripple animation
        const style = document.createElement("style");
        style.textContent = `
            @keyframes ripple {
                to {
                    transform: scale(4);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);

        // Parallax effect for hero section
        window.addEventListener("scroll", function() {
            const scrolled = window.pageYOffset;
            const hero = document.querySelector(".hero");
            const rate = scrolled * -0.5;
            hero.style.transform = `translateY(${rate}px)`;
        });

        // Add typing effect to hero title
        function typeWriter(element, text, speed = 100) {
            let i = 0;
            element.innerHTML = "";
            
            function type() {
                if (i < text.length) {
                    element.innerHTML += text.charAt(i);
                    i++;
                    setTimeout(type, speed);
                }
            }
            type();
        }

        // Initialize typing effect after loading
        setTimeout(() => {
            const heroTitle = document.querySelector(".hero h1");
            const originalText = heroTitle.textContent;
            typeWriter(heroTitle, originalText, 150);
        }, 1500);

