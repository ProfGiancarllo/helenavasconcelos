/* Contatos: para adicionar o terceiro atendente, inclua uma linha abaixo. */
var CONTATOS = [
  {nome:"Helena Vasconcelos", fone:"5564981019593"},
  {nome:"Ana Cláudia",        fone:"556421422290"}
  /* ,{nome:"NOME", fone:"55DDNUMERO"} */
];
var MSG = (document.body.getAttribute("data-msg")||"Olá! Vim pelo site da Helena Vasconcelos.");
function link(c){return "https://wa.me/"+c.fone+"?text="+encodeURIComponent(MSG);}
function track(c){try{if(window.fbq)fbq("track","Contact",{contact:c.nome});}catch(e){}}
function sorteio(){return CONTATOS[Math.floor(Math.random()*CONTATOS.length)];}
document.querySelectorAll("[data-wa]").forEach(function(a){
  a.addEventListener("click",function(e){e.preventDefault();var c=sorteio();track(c);window.location.href=link(c);});
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
