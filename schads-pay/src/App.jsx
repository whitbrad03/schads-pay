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
const C={bg:"#F5F6FA",white:"#FFFFFF",border:"#E8EAF0",borderStrong:"#D0D4E0",text:"#1A1D2E",sub:"#6B7080",muted:"#9CA3AF",accent:"#2D6EF5",accentLight:"#EBF1FE",accentDark:"#1A4FCC",green:"#18A96B",greenLight:"#E6F7F1",orange:"#F08C1A",orangeLight:"#FEF3E2",red:"#E5424D",redLight:"#FDEAEC",purple:"#7C5CBF",purpleLight:"#F0EBFA",teal:"#1AADAC",tealLight:"#E5F6F6"};

// ─── PAY DATA ────────────────────────────────────────────────────────────────
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

// ─── ATO TAX FORMULAS (NAT 1004 + Schedule 8, 2025-26) ───────────────────────
// Scale 1: no tax-free threshold. Scale 2: tax-free threshold claimed.
// HELP: marginal system from Sep 2025 (Schedule 8)
// Formula: weekly_tax = a*x - b where x = weekly earnings + 0.99 (floor + 99c)
const SCALE1=[{max:150,a:0.1600,b:0.1600},{max:371,a:0.2117,b:7.7550},{max:515,a:0.1890,b:-0.6702},{max:932,a:0.3227,b:68.2367},{max:2246,a:0.3200,b:65.7202},{max:3303,a:0.3900,b:222.9510},{max:Infinity,a:0.4700,b:487.2587}];
const SCALE2=[{max:361,a:0,b:0},{max:500,a:0.1600,b:57.8462},{max:625,a:0.2600,b:107.8462},{max:721,a:0.1800,b:57.8462},{max:865,a:0.1890,b:64.3365},{max:1282,a:0.3227,b:180.0385},{max:2596,a:0.3200,b:176.5769},{max:3653,a:0.3900,b:358.3077},{max:Infinity,a:0.4700,b:650.6154}];
// HELP Schedule 8 (from 24 Sep 2025): marginal system
const HELP_TFT=[{max:1288,a:0,b:0},{max:2403,a:0.15,b:193.2692},{max:3447,a:0.17,b:241.3462},{max:Infinity,a:0.10,b:0}];
const HELP_NOTFT=[{max:938,a:0,b:0},{max:2053,a:0.15,b:140.7692},{max:2597,a:0.17,b:181.8462},{max:Infinity,a:0.10,b:0}];

function applyScale(scale, weeklyX){
  const x=Math.floor(weeklyX)+0.99;
  for(const r of scale){if(x<r.max)return Math.max(0,Math.floor(r.a*x-r.b));}
  return 0;
}

// Calculate fortnightly tax + HELP withholding
// taxableFortnightly = gross - packaging - sacrifice
// helpFortnightly = gross + sacrifice (packaging also added back per ATO)
function calcTax(grossFortnight, profile){
  const pkg=parseFloat(profile.pkgAmt)||0;
  const sacPct=(parseFloat(profile.sacPct)||0)/100;
  const sac=grossFortnight*sacPct;
  const taxable=Math.max(0, grossFortnight-pkg-sac);
  // Weekly equivalent for ATO formula
  const weeklyTaxable=Math.floor(taxable/2)+0.99;
  const scale=profile.tfThreshold?SCALE2:SCALE1;
  const weeklyTax=applyScale(scale,weeklyTaxable);
  const fortnightlyTax=weeklyTax*2;
  // HELP: calculated on gross + sacrifice (packaging added back too)
  let helpFortnight=0;
  if(profile.helpDebt){
    const helpIncome=grossFortnight; // both pkg and sac added back = gross
    const weeklyHelp=Math.floor(helpIncome/2)+0.99;
    const helpScale=profile.tfThreshold?HELP_TFT:HELP_NOTFT;
    const weeklyHelpAmt=applyScale(helpScale,weeklyHelp);
    helpFortnight=weeklyHelpAmt*2;
  }
  const takeHome=grossFortnight-fortnightlyTax-helpFortnight-sac-pkg;
  const employerSuper=(grossFortnight*(1-(sacPct)))*0; // placeholder, super calc in aggregate
  return{tax:fortnightlyTax,help:helpFortnight,sac,pkg,taxable,takeHome:Math.max(0,takeHome)};
}

// ─── PAY MATHS ───────────────────────────────────────────────────────────────
const fmt=n=>`$${n.toFixed(2)}`;
const fmtR=n=>`$${Math.round(n).toLocaleString()}`;

function toMins(t){const[h,m]=t.split(":").map(Number);return h*60+m;}
function hrsFromMins(m){return m/60;}
function calcHrs(s,e){let a=toMins(s),b=toMins(e);if(b<=a)b+=1440;return(b-a)/60;}
function isPH(d,st){return st==="QLD"?QLD_PH.includes(d):false;}

// Determine penalty multiplier for an active segment
// Each segment assessed independently (post June 2026 rule)
function segMult(startMins, endMins, dow, ph, cas){
  if(ph) return cas?2.75:2.50;
  if(dow===0) return 2.00;
  if(dow===6) return 1.50;
  // Weekday: check if THIS segment qualifies for night/afternoon loading
  // Night: segment finishes after midnight (>1440) or starts before 6am (<360)
  if(endMins>1440||startMins<360) return 1.15;
  // Afternoon: segment ends after 8pm
  if(endMins>1200) return 1.125;
  return 1.00;
}
function segLabel(m){
  if(m>=2.75)return"Public Holiday (casual)";if(m>=2.5)return"Public Holiday";
  if(m>=2.0)return"Sunday rate";if(m>=1.5)return"Saturday rate";
  if(m>=1.15)return"Night shift";if(m>=1.125)return"Afternoon shift";
  return"Ordinary time";
}

