import { useState, useEffect, useCallback } from "react";

// ─── STORAGE ─────────────────────────────────────────────────────────────────
const _m={};
function sGet(k,d){try{const v=window.localStorage.getItem(k);return v?JSON.parse(v):d;}catch{return _m[k]!==undefined?_m[k]:d;}}
function sSet(k,v){_m[k]=v;try{window.localStorage.setItem(k,JSON.stringify(v));}catch{}}
function useStorage(key,def){
  const[val,setVal]=useState(()=>sGet(key,def));
  const set=useCallback(v=>{const n=typeof v==="function"?v(sGet(key,def)):v;sSet(key,n);setVal(n);},[key]);
  return[val,set];
}

// ─── DESIGN TOKENS ───────────────────────────────────────────────────────────
const C={bg:"#F5F6FA",white:"#FFFFFF",border:"#E8EAF0",borderStrong:"#D0D4E0",text:"#1A1D2E",sub:"#6B7080",muted:"#9CA3AF",accent:"#2D6EF5",accentLight:"#EBF1FE",accentDark:"#1A4FCC",green:"#18A96B",greenLight:"#E6F7F1",orange:"#F08C1A",orangeLight:"#FEF3E2",red:"#E5424D",redLight:"#FDEAEC",purple:"#7C5CBF",purpleLight:"#F0EBFA",teal:"#1AADAC",tealLight:"#E5F6F6",job2:"#0891B2",job2Light:"#E0F7FA"};

// ─── PAY DATA (1 July 2025) ───────────────────────────────────────────────────
const STREAMS={
  SACS:{label:"Social & Community Services",short:"SACS",icon:"🤝",desc:"Case managers, support coordinators, welfare workers",ot:3,
    levels:{"L1P1":26.30,"L1P2":27.15,"L1P3":28.12,"L2P1":34.58,"L2P2":35.67,"L2P3":36.75,"L2P4":37.73,"L3P1":38.65,"L3P2":39.77,"L3P3":40.62,"L3P4":41.45,"L4P1":44.58,"L4P2":45.75,"L4P3":46.93,"L4P4":47.97,"L5P1":51.00,"L5P2":52.10,"L5P3":53.31,"L6P1":55.72,"L6P2":56.95,"L6P3":58.19,"L7P1":60.27,"L7P2":61.53,"L7P3":62.79,"L8P1":65.39,"L8P2":66.67,"L8P3":67.96}},
  HC:{label:"Home Care – Disability",short:"Home Care",icon:"🏠",desc:"Support workers, personal care, community access",ot:2,
    levels:{"L1P1":26.30,"L1P2":27.15,"L1P3":28.12,"L2P1":27.55,"L2P2":28.40,"L2P3":29.32,"L2P4":30.08,"L3P1":30.86,"L3P2":31.74,"L3P3":32.44,"L3P4":33.11,"L4P1":35.58,"L4P2":36.50,"L4P3":37.44,"L4P4":38.28,"L5P1":40.72,"L5P2":41.60,"L5P3":42.57,"L6P1":44.51,"L6P2":45.48,"L6P3":46.46,"L7P1":48.14,"L7P2":49.13,"L7P3":50.14,"L8P1":52.24,"L8P2":53.30,"L8P3":54.37}},
  CA:{label:"Crisis Accommodation",short:"Crisis",icon:"🏡",desc:"Crisis support workers, refuge workers",ot:3,
    levels:{"L1P1":38.65,"L1P2":39.77,"L1P3":40.62,"L1P4":41.45,"L2P1":44.58,"L2P2":45.75,"L2P3":46.93,"L2P4":47.97,"L3P1":51.00,"L3P2":52.10,"L3P3":53.31,"L4P1":55.72,"L4P2":56.95,"L4P3":58.19}},
};
const LS={
  SACS:[{k:"L1",l:"Level 1",p:["P1","P2","P3"]},{k:"L2",l:"Level 2",p:["P1","P2","P3","P4"]},{k:"L3",l:"Level 3",p:["P1","P2","P3","P4"]},{k:"L4",l:"Level 4",p:["P1","P2","P3","P4"]},{k:"L5",l:"Level 5",p:["P1","P2","P3"]},{k:"L6",l:"Level 6",p:["P1","P2","P3"]},{k:"L7",l:"Level 7",p:["P1","P2","P3"]},{k:"L8",l:"Level 8",p:["P1","P2","P3"]}],
  HC:[{k:"L1",l:"Level 1",p:["P1","P2","P3"]},{k:"L2",l:"Level 2",p:["P1","P2","P3","P4"]},{k:"L3",l:"Level 3",p:["P1","P2","P3","P4"]},{k:"L4",l:"Level 4",p:["P1","P2","P3","P4"]},{k:"L5",l:"Level 5",p:["P1","P2","P3"]},{k:"L6",l:"Level 6",p:["P1","P2","P3"]},{k:"L7",l:"Level 7",p:["P1","P2","P3"]},{k:"L8",l:"Level 8",p:["P1","P2","P3"]}],
  CA:[{k:"L1",l:"Level 1",p:["P1","P2","P3","P4"]},{k:"L2",l:"Level 2",p:["P1","P2","P3","P4"]},{k:"L3",l:"Level 3",p:["P1","P2","P3"]},{k:"L4",l:"Level 4",p:["P1","P2","P3"]}],
};
const STATES=[{k:"QLD",l:"Queensland",c:"#E07B2A",bg:"#FEF3E2"},{k:"NSW",l:"New South Wales",c:"#2D6EF5",bg:"#EBF1FE"},{k:"VIC",l:"Victoria",c:"#7C5CBF",bg:"#F0EBFA"},{k:"WA",l:"Western Australia",c:"#1AADAC",bg:"#E5F6F6"},{k:"SA",l:"South Australia",c:"#E5424D",bg:"#FDEAEC"},{k:"TAS",l:"Tasmania",c:"#18A96B",bg:"#E6F7F1"},{k:"ACT",l:"ACT",c:"#6B7080",bg:"#F0F1F5"},{k:"NT",l:"Northern Territory",c:"#F08C1A",bg:"#FEF3E2"}];
const QLD_PH=["2026-01-01","2026-01-26","2026-04-03","2026-04-04","2026-04-05","2026-04-06","2026-04-25","2026-05-04","2026-08-12","2026-10-05","2026-12-25","2026-12-26","2026-12-28","2025-12-25","2025-12-26","2025-12-29"];
const AL={bs1:20.82,bs2:27.56,sleepDef:60.02,km:0.99,fa:0.54,faCap:40.92};

// Leave accrual rates per OTE hour (non-casual only)
const LEAVE={
  alShift:5*38/52/38,   // 5 weeks shift worker = 0.09615 hrs/OTE hr
  alNormal:4*38/52/38,  // 4 weeks = 0.07692 hrs/OTE hr
  sick:1/26,            // 1/26 of hours worked
};

// ─── ATO TAX (NAT 1004 + Schedule 8, 2025-26) ────────────────────────────────
const SCALE1=[{max:150,a:0.16,b:0.16},{max:371,a:0.2117,b:7.755},{max:515,a:0.189,b:-0.6702},{max:932,a:0.3227,b:68.2367},{max:2246,a:0.32,b:65.7202},{max:3303,a:0.39,b:222.951},{max:Infinity,a:0.47,b:487.2587}];
const SCALE2=[{max:361,a:0,b:0},{max:500,a:0.16,b:57.8462},{max:625,a:0.26,b:107.8462},{max:721,a:0.18,b:57.8462},{max:865,a:0.189,b:64.3365},{max:1282,a:0.3227,b:180.0385},{max:2596,a:0.32,b:176.5769},{max:3653,a:0.39,b:358.3077},{max:Infinity,a:0.47,b:650.6154}];
const HELP_TFT=[{max:1288,a:0,b:0},{max:2403,a:0.15,b:193.2692},{max:3447,a:0.17,b:241.3462},{max:Infinity,a:0.10,b:0}];
const HELP_NOTFT=[{max:938,a:0,b:0},{max:2053,a:0.15,b:140.7692},{max:2597,a:0.17,b:181.8462},{max:Infinity,a:0.10,b:0}];

function applyScale(scale,raw){
  const x=Math.floor(raw)+0.99;
  for(const r of scale){if(x<=r.max)return Math.max(0,Math.round(r.a*x-r.b));}
  const l=scale[scale.length-1];return Math.max(0,Math.round(l.a*x-l.b));
}

// Tax: base = gross - pkg - sac. HELP: base = gross.
function calcTax(grossFortnight,profile){
  const pkg=parseFloat(profile.pkgAmt)||0;
  const sacPct=(parseFloat(profile.sacPct)||0)/100;
  const sac=grossFortnight*sacPct;
  const taxable=Math.max(0,grossFortnight-pkg-sac);
  const scale=profile.tfThreshold?SCALE2:SCALE1;
  const tax=applyScale(scale,Math.floor(taxable/2))*2;
  let help=0;
  if(profile.helpDebt){
    const helpScale=profile.tfThreshold?HELP_TFT:HELP_NOTFT;
    help=applyScale(helpScale,Math.floor(grossFortnight/2))*2;
  }
  const takeHome=Math.max(0,grossFortnight-tax-help-sac-pkg);
  return{tax,help,sac,pkg,taxable,takeHome};
}

// ─── PAY MATHS ───────────────────────────────────────────────────────────────
const fmt=n=>`$${n.toFixed(2)}`;
const fmtR=n=>`$${Math.round(n).toLocaleString()}`;
const fmtH=n=>`${n.toFixed(1)}h`;

function toMins(t){const[h,m]=t.split(":").map(Number);return h*60+m;}
function calcHrs(s,e){let a=toMins(s),b=toMins(e);if(b<=a)b+=1440;return(b-a)/60;}
function isPH(d,st){return st==="QLD"?QLD_PH.includes(d):false;}

function getBaseRate(job){
  if(job.customRate) return parseFloat(job.customRate)||0;
  if(job.stream&&job.level&&job.payPoint) return STREAMS[job.stream]?.levels[`${job.level}${job.payPoint}`]||0;
  return 0;
}

function segMult(sm,em,dow,ph,cas){
  if(ph)return cas?2.75:2.50;
  if(dow===0)return 2.00;if(dow===6)return 1.50;
  if(em>1440||sm<360)return 1.15;if(em>1200)return 1.125;return 1.00;
}
function segLabel(m){
  if(m>=2.75)return"Public Holiday (casual)";if(m>=2.5)return"Public Holiday";
  if(m>=2.0)return"Sunday rate";if(m>=1.5)return"Saturday rate";
  if(m>=1.15)return"Night shift";if(m>=1.125)return"Afternoon shift";return"Ordinary time";
}

function calcShift(shift,base,cas,streamKey,wkH){
  const h=calcHrs(shift.startTime,shift.endTime);
  const d=new Date(shift.date+"T00:00:00"),dow=d.getDay();
  const ph=shift.isPublicHoliday||false;
  const sm=toMins(shift.startTime),em=sm+(h*60);
  const m=segMult(sm,em,dow,ph,cas);
  const eb=cas?base*1.25:base;
  const thr=(streamKey&&STREAMS[streamKey]?.ot)||2;
  const wd=dow>=1&&dow<=5&&!ph;
  let ord=0,ot=0,oteH=0;
  if(wd&&wkH<38){const r=38-wkH,oh=Math.min(h,r),oth=Math.max(0,h-r);ord=oh*eb*m;oteH=oh;if(oth>0){const o1=Math.min(oth,thr),o2=Math.max(0,oth-thr);ot=o1*eb*1.5+o2*eb*2.0;}}
  else if(wd){const o1=Math.min(h,thr),o2=Math.max(0,h-thr);ot=o1*eb*1.5+o2*eb*2.0;}
  else{ord=h*eb*m;oteH=h;}
  const km=(shift.km||0)*AL.km;
  const sl=shift.sleepover?(parseFloat(shift.sleeoverAmt)||AL.sleepDef):0;
  const bs=shift.brokenShift===1?AL.bs1:shift.brokenShift===2?AL.bs2:0;
  return{h,m,ord,ot,km,sl,bs,gross:ord+ot+km+sl+bs,oteH,otePay:ord,label:segLabel(m),type:"regular"};
}

function calcSleeoverShift(shift,base,cas,streamKey,wkH){
  const d=new Date(shift.date+"T00:00:00"),dow=d.getDay();
  const ph=shift.isPublicHoliday||false;
  const eb=cas?base*1.25:base;
  const maxOrd=shift.soAgreement?12:8;
  let totalActive=0,totalOrd=0,totalOT=0,totalOTE=0,totalOTEPay=0;
  const segments=[];
  const calcSeg=(sMins,eMins,accActive)=>{
    const h=(eMins-sMins)/60;
    const m=segMult(sMins,eMins,dow,ph,cas);
    const remaining=Math.max(0,maxOrd-accActive);
    const ordH=Math.min(h,remaining),otH=Math.max(0,h-remaining);
    return{h,m,ordH,otH,ordPay:ordH*eb*m,otPay:otH*eb*2.0,label:segLabel(m)};
  };
  if(shift.startTime&&shift.soStart){
    const sMins=toMins(shift.startTime);let eMins=toMins(shift.soStart);if(eMins<=sMins)eMins+=1440;
    const seg=calcSeg(sMins,eMins,totalActive);
    totalActive+=seg.h;totalOrd+=seg.ordPay;totalOT+=seg.otPay;totalOTE+=seg.ordH;totalOTEPay+=seg.ordPay;
    segments.push({label:`Active ${shift.startTime}–${shift.soStart}`,h:seg.h,pay:seg.ordPay+seg.otPay,segLabel:seg.label});
  }
  const slAmt=parseFloat(shift.sleeoverAmt)||AL.sleepDef;
  let wakeupTotal=0;
  (shift.wakeups||[]).forEach((wu)=>{
    if(!wu.start||!wu.end)return;
    const rawH=calcHrs(wu.start,wu.end),wuH=Math.max(1,Math.ceil(rawH));
    wakeupTotal+=wuH;
    const prev=Math.min(wakeupTotal-wuH,2),inFirst=Math.max(0,Math.min(wuH,2-prev)),inSecond=Math.max(0,wuH-inFirst);
    const wuPay=inFirst*eb*1.5+inSecond*eb*2.0;
    totalOT+=wuPay;totalActive+=wuH;
    segments.push({label:`Wakeup ${wu.start}–${wu.end} (min ${wuH}h)`,h:wuH,pay:wuPay,segLabel:inSecond>0?"200% wakeup":"150% wakeup"});
  });
  const km=(shift.km||0)*AL.km;
  const gross=totalOrd+totalOT+slAmt+km;
  return{type:"sleepover",h:totalActive,ord:totalOrd,ot:totalOT,sl:slAmt,km,bs:0,gross,oteH:totalOTE,otePay:totalOTEPay,segments,label:"Sleepover shift"};
}

function autoBroken(dayShifts){
  if(dayShifts.length<2)return 0;
  const s=[...dayShifts].sort((a,b)=>a.startTime.localeCompare(b.startTime));
  let g=0;for(let i=1;i<s.length;i++){const pe=toMins(s[i-1].endTime),ns=toMins(s[i].startTime);if((ns-pe)>60)g++;}
  return Math.min(g,2);
}

function needsRestBreakOT(shift,allShifts){
  const shiftStart=new Date(shift.date+"T"+shift.startTime+":00");
  const prev=allShifts.filter(s=>s.id!==shift.id).map(s=>{
    const endT=s.soEnd||(s.soActiveAfterEnd||s.endTime);
    return{end:new Date(s.date+"T"+endT+":00")};
  }).filter(x=>x.end<shiftStart).sort((a,b)=>b.end-a.end)[0];
  if(!prev)return{needsOT:false};
  const gapHrs=(shiftStart-prev.end)/3600000;
  return{needsOT:gapHrs<10,gap:gapHrs};
}

