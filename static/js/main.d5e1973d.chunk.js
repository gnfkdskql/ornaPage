(this.webpackJsonpornapage=this.webpackJsonpornapage||[]).push([[0],{12:function(e,t,a){},13:function(e,t,a){},14:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),i=a(3),m=a.n(i),g=(a(12),a(4)),r=a(5),s=a(7),l=a(6),f=(a(13),a(14),a(0));var o=function(e){var t=e.name,a=e.attack,n=e.magic,c=e.debuff,i=e.elemental,m=e.img,g=e.etc;return Object(f.jsxs)("div",{children:[Object(f.jsx)("img",{src:"/ornapage"+m,alt:""}),Object(f.jsx)("h1",{children:t}),Object(f.jsxs)("h2",{children:["\ubb3c\ub9ac\uae30\uc220: ",a,Object(f.jsx)("br",{}),"\ub9c8\ubc95\uae30\uc220: ",n]}),Object(f.jsxs)("h3",{children:["\uc0c1\ud0dc\uc774\uc0c1: ",c,Object(f.jsx)("br",{}),"\uacf5\uaca9\uc18d\uc131: ",i]}),Object(f.jsxs)("h4",{children:["\ud2b9\uc774\uc0ac\ud56d: ",g]})]})},u=[{name:"\uc2a4\ud0c0\ub85c\ub4dc",attack:0,magic:5,debuff:["\uc2e4\uba85, \ube59\uacb0, \ud654\uc0c1, \uae30\uc808"],elemental:["\ubd88\uc18d\uc131"],img:"/img/starload.png",etc:""},{name:"\ud5ec",attack:8,magic:0,debuff:["\ubc29\uae4e, \uc911\ub3c5, \uc2e4\uba85, \uae30\uc808"],elemental:[""],img:"/img/hel.png",etc:"\ub514\ubc84\ud504\uc0c1\ud0dc\uba74 \uc886\ub310"},{name:"\uc218\ub974\ud2b8",attack:6,magic:1,debuff:["\ubc29\uae4e, \uacf5\uae4e, \ucd9c\ud608"],elemental:["\ubd88\uc18d\uc131"],img:"/img/surtr.png",etc:"\ub514\ubc84\ud504\uc0c1\ud0dc\uba74 \uc886\ub310"},{name:"\ud398\uc774\uac8c\uc774\uc800",attack:1,magic:5,debuff:["\uc2e4\uba85, \uc800\uc8fc, \uacf5\uae4e, \uc8fc\ubb38\uae4e, \ubc29\uae4d, \uc800\ud56d\uae4e"],elemental:["\uc544\ucf00\uc778, \ubd88, \ubb3c, \ubc88\uac1c, \ub545"],img:"/img/fey_gazer.png",etc:"4\uc18d\uc131\uc0c1\ud0dc\uc774\uc0c1\uac78\ub9bc!!!"},{name:"\ud398\uc774\ub4dc\ub798\uace4",attack:3,magic:3,debuff:["\uc5ed\ubcd1, \ud654\uc0c1"],elemental:["\ubd88, \uc6a9"],img:"/img/fey_dragon.png",etc:"\uac70\ub300\ud55c \ud654\uad6c \ub51c \uc870\uc2ec"},{name:"\ud37c\uc2a4\ud2b8\ud638\uc2a4\ub9e8",attack:2,magic:5,debuff:["\uc2e4\uba85, \ubd80\ud328"],elemental:["\uc5b4\ub460, \ub545, \ube5b"],img:"/img/horseman_famine.png",etc:"\ud55c\ubc29\uae30\uc788\uc74c!!"},{name:"\uc138\ucee8\ub4dc\ud638\uc2a4\ub9e8",attack:0,magic:4,debuff:["\uc5ed\ubcd1, \uc2e4\uba85, \uc911\ub3c5, \ub9f9\ub3c5, \ubd80\ud328, \ub9c8\ube44, \ud654\uc0c1"],elemental:["\ube5b, \uc5b4\ub460"],img:"/img/horseman_pestilence.png",etc:"\ud55c\ubc29\uae30\uc788\uc74c!!"},{name:"\ud398\uc774\ucf54\uce74\ud2b8\ub9ac\uc2a4",attack:3,magic:3,debuff:["\uc5ed\ubcd1, \ud654\uc0c1, \uc911\ub3c5, \uc11d\ud654"],elemental:["\ub4dc\ub798\uace4, \ubd88"],img:"/img/fey_cockatrice.png",etc:""},{name:"\uc774\uadf8\ub4dc\ub77c\uc2e4",attack:3,magic:4,debuff:["\uacf5\uae4e, \ubc29\uae4e, \uc800\ud56d\uae4e, \uc11d\ud654"],elemental:["\ub545"],img:"/img/yggdrasil.png",etc:""}],b=function(e){Object(s.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(g.a)(this,a);for(var n=arguments.length,c=new Array(n),i=0;i<n;i++)c[i]=arguments[i];return(e=t.call.apply(t,[this].concat(c))).state={monsters:[]},e}return Object(r.a)(a,[{key:"componentDidMount",value:function(){this.setState({monsters:u})}},{key:"render",value:function(){var e=this.state.monsters;return Object(f.jsx)("div",{className:"App",children:Object(f.jsx)("div",{className:"monsters",children:e.map((function(e){return Object(f.jsx)(o,{name:e.name,attack:e.attack,magic:e.magic,debuff:e.debuff,img:e.img,etc:e.etc,elemental:e.elemental},e.name)}))})})}}]),a}(c.a.Component),d=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,17)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,i=t.getLCP,m=t.getTTFB;a(e),n(e),c(e),i(e),m(e)}))};m.a.render(Object(f.jsx)(c.a.StrictMode,{children:Object(f.jsx)(b,{})}),document.getElementById("root")),d()}},[[16,1,2]]]);
//# sourceMappingURL=main.d5e1973d.chunk.js.map