// Calculate a single regular (non-sleepover) shift
function calcShift(shift, base, cas, stream, wkH){
  const h=calcHrs(shift.startTime,shift.endTime);
  const d=new Date(shift.date+"T00:00:00"),dow=d.getDay();
  const ph=shift.isPublicHoliday||false;
  const sm=toMins(shift.startTime),em=sm+(h*60);
  const m=segMult(sm,em,dow,ph,cas);
  const eb=cas?base*1.25:base;
  const thr=STREAMS[stream]?.ot||2;
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

// Calculate a sleepover shift (post-June-2026 rules)
// shift.soStart, shift.soEnd = sleepover window (HH:MM)
// shift.startTime = active start before sleepover
// shift.soActiveAfterEnd = active end after sleepover (optional, if worker stays after)
// shift.wakeups = [{start, end}] wakeup segments during sleepover
// shift.soAgreement = bool (written agreement for up to 12h)
function calcSleeoverShift(shift, base, cas, stream, wkH){
  const d=new Date(shift.date+"T00:00:00"),dow=d.getDay();
  const ph=shift.isPublicHoliday||false;
  const eb=cas?base*1.25:base;
  const thr=STREAMS[stream]?.ot||2;
  const wd=dow>=1&&dow<=5&&!ph;
  const maxOrdinary=shift.soAgreement?12:8; // hours before OT kicks in

  let totalActive=0,totalOrd=0,totalOT=0,totalOTE=0,totalOTEPay=0;
  const segments=[];

  // Helper: calc a single active segment with current wkH + accumulated active
  const calcSeg=(sMins,eMins,accActive)=>{
    const h=(eMins-sMins)/60;
    const m=segMult(sMins,eMins,dow,ph,cas);
    // How many of these hours are ordinary vs overtime?
    const remaining=Math.max(0,maxOrdinary-accActive);
    const ordH=Math.min(h,remaining);
    const otH=Math.max(0,h-remaining);
    const ordPay=ordH*eb*m;
    const otPay=otH*eb*2.0; // overtime on sleepover shift always at 200%
    return{h,m,ordH,otH,ordPay,otPay,label:segLabel(m)};
  };

  // Pre-sleepover active segment
  if(shift.startTime&&shift.soStart){
    const sMins=toMins(shift.startTime);
    let eMins=toMins(shift.soStart);
    if(eMins<=sMins)eMins+=1440;
    const seg=calcSeg(sMins,eMins,totalActive);
    totalActive+=seg.h;totalOrd+=seg.ordPay;totalOT+=seg.otPay;
    totalOTE+=seg.ordH;totalOTEPay+=seg.ordPay;
    segments.push({label:`Active ${shift.startTime}–${shift.soStart}`,mult:seg.m,h:seg.h,pay:seg.ordPay+seg.otPay,ot:seg.otPay>0,segLabel:seg.label});
  }

  // Sleepover allowance (flat, no hours)
  const slAmt=parseFloat(shift.sleeoverAmt)||AL.sleepDef;

  // Wakeup segments during sleepover
  let wakeupTotal=0;
  const wakeups=shift.wakeups||[];
  wakeups.forEach((wu,i)=>{
    if(!wu.start||!wu.end)return;
    const rawH=calcHrs(wu.start,wu.end);
    const wuH=Math.max(1,Math.ceil(rawH)); // minimum 1hr
    wakeupTotal+=wuH;
    // First 2hrs total wakeup at 150%, after at 200%
    const prev=Math.min(wakeupTotal-wuH,2);
    const inFirst=Math.max(0,Math.min(wuH,2-prev));
    const inSecond=Math.max(0,wuH-inFirst);
    const wuPay=inFirst*eb*1.5+inSecond*eb*2.0;
    totalOT+=wuPay;
    segments.push({label:`Wakeup ${wu.start}–${wu.end} (min ${wuH}h)`,mult:inSecond>0?2.0:1.5,h:wuH,pay:wuPay,ot:true,segLabel:inSecond>0?"200% wakeup":"150% wakeup"});
  });
  totalActive+=wakeupTotal;

  // Post-sleepover active segment
  if(shift.soEnd&&shift.soActiveAfterEnd){
    const sMins=toMins(shift.soEnd);
    let eMins=toMins(shift.soActiveAfterEnd);
    if(eMins<=sMins)eMins+=1440;
    const seg=calcSeg(sMins,eMins,totalActive);
    totalActive+=seg.h;totalOrd+=seg.ordPay;totalOT+=seg.otPay;
    totalOTE+=seg.ordH;totalOTEPay+=seg.ordPay;
    segments.push({label:`Active ${shift.soEnd}–${shift.soActiveAfterEnd}`,mult:seg.m,h:seg.h,pay:seg.ordPay+seg.otPay,ot:seg.otPay>0,segLabel:seg.label});
  }

  const km=(shift.km||0)*AL.km;
  const gross=totalOrd+totalOT+slAmt+km;
  return{type:"sleepover",h:totalActive,ord:totalOrd,ot:totalOT,sl:slAmt,km,bs:0,gross,oteH:totalOTE,otePay:totalOTEPay,segments,label:"Sleepover shift"};
}

// Auto-detect broken shift
function autoBroken(dayShifts){
  if(dayShifts.length<2)return 0;
  const s=[...dayShifts].sort((a,b)=>a.startTime.localeCompare(b.startTime));
  let g=0;
  for(let i=1;i<s.length;i++){
    const pe=toMins(s[i-1].endTime),ns=toMins(s[i].startTime);
    if((ns-pe)>60)g++;
  }
  return Math.min(g,2);
}

// Check if shift needs rest-break OT (< 10hrs since last shift ended)
function needsRestBreakOT(shift, allShifts){
  const shiftStart=new Date(shift.date+"T"+shift.startTime+":00");
  // Find most recent preceding shift
  const prev=allShifts
    .filter(s=>s.id!==shift.id)
    .map(s=>{
      const endTime=s.soEnd?s.soEnd:(s.soActiveAfterEnd||s.endTime);
      return{end:new Date(s.date+"T"+endTime+":00"),shift:s};
    })
    .filter(x=>x.end<shiftStart)
    .sort((a,b)=>b.end-a.end)[0];
  if(!prev)return{needsOT:false,gap:null};
  const gapHrs=(shiftStart-prev.end)/3600000;
  return{needsOT:gapHrs<10,gap:gapHrs,hoursUntilBreak:10-gapHrs};
}

// Aggregate all shifts in a period
function aggregate(shifts, base, cas, stream, profile){
  if(!base)return null;
  const byDate={};
  shifts.forEach(s=>{(byDate[s.date]=byDate[s.date]||[]).push(s);});
  const wkH={};
  let tOrd=0,tOT=0,tKm=0,tBs=0,tSl=0,tH=0,tOTEH=0,tOTE=0;
  const calcs=[];

  [...shifts].sort((a,b)=>a.date.localeCompare(b.date)||a.startTime.localeCompare(b.startTime)).forEach(s=>{
    const d=new Date(s.date+"T00:00:00"),ws=new Date(d);
    ws.setDate(d.getDate()-d.getDay());
    const wk=ws.toISOString().slice(0,10);

    let c;
    if(s.isSleepover){
      c=calcSleeoverShift(s,base,cas,stream,wkH[wk]||0);
    } else {
      // Check rest break
      const rb=needsRestBreakOT(s,shifts);
      let useShift=s;
      if(rb.needsOT){
        // Mark shift as requiring rest break OT
        useShift={...s,_restBreakOT:true,_restBreakHrs:rb.hoursUntilBreak};
      }
      c=calcShift(useShift,base,cas,stream,wkH[wk]||0);
      if(rb.needsOT&&!s.isSleepover){
        // Override: all hours at 200% until break achieved
        const eb=cas?base*1.25:base;
        c={...c,ord:0,ot:c.h*eb*2.0,gross:c.h*eb*2.0+c.km+c.sl+c.bs,oteH:0,otePay:0,label:`Rest break OT (${rb.gap.toFixed(1)}h gap)`};
      }
    }

    const day=byDate[s.date]||[];
    const first=[...day].sort((a,b)=>a.startTime.localeCompare(b.startTime))[0]?.id===s.id;
    const ab=first&&!s.isSleepover?autoBroken(day.filter(x=>!x.isSleepover)):0;
    const bsAmt=s.brokenShift>=0?c.bs:ab===1?AL.bs1:ab===2?AL.bs2:0;

    wkH[wk]=(wkH[wk]||0)+c.h;
    tOrd+=c.ord;tOT+=c.ot;tKm+=c.km;tBs+=bsAmt;tSl+=c.sl;tH+=c.h;tOTEH+=c.oteH;tOTE+=c.otePay;
    calcs.push({...c,bs:bsAmt,gross:c.gross+(bsAmt-c.bs),id:s.id,date:s.date,startTime:s.startTime,endTime:s.endTime||(s.soActiveAfterEnd||s.soEnd)});
  });

  const cyDays={weekly:7,fortnightly:14,"4weekly":28,monthly:30}[profile.cycleFreq]||14;
  const fa=profile.firstAid?Math.min(tOTEH*AL.fa,AL.faCap*(cyDays/14)):0;
  const gross=tOrd+tOT+tKm+tBs+tSl+fa;
  const sup=tOTE*0.12;
  const tax=calcTax(gross,profile);

  return{tOrd,tOT,tKm,tBs,tSl,tH,tOTEH,tOTE,fa,sup,gross,calcs,...tax};
}

// Pay cycle helpers
function getPayDays(profile,year,month){
  if(!profile.cycleStart||!profile.cycleFreq||!profile.payDay)return[];
  const fd={weekly:7,fortnightly:14,"4weekly":28}[profile.cycleFreq];if(!fd)return[];
  const aS=new Date(profile.cycleStart+"T00:00:00"),aPD=new Date(profile.payDay+"T00:00:00");
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
    if(pd>=mS&&pd<=mE)res.push({pd:pd.toISOString().slice(0,10),ps:ps.toISOString().slice(0,10),pe:pe.toISOString().slice(0,10)});
    if(pd>mE)break;
  }
  return res;
}
function getCycle(profile){
  if(!profile.cycleStart||!profile.cycleFreq)return null;
  const fd={weekly:7,fortnightly:14,"4weekly":28,monthly:30}[profile.cycleFreq]||14;
  const a=new Date(profile.cycleStart+"T00:00:00"),t=new Date();t.setHours(0,0,0,0);
  let cs=new Date(a);
  while(true){const ne=new Date(cs);ne.setDate(cs.getDate()+fd);if(ne>t)break;cs=ne;}
  const ce=new Date(cs);ce.setDate(cs.getDate()+fd-1);
  return{s:cs.toISOString().slice(0,10),e:ce.toISOString().slice(0,10)};
}

// ─── BASE UI ─────────────────────────────────────────────────────────────────
function Toggle({on,onChange}){
  return <button onClick={()=>onChange(!on)} style={{width:48,height:28,borderRadius:14,border:"none",cursor:"pointer",background:on?C.accent:C.borderStrong,position:"relative",transition:"background 0.2s",flexShrink:0}}><div style={{position:"absolute",top:3,left:on?22:3,width:22,height:22,borderRadius:11,background:"#fff",boxShadow:"0 1px 4px rgba(0,0,0,0.2)",transition:"left 0.2s"}}/></button>;
}
function Card({children,sx,onClick}){return <div onClick={onClick} style={{background:C.white,borderRadius:16,border:`1.5px solid ${C.border}`,padding:16,marginBottom:12,cursor:onClick?"pointer":"default",...sx}}>{children}</div>;}
function Btn({children,v="primary",onClick,sx,disabled}){
  const vs={primary:{background:C.accent,color:"#fff"},ghost:{background:"transparent",color:C.sub},danger:{background:C.red,color:"#fff"},green:{background:C.green,color:"#fff"},outline:{background:"transparent",border:`1.5px solid ${C.border}`,color:C.text}};
  return <button disabled={disabled} onClick={onClick} style={{width:"100%",padding:"14px 20px",borderRadius:14,border:"none",fontWeight:700,fontSize:15,cursor:disabled?"not-allowed":"pointer",opacity:disabled?0.5:1,marginBottom:8,fontFamily:"inherit",...vs[v],...sx}}>{children}</button>;
}
function Inp({label,sx,...p}){return <div style={{marginBottom:12}}>{label&&<div style={{fontSize:12,fontWeight:600,color:C.sub,marginBottom:5}}>{label}</div>}<input style={{width:"100%",background:C.bg,border:`1.5px solid ${C.border}`,borderRadius:10,color:C.text,fontSize:15,padding:"10px 12px",boxSizing:"border-box",outline:"none",fontFamily:"inherit",...sx}} {...p}/></div>;}
function Sel({label,children,...p}){return <div style={{marginBottom:12}}>{label&&<div style={{fontSize:12,fontWeight:600,color:C.sub,marginBottom:5}}>{label}</div>}<select style={{width:"100%",background:C.bg,border:`1.5px solid ${C.border}`,borderRadius:10,color:C.text,fontSize:15,padding:"10px 12px",boxSizing:"border-box",outline:"none",appearance:"none",fontFamily:"inherit"}} {...p}>{children}</select></div>;}
function PBar({step,total}){return <div style={{display:"flex",gap:4}}>{Array.from({length:total},(_,i)=><div key={i} style={{height:4,flex:1,borderRadius:4,background:i<step?C.accent:C.border}}/>)}</div>;}
function BBn({onClick}){return <button onClick={onClick} style={{background:"none",border:"none",color:C.accent,fontSize:15,fontWeight:600,cursor:"pointer",padding:"4px 0"}}>‹ Back</button>;}
function Div(){return <div style={{borderTop:`1px solid ${C.border}`,margin:"10px 0"}}/>;}
function PRow({label,val,bold,green,small}){return <div style={{display:"flex",justifyContent:"space-between",padding:"6px 0",borderBottom:`1px solid ${C.border}`}}><span style={{fontSize:small?12:14,color:bold?C.text:C.sub,fontWeight:bold?700:400}}>{label}</span><span style={{fontSize:small?12:14,fontWeight:bold?700:500,color:green?C.green:bold?C.text:C.sub}}>{val}</span></div>;}
function TBar({title,right}){return <div style={{background:C.white,borderBottom:`1px solid ${C.border}`,padding:"14px 20px",position:"sticky",top:0,zIndex:10,display:"flex",alignItems:"center",justifyContent:"space-between"}}><span style={{fontSize:17,fontWeight:800,color:C.text}}>{title}</span>{right}</div>;}
function BBar({onBack,title,right}){return <div style={{background:C.white,borderBottom:`1px solid ${C.border}`,padding:"14px 20px",display:"flex",alignItems:"center",justifyContent:"space-between"}}><div style={{display:"flex",alignItems:"center",gap:12}}><BBn onClick={onBack}/><span style={{fontSize:17,fontWeight:800,color:C.text}}>{title}</span></div>{right}</div>;}
function RadioRow({label,desc,selected,onClick}){return <div onClick={onClick} style={{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"11px 0",cursor:"pointer",borderBottom:`1px solid ${C.border}`}}><div><div style={{fontWeight:600,fontSize:14,color:C.text}}>{label}</div>{desc&&<div style={{fontSize:12,color:C.sub}}>{desc}</div>}</div><div style={{width:22,height:22,borderRadius:11,border:`2px solid ${selected?C.accent:C.borderStrong}`,background:selected?C.accent:"transparent",display:"flex",alignItems:"center",justifyContent:"center"}}>{selected&&<div style={{width:8,height:8,borderRadius:4,background:"#fff"}}/>}</div></div>;}

