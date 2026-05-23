// Font switcher
function changeTempleFont(style){
document.body.classList.remove('font-traditional','font-clean','font-beauty');
document.body.classList.add('font-'+style);
localStorage.setItem('templeFont',style);
document.querySelectorAll('.font-chip').forEach(c=>c.classList.remove('active'));
const activeChip=document.querySelector(`.font-chip[data-font="${style}"]`);
if(activeChip)activeChip.classList.add('active');
}
const savedFont=localStorage.getItem('templeFont');
if(savedFont)changeTempleFont(savedFont);
document.querySelectorAll('.font-chip').forEach(chip=>{
chip.addEventListener('click',()=>changeTempleFont(chip.dataset.font));
});

// Menu toggle
const menuBtn=document.getElementById('menuBtn');
const sideMenu=document.getElementById('sideMenu');
const menuOverlay=document.getElementById('menuOverlay');
menuBtn.addEventListener('click',()=>{sideMenu.classList.add('active');menuOverlay.classList.add('active');});
menuOverlay.addEventListener('click',closeMenu);
document.querySelectorAll('.side-menu a').forEach(a=>a.addEventListener('click',closeMenu));
function closeMenu(){sideMenu.classList.remove('active');menuOverlay.classList.remove('active');}

// Audio toggle
const audioEl=document.getElementById('chantAudio');
const audioToggle=document.getElementById('audioToggle');
const audioIcon=document.getElementById('audioIcon');
let audioPlaying=false;
audioToggle.addEventListener('click',()=>{
if(audioPlaying){audioEl.pause();audioIcon.setAttribute('d','M10,12 L14,12 L18,8 L18,24 L14,20 L10,20 Z M21,14 L25,18 M25,14 L21,18');audioPlaying=false;}
else{audioEl.play();audioIcon.setAttribute('d','M10,12 L14,12 L18,8 L18,24 L14,20 L10,20 Z M20,13 Q22,16 20,19 M22,11 Q25,16 22,21');audioPlaying=true;}
});

// Universal Touch Carousel Engine
function linkTrackWithDots(trackSelector, dotSelector) {
    const track = document.querySelector(trackSelector);
    const dots = document.querySelectorAll(dotSelector);
    if (!track || !dots.length) return;

    function updateDots() {
        const slides = track.children;
        const trackRect = track.getBoundingClientRect();
        const trackCenter = trackRect.left + trackRect.width / 2;
        let activeIndex = 0;
        let minDist = Infinity;
        for (let i = 0; i < slides.length; i++) {
            const slideRect = slides[i].getBoundingClientRect();
            const slideCenter = slideRect.left + slideRect.width / 2;
            const dist = Math.abs(slideCenter - trackCenter);
            if (dist < minDist) { minDist = dist; activeIndex = i; }
        }
        dots.forEach((dot, i) => {
            if (i === activeIndex) dot.classList.add('active');
            else dot.classList.remove('active');
        });
    }

    track.addEventListener('scroll', updateDots, { passive: true });
    track.addEventListener('touchend', () => {
        setTimeout(updateDots, 100);
        setTimeout(updateDots, 400);
        setTimeout(updateDots, 800);
    });
    track.addEventListener('touchmove', updateDots, { passive: true });
    updateDots();
}

// Initialize carousel dots
linkTrackWithDots('#historyTrack', '#storyDots .dot');
linkTrackWithDots('#brahmotsavam .bramho-track', '#bramhoDots .dot');
linkTrackWithDots('#videoTrack', '#videoDots .dot');
