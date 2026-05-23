const donorDatabase=[
{ name: "శ్రీ బాత్యాల చెంగల రాయుడు", amount: "60,000" },
  { name: "శ్రీ ముద్దా బాబుల్ రెడ్డి", amount: "50,000" },
  { name: "శ్రీ కుప్పాల రమణయ్య (వెంకట సుబ్బయ్య)", amount: "75,116" },
  { name: "శ్రీ కొండేటి చెంగయ్య (తండ్రి చిన్నగంగయ్య)", amount: "55,000" },
  { name: "శ్రీ కొండేటి సుబ్రహ్మణ్యం (బుంగయ్య)", amount: "55,000" },
  { name: "శ్రీ కుప్పాల శాంతమ్మ", amount: "50,000" },
  { name: "శ్రీ పటం వెంకటేశ్వర్లు", amount: "30,116" },
  { name: "శ్రీ పటం నారాయణ (పెద్ద నరసింహులు)", amount: "30,116" },
  { name: "శ్రీ కొండేటి జయరామయ్య", amount: "25,116" },
  { name: "శ్రీ కొండేటి అనంత రాయుడు (తిరుపాలు)", amount: "25,000" },
  { name: "శ్రీ కుప్పాల చంద్రశేఖర్", amount: "22,222" },
  { name: "శ్రీ కొండేటి వెంకటరాయుడు", amount: "20,116" },
  { name: "శ్రీ పటం సుబ్రహ్మణ్యం (చిన్న చెంగయ్య)", amount: "20,116" },
  { name: "శ్రీ చెంగల రాయుడు (చిన్న చెంగయ్య)", amount: "20,116" },
  { name: "శ్రీ కుప్పాల సిద్ధరామయ్య", amount: "20,116" },
  { name: "శ్రీ అంబటి సిద్దమ్మ", amount: "20,116" },
  { name: "శ్రీ గంగాల తిరుపాలు", amount: "20,116" },
  { name: "శ్రీ చవ్వాకుల వెంకట నరసింహులు", amount: "20,116" },
  { name: "శ్రీ కొండేటి సుబ్రహ్మణ్యం (రామిశెట్టి)", amount: "20,116" },
  { name: "శ్రీ కొండేటి శ్రీనివాసులు (చిన్నగంగయ్య)", amount: "20,116" },
  { name: "శ్రీ కుప్పాల నారాయణ (చెంగయ్య)", amount: "15,516" },
  { name: "శ్రీ పటం రామయ్య (పొట్నారిగారి)", amount: "15,116" },
  { name: "శ్రీ పసుపులేటి సుబ్బరామయ్య", amount: "15,116" },
  { name: "శ్రీ కుప్పాల నారాయణ", amount: "13,116" },
  { name: "శ్రీ కొండేటి చంద్రయ్య (చిన్న గంగయ్య)", amount: "10,116" },
  { name: "శ్రీ కొండేటి భాస్కర్ (బుంగయ్య)", amount: "10,116" },
  { name: "శ్రీ కొండేటి రామచంద్రయ్య (మొద్దయ్య)", amount: "10,116" },
  { name: "శ్రీ చవ్వాకుల రాయుడు", amount: "10,116" }, // రామయ్య నుండి రాయుడు గా మార్చబడింది
  { name: "శ్రీ కుప్పాల నారాయణ (వెంకటయ్య)", amount: "10,116" },
  { name: "శ్రీ కుప్పాల శ్రీహరి (వెంకటయ్య)", amount: "10,116" },
  { name: "శ్రీ గుత్తి తిరుపాలు", amount: "10,000" }, // Gutthi Tirupalu తెలుగులోకి మార్చబడింది
  { name: "శ్రీ కొండేటి చెంగయ్య (పుతికయ్య)", amount: "10,116" }, // Putikayya స్పెల్లింగ్ ప్రకారం పుతికయ్య స్థిరపరచబడింది
  { name: "శ్రీ కొండేటి అనంతరాయుడు (సుబ్బరాయుడు)", amount: "10,116" },
  { name: "శ్రీ పటం వెంకటయ్య (కొత్త)", amount: "10,116" },
  { name: "శ్రీ పటం శ్రీనివాసులు (కొత్త)", amount: "10,116" },
  { name: "శ్రీ కొండేటి శంకరయ్య (మొద్దయ్య)", amount: "10,116" },
  { name: "శ్రీ పటం సిద్దమ్మ (భర్త సుబ్బయ్య)", amount: "10,116" },
  { name: "శ్రీ పటం రాయుడు (సుబ్బరాయుడు)", amount: "10,116" },
  { name: "శ్రీ అలం సుబ్బరాయుడు (పిచ్చయ్య గారి)", amount: "10,116" },
  { name: "శ్రీ కొండేటి ఈش్వరయ్య (చిన్న వెంకటమ్మ)", amount: "10,116" },
  { name: "శ్రీ అలం సుబ్బరాయుడు (పిచ్చయ్య గారి)", amount: "10,116" },
  { name: "శ్రీ కొండేటి రాజయ్య", amount: "10,116" },
  { name: "శ్రీ కుప్పాల క్రిష్టయ్య (లింగి రెడ్డిపల్లి)", amount: "10,116" },
  { name: "శ్రీ కుప్పాల జయరామయ్య (లింగి రెడ్డిపల్లి)", amount: "10,116" },
  { name: "శ్రీ కోలా చెంగల్రాయుడు", amount: "10,116" },
  { name: "శ్రీ కొండేటి అనంతరాయుడు (ఓబులయ్య)", amount: "10,116" },
  { name: "శ్రీ అలం మనయ్య (సుబ్బరాయుడు)", amount: "10,116" },
  { name: "శ్రీ ఆలం చిన్న సుబ్బయ్య", amount: "10,116" },
  { name: "శ్రీ కొండేటి మురళి (సుబ్బరాయుడు)", amount: "10,116" },
  { name: "శ్రీ చవ్వాకుల చెంగల్ రాయుడు", amount: "10,116" },
  { name: "శ్రీ అలం గోవర్ధన", amount: "10,116" },
  { name: "శ్రీ కొండేటి ఆదినారాయణ", amount: "10,116" },
  { name: "శ్రీ పటం అనంతయ్య (మూగయ్య)", amount: "10,116" },
  { name: "శ్రీ కుప్పాల నరసింహులు (లక్ష్మయ్య)", amount: "10,116" },
  { name: "శ్రీ పటం పార్వతి (భర్త చలపతి)", amount: "10,116" },
  { name: "శ్రీ అలం వెంకట్రాయుడు", amount: "10,116" },
  { name: "శ్రీ అలం శంకరయ్య (వెంకట్రామయ్య)", amount: "10,116" },
  { name: "శ్రీ అలం అదిలక్ష్మమ్మ", amount: "10,116" },
  { name: "శ్రీ అలం నడిపి చెంగయ్య (పాళగ్గారి)", amount: "10,116" },
  { name: "శ్రీ అలం మనోహర్", amount: "10,116" },
  { name: "శ్రీ కొండేటి నరసింహులు (పెద్దయ్య)", amount: "10,116" },
  { name: "శ్రీ అలం ఈش్వరయ్య (దొర)", amount: "10,116" },
  { name: "శ్రీ అలం వెంకటయ్య (వెంకట్రామయ్య)", amount: "10,116" },
  { name: "శ్రీ కొండేటి రమణయ్య (బుంగయ్య)", amount: "10,116" },
  { name: "శ్రీ తులసిగారి సుబ్బా రాయుడు", amount: "10,116" },
  { name: "శ్రీ అలం నడిపి చెంగయ్య (పొట్టయ్య)", amount: "10,116" },
  { name: "శ్రీ అలం శ్రీనివాసులు (పొట్టయ్య)", amount: "10,116" },
  { name: "శ్రీ కొండేటి రఘురామయ్య (మొద్దయ్య)", amount: "10,116" },
  { name: "శ్రీ కొండేటి వెంకటయ్య (కర్రెయ్య)", amount: "10,000" },
  { name: "శ్రీ అలం సుబ్బరాయుడు (వీధిలో)", amount: "5,116" },
  { name: "శ్రీ అలం వెంకట సుబ్బయ్య (వీధిలో)", amount: "5,116" },
  { name: "శ్రీ కుప్పాల వసంతరాయుడు", amount: "5,116" },
  { name: "శ్రీ అలం చెంగయ్య (గోవిందు గారి)", amount: "5,116" },
  { name: "శ్రీ అలం శ్రీనివాసులు (తిరుపాలు)", amount: "5,116" },
  { name: "శ్రీ గంగాల సుధాకర్", amount: "5,116" },
  { name: "శ్రీ అలం శ్రీహరి", amount: "5,116" },
  { name: "శ్రీ అలం ఈశ్వరమ్మ (భర్త సుబ్బరాయుడు)", amount: "5,116" },
  { name: "శ్రీ అలం యానాది (తిరుపాలు)", amount: "5,116" },
  { name: "శ్రీ అలం శేషయ్య", amount: "5,116" },
  { name: "శ్రీ యద్దల రమేష్", amount: "5,116" },
  { name: "శ్రీ అలం నరసమ్మ భర్త గంగరాయుడు", amount: "5,116" },
  { name: "శ్రీ కుప్పాల సావిత్రమ్మ", amount: "5,116" },
  { name: "శ్రీ కుప్పాల సిద్దయ్య", amount: "5,116" },
  { name: "శ్రీ సదవల శంకరయ్య", amount: "5,116" }, // Sadhavala కు సరిపోయేలా సదవల (దీర్ఘం లేకుండా) మార్చబడింది
  { name: "శ్రీ కుప్పాల రామకృష్ణయ్య", amount: "5,116" },
  { name: "శ్రీ కొండేటి అనంతయ్య (లచ్చా గారి)", amount: "5,116" },
  { name: "శ్రీ కొండేటి చంద్రయ్య (చిన్న వెంకటమ్మ)", amount: "5,116" },
  { name: "శ్రీ ఆలం చెంగయ్య (చిన్న సుబ్బయ్య)", amount: "5,050" },
  { name: "శ్రీ అలం నరసయ్య", amount: "5,020" },
  { name: "శ్రీ అలం చిన్న చెంగయ్య (పాళగ్గారి)", amount: "5,000" },
  { name: "శ్రీ సదవల వెంకటరమణ", amount: "5,100" }, // Sadhavala కు సరిపోయేలా సదవల గా మార్చబడింది
  { name: "శ్రీ అలం చలపతి (శేషనగారి)", amount: "5,116" }, // శేషన నుండి శేషనగారి గా మార్చబడింది
  { name: "శ్రీ పటం పెద్ద నరసింహులు", amount: "5,000" },
  { name: "శ్రీ అలం చెంగయ్య (టైలర్)", amount: "5,116" },
  { name: "శ్రీ కొండేటి రమణయ్య (దాసన గారి)", amount: "5,000" },
  { name: "శ్రీ కొండేటి వెంకటయ్య (పేటయ్యగారి)", amount: "5,516" },
  { name: "శ్రీ కొండేటి సుబ్రహ్మణ్యం (పెద్ద గంగయ్య)", amount: "5,016" },
  { name: "శ్రీ కొండేటి ఈش్వరయ్య (దాసన  గారి)", amount: "5,000" },
  { name: "శ్రీ కుప్పాల వెంకటయ్య", amount: "45,000" },
  { name: "శ్రీ పటం రంగయ్య (తండ్రి నారయ్య)", amount: "40,000" }, // నారాయణ నుండి నారయ్య (Naraiah) గా మార్చబడింది
  { name: "శ్రీ నారే సిద్దయ్య", amount: "27,116" },
  { name: "శ్రీ మల్లిశెట్టి సుబ్బరాయుడు", amount: "10,500" }, // మల్లినేని నుండి మల్లిశెట్టి (MaliShetty) గా మార్చబడింది
  { name: "శ్రీ సానేపల్లి సరస్వతి", amount: "10,116" },
  { name: "శ్రీ కోలా మురళీకృష్ణ", amount: "5,116" },
  { name: "శ్రీ అలం రాజశేఖర్ (తిరుపాలు)", amount: "5,116" },
  { name: "శ్రీ చింతకాయల దినేష్", amount: "5,116" },
  { name: "శ్రీ తోట లక్ష్మి దేవి (భర్త తిరుపాలు)", amount: "12,500" },
  { name: "శ్రీ యద్దల కళావతి", amount: "10,116" },
  { name: "శ్రీ కొండేటి చెంగయ్య (ముడపల)", amount: "10,116" }, // mudapala (దీర్ఘం లేకుండా) స్థిరపరచబడింది
  { name: "శ్రీ పల్లా నారాయణ", amount: "5,116" },
  { name: "శ్రీ కొండేటి శ్రీనివాసులు (చిన్నపేటయ్య)", amount: "5,116" },
  { name: "శ్రీ తులసిగారి వెంకటయ్య", amount: "10,500" },
  { name: "శ్రీ తులసిగారి సుబ్బులయ్య", amount: "10,116" }, // సుబ్బరాయుడు నుండి సుబ్బులయ్య (Subbulaiah) గా మార్చబడింది
  { name: "శ్రీ యనమనేని గుల్లా", amount: "10,116" },
  { name: "శ్రీ పసుపులేటి వెంకటసుబ్బయ్య (సీతంగారి)", amount: "5,000" },
  { name: "శ్రీ తోట శ్రీనివాసులు (సుబ్బయ్య)", amount: "10,500" },
  { name: "శ్రీ భాస్కరాచారి", amount: "5,116" },
  { name: "శ్రీ కంచర్ల కట్టయ్య", amount: "5,116" },
  { name: "శ్రీ కంచర్ల కార్తీక్", amount: "5,116" },
  { name: "శ్రీ లక్ష్మిపతి (R.M.P)", amount: "5,000" },
  { name: "శ్రీ అంబటి అనంతమ్మ", amount: "10,000" },
  { name: "శ్రీ కొండేటి చిన్న వెంకటయ్య (ముడపల)", amount: "5,116" }, // muddapala కు సరిపోయేలా ముద్దపాల గా మార్చబడింది
  { name: "శ్రీ పటం శ్రీనివాసులు (లచ్చ గారి)", amount: "10,116" }, // లచ్చన్న నుండి లచ్చా (Laccha) గా మార్చబడింది
  { name: "శ్రీ కొండేటి చిన్నయ్య (రామిశెట్టి)", amount: "6,216" },
  { name: "శ్రీ కొండేటి చెంగయ్య (పెద్ద గంగయ్య)", amount: "5,000" },
  { name: "శ్రీ అలం నారాయణ (వెంకట రామయ్య)", amount: "5,000" }, // వెంకట సుబ్బయ్య నుండి వెంకట రామయ్య గా మార్చబడింది
  { name: "ఎన్. బోటుమీదపల్లె గ్రామస్తులు", amount: "15,600" }, // కోటమీదపల్లె నుండి ఎన్. బోటుమీదపల్లె (N.Boatu meedapalle) గా మార్చబడింది
  { name: "శ్రీ అలం సుబ్బరాయుడు (శేషన గారి)", amount: "5,116" },
  { name: "శ్రీ కొండేటి చలపతి (కర్రెయ్య)", amount: "5,300" },
  { name: "శ్రీ వర్షనగారి క్రిష్టయ్య", amount: "5,000" },
  { name: "శ్రీ వర్షనగారి వెంకటసుబ్బయ్య", amount: "10,000" },
  { name: "శ్రీ ఏనుగుల వెంకటమ్మ", amount: "5,000" }, // వెంకటయ్య నుండి వెంకటమ్మ గా మార్చబడింది
  { name: "శ్రీ అలం చెంగయ్య (సుబ్బరామయ్య)", amount: "5,000" },
  { name: "శ్రీ పన్నీరు వెంకటలక్ష్మమ్మ (అనంత రాయుడు)", amount: "5,000" },
  { name: "శ్రీ నాయుడారి శ్రీ రాములు", amount: "5,000" },
  { name: "శ్రీ గుర్రం కొండ నరసింహులు", amount: "5,116" }
];

