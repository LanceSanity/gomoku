(this.webpackJsonpgomoku=this.webpackJsonpgomoku||[]).push([[0],{21:function(e,t,a){e.exports=a(22)},22:function(e,t,a){"use strict";a.r(t);var n=a(20),r=a(11),s=a(12),l=a(13),i=a(14),o=a(1),u=a.n(o),c=a(7),d=a.n(c),h=(a(27),a(41)),m=a(38),f=a(39),p=a(40),v=a(10),g=(a(28),15);function k(e){var t=e.sqState?"square "+e.sqState:"square unclicked";return e.isWinner&&(t+=" is-winner"),u.a.createElement("button",{className:t,"cur-piece":e.curPiece,onClick:function(){return e.onClick()}},e.value)}function E(e){var t;return"default"===e.mode?t="Single Player Mode":"ai"===e.mode&&(t="Play Against Computer"),u.a.createElement(h.a,{isOpen:e.modal,toggle:e.toggle},u.a.createElement(m.a,{toggle:e.toggle},t),u.a.createElement(f.a,null,"Are you sure you want to restart?"),u.a.createElement(p.a,null,u.a.createElement(v.a,{color:"primary",onClick:e.reset},"Restart")," ",u.a.createElement(v.a,{color:"secondary",onClick:e.toggle},"Cancel")))}var y=function(e){Object(i.a)(a,e);var t=Object(l.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).state={squares:Array(225).fill(null),xIsNext:!0,winner:null,spotsOccupied:0,openModal:!1,mode:"default",selectedMode:null},n}return Object(s.a)(a,[{key:"handleClick",value:function(e){var t=this.state.squares.slice();this.state.winner||t[e]||(t[e]=this.state.xIsNext?"X":"O",this.setState({squares:t,xIsNext:!this.state.xIsNext,winner:x(t),spotsOccupied:this.state.spotsOccupied+1}))}},{key:"toggle",value:function(e){this.setState({openModal:!this.state.openModal,selectedMode:e})}},{key:"reset",value:function(e){this.setState({squares:Array(225).fill(null),xIsNext:!0,winner:null,spotsOccupied:0,openModal:!1,mode:e,selectedMode:null})}},{key:"renderSquare",value:function(e){var t=this;return u.a.createElement(k,{key:"square"+e.toString(),curPiece:this.state.xIsNext?"X":"O",value:this.state.squares[e],sqState:this.state.squares[e]?"clicked-"+this.state.squares[e]:null,isWinner:this.state.winner&&this.state.winner[1].includes(e),onClick:function(){return t.handleClick(e)}})}},{key:"renderBoard",value:function(){for(var e=[],t=0;t<g;t++){for(var a=[],n=t*g;n<g*(t+1);n++)a.push(this.renderSquare(n));e.push(u.a.createElement("div",{className:"board-row",key:"row"+t.toString()},a))}return e}},{key:"componentDidUpdate",value:function(){"ai"!==this.state.mode||this.state.xIsNext||this.handleClick(function(e,t){var a=e.slice();if(a.length===t)return null;for(var n=a.length-1,r=0;r<a.length-t;r++)if(a[r]){var s=[a[n],a[r]];a[r]=s[0],a[n]=s[1],n-=1}return Math.floor(Math.random()*(a.length-t))}(this.state.squares,this.state.spotsOccupied))}},{key:"render",value:function(){var e,t=this;return e=this.state.winner?"Winner: "+this.state.winner[0]:225===this.state.spotsOccupied?"Game ended in a draw":"Next player: "+(this.state.xIsNext?"X":"O"),u.a.createElement("div",null,u.a.createElement("div",{className:"status"},e),this.renderBoard(),u.a.createElement("div",{className:"btn-options"},u.a.createElement(v.a,{color:"primary",onClick:function(e){return t.toggle("default",e)}},"RESTART GAME")," ",u.a.createElement(v.a,{color:"info",onClick:function(e){return t.toggle("ai",e)}},"PLAY COMPUTER")," "),u.a.createElement(E,{modal:this.state.openModal,mode:this.state.selectedMode,reset:function(e){return t.reset(t.state.selectedMode,e)},toggle:function(){return t.toggle()}}))}}]),a}(u.a.Component),O=function(e){Object(i.a)(a,e);var t=Object(l.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return u.a.createElement("div",{className:"game"},u.a.createElement("div",{className:"game-board"},u.a.createElement(y,null)),u.a.createElement("div",{className:"game-info"},u.a.createElement("div",null),u.a.createElement("ol",null)))}}]),a}(u.a.Component);function x(e){for(var t=function(){for(var e=[],t=0;t<g;t++){for(var a=t*g;a<=t*g+g-5;a++)e.push([a,a+1,a+2,a+3,a+4]);for(var n=t;n<=t+150;n+=g)e.push([n,n+g,n+30,n+45,n+60]);for(var r=0;r<=11-t;r++){var s=t+16*r,l=14*(r+1)-t,i=g*t+16*r,o=g*t+14*(r+1);e.push([s,s+16,s+32,s+48,s+64]),e.push([l,l+14,l+28,l+42,l+56]),e.push([i,i+16,i+32,i+48,i+64]),e.push([o,o+14,o+28,o+42,o+56])}}return e}(),a=0;a<t.length;a++){var r=Object(n.a)(t[a],5),s=r[0],l=r[1],i=r[2],o=r[3],u=r[4];if(e[s]&&e[s]===e[l]&&e[s]===e[i]&&e[s]===e[o]&&e[s]===e[u])return[e[s],t[a]]}return null}d.a.render(u.a.createElement(O,null),document.getElementById("root"))},28:function(e,t,a){}},[[21,1,2]]]);
//# sourceMappingURL=main.8ab1b18a.chunk.js.map