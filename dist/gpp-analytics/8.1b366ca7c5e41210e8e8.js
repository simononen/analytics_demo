(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"30aL":function(t,e,i){"use strict";i.r(e),i.d(e,"DistributionModule",function(){return u});var n=i("SVse"),r=i("iInd"),s=i("8Y7J");let b=(()=>{class t{constructor(t){this.el=t}ngOnInit(){this.setUpViz()}setUpViz(){const t=this.el.nativeElement.querySelector("#value");this.tableauViz=new tableau.Viz(t,"https://public.tableau.com/views/agric_fds/ContractDistibutions-value?:language=en&:display_count=y&:toolbar=n&:origin=viz_share_link",{hideTabs:!0,hideToolbar:!1})}}return t.\u0275fac=function(e){return new(e||t)(s.Cb(s.l))},t.\u0275cmp=s.wb({type:t,selectors:[["app-distrbution-value"]],decls:6,vars:0,consts:[[1,"flex","bg-gray-500"],[1,"text-white","py-2","pl-8"],["routerLink","/distribution"],[1,"flex","justify-center"],["id","value"]],template:function(t,e){1&t&&(s.Fb(0,"div",0),s.Fb(1,"h2",1),s.Fb(2,"a",2),s.Pb(3,"CONTRACT DISTRIBUTIONS"),s.Eb(),s.Eb(),s.Eb(),s.Fb(4,"div",3),s.Db(5,"div",4),s.Eb())},directives:[r.a],styles:[""]}),t})();const o=[{path:"",component:(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=s.wb({type:t,selectors:[["app-distribution"]],decls:12,vars:0,consts:[[1,"flex","bg-gray-500"],[1,"text-white","py-2","pl-8"],["routerLink","/distribution"],[1,"px-8","py-16"],[1,"grid","md:grid-cols-2","gap-10"],[1,"card","hover:shadow-lg","flex","justify-center","font-bold","text-xl","items-center"],["routerLink","/distribution/number"],["routerLink","/distribution/value"]],template:function(t,e){1&t&&(s.Fb(0,"div",0),s.Fb(1,"h2",1),s.Fb(2,"a",2),s.Pb(3,"CONTRACT DISTRIBUTIONS"),s.Eb(),s.Eb(),s.Eb(),s.Fb(4,"div",3),s.Fb(5,"div",4),s.Fb(6,"div",5),s.Fb(7,"a",6),s.Pb(8,"Distribution to Local Providers By Number"),s.Eb(),s.Eb(),s.Fb(9,"div",5),s.Fb(10,"a",7),s.Pb(11,"Distribution to Local Providers By Value"),s.Eb(),s.Eb(),s.Eb(),s.Eb())},directives:[r.a],styles:[""]}),t})()},{path:"number",component:(()=>{class t{constructor(t){this.el=t}ngOnInit(){this.setUpViz()}setUpViz(){const t=this.el.nativeElement.querySelector("#number");this.tableauViz=new tableau.Viz(t,"https://public.tableau.com/views/agric_fds/ContractDistibutions-number?:language=en&:display_count=y&:toolbar=n&:origin=viz_share_link",{hideTabs:!0,hideToolbar:!1})}}return t.\u0275fac=function(e){return new(e||t)(s.Cb(s.l))},t.\u0275cmp=s.wb({type:t,selectors:[["app-distribution-number"]],decls:6,vars:0,consts:[[1,"flex","bg-gray-500"],[1,"text-white","py-2","pl-8"],["routerLink","/distribution"],[1,"flex","justify-center"],["id","number"]],template:function(t,e){1&t&&(s.Fb(0,"div",0),s.Fb(1,"h2",1),s.Fb(2,"a",2),s.Pb(3,"CONTRACT DISTRIBUTIONS"),s.Eb(),s.Eb(),s.Eb(),s.Fb(4,"div",3),s.Db(5,"div",4),s.Eb())},directives:[r.a],styles:[""]}),t})()},{path:"value",component:b}];let a=(()=>{class t{}return t.\u0275mod=s.Ab({type:t}),t.\u0275inj=s.zb({factory:function(e){return new(e||t)},imports:[[r.b.forChild(o)],r.b]}),t})(),u=(()=>{class t{}return t.\u0275mod=s.Ab({type:t}),t.\u0275inj=s.zb({factory:function(e){return new(e||t)},imports:[[n.b,a]]}),t})()}}]);