// ─── ONBOARDING ───────────────────────────────────────────────────────────────
const OSTEPS=7;
function OWelcome({onNext}){
  return <div style={{minHeight:"100vh",background:C.bg,display:"flex",flexDirection:"column"}}>
    <div style={{flex:1,padding:"48px 24px 24px",display:"flex",flexDirection:"column",alignItems:"center"}}>
      <div style={{width:80,height:80,borderRadius:22,background:`linear-gradient(135deg,${C.accent},#5B8FFF)`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:36,marginBottom:20,boxShadow:`0 8px 24px ${C.accent}44`}}>💼</div>
      <h1 style={{fontSize:28,fontWeight:800,color:C.text,textAlign:"center",margin:"0 0 10px",lineHeight:1.2}}>Welcome to<br/>SCHADS Pay</h1>
      <p style={{color:C.sub,textAlign:"center",fontSize:15,margin:"0 0 28px",lineHeight:1.5}}>Know exactly what you're owed — built for SCHADS award workers.</p>
      <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:10,width:"100%"}}>
        {[{i:"💰",bg:C.greenLight,c:C.green,t:"Pay Calculator",d:"SCHADS award rates & penalties"},{i:"📅",bg:C.accentLight,c:C.accent,t:"Shift Calendar",d:"Log and track your shifts"},{i:"💵",bg:C.orangeLight,c:C.orange,t:"Take-Home Pay",d:"Tax, super & salary packaging"},{i:"🛏️",bg:C.purpleLight,c:C.purple,t:"Sleepover Shifts",d:"Full sleepover & wakeup calc"}].map((f,i)=>(
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
function OStream({p,sp,onNext,onBack}){
  const sel=p.stream||"";
  return <div style={{minHeight:"100vh",background:C.bg,display:"flex",flexDirection:"column"}}>
    <div style={{padding:"16px 24px 0",display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:12}}><BBn onClick={onBack}/><PBar step={1} total={OSTEPS}/></div>
    <div style={{flex:1,padding:"24px 24px 0"}}>
      <div style={{fontSize:32,marginBottom:10}}>🏢</div>
      <h2 style={{fontSize:24,fontWeight:800,color:C.text,margin:"0 0 6px"}}>What's your stream?</h2>
      <p style={{color:C.sub,fontSize:14,margin:"0 0 20px",lineHeight:1.5}}>This sets your correct base pay rates.</p>
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
function OClass({p,sp,onNext,onBack}){
  const stream=p.stream||"",levels=LS[stream]||[];
  const selL=p.level||"",selP=p.payPoint||"",selT=p.empType||"";
  const base=stream&&selL&&selP?(STREAMS[stream]?.levels[`${selL}${selP}`]||0):0;
  return <div style={{minHeight:"100vh",background:C.bg,display:"flex",flexDirection:"column"}}>
    <div style={{padding:"16px 24px 0",display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:12}}><BBn onClick={onBack}/><PBar step={2} total={OSTEPS}/></div>
    <div style={{flex:1,padding:"24px 24px 0",overflowY:"auto"}}>
      <div style={{fontSize:32,marginBottom:10}}>👤</div>
      <h2 style={{fontSize:24,fontWeight:800,color:C.text,margin:"0 0 6px"}}>Your classification</h2>
      <p style={{color:C.sub,fontSize:14,margin:"0 0 20px",lineHeight:1.5}}>Check your contract or payslip if unsure.</p>
      <Card>
        <Sel label="Level" value={selL} onChange={e=>sp({...p,level:e.target.value,payPoint:""})}><option value="">Select level…</option>{levels.map(l=><option key={l.k} value={l.k}>{l.l}</option>)}</Sel>
        <Sel label="Pay Point" value={selP} onChange={e=>sp({...p,payPoint:e.target.value})}><option value="">Select pay point…</option>{(levels.find(l=>l.k===selL)?.p||[]).map(pt=><option key={pt} value={pt}>{pt.replace("P","Pay Point ")}</option>)}</Sel>
        <div style={{fontSize:12,fontWeight:600,color:C.sub,marginBottom:8}}>Employment Type</div>
        {[{k:"fulltime",l:"Full-time",d:"38 hrs/week"},{k:"parttime",l:"Part-time",d:"Regular agreed hours"},{k:"casual",l:"Casual",d:"+25% loading"}].map(t=><RadioRow key={t.k} label={t.l} desc={t.d} selected={selT===t.k} onClick={()=>sp({...p,empType:t.k})}/>)}
      </Card>
      {base>0&&<div style={{background:C.accentLight,borderRadius:14,padding:"14px 16px",marginBottom:12}}><div style={{fontSize:11,fontWeight:600,color:C.accent,marginBottom:4}}>YOUR BASE RATE</div><div style={{fontSize:28,fontWeight:800,color:C.text}}>{fmt(selT==="casual"?base*1.25:base)}<span style={{fontSize:14,color:C.sub}}>/hr</span></div></div>}
    </div>
    <div style={{padding:"16px 24px 40px"}}><Btn onClick={onNext} disabled={!selL||!selP||!selT}>Continue</Btn></div>
  </div>;
}
function OTax({p,sp,onNext,onBack}){
  return <div style={{minHeight:"100vh",background:C.bg,display:"flex",flexDirection:"column"}}>
    <div style={{padding:"16px 24px 0",display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:12}}><BBn onClick={onBack}/><PBar step={3} total={OSTEPS}/></div>
    <div style={{flex:1,padding:"24px 24px 0",overflowY:"auto"}}>
      <div style={{fontSize:32,marginBottom:10}}>🧾</div>
      <h2 style={{fontSize:24,fontWeight:800,color:C.text,margin:"0 0 6px"}}>Tax details</h2>
      <p style={{color:C.sub,fontSize:14,margin:"0 0 20px",lineHeight:1.5}}>Used to estimate your take-home pay each pay period.</p>
      <Card>
        <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:16}}>
          <div><div style={{fontWeight:600,fontSize:15,color:C.text}}>Tax-free threshold</div><div style={{fontSize:12,color:C.sub}}>Claim this if it's your main job</div></div>
          <Toggle on={!!p.tfThreshold} onChange={v=>sp({...p,tfThreshold:v})}/>
        </div>
        <Div/>
        <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginTop:12,marginBottom:16}}>
          <div><div style={{fontWeight:600,fontSize:15,color:C.text}}>HELP / student debt</div><div style={{fontSize:12,color:C.sub}}>HECS, VSL, SSL, AASL</div></div>
          <Toggle on={!!p.helpDebt} onChange={v=>sp({...p,helpDebt:v})}/>
        </div>
        <Div/>
        <div style={{marginTop:12}}>
          <div style={{fontSize:12,fontWeight:600,color:C.sub,marginBottom:6}}>Salary packaging (per fortnight)</div>
          <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:4}}>
            <span style={{color:C.sub}}>$</span>
            <input type="number" min={0} step={1} placeholder="0" value={p.pkgAmt||""} onChange={e=>sp({...p,pkgAmt:e.target.value})} style={{flex:1,background:C.bg,border:`1.5px solid ${C.border}`,borderRadius:10,color:C.text,fontSize:15,padding:"10px 12px",boxSizing:"border-box",outline:"none",fontFamily:"inherit"}}/>
          </div>
          <p style={{fontSize:11,color:C.muted,margin:0,lineHeight:1.5}}>PBI workers: your employer's packaging limit (up to $611.54/fn). Enter 0 if not applicable.</p>
        </div>
        <Div/>
        <div style={{marginTop:12}}>
          <div style={{fontSize:12,fontWeight:600,color:C.sub,marginBottom:6}}>Salary sacrifice to super (%)</div>
          <div style={{display:"flex",alignItems:"center",gap:8}}>
            <input type="number" min={0} max={100} step={0.5} placeholder="0" value={p.sacPct||""} onChange={e=>sp({...p,sacPct:e.target.value})} style={{flex:1,background:C.bg,border:`1.5px solid ${C.border}`,borderRadius:10,color:C.text,fontSize:15,padding:"10px 12px",boxSizing:"border-box",outline:"none",fontFamily:"inherit"}}/>
            <span style={{color:C.sub,fontSize:15}}>%</span>
          </div>
        </div>
      </Card>
      <div style={{background:C.accentLight,borderRadius:12,padding:"12px 14px",fontSize:12,color:C.accent,lineHeight:1.5}}>Calculations use ATO NAT 1004 (2025–26) and Schedule 8 STSL formulas. These are estimates — actual tax depends on your full-year income and deductions.</div>
    </div>
    <div style={{padding:"16px 24px 40px"}}><Btn onClick={onNext}>Continue</Btn></div>
  </div>;
}
function OState({p,sp,onNext,onBack}){
  const sel=p.state||"";
  return <div style={{minHeight:"100vh",background:C.bg,display:"flex",flexDirection:"column"}}>
    <div style={{padding:"16px 24px 0",display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:12}}><BBn onClick={onBack}/><PBar step={4} total={OSTEPS}/></div>
    <div style={{flex:1,padding:"24px 24px 0"}}>
      <div style={{fontSize:32,marginBottom:10}}>📍</div>
      <h2 style={{fontSize:24,fontWeight:800,color:C.text,margin:"0 0 6px"}}>Where do you work?</h2>
      <p style={{color:C.sub,fontSize:14,margin:"0 0 20px",lineHeight:1.5}}>Sets correct public holidays for your state.</p>
      <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:10}}>
        {STATES.map(s=>(
          <div key={s.k} onClick={()=>sp({...p,state:s.k})} style={{background:sel===s.k?s.bg:C.white,border:sel===s.k?`2px solid ${s.c}`:`1.5px solid ${C.border}`,borderRadius:14,padding:"16px 12px",cursor:"pointer",textAlign:"center",position:"relative"}}>
            {sel===s.k&&<div style={{position:"absolute",top:8,right:8,width:18,height:18,borderRadius:9,background:s.c,display:"flex",alignItems:"center",justifyContent:"center",fontSize:10,color:"#fff",fontWeight:700}}>✓</div>}
            <div style={{fontWeight:700,fontSize:14,color:C.text}}>{s.l}</div>
            <div style={{fontWeight:800,fontSize:12,color:s.c,marginTop:2}}>{s.k}</div>
          </div>
        ))}
      </div>
    </div>
    <div style={{padding:"16px 24px 40px"}}><Btn onClick={onNext} disabled={!sel}>Continue</Btn><Btn v="ghost" onClick={onNext}>Skip</Btn></div>
  </div>;
}
function OPayCycle({p,sp,onNext,onBack}){
  const freq=p.cycleFreq||"";
  return <div style={{minHeight:"100vh",background:C.bg,display:"flex",flexDirection:"column"}}>
    <div style={{padding:"16px 24px 0",display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:12}}><BBn onClick={onBack}/><PBar step={5} total={OSTEPS}/></div>
    <div style={{flex:1,padding:"24px 24px 0",overflowY:"auto"}}>
      <div style={{fontSize:32,marginBottom:10}}>📆</div>
      <h2 style={{fontSize:24,fontWeight:800,color:C.text,margin:"0 0 6px"}}>When do you get paid?</h2>
      <p style={{color:C.sub,fontSize:14,margin:"0 0 20px",lineHeight:1.5}}>Track earnings by pay period with a calendar pay day marker.</p>
      <Card>
        <div style={{fontSize:12,fontWeight:600,color:C.sub,marginBottom:10}}>PAY FREQUENCY</div>
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:8,marginBottom:4}}>
          {[{k:"weekly",l:"Weekly",d:"Every 7 days"},{k:"fortnightly",l:"Fortnightly",d:"Every 14 days"},{k:"4weekly",l:"4-Weekly",d:"Every 28 days"},{k:"monthly",l:"Monthly",d:"Calendar month"}].map(f=>(
            <div key={f.k} onClick={()=>sp({...p,cycleFreq:f.k})} style={{padding:"11px 8px",borderRadius:12,cursor:"pointer",textAlign:"center",border:freq===f.k?`2px solid ${C.accent}`:`1.5px solid ${C.border}`,background:freq===f.k?C.accentLight:C.bg}}>
              <div style={{fontWeight:700,fontSize:14,color:freq===f.k?C.accent:C.text}}>{f.l}</div>
              <div style={{fontSize:11,color:C.sub,marginTop:2}}>{f.d}</div>
            </div>
          ))}
        </div>
      </Card>
      <Card>
        <Inp label="Period start date" type="date" value={p.cycleStart||""} onChange={e=>sp({...p,cycleStart:e.target.value})}/>
        <Inp label="Pay day date" type="date" value={p.payDay||""} onChange={e=>sp({...p,payDay:e.target.value})}/>
        <p style={{fontSize:11,color:C.muted,margin:0,lineHeight:1.5}}>Pay day is shown on your calendar each cycle.</p>
      </Card>
    </div>
    <div style={{padding:"16px 24px 40px"}}><Btn onClick={onNext} disabled={!freq||!p.cycleStart}>Continue</Btn><Btn v="ghost" onClick={onNext}>Skip</Btn></div>
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
        <p style={{color:C.sub,fontSize:14,margin:0}}>Know exactly what you're owed.</p>
      </div>
      <Card sx={{marginBottom:16}}>
        {["Accurate SCHADS pay calculations","Full sleepover & wakeup calculation","Take-home pay with tax, super & packaging","Km, broken shift & first aid allowances","Pay day calendar with period summaries"].map((f,i,a)=>(
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
    {[{id:"cal",icon:"📅",l:"Calendar"},{id:"pay",icon:"💰",l:"Pay Day"},{id:"tmpl",icon:"📋",l:"Templates"},{id:"set",icon:"⚙️",l:"Settings"}].map(n=>(
      <button key={n.id} onClick={()=>setTab(n.id)} style={{flex:1,padding:"10px 4px 14px",background:"none",border:"none",color:tab===n.id?C.accent:C.muted,fontSize:10,fontWeight:tab===n.id?700:500,cursor:"pointer",display:"flex",flexDirection:"column",alignItems:"center",gap:3}}>
        <span style={{fontSize:22}}>{n.icon}</span>{n.l}
      </button>
    ))}
  </nav>;
}

// ─── SHIFT FORM ───────────────────────────────────────────────────────────────
// Regular shift only. Sleepover shifts come from sleepover templates.
function ShiftForm({date,profile,templates,onSave,onCancel}){
  const defSleep=profile.defaultSleepAmt?String(profile.defaultSleepAmt):"";
  const blankRegular={date,isSleepover:false,startTime:"",endTime:"",km:0,brokenShift:-1,isPublicHoliday:isPH(date,profile.state||""),wakeups:[],tid:""};
  const blankSleepover={date,isSleepover:true,startTime:"",soStart:"",soEnd:"",soAgreement:false,sleeoverAmt:defSleep,km:0,isPublicHoliday:isPH(date,profile.state||""),wakeups:[],tid:""};
  const[f,setF]=useState(blankRegular);
  const isSO=f.isSleepover;
  const applyT=idx=>{
    if(idx==="")return;
    const t=templates[parseInt(idx)];
    if(t.isSleepoverTemplate){
      setF({...blankSleepover,startTime:t.soActiveStart||"",soStart:t.soStart||"",soEnd:t.soEnd||"",soAgreement:!!t.soAgreement,sleeoverAmt:t.sleeoverAmt||defSleep,km:t.km||0,tid:idx});
    } else {
      setF({...blankRegular,startTime:t.startTime||"",endTime:t.endTime||"",km:t.km||0,brokenShift:t.brokenShift!=null?t.brokenShift:-1,tid:idx});
    }
  };
  const addWakeup=()=>setF(x=>({...x,wakeups:[...(x.wakeups||[]),{start:"",end:""}]}));
  const updWakeup=(i,k,v)=>setF(x=>{const w=[...x.wakeups];w[i]={...w[i],[k]:v};return{...x,wakeups:w};});
  const delWakeup=i=>setF(x=>({...x,wakeups:x.wakeups.filter((_,j)=>j!==i)}));
  const base=profile.stream&&profile.level&&profile.payPoint?(STREAMS[profile.stream]?.levels[`${profile.level}${profile.payPoint}`]||0):0;
  const cas=profile.empType==="casual";
  const canSave=isSO?(f.startTime&&f.soStart&&f.soEnd):(f.startTime&&f.endTime);
  const prev=(!isSO&&f.startTime&&f.endTime&&base)?calcShift(f,base,cas,profile.stream,0):null;
  const soActiveHrs=isSO&&f.startTime&&f.soStart?calcHrs(f.startTime,f.soStart):0;
  const regularTmpls=templates.filter(t=>!t.isSleepoverTemplate);
  const soTmpls=templates.filter(t=>t.isSleepoverTemplate);
  return <div style={{paddingBottom:80}}>
    <BBar onBack={onCancel} title={`Add Shift — ${date}`}/>
    <div style={{padding:"16px 20px 0"}}>
      {templates.length>0&&(
        <Card>
          <Sel label="Use Template" value={f.tid} onChange={e=>applyT(e.target.value)}>
            <option value="">Choose template…</option>
            {regularTmpls.length>0&&regularTmpls.map((t,_)=>{const i=templates.indexOf(t);return <option key={i} value={i}>{t.name}</option>;})}
            {soTmpls.length>0&&soTmpls.map((t,_)=>{const i=templates.indexOf(t);return <option key={i} value={i}>🛏️ {t.name}</option>;})}
          </Sel>
        </Card>
      )}
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
            <div><div style={{fontWeight:600,fontSize:14,color:C.text}}>Public Holiday</div></div>
            <Toggle on={!!f.isPublicHoliday} onChange={v=>setF({...f,isPublicHoliday:v})}/>
          </div>
        </Card>
      ):(
        <Card>
          <div style={{background:C.purpleLight,borderRadius:10,padding:"10px 12px",marginBottom:14,fontSize:12,color:C.purple,lineHeight:1.5}}>
            🛏️ <strong>Sleepover shift</strong> — Active start is editable. Add any wakeup events below. Hours after sleepover ends go in as a separate shift.
          </div>
          <div style={{fontSize:12,fontWeight:700,color:C.sub,marginBottom:8}}>ACTIVE HOURS BEFORE SLEEPOVER</div>
          <div style={{display:"flex",gap:10}}>
            <div style={{flex:1}}><Inp label="Active start" type="time" value={f.startTime} onChange={e=>setF({...f,startTime:e.target.value})}/></div>
            <div style={{flex:1}}><Inp label="Sleepover from" type="time" value={f.soStart} onChange={e=>setF({...f,soStart:e.target.value})}/></div>
          </div>
          {soActiveHrs>0&&<div style={{fontSize:13,color:C.sub,marginTop:-6,marginBottom:10}}>{soActiveHrs.toFixed(1)} active hours</div>}
          <div style={{fontSize:12,fontWeight:700,color:C.sub,marginBottom:8}}>SLEEPOVER PERIOD</div>
          <div style={{display:"flex",gap:10}}>
            <div style={{flex:1}}><Inp label="Sleepover start" type="time" value={f.soStart} onChange={e=>setF({...f,soStart:e.target.value})}/></div>
            <div style={{flex:1}}><Inp label="Sleepover end" type="time" value={f.soEnd} onChange={e=>setF({...f,soEnd:e.target.value})}/></div>
          </div>
          <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:12}}>
            <div><div style={{fontWeight:600,fontSize:14,color:C.text}}>Written 12h agreement</div><div style={{fontSize:12,color:C.sub}}>OT after 12 active hrs instead of 8</div></div>
            <Toggle on={!!f.soAgreement} onChange={v=>setF({...f,soAgreement:v})}/>
          </div>
          <div style={{fontSize:12,fontWeight:600,color:C.sub,marginBottom:6}}>Sleepover Allowance</div>
          <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:4}}>
            <span style={{color:C.sub}}>$</span>
            <input type="number" min={0} step={0.01} placeholder={profile.defaultSleepAmt?String(profile.defaultSleepAmt):"60.02"} value={f.sleeoverAmt||""} onChange={e=>setF({...f,sleeoverAmt:e.target.value})} style={{flex:1,background:C.bg,border:`1.5px solid ${C.border}`,borderRadius:10,color:C.text,fontSize:15,padding:"10px 12px",boxSizing:"border-box",outline:"none",fontFamily:"inherit"}}/>
          </div>
          <p style={{fontSize:11,color:C.muted,margin:"0 0 12px",lineHeight:1.5}}>Blank = {profile.defaultSleepAmt?`your default $${profile.defaultSleepAmt}`:`award minimum $${AL.sleepDef}`}</p>
          <Inp label="Kilometres" type="number" min={0} placeholder="0" value={f.km||""} onChange={e=>setF({...f,km:parseFloat(e.target.value)||0})}/>
          <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:14}}>
            <div><div style={{fontWeight:600,fontSize:14,color:C.text}}>Public Holiday</div></div>
            <Toggle on={!!f.isPublicHoliday} onChange={v=>setF({...f,isPublicHoliday:v})}/>
          </div>
          <Div/>
          <div style={{fontSize:12,fontWeight:700,color:C.sub,marginBottom:6,marginTop:8}}>WAKEUP EVENTS</div>
          <p style={{fontSize:12,color:C.sub,margin:"0 0 10px",lineHeight:1.5}}>Add any periods you were woken during the sleepover. Minimum 1hr paid per event.</p>
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
              {wu.start&&wu.end&&<div style={{fontSize:11,color:C.purple,fontWeight:600}}>Paid: {Math.max(1,Math.ceil(calcHrs(wu.start,wu.end)))}h · first 2h total at 150%, after at 200%</div>}
            </div>
          ))}
          <button onClick={addWakeup} style={{width:"100%",padding:"10px",borderRadius:10,border:`1.5px dashed ${C.purple}`,background:C.purpleLight,color:C.purple,fontSize:13,fontWeight:700,cursor:"pointer",marginBottom:4}}>+ Add Wakeup</button>
        </Card>
      )}
      {prev&&<div style={{background:C.greenLight,border:`1.5px solid ${C.green}33`,borderRadius:14,padding:"14px 16px",marginBottom:12}}><div style={{fontSize:11,fontWeight:600,color:C.green,marginBottom:4}}>ESTIMATED PAY</div><div style={{fontSize:26,fontWeight:800,color:C.text}}>{fmt(prev.gross)}</div><div style={{fontSize:12,color:C.sub}}>{prev.label} · {prev.h.toFixed(1)}h</div></div>}
      <Btn onClick={()=>onSave({...f,id:Date.now()})} disabled={!canSave}>Add Shift</Btn>
      <Btn v="ghost" onClick={onCancel}>Cancel</Btn>
    </div>
  </div>;
}

