(this["webpackJsonpto-do-list"]=this["webpackJsonpto-do-list"]||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),o=n(3),r=n.n(o),s=(n(14),n(6)),l=n(4),c=n(5),d=n(1),h=n(8),u=n(7),p=(n(15),function(e){Object(h.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this)).state={toDoList:[],title:"",description:""},a.handleChange=a.handleChange.bind(Object(d.a)(a)),a.handleAddItem=a.handleAddItem.bind(Object(d.a)(a)),a}return Object(c.a)(n,[{key:"render",value:function(){return i.a.createElement("div",{className:"App"}," ",i.a.createElement("hr",null),"Title: \xa0",i.a.createElement("input",{type:"text",name:"title",placeholder:"title",value:this.state.title,required:!0,onChange:this.handleChange}),i.a.createElement("br",null),"Description: ",i.a.createElement("br",null),i.a.createElement("textarea",{name:"description",value:this.state.description,placeholder:"description",cols:"50",onChange:this.handleChange}),i.a.createElement("br",null),i.a.createElement("button",{name:"add",onClick:this.handleAddItem},"Add ToDo Item"),i.a.createElement("hr",null))}},{key:"handleChange",value:function(e){"title"===e.target.name?this.setState({title:e.target.value}):"description"===e.target.name&&this.setState({description:e.target.value})}},{key:"handleAddItem",value:function(e){if("add"===e.target.name)if(""!==this.state.title){var t={title:this.state.title,description:this.state.description,creation:Date.now()};this.setState({title:"",description:""});var n=[].concat(Object(s.a)(this.state.toDoList),[t]);this.setState({toDoList:n}),alert(t.title+"\n"+t.description+"\n"+t.creation),console.log(this.state.toDoList)}else alert("Title is empty")}}]),n}(i.a.Component)),f=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function g(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}r.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(p,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/classExamples/toDoList/step1",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/classExamples/toDoList/step1","/service-worker.js");f?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):g(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):g(t,e)}))}}()},9:function(e,t,n){e.exports=n(16)}},[[9,1,2]]]);
//# sourceMappingURL=main.e5bbb6ef.chunk.js.map