// Initialize AOS (Animate On Scroll)
AOS.init({
    duration: 1000,
    once: true,
    offset: 100
});

// Countdown Timer
function updateCountdown() {
    const now = new Date();
    const currentYear = now.getFullYear();
    
    // Set the birthday date for this year
    let birthday = new Date(currentYear, 4, 29); // Month is 0-based, so 4 = May
    
    // If the birthday has already passed this year, set it for next year
    if (now > birthday) {
        birthday = new Date(currentYear + 1, 4, 29);
    }
    
    const distance = birthday.getTime() - now.getTime();

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById('countdown').innerHTML = `
        <div>
            <span>${days}</span>
            <small>Days</small>
        </div>
        <div>
            <span>${hours}</span>
            <small>Hours</small>
        </div>
        <div>
            <span>${minutes}</span>
            <small>Minutes</small>
        </div>
        <div>
            <span>${seconds}</span>
            <small>Seconds</small>
        </div>
    `;

    if (distance < 0) {
        clearInterval(countdownInterval);
        document.getElementById('countdown').innerHTML = "Happy Birthday! 🎉";
    }
}

// Update countdown every second
const countdownInterval = setInterval(updateCountdown, 1000);
updateCountdown(); // Initial call

// Gallery Image Click Handler
document.querySelectorAll('.gallery-img').forEach(img => {
    img.addEventListener('click', function() {
        // Create modal for image preview
        const modal = document.createElement('div');
        modal.className = 'modal fade';
        modal.innerHTML = `
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                    <div class="modal-body">
                        <img src="${this.src}" class="img-fluid" alt="Gallery Image">
                    </div>
                </div>
            </div>
        `;
        document.body.appendChild(modal);
        
        // Initialize and show modal
        const modalInstance = new bootstrap.Modal(modal);
        modalInstance.show();
        
        // Remove modal from DOM after it's hidden
        modal.addEventListener('hidden.bs.modal', function() {
            modal.remove();
        });
    });
}); 