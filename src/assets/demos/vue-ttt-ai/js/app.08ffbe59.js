(function(e){function t(t){for(var i,c,s=t[0],a=t[1],u=t[2],f=0,d=[];f<s.length;f++)c=s[f],Object.prototype.hasOwnProperty.call(o,c)&&o[c]&&d.push(o[c][0]),o[c]=0;for(i in a)Object.prototype.hasOwnProperty.call(a,i)&&(e[i]=a[i]);l&&l(t);while(d.length)d.shift()();return r.push.apply(r,u||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],i=!0,s=1;s<n.length;s++){var a=n[s];0!==o[a]&&(i=!1)}i&&(r.splice(t--,1),e=c(c.s=n[0]))}return e}var i={},o={app:0},r=[];function c(t){if(i[t])return i[t].exports;var n=i[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=e,c.c=i,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)c.d(n,i,function(t){return e[t]}.bind(null,i));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],a=s.push.bind(s);s.push=t,s=s.slice();for(var u=0;u<s.length;u++)t(s[u]);var l=a;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0a20":function(e,t,n){},"0aa2":function(e,t,n){},"0bee":function(e,t,n){"use strict";n("0a20")},2274:function(e,t,n){"use strict";n("0aa2")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var i=n("7a23"),o={class:"header"},r=Object(i["f"])("Round "),c={class:"round-count"},s={class:"board-container"},a={id:"explanation",class:"container"},u=Object(i["e"])("p",null,"Take a chance at beating this Vue Tic Tac Toe bot!",-1),l=Object(i["e"])("p",null,"Start a new game by making the first move. If you feel like the AI is a bit too powerfull just select a different difficulty level. For a more personal touch, add your username!",-1),f=Object(i["e"])("p",null,[Object(i["f"])("This project is built with "),Object(i["e"])("i",{class:"fab fa-vuejs"}),Object(i["f"])(" Vue.js. Check out the code on "),Object(i["e"])("a",{href:"https://github.com/rensvis/vue-ttt-ai"},[Object(i["e"])("i",{class:"fab fa-github"}),Object(i["f"])(" GitHub")]),Object(i["f"])(".")],-1);function d(e,t,n,d,h,b){var m=Object(i["m"])("Score"),g=Object(i["m"])("Difficulty"),p=Object(i["m"])("Board");return Object(i["i"])(),Object(i["d"])(i["a"],null,[Object(i["e"])("div",o,[Object(i["e"])("h1",null,[r,Object(i["e"])("span",c,Object(i["n"])(h.roundCount),1)]),Object(i["g"])(m,{scores:h.scores,userName:h.userName,onUpdateUsername:b.updateUsername},null,8,["scores","userName","onUpdateUsername"]),Object(i["g"])(g,{difficulty:h.difficulty,onChangeDifficulty:b.changeDifficulty},null,8,["difficulty","onChangeDifficulty"])]),Object(i["e"])("div",s,[Object(i["g"])(p,{difficulty:h.difficulty,scores:h.scores,inProgress:e.inProgress,onUpdateResult:b.updateResult,onNewRound:b.newRound},null,8,["difficulty","scores","inProgress","onUpdateResult","onNewRound"])]),Object(i["e"])("div",a,[u,l,f,Object(i["e"])("button",{onClick:t[0]||(t[0]=function(e){return b.clearHistory()}),id:"clear-history"},"Clear history")])],64)}var h={class:"board-container"};function b(e,t,n,o,r,c){var s=Object(i["m"])("Tile"),a=Object(i["m"])("WinningLine"),u=Object(i["m"])("WinningMessage");return Object(i["i"])(),Object(i["d"])("div",h,[Object(i["e"])("div",{id:"board",class:Object(i["h"])(["board",[r.aiPlaying?"disabled":"","X"===r.turn?"X":"O",r.inProgress?"":"fade"]])},[(Object(i["i"])(!0),Object(i["d"])(i["a"],null,Object(i["l"])(r.board,(function(e,t){return Object(i["i"])(),Object(i["c"])(s,{key:t,onClick:function(e){return c.tileClick(t)},playedBy:e},null,8,["onClick","playedBy"])})),128)),Object(i["g"])(a,{class:Object(i["h"])({show:""!==r.winner&&!r.inProgress}),winningCombination:r.winningCombination},null,8,["class","winningCombination"])],2),Object(i["g"])(u,{class:Object(i["h"])({show:!r.inProgress}),winner:r.winner,onPlayAgain:c.playAgain},null,8,["class","winner","onPlayAgain"])])}n("cb29"),n("d81d"),n("4e82"),n("4de4");function m(e,t,n,o,r,c){return Object(i["i"])(),Object(i["d"])("div",{class:Object(i["h"])([[n.playedBy],"tile"])},null,2)}var g={name:"Tile",components:{},props:{playedBy:{type:String,default:""}},data:function(){return{content:""}}},p=(n("0bee"),n("6b0d")),y=n.n(p);const O=y()(g,[["render",m],["__scopeId","data-v-2d3a68bd"]]);var v=O,j={class:"winning-message"},w={class:"winning-message__title"},_={class:"winning-message__joke"};function C(e,t,n,o,r,c){return Object(i["i"])(),Object(i["d"])("div",j,[Object(i["e"])("h2",w,Object(i["n"])(c.header),1),Object(i["e"])("p",_,Object(i["n"])(c.joke),1),Object(i["e"])("button",{class:"winning-message__btn",onClick:t[0]||(t[0]=function(e){return c.onClickPA()})},"Play again")])}var I={name:"WinningMessage",components:{},props:{winner:String},data:function(){return{}},computed:{joke:function(){var e={X:["Too easy for you?","You beat AI! Maybe there's hope for humanity. :)","Are you a tic tac toe master by any chance?","Winning isn’t everything, it’s the only thing.","Winning solves everything."],O:["Why does Artificial Intelligence have to be so intelligent..?","Don't worry, you'll get him next time.","He must get tired at some point, right?","Losing feels worse than winning feels good.","You can’t win unless you learn how to lose.","You win some, you lose some.","Don't worry, he's cheating by using AI."],draw:["Didn't win, but didn't lose either!","Practice round, catch him on the next one.","Winners never quit, quiters never win.","Persistence is key.","Sometimes you win and sometimes you learn.","Winning isn’t everything, but wanting it is."]};return"X"===this.winner?e.X[Math.floor(Math.random()*e.X.length)]:"O"===this.winner?e.O[Math.floor(Math.random()*e.O.length)]:e.draw[Math.floor(Math.random()*e.O.length)]},header:function(){return"tie"===this.winner?"Draw.":"".concat(this.winner," won!")}},methods:{onClickPA:function(){this.$emit("play-again")}}};n("94c7");const k=y()(I,[["render",C],["__scopeId","data-v-7dc5fb9c"]]);var P=k,S={class:"winning-line"},M=["x1","y1","x2","y2"];function x(e,t,n,o,r,c){return Object(i["i"])(),Object(i["d"])("svg",S,[Object(i["e"])("line",{x1:c.coords.x1,y1:c.coords.y1,x2:c.coords.x2,y2:c.coords.y2},null,8,M)])}n("a9e3");var A={name:"WinningLine",components:{},props:{winningCombination:Number},data:function(){return{}},computed:{coords:function(){if(!this.winningCombination&&0!==this.winningCombination)return{x1:0,y1:0,x2:0,y2:0};var e={0:[[0,50],[300,50]],1:[[0,150],[300,150]],2:[[0,250],[300,250]],3:[[50,0],[50,300]],4:[[150,0],[150,300]],5:[[250,0],[250,300]],6:[[0,0],[300,300]],7:[[300,0],[0,300]]};console.log(this.winningCombination);var t=e[this.winningCombination];return{x1:t[0][0],y1:t[0][1],x2:t[1][0],y2:t[1][1]}}},methods:{}};n("dc33");const W=y()(A,[["render",x],["__scopeId","data-v-6a62c8c0"]]);var T=W,D={name:"Board",components:{Tile:v,WinningMessage:P,WinningLine:T},props:{difficulty:String,scores:Object},data:function(){return{board:Array(9).fill(""),winningCombinations:[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],turn:"X",roles:{human:"X",ai:"O"},inProgress:!0,winner:"",winningCombination:null,aiPlaying:!1}},created:function(){},methods:{tileClick:function(e){var t=this;if(this.inProgress&&""===this.board[e]&&!this.aiPlaying){var n=this.makeMove(e);n||this.inProgress&&(this.aiPlaying=!0,setTimeout((function(){t.AITurn()}),10))}},makeMove:function(e){var t=this;this.board=this.board.map((function(n,i){return e===i?t.turn:n}));var n=this.checkWinner(this.board,this.turn);if(n)return this.endGame(n),n;this.turn="X"===this.turn?"O":"X"},AITurn:function(){var e,t=this,n=this.board,i=[];if("blind"===this.difficulty)i=n.reduce((function(e,t,n){return""===t&&e.push(n),e}),[]),e=i[Math.floor(Math.random()*i.length)];else{for(var o=0;o<n.length;o++)if(""===n[o]){n[o]="O";var r=this.minimax(n,0,!0,o);n[o]="",i.push({move:o,score:r})}i.sort((function(e,t){return e.score-t.score}));var c=function(e){var t=e.filter((function(t){return t.score===e[0].score}));return console.log(t[Math.floor(Math.random()*t.length)].move),t[Math.floor(Math.random()*t.length)].move},s=function(e){var t=e.filter((function(t){return t.score!==e[0].score}));return t[Math.floor(Math.random()*t.length)].move};e="impossible"===this.difficulty||Math.random()<.75?c(i):s(i)}setTimeout((function(){t.makeMove(e),t.aiPlaying=!1}),600)},minimax:function(e,t,n,i){var o=this.checkWinner(e);if(o){var r={X:10-t,O:-10+t,tie:0};return r[o]}if(n){for(var c=-1/0,s=0;s<e.length;s++)if(""===e[s]){e[s]="X";var a=this.minimax(e,t+1,!1,i);e[s]="",a>c&&(c=a)}return c}for(var u=1/0,l=0;l<e.length;l++)if(""===e[l]){e[l]="O";var f=this.minimax(e,t+1,!0,i);e[l]="",f<u&&(u=f)}return u},checkWinner:function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.board,t=e,n=0;n<this.winningCombinations.length;n++){var i=this.winningCombinations[n];if(t[i[0]]==t[i[1]]&&t[i[1]]==t[i[2]]&&""!=t[i[0]]){var o=t[i[0]];return this.winningCombination=n,o}}return 0===t.filter((function(e){return""===e})).length&&"tie"},endGame:function(e){"tie"===e&&(this.winningCombination=null),this.winner=e,this.inProgress=!1,this.$emit("update-result",e)},playAgain:function(){var e=this;this.board=Array(9).fill(""),this.turn="X",this.inProgress=!0,this.$emit("new-round"),setTimeout((function(){e.winner=""}),500)}}};n("e870");const N=y()(D,[["render",b],["__scopeId","data-v-108224bc"]]);var X=N,R=function(e){return Object(i["k"])("data-v-4ac1e5db"),e=e(),Object(i["j"])(),e},B={class:"scores"},U={class:"scores__player"},H={class:"scores__name"},$=R((function(){return Object(i["e"])("i",{class:"fas fa-user"},null,-1)})),Y=["value"],L={class:"scores__score scores__score--user"},G=R((function(){return Object(i["e"])("div",{class:"scores__vs"},[Object(i["e"])("span",null,"vs")],-1)})),q={class:"scores__ai"},J={class:"scores__score scores__score--robot"},V=R((function(){return Object(i["e"])("span",{class:"scores__name"},"Robot",-1)})),F=R((function(){return Object(i["e"])("i",{class:"fas fa-robot"},null,-1)}));function z(e,t,n,o,r,c){return Object(i["i"])(),Object(i["d"])("div",B,[Object(i["e"])("div",U,[Object(i["e"])("div",H,[$,Object(i["e"])("input",{type:"text",ref:"input",value:n.userName,onInput:t[0]||(t[0]=function(){return c.onInput&&c.onInput.apply(c,arguments)}),onChange:t[1]||(t[1]=function(){return c.onChange&&c.onChange.apply(c,arguments)})},null,40,Y),Object(i["e"])("span",L,Object(i["n"])(n.scores.human),1)])]),G,Object(i["e"])("div",q,[Object(i["e"])("span",J,Object(i["n"])(n.scores.ai),1),V,F])])}var E={name:"Score",components:{},props:{scores:Object,userName:String},data:function(){return{content:""}},mounted:function(){this.updateInputWidth()},methods:{onInput:function(e){var t=15;e.target.value.length>t&&(e.target.value=e.target.value.substring(0,t)),this.updateInputWidth()},onChange:function(e){this.$emit("update-username",e.target.value)},updateInputWidth:function(){var e=this.$refs["input"];console.log(this.$refs),e.style.width=e.value.length+"ch"}}};n("9e18");const K=y()(E,[["render",z],["__scopeId","data-v-4ac1e5db"]]);var Q=K,Z={class:"difficulty"},ee={class:"difficulty__row"},te={class:"difficulty__cell",style:{}},ne={class:"difficulty__cell",style:{}},ie={class:"difficulty__cell",style:{}};function oe(e,t,n,o,r,c){return Object(i["i"])(),Object(i["d"])("table",Z,[Object(i["e"])("tbody",null,[Object(i["e"])("tr",ee,[Object(i["e"])("td",te,[Object(i["e"])("button",{onClick:t[0]||(t[0]=function(e){return c.onChangeDifficulty("blind")}),class:Object(i["h"])([{active:"blind"===n.difficulty},"difficulty__btn"])},"Blind",2)]),Object(i["e"])("td",ne,[Object(i["e"])("button",{onClick:t[1]||(t[1]=function(e){return c.onChangeDifficulty("medium")}),class:Object(i["h"])([{active:"medium"===n.difficulty},"difficulty__btn"])},"Medium",2)]),Object(i["e"])("td",ie,[Object(i["e"])("button",{onClick:t[2]||(t[2]=function(e){return c.onChangeDifficulty("impossible")}),class:Object(i["h"])([{active:"impossible"===n.difficulty},"difficulty__btn"])},"Impossible",2)])])])])}var re={name:"Difficulty",components:{},props:{difficulty:String},data:function(){return{content:""}},created:function(){},methods:{onChangeDifficulty:function(e){this.$emit("change-difficulty",e)}}};n("2274");const ce=y()(re,[["render",oe],["__scopeId","data-v-694dec52"]]);var se=ce,ae={name:"App",components:{Board:X,Score:Q,Difficulty:se},data:function(){return{difficulty:"impossible",scores:{human:0,ai:0},roundCount:1,userName:"You"}},created:function(){this.difficulty=localStorage.getItem("difficulty")||"impossible",this.roundCount=localStorage.getItem("roundCount")||1,this.scores.human=localStorage.getItem("scoreHuman")||0,this.scores.ai=localStorage.getItem("scoreAi")||0,this.userName=localStorage.getItem("userName")||"You"},methods:{changeDifficulty:function(e){this.difficulty=e,localStorage.setItem("difficulty",e)},updateResult:function(e){"X"===e?this.scores.human++:"O"===e&&this.scores.ai++,localStorage.setItem("scoreHuman",this.scores.human),localStorage.setItem("scoreAi",this.scores.ai)},newRound:function(){this.roundCount++,localStorage.setItem("roundCount",this.roundCount)},clearHistory:function(){localStorage.setItem("roundCount",0),localStorage.setItem("scoreHuman",0),localStorage.setItem("scoreAi",0),this.roundCount=1,this.scores.human=0,this.scores.ai=0},updateUsername:function(e){this.userName=""!==e?e:"You",localStorage.setItem("userName",this.userName)}}};n("79b1");const ue=y()(ae,[["render",d]]);var le=ue;Object(i["b"])(le).mount("#app")},"79b1":function(e,t,n){"use strict";n("bb68")},"94c7":function(e,t,n){"use strict";n("f919")},"9e18":function(e,t,n){"use strict";n("c158")},aecd:function(e,t,n){},bb68:function(e,t,n){},c158:function(e,t,n){},dc33:function(e,t,n){"use strict";n("aecd")},e870:function(e,t,n){"use strict";n("ec5a")},ec5a:function(e,t,n){},f919:function(e,t,n){}});
//# sourceMappingURL=app.08ffbe59.js.map