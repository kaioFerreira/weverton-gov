!function(){var e=document.getElementsByTagName("head")[0],t=document.createElement("link");t.async=!1,t.rel="stylesheet",t.type="text/css",t.href=(window.EPLAY_SYNC_CSS||"https://cdn-latam.eplaytecnologia.com")+"/player/css/player.runtime.v1.css",t.media="all",e.appendChild(t);try{window.addEventListener("message",function(e){if("open"==e.data.command&&(window.location=e.data.url),"showbutton"==e.data.command){var t,a=e.data.linkAccess,l=new URLSearchParams(window.location.search);if(l.get("src")){let s=new URLSearchParams(a),i=s.size>0&&s.values.length>0?"&":"?";a=a+i+"src="+l.get("src")}if(l.get("utm_campaign")){let c=new URLSearchParams(a),o=c.size>0&&c.values.length>0?"&":"?";a=a+o+"utm_campaign="+l.get("utm_campaign")}if(l.get("utm_medium")){let d=new URLSearchParams(a),u=d.size>0&&d.values.length>0?"&":"?";a=a+u+"utm_medium="+l.get("utm_medium")}if(l.get("utm_source")){let m=new URLSearchParams(a),r=m.size>0&&m.values.length>0?"&":"?";a=a+r+"utm_source="+l.get("utm_source")}if(l.get("utm_term")){let g=new URLSearchParams(a),$=g.size>0&&g.values.length>0?"&":"?";a=a+$+"utm_term="+l.get("utm_term")}if(l.get("utm_content")){let y=new URLSearchParams(a),h=y.size>0&&y.values.length>0?"&":"?";a=a+h+"utm_content="+l.get("utm_content")}if(l.get("fbclid")){let p=new URLSearchParams(a),f=p.size>0&&p.values.length>0?"&":"?";a=a+f+"fbclid="+l.get("fbclid")}!function e(t,a,l,s,i,c){let o=document.getElementById("div_hash_"+t);if("block"===o.style.display)return;o.innerHTML='<center><button class="'+i+'" id="_button_trigger_pay_player_'+t+'" style="position:relative;z-index: 100000000;">'+s+"</button></center>",o.style.display="block";let d=document.getElementById("_button_trigger_pay_player_"+t);d.style.backgroundColor=l,d.style.borderColor=l,d.style.color=a,d.style.boxShadow="0 0 5px "+l,d.style.display="block",d.style.zIndex=1e4,d.addEventListener("click",function(e){setTimeout(function(){n(d,c)},5e3),n(d,c)})}(e.data.hash,e.data.color,e.data.backgroundColor,e.data.text,e.data.classbtn,a)}"hidebutton"==e.data.command&&(t=e.data.hash,document.getElementById("div_hash_"+t).style.display="none")},!1)}catch(a){}function n(e,t){window.open(t,"_self")}}(window,document);