(this["webpackJsonpmusic-player"]=this["webpackJsonpmusic-player"]||[]).push([[0],{24:function(e,t,n){},25:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n(2),r=n.n(c),i=n(12),s=n.n(i),o=n(4),l=n.n(o),u=n(6),d=n(3),b=n(8),j=function(e){var t=e.currentSong,n=e.isPlaying;return Object(a.jsxs)("div",{className:"song-container",children:[Object(a.jsx)("img",{className:n?"rotateSong":"",src:t.cover,alt:"/"}),Object(a.jsx)("h2",{children:t.name}),Object(a.jsx)("h3",{children:t.artist})]})},p=n(7),h=n(5),f=function(e){var t=e.currentSong,n=e.isPlaying,c=e.setIsplaying,r=e.audioRef,i=e.time,s=e.setTime,o=e.song,b=e.setCurrentSong,j=(e.setSong,e.ChangeSong),f=function(){var e=Object(u.a)(l.a.mark((function e(a){var c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(c=o.findIndex((function(e){return e.id===t.id})),console.log(c),console.log(t),"skip-forward"!==a){e.next=15;break}if(!(c+1<o.length)){e.next=10;break}return e.next=7,b(o[c+1]);case 7:j(o[c+1]),e.next=13;break;case 10:return e.next=12,b(o[0]);case 12:j(o[0]);case 13:e.next=24;break;case 15:if(!(!c-1<0)){e.next=21;break}return e.next=18,b(o[(c-1)%o.length]);case 18:j(o[c-1]),e.next=24;break;case 21:return e.next=23,b(o[o.length-1]);case 23:j(o[o.length-1]);case 24:n&&r.current.play();case 25:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();function m(e){return Math.floor(e/60)+":"+("0"+Math.floor(e%60)).slice(-2)}var g={transform:"translateX(".concat(i.animetePercentage,"%)")};return Object(a.jsxs)("div",{className:"player",children:[Object(a.jsxs)("div",{className:"time-control",children:[Object(a.jsx)("p",{children:m(i.currenttime)}),Object(a.jsxs)("div",{style:{background:"linear-gradient(to right, ".concat(t.color[0],",").concat(t.color[1],")")},className:"track",children:[Object(a.jsx)("input",{min:0,max:i.duration,value:i.currenttime,onChange:function(e){var t=e.target.value;r.current.currentTime=e.target.value,s(Object(d.a)(Object(d.a)({},i),{},{currenttime:t}))},type:"range"}),Object(a.jsx)("div",{style:g,className:"animate-track"})]}),Object(a.jsx)("p",{children:m(i.duration).indexOf("NaN")>-1?"0:00":m(i.duration)})]}),Object(a.jsxs)("div",{className:"play-control",children:[Object(a.jsx)(p.a,{onClick:function(){return f("skip-back")},className:"skip-back",size:"2x",icon:h.a}),Object(a.jsx)(p.a,{onClick:function(){n?(r.current.pause(),c(!n)):(r.current.play(),c(!n))},className:"play",size:"2x",icon:n?h.d:h.e}),Object(a.jsx)(p.a,{onClick:function(){return f("skip-forward")},className:"skip-forward",size:"2x",icon:h.b})]})]})},m=(n(24),n(27));var g=function(){return[{name:"Beaver Creek",cover:"https://chillhop.com/wp-content/uploads/2020/09/0255e8b8c74c90d4a27c594b3452b2daafae608d-1024x1024.jpg",artist:"Aso, Middle School, Aviino",audio:"https://mp3.chillhop.com/serve.php/?mp3=10075",color:["#205950","#2ab3bf"],id:Object(m.a)(),active:!0},{name:"Daylight",cover:"https://chillhop.com/wp-content/uploads/2020/07/ef95e219a44869318b7806e9f0f794a1f9c451e4-1024x1024.jpg",artist:"Aiguille",audio:"https://mp3.chillhop.com/serve.php/?mp3=9272",color:["#EF8EA9","#ab417f"],id:Object(m.a)(),active:!1},{name:"Keep Going",cover:"https://chillhop.com/wp-content/uploads/2020/07/ff35dede32321a8aa0953809812941bcf8a6bd35-1024x1024.jpg",artist:"Sw\xf8rn",audio:"https://mp3.chillhop.com/serve.php/?mp3=9222",color:["#CD607D","#c94043"],id:Object(m.a)(),active:!1},{name:"Nightfall",cover:"https://chillhop.com/wp-content/uploads/2020/07/ef95e219a44869318b7806e9f0f794a1f9c451e4-1024x1024.jpg",artist:"Aiguille",audio:"https://mp3.chillhop.com/serve.php/?mp3=9148",color:["#EF8EA9","#ab417f"],id:Object(m.a)(),active:!1},{name:"Reflection",cover:"https://chillhop.com/wp-content/uploads/2020/07/ff35dede32321a8aa0953809812941bcf8a6bd35-1024x1024.jpg",artist:"Sw\xf8rn",audio:"https://mp3.chillhop.com/serve.php/?mp3=9228",color:["#CD607D","#c94043"],id:Object(m.a)(),active:!1},{name:"Under the City Stars",cover:"https://chillhop.com/wp-content/uploads/2020/09/0255e8b8c74c90d4a27c594b3452b2daafae608d-1024x1024.jpg",artist:"Aso, Middle School, Aviino",audio:"https://mp3.chillhop.com/serve.php/?mp3=10074",color:["#205950","#2ab3bf"],id:Object(m.a)(),active:!1}]},O=function(e){var t=e.song,n=e.songs,c=e.setCurrentSong,r=e.audioRef,i=e.isPlaying,s=e.setSong,o=function(){var e=Object(u.a)(l.a.mark((function e(t){var a,o;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=n.filter((function(e){return e.id===t})),e.next=3,c(a[0]);case 3:i&&r.current.Play(),o=n.map((function(e){return e.id===t?Object(d.a)(Object(d.a)({},e),{},{active:!0}):Object(d.a)(Object(d.a)({},e),{},{active:!1})})),s(o);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(a.jsx)("div",{children:Object(a.jsxs)("div",{onClick:function(){return o(t.id)},className:"library-song ".concat(t.active?"selected":""),children:[Object(a.jsx)("img",{src:t.cover,alt:"/"}),Object(a.jsxs)("div",{className:"song-desc",children:[Object(a.jsx)("h2",{children:t.name}),Object(a.jsx)("h3",{children:t.artist})]})]})})},v=function(e){var t=e.song,n=e.setCurrentSong,c=e.audioRef,r=e.isPlaying,i=e.setSong,s=e.libraryStatus;return Object(a.jsx)("div",{children:Object(a.jsxs)("div",{className:"library ".concat(s?"active-library":""),children:[Object(a.jsx)("h1",{children:"Library"}),Object(a.jsx)("div",{className:"library-songs",children:t.map((function(e){return Object(a.jsx)(O,{song:e,isPlaying:r,setCurrentSong:n,songs:t,setSong:i,audioRef:c},e.id)}))})]})})},x=function(e){var t=e.setLibraryStatus,n=e.libraryStatus;return Object(a.jsx)("div",{children:Object(a.jsxs)("nav",{children:[Object(a.jsx)("h1",{children:"Beats Up"}),Object(a.jsxs)("button",{onClick:function(){t(!n)},children:["Library",Object(a.jsx)(p.a,{icon:h.c})]})]})})};var y=function(){var e=Object(c.useState)(g()),t=Object(b.a)(e,2),n=t[0],r=t[1],i=Object(c.useState)(n.filter((function(e){return!0===e.active}))[0]),s=Object(b.a)(i,2),o=s[0],p=s[1],h=Object(c.useState)(!1),m=Object(b.a)(h,2),O=m[0],y=m[1],S=Object(c.useState)(!1),k=Object(b.a)(S,2),w=k[0],C=k[1],N=Object(c.useRef)(null),P=Object(c.useState)({currenttime:0,duration:0,animetePercentage:0}),A=Object(b.a)(P,2),M=A[0],R=A[1],E=function(e){var t=n.map((function(t){return t.id===e.id?Object(d.a)(Object(d.a)({},t),{},{active:!0}):Object(d.a)(Object(d.a)({},t),{},{active:!1})}));r(t)},I=function(e){var t=e.target.currentTime,n=e.target.duration,a=Math.round(t),c=Math.round(n),r=Math.round(a/c*100);R(Object(d.a)(Object(d.a)({},M),{},{currenttime:t,duration:n,animetePercentage:r}))},D=function(){var e=Object(u.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!((t=n.findIndex((function(e){return e.id===o.id})))+1<n.length)){e.next=7;break}return e.next=4,p(n[t+1]);case 4:E(n[t+1]),e.next=10;break;case 7:return e.next=9,p(n[0]);case 9:E(n[0]);case 10:O&&N.current.play();case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(a.jsxs)("div",{className:"App ".concat(w?"library-active":""),children:[Object(a.jsx)(x,{libraryStatus:w,setLibraryStatus:C}),Object(a.jsx)(j,{isPlaying:O,currentSong:o}),Object(a.jsx)(f,{audioRef:N,time:M,setTime:R,isPlaying:O,setIsplaying:y,currentSong:o,setCurrentSong:p,song:n,setSong:r,ChangeSong:E}),Object(a.jsx)(v,{libraryStatus:w,audioRef:N,isPlaying:O,setIsplaying:y,song:n,setSong:r,setCurrentSong:p}),Object(a.jsx)("audio",{onLoadedMetadata:I,onTimeUpdate:I,ref:N,src:o.audio,onEnded:D})]})};s.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(y,{})}),document.getElementById("root"))}},[[25,1,2]]]);
//# sourceMappingURL=main.da6659db.chunk.js.map