// Aggregate shifts for ONE job
function aggregateShifts(shifts,job,profile){
  const base=getBaseRate(job);
  if(!base)return null;
  const cas=job.empType==="casual";
  const stream=job.stream||null;
  const byDate={};shifts.forEach(s=>{(byDate[s.date]=byDate[s.date]||[]).push(s);});
  const wkH={};
  let tOrd=0,tOT=0,tKm=0,tBs=0,tSl=0,tH=0,tOTEH=0,tOTE=0;
  const calcs=[];
  [...shifts].sort((a,b)=>a.date.localeCompare(b.date)||a.startTime.localeCompare(b.startTime)).forEach(s=>{
    const d=new Date(s.date+"T00:00:00"),ws=new Date(d);ws.setDate(d.getDate()-d.getDay());
    const wk=ws.toISOString().slice(0,10);
    let c;
    if(s.isSleepover){c=calcSleeoverShift(s,base,cas,stream,wkH[wk]||0);}
    else{
      const rb=needsRestBreakOT(s,shifts);
      c=calcShift(s,base,cas,stream,wkH[wk]||0);
      if(rb.needsOT){const eb=cas?base*1.25:base;c={...c,ord:0,ot:c.h*eb*2.0,gross:c.h*eb*2.0+c.km+c.sl+c.bs,oteH:0,otePay:0,label:`Rest break OT (${rb.gap.toFixed(1)}h gap)`};}
    }
    const day=byDate[s.date]||[];
    const first=[...day].sort((a,b)=>a.startTime.localeCompare(b.startTime))[0]?.id===s.id;
    const ab=first&&!s.isSleepover?autoBroken(day.filter(x=>!x.isSleepover)):0;
    const bsAmt=s.brokenShift>=0?c.bs:ab===1?AL.bs1:ab===2?AL.bs2:0;
    wkH[wk]=(wkH[wk]||0)+c.h;
    tOrd+=c.ord;tOT+=c.ot;tKm+=c.km;tBs+=bsAmt;tSl+=c.sl;tH+=c.h;tOTEH+=c.oteH;tOTE+=c.otePay;
    calcs.push({...c,bs:bsAmt,gross:c.gross+(bsAmt-c.bs),id:s.id,date:s.date,startTime:s.startTime,endTime:s.endTime||(s.soEnd)});
  });
  const cyDays={weekly:7,fortnightly:14,"4weekly":28,monthly:30}[job.cycleFreq||profile.cycleFreq]||14;
  const fa=(job.firstAid||profile.firstAid)?Math.min(tOTEH*AL.fa,AL.faCap*(cyDays/14)):0;
  const gross=tOrd+tOT+tKm+tBs+tSl+fa;
  const sup=tOTE*0.12;
  const tax=calcTax(gross,{...profile,...job});
  // Leave accrual (non-casual only)
  let alHrs=0,sickHrs=0;
  if(!cas){
    const alRate=job.shiftWorker?LEAVE.alShift:LEAVE.alNormal;
    alHrs=tOTEH*alRate;
    sickHrs=tOTEH*LEAVE.sick;
  }
  return{tOrd,tOT,tKm,tBs,tSl,tH,tOTEH,tOTE,fa,sup,gross,calcs,...tax,alHrs,sickHrs,baseRate:base};
}

// Pay cycle helpers
function getPayDays(cycleStart,cycleFreq,payDay,year,month){
  if(!cycleStart||!cycleFreq||!payDay)return[];
  const fd={weekly:7,fortnightly:14,"4weekly":28}[cycleFreq];if(!fd)return[];
  const aS=new Date(cycleStart+"T00:00:00"),aPD=new Date(payDay+"T00:00:00");
  const off=Math.round((aPD-aS)/86400000);
  const mS=new Date(year,month,1),mE=new Date(year,month+1,0);
  let cs=new Date(aS);
  while(cs<new Date(year,month-2,1))cs.setDate(cs.getDate()+fd);
  while(cs>new Date(year,month-1,1))cs.setDate(cs.getDate()-fd);
  const res=[];
  for(let i=0;i<8;i++){
    const ps=new Date(cs);ps.setDate(cs.getDate()+i*fd);
    const pe=new Date(ps);pe.setDate(ps.getDate()+fd-1);
    const pd=new Date(ps);pd.setDate(ps.getDate()+off);
    if(pd>=mS&&pd<=mE)res.push({pd:pd.toISOString().slice(0,10),ps:ps.toISOString().slice(0,10),pe:pe.toISOString().slice(0,10),jobIdx:null});
    if(pd>mE)break;
  }
  return res;
}
function getCycle(cycleStart,cycleFreq){
  if(!cycleStart||!cycleFreq)return null;
  const fd={weekly:7,fortnightly:14,"4weekly":28,monthly:30}[cycleFreq]||14;
  const a=new Date(cycleStart+"T00:00:00"),t=new Date();t.setHours(0,0,0,0);
  let cs=new Date(a);
  while(true){const ne=new Date(cs);ne.setDate(cs.getDate()+fd);if(ne>t)break;cs=ne;}
  const ce=new Date(cs);ce.setDate(cs.getDate()+fd-1);
  return{s:cs.toISOString().slice(0,10),e:ce.toISOString().slice(0,10)};
}
// ─── BASE UI ─────────────────────────────────────────────────────────────────
function Toggle({on,onChange}){return <button onClick={()=>onChange(!on)} style={{width:48,height:28,borderRadius:14,border:"none",cursor:"pointer",background:on?C.accent:C.borderStrong,position:"relative",transition:"background 0.2s",flexShrink:0}}><div style={{position:"absolute",top:3,left:on?22:3,width:22,height:22,borderRadius:11,background:"#fff",boxShadow:"0 1px 4px rgba(0,0,0,0.2)",transition:"left 0.2s"}}/></button>;}
function Card({children,sx,onClick}){return <div onClick={onClick} style={{background:C.white,borderRadius:16,border:`1.5px solid ${C.border}`,padding:16,marginBottom:12,cursor:onClick?"pointer":"default",...sx}}>{children}</div>;}
function Btn({children,v="primary",onClick,sx,disabled}){
  const vs={primary:{background:C.accent,color:"#fff"},ghost:{background:"transparent",color:C.sub},danger:{background:C.red,color:"#fff"},green:{background:C.green,color:"#fff"},outline:{background:"transparent",border:`1.5px solid ${C.border}`,color:C.text},job2:{background:C.job2,color:"#fff"}};
  return <button disabled={disabled} onClick={onClick} style={{width:"100%",padding:"14px 20px",borderRadius:14,border:"none",fontWeight:700,fontSize:15,cursor:disabled?"not-allowed":"pointer",opacity:disabled?0.5:1,marginBottom:8,fontFamily:"inherit",...vs[v],...sx}}>{children}</button>;
}
function Inp({label,sx,...p}){return <div style={{marginBottom:12}}>{label&&<div style={{fontSize:12,fontWeight:600,color:C.sub,marginBottom:5}}>{label}</div>}<input style={{width:"100%",background:C.bg,border:`1.5px solid ${C.border}`,borderRadius:10,color:C.text,fontSize:15,padding:"10px 12px",boxSizing:"border-box",outline:"none",fontFamily:"inherit",...sx}} {...p}/></div>;}
function Sel({label,children,...p}){return <div style={{marginBottom:12}}>{label&&<div style={{fontSize:12,fontWeight:600,color:C.sub,marginBottom:5}}>{label}</div>}<select style={{width:"100%",background:C.bg,border:`1.5px solid ${C.border}`,borderRadius:10,color:C.text,fontSize:15,padding:"10px 12px",boxSizing:"border-box",outline:"none",appearance:"none",fontFamily:"inherit"}} {...p}>{children}</select></div>;}
function PBar({step,total}){return <div style={{display:"flex",gap:4}}>{Array.from({length:total},(_,i)=><div key={i} style={{height:4,flex:1,borderRadius:4,background:i<step?C.accent:C.border}}/>)}</div>;}
function BBn({onClick}){return <button onClick={onClick} style={{background:"none",border:"none",color:C.accent,fontSize:15,fontWeight:600,cursor:"pointer",padding:"4px 0"}}>‹ Back</button>;}
function Div(){return <div style={{borderTop:`1px solid ${C.border}`,margin:"10px 0"}}/>;}
function PRow({label,val,bold,green,small,blue}){return <div style={{display:"flex",justifyContent:"space-between",padding:"6px 0",borderBottom:`1px solid ${C.border}`}}><span style={{fontSize:small?12:14,color:bold?C.text:C.sub,fontWeight:bold?700:400}}>{label}</span><span style={{fontSize:small?12:14,fontWeight:bold?700:500,color:green?C.green:blue?C.accent:bold?C.text:C.sub}}>{val}</span></div>;}
function TBar({title,right}){return <div style={{background:C.white,borderBottom:`1px solid ${C.border}`,padding:"14px 20px",position:"sticky",top:0,zIndex:10,display:"flex",alignItems:"center",justifyContent:"space-between"}}><span style={{fontSize:17,fontWeight:800,color:C.text}}>{title}</span>{right}</div>;}
function BBar({onBack,title,right}){return <div style={{background:C.white,borderBottom:`1px solid ${C.border}`,padding:"14px 20px",display:"flex",alignItems:"center",justifyContent:"space-between"}}><div style={{display:"flex",alignItems:"center",gap:12}}><BBn onClick={onBack}/><span style={{fontSize:17,fontWeight:800,color:C.text}}>{title}</span></div>{right}</div>;}
function RadioRow({label,desc,selected,onClick}){return <div onClick={onClick} style={{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"11px 0",cursor:"pointer",borderBottom:`1px solid ${C.border}`}}><div><div style={{fontWeight:600,fontSize:14,color:C.text}}>{label}</div>{desc&&<div style={{fontSize:12,color:C.sub}}>{desc}</div>}</div><div style={{width:22,height:22,borderRadius:11,border:`2px solid ${selected?C.accent:C.borderStrong}`,background:selected?C.accent:"transparent",display:"flex",alignItems:"center",justifyContent:"center"}}>{selected&&<div style={{width:8,height:8,borderRadius:4,background:"#fff"}}/>}</div></div>;}
function JobBadge({jobIdx}){
  const c=jobIdx===1?C.job2:C.accent;
  const bg=jobIdx===1?C.job2Light:C.accentLight;
  return <span style={{background:bg,color:c,borderRadius:8,fontSize:10,fontWeight:700,padding:"2px 7px",flexShrink:0}}>Job {jobIdx===1?"2":"1"}</span>;
}

// Job setup helper
function ClassificationSelect({job,setJob,label=""}){
  const stream=job.stream||"";const levels=LS[stream]||[];
  const selL=job.level||"",selP=job.payPoint||"";
  return <>
    {label&&<div style={{fontSize:12,fontWeight:700,color:C.sub,marginBottom:8}}>{label}</div>}
    <Sel label="Stream" value={stream} onChange={e=>setJob({...job,stream:e.target.value,level:"",payPoint:""})}>
      <option value="">Select stream…</option>
      {Object.entries(STREAMS).map(([k,v])=><option key={k} value={k}>{v.label}</option>)}
    </Sel>
    {stream&&<>
      <div style={{display:"flex",gap:10}}>
        <div style={{flex:1}}><Sel label="Level" value={selL} onChange={e=>setJob({...job,level:e.target.value,payPoint:""})}><option value="">Level…</option>{(LS[stream]||[]).map(l=><option key={l.k} value={l.k}>{l.l}</option>)}</Sel></div>
        <div style={{flex:1}}><Sel label="Pay Point" value={selP} onChange={e=>setJob({...job,payPoint:e.target.value})}><option value="">Point…</option>{((LS[stream]||[]).find(l=>l.k===selL)?.p||[]).map(pt=><option key={pt} value={pt}>{pt.replace("P","PP ")}</option>)}</Sel></div>
      </div>
    </>}
  </>;
}

function PayCycleFields({obj,setObj}){
  const freq=obj.cycleFreq||"";
  return <Card>
    <div style={{fontSize:12,fontWeight:600,color:C.sub,marginBottom:10}}>PAY FREQUENCY</div>
    <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:8,marginBottom:4}}>
      {[{k:"weekly",l:"Weekly",d:"Every 7 days"},{k:"fortnightly",l:"Fortnightly",d:"Every 14 days"},{k:"4weekly",l:"4-Weekly",d:"Every 28 days"},{k:"monthly",l:"Monthly",d:"Calendar month"}].map(f=>(
        <div key={f.k} onClick={()=>setObj({...obj,cycleFreq:f.k})} style={{padding:"10px 8px",borderRadius:12,cursor:"pointer",textAlign:"center",border:freq===f.k?`2px solid ${C.accent}`:`1.5px solid ${C.border}`,background:freq===f.k?C.accentLight:C.bg}}>
          <div style={{fontWeight:700,fontSize:13,color:freq===f.k?C.accent:C.text}}>{f.l}</div>
          <div style={{fontSize:11,color:C.sub,marginTop:1}}>{f.d}</div>
        </div>
      ))}
    </div>
    <div style={{marginTop:8}}>
      <Inp label="Period start date" type="date" value={obj.cycleStart||""} onChange={e=>setObj({...obj,cycleStart:e.target.value})}/>
      <Inp label="Pay day" type="date" value={obj.payDay||""} onChange={e=>setObj({...obj,payDay:e.target.value})}/>
    </div>
  </Card>;
}
// ─── ONBOARDING ───────────────────────────────────────────────────────────────
const OSTEPS=9;
function OWelcome({onNext}){
  return <div style={{minHeight:"100vh",background:C.bg,display:"flex",flexDirection:"column"}}>
    <div style={{flex:1,padding:"48px 24px 24px",display:"flex",flexDirection:"column",alignItems:"center"}}>
      <div style={{width:80,height:80,borderRadius:22,background:`linear-gradient(135deg,${C.accent},#5B8FFF)`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:36,marginBottom:20,boxShadow:`0 8px 24px ${C.accent}44`}}>💼</div>
      <h1 style={{fontSize:28,fontWeight:800,color:C.text,textAlign:"center",margin:"0 0 10px",lineHeight:1.2}}>Welcome to<br/>SCHADS Pay</h1>
      <p style={{color:C.sub,textAlign:"center",fontSize:15,margin:"0 0 28px",lineHeight:1.5}}>Know exactly what you're owed — built for SCHADS award workers.</p>
      <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:10,width:"100%"}}>
        {[{i:"💰",bg:C.greenLight,t:"Pay Calculator",d:"SCHADS rates & penalties"},{i:"📅",bg:C.accentLight,t:"Shift Calendar",d:"Log and track shifts"},{i:"💵",bg:C.orangeLight,t:"Take-Home Pay",d:"Tax, super & packaging"},{i:"🏖️",bg:C.purpleLight,t:"Leave Tracker",d:"Annual & sick leave accrual"}].map((f,i)=>(
          <div key={i} style={{background:C.white,borderRadius:14,padding:"14px 12px",border:`1.5px solid ${C.border}`}}>
            <div style={{width:32,height:32,borderRadius:10,background:f.bg,display:"flex",alignItems:"center",justifyContent:"center",fontSize:16,marginBottom:8}}>{f.i}</div>
            <div style={{fontWeight:700,fontSize:13,color:C.text,marginBottom:3}}>{f.t}</div>
            <div style={{fontSize:11,color:C.sub,lineHeight:1.4}}>{f.d}</div>
          </div>
        ))}
      </div>
    </div>
    <div style={{padding:"0 24px 40px"}}><Btn onClick={onNext}>Get Started</Btn><p style={{fontSize:11,color:C.muted,textAlign:"center",margin:0}}>Rates: 1 July 2025 · MA000100</p></div>
  </div>;
}

function OStream({p,sp,onNext,onBack,step}){
  const sel=p.stream||"";
  return <div style={{minHeight:"100vh",background:C.bg,display:"flex",flexDirection:"column"}}>
    <div style={{padding:"16px 24px 0",display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:12}}><BBn onClick={onBack}/><PBar step={step} total={OSTEPS}/></div>
    <div style={{flex:1,padding:"24px 24px 0"}}>
      <div style={{fontSize:32,marginBottom:10}}>🏢</div>
      <h2 style={{fontSize:24,fontWeight:800,color:C.text,margin:"0 0 6px"}}>What's your stream?</h2>
      <p style={{color:C.sub,fontSize:14,margin:"0 0 20px",lineHeight:1.5}}>Sets your correct base pay rates.</p>
      {Object.entries(STREAMS).map(([k,v])=>(
        <Card key={k} onClick={()=>sp({...p,stream:k,level:"",payPoint:""})} sx={{border:sel===k?`2px solid ${C.accent}`:`1.5px solid ${C.border}`,background:sel===k?C.accentLight:C.white,marginBottom:10}}>
          <div style={{display:"flex",alignItems:"center",gap:12}}>
            <div style={{width:44,height:44,borderRadius:12,background:sel===k?C.accent:C.bg,display:"flex",alignItems:"center",justifyContent:"center",fontSize:22}}>{v.icon}</div>
            <div style={{flex:1}}><div style={{fontWeight:700,fontSize:15,color:C.text}}>{v.label}</div><div style={{fontSize:12,color:C.sub}}>{v.desc}</div></div>
            {sel===k&&<span style={{color:C.accent,fontSize:18}}>✓</span>}
          </div>
        </Card>
      ))}
    </div>
    <div style={{padding:"16px 24px 40px"}}><Btn onClick={onNext} disabled={!sel}>Continue</Btn></div>
  </div>;
}

