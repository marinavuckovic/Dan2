//alert("hello!");

if(true){
    var x=10;
}
console.log(x);
if(true){
    let y=11;
}
//console.log(y);
var niz=[1,2,false,10,"10"];
for(let i=0;i<niz.length;i++){
    if(niz[i]==10) console.log("Uslov jedan ispunjen na poziciji:"+i);
    if(niz[i]===10) console.log("Uslov dva ispunjen na poziciji:"+i);
}
var auto={
    marka: "Fiat",
    model: "Punto",
    boja:"Bijela"
};
console.log(auto.model);

var osoba={
    ime: "Marina",
    prezime: "Vuckovic",
    godinaRodjenja: "1999.",
    punoIme: function(){
        return this.ime+" " +this.prezime;
    }
};
console.log(osoba.punoIme());
function max3(a, b, c){
    function max2(a, b){
       return a>b?a:b;
    }
    return max2(max2(a,b),c);
}
console.log(max3(5,4,25));
// zadatak sa predavanja
let studenti = [
    {
      ime: 'Ivan',
      prezime: 'Popović',
      prosjek: '6.34'
    },
    {
      ime: 'Nikola',
      prezime: 'Marković',
      prosjek: '9.11'
    },
    {
      ime: 'Maja',
      prezime: 'Stojanović',
      prosjek: '7.42'
    },
    {
      ime: 'Sara',
      prezime: 'Stojanović',
      prosjek: '9.86'
    },
    {
      ime: 'Milica',
      prezime: 'Đorđević',
      prosjek: '6.45'
    },
    {
      ime: 'Marko',
      prezime: 'Marković',
      prosjek: '8.72'
    },
    {
      ime: 'Ivan',
      prezime: 'Jovanović',
      prosjek: '7.89'
    },
    {
      ime: 'Nikola',
      prezime: 'Petrović',
      prosjek: '7.34'
    },
    {
      ime: 'Petar',
      prezime: 'Marković',
      prosjek: '6.13'
    },
    {
      ime: 'Sara',
      prezime: 'Stojanović',
      prosjek: '9.55'
    }
  ];
  
  for(let i=0;i<studenti.length;i++){
    let pom=parseFloat(studenti[i].prosjek);
    if(pom>8.5)console.log(studenti[i].ime);
  }

