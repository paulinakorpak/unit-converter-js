var y=(e,i,t)=>{let n=r=>i.reduce((l,o)=>`${l} <option ${o===r?"selected":""}>${o}</option>`,""),c=r=>t.reduce((l,o)=>`${l} <option ${o===r?"selected":""}>${o}</option>`,"");return`
      <div class="container-sm d-flex justify-content-center align-items-center">
          <div class="wrapper d-flex flex-column">
              <h1 class="text-primary text-uppercase text-center">Unit Converter JS</h1>
              <select class="unit-category form-select text-secondary">
                  ${n(e.category)}
              </select>
              <div class="unit-from row">
                  <div class="col">
                      <input class="form-control text-secondary" type="number" placeholder="0">
                  </div>
                  <div class="col">
                      <select class="unit-select form-select text-secondary" data-key="unitFrom">
                          ${c(e.unitFrom)}
                      </select>
                  </div>
              </div>
              <div class="unit-to row">
                  <div class="col">
                      <input class="form-control text-secondary" type="number" disabled="disabled" placeholder="0">
                  </div>
                  <div class="col">
                      <select class="unit-select form-select text-secondary" data-key="unitTo">
                          ${c(e.unitTo)}
                      </select>
                  </div>
              </div>
          </div>
      </div>
  `};var g=(e,i)=>{let t={category:"length",unitFrom:"meter",unitTo:"kilometer"},n=null,c=null,r=null,l=null,o=s=>{t.category=s.target.value,t.unitFrom=null,t.unitTo=null,d()},u=s=>{t[s.target.dataset.key]=s.target.value,m()},m=()=>{l.value=i.calculate(t.category,t.unitFrom,t.unitTo,parseFloat(r.value))},d=()=>{e.innerHTML=y(t,i.getCategories(),i.getUnitsByCategory(t.category)),n=e.querySelector(".unit-category"),c=e.querySelectorAll(".unit-select"),r=e.querySelector(".unit-from input"),l=e.querySelector(".unit-to input"),n.addEventListener("change",o),Array.from(c).map(s=>s.addEventListener("change",u)),r.addEventListener("keyup",m)};return{render:d}};var a={length:{centimeter:{centimeter:e=>e,meter:e=>e/100,kilometer:e=>e/1e5,mile:e=>e*62137e-10,yard:e=>e*.010936,foot:e=>e*.032808},meter:{centimeter:e=>e/.01,meter:e=>e,kilometer:e=>e/1e3,mile:e=>e*62137e-8,yard:e=>e*1.0936,foot:e=>e*3.2808},kilometer:{centimeter:e=>e*1e5,meter:e=>e*1e3,kilometer:e=>e,mile:e=>e*.62137,yard:e=>e*1093.6,foot:e=>e*3280.8},mile:{centimeter:e=>e/62137e-10,meter:e=>e/62137e-8,kilometer:e=>e/.62137,mile:e=>e,yard:e=>e*1760,foot:e=>e*5280},yard:{centimeter:e=>e/.010936,meter:e=>e/1.0936,kilometer:e=>e/1093.6,mile:e=>e*56818e-8,yard:e=>e,foot:e=>e*3},foot:{centimeter:e=>e/.032808,meter:e=>e/3.2808,kilometer:e=>e/3280.8,mile:e=>e*18939e-8,yard:e=>e*.33333,foot:e=>e}},area:{squereMeter:{squereMeter:e=>e,squereKilometer:e=>e/1e6,ar:e=>e/100,hectare:e=>e/1e4},squereKilometer:{squereMeter:e=>e*1e6,squereKilometer:e=>e,ar:e=>e*1e4,hectare:e=>e*100},ar:{squereMeter:e=>e*100,squereKilometer:e=>e/1e4,ar:e=>e,hectare:e=>e/100},hectare:{squereMeter:e=>e/1e4,squereKilometer:e=>e/100,ar:e=>e*100,hectare:e=>e}},weight:{gram:{gram:e=>e,kilogram:e=>e*1e3,ton:e=>e*1e6},kilogram:{gram:e=>e/1e3,kilogram:e=>e,ton:e=>e*1e3},ton:{gram:e=>e/1e6,kilogram:e=>e/1e3,ton:e=>e}},temperature:{celsius:{celsius:e=>e,kelvin:e=>e+273.15,farenheit:e=>e*1.8+32},kelvin:{celsius:e=>e-273.15,kelvin:e=>e,farenheit:e=>e*9/5-459.67},farenheit:{celsius:e=>(e-32)*5/9,kelvin:e=>(e+459.67)*5/9,farenheit:e=>e}}};var p=()=>({getCategories:()=>Object.keys(a),getUnitsByCategory:n=>Object.keys(a[n]),calculate:(n,c,r,l)=>{let o=a[n][c][r](l);return Math.round(o*1e4)/1e4}});var v=document.querySelector(".app"),f=p();g(v,f).render();