function OClass({p,sp,onNext,onBack,step}){
  const stream=p.stream||"",levels=LS[stream]||[];
  const selL=p.level||"",selP=p.payPoint||"",selT=p.empType||"";
  const base=getBaseRate(p);
  return <div style={{minHeight:"100vh",background:C.bg,display:"flex",flexDirection:"column"}}>
    <div style={{padding:"16px 24px 0",display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:12}}><BBn onClick={onBack}/><PBar step={step} total={OSTEPS}/></div>
    <div style={{flex:1,padding:"24px 24px 0",overflowY:"auto"}}>
      <div style={{fontSize:32,marginBottom:10}}>👤</div>
      <h2 style={{fontSize:24,fontWeight:800,color:C.text,margin:"0 0 6px"}}>Your classification</h2>
      <p style={{color:C.sub,fontSize:14,margin:"0 0 20px",lineHeight:1.5}}>Check your contract or payslip.</p>
      <Card>
        <Sel label="Level" value={selL} onChange={e=>sp({...p,level:e.target.value,payPoint:""})}><option value="">Select level…</option>{levels.map(l=><option key={l.k} value={l.k}>{l.l}</option>)}</Sel>
        <Sel label="Pay Point" value={selP} onChange={e=>sp({...p,payPoint:e.target.value})}><option value="">Select pay point…</option>{(levels.find(l=>l.k===selL)?.p||[]).map(pt=><option key={pt} value={pt}>{pt.replace("P","Pay Point ")}</option>)}</Sel>
        <div style={{fontSize:12,fontWeight:600,color:C.sub,marginBottom:8}}>Employment Type</div>
        {[{k:"fulltime",l:"Full-time",d:"38 hrs/week"},{k:"parttime",l:"Part-time",d:"Regular agreed hours"},{k:"casual",l:"Casual",d:"+25% loading, no leave"}].map(t=><RadioRow key={t.k} label={t.l} desc={t.d} selected={selT===t.k} onClick={()=>sp({...p,empType:t.k})}/>)}
      </Card>
      {base>0&&<div style={{background:C.accentLight,borderRadius:14,padding:"14px 16px",marginBottom:12}}><div style={{fontSize:11,fontWeight:600,color:C.accent,marginBottom:4}}>YOUR BASE RATE</div><div style={{fontSize:28,fontWeight:800,color:C.text}}>{fmt(selT==="casual"?base*1.25:base)}<span style={{fontSize:14,color:C.sub}}>/hr</span></div></div>}
      {selT&&selT!=="casual"&&<Card>
        <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
          <div><div style={{fontWeight:600,fontSize:14,color:C.text}}>Shift Worker</div><div style={{fontSize:12,color:C.sub}}>5 weeks AL — vs 4 weeks for non-shift</div></div>
          <Toggle on={!!p.shiftWorker} onChange={v=>sp({...p,shiftWorker:v})}/>
        </div>
      </Card>}
    </div>
    <div style={{padding:"16px 24px 40px"}}><Btn onClick={onNext} disabled={!selL||!selP||!selT}>Continue</Btn></div>
  </div>;
}

function OTax({p,sp,onNext,onBack,step}){
  return <div style={{minHeight:"100vh",background:C.bg,display:"flex",flexDirection:"column"}}>
    <div style={{padding:"16px 24px 0",display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:12}}><BBn onClick={onBack}/><PBar step={step} total={OSTEPS}/></div>
    <div style={{flex:1,padding:"24px 24px 0",overflowY:"auto"}}>
      <div style={{fontSize:32,marginBottom:10}}>🧾</div>
      <h2 style={{fontSize:24,fontWeight:800,color:C.text,margin:"0 0 6px"}}>Tax details</h2>
      <p style={{color:C.sub,fontSize:14,margin:"0 0 20px",lineHeight:1.5}}>Used to estimate take-home pay each pay period.</p>
      <Card>
        <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:14}}><div><div style={{fontWeight:600,fontSize:15,color:C.text}}>Tax-free threshold</div><div style={{fontSize:12,color:C.sub}}>Claim if this is your main job</div></div><Toggle on={!!p.tfThreshold} onChange={v=>sp({...p,tfThreshold:v})}/></div>
        <Div/>
        <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginTop:10,marginBottom:14}}><div><div style={{fontWeight:600,fontSize:15,color:C.text}}>HELP / student debt</div><div style={{fontSize:12,color:C.sub}}>HECS, VSL, SSL, AASL</div></div><Toggle on={!!p.helpDebt} onChange={v=>sp({...p,helpDebt:v})}/></div>
        <Div/>
        <div style={{marginTop:10,marginBottom:14}}>
          <div style={{fontSize:12,fontWeight:600,color:C.sub,marginBottom:6}}>Salary packaging (per fortnight)</div>
          <div style={{display:"flex",alignItems:"center",gap:8}}><span style={{color:C.sub}}>$</span><input type="number" min={0} step={1} placeholder="0" value={p.pkgAmt||""} onChange={e=>sp({...p,pkgAmt:e.target.value})} style={{flex:1,background:C.bg,border:`1.5px solid ${C.border}`,borderRadius:10,color:C.text,fontSize:15,padding:"10px 12px",boxSizing:"border-box",outline:"none",fontFamily:"inherit"}}/></div>
          <p style={{fontSize:11,color:C.muted,margin:"4px 0 0",lineHeight:1.5}}>PBI limit: up to $611.54/fn</p>
        </div>
        <Div/>
        <div style={{marginTop:10}}>
          <div style={{fontSize:12,fontWeight:600,color:C.sub,marginBottom:6}}>Salary sacrifice to super (%)</div>
          <div style={{display:"flex",alignItems:"center",gap:8}}><input type="number" min={0} max={100} step={0.5} placeholder="0" value={p.sacPct||""} onChange={e=>sp({...p,sacPct:e.target.value})} style={{flex:1,background:C.bg,border:`1.5px solid ${C.border}`,borderRadius:10,color:C.text,fontSize:15,padding:"10px 12px",boxSizing:"border-box",outline:"none",fontFamily:"inherit"}}/><span style={{color:C.sub}}>%</span></div>
        </div>
      </Card>
    </div>
    <div style={{padding:"16px 24px 40px"}}><Btn onClick={onNext}>Continue</Btn></div>
  </div>;
}

function OLeave({p,sp,onNext,onBack,step}){
  const isCasual=p.empType==="casual";
  if(isCasual){onNext();return null;}
  return <div style={{minHeight:"100vh",background:C.bg,display:"flex",flexDirection:"column"}}>
    <div style={{padding:"16px 24px 0",display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:12}}><BBn onClick={onBack}/><PBar step={step} total={OSTEPS}/></div>
    <div style={{flex:1,padding:"24px 24px 0",overflowY:"auto"}}>
      <div style={{fontSize:32,marginBottom:10}}>🏖️</div>
      <h2 style={{fontSize:24,fontWeight:800,color:C.text,margin:"0 0 6px"}}>Current leave balances</h2>
      <p style={{color:C.sub,fontSize:14,margin:"0 0 20px",lineHeight:1.5}}>Enter your current accrued hours from your payslip. The app will add to these as you log shifts.</p>
      <Card>
        <Inp label="Annual leave balance (hours)" type="number" min={0} step={0.5} placeholder="0" value={p.alBalance||""} onChange={e=>sp({...p,alBalance:parseFloat(e.target.value)||0})}/>
        <Inp label="Sick/personal leave balance (hours)" type="number" min={0} step={0.5} placeholder="0" value={p.sickBalance||""} onChange={e=>sp({...p,sickBalance:parseFloat(e.target.value)||0})}/>
        <div style={{background:C.greenLight,borderRadius:10,padding:"10px 12px",fontSize:12,color:C.green,lineHeight:1.5}}>
          Leave accrues on OTE hours only (not overtime or sleepover hours).<br/>
          Annual leave: {p.shiftWorker?"5 weeks (shift worker)":"4 weeks"} = {(p.shiftWorker?LEAVE.alShift:LEAVE.alNormal).toFixed(5)} hrs per OTE hr worked.<br/>
          Sick leave: 1/26 = {LEAVE.sick.toFixed(5)} hrs per OTE hr worked.
        </div>
      </Card>
    </div>
    <div style={{padding:"16px 24px 40px"}}><Btn onClick={onNext}>Continue</Btn><Btn v="ghost" onClick={onNext}>Skip</Btn></div>
  </div>;
}

function OState({p,sp,onNext,onBack,step}){
  const sel=p.state||"";
  return <div style={{minHeight:"100vh",background:C.bg,display:"flex",flexDirection:"column"}}>
    <div style={{padding:"16px 24px 0",display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:12}}><BBn onClick={onBack}/><PBar step={step} total={OSTEPS}/></div>
    <div style={{flex:1,padding:"24px 24px 0"}}>
      <div style={{fontSize:32,marginBottom:10}}>📍</div>
      <h2 style={{fontSize:24,fontWeight:800,color:C.text,margin:"0 0 6px"}}>Where do you work?</h2>
      <p style={{color:C.sub,fontSize:14,margin:"0 0 20px",lineHeight:1.5}}>Sets correct public holidays.</p>
      <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:10}}>
        {STATES.map(s=>(
          <div key={s.k} onClick={()=>sp({...p,state:s.k})} style={{background:sel===s.k?s.bg:C.white,border:sel===s.k?`2px solid ${s.c}`:`1.5px solid ${C.border}`,borderRadius:14,padding:"14px 10px",cursor:"pointer",textAlign:"center",position:"relative"}}>
            {sel===s.k&&<div style={{position:"absolute",top:6,right:6,width:16,height:16,borderRadius:8,background:s.c,display:"flex",alignItems:"center",justifyContent:"center",fontSize:9,color:"#fff",fontWeight:700}}>✓</div>}
            <div style={{fontWeight:700,fontSize:13,color:C.text}}>{s.l}</div>
            <div style={{fontWeight:800,fontSize:11,color:s.c,marginTop:2}}>{s.k}</div>
          </div>
        ))}
      </div>
    </div>
    <div style={{padding:"16px 24px 40px"}}><Btn onClick={onNext} disabled={!sel}>Continue</Btn><Btn v="ghost" onClick={onNext}>Skip</Btn></div>
  </div>;
}

function OPayCycle({p,sp,onNext,onBack,step}){
  return <div style={{minHeight:"100vh",background:C.bg,display:"flex",flexDirection:"column"}}>
    <div style={{padding:"16px 24px 0",display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:12}}><BBn onClick={onBack}/><PBar step={step} total={OSTEPS}/></div>
    <div style={{flex:1,padding:"24px 24px 0",overflowY:"auto"}}>
      <div style={{fontSize:32,marginBottom:10}}>📆</div>
      <h2 style={{fontSize:24,fontWeight:800,color:C.text,margin:"0 0 6px"}}>Job 1 pay cycle</h2>
      <p style={{color:C.sub,fontSize:14,margin:"0 0 20px",lineHeight:1.5}}>Pay day appears on your calendar each cycle.</p>
      <PayCycleFields obj={p} setObj={sp}/>
    </div>
    <div style={{padding:"16px 24px 40px"}}><Btn onClick={onNext} disabled={!p.cycleFreq||!p.cycleStart}>Continue</Btn><Btn v="ghost" onClick={onNext}>Skip</Btn></div>
  </div>;
}

function OJob2({p,sp,job2,setJob2,onNext,onBack,step}){
  const[enabled,setEnabled]=useState(!!p.hasJob2);
  const[custom,setCustom]=useState(!!(job2.customRate));
  const base=getBaseRate(job2);
  if(!enabled){
    return <div style={{minHeight:"100vh",background:C.bg,display:"flex",flexDirection:"column"}}>
      <div style={{padding:"16px 24px 0",display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:12}}><BBn onClick={onBack}/><PBar step={step} total={OSTEPS}/></div>
      <div style={{flex:1,padding:"24px 24px 0"}}>
        <div style={{fontSize:32,marginBottom:10}}>💼</div>
        <h2 style={{fontSize:24,fontWeight:800,color:C.text,margin:"0 0 6px"}}>Second job?</h2>
        <p style={{color:C.sub,fontSize:14,margin:"0 0 24px",lineHeight:1.5}}>Add a second employer to track both jobs' earnings separately and combined.</p>
        <Card onClick={()=>{setEnabled(true);sp({...p,hasJob2:true});}} sx={{border:`2px solid ${C.border}`,cursor:"pointer"}}>
          <div style={{display:"flex",alignItems:"center",gap:12}}>
            <div style={{width:44,height:44,borderRadius:12,background:C.job2Light,display:"flex",alignItems:"center",justifyContent:"center",fontSize:22}}>➕</div>
            <div><div style={{fontWeight:700,fontSize:15,color:C.text}}>Add second job</div><div style={{fontSize:12,color:C.sub}}>Separate pay rates, cycle & allowances</div></div>
          </div>
        </Card>
      </div>
      <div style={{padding:"16px 24px 40px"}}><Btn onClick={()=>{sp({...p,hasJob2:false});onNext();}}>Continue without second job</Btn></div>
    </div>;
  }
  return <div style={{minHeight:"100vh",background:C.bg,display:"flex",flexDirection:"column"}}>
    <div style={{padding:"16px 24px 0",display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:12}}><BBn onClick={()=>setEnabled(false)}/><PBar step={step} total={OSTEPS}/></div>
    <div style={{flex:1,padding:"24px 24px 0",overflowY:"auto"}}>
      <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:10}}><div style={{fontSize:28}}>💼</div><JobBadge jobIdx={1}/></div>
      <h2 style={{fontSize:22,fontWeight:800,color:C.text,margin:"0 0 6px"}}>Second job details</h2>
      <p style={{color:C.sub,fontSize:14,margin:"0 0 16px",lineHeight:1.5}}>Name it and set pay rates.</p>
      <Card>
        <Inp label="Job name (e.g. OHC)" placeholder="Job 2" value={job2.name||""} onChange={e=>setJob2({...job2,name:e.target.value})}/>
        <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:12}}>
          <div><div style={{fontWeight:600,fontSize:14,color:C.text}}>Custom rate</div><div style={{fontSize:12,color:C.sub}}>Not in SCHADS or different award</div></div>
          <Toggle on={custom} onChange={v=>{setCustom(v);if(v)setJob2({...job2,stream:"",level:"",payPoint:""});else setJob2({...job2,customRate:"",customSatMult:"",customSunMult:"",customPHMult:"",customNightMult:"",customAfternoonMult:"",customOTMult:"",customOT2Mult:"",customCasualLoading:""}); }}/>
        </div>
        {!custom?<ClassificationSelect job={job2} setJob={setJob2}/>:(
          <>
            <Inp label="Base hourly rate ($)" type="number" min={0} step={0.01} placeholder="0.00" value={job2.customRate||""} onChange={e=>setJob2({...job2,customRate:e.target.value})}/>
            <div style={{fontSize:12,fontWeight:600,color:C.sub,marginBottom:8}}>PENALTY MULTIPLIERS (leave blank for SCHADS defaults)</div>
            <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:8}}>
              {[{k:"customSatMult",l:"Saturday"},{k:"customSunMult",l:"Sunday"},{k:"customPHMult",l:"Public Holiday"},{k:"customNightMult",l:"Night shift"},{k:"customAfternoonMult",l:"Afternoon"},{k:"customOTMult",l:"OT rate 1"},{k:"customOT2Mult",l:"OT rate 2"},{k:"customCasualLoading",l:"Casual loading"}].map(f=>(
                <Inp key={f.k} label={f.l} type="number" min={0} step={0.01} placeholder="e.g. 1.50" value={job2[f.k]||""} onChange={e=>setJob2({...job2,[f.k]:e.target.value})}/>
              ))}
            </div>
          </>
        )}
        {!custom&&<div style={{display:"flex",gap:10}}>
          <div style={{flex:1}}><Sel label="Employment Type" value={job2.empType||""} onChange={e=>setJob2({...job2,empType:e.target.value})}><option value="">Select…</option><option value="fulltime">Full-time</option><option value="parttime">Part-time</option><option value="casual">Casual</option></Sel></div>
        </div>}
        {custom&&<Sel label="Employment Type" value={job2.empType||""} onChange={e=>setJob2({...job2,empType:e.target.value})}><option value="">Select…</option><option value="fulltime">Full-time</option><option value="parttime">Part-time</option><option value="casual">Casual</option></Sel>}
        {job2.empType&&job2.empType!=="casual"&&<div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
          <div><div style={{fontWeight:600,fontSize:14,color:C.text}}>Shift worker (5 wk AL)</div></div>
          <Toggle on={!!job2.shiftWorker} onChange={v=>setJob2({...job2,shiftWorker:v})}/>
        </div>}
        {base>0&&<div style={{background:C.job2Light,borderRadius:10,padding:"10px 12px",marginTop:8}}><div style={{fontSize:11,fontWeight:600,color:C.job2,marginBottom:2}}>BASE RATE</div><div style={{fontSize:20,fontWeight:800,color:C.text}}>{fmt(job2.empType==="casual"?base*1.25:base)}/hr</div></div>}
      </Card>
      <Card>
        <div style={{fontSize:12,fontWeight:600,color:C.sub,marginBottom:8}}>DEFAULT SLEEPOVER ALLOWANCE (Job 2)</div>
        <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:4}}><span style={{color:C.sub}}>$</span><input type="number" min={0} step={0.01} placeholder={`${AL.sleepDef}`} value={job2.defaultSleepAmt||""} onChange={e=>setJob2({...job2,defaultSleepAmt:e.target.value})} style={{flex:1,background:C.bg,border:`1.5px solid ${C.border}`,borderRadius:10,color:C.text,fontSize:15,padding:"10px 12px",boxSizing:"border-box",outline:"none",fontFamily:"inherit"}}/></div>
      </Card>
      {job2.empType&&job2.empType!=="casual"&&<Card>
        <div style={{fontSize:12,fontWeight:600,color:C.sub,marginBottom:10}}>JOB 2 LEAVE BALANCES</div>
        <Inp label="Annual leave balance (hours)" type="number" min={0} step={0.5} placeholder="0" value={job2.alBalance||""} onChange={e=>setJob2({...job2,alBalance:parseFloat(e.target.value)||0})}/>
        <Inp label="Sick leave balance (hours)" type="number" min={0} step={0.5} placeholder="0" value={job2.sickBalance||""} onChange={e=>setJob2({...job2,sickBalance:parseFloat(e.target.value)||0})}/>
      </Card>}
    </div>
    <div style={{padding:"16px 24px 40px"}}><Btn onClick={onNext}>Continue</Btn></div>
  </div>;
}

