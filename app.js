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

// Live Visitor Counter
let liveCount=0;
function updateLiveVillageTraffic(){
const h=new Date().getHours();
let min,max;
if(h>=6&&h<=10){min=45;max=95;}
else if(h>=11&&h<=15){min=12;max=28;}
else if(h>=16&&h<=20){min=50;max=98;}
else{min=2;max=9;}
if(liveCount===0)liveCount=Math.floor(Math.random()*(max-min+1))+min;
const shift=Math.floor(Math.random()*3)-1;
liveCount=Math.min(max,Math.max(min,liveCount+shift));
document.getElementById('liveCounter').textContent=liveCount;
}
updateLiveVillageTraffic();
setInterval(updateLiveVillageTraffic,4000);

// Seva selector & UPI intent
let selectedAmount=11;
let selectedPurpose='ఒక్క రోజు దీపారాధన నూనె';
const sevaBtns=document.querySelectorAll('.seva-btn');
sevaBtns.forEach(btn=>{
btn.addEventListener('click',()=>{
sevaBtns.forEach(b=>b.classList.remove('active'));
btn.classList.add('active');
selectedAmount=btn.dataset.amt;
selectedPurpose=btn.dataset.purpose;
});
});
document.getElementById('samarpanBtn').addEventListener('click',()=>{
window.location.href=`upi://pay?pa=templevillage@ybl&pn=SriKanthagiriTemple&am=${selectedAmount}&tn=${encodeURIComponent(selectedPurpose)}&cu=INR`;
});

// --- Video Carousel Dots Sync Engine ---
const videoTrackEl = document.getElementById('videoTrack');
const videoDotsList = document.querySelectorAll('#videoDots .dot');

function updateVideoDots() {
    if (!videoTrackEl || !videoDotsList.length) return;
    const index = Math.round(videoTrackEl.scrollLeft / videoTrackEl.offsetWidth);
    videoDotsList.forEach((dot, i) => {
        if (i === index) dot.classList.add('active');
        else dot.classList.remove('active');
    });
}

if (videoTrackEl) {
    videoTrackEl.addEventListener('scroll', updateVideoDots);
}

// Google Sheet data
const SHEET_URL='https://script.google.com/macros/s/YOUR_DEPLOYMENT_ID/exec';
async function loadData(){
try{
const r=await fetch(SHEET_URL);const rows=await r.json();
const donors=[];
rows.forEach(row=>{
if(!row.category&&!row.name)return;
const cat=(row.category||'').toString().trim().toLowerCase();
const name=(row.name||'').toString().trim();
const msg=(row.message||'').toString().trim();
if(!cat||!name)return;
if(cat==='donor')donors.push(name+(msg?' - '+msg:''));
});
if(donors.length)document.getElementById('tickerContent').textContent='🙏 '+donors.join('  🙏  ')+' 🙏';
else document.getElementById('tickerContent').textContent='🙏 దాతల జాబితా త్వరలో...';
}catch(e){
console.warn('Sheet data unavailable:',e.message);
document.getElementById('tickerContent').textContent='🙏 దాతల జాబితా త్వరలో...';
}
}

// Subscribe form
document.getElementById('subForm').addEventListener('submit',async function(e){
e.preventDefault();
const name=document.getElementById('subName').value.trim();
const email=document.getElementById('subEmail').value.trim();
if(!name||!email)return;
const msg=document.getElementById('subMsg');
msg.textContent='పంపుతోంది...';
try{
await fetch(SHEET_URL,{method:'POST',headers:{'Content-Type':'text/plain'},body:JSON.stringify({category:'subscriber',name,email})});
msg.textContent='✅ విజయవంతంగా నమోదు అయింది!';this.reset();
}catch(er){msg.textContent='❌ దయచేసి మళ్ళీ ప్రయత్నించండి';}
});

loadData();



// Volunteer form
document.getElementById('volunteerForm').addEventListener('submit',function(e){
e.preventDefault();
const name=document.getElementById('volName').value.trim();
const phone=document.getElementById('volPhone').value.trim();
const age=parseInt(document.getElementById('volAge').value,10);
const msg=document.getElementById('volMsg');
if(!name||!phone||!age){msg.textContent='❌ అన్ని వివరాలు నమోదు చేయండి';return;}
if(isNaN(age)||age<16){msg.textContent='❌ కనీసం 16 సంవత్సరాల వయస్సు ఉండాలి';return;}
msg.textContent='✅ మీ పేరు విజయవంతంగా నమోదైంది! శనివారం ఉదయం 7 గంటలకు ఆలయ ప్రాంగణానికి చేరుకోగలరు. జై శ్రీరామ్!';
this.reset();
});

// Universal Touch Carousel Engine
function linkTrackWithDots(trackSelector, dotSelector) {
    const track = document.querySelector(trackSelector);
    const dots = document.querySelectorAll(dotSelector);
    if (!track || !dots.length) return;

    track.addEventListener('scroll', () => {
        const index = Math.round(track.scrollLeft / track.offsetWidth);
        dots.forEach((dot, i) => {
            if (i === index) dot.classList.add('active');
            else dot.classList.remove('active');
        });
    });
}

// Ensure all dots setup initializes cleanly after context load
setTimeout(() => {
    if (typeof linkTrackWithDots === 'function') {
        linkTrackWithDots('#historyTrack', '#storyDots .dot');
        linkTrackWithDots('#brahmotsavam .bramho-track', '#bramhoDots .dot');
    }
    updateVideoDots();
}, 500);
