/* Contatos de WhatsApp (dois atendentes). */
var CONTATOS = [
  {nome:"Helena Vasconcelos", fone:"5564981019593"},
  {nome:"Ana Cláudia",        fone:"556421422290"}
];
var MSG = (document.body.getAttribute("data-msg")||"Olá! Vim pelo site da Helena Vasconcelos.");
function link(c){return "https://wa.me/"+c.fone+"?text="+encodeURIComponent(MSG);}
function track(c){try{if(window.fbq)fbq("track","Contact",{contact:c.nome});}catch(e){}}
function sorteio(){return CONTATOS[Math.floor(Math.random()*CONTATOS.length)];}
/* Botão principal: abre uma janela com os dois atendentes para o cliente escolher. */
var modal=document.createElement("div");modal.className="modal";modal.setAttribute("hidden","");
modal.innerHTML='<div class="sheet"><button class="x" aria-label="Fechar">×</button><h3>Com quem você quer falar?</h3><p>Escolha o atendimento pelo WhatsApp.</p><div class="opts"></div></div>';
document.body.appendChild(modal);
var opts=modal.querySelector(".opts");
CONTATOS.forEach(function(c){
  var b=document.createElement("a");b.className="btn opt";b.target="_blank";b.rel="noopener";b.href=link(c);
  b.innerHTML='<span>'+c.nome+'</span><small>Chamar no WhatsApp</small>';
  b.addEventListener("click",function(){track(c);});opts.appendChild(b);});
function abre(){modal.removeAttribute("hidden");document.body.style.overflow="hidden";}
function fecha(){modal.setAttribute("hidden","");document.body.style.overflow="";}
modal.addEventListener("click",function(e){if(e.target===modal||e.target.className==="x")fecha();});
document.querySelectorAll("[data-wa]").forEach(function(a){
  a.addEventListener("click",function(e){e.preventDefault();abre();});
  a.setAttribute("href","#contato");
});
var box=document.getElementById("cards");
if(box){CONTATOS.forEach(function(c){
  var d=document.createElement("div");d.className="card";
  d.innerHTML='<div class="av">'+c.nome.charAt(0)+'</div><div><h3>'+c.nome+'</h3><small>Atendimento pelo WhatsApp</small><a class="btn" target="_blank" rel="noopener" href="'+link(c)+'">Chamar agora</a></div>';
  d.querySelector("a").addEventListener("click",function(){track(c);});
  box.appendChild(d);});}

/* Lojas e canais. */
var MAPA="https://www.google.com/maps/search/?api=1&query=Avenida+Jos%C3%A9+Walter+90+Vit%C3%B3ria+R%C3%A9gia+Rio+Verde+GO";
var MAPA_EMBED="https://maps.google.com/maps?q=Avenida+Jos%C3%A9+Walter+90+Vit%C3%B3ria+R%C3%A9gia+Rio+Verde+GO&output=embed";
var ONLINE=[
  {t:"Loja online",d:"Compre pelo nosso site.",u:"https://helenavasconcelos.com",b:"Acessar a loja online"},
  {t:"Instagram",d:"@h.vasconcelos.joias",u:"https://www.instagram.com/h.vasconcelos.joias",b:"Seguir no Instagram"}
];
var L=document.getElementById("lojas");
if(L){
  var h='<div class="box full"><h3>Loja física</h3><p>Avenida José Walter, 90, Vitória Régia<br>Rio Verde, GO</p><iframe class="map" loading="lazy" title="Mapa da loja" src="'+MAPA_EMBED+'"></iframe><a class="btn" target="_blank" rel="noopener" href="'+MAPA+'">Abrir no Google Maps</a></div>';
  ONLINE.forEach(function(o){if(!o.u)return;h+='<div class="box"><h3>'+o.t+'</h3><p>'+o.d+'</p><a class="btn" target="_blank" rel="noopener" href="'+o.u+'">'+o.b+'</a></div>';});
  L.innerHTML=h;}
/* Contagem regressiva da promoção (18 a 30/11/2026, horário de Brasília) */
(function(){
  var w=document.getElementById("cdwrap"); if(!w)return;
  var ini=new Date("2026-11-18T00:00:00-03:00").getTime(), fim=new Date("2026-11-30T23:59:59-03:00").getTime();
  function z(n){return n<10?"0"+n:""+n}
  function tick(){
    var n=Date.now(), alvo, txt;
    if(n<ini){alvo=ini;txt="A promoção começa em";}
    else if(n<=fim){alvo=fim;txt="A promoção termina em";}
    else{w.style.display="none";return;}
    var d=alvo-n, dd=Math.floor(d/864e5), hh=Math.floor(d%864e5/36e5), mm=Math.floor(d%36e5/6e4), ss=Math.floor(d%6e4/1e3);
    document.getElementById("cd-d").textContent=z(dd);document.getElementById("cd-h").textContent=z(hh);
    document.getElementById("cd-m").textContent=z(mm);document.getElementById("cd-s").textContent=z(ss);
    document.getElementById("cdlabel").textContent=txt;
  }
  tick();setInterval(tick,1000);
})();
