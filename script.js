const accordionItemHeaders = document.querySelectorAll(".accordion-item-header");

accordionItemHeaders.forEach(accordionItemHeader => {
  accordionItemHeader.addEventListener("click", event => {
    
    // Uncomment in case you only want to allow for the display of only one collapsed item at a time!
    
    // const currentlyActiveAccordionItemHeader = document.querySelector(".accordion-item-header.active");
    // if(currentlyActiveAccordionItemHeader && currentlyActiveAccordionItemHeader!==accordionItemHeader) {
    //   currentlyActiveAccordionItemHeader.classList.toggle("active");
    //   currentlyActiveAccordionItemHeader.nextElementSibling.style.maxHeight = 0;
    // }

    accordionItemHeader.classList.toggle("active");
    const accordionItemBody = accordionItemHeader.nextElementSibling;
    if(accordionItemHeader.classList.contains("active")) {
      accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
    }
    else {
      accordionItemBody.style.maxHeight = 0;
    }
    
  });
});

/*======================= active ===========================*/

const nav = document.querySelector(".nav"),
      navList = nav.querySelectorAll("li"),
      totalNavList = navList.length,
      allSection = document.querySelectorAll(".section"),
      totalSection = allSection.length;
      for(let i=0; i<totalNavList; i++)
      {
          const a= navList[i].querySelector("a");
          a.addEventListener("click", function()
          {
            for(let j=0; j<totalNavList; j++)
            {
              navList[j].querySelector("a").classList.remove("active");
            }  
            this.classList.add("active")
            showSection(this);
          })
      }
      function showSection(element)
      {
          for(let i=0; i<totalSection; i++)
          {
              allSection[i].classList.remove("active");
          }
          const target = element.getAttribute("href").split("#")[1];
          document.querySelector("#" + target).classList.add("active")
      };

/*======================= copy ===========================*/

const btn = document.getElementById('button-copy');
const texto = document.getElementById('code');


btn.addEventListener('click', copiarTexto)
function copiarTexto(){
  navigator.clipboard.writeText(texto.innerText);
        
  btn.classList.add('active');
  setTimeout(function(){
    btn.classList.remove('active');
  },2500);
  

};

/*======================= copy ===========================*/

const carrosselBTN = document.getElementById('button-copy2');
const carrosselCODE = document.getElementById('code2');

carrosselBTN.addEventListener('click', copyText)
function copyText(){
  navigator.clipboard.writeText(carrosselCODE.innerText);
        
  carrosselBTN.classList.add('active');
  setTimeout(function(){
    carrosselBTN.classList.remove('active');
  },2500);

};

const carrosselBTN3 = document.getElementById('button-copy3');
const carrosselCODE3 = document.getElementById('code3');

carrosselBTN3.addEventListener('click', copyText3)
function copyText3(){
  navigator.clipboard.writeText(carrosselCODE3.innerText);
        
  carrosselBTN3.classList.add('active');
  setTimeout(function(){
    carrosselBTN3.classList.remove('active');
  },2500);

};

const carrosselBTN4 = document.getElementById('button-copy4');
const carrosselCODE4 = document.getElementById('code4');

carrosselBTN4.addEventListener('click', copyText4)
function copyText4(){
  navigator.clipboard.writeText(carrosselCODE4.innerText);
        
  carrosselBTN4.classList.add('active');
  setTimeout(function(){
    carrosselBTN4.classList.remove('active');
  },2500);

};

const carrosselBTN5 = document.getElementById('button-copy5');
const carrosselCODE5 = document.getElementById('code5');

carrosselBTN5.addEventListener('click', copyText5)
function copyText5(){
  navigator.clipboard.writeText(carrosselCODE5.innerText);
        
  carrosselBTN5.classList.add('active');
  setTimeout(function(){
    carrosselBTN5.classList.remove('active');
  },2500);
};

const carrosselBTN6 = document.getElementById('button-copy6');
const carrosselCODE6 = document.getElementById('code6');

carrosselBTN6.addEventListener('click', copyText6)
function copyText6(){
  navigator.clipboard.writeText(carrosselCODE6.innerText);
        
  carrosselBTN6.classList.add('active');
  setTimeout(function(){
    carrosselBTN6.classList.remove('active');
  },2500);
};

const carrosselBTN7 = document.getElementById('button-copy7');
const carrosselCODE7 = document.getElementById('code7');

carrosselBTN7.addEventListener('click', copyText7)
function copyText7(){
  navigator.clipboard.writeText(carrosselCODE7.innerText);
        
  carrosselBTN7.classList.add('active');
  setTimeout(function(){
    carrosselBTN7.classList.remove('active');
  },2500);
};

const carrosselBTN8 = document.getElementById('button-copy8');
const carrosselCODE8 = document.getElementById('code8');

carrosselBTN8.addEventListener('click', copyText8)
function copyText8(){
  navigator.clipboard.writeText(carrosselCODE8.innerText);
        
  carrosselBTN8.classList.add('active');
  setTimeout(function(){
    carrosselBTN8.classList.remove('active');
  },2500);
};

const carrosselBTN9 = document.getElementById('button-copy9');
const carrosselCODE9 = document.getElementById('code9');

carrosselBTN9.addEventListener('click', copyText9)
function copyText9(){
  navigator.clipboard.writeText(carrosselCODE9.innerText);
        
  carrosselBTN9.classList.add('active');
  setTimeout(function(){
    carrosselBTN9.classList.remove('active');
  },2500);
};

const carrosselBTN10 = document.getElementById('button-copy10');
const carrosselCODE10 = document.getElementById('code10');

carrosselBTN10.addEventListener('click', copyText10)
function copyText10(){
  navigator.clipboard.writeText(carrosselCODE10.innerText);
        
  carrosselBTN10.classList.add('active');
  setTimeout(function(){
    carrosselBTN10.classList.remove('active');
  },2500);
};

const carrosselBTN11 = document.getElementById('button-copy11');
const carrosselCODE11 = document.getElementById('code11');

carrosselBTN11.addEventListener('click', copyText11)
function copyText11(){
  navigator.clipboard.writeText(carrosselCODE11.innerText);
        
  carrosselBTN11.classList.add('active');
  setTimeout(function(){
    carrosselBTN11.classList.remove('active');
  },2500);
};

const carrosselBTN12 = document.getElementById('button-copy12');
const carrosselCODE12 = document.getElementById('code12');

carrosselBTN12.addEventListener('click', copyText12)
function copyText12(){
  navigator.clipboard.writeText(carrosselCODE12.innerText);
        
  carrosselBTN12.classList.add('active');
  setTimeout(function(){
    carrosselBTN12.classList.remove('active');
  },2500);
};

const carrosselBTN13 = document.getElementById('button-copy13');
const carrosselCODE13 = document.getElementById('code13');

carrosselBTN13.addEventListener('click', copyText13)
function copyText13(){
  navigator.clipboard.writeText(carrosselCODE13.innerText);
        
  carrosselBTN13.classList.add('active');
  setTimeout(function(){
    carrosselBTN13.classList.remove('active');
  },2500);
};

const carrosselBTN14 = document.getElementById('button-copy14');
const carrosselCODE14 = document.getElementById('code14');

carrosselBTN14.addEventListener('click', copyText14)
function copyText14(){
  navigator.clipboard.writeText(carrosselCODE14.innerText);
        
  carrosselBTN14.classList.add('active');
  setTimeout(function(){
    carrosselBTN14.classList.remove('active');
  },2500);
};

const carrosselBTN15 = document.getElementById('button-copy15');
const carrosselCODE15 = document.getElementById('code15');

carrosselBTN15.addEventListener('click', copyText15)
function copyText15(){
  navigator.clipboard.writeText(carrosselCODE15.innerText);
        
  carrosselBTN15.classList.add('active');
  setTimeout(function(){
    carrosselBTN15.classList.remove('active');
  },2500);
};

const carrosselBTN16 = document.getElementById('button-copy16');
const carrosselCODE16 = document.getElementById('code16');

carrosselBTN16.addEventListener('click', copyText16)
function copyText16(){
  navigator.clipboard.writeText(carrosselCODE16.innerText);
        
  carrosselBTN16.classList.add('active');
  setTimeout(function(){
    carrosselBTN16.classList.remove('active');
  },2500);
};

const carrosselBTN17 = document.getElementById('button-copy17');
const carrosselCODE17 = document.getElementById('code17');

carrosselBTN17.addEventListener('click', copyText17)
function copyText17(){
  navigator.clipboard.writeText(carrosselCODE17.innerText);
        
  carrosselBTN17.classList.add('active');
  setTimeout(function(){
    carrosselBTN17.classList.remove('active');
  },2500);
};

const carrosselBTN18 = document.getElementById('button-copy18');
const carrosselCODE18 = document.getElementById('code18');

carrosselBTN18.addEventListener('click', copyText18)
function copyText18(){
  navigator.clipboard.writeText(carrosselCODE18.innerText);
        
  carrosselBTN18.classList.add('active');
  setTimeout(function(){
    carrosselBTN18.classList.remove('active');
  },2500);
};

const carrosselBTN19 = document.getElementById('button-copy19');
const carrosselCODE19 = document.getElementById('code19');

carrosselBTN19.addEventListener('click', copyText19)
function copyText19(){
  navigator.clipboard.writeText(carrosselCODE19.innerText);
        
  carrosselBTN19.classList.add('active');
  setTimeout(function(){
    carrosselBTN19.classList.remove('active');
  },2500);
};

const carrosselBTN20 = document.getElementById('button-copy20');
const carrosselCODE20 = document.getElementById('code20');

carrosselBTN20.addEventListener('click', copyText20)
function copyText20(){
  navigator.clipboard.writeText(carrosselCODE20.innerText);
        
  carrosselBTN20.classList.add('active');
  setTimeout(function(){
    carrosselBTN20.classList.remove('active');
  },2500);
};

const carrosselBTN21 = document.getElementById('button-copy21');
const carrosselCODE21 = document.getElementById('code21');

carrosselBTN21.addEventListener('click', copyText21)
function copyText21(){
  navigator.clipboard.writeText(carrosselCODE21.innerText);
        
  carrosselBTN21.classList.add('active');
  setTimeout(function(){
    carrosselBTN21.classList.remove('active');
  },2500);
};

const carrosselBTN22 = document.getElementById('button-copy22');
const carrosselCODE22 = document.getElementById('code22');

carrosselBTN22.addEventListener('click', copyText22)
function copyText22(){
  navigator.clipboard.writeText(carrosselCODE22.innerText);
        
  carrosselBTN22.classList.add('active');
  setTimeout(function(){
    carrosselBTN22.classList.remove('active');
  },2500);
};

const carrosselBTN23 = document.getElementById('button-copy23');
const carrosselCODE23 = document.getElementById('code23');

carrosselBTN23.addEventListener('click', copyText23)
function copyText23(){
  navigator.clipboard.writeText(carrosselCODE23.innerText);
        
  carrosselBTN23.classList.add('active');
  setTimeout(function(){
    carrosselBTN23.classList.remove('active');
  },2500);
};

const carrosselBTN24 = document.getElementById('button-copy24');
const carrosselCODE24 = document.getElementById('code24');

carrosselBTN24.addEventListener('click', copyText24)
function copyText24(){
  navigator.clipboard.writeText(carrosselCODE24.innerText);
        
  carrosselBTN24.classList.add('active');
  setTimeout(function(){
    carrosselBTN24.classList.remove('active');
  },2500);
};

const carrosselBTN25 = document.getElementById('button-copy25');
const carrosselCODE25 = document.getElementById('code25');

carrosselBTN25.addEventListener('click', copyText25)
function copyText25(){
  navigator.clipboard.writeText(carrosselCODE25.innerText);
        
  carrosselBTN25.classList.add('active');
  setTimeout(function(){
    carrosselBTN25.classList.remove('active');
  },2500);
};

const carrosselBTN26 = document.getElementById('button-copy26');
const carrosselCODE26 = document.getElementById('code26');

carrosselBTN26.addEventListener('click', copyText26)
function copyText26(){
  navigator.clipboard.writeText(carrosselCODE26.innerText);
        
  carrosselBTN26.classList.add('active');
  setTimeout(function(){
    carrosselBTN26.classList.remove('active');
  },2500);
};

const carrosselBTN27 = document.getElementById('button-copy27');
const carrosselCODE27 = document.getElementById('code27');

carrosselBTN27.addEventListener('click', copyText27)
function copyText27(){
  navigator.clipboard.writeText(carrosselCODE27.innerText);
        
  carrosselBTN27.classList.add('active');
  setTimeout(function(){
    carrosselBTN27.classList.remove('active');
  },2500);
};

const carrosselBTN28 = document.getElementById('button-copy28');
const carrosselCODE28 = document.getElementById('code28');

carrosselBTN28.addEventListener('click', copyText28)
function copyText28(){
  navigator.clipboard.writeText(carrosselCODE28.innerText);
        
  carrosselBTN28.classList.add('active');
  setTimeout(function(){
    carrosselBTN28.classList.remove('active');
  },2500);
};

const carrosselBTN29 = document.getElementById('button-copy29');
const carrosselCODE29 = document.getElementById('code29');

carrosselBTN29.addEventListener('click', copyText29)
function copyText29(){
  navigator.clipboard.writeText(carrosselCODE29.innerText);
        
  carrosselBTN29.classList.add('active');
  setTimeout(function(){
    carrosselBTN29.classList.remove('active');
  },2500);
};

const carrosselBTN30 = document.getElementById('button-copy30');
const carrosselCODE30 = document.getElementById('code30');

carrosselBTN30.addEventListener('click', copyText30)
function copyText30(){
  navigator.clipboard.writeText(carrosselCODE30.innerText);
        
  carrosselBTN30.classList.add('active');
  setTimeout(function(){
    carrosselBTN30.classList.remove('active');
  },2500);
};

const carrosselBTN31 = document.getElementById('button-copy31');
const carrosselCODE31 = document.getElementById('code31');

carrosselBTN31.addEventListener('click', copyText31)
function copyText31(){
  navigator.clipboard.writeText(carrosselCODE31.innerText);
        
  carrosselBTN31.classList.add('active');
  setTimeout(function(){
    carrosselBTN31.classList.remove('active');
  },2500);
};

const carrosselBTN32 = document.getElementById('button-copy32');
const carrosselCODE32 = document.getElementById('code32');

carrosselBTN32.addEventListener('click', copyText32)
function copyText32(){
  navigator.clipboard.writeText(carrosselCODE32.innerText);
        
  carrosselBTN32.classList.add('active');
  setTimeout(function(){
    carrosselBTN32.classList.remove('active');
  },2500);
};

const carrosselBTN33 = document.getElementById('button-copy33');
const carrosselCODE33 = document.getElementById('code33');

carrosselBTN33.addEventListener('click', copyText33)
function copyText33(){
  navigator.clipboard.writeText(carrosselCODE33.innerText);
        
  carrosselBTN33.classList.add('active');
  setTimeout(function(){
    carrosselBTN33.classList.remove('active');
  },2500);
};

const carrosselBTN34 = document.getElementById('button-copy34');
const carrosselCODE34 = document.getElementById('code34');

carrosselBTN34.addEventListener('click', copyText34)
function copyText34(){
  navigator.clipboard.writeText(carrosselCODE34.innerText);
        
  carrosselBTN34.classList.add('active');
  setTimeout(function(){
    carrosselBTN34.classList.remove('active');
  },2500);
};

const carrosselBTN35 = document.getElementById('button-copy35');
const carrosselCODE35 = document.getElementById('code34');

carrosselBTN35.addEventListener('click', copyText35)
function copyText35(){
  navigator.clipboard.writeText(carrosselCODE35.innerText);
        
  carrosselBTN35.classList.add('active');
  setTimeout(function(){
    carrosselBTN35.classList.remove('active');
  },2500);
};

const carrosselBTN36 = document.getElementById('button-copy36');
const carrosselCODE36 = document.getElementById('code36');

carrosselBTN36.addEventListener('click', copyText36)
function copyText36(){
  navigator.clipboard.writeText(carrosselCODE36.innerText);
        
  carrosselBTN36.classList.add('active');
  setTimeout(function(){
    carrosselBTN36.classList.remove('active');
  },2500);
};

const carrosselBTN37 = document.getElementById('button-copy37');
const carrosselCODE37 = document.getElementById('code37');