function OJob2Cycle({p,job2,setJob2,onNext,onBack,step}){
  if(!p.hasJob2){onNext();return null;}
  return <div style={{minHeight:"100vh",background:C.bg,display:"flex",flexDirection:"column"}}>
    <div style={{padding:"16px 24px 0",display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:12}}><BBn onClick={onBack}/><PBar step={step} total={OSTEPS}/></div>
    <div style={{flex:1,padding:"24px 24px 0",overflowY:"auto"}}>
      <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:10}}><div style={{fontSize:28}}>📆</div><JobBadge jobIdx={1}/></div>
      <h2 style={{fontSize:22,fontWeight:800,color:C.text,margin:"0 0 6px"}}>Job 2 pay cycle</h2>
      <p style={{color:C.sub,fontSize:14,margin:"0 0 16px",lineHeight:1.5}}>May differ from Job 1.</p>
      <PayCycleFields obj={job2} setObj={setJob2}/>
    </div>
    <div style={{padding:"16px 24px 40px"}}><Btn onClick={onNext} disabled={!job2.cycleFreq||!job2.cycleStart}>Continue</Btn><Btn v="ghost" onClick={onNext}>Skip</Btn></div>
  </div>;
}

function OPaywall({onComplete}){
  const[ann,setAnn]=useState(true);
  return <div style={{minHeight:"100vh",background:C.bg,display:"flex",flexDirection:"column"}}>
    <div style={{padding:"16px 24px 0",display:"flex",justifyContent:"flex-end"}}><button onClick={onComplete} style={{background:"none",border:"none",color:C.sub,fontSize:14,cursor:"pointer",fontWeight:600}}>Skip</button></div>
    <div style={{flex:1,padding:"16px 24px 0",overflowY:"auto"}}>
      <div style={{textAlign:"center",marginBottom:20}}>
        <div style={{width:64,height:64,borderRadius:18,background:`linear-gradient(135deg,${C.accent},#5B8FFF)`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:28,margin:"0 auto 12px"}}>💼</div>
        <h2 style={{fontSize:24,fontWeight:800,color:C.text,margin:"0 0 6px"}}>Start tracking your pay</h2>
      </div>
      <Card sx={{marginBottom:16}}>
        {["SCHADS pay with full penalty breakdown","Annual & sick leave tracking","Take-home with tax, super & packaging","Sleepover & wakeup calculation","Multi-job earnings tracking","Pay day calendar summaries"].map((f,i,a)=>(
          <div key={i} style={{display:"flex",alignItems:"center",gap:12,padding:"9px 0",borderBottom:i<a.length-1?`1px solid ${C.border}`:"none"}}>
            <span style={{color:C.green,fontSize:16}}>✓</span><span style={{fontSize:14,color:C.text}}>{f}</span>
          </div>
        ))}
      </Card>
      <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:10,marginBottom:12}}>
        {[{k:true,l:"Yearly",p:"$69.99",s:"Billed annually",b:"Best Value"},{k:false,l:"Monthly",p:"$6.99",s:"Billed monthly",b:null}].map(o=>(
          <div key={String(o.k)} onClick={()=>setAnn(o.k)} style={{padding:16,borderRadius:14,cursor:"pointer",position:"relative",border:ann===o.k?`2px solid ${C.green}`:`1.5px solid ${C.border}`,background:ann===o.k?C.greenLight:C.white}}>
            {o.b&&<div style={{position:"absolute",top:-10,left:8,background:C.green,color:"#fff",fontSize:9,fontWeight:700,padding:"3px 7px",borderRadius:8}}>{o.b}</div>}
            <div style={{fontWeight:700,fontSize:14,color:C.text,marginBottom:4}}>{o.l}</div>
            <div style={{fontSize:22,fontWeight:800,color:C.text,marginBottom:2}}>{o.p}</div>
            <div style={{fontSize:11,color:C.sub}}>{o.s}</div>
          </div>
        ))}
      </div>
    </div>
    <div style={{padding:"8px 24px 40px"}}><Btn v="green" onClick={onComplete}>Start 3-Day Free Trial</Btn><div style={{textAlign:"center",fontSize:12,color:C.muted}}>then {ann?"$69.99/year":"$6.99/month"}</div></div>
  </div>;
}
// ─── NAV ─────────────────────────────────────────────────────────────────────
function Nav({tab,setTab}){
  return <nav style={{position:"fixed",bottom:0,left:"50%",transform:"translateX(-50%)",width:"100%",maxWidth:480,background:C.white,borderTop:`1px solid ${C.border}`,display:"flex",zIndex:10}}>
    {[{id:"cal",icon:"📅",l:"Calendar"},{id:"pay",icon:"💰",l:"Pay Day"},{id:"leave",icon:"🏖️",l:"Leave"},{id:"tmpl",icon:"📋",l:"Templates"},{id:"set",icon:"⚙️",l:"Settings"}].map(n=>(
      <button key={n.id} onClick={()=>setTab(n.id)} style={{flex:1,padding:"8px 2px 12px",background:"none",border:"none",color:tab===n.id?C.accent:C.muted,fontSize:9,fontWeight:tab===n.id?700:500,cursor:"pointer",display:"flex",flexDirection:"column",alignItems:"center",gap:2}}>
        <span style={{fontSize:20}}>{n.icon}</span>{n.l}
      </button>
    ))}
  </nav>;
}