// ─── PAY SUMMARY CARD ─────────────────────────────────────────────────────────
function PaySummaryCard({agg,title,shifts}){
  if(!agg)return null;
  return <Card sx={{background:C.greenLight,border:`1.5px solid ${C.green}33`}}>
    <div style={{fontSize:11,fontWeight:600,color:C.green,marginBottom:10}}>{title}</div>
    <PRow label="Hours" val={`${agg.tH.toFixed(1)}h`}/>
    <PRow label="Base & penalty pay" val={fmt(agg.tOrd)}/>
    {agg.tOT>0&&<PRow label="Overtime" val={fmt(agg.tOT)}/>}
    {agg.tKm>0&&<PRow label="Km allowances" val={fmt(agg.tKm)}/>}
    {agg.tBs>0&&<PRow label="Broken shift" val={fmt(agg.tBs)}/>}
    {agg.tSl>0&&<PRow label="Sleepover allowances" val={fmt(agg.tSl)}/>}
    {agg.fa>0&&<PRow label="First aid" val={fmt(agg.fa)}/>}
    <div style={{display:"flex",justifyContent:"space-between",paddingTop:10}}>
      <span style={{fontSize:17,fontWeight:800,color:C.text}}>Gross</span>
      <span style={{fontSize:20,fontWeight:800,color:C.green}}>{fmt(agg.gross)}</span>
    </div>
    <Div/>
    <PRow label="Super (12% on OTE)" val={fmt(agg.sup)} small/>
    {(agg.pkg>0||agg.sac>0)&&<PRow label="Salary packaging" val={`−${fmt(agg.pkg)}`} small/>}
    {agg.sac>0&&<PRow label="Salary sacrifice" val={`−${fmt(agg.sac)}`} small/>}
    <PRow label="Tax withheld" val={`−${fmt(agg.tax)}`} small/>
    {agg.help>0&&<PRow label="HELP withholding" val={`−${fmt(agg.help)}`} small/>}
    <div style={{display:"flex",justifyContent:"space-between",paddingTop:8}}>
      <span style={{fontSize:15,fontWeight:800,color:C.text}}>Take-home</span>
      <span style={{fontSize:18,fontWeight:800,color:C.accent}}>{fmt(agg.takeHome)}</span>
    </div>
  </Card>;
}