carrosselBTN37.addEventListener('click', copyText37)
function copyText37(){
  navigator.clipboard.writeText(carrosselCODE37.innerText);
        
  carrosselBTN37.classList.add('active');
  setTimeout(function(){
    carrosselBTN37.classList.remove('active');
  },2500);
};

const carrosselBTN38 = document.getElementById('button-copy38');
const carrosselCODE38 = document.getElementById('code38');

carrosselBTN38.addEventListener('click', copyText38)
function copyText38(){
  navigator.clipboard.writeText(carrosselCODE38.innerText);
        
  carrosselBTN38.classList.add('active');
  setTimeout(function(){
    carrosselBTN38.classList.remove('active');
  },2500);
};

const carrosselBTN39 = document.getElementById('button-copy39');
const carrosselCODE39 = document.getElementById('code39');

carrosselBTN39.addEventListener('click', copyText39)
function copyText39(){
  navigator.clipboard.writeText(carrosselCODE39.innerText);
        
  carrosselBTN39.classList.add('active');
  setTimeout(function(){
    carrosselBTN39.classList.remove('active');
  },2500);
};

const carrosselBTN40 = document.getElementById('button-copy40');
const carrosselCODE40 = document.getElementById('code40');

carrosselBTN40.addEventListener('click', copyText40)
function copyText40(){
  navigator.clipboard.writeText(carrosselCODE40.innerText);
        
  carrosselBTN40.classList.add('active');
  setTimeout(function(){
    carrosselBTN40.classList.remove('active');
  },2500);
};

const carrosselBTN41 = document.getElementById('button-copy41');
const carrosselCODE41 = document.getElementById('code41');

carrosselBTN41.addEventListener('click', copyText41)
function copyText41(){
  navigator.clipboard.writeText(carrosselCODE41.innerText);
        
  carrosselBTN41.classList.add('active');
  setTimeout(function(){
    carrosselBTN41.classList.remove('active');
  },2500);
};

const carrosselBTN42 = document.getElementById('button-copy42');
const carrosselCODE42 = document.getElementById('code42');

carrosselBTN42.addEventListener('click', copyText42)
function copyText42(){
  navigator.clipboard.writeText(carrosselCODE42.innerText);
        
  carrosselBTN42.classList.add('active');
  setTimeout(function(){
    carrosselBTN42.classList.remove('active');
  },2500);
};

const carrosselBTN43 = document.getElementById('button-copy43');
const carrosselCODE43 = document.getElementById('code43');

carrosselBTN43.addEventListener('click', copyText43)
function copyText43(){
  navigator.clipboard.writeText(carrosselCODE43.innerText);
        
  carrosselBTN43.classList.add('active');
  setTimeout(function(){
    carrosselBTN43.classList.remove('active');
  },2500);
};

const carrosselBTN44 = document.getElementById('button-copy44');
const carrosselCODE44 = document.getElementById('code44');

carrosselBTN44.addEventListener('click', copyText44)
function copyText44(){
  navigator.clipboard.writeText(carrosselCODE44.innerText);
        
  carrosselBTN44.classList.add('active');
  setTimeout(function(){
    carrosselBTN44.classList.remove('active');
  },2500);
};

const carrosselBTN45 = document.getElementById('button-copy45');
const carrosselCODE45 = document.getElementById('code45');

carrosselBTN45.addEventListener('click', copyText45)
function copyText45(){
  navigator.clipboard.writeText(carrosselCODE45.innerText);
        
  carrosselBTN45.classList.add('active');
  setTimeout(function(){
    carrosselBTN45.classList.remove('active');
  },2500);
};

const carrosselBTN46 = document.getElementById('button-copy46');
const carrosselCODE46 = document.getElementById('code46');

carrosselBTN46.addEventListener('click', copyText46)
function copyText46(){
  navigator.clipboard.writeText(carrosselCODE46.innerText);
        
  carrosselBTN46.classList.add('active');
  setTimeout(function(){
    carrosselBTN46.classList.remove('active');
  },2500);
};

const carrosselBTN47 = document.getElementById('button-copy47');
const carrosselCODE47 = document.getElementById('code47');

carrosselBTN47.addEventListener('click', copyText47)
function copyText47(){
  navigator.clipboard.writeText(carrosselCODE47.innerText);
        
  carrosselBTN47.classList.add('active');
  setTimeout(function(){
    carrosselBTN47.classList.remove('active');
  },2500);
};

const carrosselBTN48 = document.getElementById('button-copy48');
const carrosselCODE48 = document.getElementById('code48');

carrosselBTN48.addEventListener('click', copyText48)
function copyText48(){
  navigator.clipboard.writeText(carrosselCODE48.innerText);
        
  carrosselBTN48.classList.add('active');
  setTimeout(function(){
    carrosselBTN48.classList.remove('active');
  },2500);
};

const carrosselBTN49 = document.getElementById('button-copy49');
const carrosselCODE49 = document.getElementById('code49');

carrosselBTN49.addEventListener('click', copyText49)
function copyText49(){
  navigator.clipboard.writeText(carrosselCODE49.innerText);
        
  carrosselBTN49.classList.add('active');
  setTimeout(function(){
    carrosselBTN49.classList.remove('active');
  },2500);
};

const carrosselBTN50 = document.getElementById('button-copy50');
const carrosselCODE50 = document.getElementById('code50');

carrosselBTN50.addEventListener('click', copyText50)
function copyText50(){
  navigator.clipboard.writeText(carrosselCODE50.innerText);
        
  carrosselBTN50.classList.add('active');
  setTimeout(function(){
    carrosselBTN50.classList.remove('active');
  },2500);
};

const carrosselBTN51 = document.getElementById('button-copy51');
const carrosselCODE51 = document.getElementById('code51');

carrosselBTN51.addEventListener('click', copyText51)
function copyText51(){
  navigator.clipboard.writeText(carrosselCODE51.innerText);
        
  carrosselBTN51.classList.add('active');
  setTimeout(function(){
    carrosselBTN51.classList.remove('active');
  },2500);
};

const carrosselBTN52 = document.getElementById('button-copy52');
const carrosselCODE52 = document.getElementById('code52');

carrosselBTN52.addEventListener('click', copyText52)
function copyText52(){
  navigator.clipboard.writeText(carrosselCODE52.innerText);
        
  carrosselBTN52.classList.add('active');
  setTimeout(function(){
    carrosselBTN52.classList.remove('active');
  },2500);
};

const carrosselBTN53 = document.getElementById('button-copy53');
const carrosselCODE53 = document.getElementById('code53');

carrosselBTN53.addEventListener('click', copyText53)
function copyText53(){
  navigator.clipboard.writeText(carrosselCODE53.innerText);
        
  carrosselBTN53.classList.add('active');
  setTimeout(function(){
    carrosselBTN53.classList.remove('active');
  },2500);
};

const carrosselBTN54 = document.getElementById('button-copy54');
const carrosselCODE54 = document.getElementById('code54');

carrosselBTN54.addEventListener('click', copyText54)
function copyText54(){
  navigator.clipboard.writeText(carrosselCODE54.innerText);
        
  carrosselBTN54.classList.add('active');
  setTimeout(function(){
    carrosselBTN54.classList.remove('active');
  },2500);
};

const carrosselBTN55 = document.getElementById('button-copy55');
const carrosselCODE55 = document.getElementById('code55');

carrosselBTN55.addEventListener('click', copyText55)
function copyText55(){
  navigator.clipboard.writeText(carrosselCODE55.innerText);
        
  carrosselBTN55.classList.add('active');
  setTimeout(function(){
    carrosselBTN55.classList.remove('active');
  },2500);
};

const carrosselBTN56 = document.getElementById('button-copy56');
const carrosselCODE56 = document.getElementById('code56');

carrosselBTN56.addEventListener('click', copyText56)
function copyText56(){
  navigator.clipboard.writeText(carrosselCODE56.innerText);
        
  carrosselBTN56.classList.add('active');
  setTimeout(function(){
    carrosselBTN56.classList.remove('active');
  },2500);
};

const carrosselBTN57 = document.getElementById('button-copy57');
const carrosselCODE57 = document.getElementById('code57');

carrosselBTN57.addEventListener('click', copyText57)
function copyText57(){
  navigator.clipboard.writeText(carrosselCODE57.innerText);
        
  carrosselBTN57.classList.add('active');
  setTimeout(function(){
    carrosselBTN57.classList.remove('active');
  },2500);
};

const carrosselBTN58 = document.getElementById('button-copy58');
const carrosselCODE58 = document.getElementById('code58');

carrosselBTN58.addEventListener('click', copyText58)
function copyText58(){
  navigator.clipboard.writeText(carrosselCODE58.innerText);
        
  carrosselBTN58.classList.add('active');
  setTimeout(function(){
    carrosselBTN58.classList.remove('active');
  },2500);
};

const carrosselBTN59 = document.getElementById('button-copy59');
const carrosselCODE59 = document.getElementById('code59');

carrosselBTN59.addEventListener('click', copyText59)
function copyText59(){
  navigator.clipboard.writeText(carrosselCODE59.innerText);
        
  carrosselBTN59.classList.add('active');
  setTimeout(function(){
    carrosselBTN59.classList.remove('active');
  },2500);
};

const carrosselBTN60 = document.getElementById('button-copy60');
const carrosselCODE60 = document.getElementById('code60');

carrosselBTN60.addEventListener('click', copyText60)
function copyText60(){
  navigator.clipboard.writeText(carrosselCODE60.innerText);
        
  carrosselBTN60.classList.add('active');
  setTimeout(function(){
    carrosselBTN60.classList.remove('active');
  },2500);
};

const carrosselBTN61 = document.getElementById('button-copy61');
const carrosselCODE61 = document.getElementById('code61');

carrosselBTN61.addEventListener('click', copyText61)
function copyText61(){
  navigator.clipboard.writeText(carrosselCODE61.innerText);
        
  carrosselBTN61.classList.add('active');
  setTimeout(function(){
    carrosselBTN61.classList.remove('active');
  },2500);
};

const carrosselBTN62 = document.getElementById('button-copy62');
const carrosselCODE62 = document.getElementById('code62');

carrosselBTN62.addEventListener('click', copyText62)
function copyText62(){
  navigator.clipboard.writeText(carrosselCODE62.innerText);
        
  carrosselBTN62.classList.add('active');
  setTimeout(function(){
    carrosselBTN62.classList.remove('active');
  },2500);
};

const carrosselBTN63 = document.getElementById('button-copy63');
const carrosselCODE63 = document.getElementById('code63');

carrosselBTN63.addEventListener('click', copyText63)
function copyText63(){
  navigator.clipboard.writeText(carrosselCODE63.innerText);
        
  carrosselBTN63.classList.add('active');
  setTimeout(function(){
    carrosselBTN63.classList.remove('active');
  },2500);
};

const carrosselBTN64 = document.getElementById('button-copy64');
const carrosselCODE64 = document.getElementById('code64');

carrosselBTN64.addEventListener('click', copyText64)
function copyText64(){
  navigator.clipboard.writeText(carrosselCODE64.innerText);
        
  carrosselBTN64.classList.add('active');
  setTimeout(function(){
    carrosselBTN64.classList.remove('active');
  },2500);
};

const carrosselBTN65 = document.getElementById('button-copy65');
const carrosselCODE65 = document.getElementById('code65');

carrosselBTN65.addEventListener('click', copyText65)
function copyText65(){
  navigator.clipboard.writeText(carrosselCODE65.innerText);
        
  carrosselBTN65.classList.add('active');
  setTimeout(function(){
    carrosselBTN65.classList.remove('active');
  },2500);
};

const carrosselBTN66 = document.getElementById('button-copy66');
const carrosselCODE66 = document.getElementById('code66');

carrosselBTN66.addEventListener('click', copyText66)
function copyText66(){
  navigator.clipboard.writeText(carrosselCODE66.innerText);
        
  carrosselBTN66.classList.add('active');
  setTimeout(function(){
    carrosselBTN66.classList.remove('active');
  },2500);
};

const carrosselBTN67 = document.getElementById('button-copy67');
const carrosselCODE67 = document.getElementById('code67');

carrosselBTN67.addEventListener('click', copyText67)
function copyText67(){
  navigator.clipboard.writeText(carrosselCODE67.innerText);
        
  carrosselBTN67.classList.add('active');
  setTimeout(function(){
    carrosselBTN67.classList.remove('active');
  },2500);
};

const carrosselBTN68 = document.getElementById('button-copy68');
const carrosselCODE68 = document.getElementById('code68');

carrosselBTN68.addEventListener('click', copyText68)
function copyText68(){
  navigator.clipboard.writeText(carrosselCODE68.innerText);
        
  carrosselBTN68.classList.add('active');
  setTimeout(function(){
    carrosselBTN68.classList.remove('active');
  },2500);
};

const carrosselBTN69 = document.getElementById('button-copy69');
const carrosselCODE69 = document.getElementById('code69');

carrosselBTN69.addEventListener('click', copyText69)
function copyText69(){
  navigator.clipboard.writeText(carrosselCODE69.innerText);
        
  carrosselBTN69.classList.add('active');
  setTimeout(function(){
    carrosselBTN69.classList.remove('active');
  },2500);
};

const carrosselBTN70 = document.getElementById('button-copy70');
const carrosselCODE70 = document.getElementById('code70');

carrosselBTN70.addEventListener('click', copyText70)
function copyText70(){
  navigator.clipboard.writeText(carrosselCODE70.innerText);
        
  carrosselBTN70.classList.add('active');
  setTimeout(function(){
    carrosselBTN70.classList.remove('active');
  },2500);
};

const carrosselBTN71 = document.getElementById('button-copy71');
const carrosselCODE71 = document.getElementById('code71');

carrosselBTN71.addEventListener('click', copyText71)
function copyText71(){
  navigator.clipboard.writeText(carrosselCODE71.innerText);
        
  carrosselBTN71.classList.add('active');
  setTimeout(function(){
    carrosselBTN71.classList.remove('active');
  },2500);
};

const carrosselBTN72 = document.getElementById('button-copy72');
const carrosselCODE72 = document.getElementById('code72');

carrosselBTN72.addEventListener('click', copyText72)
function copyText72(){
  navigator.clipboard.writeText(carrosselCODE72.innerText);
        
  carrosselBTN72.classList.add('active');
  setTimeout(function(){
    carrosselBTN72.classList.remove('active');
  },2500);
};

const carrosselBTN73 = document.getElementById('button-copy73');
const carrosselCODE73 = document.getElementById('code73');

carrosselBTN73.addEventListener('click', copyText73)
function copyText73(){
  navigator.clipboard.writeText(carrosselCODE73.innerText);
        
  carrosselBTN73.classList.add('active');
  setTimeout(function(){
    carrosselBTN73.classList.remove('active');
  },2500);
};

const carrosselBTN74 = document.getElementById('button-copy74');
const carrosselCODE74 = document.getElementById('code74');

carrosselBTN74.addEventListener('click', copyText74)
function copyText74(){
  navigator.clipboard.writeText(carrosselCODE74.innerText);
        
  carrosselBTN74.classList.add('active');
  setTimeout(function(){
    carrosselBTN74.classList.remove('active');
  },2500);
};

const carrosselBTN75 = document.getElementById('button-copy75');
const carrosselCODE75 = document.getElementById('code75');

carrosselBTN75.addEventListener('click', copyText75)
function copyText75(){
  navigator.clipboard.writeText(carrosselCODE75.innerText);
        
  carrosselBTN75.classList.add('active');
  setTimeout(function(){
    carrosselBTN75.classList.remove('active');
  },2500);
};

const carrosselBTN76 = document.getElementById('button-copy76');
const carrosselCODE76 = document.getElementById('code76');

carrosselBTN76.addEventListener('click', copyText76)
function copyText76(){
  navigator.clipboard.writeText(carrosselCODE76.innerText);
        
  carrosselBTN76.classList.add('active');
  setTimeout(function(){
    carrosselBTN76.classList.remove('active');
  },2500);
};

const carrosselBTN77 = document.getElementById('button-copy77');
const carrosselCODE77 = document.getElementById('code77');

carrosselBTN77.addEventListener('click', copyText77)
function copyText77(){
  navigator.clipboard.writeText(carrosselCODE77.innerText);
        
  carrosselBTN77.classList.add('active');
  setTimeout(function(){
    carrosselBTN77.classList.remove('active');
  },2500);
};