// Render all donors as scrollable list + auto-highlight
const scroller=document.getElementById('wheel-scroller');
let donorIndex=0;
let userScrolling=false;
let scrollTimeout;

// Build full list once
function buildDonorList(){
if(!scroller)return;
let html='';
donorDatabase.forEach((d,i)=>{
html+=`<div class="donor-row" id="donor-${i}" style="transition:all .4s;text-align:center;padding:6px 8px;word-wrap:break-word;font-size:11px;opacity:0.5;color:#fff;transform:scale(0.9)">${d.name} — ₹${d.amount}/-</div>`;
});
scroller.innerHTML=html;
}

// Highlight current donor
function highlightDonor(){
if(!scroller||userScrolling)return;
const rows=scroller.querySelectorAll('.donor-row');
rows.forEach((row,i)=>{
if(i===donorIndex){
row.style.cssText='transition:all .4s;text-align:center;padding:6px 8px;word-wrap:break-word;font-size:14px;font-weight:900;color:#FFC000;transform:scale(1.1);opacity:1';
scroller.scrollTop=row.offsetTop-scroller.offsetHeight/2+row.offsetHeight/2;
}else{
row.style.cssText='transition:all .4s;text-align:center;padding:6px 8px;word-wrap:break-word;font-size:11px;opacity:0.5;color:#fff;transform:scale(0.9)';
}
});
donorIndex=(donorIndex+1)%donorDatabase.length;
}

