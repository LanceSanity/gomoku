(this.webpackJsonpgomoku=this.webpackJsonpgomoku||[]).push([[0],{14:function(e,t,a){},8:function(e,t,a){e.exports=a(9)},9:function(e,t,a){"use strict";a.r(t);var r=a(7),n=a(1),s=a(2),u=a(3),l=a(4),c=a(0),i=a.n(c),o=a(6),v=a.n(o);a(14);function h(e){return i.a.createElement("button",{className:e.status?"square "+e.status:"square unclicked",onClick:function(){return e.onClick()}},e.value)}var f=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(e){var r;return Object(n.a)(this,a),(r=t.call(this,e)).state={squares:Array(225).fill(null),xIsNext:!0},r}return Object(s.a)(a,[{key:"handleClick",value:function(e){var t=this.state.squares.slice();d(t)||t[e]||(t[e]=this.state.xIsNext?"X":"O",this.setState({squares:t,xIsNext:!this.state.xIsNext}))}},{key:"renderSquare",value:function(e){var t=this;return i.a.createElement(h,{value:this.state.squares[e],status:this.state.squares[e]?"clicked-"+this.state.squares[e]:null,onClick:function(){return t.handleClick(e)}})}},{key:"renderBoard",value:function(){for(var e=[],t=0;t<15;t++){for(var a=[],r=15*t;r<15*(t+1);r++)a.push(this.renderSquare(r));e.push(i.a.createElement("div",{className:"board-row"},a))}return e}},{key:"render",value:function(){var e,t=d(this.state.squares);return e=t?"Winner: "+t:"Next player: "+(this.state.xIsNext?"X":"O"),i.a.createElement("div",null,i.a.createElement("div",{className:"status"},e),this.renderBoard())}}]),a}(i.a.Component),m=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return i.a.createElement("div",{className:"game"},i.a.createElement("div",{className:"game-board"},i.a.createElement(f,null)),i.a.createElement("div",{className:"game-info"},i.a.createElement("div",null),i.a.createElement("ol",null)))}}]),a}(i.a.Component);function d(e){for(var t=function(){for(var e=[],t=0;t<15;t++){for(var a=15*t;a<=15*t+10;a++)e.push([a,a+1,a+2,a+3,a+4]);for(var r=t;r<=t+150;r+=15)e.push([r,r+15,r+30,r+45,r+60]);for(var n=0;n<=11-t;n++){var s=t+16*n;e.push([s,s+16,s+32,s+48,s+64]);var u=14*(n+1)-t;e.push([u,u+14,u+28,u+42,u+56]);var l=15*t+16*n;e.push([l,l+16,l+32,l+48,l+64]);var c=15*t+14*(n+1);e.push([c,c+14,c+28,c+42,c+56])}}return e}(),a=0;a<t.length;a++){var n=Object(r.a)(t[a],5),s=n[0],u=n[1],l=n[2],c=n[3],i=n[4];if(e[s]&&e[s]===e[u]&&e[s]===e[l]&&e[s]===e[c]&&e[s]===e[i])return e[s]}return null}v.a.render(i.a.createElement(m,null),document.getElementById("root"))}},[[8,1,2]]]);
//# sourceMappingURL=main.f4d07c70.chunk.js.map