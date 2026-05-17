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

// Video carousel nav
const vTrack=document.getElementById('videoTrack');
document.getElementById('vidPrev').addEventListener('click',()=>{vTrack.scrollBy({left:-vTrack.offsetWidth,behavior:'smooth'});});
document.getElementById('vidNext').addEventListener('click',()=>{vTrack.scrollBy({left:vTrack.offsetWidth,behavior:'smooth'});});

// Google Sheet data
const SHEET_URL='https://script.google.com/macros/s/YOUR_DEPLOYMENT_ID/exec';
async function loadData(){
try{
const r=await fetch(SHEET_URL);const rows=await r.json();
const donors=[],news=[],permanent=[];
rows.forEach(row=>{
if(!row.category&&!row.name)return;
const cat=(row.category||'').toString().trim().toLowerCase();
const name=(row.name||'').toString().trim();
const msg=(row.message||'').toString().trim();
if(!cat||!name)return;
if(cat==='donor')donors.push(name+(msg?' - '+msg:''));
else if(cat==='news')news.push(msg||name);
else if(cat==='permanent')permanent.push(name);
});
if(donors.length)document.getElementById('tickerContent').textContent='🙏 '+donors.join('  🙏  ')+' 🙏';
else document.getElementById('tickerContent').textContent='🙏 దాతల జాబితా త్వరలో...';
const nl=document.getElementById('newsList');
if(news.length)nl.innerHTML=news.map(n=>'<div class="news-item">📢 '+n+'</div>').join('');
else nl.innerHTML='<div class="loading">ప్రకటనలు లేవు</div>';
const wg=document.getElementById('wallGrid');
if(permanent.length)wg.innerHTML=permanent.map(n=>'<div class="wall-name">'+n+'</div>').join('');
else wg.innerHTML='<div class="loading">దాతల పేర్లు త్వరలో...</div>';
}catch(e){console.error(e);}
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