// ─── CALENDAR SCREEN ─────────────────────────────────────────────────────────
function CalScreen({shifts,setShifts,profile,templates}){
  const today=new Date();
  const[vm,setVm]=useState(today.getMonth());
  const[vy,setVy]=useState(today.getFullYear());
  const[mode,setMode]=useState("cal");
  const[selDate,setSelDate]=useState(null);
  const[selShift,setSelShift]=useState(null);
  const[selPd,setSelPd]=useState(null);
  const cas=profile.empType==="casual";
  const base=profile.stream&&profile.level&&profile.payPoint?(STREAMS[profile.stream]?.levels[`${profile.level}${profile.payPoint}`]||0):0;
  const mk=`${vy}-${String(vm+1).padStart(2,"0")}`;
  const mShifts=shifts.filter(s=>s.date.startsWith(mk));
  const byDate={};mShifts.forEach(s=>{(byDate[s.date]=byDate[s.date]||[]).push(s);});
  const dim=new Date(vy,vm+1,0).getDate(),fd=new Date(vy,vm,1).getDay();
  const MN=["January","February","March","April","May","June","July","August","September","October","November","December"];
  const DN=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
  const DAYS=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  const pdArr=getPayDays(profile,vy,vm);
  const pdByDate={};pdArr.forEach(p=>{pdByDate[p.pd]=p;});
  const getC=useCallback(s=>{if(!base)return null;const d=new Date(s.date+"T00:00:00"),ws=new Date(d);ws.setDate(d.getDate()-d.getDay());const wk=ws.toISOString().slice(0,10);const wh=shifts.filter(x=>{const xd=new Date(x.date+"T00:00:00"),xs=new Date(xd);xs.setDate(xd.getDate()-xd.getDay());return xs.toISOString().slice(0,10)===wk&&xd<d;}).reduce((a,x)=>a+calcHrs(x.startTime,x.endTime||x.soActiveAfterEnd||x.soEnd||"00:00"),0);return s.isSleepover?calcSleeoverShift(s,base,cas,profile.stream,wh):calcShift(s,base,cas,profile.stream,wh);},[base,cas,profile.stream,shifts]);
  const dayTotal=d=>(byDate[d]||[]).reduce((a,s)=>{const c=getC(s);return a+(c?c.gross:0);},0);
  const mAgg=mShifts.length>0&&base>0?aggregate(mShifts,base,cas,profile.stream,profile):null;

  if(mode==="pdSummary"&&selPd){
    const{pd,ps,pe}=selPd;
    const pShifts=shifts.filter(s=>s.date>=ps&&s.date<=pe);
    const agg=aggregate(pShifts,base,cas,profile.stream,profile);
    return <div style={{paddingBottom:80}}>
      <BBar onBack={()=>setMode("cal")} title="Pay Day Summary" right={<button onClick={()=>{setSelDate(pd);setMode("addShift");}} style={{background:C.accentLight,border:"none",color:C.accent,borderRadius:10,padding:"7px 12px",fontSize:13,fontWeight:700,cursor:"pointer"}}>+ Shift</button>}/>
      <div style={{padding:"20px 20px 0"}}>
        <div style={{background:`linear-gradient(135deg,${C.green},#12875A)`,borderRadius:18,padding:"20px",marginBottom:14,boxShadow:`0 6px 20px ${C.green}44`}}>
          <div style={{fontSize:11,fontWeight:600,color:"rgba(255,255,255,0.75)",marginBottom:4,letterSpacing:"0.5px"}}>PAY DAY</div>
          <div style={{fontSize:20,fontWeight:800,color:"#fff",marginBottom:4}}>{pd}</div>
          <div style={{fontSize:12,color:"rgba(255,255,255,0.75)",marginBottom:10}}>Period: {ps} → {pe}</div>
          <div style={{fontSize:36,fontWeight:800,color:"#fff"}}>{agg?fmt(agg.gross):"$0.00"}</div>
          <div style={{fontSize:13,color:"rgba(255,255,255,0.75)",marginTop:2}}>{pShifts.length} shifts · {agg?agg.tH.toFixed(1):0}h · Take-home: {agg?fmt(agg.takeHome):"—"}</div>
        </div>
        {agg&&pShifts.length>0?(
          <>
            <Card>
              <div style={{fontSize:12,fontWeight:600,color:C.sub,marginBottom:10}}>EARNINGS</div>
              <PRow label="Base & penalty pay" val={fmt(agg.tOrd)}/>
              {agg.tOT>0&&<PRow label="Overtime" val={fmt(agg.tOT)}/>}
              {agg.tKm>0&&<PRow label="Km" val={fmt(agg.tKm)}/>}
              {agg.tBs>0&&<PRow label="Broken shift" val={fmt(agg.tBs)}/>}
              {agg.tSl>0&&<PRow label="Sleepover" val={fmt(agg.tSl)}/>}
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
            <Card>
              <div style={{fontSize:12,fontWeight:600,color:C.sub,marginBottom:10}}>SHIFTS</div>
              {agg.calcs.map((c,i)=>{
                const dow=new Date(c.date+"T00:00:00").getDay();
                return <div key={c.id} style={{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"8px 0",borderBottom:i<agg.calcs.length-1?`1px solid ${C.border}`:"none"}}>
                  <div><div style={{fontWeight:600,fontSize:14,color:C.text}}>{DN[dow]} {c.date.slice(5)}</div><div style={{fontSize:12,color:C.sub}}>{c.startTime}–{c.endTime||c.soEnd} · {c.label}</div></div>
                  <div style={{textAlign:"right"}}><div style={{fontWeight:700,color:C.green,fontSize:14}}>{fmt(c.gross)}</div><div style={{fontSize:11,color:C.sub}}>{c.h.toFixed(1)}h</div></div>
                </div>;
              })}
            </Card>
          </>
        ):<Card><div style={{textAlign:"center",padding:"24px 0",color:C.muted}}><div style={{fontSize:32,marginBottom:8}}>📭</div>No shifts this period.</div></Card>}
      </div>
    </div>;
  }

  if(mode==="shiftDetail"&&selShift){
    const c=getC(selShift);
    const dow=new Date(selShift.date+"T00:00:00").getDay();
    return <div style={{paddingBottom:80}}>
      <BBar onBack={()=>{const day=byDate[selShift.date]||[];day.length>1?(setMode("dayView"),setSelDate(selShift.date)):setMode("cal");}} title="Shift Details"/>
      <div style={{padding:"20px 20px 0"}}>
        <Card>
          <div style={{fontWeight:800,fontSize:18,color:C.text,marginBottom:4}}>{DAYS[dow]}</div>
          <div style={{color:C.sub,fontSize:14,marginBottom:12}}>{selShift.date} · {selShift.startTime}–{selShift.isSleepover?(selShift.soActiveAfterEnd||selShift.soEnd):selShift.endTime}</div>
          {c?(
            selShift.isSleepover?(
              <>
                {c.segments&&c.segments.map((seg,i)=><PRow key={i} label={seg.label} val={`${fmt(seg.pay)} (${seg.h.toFixed(1)}h · ${seg.segLabel})`}/>)}
                <PRow label="Sleepover allowance" val={fmt(c.sl)}/>
                {c.km>0&&<PRow label={`Km (${selShift.km}km)`} val={fmt(c.km)}/>}
                <div style={{display:"flex",justifyContent:"space-between",paddingTop:10}}><span style={{fontSize:17,fontWeight:800,color:C.text}}>Total</span><span style={{fontSize:20,fontWeight:800,color:C.green}}>{fmt(c.gross)}</span></div>
              </>
            ):(
              <>
                <PRow label="Hours" val={`${c.h.toFixed(2)}h`}/>
                <PRow label={c.label} val={`×${c.m.toFixed(3)}`}/>
                <PRow label="Base pay" val={fmt(c.ord)}/>
                {c.ot>0&&<PRow label="Overtime" val={fmt(c.ot)}/>}
                {c.km>0&&<PRow label={`Km (${selShift.km}km)`} val={fmt(c.km)}/>}
                {c.sl>0&&<PRow label="Sleepover" val={fmt(c.sl)}/>}
                <div style={{display:"flex",justifyContent:"space-between",paddingTop:10}}><span style={{fontSize:17,fontWeight:800,color:C.text}}>Total</span><span style={{fontSize:20,fontWeight:800,color:C.green}}>{fmt(c.gross)}</span></div>
              </>
            )
          ):<div style={{color:C.orange,fontSize:13}}>Complete your profile to see calculations.</div>}
        </Card>
        <Btn v="danger" onClick={()=>{setShifts(shifts.filter(s=>s.id!==selShift.id));setMode("cal");}}>Delete Shift</Btn>
      </div>
    </div>;
  }

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
          const c=getC(s);
          return <Card key={s.id} onClick={()=>{setSelShift(s);setMode("shiftDetail");}}>
            <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
              <div>
                <div style={{display:"flex",alignItems:"center",gap:6}}>{s.isSleepover&&<span style={{fontSize:14}}>🛏️</span>}<div style={{fontWeight:700,fontSize:15,color:C.text}}>{s.startTime}–{s.isSleepover?(s.soActiveAfterEnd||s.soEnd):s.endTime}</div></div>
                <div style={{fontSize:12,color:C.sub,marginTop:2}}>{c?c.label:"—"} · {c?`${c.h.toFixed(1)}h`:"—"}</div>
              </div>
              <div style={{textAlign:"right"}}><div style={{fontWeight:700,color:C.green,fontSize:15}}>{c?fmt(c.gross):"—"}</div><span style={{fontSize:12,color:C.muted}}>›</span></div>
            </div>
          </Card>;
        })}
        {base>0&&<div style={{background:C.greenLight,border:`1.5px solid ${C.green}33`,borderRadius:14,padding:"14px 16px"}}><div style={{fontSize:11,fontWeight:600,color:C.green,marginBottom:4}}>DAY TOTAL</div><div style={{fontSize:24,fontWeight:800,color:C.text}}>{fmt(dt)}</div></div>}
      </div>
    </div>;
  }

  if(mode==="addShift"&&selDate){
    return <ShiftForm date={selDate} profile={profile} templates={templates}
      onSave={s=>{setShifts([...shifts,{...s,id:Date.now()}]);const d=byDate[selDate];setMode(d&&d.length>0?"dayView":"cal");}}
      onCancel={()=>setMode(byDate[selDate]?.length>0?"dayView":"cal")}/>;
  }

  return <div style={{paddingBottom:80}}>
    <div style={{background:C.white,borderBottom:`1px solid ${C.border}`,padding:"14px 20px",display:"flex",alignItems:"center",justifyContent:"space-between"}}>
      <div style={{display:"flex",alignItems:"center",gap:16}}>
        <button onClick={()=>{if(vm===0){setVm(11);setVy(y=>y-1);}else setVm(m=>m-1);}} style={{background:"none",border:"none",color:C.text,fontSize:22,cursor:"pointer"}}>‹</button>
        <span style={{fontSize:17,fontWeight:800,color:C.text}}>{MN[vm]} {vy}</span>
        <button onClick={()=>{if(vm===11){setVm(0);setVy(y=>y+1);}else setVm(m=>m+1);}} style={{background:"none",border:"none",color:C.text,fontSize:22,cursor:"pointer"}}>›</button>
      </div>
      {mAgg&&<span style={{fontSize:15,fontWeight:800,color:C.green}}>{fmtR(mAgg.gross)}</span>}
    </div>
    <div style={{padding:"14px 14px 0"}}>
      <div style={{display:"grid",gridTemplateColumns:"repeat(7,1fr)",gap:3,marginBottom:4}}>
        {["Su","Mo","Tu","We","Th","Fr","Sa"].map(d=><div key={d} style={{textAlign:"center",fontSize:11,color:C.muted,fontWeight:600,padding:"3px 0"}}>{d}</div>)}
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
          const pdI=pdByDate[ds];
          const hasSO=dsh.some(s=>s.isSleepover);
          return <div key={day}
            onClick={()=>{if(pdI&&dsh.length===0){setSelPd(pdI);setMode("pdSummary");return;}setSelDate(ds);if(dsh.length>1){setMode("dayView");return;}if(dsh.length===1){setSelShift(dsh[0]);setMode("shiftDetail");return;}setMode("addShift");}}
            style={{minHeight:54,borderRadius:10,padding:"5px 4px",cursor:"pointer",background:pdI&&dsh.length===0?"#FEF3E2":isT?C.accentLight:dsh.length>0?"#F0FAF6":C.white,border:`1.5px solid ${pdI&&dsh.length===0?C.orange:isT?C.accent:dsh.length>0?"#B8E8D0":C.border}`}}>
            <div style={{fontSize:12,fontWeight:isT?800:500,color:pdI&&dsh.length===0?C.orange:isT?C.accent:iswk?C.sub:C.text,textAlign:"center",marginBottom:2}}>{day}</div>
            {pdI&&dsh.length===0?(<><div style={{height:3,borderRadius:2,background:C.orange,marginBottom:2}}/><div style={{fontSize:9,color:C.orange,fontWeight:700,textAlign:"center"}}>PAY</div></>)
            :dsh.length>0?(<><div style={{height:3,borderRadius:2,background:hasSO?C.purple:C.green,marginBottom:2}}/>{dt>0&&base>0&&<div style={{fontSize:9,color:hasSO?C.purple:C.green,fontWeight:700,textAlign:"center"}}>${Math.round(dt)}</div>}{dsh.length>1&&<div style={{fontSize:8,color:C.sub,textAlign:"center"}}>{dsh.length} shifts</div>}</>)
            :(<div style={{textAlign:"center",color:C.border,fontSize:14,marginTop:2}}>+</div>)}
          </div>;
        })}
      </div>
      <div style={{display:"flex",gap:12,marginBottom:12,flexWrap:"wrap"}}>
        <div style={{display:"flex",alignItems:"center",gap:5}}><div style={{width:10,height:10,borderRadius:3,background:C.green}}/><span style={{fontSize:11,color:C.sub}}>Shift</span></div>
        <div style={{display:"flex",alignItems:"center",gap:5}}><div style={{width:10,height:10,borderRadius:3,background:C.purple}}/><span style={{fontSize:11,color:C.sub}}>Sleepover</span></div>
        {pdArr.length>0&&<div style={{display:"flex",alignItems:"center",gap:5}}><div style={{width:10,height:10,borderRadius:3,background:C.orange}}/><span style={{fontSize:11,color:C.sub}}>Pay day</span></div>}
      </div>
      {mAgg&&<PaySummaryCard agg={mAgg} title={`${MN[vm].toUpperCase()} SUMMARY`}/>}
      {mShifts.length===0&&<div style={{textAlign:"center",color:C.muted,padding:32,fontSize:14}}>Tap any date to add a shift</div>}
    </div>
  </div>;
}