// ─── SHIFT FORM ───────────────────────────────────────────────────────────────
function ShiftForm({date,profile,job2,templates,onSave,onCancel}){
  const hasJob2=!!profile.hasJob2;
  const defSleep=profile.defaultSleepAmt?String(profile.defaultSleepAmt):"";
  const defSleep2=job2?.defaultSleepAmt?String(job2.defaultSleepAmt):"";
  const blankR=(ji)=>({date,jobIdx:ji,isSleepover:false,startTime:"",endTime:"",km:0,brokenShift:-1,isPublicHoliday:isPH(date,profile.state||""),wakeups:[],tid:""});
  const blankSO=(ji)=>({date,jobIdx:ji,isSleepover:true,startTime:"",soStart:"",soEnd:"",soAgreement:false,sleeoverAmt:ji===1?defSleep2:defSleep,km:0,isPublicHoliday:isPH(date,profile.state||""),wakeups:[],tid:""});
  const[jobIdx,setJobIdx]=useState(0);
  const[f,setF]=useState(blankR(0));
  const isSO=f.isSleepover;
  const curJob=jobIdx===1?job2:profile;
  const jobTmpls=templates.filter(t=>(t.jobIdx||0)===jobIdx||(t.jobIdx===undefined));
  const applyT=idx=>{
    if(idx==="")return;
    const t=templates[parseInt(idx)];
    if(t.isSleepoverTemplate){setF({...blankSO(jobIdx),startTime:t.soActiveStart||"",soStart:t.soStart||"",soEnd:t.soEnd||"",soAgreement:!!t.soAgreement,sleeoverAmt:t.sleeoverAmt||(jobIdx===1?defSleep2:defSleep),km:t.km||0,tid:idx});}
    else{setF({...blankR(jobIdx),startTime:t.startTime||"",endTime:t.endTime||"",km:t.km||0,brokenShift:t.brokenShift!=null?t.brokenShift:-1,tid:idx});}
  };
  const addWakeup=()=>setF(x=>({...x,wakeups:[...(x.wakeups||[]),{start:"",end:""}]}));
  const updWakeup=(i,k,v)=>setF(x=>{const w=[...x.wakeups];w[i]={...w[i],[k]:v};return{...x,wakeups:w};});
  const delWakeup=i=>setF(x=>({...x,wakeups:x.wakeups.filter((_,j)=>j!==i)}));
  const base=getBaseRate(curJob);
  const cas=curJob.empType==="casual";
  const canSave=isSO?(f.startTime&&f.soStart&&f.soEnd):(f.startTime&&f.endTime);
  const prev=(!isSO&&f.startTime&&f.endTime&&base)?calcShift(f,base,cas,curJob.stream||null,0):null;
  const soActiveHrs=isSO&&f.startTime&&f.soStart?calcHrs(f.startTime,f.soStart):0;
  const switchJob=(ji)=>{setJobIdx(ji);setF(isSO?blankSO(ji):blankR(ji));};
  return <div style={{paddingBottom:80}}>
    <BBar onBack={onCancel} title={`Add Shift — ${date}`}/>
    <div style={{padding:"16px 20px 0"}}>
      {hasJob2&&<Card>
        <div style={{fontSize:12,fontWeight:600,color:C.sub,marginBottom:8}}>JOB</div>
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:8}}>
          <div onClick={()=>switchJob(0)} style={{padding:"11px 10px",borderRadius:12,cursor:"pointer",textAlign:"center",border:jobIdx===0?`2px solid ${C.accent}`:`1.5px solid ${C.border}`,background:jobIdx===0?C.accentLight:C.bg}}>
            <div style={{fontWeight:700,fontSize:14,color:jobIdx===0?C.accent:C.text}}>Job 1</div>
            <div style={{fontSize:11,color:C.sub}}>{profile.short||profile.stream||"Main job"}</div>
          </div>
          <div onClick={()=>switchJob(1)} style={{padding:"11px 10px",borderRadius:12,cursor:"pointer",textAlign:"center",border:jobIdx===1?`2px solid ${C.job2}`:`1.5px solid ${C.border}`,background:jobIdx===1?C.job2Light:C.bg}}>
            <div style={{fontWeight:700,fontSize:14,color:jobIdx===1?C.job2:C.text}}>Job 2</div>
            <div style={{fontSize:11,color:C.sub}}>{job2?.name||"Second job"}</div>
          </div>
        </div>
      </Card>}
      {jobTmpls.length>0&&<Card>
        <Sel label="Use Template" value={f.tid} onChange={e=>applyT(e.target.value)}>
          <option value="">Choose template…</option>
          {jobTmpls.filter(t=>!t.isSleepoverTemplate).map((t,_)=>{const i=templates.indexOf(t);return <option key={i} value={i}>{t.name}</option>;})}
          {jobTmpls.filter(t=>t.isSleepoverTemplate).map((t,_)=>{const i=templates.indexOf(t);return <option key={i} value={i}>🛏️ {t.name}</option>;})}
        </Sel>
      </Card>}
      {!isSO?(
        <Card>
          <div style={{display:"flex",gap:10}}>
            <div style={{flex:1}}><Inp label="Start" type="time" value={f.startTime} onChange={e=>setF({...f,startTime:e.target.value})}/></div>
            <div style={{flex:1}}><Inp label="End" type="time" value={f.endTime} onChange={e=>setF({...f,endTime:e.target.value})}/></div>
          </div>
          {f.startTime&&f.endTime&&<div style={{fontSize:13,color:C.sub,marginTop:-6,marginBottom:10}}>{calcHrs(f.startTime,f.endTime).toFixed(1)} hours</div>}
          <Inp label="Kilometres" type="number" min={0} placeholder="0" value={f.km||""} onChange={e=>setF({...f,km:parseFloat(e.target.value)||0})}/>
          <div style={{marginBottom:12}}>
            <div style={{fontSize:12,fontWeight:600,color:C.sub,marginBottom:6}}>Broken Shift</div>
            <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr 1fr",gap:6}}>
              {[{v:-1,l:"Auto"},{v:0,l:"None"},{v:1,l:"1 break"},{v:2,l:"2 breaks"}].map(o=>(
                <div key={o.v} onClick={()=>setF({...f,brokenShift:o.v})} style={{padding:"8px 4px",borderRadius:10,textAlign:"center",cursor:"pointer",border:f.brokenShift===o.v?`2px solid ${C.accent}`:`1.5px solid ${C.border}`,background:f.brokenShift===o.v?C.accentLight:C.bg,fontSize:12,fontWeight:600,color:f.brokenShift===o.v?C.accent:C.text}}>{o.l}</div>
              ))}
            </div>
          </div>
          <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
            <div style={{fontWeight:600,fontSize:14,color:C.text}}>Public Holiday</div>
            <Toggle on={!!f.isPublicHoliday} onChange={v=>setF({...f,isPublicHoliday:v})}/>
          </div>
        </Card>
      ):(
        <Card>
          <div style={{background:C.purpleLight,borderRadius:10,padding:"10px 12px",marginBottom:14,fontSize:12,color:C.purple,lineHeight:1.5}}>🛏️ <strong>Sleepover shift</strong> — Active start editable. Hours after sleepover go in as a separate shift.</div>
          <div style={{fontSize:12,fontWeight:700,color:C.sub,marginBottom:8}}>ACTIVE HOURS BEFORE SLEEPOVER</div>
          <div style={{display:"flex",gap:10}}>
            <div style={{flex:1}}><Inp label="Active start" type="time" value={f.startTime} onChange={e=>setF({...f,startTime:e.target.value})}/></div>
            <div style={{flex:1}}><Inp label="Sleepover from" type="time" value={f.soStart} onChange={e=>setF({...f,soStart:e.target.value})}/></div>
          </div>
          {soActiveHrs>0&&<div style={{fontSize:13,color:C.sub,marginTop:-6,marginBottom:10}}>{soActiveHrs.toFixed(1)} active hours</div>}
          <div style={{fontSize:12,fontWeight:700,color:C.sub,marginBottom:8}}>SLEEPOVER PERIOD</div>
          <div style={{display:"flex",gap:10}}>
            <div style={{flex:1}}><Inp label="Start" type="time" value={f.soStart} onChange={e=>setF({...f,soStart:e.target.value})}/></div>
            <div style={{flex:1}}><Inp label="End" type="time" value={f.soEnd} onChange={e=>setF({...f,soEnd:e.target.value})}/></div>
          </div>
          <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:12}}>
            <div><div style={{fontWeight:600,fontSize:14,color:C.text}}>Written 12h agreement</div><div style={{fontSize:12,color:C.sub}}>OT after 12 active hrs</div></div>
            <Toggle on={!!f.soAgreement} onChange={v=>setF({...f,soAgreement:v})}/>
          </div>
          <div style={{fontSize:12,fontWeight:600,color:C.sub,marginBottom:6}}>Sleepover Allowance</div>
          <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:4}}><span style={{color:C.sub}}>$</span><input type="number" min={0} step={0.01} placeholder={jobIdx===1?(job2?.defaultSleepAmt||AL.sleepDef):profile.defaultSleepAmt||AL.sleepDef} value={f.sleeoverAmt||""} onChange={e=>setF({...f,sleeoverAmt:e.target.value})} style={{flex:1,background:C.bg,border:`1.5px solid ${C.border}`,borderRadius:10,color:C.text,fontSize:15,padding:"10px 12px",boxSizing:"border-box",outline:"none",fontFamily:"inherit"}}/></div>
          <p style={{fontSize:11,color:C.muted,margin:"0 0 10px"}}>Blank = default ${jobIdx===1?(job2?.defaultSleepAmt||AL.sleepDef):(profile.defaultSleepAmt||AL.sleepDef)}</p>
          <Inp label="Kilometres" type="number" min={0} placeholder="0" value={f.km||""} onChange={e=>setF({...f,km:parseFloat(e.target.value)||0})}/>
          <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:14}}><div style={{fontWeight:600,fontSize:14,color:C.text}}>Public Holiday</div><Toggle on={!!f.isPublicHoliday} onChange={v=>setF({...f,isPublicHoliday:v})}/></div>
          <Div/>
          <div style={{fontSize:12,fontWeight:700,color:C.sub,marginBottom:6,marginTop:8}}>WAKEUP EVENTS</div>
          <p style={{fontSize:12,color:C.sub,margin:"0 0 10px",lineHeight:1.5}}>Min 1hr per event. First 2h total at 150%, after at 200%.</p>
          {(f.wakeups||[]).map((wu,i)=>(
            <div key={i} style={{background:C.bg,borderRadius:10,padding:"10px 12px",marginBottom:8}}>
              <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:8}}>
                <div style={{fontSize:13,fontWeight:600,color:C.text}}>Wakeup {i+1}</div>
                <button onClick={()=>delWakeup(i)} style={{background:C.redLight,border:"none",borderRadius:6,padding:"4px 8px",fontSize:11,fontWeight:700,color:C.red,cursor:"pointer"}}>Remove</button>
              </div>
              <div style={{display:"flex",gap:8}}>
                <div style={{flex:1}}><Inp label="Start" type="time" value={wu.start} onChange={e=>updWakeup(i,"start",e.target.value)}/></div>
                <div style={{flex:1}}><Inp label="End" type="time" value={wu.end} onChange={e=>updWakeup(i,"end",e.target.value)}/></div>
              </div>
              {wu.start&&wu.end&&<div style={{fontSize:11,color:C.purple,fontWeight:600}}>Paid: {Math.max(1,Math.ceil(calcHrs(wu.start,wu.end)))}h min</div>}
            </div>
          ))}
          <button onClick={addWakeup} style={{width:"100%",padding:"10px",borderRadius:10,border:`1.5px dashed ${C.purple}`,background:C.purpleLight,color:C.purple,fontSize:13,fontWeight:700,cursor:"pointer",marginBottom:4}}>+ Add Wakeup</button>
        </Card>
      )}
      {prev&&<div style={{background:C.greenLight,border:`1.5px solid ${C.green}33`,borderRadius:14,padding:"14px 16px",marginBottom:12}}><div style={{fontSize:11,fontWeight:600,color:C.green,marginBottom:4}}>ESTIMATED PAY</div><div style={{fontSize:26,fontWeight:800,color:C.text}}>{fmt(prev.gross)}</div><div style={{fontSize:12,color:C.sub}}>{prev.label} · {prev.h.toFixed(1)}h</div></div>}
      <Btn onClick={()=>onSave({...f,jobIdx,id:Date.now()})} disabled={!canSave}>Add Shift</Btn>
      <Btn v="ghost" onClick={onCancel}>Cancel</Btn>
    </div>
  </div>;
}
// ─── CALENDAR SCREEN ─────────────────────────────────────────────────────────
function CalScreen({shifts,setShifts,profile,job2,templates}){
  const today=new Date();
  const[vm,setVm]=useState(today.getMonth());
  const[vy,setVy]=useState(today.getFullYear());
  const[mode,setMode]=useState("cal");
  const[selDate,setSelDate]=useState(null);
  const[selShift,setSelShift]=useState(null);
  const[selPd,setSelPd]=useState(null);

  const getJob=(ji)=>ji===1?{...profile,...job2}:profile;
  const getBase=(ji)=>getBaseRate(getJob(ji));
  const getCas=(ji)=>getJob(ji).empType==="casual";
  const getStream=(ji)=>getJob(ji).stream||null;

  const getC=useCallback((s)=>{
    const ji=s.jobIdx||0;
    const base=getBase(ji);if(!base)return null;
    const cas=getCas(ji),stream=getStream(ji);
    const d=new Date(s.date+"T00:00:00"),ws=new Date(d);ws.setDate(d.getDate()-d.getDay());
    const wk=ws.toISOString().slice(0,10);
    const wh=shifts.filter(x=>{const xd=new Date(x.date+"T00:00:00"),xs=new Date(xd);xs.setDate(xd.getDate()-xd.getDay());return xs.toISOString().slice(0,10)===wk&&xd<d&&(x.jobIdx||0)===ji;}).reduce((a,x)=>a+calcHrs(x.startTime,x.endTime||x.soEnd||"00:00"),0);
    return s.isSleepover?calcSleeoverShift(s,base,cas,stream,wh):calcShift(s,base,cas,stream,wh);
  },[shifts,profile,job2]);

  const mk=`${vy}-${String(vm+1).padStart(2,"0")}`;
  const mShifts=shifts.filter(s=>s.date.startsWith(mk));
  const byDate={};mShifts.forEach(s=>{(byDate[s.date]=byDate[s.date]||[]).push(s);});
  const dim=new Date(vy,vm+1,0).getDate(),fd=new Date(vy,vm,1).getDay();
  const MN=["January","February","March","April","May","June","July","August","September","October","November","December"];
  const DN=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
  const DAYS=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

  // Pay days for both jobs
  const pd1=getPayDays(profile.cycleStart,profile.cycleFreq,profile.payDay,vy,vm).map(p=>({...p,jobIdx:0}));
  const pd2=profile.hasJob2?getPayDays(job2.cycleStart,job2.cycleFreq,job2.payDay,vy,vm).map(p=>({...p,jobIdx:1})):[];
  const pdByDate={};[...pd1,...pd2].forEach(p=>{if(!pdByDate[p.pd])pdByDate[p.pd]=[];pdByDate[p.pd].push(p);});

  const dayTotal=d=>(byDate[d]||[]).reduce((a,s)=>{const c=getC(s);return a+(c?c.gross:0);},0);

  const j1Shifts=mShifts.filter(s=>(s.jobIdx||0)===0);
  const j2Shifts=mShifts.filter(s=>(s.jobIdx||0)===1);
  const agg1=j1Shifts.length>0&&getBase(0)?aggregateShifts(j1Shifts,profile,profile):null;
  const agg2=profile.hasJob2&&j2Shifts.length>0&&getBase(1)?aggregateShifts(j2Shifts,{...profile,...job2},profile):null;

  const combinedGross=(agg1?.gross||0)+(agg2?.gross||0);

  // Pay day summary
  if(mode==="pdSummary"&&selPd){
    const{pd,ps,pe,jobIdx:ji}=selPd;
    const job=getJob(ji);
    const pShifts=shifts.filter(s=>s.date>=ps&&s.date<=pe&&(s.jobIdx||0)===ji);
    const agg=pShifts.length>0&&getBase(ji)?aggregateShifts(pShifts,ji===1?{...profile,...job2}:profile,profile):null;
    const jobColor=ji===1?C.job2:C.green;
    return <div style={{paddingBottom:80}}>
      <BBar onBack={()=>setMode("cal")} title="Pay Day Summary"
        right={<button onClick={()=>{setSelDate(pd);setMode("addShift");}} style={{background:ji===1?C.job2Light:C.accentLight,border:"none",color:ji===1?C.job2:C.accent,borderRadius:10,padding:"7px 12px",fontSize:13,fontWeight:700,cursor:"pointer"}}>+ Shift</button>}/>
      <div style={{padding:"20px 20px 0"}}>
        <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:12}}><JobBadge jobIdx={ji}/><span style={{fontSize:13,color:C.sub}}>{ps} → {pe}</span></div>
        <div style={{background:`linear-gradient(135deg,${jobColor},${jobColor}CC)`,borderRadius:18,padding:"20px",marginBottom:14,boxShadow:`0 6px 20px ${jobColor}44`}}>
          <div style={{fontSize:11,fontWeight:600,color:"rgba(255,255,255,0.75)",marginBottom:4}}>PAY DAY — {pd}</div>
          <div style={{fontSize:36,fontWeight:800,color:"#fff"}}>{agg?fmt(agg.gross):"$0.00"}</div>
          <div style={{fontSize:14,color:"rgba(255,255,255,0.8)",marginTop:4,fontWeight:600}}>Take-home: {agg?fmt(agg.takeHome):"—"}</div>
          <div style={{fontSize:13,color:"rgba(255,255,255,0.7)",marginTop:2}}>{pShifts.length} shifts · {agg?fmtH(agg.tH):"0h"}</div>
        </div>
        {agg&&pShifts.length>0?<>
          <Card>
            <div style={{fontSize:12,fontWeight:600,color:C.sub,marginBottom:10}}>EARNINGS</div>
            <PRow label="Base & penalty pay" val={fmt(agg.tOrd)}/>
            {agg.tOT>0&&<PRow label="Overtime" val={fmt(agg.tOT)}/>}
            {agg.tKm>0&&<PRow label="Km allowances" val={fmt(agg.tKm)}/>}
            {agg.tBs>0&&<PRow label="Broken shift" val={fmt(agg.tBs)}/>}
            {agg.tSl>0&&<PRow label="Sleepover allowances" val={fmt(agg.tSl)}/>}
            {agg.fa>0&&<PRow label="First aid" val={fmt(agg.fa)}/>}
            <PRow label="Gross" val={fmt(agg.gross)} bold/>
          </Card>
          <Card>
            <div style={{fontSize:12,fontWeight:600,color:C.sub,marginBottom:10}}>DEDUCTIONS & SUPER</div>
            <PRow label={`Super 12% on OTE ${fmt(agg.tOTE)}`} val={fmt(agg.sup)}/>
            {agg.pkg>0&&<PRow label="Salary packaging" val={`−${fmt(agg.pkg)}`}/>}
            {agg.sac>0&&<PRow label="Salary sacrifice" val={`−${fmt(agg.sac)}`}/>}
            <PRow label="Tax withheld" val={`−${fmt(agg.tax)}`}/>
            {agg.help>0&&<PRow label="HELP withholding" val={`−${fmt(agg.help)}`}/>}
            <PRow label="Take-home" val={fmt(agg.takeHome)} bold green/>
          </Card>
          {agg.alHrs>0&&<Card>
            <div style={{fontSize:12,fontWeight:600,color:C.sub,marginBottom:10}}>LEAVE ACCRUED THIS PERIOD</div>
            <PRow label="Annual leave" val={`${agg.alHrs.toFixed(2)}h`}/>
            <PRow label="Sick/personal leave" val={`${agg.sickHrs.toFixed(2)}h`}/>
          </Card>}
          <Card>
            <div style={{fontSize:12,fontWeight:600,color:C.sub,marginBottom:10}}>SHIFTS</div>
            {agg.calcs.map((c,i)=>{
              const dow=new Date(c.date+"T00:00:00").getDay();
              return <div key={c.id} style={{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"8px 0",borderBottom:i<agg.calcs.length-1?`1px solid ${C.border}`:"none"}}>
                <div><div style={{fontWeight:600,fontSize:14,color:C.text}}>{DN[dow]} {c.date.slice(5)}</div><div style={{fontSize:12,color:C.sub}}>{c.startTime}–{c.endTime||""} · {c.label}</div></div>
                <div style={{textAlign:"right"}}><div style={{fontWeight:700,color:C.green,fontSize:14}}>{fmt(c.gross)}</div><div style={{fontSize:11,color:C.sub}}>{fmtH(c.h)}</div></div>
              </div>;
            })}
          </Card>
        </>:<Card><div style={{textAlign:"center",padding:"24px 0",color:C.muted}}><div style={{fontSize:32,marginBottom:8}}>📭</div>No shifts this period.</div></Card>}
      </div>
    </div>;
  }

  // Shift detail
  if(mode==="shiftDetail"&&selShift){
    const c=getC(selShift);
    const ji=selShift.jobIdx||0;
    const dow=new Date(selShift.date+"T00:00:00").getDay();
    const day=byDate[selShift.date]||[];
    return <div style={{paddingBottom:80}}>
      <BBar onBack={()=>{day.length>1?(setMode("dayView"),setSelDate(selShift.date)):setMode("cal");}} title="Shift Details"/>
      <div style={{padding:"20px 20px 0"}}>
        <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:8}}><JobBadge jobIdx={ji}/><span style={{fontWeight:800,fontSize:18,color:C.text}}>{DAYS[dow]}</span></div>
        <div style={{color:C.sub,fontSize:14,marginBottom:12}}>{selShift.date} · {selShift.startTime}–{selShift.isSleepover?(selShift.soEnd):selShift.endTime}</div>
        <Card>
          {c?(<>
            {selShift.isSleepover?(
              <>{c.segments&&c.segments.map((seg,i)=><PRow key={i} label={seg.label} val={`${fmt(seg.pay)} · ${fmtH(seg.h)} · ${seg.segLabel}`}/>)}<PRow label="Sleepover allowance" val={fmt(c.sl)}/>{c.km>0&&<PRow label={`Km (${selShift.km}km)`} val={fmt(c.km)}/>}</>
            ):(
              <><PRow label="Hours" val={fmtH(c.h)}/><PRow label={c.label} val={`×${c.m.toFixed(3)}`}/><PRow label="Base pay" val={fmt(c.ord)}/>{c.ot>0&&<PRow label="Overtime" val={fmt(c.ot)}/>}{c.km>0&&<PRow label={`Km (${selShift.km}km)`} val={fmt(c.km)}/>}{c.sl>0&&<PRow label="Sleepover" val={fmt(c.sl)}/>}</>
            )}
            <div style={{display:"flex",justifyContent:"space-between",paddingTop:10}}><span style={{fontSize:17,fontWeight:800,color:C.text}}>Total</span><span style={{fontSize:20,fontWeight:800,color:C.green}}>{fmt(c.gross)}</span></div>
          </>):<div style={{color:C.orange,fontSize:13}}>Complete profile to see calculations.</div>}
        </Card>
        <Btn v="danger" onClick={()=>{setShifts(shifts.filter(s=>s.id!==selShift.id));setMode("cal");}}>Delete Shift</Btn>
      </div>
    </div>;
  }

  // Day view
  if(mode==="dayView"&&selDate){
    const dayShifts=(byDate[selDate]||[]).sort((a,b)=>a.startTime.localeCompare(b.startTime));
    const ab=autoBroken(dayShifts.filter(s=>!s.isSleepover));
    const dt=dayTotal(selDate)+(ab===1?AL.bs1:ab===2?AL.bs2:0);
    const dow=new Date(selDate+"T00:00:00").getDay();
    return <div style={{paddingBottom:80}}>
      <BBar onBack={()=>setMode("cal")} title={`${DAYS[dow]} ${selDate}`} right={<button onClick={()=>setMode("addShift")} style={{background:C.accentLight,border:"none",color:C.accent,borderRadius:10,padding:"7px 12px",fontSize:13,fontWeight:700,cursor:"pointer"}}>+ Add</button>}/>
      <div style={{padding:"16px 20px 0"}}>
        {ab>0&&<div style={{background:C.orangeLight,border:`1.5px solid ${C.orange}44`,borderRadius:12,padding:"10px 14px",marginBottom:12,display:"flex",alignItems:"center",gap:10}}><span style={{fontSize:18}}>⚡</span><div><div style={{fontWeight:700,fontSize:13,color:C.orange}}>Broken shift detected</div><div style={{fontSize:12,color:C.sub}}>{ab} gap{ab>1?"s":""} &gt;1hr — {fmt(ab===1?AL.bs1:AL.bs2)} applied</div></div></div>}
        {dayShifts.map(s=>{
          const c=getC(s);const ji=s.jobIdx||0;
          return <Card key={s.id} onClick={()=>{setSelShift(s);setMode("shiftDetail");}}>
            <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
              <div style={{flex:1}}>
                <div style={{display:"flex",alignItems:"center",gap:6,marginBottom:2}}>{s.isSleepover&&<span style={{fontSize:14}}>🛏️</span>}<JobBadge jobIdx={ji}/><div style={{fontWeight:700,fontSize:14,color:C.text}}>{s.startTime}–{s.isSleepover?(s.soEnd):s.endTime}</div></div>
                <div style={{fontSize:12,color:C.sub}}>{c?c.label:"—"} · {c?fmtH(c.h):"—"}</div>
              </div>
              <div style={{textAlign:"right"}}><div style={{fontWeight:700,color:C.green,fontSize:14}}>{c?fmt(c.gross):"—"}</div><span style={{fontSize:12,color:C.muted}}>›</span></div>
            </div>
          </Card>;
        })}
        {getBase(0)&&<div style={{background:C.greenLight,border:`1.5px solid ${C.green}33`,borderRadius:14,padding:"14px 16px"}}><div style={{fontSize:11,fontWeight:600,color:C.green,marginBottom:4}}>DAY TOTAL</div><div style={{fontSize:24,fontWeight:800,color:C.text}}>{fmt(dt)}</div></div>}
      </div>
    </div>;
  }

  // Add shift
  if(mode==="addShift"&&selDate){
    return <ShiftForm date={selDate} profile={profile} job2={job2} templates={templates}
      onSave={s=>{setShifts([...shifts,s]);const d=byDate[selDate];setMode(d&&d.length>0?"dayView":"cal");}}
      onCancel={()=>setMode(byDate[selDate]?.length>0?"dayView":"cal")}/>;
  }

  // ── Month summary helper ──
  const MonthSummaryCard=({agg,title,color,accent})=>{
    if(!agg)return null;
    const ac=accent||color||C.green;
    return <Card sx={{background:`${ac}11`,border:`1.5px solid ${ac}33`}}>
      <div style={{fontSize:11,fontWeight:600,color:ac,marginBottom:10}}>{title}</div>
      <PRow label="Hours" val={fmtH(agg.tH)}/>
      <PRow label="Base & penalty pay" val={fmt(agg.tOrd)}/>
      {agg.tOT>0&&<PRow label="Overtime" val={fmt(agg.tOT)}/>}
      {agg.tKm>0&&<PRow label="Km" val={fmt(agg.tKm)}/>}
      {agg.tBs>0&&<PRow label="Broken shift" val={fmt(agg.tBs)}/>}
      {agg.tSl>0&&<PRow label="Sleepover" val={fmt(agg.tSl)}/>}
      {agg.fa>0&&<PRow label="First aid" val={fmt(agg.fa)}/>}
      <div style={{display:"flex",justifyContent:"space-between",paddingTop:8,marginTop:2}}><span style={{fontSize:16,fontWeight:800,color:C.text}}>Gross</span><span style={{fontSize:18,fontWeight:800,color:ac}}>{fmt(agg.gross)}</span></div>
      <Div/>
      <PRow label="Super (12%)" val={fmt(agg.sup)} small/>
      <PRow label="Tax + HELP" val={`−${fmt(agg.tax+agg.help)}`} small/>
      <div style={{display:"flex",justifyContent:"space-between",paddingTop:6}}><span style={{fontSize:14,fontWeight:700,color:C.text}}>Take-home</span><span style={{fontSize:16,fontWeight:800,color:C.accent}}>{fmt(agg.takeHome)}</span></div>
      {!getCas(0)&&agg.alHrs>0&&<><Div/><PRow label={`Annual leave accrued`} val={`+${agg.alHrs.toFixed(2)}h`} small/><PRow label="Sick leave accrued" val={`+${agg.sickHrs.toFixed(2)}h`} small/></>}
    </Card>;
  };

  return <div style={{paddingBottom:80}}>
    <div style={{background:C.white,borderBottom:`1px solid ${C.border}`,padding:"14px 20px",display:"flex",alignItems:"center",justifyContent:"space-between"}}>
      <div style={{display:"flex",alignItems:"center",gap:14}}>
        <button onClick={()=>{if(vm===0){setVm(11);setVy(y=>y-1);}else setVm(m=>m-1);}} style={{background:"none",border:"none",color:C.text,fontSize:22,cursor:"pointer"}}>‹</button>
        <span style={{fontSize:17,fontWeight:800,color:C.text}}>{MN[vm]} {vy}</span>
        <button onClick={()=>{if(vm===11){setVm(0);setVy(y=>y+1);}else setVm(m=>m+1);}} style={{background:"none",border:"none",color:C.text,fontSize:22,cursor:"pointer"}}>›</button>
      </div>
      {combinedGross>0&&<span style={{fontSize:15,fontWeight:800,color:C.green}}>{fmtR(combinedGross)}</span>}
    </div>
    <div style={{padding:"14px 14px 0"}}>
      <div style={{display:"grid",gridTemplateColumns:"repeat(7,1fr)",gap:3,marginBottom:4}}>
        {["Su","Mo","Tu","We","Th","Fr","Sa"].map(d=><div key={d} style={{textAlign:"center",fontSize:11,color:C.muted,fontWeight:600,padding:"2px 0"}}>{d}</div>)}
      </div>
      <div style={{display:"grid",gridTemplateColumns:"repeat(7,1fr)",gap:3,marginBottom:12}}>
        {Array.from({length:fd}).map((_,i)=><div key={`e${i}`}/>)}
        {Array.from({length:dim},(_,i)=>i+1).map(day=>{
          const ds=`${vy}-${String(vm+1).padStart(2,"0")}-${String(day).padStart(2,"0")}`;
          const dsh=byDate[ds]||[];
          const isT=day===today.getDate()&&vm===today.getMonth()&&vy===today.getFullYear();
          const dt=dayTotal(ds);
          const dow=new Date(ds+"T00:00:00").getDay();
          const iswk=dow===0||dow===6;
          const pds=pdByDate[ds]||[];
          const hasPd=pds.length>0&&dsh.length===0;
          const hasSO=dsh.some(s=>s.isSleepover);
          const hasJ2=dsh.some(s=>(s.jobIdx||0)===1);
          const barColor=hasSO?C.purple:hasJ2?C.job2:C.green;
          return <div key={day}
            onClick={()=>{
              if(hasPd){setSelPd(pds[0]);setMode("pdSummary");return;}
              setSelDate(ds);
              if(dsh.length>1){setMode("dayView");return;}
              if(dsh.length===1){setSelShift(dsh[0]);setMode("shiftDetail");return;}
              setMode("addShift");
            }}
            style={{minHeight:52,borderRadius:10,padding:"5px 4px",cursor:"pointer",
              background:hasPd?"#FEF3E2":isT?C.accentLight:dsh.length>0?"#F0FAF6":C.white,
              border:`1.5px solid ${hasPd?C.orange:isT?C.accent:dsh.length>0?"#B8E8D0":C.border}`}}>
            <div style={{fontSize:12,fontWeight:isT?800:500,color:hasPd?C.orange:isT?C.accent:iswk?C.sub:C.text,textAlign:"center",marginBottom:2}}>{day}</div>
            {hasPd?(<><div style={{height:3,borderRadius:2,background:pds.length>1?"linear-gradient(90deg,"+C.green+","+C.job2+")":pds[0].jobIdx===1?C.job2:C.orange,marginBottom:2}}/><div style={{fontSize:9,color:C.orange,fontWeight:700,textAlign:"center"}}>PAY</div></>)
            :dsh.length>0?(<><div style={{height:3,borderRadius:2,background:barColor,marginBottom:2}}/>{dt>0&&getBase(0)>0&&<div style={{fontSize:9,color:barColor,fontWeight:700,textAlign:"center"}}>${Math.round(dt)}</div>}{dsh.length>1&&<div style={{fontSize:8,color:C.sub,textAlign:"center"}}>{dsh.length}</div>}</>)
            :(<div style={{textAlign:"center",color:C.border,fontSize:14,marginTop:2}}>+</div>)}
          </div>;
        })}
      </div>

      <div style={{display:"flex",gap:10,marginBottom:12,flexWrap:"wrap"}}>
        <div style={{display:"flex",alignItems:"center",gap:4}}><div style={{width:8,height:8,borderRadius:2,background:C.green}}/><span style={{fontSize:10,color:C.sub}}>Job 1</span></div>
        {profile.hasJob2&&<div style={{display:"flex",alignItems:"center",gap:4}}><div style={{width:8,height:8,borderRadius:2,background:C.job2}}/><span style={{fontSize:10,color:C.sub}}>Job 2</span></div>}
        <div style={{display:"flex",alignItems:"center",gap:4}}><div style={{width:8,height:8,borderRadius:2,background:C.purple}}/><span style={{fontSize:10,color:C.sub}}>Sleepover</span></div>
        {(pd1.length>0||pd2.length>0)&&<div style={{display:"flex",alignItems:"center",gap:4}}><div style={{width:8,height:8,borderRadius:2,background:C.orange}}/><span style={{fontSize:10,color:C.sub}}>Pay day</span></div>}
      </div>

      {mShifts.length>0&&<>
        {agg1&&<MonthSummaryCard agg={agg1} title={`JOB 1 — ${MN[vm].toUpperCase()}`} accent={C.green}/>}
        {profile.hasJob2&&agg2&&<MonthSummaryCard agg={agg2} title={`JOB 2 (${job2?.name||"Job 2"}) — ${MN[vm].toUpperCase()}`} accent={C.job2}/>}
        {profile.hasJob2&&agg1&&agg2&&(
          <Card sx={{background:C.bg,border:`1.5px solid ${C.borderStrong}`}}>
            <div style={{fontSize:11,fontWeight:600,color:C.text,marginBottom:10}}>COMBINED — {MN[vm].toUpperCase()}</div>
            <PRow label="Total hours" val={fmtH(agg1.tH+agg2.tH)}/>
            <PRow label="Job 1 gross" val={fmt(agg1.gross)}/>
            <PRow label="Job 2 gross" val={fmt(agg2.gross)}/>
            <div style={{display:"flex",justifyContent:"space-between",paddingTop:8}}><span style={{fontSize:16,fontWeight:800,color:C.text}}>Combined gross</span><span style={{fontSize:18,fontWeight:800,color:C.green}}>{fmt(agg1.gross+agg2.gross)}</span></div>
            <Div/>
            <PRow label="Combined take-home" val={fmt(agg1.takeHome+agg2.takeHome)} bold blue/>
          </Card>
        )}
      </>}
      {mShifts.length===0&&<div style={{textAlign:"center",color:C.muted,padding:32,fontSize:14}}>Tap any date to add a shift</div>}
    </div>
  </div>;
}
// ─── PAY DAY SCREEN ───────────────────────────────────────────────────────────
function PayScreen({shifts,profile,job2}){
  const[selJob,setSelJob]=useState(0);
  const job=selJob===1?{...profile,...job2}:profile;
  const cy=getCycle(job.cycleStart,job.cycleFreq);
  const base=getBaseRate(job);
  const cShifts=cy?shifts.filter(s=>s.date>=cy.s&&s.date<=cy.e&&(s.jobIdx||0)===selJob):[];
  const agg=cShifts.length>0&&base?aggregateShifts(cShifts,job,profile):null;
  const DN=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
  if(!profile.cycleStart||!profile.cycleFreq)return <div style={{paddingBottom:80}}><TBar title="Pay Day"/><div style={{padding:"40px 20px",textAlign:"center"}}><div style={{fontSize:40,marginBottom:12}}>📆</div><div style={{fontWeight:700,fontSize:16,color:C.text,marginBottom:8}}>Pay cycle not set</div><div style={{color:C.sub,fontSize:14}}>Configure in Settings.</div></div></div>;
  return <div style={{paddingBottom:80}}><TBar title="Pay Day"/>
    <div style={{padding:"16px 20px 0"}}>
      {profile.hasJob2&&<div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:8,marginBottom:14}}>
        {[{ji:0,l:"Job 1"},{ji:1,l:job2?.name||"Job 2"}].map(j=>(
          <div key={j.ji} onClick={()=>setSelJob(j.ji)} style={{padding:"10px 8px",borderRadius:12,cursor:"pointer",textAlign:"center",border:selJob===j.ji?`2px solid ${j.ji===1?C.job2:C.accent}`:`1.5px solid ${C.border}`,background:selJob===j.ji?j.ji===1?C.job2Light:C.accentLight:C.bg}}>
            <div style={{fontWeight:700,fontSize:14,color:selJob===j.ji?j.ji===1?C.job2:C.accent:C.text}}>{j.l}</div>
          </div>
        ))}
      </div>}
      <div style={{background:`linear-gradient(135deg,${selJob===1?C.job2:C.accent},${selJob===1?C.job2+"CC":C.accentDark})`,borderRadius:18,padding:"20px",marginBottom:14,boxShadow:`0 6px 20px ${selJob===1?C.job2:C.accent}44`}}>
        <div style={{fontSize:11,fontWeight:600,color:"rgba(255,255,255,0.7)",marginBottom:4,letterSpacing:"0.5px"}}>CURRENT PAY PERIOD</div>
        <div style={{fontSize:13,color:"rgba(255,255,255,0.8)",marginBottom:10}}>{cy?.s} → {cy?.e}</div>
        <div style={{fontSize:36,fontWeight:800,color:"#fff"}}>{agg?fmt(agg.gross):"$0.00"}</div>
        <div style={{fontSize:15,color:"rgba(255,255,255,0.85)",marginTop:4,fontWeight:700}}>Take-home: {agg?fmt(agg.takeHome):"—"}</div>
        <div style={{fontSize:13,color:"rgba(255,255,255,0.7)",marginTop:2}}>{cShifts.length} shifts · {agg?fmtH(agg.tH):"0h"}</div>
      </div>
      {agg&&cShifts.length>0&&<>
        <Card>
          <div style={{fontSize:12,fontWeight:600,color:C.sub,marginBottom:10}}>GROSS EARNINGS</div>
          <PRow label="Base & penalty pay" val={fmt(agg.tOrd)}/>
          {agg.tOT>0&&<PRow label="Overtime" val={fmt(agg.tOT)}/>}
          {agg.tKm>0&&<PRow label="Km allowances" val={fmt(agg.tKm)}/>}
          {agg.tBs>0&&<PRow label="Broken shift allowances" val={fmt(agg.tBs)}/>}
          {agg.tSl>0&&<PRow label="Sleepover allowances" val={fmt(agg.tSl)}/>}
          {agg.fa>0&&<PRow label={`First aid (${fmtH(agg.tOTEH)} OTE)`} val={fmt(agg.fa)}/>}
          <PRow label="Gross total" val={fmt(agg.gross)} bold/>
        </Card>
        <Card>
          <div style={{fontSize:12,fontWeight:600,color:C.sub,marginBottom:10}}>DEDUCTIONS & SUPER</div>
          <PRow label={`Super 12% on OTE ${fmt(agg.tOTE)}`} val={fmt(agg.sup)}/>
          {agg.pkg>0&&<PRow label={`Salary packaging`} val={`−${fmt(agg.pkg)}`}/>}
          {agg.sac>0&&<PRow label="Salary sacrifice to super" val={`−${fmt(agg.sac)}`}/>}
          <PRow label="Tax withheld (ATO NAT 1004)" val={`−${fmt(agg.tax)}`}/>
          {agg.help>0&&<PRow label="HELP withholding" val={`−${fmt(agg.help)}`}/>}
          <PRow label="Take-home" val={fmt(agg.takeHome)} bold green/>
        </Card>
        {!job.empType||job.empType!=="casual"?<Card>
          <div style={{fontSize:12,fontWeight:600,color:C.sub,marginBottom:10}}>LEAVE ACCRUED THIS PERIOD</div>
          <PRow label="Annual leave" val={`+${agg.alHrs.toFixed(2)}h`}/>
          <PRow label="Sick/personal leave" val={`+${agg.sickHrs.toFixed(2)}h`}/>
          <div style={{fontSize:11,color:C.muted,marginTop:6,lineHeight:1.5}}>Accrued on {fmtH(agg.tOTEH)} OTE hours worked this period.</div>
        </Card>:null}
        <Card>
          <div style={{fontSize:12,fontWeight:600,color:C.sub,marginBottom:10}}>SHIFTS THIS PERIOD</div>
          {agg.calcs.map((c,i)=>{
            const s=cShifts.find(x=>x.id===c.id);
            const dow=new Date(c.date+"T00:00:00").getDay();
            return <div key={c.id} style={{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"8px 0",borderBottom:i<agg.calcs.length-1?`1px solid ${C.border}`:"none"}}>
              <div><div style={{display:"flex",alignItems:"center",gap:4}}>{s?.isSleepover&&<span style={{fontSize:12}}>🛏️</span>}<div style={{fontWeight:600,fontSize:14,color:C.text}}>{DN[dow]} {c.date.slice(5)}</div></div><div style={{fontSize:12,color:C.sub}}>{c.startTime}–{c.endTime||""} · {c.label}</div></div>
              <div style={{textAlign:"right"}}><div style={{fontWeight:700,color:C.green,fontSize:14}}>{fmt(c.gross)}</div><div style={{fontSize:11,color:C.sub}}>{fmtH(c.h)}</div></div>
            </div>;
          })}
        </Card>
        <div style={{fontSize:11,color:C.muted,padding:"0 4px 16px",lineHeight:1.6}}>Tax estimates use ATO 2025–26 formulas for this period only. Consult your accountant for full-year advice.</div>
      </>}
      {cShifts.length===0&&<div style={{textAlign:"center",padding:"40px 0",color:C.muted}}><div style={{fontSize:36,marginBottom:10}}>📭</div><div style={{fontSize:14}}>No shifts logged this pay period.</div></div>}
    </div>
  </div>;
}