const carrosselBTN78 = document.getElementById('button-copy78');
const carrosselCODE78 = document.getElementById('code78');

carrosselBTN78.addEventListener('click', copyText78)
function copyText78(){
  navigator.clipboard.writeText(carrosselCODE78.innerText);
        
  carrosselBTN78.classList.add('active');
  setTimeout(function(){
    carrosselBTN78.classList.remove('active');
  },2500);
};

const carrosselBTN79 = document.getElementById('button-copy79');
const carrosselCODE79 = document.getElementById('code79');

carrosselBTN79.addEventListener('click', copyText79)
function copyText79(){
  navigator.clipboard.writeText(carrosselCODE79.innerText);
        
  carrosselBTN79.classList.add('active');
  setTimeout(function(){
    carrosselBTN79.classList.remove('active');
  },2500);
};

const carrosselBTN80 = document.getElementById('button-copy80');
const carrosselCODE80 = document.getElementById('code80');

carrosselBTN80.addEventListener('click', copyText80)
function copyText80(){
  navigator.clipboard.writeText(carrosselCODE80.innerText);
        
  carrosselBTN80.classList.add('active');
  setTimeout(function(){
    carrosselBTN80.classList.remove('active');
  },2500);
};

const carrosselBTN81 = document.getElementById('button-copy81');
const carrosselCODE81 = document.getElementById('code81');

carrosselBTN81.addEventListener('click', copyText81)
function copyText81(){
  navigator.clipboard.writeText(carrosselCODE81.innerText);
        
  carrosselBTN81.classList.add('active');
  setTimeout(function(){
    carrosselBTN81.classList.remove('active');
  },2500);
};

const carrosselBTN82 = document.getElementById('button-copy82');
const carrosselCODE82 = document.getElementById('code82');

carrosselBTN82.addEventListener('click', copyText82)
function copyText82(){
  navigator.clipboard.writeText(carrosselCODE82.innerText);
        
  carrosselBTN82.classList.add('active');
  setTimeout(function(){
    carrosselBTN82.classList.remove('active');
  },2500);
};

const carrosselBTN83 = document.getElementById('button-copy83');
const carrosselCODE83 = document.getElementById('code83');

carrosselBTN83.addEventListener('click', copyText83)
function copyText83(){
  navigator.clipboard.writeText(carrosselCODE83.innerText);
        
  carrosselBTN83.classList.add('active');
  setTimeout(function(){
    carrosselBTN83.classList.remove('active');
  },2500);
};

const carrosselBTN84 = document.getElementById('button-copy84');
const carrosselCODE84 = document.getElementById('code84');

carrosselBTN84.addEventListener('click', copyText84)
function copyText84(){
  navigator.clipboard.writeText(carrosselCODE84.innerText);
        
  carrosselBTN84.classList.add('active');
  setTimeout(function(){
    carrosselBTN84.classList.remove('active');
  },2500);
};

const carrosselBTN85 = document.getElementById('button-copy85');
const carrosselCODE85 = document.getElementById('code85');

carrosselBTN85.addEventListener('click', copyText85)
function copyText85(){
  navigator.clipboard.writeText(carrosselCODE85.innerText);
        
  carrosselBTN85.classList.add('active');
  setTimeout(function(){
    carrosselBTN85.classList.remove('active');
  },2500);
};

const carrosselBTN86 = document.getElementById('button-copy86');
const carrosselCODE86 = document.getElementById('code86');

carrosselBTN86.addEventListener('click', copyText86)
function copyText86(){
  navigator.clipboard.writeText(carrosselCODE86.innerText);
        
  carrosselBTN86.classList.add('active');
  setTimeout(function(){
    carrosselBTN86.classList.remove('active');
  },2500);
};

const carrosselBTN87 = document.getElementById('button-copy87');
const carrosselCODE87 = document.getElementById('code87');

carrosselBTN87.addEventListener('click', copyText87)
function copyText87(){
  navigator.clipboard.writeText(carrosselCODE87.innerText);
        
  carrosselBTN87.classList.add('active');
  setTimeout(function(){
    carrosselBTN87.classList.remove('active');
  },2500);
};

const carrosselBTN88 = document.getElementById('button-copy88');
const carrosselCODE88 = document.getElementById('code88');

carrosselBTN88.addEventListener('click', copyText88)
function copyText88(){
  navigator.clipboard.writeText(carrosselCODE88.innerText);
        
  carrosselBTN88.classList.add('active');
  setTimeout(function(){
    carrosselBTN88.classList.remove('active');
  },2500);
};

const carrosselBTN89 = document.getElementById('button-copy89');
const carrosselCODE89 = document.getElementById('code89');

carrosselBTN89.addEventListener('click', copyText89)
function copyText89(){
  navigator.clipboard.writeText(carrosselCODE89.innerText);
        
  carrosselBTN89.classList.add('active');
  setTimeout(function(){
    carrosselBTN89.classList.remove('active');
  },2500);
};

const carrosselBTN90 = document.getElementById('button-copy90');
const carrosselCODE90 = document.getElementById('code90');

carrosselBTN90.addEventListener('click', copyText90)
function copyText90(){
  navigator.clipboard.writeText(carrosselCODE90.innerText);
        
  carrosselBTN90.classList.add('active');
  setTimeout(function(){
    carrosselBTN90.classList.remove('active');
  },2500);
};

const carrosselBTN91 = document.getElementById('button-copy91');
const carrosselCODE91 = document.getElementById('code91');

carrosselBTN91.addEventListener('click', copyText91)
function copyText91(){
  navigator.clipboard.writeText(carrosselCODE91.innerText);
        
  carrosselBTN91.classList.add('active');
  setTimeout(function(){
    carrosselBTN91.classList.remove('active');
  },2500);
};


const carrosselBTN92 = document.getElementById('button-copy92');
const carrosselCODE92 = document.getElementById('code92');

carrosselBTN92.addEventListener('click', copyText92)
function copyText92(){
  navigator.clipboard.writeText(carrosselCODE92.innerText);
        
  carrosselBTN92.classList.add('active');
  setTimeout(function(){
    carrosselBTN92.classList.remove('active');
  },2500);
};

const carrosselBTN93 = document.getElementById('button-copy93');
const carrosselCODE93 = document.getElementById('code93');

carrosselBTN93.addEventListener('click', copyText93)
function copyText93(){
  navigator.clipboard.writeText(carrosselCODE93.innerText);
        
  carrosselBTN93.classList.add('active');
  setTimeout(function(){
    carrosselBTN93.classList.remove('active');
  },2500);
};

const carrosselBTN94 = document.getElementById('button-copy94');
const carrosselCODE94 = document.getElementById('code94');

carrosselBTN94.addEventListener('click', copyText94)
function copyText94(){
  navigator.clipboard.writeText(carrosselCODE94.innerText);
        
  carrosselBTN94.classList.add('active');
  setTimeout(function(){
    carrosselBTN94.classList.remove('active');
  },2500);
};

const carrosselBTN95 = document.getElementById('button-copy95');
const carrosselCODE95 = document.getElementById('code95');

carrosselBTN95.addEventListener('click', copyText95)
function copyText95(){
  navigator.clipboard.writeText(carrosselCODE95.innerText);
        
  carrosselBTN95.classList.add('active');
  setTimeout(function(){
    carrosselBTN95.classList.remove('active');
  },2500);
};

const carrosselBTN96 = document.getElementById('button-copy96');
const carrosselCODE96 = document.getElementById('code96');

carrosselBTN96.addEventListener('click', copyText96)
function copyText96(){
  navigator.clipboard.writeText(carrosselCODE96.innerText);
        
  carrosselBTN96.classList.add('active');
  setTimeout(function(){
    carrosselBTN96.classList.remove('active');
  },2500);
};

const carrosselBTN97 = document.getElementById('button-copy97');
const carrosselCODE97 = document.getElementById('code97');

carrosselBTN97.addEventListener('click', copyText97)
function copyText97(){
  navigator.clipboard.writeText(carrosselCODE97.innerText);
        
  carrosselBTN97.classList.add('active');
  setTimeout(function(){
    carrosselBTN97.classList.remove('active');
  },2500);
};

const carrosselBTN98 = document.getElementById('button-copy98');
const carrosselCODE98 = document.getElementById('code98');

carrosselBTN98.addEventListener('click', copyText98)
function copyText98(){
  navigator.clipboard.writeText(carrosselCODE98.innerText);
        
  carrosselBTN98.classList.add('active');
  setTimeout(function(){
    carrosselBTN98.classList.remove('active');
  },2500);
};

const carrosselBTN99 = document.getElementById('button-copy99');
const carrosselCODE99 = document.getElementById('code99');

carrosselBTN99.addEventListener('click', copyText99)
function copyText99(){
  navigator.clipboard.writeText(carrosselCODE99.innerText);
        
  carrosselBTN99.classList.add('active');
  setTimeout(function(){
    carrosselBTN99.classList.remove('active');
  },2500);
};

const carrosselBTN100 = document.getElementById('button-copy100');
const carrosselCODE100 = document.getElementById('code100');

carrosselBTN100.addEventListener('click', copyText100)
function copyText100(){
  navigator.clipboard.writeText(carrosselCODE100.innerText);
        
  carrosselBTN100.classList.add('active');
  setTimeout(function(){
    carrosselBTN100.classList.remove('active');
  },2500);
};

const carrosselBTN101 = document.getElementById('button-copy101');
const carrosselCODE101 = document.getElementById('code101');

carrosselBTN101.addEventListener('click', copyText101)
function copyText101(){
  navigator.clipboard.writeText(carrosselCODE101.innerText);
        
  carrosselBTN101.classList.add('active');
  setTimeout(function(){
    carrosselBTN101.classList.remove('active');
  },2500);
};

const carrosselBTN102 = document.getElementById('button-copy102');
const carrosselCODE102 = document.getElementById('code102');

carrosselBTN102.addEventListener('click', copyText102)
function copyText102(){
  navigator.clipboard.writeText(carrosselCODE102.innerText);
        
  carrosselBTN102.classList.add('active');
  setTimeout(function(){
    carrosselBTN102.classList.remove('active');
  },2500);
};

const carrosselBTN103 = document.getElementById('button-copy103');
const carrosselCODE103 = document.getElementById('code103');

carrosselBTN103.addEventListener('click', copyText103)
function copyText103(){
  navigator.clipboard.writeText(carrosselCODE103.innerText);
        
  carrosselBTN103.classList.add('active');
  setTimeout(function(){
    carrosselBTN103.classList.remove('active');
  },2500);
};

const carrosselBTN104 = document.getElementById('button-copy104');
const carrosselCODE104 = document.getElementById('code104');

carrosselBTN104.addEventListener('click', copyText104)
function copyText104(){
  navigator.clipboard.writeText(carrosselCODE104.innerText);
        
  carrosselBTN104.classList.add('active');
  setTimeout(function(){
    carrosselBTN104.classList.remove('active');
  },2500);
};

const carrosselBTN105 = document.getElementById('button-copy105');
const carrosselCODE105 = document.getElementById('code105');

carrosselBTN105.addEventListener('click', copyText105)
function copyText105(){
  navigator.clipboard.writeText(carrosselCODE105.innerText);
        
  carrosselBTN105.classList.add('active');
  setTimeout(function(){
    carrosselBTN105.classList.remove('active');
  },2500);
};

const carrosselBTN106 = document.getElementById('button-copy106');
const carrosselCODE106 = document.getElementById('code106');

carrosselBTN106.addEventListener('click', copyText106)
function copyText106(){
  navigator.clipboard.writeText(carrosselCODE106.innerText);
        
  carrosselBTN106.classList.add('active');
  setTimeout(function(){
    carrosselBTN106.classList.remove('active');
  },2500);
};

const carrosselBTN107 = document.getElementById('button-copy107');
const carrosselCODE107 = document.getElementById('code107');

carrosselBTN107.addEventListener('click', copyText107)
function copyText107(){
  navigator.clipboard.writeText(carrosselCODE107.innerText);
        
  carrosselBTN107.classList.add('active');
  setTimeout(function(){
    carrosselBTN107.classList.remove('active');
  },2500);
};

const carrosselBTN108 = document.getElementById('button-copy108');
const carrosselCODE108 = document.getElementById('code108');

carrosselBTN108.addEventListener('click', copyText108)
function copyText108(){
  navigator.clipboard.writeText(carrosselCODE108.innerText);
        
  carrosselBTN108.classList.add('active');
  setTimeout(function(){
    carrosselBTN108.classList.remove('active');
  },2500);
};

const carrosselBTN109 = document.getElementById('button-copy109');
const carrosselCODE109 = document.getElementById('code109');

carrosselBTN109.addEventListener('click', copyText109)
function copyText109(){
  navigator.clipboard.writeText(carrosselCODE109.innerText);
        
  carrosselBTN109.classList.add('active');
  setTimeout(function(){
    carrosselBTN109.classList.remove('active');
  },2500);
};

const carrosselBTN110 = document.getElementById('button-copy110');
const carrosselCODE110 = document.getElementById('code110');

carrosselBTN110.addEventListener('click', copyText110)
function copyText110(){
  navigator.clipboard.writeText(carrosselCODE110.innerText);
        
  carrosselBTN110.classList.add('active');
  setTimeout(function(){
    carrosselBTN110.classList.remove('active');
  },2500);
};

const carrosselBTN111 = document.getElementById('button-copy111');
const carrosselCODE111 = document.getElementById('code111');

carrosselBTN111.addEventListener('click', copyText111)
function copyText111(){
  navigator.clipboard.writeText(carrosselCODE111.innerText);
        
  carrosselBTN111.classList.add('active');
  setTimeout(function(){
    carrosselBTN111.classList.remove('active');
  },2500);
};

const carrosselBTN112 = document.getElementById('button-copy112');
const carrosselCODE112 = document.getElementById('code112');

carrosselBTN112.addEventListener('click', copyText112)
function copyText112(){
  navigator.clipboard.writeText(carrosselCODE112.innerText);
        
  carrosselBTN112.classList.add('active');
  setTimeout(function(){
    carrosselBTN112.classList.remove('active');
  },2500);
};

const carrosselBTN113 = document.getElementById('button-copy113');
const carrosselCODE113 = document.getElementById('code113');

carrosselBTN113.addEventListener('click', copyText113)
function copyText113(){
  navigator.clipboard.writeText(carrosselCODE113.innerText);
        
  carrosselBTN113.classList.add('active');
  setTimeout(function(){
    carrosselBTN113.classList.remove('active');
  },2500);
};

const carrosselBTN114 = document.getElementById('button-copy114');
const carrosselCODE114 = document.getElementById('code114');

carrosselBTN114.addEventListener('click', copyText114)
function copyText114(){
  navigator.clipboard.writeText(carrosselCODE114.innerText);
        
  carrosselBTN114.classList.add('active');
  setTimeout(function(){
    carrosselBTN114.classList.remove('active');
  },2500);
};

const carrosselBTN115 = document.getElementById('button-copy115');
const carrosselCODE115 = document.getElementById('code115');

carrosselBTN115.addEventListener('click', copyText115)
function copyText115(){
  navigator.clipboard.writeText(carrosselCODE115.innerText);
        
  carrosselBTN115.classList.add('active');
  setTimeout(function(){
    carrosselBTN115.classList.remove('active');
  },2500);
};

const carrosselBTN116 = document.getElementById('button-copy116');
const carrosselCODE116 = document.getElementById('code116');

carrosselBTN116.addEventListener('click', copyText116)
function copyText116(){
  navigator.clipboard.writeText(carrosselCODE116.innerText);
        
  carrosselBTN116.classList.add('active');
  setTimeout(function(){
    carrosselBTN116.classList.remove('active');
  },2500);
};

const carrosselBTN117 = document.getElementById('button-copy117');
const carrosselCODE117 = document.getElementById('code117');

carrosselBTN117.addEventListener('click', copyText117)
function copyText117(){
  navigator.clipboard.writeText(carrosselCODE117.innerText);
        
  carrosselBTN117.classList.add('active');
  setTimeout(function(){
    carrosselBTN117.classList.remove('active');
  },2500);
};

const carrosselBTN118 = document.getElementById('button-copy118');
const carrosselCODE118 = document.getElementById('code118');

carrosselBTN118.addEventListener('click', copyText118)
function copyText118(){
  navigator.clipboard.writeText(carrosselCODE118.innerText);
        
  carrosselBTN118.classList.add('active');
  setTimeout(function(){
    carrosselBTN118.classList.remove('active');
  },2500);
};