// Pause auto-scroll when user touches/scrolls
if(scroller){
scroller.addEventListener('touchstart',()=>{userScrolling=true;clearTimeout(scrollTimeout);});
scroller.addEventListener('scroll',()=>{
userScrolling=true;
clearTimeout(scrollTimeout);
scrollTimeout=setTimeout(()=>{userScrolling=false;},4000);
});
}

buildDonorList();
highlightDonor();
setInterval(highlightDonor,2500);

// Trust Ledger - calculate total from donorDatabase
const totalAmt=donorDatabase.reduce((sum,d)=>sum+parseInt(d.amount.replace(/,/g,''),10),0);
const ledgerEl=document.getElementById('ledgerTotal');
if(ledgerEl)ledgerEl.textContent='₹ '+totalAmt.toLocaleString('en-IN')+'/-';
const ledgerInline=document.getElementById('ledgerInline');
if(ledgerInline)ledgerInline.textContent='మొత్తం లభ్యమైన ఆలయ నిధి: ₹'+totalAmt.toLocaleString('en-IN')+'/-';

// Recent Transactions Applause
const recentTx=document.getElementById('recentTx');
if(recentTx){
const last5=donorDatabase.slice(0,5);
let html='<h4>ఇటీవలి స్వామివారి సేవకులు</h4>';
last5.forEach(d=>{html+=`<div class="tx-row">👏 ${d.name} గారు — ₹${d.amount}/- సమర్పించారు</div>`;});
recentTx.innerHTML=html;
}