// ─── LEAVE SCREEN ─────────────────────────────────────────────────────────────
function LeaveScreen({shifts,profile,job2,setProfile,setJob2}){
  const[selJob,setSelJob]=useState(0);
  const isJob2=selJob===1;
  const job=isJob2?{...profile,...job2}:profile;
  const isCasual=job.empType==="casual";
  const base=getBaseRate(job);
  const alRate=job.shiftWorker?LEAVE.alShift:LEAVE.alNormal;

  // Accumulate all leave from logged shifts for this job
  const jobShifts=shifts.filter(s=>(s.jobIdx||0)===selJob);
  const totalOTEH=jobShifts.reduce((a,s)=>{
    if(!base)return a;
    const d=new Date(s.date+"T00:00:00"),ws=new Date(d);ws.setDate(d.getDate()-d.getDay());
    const wk=ws.toISOString().slice(0,10);
    const wh=jobShifts.filter(x=>{const xd=new Date(x.date+"T00:00:00"),xs=new Date(xd);xs.setDate(xd.getDate()-xd.getDay());return xs.toISOString().slice(0,10)===wk&&xd<d;}).reduce((acc,x)=>acc+calcHrs(x.startTime,x.endTime||x.soEnd||"00:00"),0);
    const c=s.isSleepover?calcSleeoverShift(s,base,job.empType==="casual",job.stream||null,wh):calcShift(s,base,job.empType==="casual",job.stream||null,wh);
    return a+c.oteH;
  },0);

  const accrAL=isCasual?0:totalOTEH*alRate;
  const accrSick=isCasual?0:totalOTEH*LEAVE.sick;
  const initAL=parseFloat(isJob2?job2?.alBalance:profile.alBalance)||0;
  const initSick=parseFloat(isJob2?job2?.sickBalance:profile.sickBalance)||0;
  const totalAL=initAL+accrAL;
  const totalSick=initSick+accrSick;
  const alValue=base>0?totalAL*base:0;
  const sickValue=base>0?totalSick*base:0;

  return <div style={{paddingBottom:80}}><TBar title="Leave Balances"/>
    <div style={{padding:"16px 20px 0"}}>
      {profile.hasJob2&&<div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:8,marginBottom:14}}>
        {[{ji:0,l:"Job 1"},{ji:1,l:job2?.name||"Job 2"}].map(j=>(
          <div key={j.ji} onClick={()=>setSelJob(j.ji)} style={{padding:"10px 8px",borderRadius:12,cursor:"pointer",textAlign:"center",border:selJob===j.ji?`2px solid ${j.ji===1?C.job2:C.accent}`:`1.5px solid ${C.border}`,background:selJob===j.ji?j.ji===1?C.job2Light:C.accentLight:C.bg}}>
            <div style={{fontWeight:700,fontSize:14,color:selJob===j.ji?j.ji===1?C.job2:C.accent:C.text}}>{j.l}</div>
          </div>
        ))}
      </div>}
      {isCasual?(
        <Card><div style={{textAlign:"center",padding:"20px 0",color:C.muted}}><div style={{fontSize:32,marginBottom:8}}>ℹ️</div><div style={{fontSize:14}}>Casual employees don't accrue paid leave.</div></div></Card>
      ):<>
        <Card sx={{background:C.greenLight,border:`1.5px solid ${C.green}33`}}>
          <div style={{fontSize:11,fontWeight:600,color:C.green,marginBottom:14}}>🏖️ ANNUAL LEAVE</div>
          <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-end",marginBottom:14}}>
            <div>
              <div style={{fontSize:36,fontWeight:800,color:C.text}}>{totalAL.toFixed(1)}<span style={{fontSize:18,color:C.sub}}> hrs</span></div>
              {alValue>0&&<div style={{fontSize:16,fontWeight:700,color:C.green}}>{fmt(alValue)}</div>}
            </div>
            <div style={{textAlign:"right",fontSize:12,color:C.sub}}>
              <div>Opening: {initAL.toFixed(1)}h</div>
              <div>Accrued: +{accrAL.toFixed(2)}h</div>
              <div>Rate: {(alRate*100).toFixed(3)}% per OTE hr</div>
              <div>{job.shiftWorker?"5 wk (shift worker)":"4 weeks"}</div>
            </div>
          </div>
          <div style={{background:"rgba(255,255,255,0.6)",borderRadius:10,padding:"10px 12px"}}>
            <div style={{fontSize:12,color:C.sub,marginBottom:4}}>Based on {totalOTEH.toFixed(1)} OTE hours logged</div>
            <div style={{height:8,borderRadius:4,background:"rgba(0,0,0,0.08)",overflow:"hidden"}}>
              <div style={{height:"100%",borderRadius:4,background:C.green,width:`${Math.min(100,(totalAL/(job.shiftWorker?190:152))*100)}%`,transition:"width 0.3s"}}/>
            </div>
            <div style={{fontSize:11,color:C.sub,marginTop:4}}>{((totalAL/(job.shiftWorker?190:152))*100).toFixed(1)}% of annual entitlement</div>
          </div>
        </Card>

        <Card sx={{background:"#FFF3E0",border:`1.5px solid ${C.orange}33`}}>
          <div style={{fontSize:11,fontWeight:600,color:C.orange,marginBottom:14}}>🤒 SICK / PERSONAL LEAVE</div>
          <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-end",marginBottom:14}}>
            <div>
              <div style={{fontSize:36,fontWeight:800,color:C.text}}>{totalSick.toFixed(1)}<span style={{fontSize:18,color:C.sub}}> hrs</span></div>
              {sickValue>0&&<div style={{fontSize:16,fontWeight:700,color:C.orange}}>{fmt(sickValue)}</div>}
            </div>
            <div style={{textAlign:"right",fontSize:12,color:C.sub}}>
              <div>Opening: {initSick.toFixed(1)}h</div>
              <div>Accrued: +{accrSick.toFixed(2)}h</div>
              <div>Rate: 1/26 per OTE hr</div>
            </div>
          </div>
          <div style={{background:"rgba(255,255,255,0.6)",borderRadius:10,padding:"10px 12px"}}>
            <div style={{fontSize:12,color:C.sub,marginBottom:4}}>Full entitlement: 76h/year</div>
            <div style={{height:8,borderRadius:4,background:"rgba(0,0,0,0.08)",overflow:"hidden"}}>
              <div style={{height:"100%",borderRadius:4,background:C.orange,width:`${Math.min(100,(totalSick/76)*100)}%`,transition:"width 0.3s"}}/>
            </div>
            <div style={{fontSize:11,color:C.sub,marginTop:4}}>{((totalSick/76)*100).toFixed(1)}% of annual entitlement</div>
          </div>
        </Card>

        <Card>
          <div style={{fontSize:12,fontWeight:600,color:C.sub,marginBottom:8}}>UPDATE OPENING BALANCES</div>
          <p style={{fontSize:12,color:C.sub,margin:"0 0 10px",lineHeight:1.5}}>Update if you receive a new payslip with different balances.</p>
          <Inp label="Annual leave opening (hours)" type="number" min={0} step={0.5} placeholder="0" value={isJob2?(job2?.alBalance||""):(profile.alBalance||"")} onChange={e=>{const v=parseFloat(e.target.value)||0;isJob2?setJob2({...job2,alBalance:v}):setProfile({...profile,alBalance:v});}}/>
          <Inp label="Sick leave opening (hours)" type="number" min={0} step={0.5} placeholder="0" value={isJob2?(job2?.sickBalance||""):(profile.sickBalance||"")} onChange={e=>{const v=parseFloat(e.target.value)||0;isJob2?setJob2({...job2,sickBalance:v}):setProfile({...profile,sickBalance:v});}}/>
        </Card>
      </>}
    </div>
  </div>;
}
// ─── TEMPLATES SCREEN ─────────────────────────────────────────────────────────
function TmplScreen({templates,setTemplates,profile,job2}){
  const[ed,setEd]=useState(null);
  const hasJob2=!!profile.hasJob2;
  const blankR={name:"",isSleepoverTemplate:false,startTime:"",endTime:"",km:0,brokenShift:-1,sleepover:false,sleeoverAmt:"",jobIdx:0};
  const blankSO={name:"",isSleepoverTemplate:true,soActiveStart:"",soStart:"",soEnd:"",soAgreement:false,sleeoverAmt:"",km:0,jobIdx:0};
  const isSO=ed?.isSleepoverTemplate;
  const canSave=ed&&ed.name&&(isSO?(ed.soStart&&ed.soEnd):(ed.startTime&&ed.endTime));
  const save=()=>{if(!canSave)return;if(ed._i!=null){const t=[...templates];t[ed._i]={...ed};delete t[ed._i]._i;setTemplates(t);}else setTemplates([...templates,ed]);setEd(null);};
  if(ed){
    const h=!isSO&&ed.startTime&&ed.endTime?calcHrs(ed.startTime,ed.endTime):0;
    const soH=isSO&&ed.soActiveStart&&ed.soStart?calcHrs(ed.soActiveStart,ed.soStart):0;
    return <div style={{paddingBottom:80}}>
      <BBar onBack={()=>setEd(null)} title={`${ed._i!=null?"Edit":"New"} Template`}/>
      <div style={{padding:"16px 20px 0"}}>
        <Card>
          <Inp label="Template name" placeholder={isSO?"e.g. Residential Sleepover":"e.g. Day Shift 6am–2pm"} value={ed.name} onChange={e=>setEd({...ed,name:e.target.value})}/>
          {hasJob2&&<div style={{marginBottom:12}}>
            <div style={{fontSize:12,fontWeight:600,color:C.sub,marginBottom:6}}>JOB</div>
            <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:8}}>
              {[{ji:0,l:"Job 1"},{ji:1,l:job2?.name||"Job 2"}].map(j=>(
                <div key={j.ji} onClick={()=>setEd({...ed,jobIdx:j.ji})} style={{padding:"9px 8px",borderRadius:10,cursor:"pointer",textAlign:"center",border:(ed.jobIdx||0)===j.ji?`2px solid ${j.ji===1?C.job2:C.accent}`:`1.5px solid ${C.border}`,background:(ed.jobIdx||0)===j.ji?j.ji===1?C.job2Light:C.accentLight:C.bg}}>
                  <div style={{fontWeight:700,fontSize:13,color:(ed.jobIdx||0)===j.ji?j.ji===1?C.job2:C.accent:C.text}}>{j.l}</div>
                </div>
              ))}
            </div>
          </div>}
          <div style={{marginBottom:14}}>
            <div style={{fontSize:12,fontWeight:600,color:C.sub,marginBottom:8}}>Type</div>
            <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:8}}>
              <div onClick={()=>setEd({...blankR,name:ed.name,jobIdx:ed.jobIdx||0,_i:ed._i})} style={{padding:"12px 10px",borderRadius:12,cursor:"pointer",textAlign:"center",border:!isSO?`2px solid ${C.accent}`:`1.5px solid ${C.border}`,background:!isSO?C.accentLight:C.bg}}>
                <div style={{fontSize:18,marginBottom:4}}>⏰</div><div style={{fontWeight:700,fontSize:13,color:!isSO?C.accent:C.text}}>Regular</div>
              </div>
              <div onClick={()=>setEd({...blankSO,name:ed.name,jobIdx:ed.jobIdx||0,_i:ed._i})} style={{padding:"12px 10px",borderRadius:12,cursor:"pointer",textAlign:"center",border:isSO?`2px solid ${C.purple}`:`1.5px solid ${C.border}`,background:isSO?C.purpleLight:C.bg}}>
                <div style={{fontSize:18,marginBottom:4}}>🛏️</div><div style={{fontWeight:700,fontSize:13,color:isSO?C.purple:C.text}}>Sleepover</div>
              </div>
            </div>
          </div>
        </Card>
        {!isSO?(
          <Card>
            <div style={{display:"flex",gap:10}}><div style={{flex:1}}><Inp label="Start" type="time" value={ed.startTime} onChange={e=>setEd({...ed,startTime:e.target.value})}/></div><div style={{flex:1}}><Inp label="End" type="time" value={ed.endTime} onChange={e=>setEd({...ed,endTime:e.target.value})}/></div></div>
            {h>0&&<div style={{fontSize:13,color:C.sub,marginTop:-6,marginBottom:10}}>{h.toFixed(1)} hours</div>}
            <Inp label="Default km" type="number" min={0} placeholder="0" value={ed.km||""} onChange={e=>setEd({...ed,km:parseFloat(e.target.value)||0})}/>
            <div style={{marginBottom:4}}>
              <div style={{fontSize:12,fontWeight:600,color:C.sub,marginBottom:6}}>Broken Shift</div>
              <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr 1fr",gap:6}}>
                {[{v:-1,l:"Auto"},{v:0,l:"None"},{v:1,l:"1 break"},{v:2,l:"2 breaks"}].map(o=>(
                  <div key={o.v} onClick={()=>setEd({...ed,brokenShift:o.v})} style={{padding:"8px 4px",borderRadius:10,textAlign:"center",cursor:"pointer",border:ed.brokenShift===o.v?`2px solid ${C.accent}`:`1.5px solid ${C.border}`,background:ed.brokenShift===o.v?C.accentLight:C.bg,fontSize:12,fontWeight:600,color:ed.brokenShift===o.v?C.accent:C.text}}>{o.l}</div>
                ))}
              </div>
            </div>
          </Card>
        ):(
          <Card>
            <div style={{background:C.purpleLight,borderRadius:10,padding:"10px 12px",marginBottom:12,fontSize:12,color:C.purple,lineHeight:1.5}}>Active start is editable per shift — set defaults here.</div>
            <div style={{display:"flex",gap:10}}>
              <div style={{flex:1}}><Inp label="Default active start" type="time" value={ed.soActiveStart||""} onChange={e=>setEd({...ed,soActiveStart:e.target.value})}/></div>
              <div style={{flex:1}}><Inp label="Sleepover from" type="time" value={ed.soStart||""} onChange={e=>setEd({...ed,soStart:e.target.value})}/></div>
            </div>
            {soH>0&&<div style={{fontSize:13,color:C.sub,marginTop:-6,marginBottom:10}}>{soH.toFixed(1)} active hours</div>}
            <div style={{display:"flex",gap:10}}>
              <div style={{flex:1}}><Inp label="Sleepover start" type="time" value={ed.soStart||""} onChange={e=>setEd({...ed,soStart:e.target.value})}/></div>
              <div style={{flex:1}}><Inp label="Sleepover end" type="time" value={ed.soEnd||""} onChange={e=>setEd({...ed,soEnd:e.target.value})}/></div>
            </div>
            <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:12}}>
              <div><div style={{fontWeight:600,fontSize:14,color:C.text}}>Written 12h agreement</div></div>
              <Toggle on={!!ed.soAgreement} onChange={v=>setEd({...ed,soAgreement:v})}/>
            </div>
            <div style={{fontSize:12,fontWeight:600,color:C.sub,marginBottom:6}}>Default Sleepover Allowance</div>
            <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:4}}><span style={{color:C.sub}}>$</span><input type="number" min={0} step={0.01} placeholder={AL.sleepDef} value={ed.sleeoverAmt||""} onChange={e=>setEd({...ed,sleeoverAmt:e.target.value})} style={{flex:1,background:C.bg,border:`1.5px solid ${C.border}`,borderRadius:10,color:C.text,fontSize:15,padding:"10px 12px",boxSizing:"border-box",outline:"none",fontFamily:"inherit"}}/></div>
            <Inp label="Default km" type="number" min={0} placeholder="0" value={ed.km||""} onChange={e=>setEd({...ed,km:parseFloat(e.target.value)||0})}/>
          </Card>
        )}
        <Btn onClick={save} disabled={!canSave}>Save Template</Btn>
        <Btn v="ghost" onClick={()=>setEd(null)}>Cancel</Btn>
      </div>
    </div>;
  }
  const regT=templates.filter(t=>!t.isSleepoverTemplate);
  const soT=templates.filter(t=>t.isSleepoverTemplate);
  return <div style={{paddingBottom:80}}>
    <div style={{background:C.white,borderBottom:`1px solid ${C.border}`,padding:"14px 20px",display:"flex",alignItems:"center",justifyContent:"space-between"}}>
      <span style={{fontSize:17,fontWeight:800,color:C.text}}>Shift Templates</span>
      <button onClick={()=>setEd({...blankR})} style={{background:C.accentLight,border:"none",color:C.accent,borderRadius:10,padding:"7px 14px",fontSize:13,fontWeight:700,cursor:"pointer"}}>+ New</button>
    </div>
    <div style={{padding:"16px 20px 0"}}>
      {templates.length===0&&<div style={{textAlign:"center",padding:"48px 0",color:C.muted}}><div style={{fontSize:40,marginBottom:10}}>📋</div><div style={{fontWeight:700,fontSize:15,color:C.text,marginBottom:6}}>No templates yet</div><div style={{fontSize:14}}>Create regular or sleepover templates.</div></div>}
      {regT.length>0&&<div style={{fontSize:11,fontWeight:700,color:C.muted,letterSpacing:"0.5px",marginBottom:8}}>REGULAR SHIFTS</div>}
      {regT.map(t=>{const i=templates.indexOf(t);const h=t.startTime&&t.endTime?calcHrs(t.startTime,t.endTime):0;return <Card key={i}>
        <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start"}}>
          <div style={{flex:1}}>
            <div style={{display:"flex",alignItems:"center",gap:6,marginBottom:4}}>{profile.hasJob2&&<JobBadge jobIdx={t.jobIdx||0}/>}<div style={{fontWeight:700,fontSize:15,color:C.text}}>{t.name}</div></div>
            <div style={{fontSize:13,color:C.sub,marginBottom:4}}>{t.startTime}–{t.endTime} · {h.toFixed(1)}h</div>
            {(t.km>0||(t.brokenShift===-1||t.brokenShift>0))&&<div style={{display:"flex",gap:4}}>{t.km>0&&<span style={{background:C.accentLight,color:C.accent,borderRadius:10,fontSize:10,fontWeight:700,padding:"2px 7px"}}>{t.km}km</span>}{(t.brokenShift===-1||t.brokenShift>0)&&<span style={{background:C.orangeLight,color:C.orange,borderRadius:10,fontSize:10,fontWeight:700,padding:"2px 7px"}}>Broken</span>}</div>}
          </div>
          <div style={{display:"flex",gap:6,marginLeft:8}}><button onClick={()=>setEd({...t,_i:i})} style={{background:C.bg,border:`1px solid ${C.border}`,borderRadius:8,padding:"5px 9px",fontSize:12,fontWeight:600,color:C.text,cursor:"pointer"}}>Edit</button><button onClick={()=>setTemplates(templates.filter((_,j)=>j!==i))} style={{background:C.redLight,border:"none",borderRadius:8,padding:"5px 9px",fontSize:12,fontWeight:600,color:C.red,cursor:"pointer"}}>Del</button></div>
        </div>
      </Card>;})}
      {soT.length>0&&<div style={{fontSize:11,fontWeight:700,color:C.muted,letterSpacing:"0.5px",marginBottom:8,marginTop:soT.length>0&&regT.length>0?8:0}}>SLEEPOVER SHIFTS</div>}
      {soT.map(t=>{const i=templates.indexOf(t);const soH=t.soActiveStart&&t.soStart?calcHrs(t.soActiveStart,t.soStart):0;return <Card key={i} sx={{border:`1.5px solid ${C.purple}22`,background:C.purpleLight+"33"}}>
        <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start"}}>
          <div style={{flex:1}}>
            <div style={{display:"flex",alignItems:"center",gap:6,marginBottom:4}}><span>🛏️</span>{profile.hasJob2&&<JobBadge jobIdx={t.jobIdx||0}/>}<div style={{fontWeight:700,fontSize:15,color:C.text}}>{t.name}</div></div>
            <div style={{fontSize:13,color:C.sub,marginBottom:2}}>Active: {t.soActiveStart||"—"}–{t.soStart||"—"} ({soH.toFixed(1)}h)</div>
            <div style={{fontSize:13,color:C.sub}}>Sleepover: {t.soStart||"—"}–{t.soEnd||"—"}</div>
          </div>
          <div style={{display:"flex",gap:6,marginLeft:8}}><button onClick={()=>setEd({...t,_i:i})} style={{background:C.bg,border:`1px solid ${C.border}`,borderRadius:8,padding:"5px 9px",fontSize:12,fontWeight:600,color:C.text,cursor:"pointer"}}>Edit</button><button onClick={()=>setTemplates(templates.filter((_,j)=>j!==i))} style={{background:C.redLight,border:"none",borderRadius:8,padding:"5px 9px",fontSize:12,fontWeight:600,color:C.red,cursor:"pointer"}}>Del</button></div>
        </div>
      </Card>;})}
    </div>
  </div>;
}
// ─── SETTINGS SCREEN ─────────────────────────────────────────────────────────
function SetScreen({profile,setProfile,job2,setJob2}){
  const[loc,setLoc]=useState(profile);
  const[loc2,setLoc2]=useState(job2||{});
  const str=loc.stream||"",levels=LS[str]||[];
  const base=getBaseRate(loc);
  const SL=({children,mt})=><div style={{fontSize:11,fontWeight:700,color:C.muted,letterSpacing:"0.5px",marginBottom:8,marginTop:mt||0}}>{children}</div>;
  const save=()=>{setProfile(loc);setJob2(loc2);};
  const base2=getBaseRate(loc2);
  const isCustom2=!!loc2.customRate;

  return <div style={{paddingBottom:80}}><TBar title="Settings"/>
    <div style={{padding:"16px 20px 0"}}>
      <SL>JOB 1</SL>
      <Card>
        <Sel label="Stream" value={loc.stream||""} onChange={e=>setLoc({...loc,stream:e.target.value,level:"",payPoint:""})}><option value="">Select stream…</option>{Object.entries(STREAMS).map(([k,v])=><option key={k} value={k}>{v.label}</option>)}</Sel>
        {str&&<><div style={{display:"flex",gap:10}}><div style={{flex:1}}><Sel label="Level" value={loc.level||""} onChange={e=>setLoc({...loc,level:e.target.value,payPoint:""})}><option value="">Level…</option>{levels.map(l=><option key={l.k} value={l.k}>{l.l}</option>)}</Sel></div><div style={{flex:1}}><Sel label="Pay Point" value={loc.payPoint||""} onChange={e=>setLoc({...loc,payPoint:e.target.value})}><option value="">Point…</option>{(levels.find(l=>l.k===loc.level)?.p||[]).map(pt=><option key={pt} value={pt}>{pt}</option>)}</Sel></div></div><Sel label="Employment Type" value={loc.empType||""} onChange={e=>setLoc({...loc,empType:e.target.value})}><option value="">Select…</option><option value="fulltime">Full-time</option><option value="parttime">Part-time</option><option value="casual">Casual</option></Sel></>}
        {base>0&&<div style={{background:C.accentLight,borderRadius:10,padding:"10px 12px",marginTop:4}}><div style={{fontSize:11,fontWeight:600,color:C.accent,marginBottom:2}}>BASE RATE</div><div style={{fontSize:22,fontWeight:800,color:C.text}}>{fmt(loc.empType==="casual"?base*1.25:base)}/hr</div></div>}
        {loc.empType&&loc.empType!=="casual"&&<div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginTop:10}}><div><div style={{fontWeight:600,fontSize:14,color:C.text}}>Shift Worker (5 wk AL)</div></div><Toggle on={!!loc.shiftWorker} onChange={v=>setLoc({...loc,shiftWorker:v})}/></div>}
      </Card>

      <SL mt={16}>TAX & SALARY</SL>
      <Card>
        <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:14}}><div><div style={{fontWeight:600,fontSize:14,color:C.text}}>Tax-free threshold</div><div style={{fontSize:12,color:C.sub}}>Claim if main job</div></div><Toggle on={!!loc.tfThreshold} onChange={v=>setLoc({...loc,tfThreshold:v})}/></div>
        <Div/>
        <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:14,marginTop:10}}><div><div style={{fontWeight:600,fontSize:14,color:C.text}}>HELP / student debt</div></div><Toggle on={!!loc.helpDebt} onChange={v=>setLoc({...loc,helpDebt:v})}/></div>
        <Div/>
        <div style={{marginTop:10,marginBottom:14}}>
          <div style={{fontSize:12,fontWeight:600,color:C.sub,marginBottom:6}}>Salary packaging (per fortnight)</div>
          <div style={{display:"flex",alignItems:"center",gap:8}}><span style={{color:C.sub}}>$</span><input type="number" min={0} step={1} placeholder="0" value={loc.pkgAmt||""} onChange={e=>setLoc({...loc,pkgAmt:e.target.value})} style={{flex:1,background:C.bg,border:`1.5px solid ${C.border}`,borderRadius:10,color:C.text,fontSize:15,padding:"10px 12px",boxSizing:"border-box",outline:"none",fontFamily:"inherit"}}/></div>
        </div>
        <Div/>
        <div style={{marginTop:10}}>
          <div style={{fontSize:12,fontWeight:600,color:C.sub,marginBottom:6}}>Salary sacrifice to super (%)</div>
          <div style={{display:"flex",alignItems:"center",gap:8}}><input type="number" min={0} max={100} step={0.5} placeholder="0" value={loc.sacPct||""} onChange={e=>setLoc({...loc,sacPct:e.target.value})} style={{flex:1,background:C.bg,border:`1.5px solid ${C.border}`,borderRadius:10,color:C.text,fontSize:15,padding:"10px 12px",boxSizing:"border-box",outline:"none",fontFamily:"inherit"}}/><span style={{color:C.sub}}>%</span></div>
        </div>
      </Card>

      <SL mt={16}>STATE</SL>
      <Card><Sel label="State" value={loc.state||""} onChange={e=>setLoc({...loc,state:e.target.value})}><option value="">Select state…</option>{STATES.map(s=><option key={s.k} value={s.k}>{s.l}</option>)}</Sel></Card>

      <SL mt={16}>JOB 1 PAY CYCLE</SL>
      <PayCycleFields obj={loc} setObj={setLoc}/>

      <SL mt={16}>ALLOWANCES (JOB 1)</SL>
      <Card>
        <div style={{marginBottom:14}}>
          <div style={{fontSize:12,fontWeight:600,color:C.sub,marginBottom:6}}>Default Sleepover Amount</div>
          <div style={{display:"flex",alignItems:"center",gap:8}}><span style={{color:C.sub}}>$</span><input type="number" min={0} step={0.01} placeholder={`${AL.sleepDef}`} value={loc.defaultSleepAmt||""} onChange={e=>setLoc({...loc,defaultSleepAmt:e.target.value})} style={{flex:1,background:C.bg,border:`1.5px solid ${C.border}`,borderRadius:10,color:C.text,fontSize:15,padding:"10px 12px",boxSizing:"border-box",outline:"none",fontFamily:"inherit"}}/></div>
        </div>
        <Div/>
        <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginTop:10}}><div><div style={{fontWeight:600,fontSize:14,color:C.text}}>First Aid Allowance</div><div style={{fontSize:12,color:C.sub}}>$0.54/hr on OTE, capped per cycle</div></div><Toggle on={!!loc.firstAid} onChange={v=>setLoc({...loc,firstAid:v})}/></div>
      </Card>

      {loc.hasJob2&&<>
        <SL mt={16}>JOB 2 — {loc2.name||"Second Job"}</SL>
        <Card>
          <Inp label="Job name" value={loc2.name||""} onChange={e=>setLoc2({...loc2,name:e.target.value})}/>
          {!isCustom2?<ClassificationSelect job={loc2} setJob={setLoc2}/>:(
            <Inp label="Base hourly rate ($)" type="number" min={0} step={0.01} placeholder="0.00" value={loc2.customRate||""} onChange={e=>setLoc2({...loc2,customRate:e.target.value})}/>
          )}
          <Sel label="Employment Type" value={loc2.empType||""} onChange={e=>setLoc2({...loc2,empType:e.target.value})}><option value="">Select…</option><option value="fulltime">Full-time</option><option value="parttime">Part-time</option><option value="casual">Casual</option></Sel>
          {base2>0&&<div style={{background:C.job2Light,borderRadius:10,padding:"10px 12px",marginTop:4}}><div style={{fontSize:11,fontWeight:600,color:C.job2,marginBottom:2}}>JOB 2 BASE RATE</div><div style={{fontSize:20,fontWeight:800,color:C.text}}>{fmt(loc2.empType==="casual"?base2*1.25:base2)}/hr</div></div>}
          {loc2.empType&&loc2.empType!=="casual"&&<div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginTop:10}}><div><div style={{fontWeight:600,fontSize:14,color:C.text}}>Shift Worker (5 wk AL)</div></div><Toggle on={!!loc2.shiftWorker} onChange={v=>setLoc2({...loc2,shiftWorker:v})}/></div>}
        </Card>
        <SL mt={16}>JOB 2 PAY CYCLE</SL>
        <PayCycleFields obj={loc2} setObj={setLoc2}/>
        <SL mt={16}>ALLOWANCES (JOB 2)</SL>
        <Card>
          <div style={{fontSize:12,fontWeight:600,color:C.sub,marginBottom:6}}>Default Sleepover Amount</div>
          <div style={{display:"flex",alignItems:"center",gap:8}}><span style={{color:C.sub}}>$</span><input type="number" min={0} step={0.01} placeholder={`${AL.sleepDef}`} value={loc2.defaultSleepAmt||""} onChange={e=>setLoc2({...loc2,defaultSleepAmt:e.target.value})} style={{flex:1,background:C.bg,border:`1.5px solid ${C.border}`,borderRadius:10,color:C.text,fontSize:15,padding:"10px 12px",boxSizing:"border-box",outline:"none",fontFamily:"inherit"}}/></div>
          <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginTop:12}}><div><div style={{fontWeight:600,fontSize:14,color:C.text}}>First Aid (Job 2)</div></div><Toggle on={!!loc2.firstAid} onChange={v=>setLoc2({...loc2,firstAid:v})}/></div>
        </Card>
      </>}

      <SL mt={16}>ABOUT</SL>
      <Card>
        <div style={{fontSize:13,color:C.sub,lineHeight:1.6}}>Pay rates: <strong>1 July 2025</strong> (MA000100). Tax: ATO NAT 1004 + Schedule 8 (2025–26). Sleepover: FWC effective 1 June 2026.</div>
        <Div/>
        <div style={{display:"flex",justifyContent:"space-between"}}><span style={{fontSize:14,color:C.sub}}>Version</span><span style={{fontSize:14,fontWeight:600,color:C.text}}>3.0.0</span></div>
      </Card>
      <Btn onClick={save} sx={{marginTop:8}}>Save Changes</Btn>
    </div>
  </div>;
}