const carrosselBTN119 = document.getElementById('button-copy119');
const carrosselCODE119 = document.getElementById('code119');

carrosselBTN119.addEventListener('click', copyText119)
function copyText119(){
  navigator.clipboard.writeText(carrosselCODE119.innerText);
        
  carrosselBTN119.classList.add('active');
  setTimeout(function(){
    carrosselBTN119.classList.remove('active');
  },2500);
};

const carrosselBTN120 = document.getElementById('button-copy120');
const carrosselCODE120 = document.getElementById('code120');

carrosselBTN120.addEventListener('click', copyText120)
function copyText120(){
  navigator.clipboard.writeText(carrosselCODE120.innerText);
        
  carrosselBTN120.classList.add('active');
  setTimeout(function(){
    carrosselBTN120.classList.remove('active');
  },2500);
};

const carrosselBTN121 = document.getElementById('button-copy121');
const carrosselCODE121 = document.getElementById('code121');

carrosselBTN121.addEventListener('click', copyText121)
function copyText121(){
  navigator.clipboard.writeText(carrosselCODE121.innerText);
        
  carrosselBTN121.classList.add('active');
  setTimeout(function(){
    carrosselBTN121.classList.remove('active');
  },2500);
};

const carrosselBTN122 = document.getElementById('button-copy122');
const carrosselCODE122 = document.getElementById('code122');

carrosselBTN122.addEventListener('click', copyText122)
function copyText122(){
  navigator.clipboard.writeText(carrosselCODE122.innerText);
        
  carrosselBTN122.classList.add('active');
  setTimeout(function(){
    carrosselBTN122.classList.remove('active');
  },2500);
};

const carrosselBTN123 = document.getElementById('button-copy123');
const carrosselCODE123 = document.getElementById('code123');

carrosselBTN123.addEventListener('click', copyText123)
function copyText123(){
  navigator.clipboard.writeText(carrosselCODE123.innerText);
        
  carrosselBTN123.classList.add('active');
  setTimeout(function(){
    carrosselBTN123.classList.remove('active');
  },2500);
};

const carrosselBTN124 = document.getElementById('button-copy124');
const carrosselCODE124 = document.getElementById('code124');

carrosselBTN124.addEventListener('click', copyText124)
function copyText124(){
  navigator.clipboard.writeText(carrosselCODE124.innerText);
        
  carrosselBTN124.classList.add('active');
  setTimeout(function(){
    carrosselBTN124.classList.remove('active');
  },2500);
};

const carrosselBTN125 = document.getElementById('button-copy125');
const carrosselCODE125 = document.getElementById('code125');

carrosselBTN125.addEventListener('click', copyText125)
function copyText125(){
  navigator.clipboard.writeText(carrosselCODE125.innerText);
        
  carrosselBTN125.classList.add('active');
  setTimeout(function(){
    carrosselBTN125.classList.remove('active');
  },2500);
};

const carrosselBTN126 = document.getElementById('button-copy126');
const carrosselCODE126 = document.getElementById('code126');

carrosselBTN126.addEventListener('click', copyText126)
function copyText126(){
  navigator.clipboard.writeText(carrosselCODE126.innerText);
        
  carrosselBTN126.classList.add('active');
  setTimeout(function(){
    carrosselBTN126.classList.remove('active');
  },2500);
};

const carrosselBTN127 = document.getElementById('button-copy127');
const carrosselCODE127 = document.getElementById('code127');

carrosselBTN127.addEventListener('click', copyText127)
function copyText127(){
  navigator.clipboard.writeText(carrosselCODE127.innerText);
        
  carrosselBTN127.classList.add('active');
  setTimeout(function(){
    carrosselBTN127.classList.remove('active');
  },2500);
};

const carrosselBTN128 = document.getElementById('button-copy128');
const carrosselCODE128 = document.getElementById('code128');

carrosselBTN128.addEventListener('click', copyText128)
function copyText128(){
  navigator.clipboard.writeText(carrosselCODE128.innerText);
        
  carrosselBTN128.classList.add('active');
  setTimeout(function(){
    carrosselBTN128.classList.remove('active');
  },2500);
};

const carrosselBTN129 = document.getElementById('button-copy129');
const carrosselCODE129 = document.getElementById('code129');

carrosselBTN129.addEventListener('click', copyText129)
function copyText129(){
  navigator.clipboard.writeText(carrosselCODE129.innerText);
        
  carrosselBTN129.classList.add('active');
  setTimeout(function(){
    carrosselBTN129.classList.remove('active');
  },2500);
};

const carrosselBTN130 = document.getElementById('button-copy130');
const carrosselCODE130 = document.getElementById('code130');

carrosselBTN130.addEventListener('click', copyText130)
function copyText130(){
  navigator.clipboard.writeText(carrosselCODE130.innerText);
        
  carrosselBTN130.classList.add('active');
  setTimeout(function(){
    carrosselBTN130.classList.remove('active');
  },2500);
};

const carrosselBTN131 = document.getElementById('button-copy131');
const carrosselCODE131 = document.getElementById('code131');

carrosselBTN131.addEventListener('click', copyText131)
function copyText131(){
  navigator.clipboard.writeText(carrosselCODE131.innerText);
        
  carrosselBTN131.classList.add('active');
  setTimeout(function(){
    carrosselBTN131.classList.remove('active');
  },2500);
};

const carrosselBTN132 = document.getElementById('button-copy132');
const carrosselCODE132 = document.getElementById('code132');

carrosselBTN132.addEventListener('click', copyText132)
function copyText132(){
  navigator.clipboard.writeText(carrosselCODE132.innerText);
        
  carrosselBTN132.classList.add('active');
  setTimeout(function(){
    carrosselBTN132.classList.remove('active');
  },2500);
};

const carrosselBTN133 = document.getElementById('button-copy133');
const carrosselCODE133 = document.getElementById('code133');

carrosselBTN133.addEventListener('click', copyText133)
function copyText133(){
  navigator.clipboard.writeText(carrosselCODE133.innerText);
        
  carrosselBTN133.classList.add('active');
  setTimeout(function(){
    carrosselBTN133.classList.remove('active');
  },2500);
};

const carrosselBTN134 = document.getElementById('button-copy134');
const carrosselCODE134 = document.getElementById('code134');

carrosselBTN134.addEventListener('click', copyText134)
function copyText134(){
  navigator.clipboard.writeText(carrosselCODE134.innerText);
        
  carrosselBTN134.classList.add('active');
  setTimeout(function(){
    carrosselBTN134.classList.remove('active');
  },2500);
};

const carrosselBTN135 = document.getElementById('button-copy135');
const carrosselCODE135 = document.getElementById('code135');

carrosselBTN135.addEventListener('click', copyText135)
function copyText135(){
  navigator.clipboard.writeText(carrosselCODE135.innerText);
        
  carrosselBTN135.classList.add('active');
  setTimeout(function(){
    carrosselBTN135.classList.remove('active');
  },2500);
};

const carrosselBTN136 = document.getElementById('button-copy136');
const carrosselCODE136 = document.getElementById('code136');

carrosselBTN136.addEventListener('click', copyText136)
function copyText136(){
  navigator.clipboard.writeText(carrosselCODE136.innerText);
        
  carrosselBTN136.classList.add('active');
  setTimeout(function(){
    carrosselBTN136.classList.remove('active');
  },2500);
};

const carrosselBTN137 = document.getElementById('button-copy137');
const carrosselCODE137 = document.getElementById('code137');

carrosselBTN137.addEventListener('click', copyText137)
function copyText137(){
  navigator.clipboard.writeText(carrosselCODE137.innerText);
        
  carrosselBTN137.classList.add('active');
  setTimeout(function(){
    carrosselBTN137.classList.remove('active');
  },2500);
};

const carrosselBTN138 = document.getElementById('button-copy138');
const carrosselCODE138 = document.getElementById('code138');

carrosselBTN138.addEventListener('click', copyText138)
function copyText138(){
  navigator.clipboard.writeText(carrosselCODE138.innerText);
        
  carrosselBTN138.classList.add('active');
  setTimeout(function(){
    carrosselBTN138.classList.remove('active');
  },2500);
};

const carrosselBTN139 = document.getElementById('button-copy139');
const carrosselCODE139 = document.getElementById('code139');

carrosselBTN139.addEventListener('click', copyText139)
function copyText139(){
  navigator.clipboard.writeText(carrosselCODE139.innerText);
        
  carrosselBTN139.classList.add('active');
  setTimeout(function(){
    carrosselBTN139.classList.remove('active');
  },2500);
};

const carrosselBTN140 = document.getElementById('button-copy140');
const carrosselCODE140 = document.getElementById('code140');

carrosselBTN140.addEventListener('click', copyText140)
function copyText140(){
  navigator.clipboard.writeText(carrosselCODE140.innerText);
        
  carrosselBTN140.classList.add('active');
  setTimeout(function(){
    carrosselBTN140.classList.remove('active');
  },2500);
};

const carrosselBTN141 = document.getElementById('button-copy141');
const carrosselCODE141 = document.getElementById('code141');

carrosselBTN141.addEventListener('click', copyText141)
function copyText141(){
  navigator.clipboard.writeText(carrosselCODE141.innerText);
        
  carrosselBTN141.classList.add('active');
  setTimeout(function(){
    carrosselBTN141.classList.remove('active');
  },2500);
};

const carrosselBTN142 = document.getElementById('button-copy142');
const carrosselCODE142 = document.getElementById('code142');

carrosselBTN142.addEventListener('click', copyText142)
function copyText142(){
  navigator.clipboard.writeText(carrosselCODE142.innerText);
        
  carrosselBTN142.classList.add('active');
  setTimeout(function(){
    carrosselBTN142.classList.remove('active');
  },2500);
};

const carrosselBTN143 = document.getElementById('button-copy143');
const carrosselCODE143 = document.getElementById('code143');

carrosselBTN143.addEventListener('click', copyText143)
function copyText143(){
  navigator.clipboard.writeText(carrosselCODE143.innerText);
        
  carrosselBTN143.classList.add('active');
  setTimeout(function(){
    carrosselBTN143.classList.remove('active');
  },2500);
};

const carrosselBTN144 = document.getElementById('button-copy144');
const carrosselCODE144 = document.getElementById('code144');

carrosselBTN144.addEventListener('click', copyText144)
function copyText144(){
  navigator.clipboard.writeText(carrosselCODE144.innerText);
        
  carrosselBTN144.classList.add('active');
  setTimeout(function(){
    carrosselBTN144.classList.remove('active');
  },2500);
};

const carrosselBTN145 = document.getElementById('button-copy145');
const carrosselCODE145 = document.getElementById('code145');

carrosselBTN145.addEventListener('click', copyText145)
function copyText145(){
  navigator.clipboard.writeText(carrosselCODE145.innerText);
        
  carrosselBTN145.classList.add('active');
  setTimeout(function(){
    carrosselBTN145.classList.remove('active');
  },2500);
};

const carrosselBTN146 = document.getElementById('button-copy146');
const carrosselCODE146 = document.getElementById('code146');

carrosselBTN146.addEventListener('click', copyText146)
function copyText146(){
  navigator.clipboard.writeText(carrosselCODE146.innerText);
        
  carrosselBTN146.classList.add('active');
  setTimeout(function(){
    carrosselBTN146.classList.remove('active');
  },2500);
};

const carrosselBTN147 = document.getElementById('button-copy147');
const carrosselCODE147 = document.getElementById('code147');

carrosselBTN147.addEventListener('click', copyText147)
function copyText147(){
  navigator.clipboard.writeText(carrosselCODE147.innerText);
        
  carrosselBTN147.classList.add('active');
  setTimeout(function(){
    carrosselBTN147.classList.remove('active');
  },2500);
};

const carrosselBTN148 = document.getElementById('button-copy148');
const carrosselCODE148 = document.getElementById('code148');

carrosselBTN148.addEventListener('click', copyText148)
function copyText148(){
  navigator.clipboard.writeText(carrosselCODE148.innerText);
        
  carrosselBTN148.classList.add('active');
  setTimeout(function(){
    carrosselBTN148.classList.remove('active');
  },2500);
};

const carrosselBTN149 = document.getElementById('button-copy149');
const carrosselCODE149 = document.getElementById('code149');

carrosselBTN149.addEventListener('click', copyText149)
function copyText149(){
  navigator.clipboard.writeText(carrosselCODE149.innerText);
        
  carrosselBTN149.classList.add('active');
  setTimeout(function(){
    carrosselBTN149.classList.remove('active');
  },2500);
};

const carrosselBTN150 = document.getElementById('button-copy150');
const carrosselCODE150 = document.getElementById('code150');

carrosselBTN150.addEventListener('click', copyText150)
function copyText150(){
  navigator.clipboard.writeText(carrosselCODE150.innerText);
        
  carrosselBTN150.classList.add('active');
  setTimeout(function(){
    carrosselBTN150.classList.remove('active');
  },2500);
};

const carrosselBTN151 = document.getElementById('button-copy151');
const carrosselCODE151 = document.getElementById('code151');

carrosselBTN151.addEventListener('click', copyText151)
function copyText151(){
  navigator.clipboard.writeText(carrosselCODE151.innerText);
        
  carrosselBTN151.classList.add('active');
  setTimeout(function(){
    carrosselBTN151.classList.remove('active');
  },2500);
};

const carrosselBTN152 = document.getElementById('button-copy152');
const carrosselCODE152 = document.getElementById('code152');

carrosselBTN152.addEventListener('click', copyText152)
function copyText152(){
  navigator.clipboard.writeText(carrosselCODE152.innerText);
        
  carrosselBTN152.classList.add('active');
  setTimeout(function(){
    carrosselBTN152.classList.remove('active');
  },2500);
};

const carrosselBTN153 = document.getElementById('button-copy153');
const carrosselCODE153 = document.getElementById('code153');

carrosselBTN153.addEventListener('click', copyText153)
function copyText153(){
  navigator.clipboard.writeText(carrosselCODE153.innerText);
        
  carrosselBTN153.classList.add('active');
  setTimeout(function(){
    carrosselBTN153.classList.remove('active');
  },2500);
};

const carrosselBTN154 = document.getElementById('button-copy154');
const carrosselCODE154 = document.getElementById('code154');

carrosselBTN154.addEventListener('click', copyText154)
function copyText154(){
  navigator.clipboard.writeText(carrosselCODE154.innerText);
        
  carrosselBTN154.classList.add('active');
  setTimeout(function(){
    carrosselBTN154.classList.remove('active');
  },2500);
};

const carrosselBTN155 = document.getElementById('button-copy155');
const carrosselCODE155 = document.getElementById('code155');

carrosselBTN155.addEventListener('click', copyText155)
function copyText155(){
  navigator.clipboard.writeText(carrosselCODE155.innerText);
        
  carrosselBTN155.classList.add('active');
  setTimeout(function(){
    carrosselBTN155.classList.remove('active');
  },2500);
};

const carrosselBTN156 = document.getElementById('button-copy156');
const carrosselCODE156 = document.getElementById('code156');

carrosselBTN156.addEventListener('click', copyText156)
function copyText156(){
  navigator.clipboard.writeText(carrosselCODE156.innerText);
        
  carrosselBTN156.classList.add('active');
  setTimeout(function(){
    carrosselBTN156.classList.remove('active');
  },2500);
};

const carrosselBTN157 = document.getElementById('button-copy157');
const carrosselCODE157 = document.getElementById('code157');

carrosselBTN157.addEventListener('click', copyText157)
function copyText157(){
  navigator.clipboard.writeText(carrosselCODE157.innerText);
        
  carrosselBTN157.classList.add('active');
  setTimeout(function(){
    carrosselBTN157.classList.remove('active');
  },2500);
};

const carrosselBTN158 = document.getElementById('button-copy158');
const carrosselCODE158 = document.getElementById('code158');

carrosselBTN158.addEventListener('click', copyText158)
function copyText158(){
  navigator.clipboard.writeText(carrosselCODE158.innerText);
        
  carrosselBTN158.classList.add('active');
  setTimeout(function(){
    carrosselBTN158.classList.remove('active');
  },2500);
};

const carrosselBTN159 = document.getElementById('button-copy159');
const carrosselCODE159 = document.getElementById('code159');