// ─── PAY DAY SCREEN ───────────────────────────────────────────────────────────
function PayScreen({shifts,profile}){
  const cas=profile.empType==="casual";
  const base=profile.stream&&profile.level&&profile.payPoint?(STREAMS[profile.stream]?.levels[`${profile.level}${profile.payPoint}`]||0):0;
  const cy=getCycle(profile);
  const cShifts=cy?shifts.filter(s=>s.date>=cy.s&&s.date<=cy.e):[];
  const agg=aggregate(cShifts,base,cas,profile.stream,profile);
  const DN=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
  if(!profile.cycleStart||!profile.cycleFreq)return <div style={{paddingBottom:80}}><TBar title="Pay Day"/><div style={{padding:"40px 20px",textAlign:"center"}}><div style={{fontSize:40,marginBottom:12}}>📆</div><div style={{fontWeight:700,fontSize:16,color:C.text,marginBottom:8}}>Pay cycle not set</div><div style={{color:C.sub,fontSize:14}}>Configure in Settings.</div></div></div>;
  return <div style={{paddingBottom:80}}><TBar title="Pay Day"/>
    <div style={{padding:"16px 20px 0"}}>
      <div style={{background:`linear-gradient(135deg,${C.accent},${C.accentDark})`,borderRadius:18,padding:"20px",marginBottom:14,boxShadow:`0 6px 20px ${C.accent}44`}}>
        <div style={{fontSize:11,fontWeight:600,color:"rgba(255,255,255,0.7)",marginBottom:4,letterSpacing:"0.5px"}}>CURRENT PAY PERIOD</div>
        <div style={{fontSize:13,color:"rgba(255,255,255,0.8)",marginBottom:10}}>{cy?.s} → {cy?.e}</div>
        <div style={{fontSize:36,fontWeight:800,color:"#fff"}}>{agg?fmt(agg.gross):"$0.00"}</div>
        <div style={{fontSize:15,color:"rgba(255,255,255,0.8)",marginTop:4,fontWeight:700}}>Take-home: {agg?fmt(agg.takeHome):"—"}</div>
        <div style={{fontSize:13,color:"rgba(255,255,255,0.7)",marginTop:2}}>{cShifts.length} shifts · {agg?agg.tH.toFixed(1):0}h</div>
      </div>
      {agg&&cShifts.length>0&&<>
        <Card>
          <div style={{fontSize:12,fontWeight:600,color:C.sub,marginBottom:10}}>GROSS EARNINGS</div>
          <PRow label="Base & penalty pay" val={fmt(agg.tOrd)}/>
          {agg.tOT>0&&<PRow label="Overtime" val={fmt(agg.tOT)}/>}
          {agg.tKm>0&&<PRow label="Km allowances" val={fmt(agg.tKm)}/>}
          {agg.tBs>0&&<PRow label="Broken shift allowances" val={fmt(agg.tBs)}/>}
          {agg.tSl>0&&<PRow label="Sleepover allowances" val={fmt(agg.tSl)}/>}
          {agg.fa>0&&<PRow label={`First aid ($0.54/hr × ${agg.tOTEH.toFixed(1)}h OTE)`} val={fmt(agg.fa)}/>}
          <PRow label="Gross total" val={fmt(agg.gross)} bold/>
        </Card>
        <Card>
          <div style={{fontSize:12,fontWeight:600,color:C.sub,marginBottom:10}}>DEDUCTIONS & SUPER</div>
          <PRow label={`Super 12% on OTE ${fmt(agg.tOTE)}`} val={fmt(agg.sup)}/>
          {agg.pkg>0&&<PRow label={`Salary packaging (${fmt(agg.pkg)}/fn)`} val={`−${fmt(agg.pkg)}`}/>}
          {agg.sac>0&&<PRow label="Salary sacrifice to super" val={`−${fmt(agg.sac)}`}/>}
          <PRow label="Tax withheld (ATO NAT 1004)" val={`−${fmt(agg.tax)}`}/>
          {agg.help>0&&<PRow label="HELP withholding (Sched. 8)" val={`−${fmt(agg.help)}`}/>}
          <PRow label="Take-home" val={fmt(agg.takeHome)} bold green/>
        </Card>
        <Card>
          <div style={{fontSize:12,fontWeight:600,color:C.sub,marginBottom:10}}>SHIFTS THIS PERIOD</div>
          {agg.calcs.map((c,i)=>{
            const dow=new Date(c.date+"T00:00:00").getDay();
            const s=cShifts.find(x=>x.id===c.id);
            return <div key={c.id} style={{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"8px 0",borderBottom:i<agg.calcs.length-1?`1px solid ${C.border}`:"none"}}>
              <div><div style={{display:"flex",alignItems:"center",gap:4}}>{s?.isSleepover&&<span style={{fontSize:12}}>🛏️</span>}<div style={{fontWeight:600,fontSize:14,color:C.text}}>{DN[dow]} {c.date.slice(5)}</div></div><div style={{fontSize:12,color:C.sub}}>{c.startTime}–{c.endTime||s?.soEnd} · {c.label}</div></div>
              <div style={{textAlign:"right"}}><div style={{fontWeight:700,color:C.green,fontSize:14}}>{fmt(c.gross)}</div><div style={{fontSize:11,color:C.sub}}>{c.h.toFixed(1)}h</div></div>
            </div>;
          })}
        </Card>
        <div style={{fontSize:11,color:C.muted,padding:"0 4px 16px",lineHeight:1.6}}>Tax and HELP are estimates based on ATO 2025–26 formulas applied to this period's earnings only. Actual tax depends on your full-year income. Consult your accountant for personalised advice.</div>
      </>}
      {cShifts.length===0&&<div style={{textAlign:"center",padding:"40px 0",color:C.muted}}><div style={{fontSize:36,marginBottom:10}}>📭</div><div style={{fontSize:14}}>No shifts logged this pay period yet.</div></div>}
    </div>
  </div>;
}


