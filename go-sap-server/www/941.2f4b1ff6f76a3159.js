"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[941],{8941:(q,w,c)=>{c.r(w),c.d(w,{CharacterDetailPage:()=>O});var v,o=c(9212),h=c(6814),x=c(95),u=c(1379),M=c(6290),t=c(9923),m=function(a,s){var i=function(){if(typeof window>"u")return new Map;if(!v){var a=window;a.Ionicons=a.Ionicons||{},v=a.Ionicons.map=a.Ionicons.map||new Map}return v}(),n=i.get(a);void 0===n?i.set(a,s):n!==s&&console.warn('[Ionicons Warning]: Multiple icons were mapped to name "'.concat(a,'". Ensure that multiple icons are not mapped to the same icon name.'))};function V(a,s){if(1&a&&o._UZ(0,"img",12),2&a){const i=o.oxw(2);o.Q6J("src",i.character.image,o.LSH)}}function C(a,s){1&a&&(o.TgZ(0,"p"),o._uU(1,"Cargando imagen del personaje"),o.qZA())}function A(a,s){1&a&&(o.TgZ(0,"p"),o._uU(1,"Personaje"),o.qZA())}function y(a,s){if(1&a&&(o.TgZ(0,"ion-col",13)(1,"ion-card")(2,"ion-card-content",14)(3,"strong"),o._uU(4),o.qZA(),o.TgZ(5,"p"),o._uU(6),o.qZA(),o.TgZ(7,"p"),o._uU(8),o.ALo(9,"date"),o.qZA()()()()),2&a){const i=s.$implicit;o.xp6(4),o.Oqu(i.name),o.xp6(2),o.Oqu(i.episode),o.xp6(2),o.hij("Fecha de emision: ",o.xi3(9,3,i.air_date,"dd/mm/yyyy"),"")}}function S(a,s){if(1&a&&(o.TgZ(0,"div",6)(1,"ion-avatar"),o.YNc(2,V,1,1)(3,C,2,0)(4,A,2,0),o.EqZ(5,2,null,3,4),o.BYR(0,-1),o.qZA(),o.TgZ(7,"h1"),o._uU(8),o.qZA(),o.TgZ(9,"div"),o._uU(10),o.qZA(),o.TgZ(11,"ion-item",7),o._UZ(12,"ion-icon",8),o.TgZ(13,"ion-label"),o._uU(14," Visto por primera vez "),o.TgZ(15,"strong"),o._uU(16),o.qZA()()(),o.TgZ(17,"ion-item",7),o._UZ(18,"ion-icon",8),o.TgZ(19,"ion-label"),o._uU(20," Visto por ultima vez "),o.TgZ(21,"strong"),o._uU(22),o.qZA()()(),o.TgZ(23,"ion-item",9),o._UZ(24,"ion-icon",10),o.TgZ(25,"ion-label"),o._uU(26,"Episodios donde aparece"),o.qZA(),o._UZ(27,"ion-icon",11),o.qZA(),o.TgZ(28,"ion-grid")(29,"ion-row"),o.SjG(30,y,10,6,"ion-col",13,o.ikw),o.qZA()()()),2&a){const i=o.oxw();o.xp6(8),o.Oqu(i.character.name),o.xp6(2),o.hij("Estatus: ","Alive"==i.character.status?"Vivo":"Muerto",""),o.xp6(6),o.hij(" ",i.character.origin.name,""),o.xp6(6),o.hij(" ",i.character.location.name,""),o.xp6(8),o.wJu(i.episodes)}}function j(a,s){1&a&&(o.TgZ(0,"div",15),o._UZ(1,"ion-spinner",16),o.qZA())}let O=(()=>{var a;class s{constructor(){this._actRoute=(0,o.f3M)(u.gz),this._randm=(0,o.f3M)(M.U),this.characterId="",this.character=null,this.episodes=[],function(a){Object.keys(a).forEach(function(s){m(s,a[s]);var i=s.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g,"$1-$2").toLowerCase();s!==i&&m(i,a[s])})}({locationOutline:"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M256 48c-79.5 0-144 61.39-144 137 0 87 96 224.87 131.25 272.49a15.77 15.77 0 0025.5 0C304 409.89 400 272.07 400 185c0-75.61-64.5-137-144-137z' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none ionicon-stroke-width'/><circle cx='256' cy='192' r='48' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none ionicon-stroke-width'/></svg>",videocamOutline:"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M374.79 308.78L457.5 367a16 16 0 0022.5-14.62V159.62A16 16 0 00457.5 145l-82.71 58.22A16 16 0 00368 216.3v79.4a16 16 0 006.79 13.08z' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none ionicon-stroke-width'/><path d='M268 384H84a52.15 52.15 0 01-52-52V180a52.15 52.15 0 0152-52h184.48A51.68 51.68 0 01320 179.52V332a52.15 52.15 0 01-52 52z' stroke-miterlimit='10' class='ionicon-fill-none ionicon-stroke-width'/></svg>",chevronDown:"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 184l144 144 144-144' class='ionicon-fill-none'/></svg>"}),this.characterId=this._actRoute.snapshot.paramMap.get("id"),console.log(this.characterId)}ngOnInit(){}ionViewDidEnter(){this.getCharacter()}getCharacter(){this._randm.getCharacterById(this.characterId).subscribe({next:n=>{this.character=n,this.getEpisodes()},error:n=>{}})}getEpisodes(){for(let n of this.character.episode)this._randm.getByUrl(n).subscribe({next:l=>{console.log(l),this.episodes.push(l)},error:l=>{}})}}return(a=s).\u0275fac=function(n){return new(n||a)},a.\u0275cmp=o.Xpm({type:a,selectors:[["app-character-detail"]],standalone:!0,features:[o.jDz],decls:8,vars:1,consts:[["mode","md"],["slot","start"],["defaultHref","/home"],["mode","ios"],[1,"glass-content","ion-padding"],["class","ion-text-center ion-padding-top"],[1,"ion-text-center","ion-padding-top"],["lines","none"],["slot","start","name","location-outline"],["lines","none",1,"ion-margin-top"],["slot","start","name","videocam-outline"],["slot","end","name","chevron-down"],[3,"src"],["sizeLg","4","sizeMd","6","sizeSm","6","size","12"],[1,"ion-text-start"],[1,"loader"],["name","crescent"]],template:function(n,l){1&n&&(o.TgZ(0,"ion-header",0)(1,"ion-toolbar")(2,"ion-buttons",1),o._UZ(3,"ion-back-button",2),o.qZA()()(),o.TgZ(4,"ion-content",3)(5,"div",4),o.YNc(6,S,32,4,"div",5)(7,j,2,0),o.qZA()()),2&n&&(o.xp6(6),o.um2(6,l.character?6:7))},dependencies:[t.Gu,t.sr,t.W2,t.Sm,t.oU,h.ez,h.uU,x.u5,t.BJ,t.Ie,t.Q$,t.gu,t.jY,t.Nd,t.wI,t.PM,t.FN,t.PQ],styles:["ion-avatar[_ngcontent-%COMP%]{width:100%;height:auto;max-width:200px;max-height:200px;margin:0 auto;--border-radius: 20px}"]}),s})()}}]);