carrosselBTN159.addEventListener('click', copyText159)
function copyText159(){
  navigator.clipboard.writeText(carrosselCODE159.innerText);
        
  carrosselBTN159.classList.add('active');
  setTimeout(function(){
    carrosselBTN159.classList.remove('active');
  },2500);
};

const carrosselBTN160 = document.getElementById('button-copy160');
const carrosselCODE160 = document.getElementById('code160');

carrosselBTN160.addEventListener('click', copyText160)
function copyText160(){
  navigator.clipboard.writeText(carrosselCODE160.innerText);
        
  carrosselBTN160.classList.add('active');
  setTimeout(function(){
    carrosselBTN160.classList.remove('active');
  },2500);
};

const carrosselBTN161 = document.getElementById('button-copy161');
const carrosselCODE161 = document.getElementById('code161');

carrosselBTN161.addEventListener('click', copyText161)
function copyText161(){
  navigator.clipboard.writeText(carrosselCODE161.innerText);
        
  carrosselBTN161.classList.add('active');
  setTimeout(function(){
    carrosselBTN161.classList.remove('active');
  },2500);
};

const carrosselBTN162 = document.getElementById('button-copy162');
const carrosselCODE162 = document.getElementById('code162');

carrosselBTN162.addEventListener('click', copyText162)
function copyText162(){
  navigator.clipboard.writeText(carrosselCODE162.innerText);
        
  carrosselBTN162.classList.add('active');
  setTimeout(function(){
    carrosselBTN162.classList.remove('active');
  },2500);
};

const carrosselBTN163 = document.getElementById('button-copy163');
const carrosselCODE163 = document.getElementById('code163');

carrosselBTN163.addEventListener('click', copyText163)
function copyText163(){
  navigator.clipboard.writeText(carrosselCODE163.innerText);
        
  carrosselBTN163.classList.add('active');
  setTimeout(function(){
    carrosselBTN163.classList.remove('active');
  },2500);
};

const carrosselBTN164 = document.getElementById('button-copy164');
const carrosselCODE164 = document.getElementById('code164');

carrosselBTN164.addEventListener('click', copyText164)
function copyText164(){
  navigator.clipboard.writeText(carrosselCODE164.innerText);
        
  carrosselBTN164.classList.add('active');
  setTimeout(function(){
    carrosselBTN164.classList.remove('active');
  },2500);
};

const carrosselBTN165 = document.getElementById('button-copy165');
const carrosselCODE165 = document.getElementById('code165');

carrosselBTN165.addEventListener('click', copyText165)
function copyText165(){
  navigator.clipboard.writeText(carrosselCODE165.innerText);
        
  carrosselBTN165.classList.add('active');
  setTimeout(function(){
    carrosselBTN165.classList.remove('active');
  },2500);
};

const carrosselBTN166 = document.getElementById('button-copy166');
const carrosselCODE166 = document.getElementById('code166');

carrosselBTN166.addEventListener('click', copyText166)
function copyText166(){
  navigator.clipboard.writeText(carrosselCODE166.innerText);
        
  carrosselBTN166.classList.add('active');
  setTimeout(function(){
    carrosselBTN166.classList.remove('active');
  },2500);
};

const carrosselBTN167 = document.getElementById('button-copy167');
const carrosselCODE167 = document.getElementById('code167');

carrosselBTN167.addEventListener('click', copyText167)
function copyText167(){
  navigator.clipboard.writeText(carrosselCODE167.innerText);
        
  carrosselBTN167.classList.add('active');
  setTimeout(function(){
    carrosselBTN167.classList.remove('active');
  },2500);
};

const carrosselBTN168 = document.getElementById('button-copy168');
const carrosselCODE168 = document.getElementById('code168');

carrosselBTN168.addEventListener('click', copyText168)
function copyText168(){
  navigator.clipboard.writeText(carrosselCODE168.innerText);
        
  carrosselBTN168.classList.add('active');
  setTimeout(function(){
    carrosselBTN168.classList.remove('active');
  },2500);
};

const carrosselBTN169 = document.getElementById('button-copy169');
const carrosselCODE169 = document.getElementById('code169');

carrosselBTN169.addEventListener('click', copyText169)
function copyText169(){
  navigator.clipboard.writeText(carrosselCODE169.innerText);
        
  carrosselBTN169.classList.add('active');
  setTimeout(function(){
    carrosselBTN169.classList.remove('active');
  },2500);
};

const carrosselBTN170 = document.getElementById('button-copy170');
const carrosselCODE170 = document.getElementById('code170');

carrosselBTN170.addEventListener('click', copyText170)
function copyText170(){
  navigator.clipboard.writeText(carrosselCODE170.innerText);
        
  carrosselBTN170.classList.add('active');
  setTimeout(function(){
    carrosselBTN170.classList.remove('active');
  },2500);
};

const carrosselBTN171 = document.getElementById('button-copy171');
const carrosselCODE171 = document.getElementById('code171');

carrosselBTN171.addEventListener('click', copyText171)
function copyText171(){
  navigator.clipboard.writeText(carrosselCODE171.innerText);
        
  carrosselBTN171.classList.add('active');
  setTimeout(function(){
    carrosselBTN171.classList.remove('active');
  },2500);
};

const carrosselBTN172 = document.getElementById('button-copy172');
const carrosselCODE172 = document.getElementById('code172');

carrosselBTN172.addEventListener('click', copyText172)
function copyText172(){
  navigator.clipboard.writeText(carrosselCODE172.innerText);
        
  carrosselBTN172.classList.add('active');
  setTimeout(function(){
    carrosselBTN172.classList.remove('active');
  },2500);
};

const carrosselBTN173 = document.getElementById('button-copy173');
const carrosselCODE173 = document.getElementById('code173');

carrosselBTN173.addEventListener('click', copyText173)
function copyText173(){
  navigator.clipboard.writeText(carrosselCODE173.innerText);
        
  carrosselBTN173.classList.add('active');
  setTimeout(function(){
    carrosselBTN173.classList.remove('active');
  },2500);
};

const carrosselBTN174 = document.getElementById('button-copy174');
const carrosselCODE174 = document.getElementById('code174');

carrosselBTN174.addEventListener('click', copyText174)
function copyText174(){
  navigator.clipboard.writeText(carrosselCODE174.innerText);
        
  carrosselBTN174.classList.add('active');
  setTimeout(function(){
    carrosselBTN174.classList.remove('active');
  },2500);
};

const carrosselBTN175 = document.getElementById('button-copy175');
const carrosselCODE175 = document.getElementById('code175');

carrosselBTN175.addEventListener('click', copyText175)
function copyText175(){
  navigator.clipboard.writeText(carrosselCODE175.innerText);
        
  carrosselBTN175.classList.add('active');
  setTimeout(function(){
    carrosselBTN175.classList.remove('active');
  },2500);
};

const carrosselBTN176 = document.getElementById('button-copy176');
const carrosselCODE176 = document.getElementById('code176');

carrosselBTN176.addEventListener('click', copyText176)
function copyText176(){
  navigator.clipboard.writeText(carrosselCODE176.innerText);
        
  carrosselBTN176.classList.add('active');
  setTimeout(function(){
    carrosselBTN176.classList.remove('active');
  },2500);
};

const carrosselBTN177 = document.getElementById('button-copy177');
const carrosselCODE177 = document.getElementById('code177');

carrosselBTN177.addEventListener('click', copyText177)
function copyText177(){
  navigator.clipboard.writeText(carrosselCODE177.innerText);
        
  carrosselBTN177.classList.add('active');
  setTimeout(function(){
    carrosselBTN177.classList.remove('active');
  },2500);
};

const carrosselBTN178 = document.getElementById('button-copy178');
const carrosselCODE178 = document.getElementById('code178');

carrosselBTN178.addEventListener('click', copyText178)
function copyText178(){
  navigator.clipboard.writeText(carrosselCODE178.innerText);
        
  carrosselBTN178.classList.add('active');
  setTimeout(function(){
    carrosselBTN178.classList.remove('active');
  },2500);
};

const carrosselBTN179 = document.getElementById('button-copy179');
const carrosselCODE179 = document.getElementById('code179');

carrosselBTN179.addEventListener('click', copyText179)
function copyText179(){
  navigator.clipboard.writeText(carrosselCODE179.innerText);
        
  carrosselBTN179.classList.add('active');
  setTimeout(function(){
    carrosselBTN179.classList.remove('active');
  },2500);
};

const carrosselBTN180 = document.getElementById('button-copy180');
const carrosselCODE180 = document.getElementById('code180');

carrosselBTN180.addEventListener('click', copyText180)
function copyText180(){
  navigator.clipboard.writeText(carrosselCODE180.innerText);
        
  carrosselBTN180.classList.add('active');
  setTimeout(function(){
    carrosselBTN180.classList.remove('active');
  },2500);
};

const carrosselBTN181 = document.getElementById('button-copy181');
const carrosselCODE181 = document.getElementById('code181');

carrosselBTN181.addEventListener('click', copyText181)
function copyText181(){
  navigator.clipboard.writeText(carrosselCODE181.innerText);
        
  carrosselBTN181.classList.add('active');
  setTimeout(function(){
    carrosselBTN181.classList.remove('active');
  },2500);
};

const carrosselBTN182 = document.getElementById('button-copy182');
const carrosselCODE182 = document.getElementById('code182');

carrosselBTN182.addEventListener('click', copyText182)
function copyText182(){
  navigator.clipboard.writeText(carrosselCODE182.innerText);
        
  carrosselBTN182.classList.add('active');
  setTimeout(function(){
    carrosselBTN182.classList.remove('active');
  },2500);
};

const carrosselBTN183 = document.getElementById('button-copy183');
const carrosselCODE183 = document.getElementById('code183');

carrosselBTN183.addEventListener('click', copyText183)
function copyText183(){
  navigator.clipboard.writeText(carrosselCODE183.innerText);
        
  carrosselBTN183.classList.add('active');
  setTimeout(function(){
    carrosselBTN183.classList.remove('active');
  },2500);
};

const carrosselBTN184 = document.getElementById('button-copy184');
const carrosselCODE184 = document.getElementById('code184');

carrosselBTN184.addEventListener('click', copyText184)
function copyText184(){
  navigator.clipboard.writeText(carrosselCODE184.innerText);
        
  carrosselBTN184.classList.add('active');
  setTimeout(function(){
    carrosselBTN184.classList.remove('active');
  },2500);
};

const carrosselBTN185 = document.getElementById('button-copy185');
const carrosselCODE185 = document.getElementById('code185');

carrosselBTN185.addEventListener('click', copyText185)
function copyText185(){
  navigator.clipboard.writeText(carrosselCODE185.innerText);
        
  carrosselBTN185.classList.add('active');
  setTimeout(function(){
    carrosselBTN185.classList.remove('active');
  },2500);
};

const carrosselBTN186 = document.getElementById('button-copy186');
const carrosselCODE186 = document.getElementById('code186');

carrosselBTN186.addEventListener('click', copyText186)
function copyText186(){
  navigator.clipboard.writeText(carrosselCODE186.innerText);
        
  carrosselBTN186.classList.add('active');
  setTimeout(function(){
    carrosselBTN186.classList.remove('active');
  },2500);
};

const carrosselBTN187 = document.getElementById('button-copy187');
const carrosselCODE187 = document.getElementById('code187');

carrosselBTN187.addEventListener('click', copyText187)
function copyText187(){
  navigator.clipboard.writeText(carrosselCODE187.innerText);
        
  carrosselBTN187.classList.add('active');
  setTimeout(function(){
    carrosselBTN187.classList.remove('active');
  },2500);
};

const carrosselBTN188 = document.getElementById('button-copy188');
const carrosselCODE188 = document.getElementById('code188');

carrosselBTN188.addEventListener('click', copyText188)
function copyText188(){
  navigator.clipboard.writeText(carrosselCODE188.innerText);
        
  carrosselBTN188.classList.add('active');
  setTimeout(function(){
    carrosselBTN188.classList.remove('active');
  },2500);
};

const carrosselBTN189 = document.getElementById('button-copy189');
const carrosselCODE189 = document.getElementById('code189');

carrosselBTN189.addEventListener('click', copyText189)
function copyText189(){
  navigator.clipboard.writeText(carrosselCODE189.innerText);
        
  carrosselBTN189.classList.add('active');
  setTimeout(function(){
    carrosselBTN189.classList.remove('active');
  },2500);
};

const carrosselBTN190 = document.getElementById('button-copy190');
const carrosselCODE190 = document.getElementById('code190');

carrosselBTN190.addEventListener('click', copyText190)
function copyText190(){
  navigator.clipboard.writeText(carrosselCODE190.innerText);
        
  carrosselBTN190.classList.add('active');
  setTimeout(function(){
    carrosselBTN190.classList.remove('active');
  },2500);
};

const carrosselBTN191 = document.getElementById('button-copy191');
const carrosselCODE191 = document.getElementById('code191');

carrosselBTN191.addEventListener('click', copyText191)
function copyText191(){
  navigator.clipboard.writeText(carrosselCODE191.innerText);
        
  carrosselBTN191.classList.add('active');
  setTimeout(function(){
    carrosselBTN191.classList.remove('active');
  },2500);
};

const carrosselBTN192 = document.getElementById('button-copy192');
const carrosselCODE192 = document.getElementById('code192');

carrosselBTN192.addEventListener('click', copyText192)
function copyText192(){
  navigator.clipboard.writeText(carrosselCODE192.innerText);
        
  carrosselBTN192.classList.add('active');
  setTimeout(function(){
    carrosselBTN192.classList.remove('active');
  },2500);
};

const carrosselBTN193 = document.getElementById('button-copy193');
const carrosselCODE193 = document.getElementById('code193');

carrosselBTN193.addEventListener('click', copyText193)
function copyText193(){
  navigator.clipboard.writeText(carrosselCODE193.innerText);
        
  carrosselBTN193.classList.add('active');
  setTimeout(function(){
    carrosselBTN193.classList.remove('active');
  },2500);
};

const carrosselBTN194 = document.getElementById('button-copy194');
const carrosselCODE194 = document.getElementById('code194');

carrosselBTN194.addEventListener('click', copyText194)
function copyText194(){
  navigator.clipboard.writeText(carrosselCODE194.innerText);
        
  carrosselBTN194.classList.add('active');
  setTimeout(function(){
    carrosselBTN194.classList.remove('active');
  },2500);
};

const carrosselBTN195 = document.getElementById('button-copy195');
const carrosselCODE195 = document.getElementById('code195');

carrosselBTN195.addEventListener('click', copyText195)
function copyText195(){
  navigator.clipboard.writeText(carrosselCODE195.innerText);
        
  carrosselBTN195.classList.add('active');
  setTimeout(function(){
    carrosselBTN195.classList.remove('active');
  },2500);
};

const carrosselBTN196 = document.getElementById('button-copy196');
const carrosselCODE196 = document.getElementById('code196');

carrosselBTN196.addEventListener('click', copyText196)
function copyText196(){
  navigator.clipboard.writeText(carrosselCODE196.innerText);
        
  carrosselBTN196.classList.add('active');
  setTimeout(function(){
    carrosselBTN196.classList.remove('active');
  },2500);
};

const carrosselBTN197 = document.getElementById('button-copy197');
const carrosselCODE197 = document.getElementById('code197');

carrosselBTN197.addEventListener('click', copyText197)
function copyText197(){
  navigator.clipboard.writeText(carrosselCODE197.innerText);
        
  carrosselBTN197.classList.add('active');
  setTimeout(function(){
    carrosselBTN197.classList.remove('active');
  },2500);
};

const carrosselBTN198 = document.getElementById('button-copy198');
const carrosselCODE198 = document.getElementById('code198');

carrosselBTN198.addEventListener('click', copyText198)
function copyText198(){
  navigator.clipboard.writeText(carrosselCODE198.innerText);
        
  carrosselBTN198.classList.add('active');
  setTimeout(function(){
    carrosselBTN198.classList.remove('active');
  },2500);
};

const carrosselBTN199 = document.getElementById('button-copy199');
const carrosselCODE199 = document.getElementById('code199');

carrosselBTN199.addEventListener('click', copyText199)
function copyText199(){
  navigator.clipboard.writeText(carrosselCODE199.innerText);
        
  carrosselBTN199.classList.add('active');
  setTimeout(function(){
    carrosselBTN199.classList.remove('active');
  },2500);
};