// ─── ROOT ─────────────────────────────────────────────────────────────────────
export default function App(){
  const[profile,setProfile]=useStorage("sp_p_v6",{});
  const[job2,setJob2]=useStorage("sp_j2_v6",{});
  const[shifts,setShifts]=useStorage("sp_s_v6",[]);
  const[tmpls,setTmpls]=useStorage("sp_t_v6",[]);
  const[step,setStep]=useStorage("sp_step_v6",0);
  const[tab,setTab]=useState("cal");
  const next=()=>setStep(s=>s+1);
  const back=()=>setStep(s=>Math.max(0,s-1));

  if(step===0)return <OWelcome onNext={next}/>;
  if(step===1)return <OStream p={profile} sp={setProfile} onNext={next} onBack={back} step={1}/>;
  if(step===2)return <OClass p={profile} sp={setProfile} onNext={next} onBack={back} step={2}/>;
  if(step===3)return <OTax p={profile} sp={setProfile} onNext={next} onBack={back} step={3}/>;
  if(step===4)return <OLeave p={profile} sp={setProfile} onNext={next} onBack={back} step={4}/>;
  if(step===5)return <OState p={profile} sp={setProfile} onNext={next} onBack={back} step={5}/>;
  if(step===6)return <OPayCycle p={profile} sp={setProfile} onNext={next} onBack={back} step={6}/>;
  if(step===7)return <OJob2 p={profile} sp={setProfile} job2={job2} setJob2={setJob2} onNext={next} onBack={back} step={7}/>;
  if(step===8)return <OJob2Cycle p={profile} job2={job2} setJob2={setJob2} onNext={next} onBack={back} step={8}/>;
  if(step===9)return <OPaywall onComplete={next}/>;

  return <div style={{minHeight:"100vh",background:C.bg,fontFamily:"'Inter',-apple-system,BlinkMacSystemFont,sans-serif",maxWidth:480,margin:"0 auto",color:C.text}}>
    {tab==="cal"&&<CalScreen shifts={shifts} setShifts={setShifts} profile={profile} job2={job2} templates={tmpls}/>}
    {tab==="pay"&&<PayScreen shifts={shifts} profile={profile} job2={job2}/>}
    {tab==="leave"&&<LeaveScreen shifts={shifts} profile={profile} job2={job2} setProfile={setProfile} setJob2={setJob2}/>}
    {tab==="tmpl"&&<TmplScreen templates={tmpls} setTemplates={setTmpls} profile={profile} job2={job2}/>}
    {tab==="set"&&<SetScreen profile={profile} setProfile={setProfile} job2={job2} setJob2={setJob2}/>}
    <Nav tab={tab} setTab={setTab}/>
  </div>;
}
