import"./assets/styles-Du1tBAGb.js";import{f as s}from"./assets/vendor-C-3xrRrD.js";const c=document.querySelector('input[type="text"]'),i=document.querySelector("button[data-start]"),m=document.querySelector("span[data-days]"),y=document.querySelector("span[data-hours]"),h=document.querySelector("span[data-minutes]"),f=document.querySelector("span[data-seconds]"),e={days:m,hours:y,minutes:h,seconds:f};console.log(e.days.textContent);s(c,{enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(t){console.log(t[0])}});i.addEventListener("click",()=>{setInterval(()=>{a(s(c).latestSelectedDateObj.getTime())},1e3)});function a(t){const o=Date.now();let n=t-o;console.log(p(n))}a(17393976e5);function p(t){const r=Math.floor(t/864e5),u=Math.floor(t%864e5/36e5),d=Math.floor(t%864e5%36e5/6e4),l=Math.floor(t%864e5%36e5%6e4/1e3);e.days.textContent=r,e.hours.textContent=u,e.minutes.textContent=d,e.seconds.textContent=l}
//# sourceMappingURL=1-timer.js.map