const carrosselBTN200 = document.getElementById('button-copy200');
const carrosselCODE200 = document.getElementById('code200');

carrosselBTN200.addEventListener('click', copyText200)
function copyText200(){
  navigator.clipboard.writeText(carrosselCODE200.innerText);
        
  carrosselBTN200.classList.add('active');
  setTimeout(function(){
    carrosselBTN200.classList.remove('active');
  },2500);
};

const carrosselBTN201 = document.getElementById('button-copy201');
const carrosselCODE201 = document.getElementById('code201');

carrosselBTN201.addEventListener('click', copyText201)
function copyText201(){
  navigator.clipboard.writeText(carrosselCODE201.innerText);
        
  carrosselBTN201.classList.add('active');
  setTimeout(function(){
    carrosselBTN201.classList.remove('active');
  },2500);
};

const carrosselBTN202 = document.getElementById('button-copy202');
const carrosselCODE202 = document.getElementById('code202');

carrosselBTN202.addEventListener('click', copyText202)
function copyText202(){
  navigator.clipboard.writeText(carrosselCODE202.innerText);
        
  carrosselBTN202.classList.add('active');
  setTimeout(function(){
    carrosselBTN202.classList.remove('active');
  },2500);
};

const carrosselBTN203 = document.getElementById('button-copy203');
const carrosselCODE203 = document.getElementById('code203');

carrosselBTN203.addEventListener('click', copyText203)
function copyText203(){
  navigator.clipboard.writeText(carrosselCODE203.innerText);
        
  carrosselBTN203.classList.add('active');
  setTimeout(function(){
    carrosselBTN203.classList.remove('active');
  },2500);
};

const carrosselBTN204 = document.getElementById('button-copy204');
const carrosselCODE204 = document.getElementById('code204');

carrosselBTN204.addEventListener('click', copyText204)
function copyText204(){
  navigator.clipboard.writeText(carrosselCODE204.innerText);
        
  carrosselBTN204.classList.add('active');
  setTimeout(function(){
    carrosselBTN204.classList.remove('active');
  },2500);
};

const carrosselBTN205 = document.getElementById('button-copy205');
const carrosselCODE205 = document.getElementById('code205');

carrosselBTN205.addEventListener('click', copyText205)
function copyText205(){
  navigator.clipboard.writeText(carrosselCODE205.innerText);
        
  carrosselBTN205.classList.add('active');
  setTimeout(function(){
    carrosselBTN205.classList.remove('active');
  },2500);
};

const carrosselBTN206 = document.getElementById('button-copy206');
const carrosselCODE206 = document.getElementById('code206');

carrosselBTN206.addEventListener('click', copyText206)
function copyText206(){
  navigator.clipboard.writeText(carrosselCODE206.innerText);
        
  carrosselBTN206.classList.add('active');
  setTimeout(function(){
    carrosselBTN206.classList.remove('active');
  },2500);
};

const carrosselBTN207 = document.getElementById('button-copy207');
const carrosselCODE207 = document.getElementById('code207');

carrosselBTN207.addEventListener('click', copyText207)
function copyText207(){
  navigator.clipboard.writeText(carrosselCODE207.innerText);
        
  carrosselBTN207.classList.add('active');
  setTimeout(function(){
    carrosselBTN207.classList.remove('active');
  },2500);
};

const carrosselBTN208 = document.getElementById('button-copy208');
const carrosselCODE208 = document.getElementById('code208');

carrosselBTN208.addEventListener('click', copyText208)
function copyText208(){
  navigator.clipboard.writeText(carrosselCODE208.innerText);
        
  carrosselBTN208.classList.add('active');
  setTimeout(function(){
    carrosselBTN208.classList.remove('active');
  },2500);
};

const carrosselBTN209 = document.getElementById('button-copy209');
const carrosselCODE209 = document.getElementById('code209');

carrosselBTN209.addEventListener('click', copyText209)
function copyText209(){
  navigator.clipboard.writeText(carrosselCODE209.innerText);
        
  carrosselBTN209.classList.add('active');
  setTimeout(function(){
    carrosselBTN209.classList.remove('active');
  },2500);
};

const carrosselBTN210 = document.getElementById('button-copy210');
const carrosselCODE210 = document.getElementById('code210');

carrosselBTN210.addEventListener('click', copyText210)
function copyText210(){
  navigator.clipboard.writeText(carrosselCODE210.innerText);
        
  carrosselBTN210.classList.add('active');
  setTimeout(function(){
    carrosselBTN210.classList.remove('active');
  },2500);
};

const carrosselBTN211 = document.getElementById('button-copy211');
const carrosselCODE211 = document.getElementById('code211');

carrosselBTN211.addEventListener('click', copyText211)
function copyText211(){
  navigator.clipboard.writeText(carrosselCODE211.innerText);
        
  carrosselBTN211.classList.add('active');
  setTimeout(function(){
    carrosselBTN211.classList.remove('active');
  },2500);
};

const carrosselBTN212 = document.getElementById('button-copy212');
const carrosselCODE212 = document.getElementById('code212');

carrosselBTN212.addEventListener('click', copyText212)
function copyText212(){
  navigator.clipboard.writeText(carrosselCODE212.innerText);
        
  carrosselBTN212.classList.add('active');
  setTimeout(function(){
    carrosselBTN212.classList.remove('active');
  },2500);
};

const carrosselBTN213 = document.getElementById('button-copy213');
const carrosselCODE213 = document.getElementById('code213');

carrosselBTN213.addEventListener('click', copyText213)
function copyText213(){
  navigator.clipboard.writeText(carrosselCODE213.innerText);
        
  carrosselBTN213.classList.add('active');
  setTimeout(function(){
    carrosselBTN213.classList.remove('active');
  },2500);
};

const carrosselBTN214 = document.getElementById('button-copy214');
const carrosselCODE214 = document.getElementById('code214');

carrosselBTN214.addEventListener('click', copyText214)
function copyText214(){
  navigator.clipboard.writeText(carrosselCODE214.innerText);
        
  carrosselBTN214.classList.add('active');
  setTimeout(function(){
    carrosselBTN214.classList.remove('active');
  },2500);
};

const carrosselBTN215 = document.getElementById('button-copy215');
const carrosselCODE215 = document.getElementById('code215');

carrosselBTN215.addEventListener('click', copyText215)
function copyText215(){
  navigator.clipboard.writeText(carrosselCODE215.innerText);
        
  carrosselBTN215.classList.add('active');
  setTimeout(function(){
    carrosselBTN215.classList.remove('active');
  },2500);
};

const carrosselBTN216 = document.getElementById('button-copy216');
const carrosselCODE216 = document.getElementById('code216');

carrosselBTN216.addEventListener('click', copyText216)
function copyText216(){
  navigator.clipboard.writeText(carrosselCODE216.innerText);
        
  carrosselBTN216.classList.add('active');
  setTimeout(function(){
    carrosselBTN216.classList.remove('active');
  },2500);
};

const carrosselBTN217 = document.getElementById('button-copy217');
const carrosselCODE217 = document.getElementById('code217');

carrosselBTN217.addEventListener('click', copyText217)
function copyText217(){
  navigator.clipboard.writeText(carrosselCODE217.innerText);
        
  carrosselBTN217.classList.add('active');
  setTimeout(function(){
    carrosselBTN217.classList.remove('active');
  },2500);
};

const carrosselBTN218 = document.getElementById('button-copy218');
const carrosselCODE218 = document.getElementById('code218');

carrosselBTN218.addEventListener('click', copyText218)
function copyText218(){
  navigator.clipboard.writeText(carrosselCODE218.innerText);
        
  carrosselBTN218.classList.add('active');
  setTimeout(function(){
    carrosselBTN218.classList.remove('active');
  },2500);
};

const carrosselBTN219 = document.getElementById('button-copy219');
const carrosselCODE219 = document.getElementById('code219');

carrosselBTN219.addEventListener('click', copyText219)
function copyText219(){
  navigator.clipboard.writeText(carrosselCODE219.innerText);
        
  carrosselBTN219.classList.add('active');
  setTimeout(function(){
    carrosselBTN219.classList.remove('active');
  },2500);
};

const carrosselBTN220 = document.getElementById('button-copy220');
const carrosselCODE220 = document.getElementById('code220');

carrosselBTN220.addEventListener('click', copyText220)
function copyText220(){
  navigator.clipboard.writeText(carrosselCODE220.innerText);
        
  carrosselBTN220.classList.add('active');
  setTimeout(function(){
    carrosselBTN220.classList.remove('active');
  },2500);
};

const carrosselBTN221 = document.getElementById('button-copy221');
const carrosselCODE221 = document.getElementById('code221');

carrosselBTN221.addEventListener('click', copyText221)
function copyText221(){
  navigator.clipboard.writeText(carrosselCODE221.innerText);
        
  carrosselBTN221.classList.add('active');
  setTimeout(function(){
    carrosselBTN221.classList.remove('active');
  },2500);
};

const carrosselBTN222 = document.getElementById('button-copy222');
const carrosselCODE222 = document.getElementById('code222');

carrosselBTN222.addEventListener('click', copyText222)
function copyText222(){
  navigator.clipboard.writeText(carrosselCODE222.innerText);
        
  carrosselBTN222.classList.add('active');
  setTimeout(function(){
    carrosselBTN222.classList.remove('active');
  },2500);
};

const carrosselBTN223 = document.getElementById('button-copy223');
const carrosselCODE223 = document.getElementById('code223');

carrosselBTN223.addEventListener('click', copyText223)
function copyText223(){
  navigator.clipboard.writeText(carrosselCODE223.innerText);
        
  carrosselBTN223.classList.add('active');
  setTimeout(function(){
    carrosselBTN223.classList.remove('active');
  },2500);
};

const carrosselBTN224 = document.getElementById('button-copy224');
const carrosselCODE224 = document.getElementById('code224');

carrosselBTN224.addEventListener('click', copyText224)
function copyText224(){
  navigator.clipboard.writeText(carrosselCODE224.innerText);
        
  carrosselBTN224.classList.add('active');
  setTimeout(function(){
    carrosselBTN224.classList.remove('active');
  },2500);
};

const carrosselBTN225 = document.getElementById('button-copy225');
const carrosselCODE225 = document.getElementById('code225');

carrosselBTN225.addEventListener('click', copyText225)
function copyText225(){
  navigator.clipboard.writeText(carrosselCODE225.innerText);
        
  carrosselBTN225.classList.add('active');
  setTimeout(function(){
    carrosselBTN225.classList.remove('active');
  },2500);
};

const carrosselBTN226 = document.getElementById('button-copy226');
const carrosselCODE226 = document.getElementById('code226');

carrosselBTN226.addEventListener('click', copyText226)
function copyText226(){
  navigator.clipboard.writeText(carrosselCODE226.innerText);
        
  carrosselBTN226.classList.add('active');
  setTimeout(function(){
    carrosselBTN226.classList.remove('active');
  },2500);
};

const carrosselBTN227 = document.getElementById('button-copy227');
const carrosselCODE227 = document.getElementById('code227');

carrosselBTN227.addEventListener('click', copyText227)
function copyText227(){
  navigator.clipboard.writeText(carrosselCODE227.innerText);
        
  carrosselBTN227.classList.add('active');
  setTimeout(function(){
    carrosselBTN227.classList.remove('active');
  },2500);
};

const carrosselBTN228 = document.getElementById('button-copy228');
const carrosselCODE228 = document.getElementById('code228');

carrosselBTN228.addEventListener('click', copyText228)
function copyText228(){
  navigator.clipboard.writeText(carrosselCODE228.innerText);
        
  carrosselBTN228.classList.add('active');
  setTimeout(function(){
    carrosselBTN228.classList.remove('active');
  },2500);
};

const carrosselBTN229 = document.getElementById('button-copy229');
const carrosselCODE229 = document.getElementById('code229');

carrosselBTN229.addEventListener('click', copyText229)
function copyText229(){
  navigator.clipboard.writeText(carrosselCODE229.innerText);
        
  carrosselBTN229.classList.add('active');
  setTimeout(function(){
    carrosselBTN229.classList.remove('active');
  },2500);
};

const carrosselBTN230 = document.getElementById('button-copy230');
const carrosselCODE230 = document.getElementById('code230');

carrosselBTN230.addEventListener('click', copyText230)
function copyText230(){
  navigator.clipboard.writeText(carrosselCODE230.innerText);
        
  carrosselBTN230.classList.add('active');
  setTimeout(function(){
    carrosselBTN230.classList.remove('active');
  },2500);
};

const carrosselBTN231 = document.getElementById('button-copy231');
const carrosselCODE231 = document.getElementById('code231');

carrosselBTN231.addEventListener('click', copyText231)
function copyText231(){
  navigator.clipboard.writeText(carrosselCODE231.innerText);
        
  carrosselBTN231.classList.add('active');
  setTimeout(function(){
    carrosselBTN231.classList.remove('active');
  },2500);
};

const carrosselBTN232 = document.getElementById('button-copy232');
const carrosselCODE232 = document.getElementById('code232');

carrosselBTN232.addEventListener('click', copyText232)
function copyText232(){
  navigator.clipboard.writeText(carrosselCODE232.innerText);
        
  carrosselBTN232.classList.add('active');
  setTimeout(function(){
    carrosselBTN232.classList.remove('active');
  },2500);
};

const carrosselBTN233 = document.getElementById('button-copy233');
const carrosselCODE233 = document.getElementById('code233');

carrosselBTN233.addEventListener('click', copyText233)
function copyText233(){
  navigator.clipboard.writeText(carrosselCODE233.innerText);
        
  carrosselBTN233.classList.add('active');
  setTimeout(function(){
    carrosselBTN233.classList.remove('active');
  },2500);
};

const carrosselBTN234 = document.getElementById('button-copy234');
const carrosselCODE234 = document.getElementById('code234');

carrosselBTN234.addEventListener('click', copyText234)
function copyText234(){
  navigator.clipboard.writeText(carrosselCODE234.innerText);
        
  carrosselBTN234.classList.add('active');
  setTimeout(function(){
    carrosselBTN234.classList.remove('active');
  },2500);
};

const carrosselBTN235 = document.getElementById('button-copy235');
const carrosselCODE235 = document.getElementById('code235');

carrosselBTN235.addEventListener('click', copyText235)
function copyText235(){
  navigator.clipboard.writeText(carrosselCODE235.innerText);
        
  carrosselBTN235.classList.add('active');
  setTimeout(function(){
    carrosselBTN235.classList.remove('active');
  },2500);
};

const carrosselBTN236 = document.getElementById('button-copy236');
const carrosselCODE236 = document.getElementById('code236');

carrosselBTN236.addEventListener('click', copyText236)
function copyText236(){
  navigator.clipboard.writeText(carrosselCODE236.innerText);
        
  carrosselBTN236.classList.add('active');
  setTimeout(function(){
    carrosselBTN236.classList.remove('active');
  },2500);
};

const carrosselBTN237 = document.getElementById('button-copy237');
const carrosselCODE237 = document.getElementById('code237');

carrosselBTN237.addEventListener('click', copyText237)
function copyText237(){
  navigator.clipboard.writeText(carrosselCODE237.innerText);
        
  carrosselBTN237.classList.add('active');
  setTimeout(function(){
    carrosselBTN237.classList.remove('active');
  },2500);
};

const carrosselBTN238 = document.getElementById('button-copy238');
const carrosselCODE238 = document.getElementById('code238');

carrosselBTN238.addEventListener('click', copyText238)
function copyText238(){
  navigator.clipboard.writeText(carrosselCODE238.innerText);
        
  carrosselBTN238.classList.add('active');
  setTimeout(function(){
    carrosselBTN238.classList.remove('active');
  },2500);
};

const carrosselBTN239 = document.getElementById('button-copy239');
const carrosselCODE239 = document.getElementById('code239');

carrosselBTN239.addEventListener('click', copyText239)
function copyText239(){
  navigator.clipboard.writeText(carrosselCODE239.innerText);
        
  carrosselBTN239.classList.add('active');
  setTimeout(function(){
    carrosselBTN239.classList.remove('active');
  },2500);
};

const carrosselBTN240 = document.getElementById('button-copy240');
const carrosselCODE240 = document.getElementById('code240');

carrosselBTN240.addEventListener('click', copyText240)
function copyText240(){
  navigator.clipboard.writeText(carrosselCODE240.innerText);
        
  carrosselBTN240.classList.add('active');
  setTimeout(function(){
    carrosselBTN240.classList.remove('active');
  },2500);
};

