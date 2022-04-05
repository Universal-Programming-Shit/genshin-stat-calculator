import{d as G,u as S}from"./index.7e18aaef.js";var E=(A=>(A.NONE="NONE",A.CRIT_RATE="CRIT_RATE",A.CRIT_DAMAGE="CRIT_DAMAGE",A.ELEMENTAL_DAMAGE="ELEMENTAL_DAMAGE",A.HEALING_BONUS="HEALING_BONUS",A.ATTACK_FLAT="ATTACK_FLAT",A.ATTACK_PERC="ATTACK_PERC",A.HP_FLAT="HP_FLAT",A.HP_PERC="HP_PERC",A.DEF_FLAT="DEF_FLAT",A.DEF_PERC="DEF_PERC",A.ENERGY_RECHARGE="ENERGY_RECHARGE",A.ELEMENTAL_MASTERY="ELEMENTAL_MASTERY",A.PHYSICAL_DAMAGE="PHYSICAL_DAMAGE",A))(E||{});const N=A=>A==="CRIT_RATE"||A==="CRIT_DAMAGE"||A==="ELEMENTAL_DAMAGE"||A==="HEALING_BONUS"||A==="PHYSICAL_DAMAGE"||A==="ATTACK_PERC"||A==="HP_PERC"||A==="DEF_PERC"||A==="ENERGY_RECHARGE";function c(A){switch(A){case"NONE":return"";case"CRIT_RATE":return"Crit Rate";case"CRIT_DAMAGE":return"Crit Damage";case"ELEMENTAL_DAMAGE":return"Elemental Damage";case"HEALING_BONUS":return"Healing Bonus";case"ATTACK_FLAT":return"Flat Attack";case"ATTACK_PERC":return"Attack%";case"HP_FLAT":return"Flat Hp";case"HP_PERC":return"Hp%";case"DEF_FLAT":return"Flat Def";case"DEF_PERC":return"Def%";case"ENERGY_RECHARGE":return"Energy Recharge";case"ELEMENTAL_MASTERY":return"Elemental Mastery";case"PHYSICAL_DAMAGE":return"Physical Damage"}}var e=(A=>(A[A.S1=1]="S1",A[A.S2=2]="S2",A[A.S3=3]="S3",A[A.S4=4]="S4",A[A.S5=5]="S5",A))(e||{}),T=(A,C,P)=>n=>(C-A)/P*n+A;const H={[e.S3]:{[E.HP_FLAT]:T(430,1893,12),[E.ATTACK_FLAT]:T(28,123,12),[E.HP_PERC]:T(.052,.231,12),[E.ATTACK_PERC]:T(.052,.0231,12),[E.DEF_PERC]:T(.066,.288,12),[E.PHYSICAL_DAMAGE]:T(.066,.288,12),[E.ELEMENTAL_DAMAGE]:T(.052,.231,12),[E.ELEMENTAL_MASTERY]:T(21,92,12),[E.ENERGY_RECHARGE]:T(.058,.256,12),[E.CRIT_RATE]:T(.035,.154,12),[E.CRIT_DAMAGE]:T(.07,.308,12),[E.HEALING_BONUS]:T(.04,.178,12)},[e.S4]:{[E.HP_FLAT]:T(645,3571,16),[E.ATTACK_FLAT]:T(42,232,16),[E.HP_PERC]:T(.063,.348,16),[E.ATTACK_PERC]:T(.063,.348,16),[E.DEF_PERC]:T(.079,.435,16),[E.PHYSICAL_DAMAGE]:T(.079,.435,16),[E.ELEMENTAL_DAMAGE]:T(.063,.348,16),[E.ELEMENTAL_MASTERY]:T(25,139,16),[E.ENERGY_RECHARGE]:T(.07,.387,16),[E.CRIT_RATE]:T(.042,.232,16),[E.CRIT_DAMAGE]:T(.084,.464,16),[E.HEALING_BONUS]:T(.048,.268,16)},[e.S5]:{[E.HP_FLAT]:T(717,4780,20),[E.ATTACK_FLAT]:T(47,311,20),[E.HP_PERC]:T(.07,.466,20),[E.ATTACK_PERC]:T(.07,.466,20),[E.DEF_PERC]:T(.087,.583,20),[E.PHYSICAL_DAMAGE]:T(.087,.583,20),[E.ELEMENTAL_DAMAGE]:T(.07,.466,20),[E.ELEMENTAL_MASTERY]:T(28,187,20),[E.ENERGY_RECHARGE]:T(.078,.518,20),[E.CRIT_RATE]:T(.047,.311,20),[E.CRIT_DAMAGE]:T(.093,.622,20),[E.HEALING_BONUS]:T(.054,.359,20)}},M={[e.S3]:{[E.HP_FLAT]:143.4,[E.ATTACK_FLAT]:9.34,[E.DEF_FLAT]:11.11,[E.HP_PERC]:.035,[E.ATTACK_PERC]:.035,[E.DEF_PERC]:.0437,[E.ELEMENTAL_MASTERY]:13.99,[E.ENERGY_RECHARGE]:.0389,[E.CRIT_RATE]:.0233,[E.CRIT_DAMAGE]:.0466},[e.S4]:{[E.HP_FLAT]:239,[E.ATTACK_FLAT]:15.56,[E.DEF_FLAT]:18.52,[E.HP_PERC]:.0466,[E.ATTACK_PERC]:.0466,[E.DEF_PERC]:.0583,[E.ELEMENTAL_MASTERY]:18.56,[E.ENERGY_RECHARGE]:.0518,[E.CRIT_RATE]:.0311,[E.CRIT_DAMAGE]:.0622},[e.S5]:{[E.HP_FLAT]:298.75,[E.ATTACK_FLAT]:19.45,[E.DEF_FLAT]:23.15,[E.HP_PERC]:.0583,[E.ATTACK_PERC]:.0583,[E.DEF_PERC]:.0729,[E.ELEMENTAL_MASTERY]:23.31,[E.ENERGY_RECHARGE]:.0648,[E.CRIT_RATE]:.0389,[E.CRIT_DAMAGE]:.0777}};var _=(A=>(A.FLOWER="Flower",A.FEATHER="Feather",A.SANDS="Sands",A.GOBLET="Goblet",A.CIRCLET="Circlet",A))(_||{}),s=(A,C)=>A+C;const R=(A,C)=>{const P=C==null?void 0:C.filter(t=>t.mainStat===A).map(t=>{var r,L,a;return(a=(L=(r=H[t.stars])==null?void 0:r[t.mainStat])==null?void 0:L.call(r,t.level))!=null?a:0}).reduce(s,0),n=C.flatMap(t=>t.subStats.filter(r=>r.type===A).map(r=>r.rolls.map(L=>{var a,F;return L*((F=(a=M[t.stars])==null?void 0:a[r.type])!=null?F:0)}).reduce(s,0))).reduce(s,0);return P+n},i=G("artifact",{state:()=>S("artifact",{[_.FLOWER]:{type:_.FLOWER,stars:e.S5,level:1,mainStat:E.HP_FLAT,subStats:[{},{},{},{}]},[_.FEATHER]:{type:_.FEATHER,stars:e.S5,level:1,mainStat:E.ATTACK_FLAT,subStats:[{},{},{},{}]},[_.SANDS]:{type:_.SANDS,stars:e.S5,level:1,mainStat:E.HP_PERC,subStats:[{},{},{},{}]},[_.GOBLET]:{type:_.GOBLET,stars:e.S5,level:1,mainStat:E.HP_PERC,subStats:[{},{},{},{}]},[_.CIRCLET]:{type:_.CIRCLET,stars:e.S5,level:1,mainStat:E.HP_PERC,subStats:[{},{},{},{}]}}),getters:{artifacts:function(A){return[A[_.FLOWER],A[_.FEATHER],A[_.SANDS],A[_.GOBLET],A[_.CIRCLET]]},atkPerc(){return R(E.ATTACK_PERC,this.artifacts)},atkFlat(){return R(E.ATTACK_FLAT,this.artifacts)},defPerc(){return R(E.DEF_PERC,this.artifacts)},defFlat(){return R(E.DEF_FLAT,this.artifacts)},critRate(){return R(E.CRIT_RATE,this.artifacts)},critDamage(){return R(E.CRIT_DAMAGE,this.artifacts)},hpPerc(){return R(E.HP_PERC,this.artifacts)},hpFlat(){return R(E.HP_FLAT,this.artifacts)},elementalDamage(){return R(E.ELEMENTAL_DAMAGE,this.artifacts)},physicalDamage(){return R(E.PHYSICAL_DAMAGE,this.artifacts)},energyRecharge(){return R(E.ENERGY_RECHARGE,this.artifacts)},elementalMastery(){return R(E.ELEMENTAL_MASTERY,this.artifacts)},healingBonus(){return R(E.HEALING_BONUS,this.artifacts)}}});export{_ as A,E as S,s as a,e as b,N as i,H as m,M as s,c as t,i as u};