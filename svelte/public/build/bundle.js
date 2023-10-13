var app=function(){"use strict";function noop(){}function run(e){return e()}function blank_object(){return Object.create(null)}function run_all(e){e.forEach(run)}function is_function(e){return"function"==typeof e}function safe_not_equal(e,t){return e!=e?t==t:e!==t||e&&"object"==typeof e||"function"==typeof e}function is_empty(e){return 0===Object.keys(e).length}function append(e,t){e.appendChild(t)}function insert(e,t,n){e.insertBefore(t,n||null)}function detach(e){e.parentNode&&e.parentNode.removeChild(e)}function element(e){return document.createElement(e)}function text(e){return document.createTextNode(e)}function space(){return text(" ")}function listen(e,t,n,a){return e.addEventListener(t,n,a),()=>e.removeEventListener(t,n,a)}function attr(e,t,n){null==n?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function children(e){return Array.from(e.childNodes)}function set_input_value(e,t){e.value=null==t?"":t}let current_component;function set_current_component(e){current_component=e}const dirty_components=[],binding_callbacks=[];let render_callbacks=[];const flush_callbacks=[],resolved_promise=Promise.resolve();let update_scheduled=!1;function schedule_update(){update_scheduled||(update_scheduled=!0,resolved_promise.then(flush))}function add_render_callback(e){render_callbacks.push(e)}const seen_callbacks=new Set;let flushidx=0;function flush(){if(0!==flushidx)return;const e=current_component;do{try{for(;flushidx<dirty_components.length;){const e=dirty_components[flushidx];flushidx++,set_current_component(e),update(e.$$)}}catch(e){throw dirty_components.length=0,flushidx=0,e}for(set_current_component(null),dirty_components.length=0,flushidx=0;binding_callbacks.length;)binding_callbacks.pop()();for(let e=0;e<render_callbacks.length;e+=1){const t=render_callbacks[e];seen_callbacks.has(t)||(seen_callbacks.add(t),t())}render_callbacks.length=0}while(dirty_components.length);for(;flush_callbacks.length;)flush_callbacks.pop()();update_scheduled=!1,seen_callbacks.clear(),set_current_component(e)}function update(e){if(null!==e.fragment){e.update(),run_all(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(add_render_callback)}}function flush_render_callbacks(e){const t=[],n=[];render_callbacks.forEach((a=>-1===e.indexOf(a)?t.push(a):n.push(a))),n.forEach((e=>e())),render_callbacks=t}const outroing=new Set;function transition_in(e,t){e&&e.i&&(outroing.delete(e),e.i(t))}function mount_component(e,t,n,a){const{fragment:l,after_update:c}=e.$$;l&&l.m(t,n),a||add_render_callback((()=>{const t=e.$$.on_mount.map(run).filter(is_function);e.$$.on_destroy?e.$$.on_destroy.push(...t):run_all(t),e.$$.on_mount=[]})),c.forEach(add_render_callback)}function destroy_component(e,t){const n=e.$$;null!==n.fragment&&(flush_render_callbacks(n.after_update),run_all(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function make_dirty(e,t){-1===e.$$.dirty[0]&&(dirty_components.push(e),schedule_update(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function init(e,t,n,a,l,c,r,s=[-1]){const o=current_component;set_current_component(e);const p=e.$$={fragment:null,ctx:[],props:c,update:noop,not_equal:l,bound:blank_object(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(o?o.$$.context:[])),callbacks:blank_object(),dirty:s,skip_bound:!1,root:t.target||o.$$.root};r&&r(p.root);let i=!1;if(p.ctx=n?n(e,t.props||{},((t,n,...a)=>{const c=a.length?a[0]:n;return p.ctx&&l(p.ctx[t],p.ctx[t]=c)&&(!p.skip_bound&&p.bound[t]&&p.bound[t](c),i&&make_dirty(e,t)),n})):[],p.update(),i=!0,run_all(p.before_update),p.fragment=!!a&&a(p.ctx),t.target){if(t.hydrate){const e=children(t.target);p.fragment&&p.fragment.l(e),e.forEach(detach)}else p.fragment&&p.fragment.c();t.intro&&transition_in(e.$$.fragment),mount_component(e,t.target,t.anchor,t.customElement),flush()}set_current_component(o)}class SvelteComponent{$destroy(){destroy_component(this,1),this.$destroy=noop}$on(e,t){if(!is_function(t))return noop;const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const e=n.indexOf(t);-1!==e&&n.splice(e,1)}}$set(e){this.$$set&&!is_empty(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}function create_fragment(e){let t,n,a,l,c,r,s,o,p,i,d,u,_,h,f,m,b,k,g,$,v,x,y,j,C,A,E,V,w,B,T,L,N,O,S,q,D,M,H,K,P,z,F,G,I,J,Q,R,U,W,X,Y,Z,ee,te,ne,ae,le,ce,re,se,oe;return{c(){t=element("div"),t.innerHTML="<br/><br/><br/>",n=space(),a=element("div"),l=element("div"),c=space(),r=element("div"),s=element("h1"),s.textContent="Calculadora",o=space(),p=element("input"),i=space(),d=element("div"),u=element("button"),u.textContent="/",_=space(),h=element("button"),h.textContent="*",f=space(),m=element("button"),m.textContent="+",b=space(),k=element("button"),k.textContent="-",g=space(),$=element("button"),$.textContent="CE",v=space(),x=element("button"),x.textContent="AC",y=space(),j=element("br"),C=space(),A=element("button"),A.textContent="7",E=space(),V=element("button"),V.textContent="8",w=space(),B=element("button"),B.textContent="9",T=element("br"),L=space(),N=element("button"),N.textContent="4",O=space(),S=element("button"),S.textContent="5",q=space(),D=element("button"),D.textContent="6",M=element("br"),H=space(),K=element("button"),K.textContent="1",P=space(),z=element("button"),z.textContent="2",F=space(),G=element("button"),G.textContent="3",I=space(),J=element("br"),Q=space(),R=element("button"),R.textContent=".",U=space(),W=element("button"),W.textContent="0",X=space(),Y=element("button"),Y.textContent="=",Z=space(),ee=element("br"),te=space(),ne=element("br"),ae=space(),le=element("div"),ce=space(),re=element("div"),re.innerHTML="<br/><br/><br/>",attr(t,"class","fondo svelte-16e6jh"),attr(l,"class","borde svelte-16e6jh"),attr(s,"class","svelte-16e6jh"),attr(p,"type","text"),attr(p,"placeholder",e[1]),attr(p,"class","svelte-16e6jh"),attr(u,"class","operaciones svelte-16e6jh"),attr(h,"class","operaciones svelte-16e6jh"),attr(m,"class","operaciones svelte-16e6jh"),attr(k,"class","operaciones svelte-16e6jh"),attr($,"class","borrar svelte-16e6jh"),attr(x,"class","borrar svelte-16e6jh"),attr(A,"class","numeros svelte-16e6jh"),attr(V,"class","numeros svelte-16e6jh"),attr(B,"class","numeros svelte-16e6jh"),attr(N,"class","numeros svelte-16e6jh"),attr(S,"class","numeros svelte-16e6jh"),attr(D,"class","numeros svelte-16e6jh"),attr(K,"class","numeros svelte-16e6jh"),attr(z,"class","numeros svelte-16e6jh"),attr(G,"class","numeros svelte-16e6jh"),attr(R,"class","numeros svelte-16e6jh"),attr(W,"class","numeros svelte-16e6jh"),attr(Y,"class","igual svelte-16e6jh"),attr(d,"class","buttons"),attr(r,"class","calculator svelte-16e6jh"),attr(le,"class","borde svelte-16e6jh"),attr(a,"class","conteiner svelte-16e6jh"),attr(re,"class","fondo svelte-16e6jh")},m(pe,ie){insert(pe,t,ie),insert(pe,n,ie),insert(pe,a,ie),append(a,l),append(a,c),append(a,r),append(r,s),append(r,o),append(r,p),set_input_value(p,e[0]),append(r,i),append(r,d),append(d,u),append(d,_),append(d,h),append(d,f),append(d,m),append(d,b),append(d,k),append(d,g),append(d,$),append(d,v),append(d,x),append(d,y),append(d,j),append(d,C),append(d,A),append(d,E),append(d,V),append(d,w),append(d,B),append(d,T),append(d,L),append(d,N),append(d,O),append(d,S),append(d,q),append(d,D),append(d,M),append(d,H),append(d,K),append(d,P),append(d,z),append(d,F),append(d,G),append(d,I),append(d,J),append(d,Q),append(d,R),append(d,U),append(d,W),append(d,X),append(d,Y),append(r,Z),append(r,ee),append(r,te),append(r,ne),append(a,ae),append(a,le),insert(pe,ce,ie),insert(pe,re,ie),se||(oe=[listen(p,"input",e[7]),listen(p,"keydown",e[4]),listen(u,"click",e[8]),listen(h,"click",e[9]),listen(m,"click",e[10]),listen(k,"click",e[11]),listen($,"click",e[5]),listen(x,"click",e[6]),listen(A,"click",e[12]),listen(V,"click",e[13]),listen(B,"click",e[14]),listen(N,"click",e[15]),listen(S,"click",e[16]),listen(D,"click",e[17]),listen(K,"click",e[18]),listen(z,"click",e[19]),listen(G,"click",e[20]),listen(R,"click",e[21]),listen(W,"click",e[22]),listen(Y,"click",e[2])],se=!0)},p(e,[t]){2&t&&attr(p,"placeholder",e[1]),1&t&&p.value!==e[0]&&set_input_value(p,e[0])},i:noop,o:noop,d(e){e&&detach(t),e&&detach(n),e&&detach(a),e&&detach(ce),e&&detach(re),se=!1,run_all(oe)}}}function instance($$self,$$props,$$invalidate){let result=0,inputValue="",pantalla="0";function calculate(){try{result=eval(inputValue),$$invalidate(0,inputValue=result)}catch(e){result="Error",$$invalidate(0,inputValue=""),$$invalidate(1,pantalla=result)}}function Agregar(e){$$invalidate(0,inputValue+=e)}function handleKeyDown(e){"Enter"===e.key&&(e.preventDefault(),calculate())}function Borrar(){$$invalidate(0,inputValue=inputValue.slice(0,-1))}function BorrarTodo(){$$invalidate(0,inputValue="")}function input_input_handler(){inputValue=this.value,$$invalidate(0,inputValue)}const click_handler=()=>Agregar("/"),click_handler_1=()=>Agregar("*"),click_handler_2=()=>Agregar("+"),click_handler_3=()=>Agregar("-"),click_handler_4=()=>Agregar("7"),click_handler_5=()=>Agregar("8"),click_handler_6=()=>Agregar("9"),click_handler_7=()=>Agregar("4"),click_handler_8=()=>Agregar("5"),click_handler_9=()=>Agregar("6"),click_handler_10=()=>Agregar("1"),click_handler_11=()=>Agregar("2"),click_handler_12=()=>Agregar("3"),click_handler_13=()=>Agregar("."),click_handler_14=()=>Agregar("0");return[inputValue,pantalla,calculate,Agregar,handleKeyDown,Borrar,BorrarTodo,input_input_handler,click_handler,click_handler_1,click_handler_2,click_handler_3,click_handler_4,click_handler_5,click_handler_6,click_handler_7,click_handler_8,click_handler_9,click_handler_10,click_handler_11,click_handler_12,click_handler_13,click_handler_14]}class App extends SvelteComponent{constructor(e){super(),init(this,e,instance,create_fragment,safe_not_equal,{})}}var app=new App({target:document.body});return app}();
//# sourceMappingURL=bundle.js.map