const carrosselBTN241 = document.getElementById('button-copy241');
const carrosselCODE241 = document.getElementById('code241');

carrosselBTN241.addEventListener('click', copyText241)
function copyText241(){
  navigator.clipboard.writeText(carrosselCODE241.innerText);
        
  carrosselBTN241.classList.add('active');
  setTimeout(function(){
    carrosselBTN241.classList.remove('active');
  },2500);
};

const carrosselBTN242 = document.getElementById('button-copy242');
const carrosselCODE242 = document.getElementById('code242');

carrosselBTN242.addEventListener('click', copyText242)
function copyText242(){
  navigator.clipboard.writeText(carrosselCODE242.innerText);
        
  carrosselBTN242.classList.add('active');
  setTimeout(function(){
    carrosselBTN242.classList.remove('active');
  },2500);
};

const carrosselBTN243 = document.getElementById('button-copy243');
const carrosselCODE243 = document.getElementById('code243');

carrosselBTN243.addEventListener('click', copyText243)
function copyText243(){
  navigator.clipboard.writeText(carrosselCODE243.innerText);
        
  carrosselBTN243.classList.add('active');
  setTimeout(function(){
    carrosselBTN243.classList.remove('active');
  },2500);
};

const carrosselBTN244 = document.getElementById('button-copy244');
const carrosselCODE244 = document.getElementById('code244');

carrosselBTN244.addEventListener('click', copyText244)
function copyText244(){
  navigator.clipboard.writeText(carrosselCODE244.innerText);
        
  carrosselBTN244.classList.add('active');
  setTimeout(function(){
    carrosselBTN244.classList.remove('active');
  },2500);
};

const carrosselBTN245 = document.getElementById('button-copy245');
const carrosselCODE245 = document.getElementById('code245');

carrosselBTN245.addEventListener('click', copyText245)
function copyText245(){
  navigator.clipboard.writeText(carrosselCODE245.innerText);
        
  carrosselBTN245.classList.add('active');
  setTimeout(function(){
    carrosselBTN245.classList.remove('active');
  },2500);
};

const carrosselBTN246 = document.getElementById('button-copy246');
const carrosselCODE246 = document.getElementById('code246');

carrosselBTN246.addEventListener('click', copyText246)
function copyText246(){
  navigator.clipboard.writeText(carrosselCODE246.innerText);
        
  carrosselBTN246.classList.add('active');
  setTimeout(function(){
    carrosselBTN246.classList.remove('active');
  },2500);
};

const carrosselBTN247 = document.getElementById('button-copy247');
const carrosselCODE247 = document.getElementById('code247');

carrosselBTN247.addEventListener('click', copyText247)
function copyText247(){
  navigator.clipboard.writeText(carrosselCODE247.innerText);
        
  carrosselBTN247.classList.add('active');
  setTimeout(function(){
    carrosselBTN247.classList.remove('active');
  },2500);
};

const carrosselBTN248 = document.getElementById('button-copy248');
const carrosselCODE248 = document.getElementById('code248');

carrosselBTN248.addEventListener('click', copyText248)
function copyText248(){
  navigator.clipboard.writeText(carrosselCODE248.innerText);
        
  carrosselBTN248.classList.add('active');
  setTimeout(function(){
    carrosselBTN248.classList.remove('active');
  },2500);
};

const carrosselBTN249 = document.getElementById('button-copy249');
const carrosselCODE249 = document.getElementById('code249');

carrosselBTN249.addEventListener('click', copyText249)
function copyText249(){
  navigator.clipboard.writeText(carrosselCODE249.innerText);
        
  carrosselBTN249.classList.add('active');
  setTimeout(function(){
    carrosselBTN249.classList.remove('active');
  },2500);
};

const carrosselBTN250 = document.getElementById('button-copy250');
const carrosselCODE250 = document.getElementById('code250');

carrosselBTN250.addEventListener('click', copyText250)
function copyText250(){
  navigator.clipboard.writeText(carrosselCODE250.innerText);
        
  carrosselBTN250.classList.add('active');
  setTimeout(function(){
    carrosselBTN250.classList.remove('active');
  },2500);
};

const carrosselBTN251 = document.getElementById('button-copy251');
const carrosselCODE251 = document.getElementById('code251');

carrosselBTN251.addEventListener('click', copyText251)
function copyText251(){
  navigator.clipboard.writeText(carrosselCODE251.innerText);
        
  carrosselBTN251.classList.add('active');
  setTimeout(function(){
    carrosselBTN251.classList.remove('active');
  },2500);
};

const carrosselBTN252 = document.getElementById('button-copy252');
const carrosselCODE252 = document.getElementById('code252');

carrosselBTN252.addEventListener('click', copyText252)
function copyText252(){
  navigator.clipboard.writeText(carrosselCODE252.innerText);
        
  carrosselBTN252.classList.add('active');
  setTimeout(function(){
    carrosselBTN252.classList.remove('active');
  },2500);
};

const carrosselBTN253 = document.getElementById('button-copy253');
const carrosselCODE253 = document.getElementById('code253');

carrosselBTN253.addEventListener('click', copyText253)
function copyText253(){
  navigator.clipboard.writeText(carrosselCODE253.innerText);
        
  carrosselBTN253.classList.add('active');
  setTimeout(function(){
    carrosselBTN253.classList.remove('active');
  },2500);
};

const carrosselBTN254 = document.getElementById('button-copy254');
const carrosselCODE254 = document.getElementById('code254');

carrosselBTN254.addEventListener('click', copyText254)
function copyText254(){
  navigator.clipboard.writeText(carrosselCODE254.innerText);
        
  carrosselBTN254.classList.add('active');
  setTimeout(function(){
    carrosselBTN254.classList.remove('active');
  },2500);
};

const carrosselBTN255 = document.getElementById('button-copy255');
const carrosselCODE255 = document.getElementById('code255');

carrosselBTN255.addEventListener('click', copyText255)
function copyText255(){
  navigator.clipboard.writeText(carrosselCODE255.innerText);
        
  carrosselBTN255.classList.add('active');
  setTimeout(function(){
    carrosselBTN255.classList.remove('active');
  },2500);
};

const carrosselBTN256 = document.getElementById('button-copy256');
const carrosselCODE256 = document.getElementById('code256');

carrosselBTN256.addEventListener('click', copyText256)
function copyText256(){
  navigator.clipboard.writeText(carrosselCODE256.innerText);
        
  carrosselBTN256.classList.add('active');
  setTimeout(function(){
    carrosselBTN256.classList.remove('active');
  },2500);
};

const carrosselBTN257 = document.getElementById('button-copy257');
const carrosselCODE257 = document.getElementById('code257');

carrosselBTN257.addEventListener('click', copyText257)
function copyText257(){
  navigator.clipboard.writeText(carrosselCODE257.innerText);
        
  carrosselBTN257.classList.add('active');
  setTimeout(function(){
    carrosselBTN257.classList.remove('active');
  },2500);
};

const carrosselBTN258 = document.getElementById('button-copy258');
const carrosselCODE258 = document.getElementById('code258');

carrosselBTN258.addEventListener('click', copyText258)
function copyText258(){
  navigator.clipboard.writeText(carrosselCODE258.innerText);
        
  carrosselBTN258.classList.add('active');
  setTimeout(function(){
    carrosselBTN258.classList.remove('active');
  },2500);
};

const carrosselBTN259 = document.getElementById('button-copy259');
const carrosselCODE259 = document.getElementById('code259');

carrosselBTN259.addEventListener('click', copyText259)
function copyText259(){
  navigator.clipboard.writeText(carrosselCODE259.innerText);
        
  carrosselBTN259.classList.add('active');
  setTimeout(function(){
    carrosselBTN259.classList.remove('active');
  },2500);
};

const carrosselBTN260 = document.getElementById('button-copy260');
const carrosselCODE260 = document.getElementById('code260');

carrosselBTN260.addEventListener('click', copyText260)
function copyText260(){
  navigator.clipboard.writeText(carrosselCODE260.innerText);
        
  carrosselBTN260.classList.add('active');
  setTimeout(function(){
    carrosselBTN260.classList.remove('active');
  },2500);
};

const carrosselBTN261 = document.getElementById('button-copy261');
const carrosselCODE261 = document.getElementById('code261');

carrosselBTN261.addEventListener('click', copyText261)
function copyText261(){
  navigator.clipboard.writeText(carrosselCODE261.innerText);
        
  carrosselBTN261.classList.add('active');
  setTimeout(function(){
    carrosselBTN261.classList.remove('active');
  },2500);
};

const carrosselBTN262 = document.getElementById('button-copy262');
const carrosselCODE262 = document.getElementById('code262');

carrosselBTN262.addEventListener('click', copyText262)
function copyText262(){
  navigator.clipboard.writeText(carrosselCODE262.innerText);
        
  carrosselBTN262.classList.add('active');
  setTimeout(function(){
    carrosselBTN262.classList.remove('active');
  },2500);
};

const carrosselBTN263 = document.getElementById('button-copy263');
const carrosselCODE263 = document.getElementById('code263');

carrosselBTN263.addEventListener('click', copyText263)
function copyText263(){
  navigator.clipboard.writeText(carrosselCODE263.innerText);
        
  carrosselBTN263.classList.add('active');
  setTimeout(function(){
    carrosselBTN263.classList.remove('active');
  },2500);
};

const carrosselBTN264 = document.getElementById('button-copy264');
const carrosselCODE264 = document.getElementById('code264');

carrosselBTN264.addEventListener('click', copyText264)
function copyText264(){
  navigator.clipboard.writeText(carrosselCODE264.innerText);
        
  carrosselBTN264.classList.add('active');
  setTimeout(function(){
    carrosselBTN264.classList.remove('active');
  },2500);
};

const carrosselBTN265 = document.getElementById('button-copy265');
const carrosselCODE265 = document.getElementById('code265');

carrosselBTN265.addEventListener('click', copyText265)
function copyText265(){
  navigator.clipboard.writeText(carrosselCODE265.innerText);
        
  carrosselBTN265.classList.add('active');
  setTimeout(function(){
    carrosselBTN265.classList.remove('active');
  },2500);
};

const carrosselBTN266 = document.getElementById('button-copy266');
const carrosselCODE266 = document.getElementById('code266');

carrosselBTN266.addEventListener('click', copyText266)
function copyText266(){
  navigator.clipboard.writeText(carrosselCODE266.innerText);
        
  carrosselBTN266.classList.add('active');
  setTimeout(function(){
    carrosselBTN266.classList.remove('active');
  },2500);
};

const carrosselBTN267 = document.getElementById('button-copy267');
const carrosselCODE267 = document.getElementById('code267');

carrosselBTN267.addEventListener('click', copyText267)
function copyText267(){
  navigator.clipboard.writeText(carrosselCODE267.innerText);
        
  carrosselBTN267.classList.add('active');
  setTimeout(function(){
    carrosselBTN267.classList.remove('active');
  },2500);
};

const carrosselBTN268 = document.getElementById('button-copy268');
const carrosselCODE268 = document.getElementById('code268');

carrosselBTN268.addEventListener('click', copyText268)
function copyText268(){
  navigator.clipboard.writeText(carrosselCODE268.innerText);
        
  carrosselBTN268.classList.add('active');
  setTimeout(function(){
    carrosselBTN268.classList.remove('active');
  },2500);
};

const carrosselBTN269 = document.getElementById('button-copy269');
const carrosselCODE269 = document.getElementById('code269');

carrosselBTN269.addEventListener('click', copyText269)
function copyText269(){
  navigator.clipboard.writeText(carrosselCODE269.innerText);
        
  carrosselBTN269.classList.add('active');
  setTimeout(function(){
    carrosselBTN269.classList.remove('active');
  },2500);
};

const carrosselBTN270 = document.getElementById('button-copy270');
const carrosselCODE270 = document.getElementById('code270');

carrosselBTN270.addEventListener('click', copyText270)
function copyText270(){
  navigator.clipboard.writeText(carrosselCODE270.innerText);
        
  carrosselBTN270.classList.add('active');
  setTimeout(function(){
    carrosselBTN270.classList.remove('active');
  },2500);
};

const carrosselBTN271 = document.getElementById('button-copy271');
const carrosselCODE271 = document.getElementById('code271');

carrosselBTN271.addEventListener('click', copyText271)
function copyText271(){
  navigator.clipboard.writeText(carrosselCODE271.innerText);
        
  carrosselBTN271.classList.add('active');
  setTimeout(function(){
    carrosselBTN271.classList.remove('active');
  },2500);
};

const carrosselBTN272 = document.getElementById('button-copy272');
const carrosselCODE272 = document.getElementById('code272');

carrosselBTN272.addEventListener('click', copyText272)
function copyText272(){
  navigator.clipboard.writeText(carrosselCODE272.innerText);
        
  carrosselBTN272.classList.add('active');
  setTimeout(function(){
    carrosselBTN272.classList.remove('active');
  },2500);
};

const carrosselBTN273 = document.getElementById('button-copy273');
const carrosselCODE273 = document.getElementById('code273');

carrosselBTN273.addEventListener('click', copyText273)
function copyText273(){
  navigator.clipboard.writeText(carrosselCODE273.innerText);
        
  carrosselBTN273.classList.add('active');
  setTimeout(function(){
    carrosselBTN273.classList.remove('active');
  },2500);
};

const carrosselBTN274 = document.getElementById('button-copy274');
const carrosselCODE274 = document.getElementById('code274');

carrosselBTN274.addEventListener('click', copyText274)
function copyText274(){
  navigator.clipboard.writeText(carrosselCODE274.innerText);
        
  carrosselBTN274.classList.add('active');
  setTimeout(function(){
    carrosselBTN274.classList.remove('active');
  },2500);
};

const carrosselBTN275 = document.getElementById('button-copy275');
const carrosselCODE275 = document.getElementById('code275');

carrosselBTN275.addEventListener('click', copyText275)
function copyText275(){
  navigator.clipboard.writeText(carrosselCODE275.innerText);
        
  carrosselBTN275.classList.add('active');
  setTimeout(function(){
    carrosselBTN275.classList.remove('active');
  },2500);
};

const carrosselBTN276 = document.getElementById('button-copy276');
const carrosselCODE276 = document.getElementById('code276');

carrosselBTN276.addEventListener('click', copyText276)
function copyText276(){
  navigator.clipboard.writeText(carrosselCODE276.innerText);
        
  carrosselBTN276.classList.add('active');
  setTimeout(function(){
    carrosselBTN276.classList.remove('active');
  },2500);
};

const carrosselBTN277 = document.getElementById('button-copy277');
const carrosselCODE277 = document.getElementById('code277');

carrosselBTN277.addEventListener('click', copyText277)
function copyText277(){
  navigator.clipboard.writeText(carrosselCODE277.innerText);
        
  carrosselBTN277.classList.add('active');
  setTimeout(function(){
    carrosselBTN277.classList.remove('active');
  },2500);
};

const carrosselBTN278 = document.getElementById('button-copy278');
const carrosselCODE278 = document.getElementById('code278');

carrosselBTN278.addEventListener('click', copyText278)
function copyText278(){
  navigator.clipboard.writeText(carrosselCODE278.innerText);
        
  carrosselBTN278.classList.add('active');
  setTimeout(function(){
    carrosselBTN278.classList.remove('active');
  },2500);
};

const carrosselBTN279 = document.getElementById('button-copy279');
const carrosselCODE279 = document.getElementById('code279');

carrosselBTN279.addEventListener('click', copyText279)
function copyText279(){
  navigator.clipboard.writeText(carrosselCODE279.innerText);
        
  carrosselBTN279.classList.add('active');
  setTimeout(function(){
    carrosselBTN279.classList.remove('active');
  },2500);
};

const carrosselBTN280 = document.getElementById('button-copy280');
const carrosselCODE280 = document.getElementById('code280');

carrosselBTN280.addEventListener('click', copyText280)
function copyText280(){
  navigator.clipboard.writeText(carrosselCODE280.innerText);
        
  carrosselBTN280.classList.add('active');
  setTimeout(function(){
    carrosselBTN280.classList.remove('active');
  },2500);
};

const carrosselBTN281 = document.getElementById('button-copy281');
const carrosselCODE281 = document.getElementById('code281');

