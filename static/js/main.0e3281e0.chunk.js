(this.webpackJsonpbudgettracker=this.webpackJsonpbudgettracker||[]).push([[0],{14:function(e,t,a){},15:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(6),c=a.n(s),l=(a(14),a(8)),o=a(1),i=a(2),u=a(4),m=a(3),p=a(7),d=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={oneExpense:0,sum:0},e.handleInputChange=function(t){var a=t.target,n=a.name,r=a.value;e.setState(Object(p.a)({},n,r))},e.handleFormSubmit=function(t){t.preventDefault(),e.props.addExpense({value:e.state.oneExpense});var a=e.state.sum+parseFloat(e.state.oneExpense);e.setState({sum:a})},e}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("p",null,"Sum Total of Expenses: ",this.state.sum),r.a.createElement("form",{className:"form"},r.a.createElement("input",{type:"number",value:this.state.oneExpense,name:"oneExpense",onChange:this.handleInputChange,placeholder:"enter your expense"}),r.a.createElement("button",{onClick:this.handleFormSubmit},"Submit")))}}]),a}(n.Component),h=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("table",{className:"table table-hover table-striped table-sm"},r.a.createElement("thead",{className:"thead-light"},r.a.createElement("tr",null,r.a.createElement("th",{scope:"col"},"Expense History"))),r.a.createElement("tbody",null,this.props.expenseList.map((function(e){return r.a.createElement("tr",null,e.value)}))))}}]),a}(n.Component),E=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={expenseList:[]},e.addExpense=function(t){e.setState({expenseList:[].concat(Object(l.a)(e.state.expenseList),[t])})},e}return Object(i.a)(a,[{key:"render",value:function(){return console.log(this.state.expenseList),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"container-fluid"},r.a.createElement("div",{className:"jumbotron jumbotron-fluid"},r.a.createElement("div",{className:"container"},r.a.createElement("h1",{className:"display-4"},"React Budget Tracker"),r.a.createElement("p",{className:"lead"},"A reflection of your spending habits..."))),r.a.createElement(d,{addExpense:this.addExpense}),r.a.createElement(h,{expenseList:this.state.expenseList})))}}]),a}(n.Component);a(15);var b=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(E,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(b,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},9:function(e,t,a){e.exports=a(16)}},[[9,1,2]]]);
//# sourceMappingURL=main.0e3281e0.chunk.js.map