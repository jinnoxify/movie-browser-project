(this["webpackJsonp7.netflixproject"]=this["webpackJsonp7.netflixproject"]||[]).push([[0],{16:function(e,t,n){e.exports=n(42)},21:function(e,t,n){},22:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),c=n(12),o=n.n(c),r=(n(21),n(22),n(2)),s=n.n(r),l=n(13),m=n(15),v=n(14),f=n.n(v).a.create({baseURL:"https://api.themoviedb.org/3"});n(41);var u=function(e){var t=e.title,n=e.movieUrl,c=Object(a.useState)([]),o=Object(m.a)(c,2),r=o[0],v=o[1];return Object(a.useEffect)((function(){function e(){return(e=Object(l.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.get(n);case 2:return t=e.sent,v(t.data.results),e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[n]),i.a.createElement("div",{className:"container"},i.a.createElement("h2",null,t),i.a.createElement("div",{className:"images"},r.map((function(e){return i.a.createElement("img",{className:"image-alone",src:"".concat("https://image.tmdb.org/t/p/original/").concat(e.poster_path),alt:e.name})}))))},h="349768c45732e19d28104b154c2ff76a",p={fetchTrending:"/trending/all/week?api_key=".concat(h,"&language=en-US"),fetchNetflixOriginals:"/discover/tv?api_key=".concat(h,"&with_networks=213"),fetchTopRated:"/movie/top_rated?api_key=".concat(h,"&language=en-US"),fetchActionMovies:"/discover/movie?api_key=".concat(h,"&with_genres=28"),fetchComedyMovies:"/discover/movie?api_key=".concat(h,"&with_genres=35"),fetchHorrorMovies:"/discover/movie?api_key=".concat(h,"&with_genres=27"),fetchRomanceMovies:"/discover/movie?api_key=".concat(h,"&with_genres=10749"),fetchDocumentaries:"/discover/movie?api_key=".concat(h,"&with_genres=99")};var d=function(){return i.a.createElement("div",{className:"App"},i.a.createElement(u,{title:"Netflix Originals",movieUrl:p.fetchNetflixOriginals}),i.a.createElement(u,{title:"Trending",movieUrl:p.fetchTrending}),i.a.createElement(u,{title:"Top Rated",movieUrl:p.fetchTopRated}),i.a.createElement(u,{title:"Action Movies",movieUrl:p.fetchActionMovies}),i.a.createElement(u,{title:"Comedy Movies",movieUrl:p.fetchComedyMovies}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(d,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[16,1,2]]]);
//# sourceMappingURL=main.38d9485b.chunk.js.map