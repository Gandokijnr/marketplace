import{_ as L}from"./indexPage-C9TRW-eI.js";import{r as i,l as C,v as N,P as R,b as u,x as S,o as r,c as n,d as t,e as a,F as w,y as B,z as D,f as F,A as V,t as h,k as j,R as $}from"./index-Ddae1Fuk.js";import"./indexNavbar-CNeR40ux.js";import"firebase/app";const z={class:"main-recent-item mt-5 p-2"},A=a("span",{class:"text-3xl font-bold text-gray-400"},"Laptops",-1),E={key:0,class:"main-items grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6"},M=["src","alt"],T={class:"mb-3 font-medium"},U={class:"flex justify-between items-center"},q={class:"font-semibold text-xl"},G=["href"],H={key:1,class:"mt-20 flex justify-evenly"},g=24,X={__name:"Laptops",setup(I){const p=i([]),l=i(0),d=i([]),v=i(1);C(()=>{setTimeout(()=>{f()},1e3)}),i([{src:"/prada.png",alt:"Prada"},{src:"/pay on delivery.png",alt:"Pay on delivery"},{src:"/visa.png",alt:"visa"},{src:"/master card.png",alt:"master card"},{src:"/interswitch.png",alt:"interswitch"}]);const _=N(()=>{const e=l.value*g,c=e+g;return p.value.slice(e,c)}),P=e=>{d.value[e]=!d.value[e]},k=e=>{l.value=e.page,f()},f=()=>{R.getProductsSmall().then(e=>{p.value=e,v.value=e.length})};return(e,c)=>{const b=u("Button"),o=u("Skeleton"),y=u("Paginator"),x=S("animateonscroll");return r(),n(w,null,[t(L),a("div",z,[A,_.value.length>0?(r(),n("div",E,[(r(!0),n(w,null,B(_.value,(s,m)=>D((r(),n("div",{key:m,class:"border-1 surface-border border-round m-2 p-3 hover:shadow-lg"},[t(V($),{to:{name:"detailspage",params:{id:s.id}},class:"mb-3 relative cursor-pointer"},{default:F(()=>[a("img",{src:"https://primefaces.org/cdn/primevue/images/product/"+s.image,alt:s.name,class:"border-round w-full"},null,8,M)]),_:2},1032,["to"]),a("div",T,h(s.name),1),a("div",U,[a("div",q,"₦"+h(s.price),1),a("div",null,[t(b,{icon:"pi pi-heart",severity:"secondary",outlined:"",class:"border p-2 rounded"}),d.value[m]?(r(),n("a",{key:0,href:"tel:"+s.phone,class:"absolute bg-green-600 rounded p-2 mt-12 -ml-12 font-semibold text-white"},h(s.phone),9,G)):j("",!0),t(b,{icon:"pi pi-phone",class:"ml-2 bg-green-500 p-2 rounded text-white",onClick:J=>P(m)},null,8,["onClick"])])])])),[[x,{enterClass:"fadein"}]])),128))])):(r(),n("div",H,[t(o,{width:"10rem",height:"10rem",class:"mb-2"}),t(o,{width:"10rem",height:"10rem",class:"mb-2"}),t(o,{width:"10rem",height:"10rem",class:"mb-2"}),t(o,{width:"10rem",height:"10rem",class:"mb-2"}),t(o,{width:"10rem",height:"10rem",class:"mb-2"}),t(o,{width:"10rem",height:"10rem",class:"mb-2"})])),t(y,{first:l.value,"onUpdate:first":c[0]||(c[0]=s=>l.value=s),rows:g,totalRecords:v.value,template:"FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink",onPage:k},null,8,["first","totalRecords"])])],64)}}};export{X as default};
