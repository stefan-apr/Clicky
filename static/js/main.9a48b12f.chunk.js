(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,function(e){e.exports=[{id:1,image:"https://cdn.bulbagarden.net/upload/e/e5/051Dugtrio.png"},{id:2,image:"https://cdn.bulbagarden.net/upload/f/fb/143Snorlax.png"},{id:3,image:"https://cdn.bulbagarden.net/upload/7/75/495Snivy.png"},{id:4,image:"https://cdn.bulbagarden.net/upload/d/da/245Suicune.png"},{id:5,image:"https://cdn.bulbagarden.net/upload/c/c6/094Gengar.png"},{id:6,image:"https://cdn.bulbagarden.net/upload/d/df/710Pumpkaboo.png"},{id:7,image:"https://cdn.bulbagarden.net/upload/f/f8/595Joltik.png"},{id:8,image:"https://cdn.bulbagarden.net/upload/a/a5/608Lampent.png"},{id:9,image:"https://cdn.bulbagarden.net/upload/5/55/212Scizor.png"},{id:10,image:"https://cdn.bulbagarden.net/upload/6/6d/306Aggron.png"},{id:11,image:"https://cdn.bulbagarden.net/upload/4/4e/144Articuno.png"},{id:12,image:"https://cdn.bulbagarden.net/upload/0/0b/028Sandslash.png"}]},,,,,,,,function(e,t,a){e.exports=a(20)},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),s=a(3),r=a.n(s),l=a(4),i=a(5),d=a(7),o=a(6),u=a(8),p=(a(15),function(e){return c.a.createElement("div",{className:"card img-container hover"},c.a.createElement("img",{alt:e.name,src:e.image,id:e.id,onClick:function(){return e.shuffleScoreCard(e.id)},className:"shuffleScore"}))}),g=(a(16),function(e){return c.a.createElement("div",{className:"wrapper"},e.children)}),m=(a(17),function(e){return c.a.createElement("div",{className:"gameScore"},c.a.createElement("h3",{className:"score"},"Your Score: ",e.total),c.a.createElement("h3",{className:"status"},e.status))}),h=a(1),f=(a(18),function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,c=new Array(n),s=0;s<n;s++)c[s]=arguments[s];return(a=Object(d.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(c)))).state={images:h,clickedIds:[],score:0,status:""},a.shuffleScoreCard=function(e){var t=a.state.clickedIds;if(a.state.clickedIds.includes(e))a.setState({clickedIds:[],score:0,status:"You've lost. Click to play again!"});else if(t.push(e),t.length!==h.length){a.setState({images:h,clickedIds:t,score:t.length,status:" "});for(var n=h.length-1;n>0;n--){var c=Math.floor(Math.random()*(n+1)),s=[h[c],h[n]];h[n]=s[0],h[c]=s[1]}}else a.setState({score:h.length,status:"You've Won! Click to play again!",clickedIds:[]})},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return c.a.createElement("div",{className:"App"},c.a.createElement("header",{className:"App-header"},c.a.createElement("h1",{className:"App-title"},"Clicky!"),c.a.createElement("p",{className:"App-intro"},"Don't click the same image more than once!")),c.a.createElement("br",null),c.a.createElement(m,{total:this.state.score,goal:this.state.images.length,status:this.state.status}),c.a.createElement(g,null,this.state.images.map(function(t){return c.a.createElement(p,{shuffleScoreCard:e.shuffleScoreCard,id:t.id,key:t.id,image:t.image})})))}}]),t}(n.Component));a(19);r.a.render(c.a.createElement(f,null),document.getElementById("root"))}],[[9,1,2]]]);
//# sourceMappingURL=main.9a48b12f.chunk.js.map