// ─── TEMPLATES ───────────────────────────────────────────────────────────────
function TmplScreen({templates,setTemplates,profile}){
  const[ed,setEd]=useState(null);
  const blankReg={name:"",isSleepoverTemplate:false,startTime:"",endTime:"",km:0,brokenShift:-1,sleepover:false,sleeoverAmt:""};
  const blankSO={name:"",isSleepoverTemplate:true,soActiveStart:"",soStart:"",soEnd:"",soAgreement:false,sleeoverAmt:"",km:0};
  const isSO=ed?.isSleepoverTemplate;
  const canSave=ed&&ed.name&&(isSO?(ed.soStart&&ed.soEnd):(ed.startTime&&ed.endTime));
  const save=()=>{
    if(!canSave)return;
    if(ed._i!=null){const t=[...templates];t[ed._i]={...ed};delete t[ed._i]._i;setTemplates(t);}
    else setTemplates([...templates,ed]);
    setEd(null);
  };
  if(ed){
    const h=!isSO&&ed.startTime&&ed.endTime?calcHrs(ed.startTime,ed.endTime):0;
    const soH=isSO&&ed.soActiveStart&&ed.soStart?calcHrs(ed.soActiveStart,ed.soStart):0;
    return <div style={{paddingBottom:80}}>
      <BBar onBack={()=>setEd(null)} title={`${ed._i!=null?"Edit":"New"} Template`}/>
      <div style={{padding:"16px 20px 0"}}>
        <Card>
          <Inp label="Template name" placeholder={isSO?"e.g. Residential Sleepover":"e.g. Day Shift 6am–2pm"} value={ed.name} onChange={e=>setEd({...ed,name:e.target.value})}/>
          <div style={{marginBottom:14}}>
            <div style={{fontSize:12,fontWeight:600,color:C.sub,marginBottom:8}}>Template type</div>
            <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:8}}>
              <div onClick={()=>setEd({...blankReg,name:ed.name,_i:ed._i})} style={{padding:"12px 10px",borderRadius:12,cursor:"pointer",textAlign:"center",border:!isSO?`2px solid ${C.accent}`:`1.5px solid ${C.border}`,background:!isSO?C.accentLight:C.bg}}>
                <div style={{fontSize:18,marginBottom:4}}>⏰</div>
                <div style={{fontWeight:700,fontSize:13,color:!isSO?C.accent:C.text}}>Regular</div>
              </div>
              <div onClick={()=>setEd({...blankSO,name:ed.name,_i:ed._i})} style={{padding:"12px 10px",borderRadius:12,cursor:"pointer",textAlign:"center",border:isSO?`2px solid ${C.purple}`:`1.5px solid ${C.border}`,background:isSO?C.purpleLight:C.bg}}>
                <div style={{fontSize:18,marginBottom:4}}>🛏️</div>
                <div style={{fontWeight:700,fontSize:13,color:isSO?C.purple:C.text}}>Sleepover</div>
              </div>
            </div>
          </div>
        </Card>
        {!isSO?(
          <Card>
            <div style={{display:"flex",gap:10}}><div style={{flex:1}}><Inp label="Start" type="time" value={ed.startTime} onChange={e=>setEd({...ed,startTime:e.target.value})}/></div><div style={{flex:1}}><Inp label="End" type="time" value={ed.endTime} onChange={e=>setEd({...ed,endTime:e.target.value})}/></div></div>
            {h>0&&<div style={{fontSize:13,color:C.sub,marginTop:-6,marginBottom:10}}>{h.toFixed(1)} hours</div>}
            <Inp label="Default km" type="number" min={0} placeholder="0" value={ed.km||""} onChange={e=>setEd({...ed,km:parseFloat(e.target.value)||0})}/>
            <div style={{marginBottom:12}}>
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
            <div style={{background:C.purpleLight,borderRadius:10,padding:"10px 12px",marginBottom:14,fontSize:12,color:C.purple,lineHeight:1.5}}>
              Set the default sleepover times. Active start will be editable each time you use this template.
            </div>
            <div style={{fontSize:12,fontWeight:700,color:C.sub,marginBottom:8}}>DEFAULT ACTIVE START & SLEEPOVER TIMES</div>
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
              <div><div style={{fontWeight:600,fontSize:14,color:C.text}}>Written 12h agreement</div><div style={{fontSize:12,color:C.sub}}>OT after 12 active hrs instead of 8</div></div>
              <Toggle on={!!ed.soAgreement} onChange={v=>setEd({...ed,soAgreement:v})}/>
            </div>
            <div style={{fontSize:12,fontWeight:600,color:C.sub,marginBottom:6}}>Default Sleepover Allowance</div>
            <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:4}}>
              <span style={{color:C.sub}}>$</span>
              <input type="number" min={0} step={0.01} placeholder={profile.defaultSleepAmt?String(profile.defaultSleepAmt):"60.02"} value={ed.sleeoverAmt||""} onChange={e=>setEd({...ed,sleeoverAmt:e.target.value})} style={{flex:1,background:C.bg,border:`1.5px solid ${C.border}`,borderRadius:10,color:C.text,fontSize:15,padding:"10px 12px",boxSizing:"border-box",outline:"none",fontFamily:"inherit"}}/>
            </div>
            <p style={{fontSize:11,color:C.muted,margin:"0 0 8px",lineHeight:1.5}}>Blank = your default or award minimum ${AL.sleepDef}</p>
            <Inp label="Default km" type="number" min={0} placeholder="0" value={ed.km||""} onChange={e=>setEd({...ed,km:parseFloat(e.target.value)||0})}/>
          </Card>
        )}
        <Btn onClick={save} disabled={!canSave}>Save Template</Btn>
        <Btn v="ghost" onClick={()=>setEd(null)}>Cancel</Btn>
      </div>
    </div>;
  }
  const regTmpls=templates.filter(t=>!t.isSleepoverTemplate);
  const soTmpls=templates.filter(t=>t.isSleepoverTemplate);
  return <div style={{paddingBottom:80}}>
    <div style={{background:C.white,borderBottom:`1px solid ${C.border}`,padding:"14px 20px",display:"flex",alignItems:"center",justifyContent:"space-between"}}>
      <span style={{fontSize:17,fontWeight:800,color:C.text}}>Shift Templates</span>
      <button onClick={()=>setEd({...blankReg})} style={{background:C.accentLight,border:"none",color:C.accent,borderRadius:10,padding:"7px 14px",fontSize:13,fontWeight:700,cursor:"pointer"}}>+ New</button>
    </div>
    <div style={{padding:"16px 20px 0"}}>
      {templates.length===0&&<div style={{textAlign:"center",padding:"48px 0",color:C.muted}}><div style={{fontSize:40,marginBottom:10}}>📋</div><div style={{fontWeight:700,fontSize:15,color:C.text,marginBottom:6}}>No templates yet</div><div style={{fontSize:14}}>Create regular or sleepover templates for your recurring shifts.</div></div>}
      {regTmpls.length>0&&<div style={{fontSize:11,fontWeight:700,color:C.muted,letterSpacing:"0.5px",marginBottom:8}}>REGULAR SHIFTS</div>}
      {regTmpls.map(t=>{
        const i=templates.indexOf(t);
        const h=t.startTime&&t.endTime?calcHrs(t.startTime,t.endTime):0;
        return <Card key={i}>
          <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start"}}>
            <div style={{flex:1}}>
              <div style={{fontWeight:700,fontSize:15,color:C.text,marginBottom:4}}>{t.name}</div>
              <div style={{fontSize:13,color:C.sub,marginBottom:6}}>{t.startTime}–{t.endTime} · {h.toFixed(1)}h</div>
              <div style={{display:"flex",flexWrap:"wrap",gap:4}}>
                {t.km>0&&<span style={{background:C.accentLight,color:C.accent,borderRadius:12,fontSize:11,fontWeight:700,padding:"2px 8px"}}>{t.km}km</span>}
                {(t.brokenShift===-1||t.brokenShift>0)&&<span style={{background:C.orangeLight,color:C.orange,borderRadius:12,fontSize:11,fontWeight:700,padding:"2px 8px"}}>{t.brokenShift===-1?"Auto broken":"Broken shift"}</span>}
              </div>
            </div>
            <div style={{display:"flex",gap:6,marginLeft:8}}>
              <button onClick={()=>setEd({...t,_i:i})} style={{background:C.bg,border:`1px solid ${C.border}`,borderRadius:8,padding:"6px 10px",fontSize:12,fontWeight:600,color:C.text,cursor:"pointer"}}>Edit</button>
              <button onClick={()=>setTemplates(templates.filter((_,j)=>j!==i))} style={{background:C.redLight,border:"none",borderRadius:8,padding:"6px 10px",fontSize:12,fontWeight:600,color:C.red,cursor:"pointer"}}>Del</button>
            </div>
          </div>
        </Card>;
      })}
      {soTmpls.length>0&&<div style={{fontSize:11,fontWeight:700,color:C.muted,letterSpacing:"0.5px",marginBottom:8,marginTop:soTmpls.length>0&&regTmpls.length>0?8:0}}>SLEEPOVER SHIFTS</div>}
      {soTmpls.map(t=>{
        const i=templates.indexOf(t);
        const soH=t.soActiveStart&&t.soStart?calcHrs(t.soActiveStart,t.soStart):0;
        return <Card key={i} sx={{border:`1.5px solid ${C.purple}22`,background:C.purpleLight+"44"}}>
          <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start"}}>
            <div style={{flex:1}}>
              <div style={{display:"flex",alignItems:"center",gap:6,marginBottom:4}}><span style={{fontSize:16}}>🛏️</span><div style={{fontWeight:700,fontSize:15,color:C.text}}>{t.name}</div></div>
              <div style={{fontSize:13,color:C.sub,marginBottom:2}}>Active: {t.soActiveStart||"—"}–{t.soStart||"—"} ({soH.toFixed(1)}h)</div>
              <div style={{fontSize:13,color:C.sub,marginBottom:6}}>Sleepover: {t.soStart||"—"}–{t.soEnd||"—"}</div>
              <div style={{display:"flex",flexWrap:"wrap",gap:4}}>
                {t.sleeoverAmt&&<span style={{background:C.purpleLight,color:C.purple,borderRadius:12,fontSize:11,fontWeight:700,padding:"2px 8px"}}>${t.sleeoverAmt} sleepover</span>}
                {t.soAgreement&&<span style={{background:C.accentLight,color:C.accent,borderRadius:12,fontSize:11,fontWeight:700,padding:"2px 8px"}}>12h agreement</span>}
              </div>
            </div>
            <div style={{display:"flex",gap:6,marginLeft:8}}>
              <button onClick={()=>setEd({...t,_i:i})} style={{background:C.bg,border:`1px solid ${C.border}`,borderRadius:8,padding:"6px 10px",fontSize:12,fontWeight:600,color:C.text,cursor:"pointer"}}>Edit</button>
              <button onClick={()=>setTemplates(templates.filter((_,j)=>j!==i))} style={{background:C.redLight,border:"none",borderRadius:8,padding:"6px 10px",fontSize:12,fontWeight:600,color:C.red,cursor:"pointer"}}>Del</button>
            </div>
          </div>
        </Card>;
      })}
    </div>
  </div>;
}
// ─── SETTINGS ─────────────────────────────────────────────────────────────────
function SetScreen({profile,setProfile}){
  const[loc,setLoc]=useState(profile);
  const str=loc.stream||"",levels=LS[str]||[];
  const base=str&&loc.level&&loc.payPoint?(STREAMS[str]?.levels[`${loc.level}${loc.payPoint}`]||0):0;
  const SL=({children,mt})=><div style={{fontSize:11,fontWeight:700,color:C.muted,letterSpacing:"0.5px",marginBottom:8,marginTop:mt||0}}>{children}</div>;
  return <div style={{paddingBottom:80}}><TBar title="Settings"/>
    <div style={{padding:"16px 20px 0"}}>
      <SL>MY ROLE</SL>
      <Card>
        <Sel label="Stream" value={loc.stream||""} onChange={e=>setLoc({...loc,stream:e.target.value,level:"",payPoint:""})}><option value="">Select stream…</option>{Object.entries(STREAMS).map(([k,v])=><option key={k} value={k}>{v.label}</option>)}</Sel>
        {str&&<><div style={{display:"flex",gap:10}}><div style={{flex:1}}><Sel label="Level" value={loc.level||""} onChange={e=>setLoc({...loc,level:e.target.value,payPoint:""})}><option value="">Level…</option>{levels.map(l=><option key={l.k} value={l.k}>{l.l}</option>)}</Sel></div><div style={{flex:1}}><Sel label="Pay Point" value={loc.payPoint||""} onChange={e=>setLoc({...loc,payPoint:e.target.value})}><option value="">Point…</option>{(levels.find(l=>l.k===loc.level)?.p||[]).map(pt=><option key={pt} value={pt}>{pt}</option>)}</Sel></div></div><Sel label="Employment Type" value={loc.empType||""} onChange={e=>setLoc({...loc,empType:e.target.value})}><option value="">Select…</option><option value="fulltime">Full-time</option><option value="parttime">Part-time</option><option value="casual">Casual</option></Sel></>}
        {base>0&&<div style={{background:C.accentLight,borderRadius:10,padding:"10px 12px",marginTop:4}}><div style={{fontSize:11,fontWeight:600,color:C.accent,marginBottom:2}}>BASE RATE</div><div style={{fontSize:22,fontWeight:800,color:C.text}}>{fmt(loc.empType==="casual"?base*1.25:base)}/hr</div></div>}
      </Card>
      <SL mt={16}>TAX & SALARY</SL>
      <Card>
        <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:14}}><div><div style={{fontWeight:600,fontSize:14,color:C.text}}>Tax-free threshold</div><div style={{fontSize:12,color:C.sub}}>Claim if this is your main job</div></div><Toggle on={!!loc.tfThreshold} onChange={v=>setLoc({...loc,tfThreshold:v})}/></div>
        <Div/>
        <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:14,marginTop:10}}><div><div style={{fontWeight:600,fontSize:14,color:C.text}}>HELP / student debt</div><div style={{fontSize:12,color:C.sub}}>Adds STSL withholding</div></div><Toggle on={!!loc.helpDebt} onChange={v=>setLoc({...loc,helpDebt:v})}/></div>
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
      <SL mt={16}>PAY CYCLE</SL>
      <Card>
        <Sel label="Pay frequency" value={loc.cycleFreq||""} onChange={e=>setLoc({...loc,cycleFreq:e.target.value})}><option value="">Select…</option><option value="weekly">Weekly</option><option value="fortnightly">Fortnightly</option><option value="4weekly">4-Weekly</option><option value="monthly">Monthly</option></Sel>
        <Inp label="Pay period start date" type="date" value={loc.cycleStart||""} onChange={e=>setLoc({...loc,cycleStart:e.target.value})}/>
        <Inp label="Pay day date" type="date" value={loc.payDay||""} onChange={e=>setLoc({...loc,payDay:e.target.value})}/>
      </Card>
      <SL mt={16}>ALLOWANCES</SL>
      <Card>
        <div style={{marginBottom:14}}>
          <div style={{fontSize:12,fontWeight:600,color:C.sub,marginBottom:6}}>Default Sleepover Amount</div>
          <div style={{display:"flex",alignItems:"center",gap:8}}><span style={{color:C.sub}}>$</span><input type="number" min={0} step={0.01} placeholder={`${AL.sleepDef} (award minimum)`} value={loc.defaultSleepAmt||""} onChange={e=>setLoc({...loc,defaultSleepAmt:parseFloat(e.target.value)||""})} style={{flex:1,background:C.bg,border:`1.5px solid ${C.border}`,borderRadius:10,color:C.text,fontSize:15,padding:"10px 12px",boxSizing:"border-box",outline:"none",fontFamily:"inherit"}}/></div>
          <p style={{fontSize:11,color:C.muted,margin:"6px 0 0",lineHeight:1.5}}>Pre-fills every shift. Blank = award minimum ${AL.sleepDef}.</p>
        </div>
        <Div/>
        <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginTop:10}}>
          <div><div style={{fontWeight:600,fontSize:14,color:C.text}}>First Aid Allowance</div><div style={{fontSize:12,color:C.sub}}>$0.54/hr on OTE, capped per cycle</div></div>
          <Toggle on={!!loc.firstAid} onChange={v=>setLoc({...loc,firstAid:v})}/>
        </div>
        {loc.firstAid&&<div style={{background:C.accentLight,borderRadius:10,padding:"10px 12px",marginTop:10,fontSize:12,color:C.accent,lineHeight:1.5}}>Fortnightly cap: ${AL.faCap.toFixed(2)}, pro-rated to your pay cycle.</div>}
      </Card>
      <SL mt={16}>ABOUT</SL>
      <Card>
        <div style={{fontSize:13,color:C.sub,lineHeight:1.6}}>Pay rates: <strong>1 July 2025</strong> (MA000100). Tax: ATO NAT 1004 + Schedule 8 (2025–26). Sleepover rules: FWC decision effective 1 June 2026. Always verify against your payslip.</div>
        <Div/>
        <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}><span style={{fontSize:14,color:C.sub}}>Version</span><span style={{fontSize:14,fontWeight:600,color:C.text}}>2.0.0</span></div>
      </Card>
      <Btn onClick={()=>setProfile(loc)} sx={{marginTop:8}}>Save Changes</Btn>
    </div>
  </div>;
}

