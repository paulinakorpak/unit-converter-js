var g=(e,c,t)=>{let n=r=>c.reduce((i,o)=>`${i} <option ${o===r?"selected":""}>${o}</option>`,""),s=r=>t.reduce((i,o)=>`${i} <option ${o===r?"selected":""}>${o}</option>`,"");return`
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
                          ${s(e.unitFrom)}
                      </select>
                  </div>
              </div>
              <div class="unit-to row">
                  <div class="col">
                      <input class="form-control text-secondary" type="number" disabled="disabled" placeholder="0">
                  </div>
                  <div class="col">
                      <select class="unit-select form-select text-secondary" data-key="unitTo">
                          ${s(e.unitTo)}
                      </select>
                  </div>
              </div>
          </div>
      </div>
  `};var p=(e,c)=>{let t={category:"length",unitFrom:"centimeter",unitTo:"meter"},n=null,s=null,r=null,i=null,o=l=>{t.category=l.target.value;let y=c.getUnitsByCategory(t.category);t.unitFrom=y[0],t.unitTo=y[1],d()},m=l=>{t[l.target.dataset.key]=l.target.value,u()},u=()=>{i.value=c.calculate(t.category,t.unitFrom,t.unitTo,parseFloat(r.value))},d=()=>{e.innerHTML=g(t,c.getCategories(),c.getUnitsByCategory(t.category)),n=e.querySelector(".unit-category"),s=e.querySelectorAll(".unit-select"),r=e.querySelector(".unit-from input"),i=e.querySelector(".unit-to input"),n.addEventListener("change",o),Array.from(s).map(l=>l.addEventListener("change",m)),r.addEventListener("keyup",u)};return{render:d}};var a={length:{centimeter:{centimeter:e=>e,meter:e=>e/100,kilometer:e=>e/1e5,mile:e=>e*62137e-10,yard:e=>e*.010936133,foot:e=>e*.032808399},meter:{centimeter:e=>e*100,meter:e=>e,kilometer:e=>e/1e3,mile:e=>e*.000621371192,yard:e=>e*1.0936133,foot:e=>e*3.2808399},kilometer:{centimeter:e=>e*1e5,meter:e=>e*1e3,kilometer:e=>e,mile:e=>e*.621371192,yard:e=>e*1093.6133,foot:e=>e*3280.8399},mile:{centimeter:e=>e*160934.4,meter:e=>e*1609.344,kilometer:e=>e*1.609344,mile:e=>e,yard:e=>e*1760,foot:e=>e*5280},yard:{centimeter:e=>e*91.44,meter:e=>e*.9144,kilometer:e=>e*9144e-7,mile:e=>e/1760,yard:e=>e,foot:e=>e*3},foot:{centimeter:e=>e*30.48,meter:e=>e*.3048,kilometer:e=>e*3048e-7,mile:e=>e/5280,yard:e=>e/3,foot:e=>e}},area:{squereMeter:{squereMeter:e=>e,squereKilometer:e=>e/1e6,ar:e=>e/100,hectare:e=>e/1e4},squereKilometer:{squereMeter:e=>e*1e6,squereKilometer:e=>e,ar:e=>e*1e4,hectare:e=>e*100},ar:{squereMeter:e=>e*100,squereKilometer:e=>e/1e4,ar:e=>e,hectare:e=>e/100},hectare:{squereMeter:e=>e*1e4,squereKilometer:e=>e/100,ar:e=>e*100,hectare:e=>e}},weight:{gram:{gram:e=>e,kilogram:e=>e*.001,ton:e=>e*110231131e-14},kilogram:{gram:e=>e*1e3,kilogram:e=>e,ton:e=>e/1e3},ton:{gram:e=>e*1e6,kilogram:e=>e*1e3,ton:e=>e}},temperature:{celsius:{celsius:e=>e,kelvin:e=>e+273.15,farenheit:e=>e*1.8+32},kelvin:{celsius:e=>e-273.15,kelvin:e=>e,farenheit:e=>(e-273.15)*9/5+32},farenheit:{celsius:e=>(e-32)/1.8,kelvin:e=>(e+459.67)/1.8,farenheit:e=>e}},time:{millisecond:{millisecond:e=>e,second:e=>e/1e3,minute:e=>e*16667e-9,hour:e=>e*278e-9,day:e=>e*11574074e-15},second:{millisecond:e=>e*1e3,second:e=>e,minute:e=>e/60,hour:e=>e*278e-6,day:e=>e*115740741e-13},minute:{millisecond:e=>e*6e4,second:e=>e*60,minute:e=>e,hour:e=>e*.0166666667,day:e=>e*.000694444444},hour:{millisecond:e=>e*36e5,second:e=>e*3600,minute:e=>e*60,hour:e=>e,day:e=>e*.0416666667},day:{millisecond:e=>e*864e5,second:e=>e*86400,minute:e=>e*1440,hour:e=>e*24,day:e=>e}}};var v=()=>({getCategories:()=>Object.keys(a),getUnitsByCategory:n=>Object.keys(a[n]),calculate:(n,s,r,i)=>{let o=a[n][s][r](i);return Math.round(o*1e10)/1e10}});var f=document.querySelector(".app"),h=v();p(f,h).render();