carrosselBTN281.addEventListener('click', copyText281)
function copyText281(){
  navigator.clipboard.writeText(carrosselCODE281.innerText);
        
  carrosselBTN281.classList.add('active');
  setTimeout(function(){
    carrosselBTN281.classList.remove('active');
  },2500);
};

const carrosselBTN282 = document.getElementById('button-copy282');
const carrosselCODE282 = document.getElementById('code282');

carrosselBTN282.addEventListener('click', copyText282)
function copyText282(){
  navigator.clipboard.writeText(carrosselCODE282.innerText);
        
  carrosselBTN282.classList.add('active');
  setTimeout(function(){
    carrosselBTN282.classList.remove('active');
  },2500);
};

const carrosselBTN283 = document.getElementById('button-copy283');
const carrosselCODE283 = document.getElementById('code283');

carrosselBTN283.addEventListener('click', copyText283)
function copyText283(){
  navigator.clipboard.writeText(carrosselCODE283.innerText);
        
  carrosselBTN283.classList.add('active');
  setTimeout(function(){
    carrosselBTN283.classList.remove('active');
  },2500);
};

const carrosselBTN284 = document.getElementById('button-copy284');
const carrosselCODE284 = document.getElementById('code284');

carrosselBTN284.addEventListener('click', copyText284)
function copyText284(){
  navigator.clipboard.writeText(carrosselCODE284.innerText);
        
  carrosselBTN284.classList.add('active');
  setTimeout(function(){
    carrosselBTN284.classList.remove('active');
  },2500);
};

const carrosselBTN285 = document.getElementById('button-copy285');
const carrosselCODE285 = document.getElementById('code285');

carrosselBTN285.addEventListener('click', copyText285)
function copyText285(){
  navigator.clipboard.writeText(carrosselCODE285.innerText);
        
  carrosselBTN285.classList.add('active');
  setTimeout(function(){
    carrosselBTN285.classList.remove('active');
  },2500);
};

const carrosselBTN286 = document.getElementById('button-copy286');
const carrosselCODE286 = document.getElementById('code286');

carrosselBTN286.addEventListener('click', copyText286)
function copyText286(){
  navigator.clipboard.writeText(carrosselCODE286.innerText);
        
  carrosselBTN286.classList.add('active');
  setTimeout(function(){
    carrosselBTN286.classList.remove('active');
  },2500);
};

const carrosselBTN287 = document.getElementById('button-copy287');
const carrosselCODE287 = document.getElementById('code287');

carrosselBTN287.addEventListener('click', copyText287)
function copyText287(){
  navigator.clipboard.writeText(carrosselCODE287.innerText);
        
  carrosselBTN287.classList.add('active');
  setTimeout(function(){
    carrosselBTN287.classList.remove('active');
  },2500);
};

const carrosselBTN288 = document.getElementById('button-copy288');
const carrosselCODE288 = document.getElementById('code288');

carrosselBTN288.addEventListener('click', copyText288)
function copyText288(){
  navigator.clipboard.writeText(carrosselCODE288.innerText);
        
  carrosselBTN288.classList.add('active');
  setTimeout(function(){
    carrosselBTN288.classList.remove('active');
  },2500);
};

const carrosselBTN289 = document.getElementById('button-copy289');
const carrosselCODE289 = document.getElementById('code289');

carrosselBTN289.addEventListener('click', copyText289)
function copyText289(){
  navigator.clipboard.writeText(carrosselCODE289.innerText);
        
  carrosselBTN289.classList.add('active');
  setTimeout(function(){
    carrosselBTN289.classList.remove('active');
  },2500);
};

const carrosselBTN290 = document.getElementById('button-copy290');
const carrosselCODE290 = document.getElementById('code290');

carrosselBTN290.addEventListener('click', copyText290)
function copyText290(){
  navigator.clipboard.writeText(carrosselCODE290.innerText);
        
  carrosselBTN290.classList.add('active');
  setTimeout(function(){
    carrosselBTN290.classList.remove('active');
  },2500);
};

const carrosselBTN291 = document.getElementById('button-copy291');
const carrosselCODE291 = document.getElementById('code291');

carrosselBTN291.addEventListener('click', copyText291)
function copyText291(){
  navigator.clipboard.writeText(carrosselCODE291.innerText);
        
  carrosselBTN291.classList.add('active');
  setTimeout(function(){
    carrosselBTN291.classList.remove('active');
  },2500);
};

const carrosselBTN292 = document.getElementById('button-copy292');
const carrosselCODE292 = document.getElementById('code292');

carrosselBTN292.addEventListener('click', copyText292)
function copyText292(){
  navigator.clipboard.writeText(carrosselCODE292.innerText);
        
  carrosselBTN292.classList.add('active');
  setTimeout(function(){
    carrosselBTN292.classList.remove('active');
  },2500);
};

const carrosselBTN293 = document.getElementById('button-copy293');
const carrosselCODE293 = document.getElementById('code293');

carrosselBTN293.addEventListener('click', copyText293)
function copyText293(){
  navigator.clipboard.writeText(carrosselCODE293.innerText);
        
  carrosselBTN293.classList.add('active');
  setTimeout(function(){
    carrosselBTN293.classList.remove('active');
  },2500);
};

const carrosselBTN294 = document.getElementById('button-copy294');
const carrosselCODE294 = document.getElementById('code294');

carrosselBTN294.addEventListener('click', copyText294)
function copyText294(){
  navigator.clipboard.writeText(carrosselCODE294.innerText);
        
  carrosselBTN294.classList.add('active');
  setTimeout(function(){
    carrosselBTN294.classList.remove('active');
  },2500);
};

const carrosselBTN295 = document.getElementById('button-copy295');
const carrosselCODE295 = document.getElementById('code295');

carrosselBTN295.addEventListener('click', copyText295)
function copyText295(){
  navigator.clipboard.writeText(carrosselCODE295.innerText);
        
  carrosselBTN295.classList.add('active');
  setTimeout(function(){
    carrosselBTN295.classList.remove('active');
  },2500);
};

const carrosselBTN296 = document.getElementById('button-copy296');
const carrosselCODE296 = document.getElementById('code296');

carrosselBTN296.addEventListener('click', copyText296)
function copyText296(){
  navigator.clipboard.writeText(carrosselCODE296.innerText);
        
  carrosselBTN296.classList.add('active');
  setTimeout(function(){
    carrosselBTN296.classList.remove('active');
  },2500);
};

const carrosselBTN297 = document.getElementById('button-copy297');
const carrosselCODE297 = document.getElementById('code297');

carrosselBTN297.addEventListener('click', copyText297)
function copyText297(){
  navigator.clipboard.writeText(carrosselCODE297.innerText);
        
  carrosselBTN297.classList.add('active');
  setTimeout(function(){
    carrosselBTN297.classList.remove('active');
  },2500);
};

const carrosselBTN298 = document.getElementById('button-copy298');
const carrosselCODE298 = document.getElementById('code298');

carrosselBTN298.addEventListener('click', copyText298)
function copyText298(){
  navigator.clipboard.writeText(carrosselCODE298.innerText);
        
  carrosselBTN298.classList.add('active');
  setTimeout(function(){
    carrosselBTN298.classList.remove('active');
  },2500);
};

const carrosselBTN299 = document.getElementById('button-copy299');
const carrosselCODE299 = document.getElementById('code299');

carrosselBTN299.addEventListener('click', copyText299)
function copyText299(){
  navigator.clipboard.writeText(carrosselCODE299.innerText);
        
  carrosselBTN299.classList.add('active');
  setTimeout(function(){
    carrosselBTN299.classList.remove('active');
  },2500);
};

const carrosselBTN300 = document.getElementById('button-copy300');
const carrosselCODE300 = document.getElementById('code300');

carrosselBTN300.addEventListener('click', copyText300)
function copyText300(){
  navigator.clipboard.writeText(carrosselCODE300.innerText);
        
  carrosselBTN300.classList.add('active');
  setTimeout(function(){
    carrosselBTN300.classList.remove('active');
  },2500);
};

const carrosselBTN301 = document.getElementById('button-copy301');
const carrosselCODE301 = document.getElementById('code301');

carrosselBTN301.addEventListener('click', copyText301)
function copyText301(){
  navigator.clipboard.writeText(carrosselCODE301.innerText);
        
  carrosselBTN301.classList.add('active');
  setTimeout(function(){
    carrosselBTN301.classList.remove('active');
  },2500);
};

const carrosselBTN302 = document.getElementById('button-copy302');
const carrosselCODE302 = document.getElementById('code302');

carrosselBTN302.addEventListener('click', copyText302)
function copyText302(){
  navigator.clipboard.writeText(carrosselCODE302.innerText);
        
  carrosselBTN302.classList.add('active');
  setTimeout(function(){
    carrosselBTN302.classList.remove('active');
  },2500);
};

const carrosselBTN303 = document.getElementById('button-copy303');
const carrosselCODE303 = document.getElementById('code303');

carrosselBTN303.addEventListener('click', copyText303)
function copyText303(){
  navigator.clipboard.writeText(carrosselCODE303.innerText);
        
  carrosselBTN303.classList.add('active');
  setTimeout(function(){
    carrosselBTN303.classList.remove('active');
  },2500);
};

const carrosselBTN304 = document.getElementById('button-copy304');
const carrosselCODE304 = document.getElementById('code304');

carrosselBTN304.addEventListener('click', copyText304)
function copyText304(){
  navigator.clipboard.writeText(carrosselCODE304.innerText);
        
  carrosselBTN304.classList.add('active');
  setTimeout(function(){
    carrosselBTN304.classList.remove('active');
  },2500);
};

const carrosselBTN305 = document.getElementById('button-copy305');
const carrosselCODE305 = document.getElementById('code305');

carrosselBTN305.addEventListener('click', copyText305)
function copyText305(){
  navigator.clipboard.writeText(carrosselCODE305.innerText);
        
  carrosselBTN305.classList.add('active');
  setTimeout(function(){
    carrosselBTN305.classList.remove('active');
  },2500);
};

const carrosselBTN306 = document.getElementById('button-copy306');
const carrosselCODE306 = document.getElementById('code306');

carrosselBTN306.addEventListener('click', copyText306)
function copyText306(){
  navigator.clipboard.writeText(carrosselCODE306.innerText);
        
  carrosselBTN306.classList.add('active');
  setTimeout(function(){
    carrosselBTN306.classList.remove('active');
  },2500);
};

const carrosselBTN307 = document.getElementById('button-copy307');
const carrosselCODE307 = document.getElementById('code307');

carrosselBTN307.addEventListener('click', copyText307)
function copyText307(){
  navigator.clipboard.writeText(carrosselCODE307.innerText);
        
  carrosselBTN307.classList.add('active');
  setTimeout(function(){
    carrosselBTN307.classList.remove('active');
  },2500);
};

const carrosselBTN308 = document.getElementById('button-copy308');
const carrosselCODE308 = document.getElementById('code308');

carrosselBTN308.addEventListener('click', copyText308)
function copyText308(){
  navigator.clipboard.writeText(carrosselCODE308.innerText);
        
  carrosselBTN308.classList.add('active');
  setTimeout(function(){
    carrosselBTN308.classList.remove('active');
  },2500);
};

const carrosselBTN309 = document.getElementById('button-copy309');
const carrosselCODE309 = document.getElementById('code309');

carrosselBTN309.addEventListener('click', copyText309)
function copyText309(){
  navigator.clipboard.writeText(carrosselCODE309.innerText);
        
  carrosselBTN309.classList.add('active');
  setTimeout(function(){
    carrosselBTN309.classList.remove('active');
  },2500);
};

const carrosselBTN310 = document.getElementById('button-copy310');
const carrosselCODE310 = document.getElementById('code310');

carrosselBTN310.addEventListener('click', copyText310)
function copyText310(){
  navigator.clipboard.writeText(carrosselCODE310.innerText);
        
  carrosselBTN310.classList.add('active');
  setTimeout(function(){
    carrosselBTN310.classList.remove('active');
  },2500);
};

const carrosselBTN311 = document.getElementById('button-copy311');
const carrosselCODE311 = document.getElementById('code311');

carrosselBTN311.addEventListener('click', copyText311)
function copyText311(){
  navigator.clipboard.writeText(carrosselCODE311.innerText);
        
  carrosselBTN311.classList.add('active');
  setTimeout(function(){
    carrosselBTN311.classList.remove('active');
  },2500);
};

const carrosselBTN312 = document.getElementById('button-copy312');
const carrosselCODE312 = document.getElementById('code312');

carrosselBTN312.addEventListener('click', copyText312)
function copyText312(){
  navigator.clipboard.writeText(carrosselCODE312.innerText);
        
  carrosselBTN312.classList.add('active');
  setTimeout(function(){
    carrosselBTN312.classList.remove('active');
  },2500);
};

const carrosselBTN313 = document.getElementById('button-copy313');
const carrosselCODE313 = document.getElementById('code313');

carrosselBTN313.addEventListener('click', copyText313)
function copyText313(){
  navigator.clipboard.writeText(carrosselCODE313.innerText);
        
  carrosselBTN313.classList.add('active');
  setTimeout(function(){
    carrosselBTN313.classList.remove('active');
  },2500);
};

const carrosselBTN314 = document.getElementById('button-copy314');
const carrosselCODE314 = document.getElementById('code314');

carrosselBTN314.addEventListener('click', copyText314)
function copyText314(){
  navigator.clipboard.writeText(carrosselCODE314.innerText);
        
  carrosselBTN314.classList.add('active');
  setTimeout(function(){
    carrosselBTN314.classList.remove('active');
  },2500);
};

const carrosselBTN315 = document.getElementById('button-copy315');
const carrosselCODE315 = document.getElementById('code315');

carrosselBTN315.addEventListener('click', copyText315)
function copyText315(){
  navigator.clipboard.writeText(carrosselCODE315.innerText);
        
  carrosselBTN315.classList.add('active');
  setTimeout(function(){
    carrosselBTN315.classList.remove('active');
  },2500);
};

const carrosselBTN316 = document.getElementById('button-copy316');
const carrosselCODE316 = document.getElementById('code316');

carrosselBTN316.addEventListener('click', copyText316)
function copyText316(){
  navigator.clipboard.writeText(carrosselCODE316.innerText);
        
  carrosselBTN316.classList.add('active');
  setTimeout(function(){
    carrosselBTN316.classList.remove('active');
  },2500);
};

const carrosselBTN317 = document.getElementById('button-copy317');
const carrosselCODE317 = document.getElementById('code317');

carrosselBTN317.addEventListener('click', copyText317)
function copyText317(){
  navigator.clipboard.writeText(carrosselCODE317.innerText);
        
  carrosselBTN317.classList.add('active');
  setTimeout(function(){
    carrosselBTN317.classList.remove('active');
  },2500);
};

const carrosselBTN318 = document.getElementById('button-copy318');
const carrosselCODE318 = document.getElementById('code318');

carrosselBTN318.addEventListener('click', copyText318)
function copyText318(){
  navigator.clipboard.writeText(carrosselCODE318.innerText);
        
  carrosselBTN318.classList.add('active');
  setTimeout(function(){
    carrosselBTN318.classList.remove('active');
  },2500);
};

const carrosselBTN319 = document.getElementById('button-copy319');
const carrosselCODE319 = document.getElementById('code319');

carrosselBTN319.addEventListener('click', copyText319)
function copyText319(){
  navigator.clipboard.writeText(carrosselCODE319.innerText);
        
  carrosselBTN319.classList.add('active');
  setTimeout(function(){
    carrosselBTN319.classList.remove('active');
  },2500);
};

const carrosselBTN320 = document.getElementById('button-copy320');
const carrosselCODE320 = document.getElementById('code320');

carrosselBTN320.addEventListener('click', copyText320)
function copyText320(){
  navigator.clipboard.writeText(carrosselCODE320.innerText);
        
  carrosselBTN320.classList.add('active');
  setTimeout(function(){
    carrosselBTN320.classList.remove('active');
  },2500);
};

const carrosselBTN321 = document.getElementById('button-copy321');
const carrosselCODE321 = document.getElementById('code321');

carrosselBTN321.addEventListener('click', copyText321)
function copyText321(){
  navigator.clipboard.writeText(carrosselCODE321.innerText);
        
  carrosselBTN321.classList.add('active');
  setTimeout(function(){
    carrosselBTN321.classList.remove('active');
  },2500);
};
