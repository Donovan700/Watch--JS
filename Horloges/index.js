const deg=6;
const hr=document.querySelector(".hr");
const min=document.querySelector(".min");
const sec=document.querySelector(".sec");
const h_ana=document.querySelector(".h-ana");
const m_ana=document.querySelector(".m-ana");
const s_ana=document.querySelector(".s-ana");

setInterval(()=>
{
    let date=new Date();
    let h=date.getHours();
    let m=date.getMinutes();
    let s=date.getSeconds();
    /*Horloge*/
    hr.style.transform= `rotateZ(${(h*30)+(m/12)}deg)`;
    min.style.transform= `rotateZ(${m*deg}deg)`;
    sec.style.transform= `rotateZ(${s*deg}deg)`;
    /*Numerique*/
    h_ana.innerHTML = h;
    m_ana.innerHTML = m;
    s_ana.innerHTML = s;
})