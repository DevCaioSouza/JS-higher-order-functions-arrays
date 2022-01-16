const companies = [
  {name: "Company One" , category: "Finance" , start:1981 , end: 2003},
  {name: "Company Two", category: "Retail", start: 1992, end: 2008},
  {name: "Company Three", category: "Auto", start: 1999, end: 2007},
  {name: "Company Four", category: "Retail", start: 1989, end:2010},
  {name: "Company Five", category: "Tech", start: 2009, end: 2014},
  {name: "Company Six", category:"Finance" , start: 1987, end: 2010},
  {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
  {name: "Company Eight", category: "Tech", start: 2011, end: 2016},
  {name: "Company Nine", category: "Retail", start: 1981, end: 1989},
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

// 1) forEach ------------------

//case 1
  // for(let i = 0; i < companies.length;  i++){
  //   console.log(companies[i]);
  // }

//case 2
  // companies.forEach(function(company){
  //   console.log(company.name);
  // })

// 2) filter ----------------------

//case 1

  // let canDrink = [];
  // for (let i=0; i< ages.length; i++){
  //   if(ages[i] >= 21){
  //     canDrink.push(ages[i]);
  //   }
  // }

//case 2
  
  // const canDrink = ages.filter(function(age){
  //   if(age >= 21){
  //     return true;
  //   }
  // }) 
  
  //this case doesn't involve the creation of an array. We simply do the condition and return true.

//case 3

const canDrink = ages.filter(age => age >= 21 );


  console.log(canDrink);