// ─── ROOT ─────────────────────────────────────────────────────────────────────
export default function App(){
  const[profile,setProfile]=useStorage("sp_p_v5",{});
  const[shifts,setShifts]=useStorage("sp_s_v5",[]);
  const[tmpls,setTmpls]=useStorage("sp_t_v5",[]);
  const[step,setStep]=useStorage("sp_step_v5",0);
  const[tab,setTab]=useState("cal");
  const next=()=>setStep(s=>s+1);
  const back=()=>setStep(s=>Math.max(0,s-1));
  if(step===0)return <OWelcome onNext={next}/>;
  if(step===1)return <OStream p={profile} sp={setProfile} onNext={next} onBack={back}/>;
  if(step===2)return <OClass p={profile} sp={setProfile} onNext={next} onBack={back}/>;
  if(step===3)return <OTax p={profile} sp={setProfile} onNext={next} onBack={back}/>;
  if(step===4)return <OState p={profile} sp={setProfile} onNext={next} onBack={back}/>;
  if(step===5)return <OPayCycle p={profile} sp={setProfile} onNext={next} onBack={back}/>;
  if(step===6)return <OPaywall onComplete={next}/>;
  return <div style={{minHeight:"100vh",background:C.bg,fontFamily:"'Inter',-apple-system,BlinkMacSystemFont,sans-serif",maxWidth:480,margin:"0 auto",color:C.text}}>
    {tab==="cal"&&<CalScreen shifts={shifts} setShifts={setShifts} profile={profile} templates={tmpls}/>}
    {tab==="pay"&&<PayScreen shifts={shifts} profile={profile}/>}
    {tab==="tmpl"&&<TmplScreen templates={tmpls} setTemplates={setTmpls} profile={profile}/>}
    {tab==="set"&&<SetScreen profile={profile} setProfile={setProfile}/>}
    <Nav tab={tab} setTab={setTab}/>
  </div>;
}
