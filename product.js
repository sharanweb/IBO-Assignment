const listOfProducts = [{
    productName: "TV",
    quantity: 10,
    description: "television"
  },
  {
    productName: "AC",
    quantity: 5,
    description: "air conditioner"
  },
  {
    productName: "TV",
    quantity: 10,
    description: "television"
  },
  {
    productName: "AC",
    quantity: 5,
    description: "air conditioner"
  },
  {
    productName: "FAN",
    quantity: 10,
    description: "Ceiling Fan"
  }
  ];
  
  
  function getUniqueProductCount(listOfProducts){
    let data = {};
    for(let i=0; i<listOfProducts.length; i++){
      let item = listOfProducts[i].productName;
      if(data[item] === undefined){
  
        data[item] = 1;
      }else{
        let prev = data[item];
        data[item] = prev + 1;
      }
    }
    console.log(data);
  
  }
  getUniqueProductCount(listOfProducts);
  //{ TV: 2, AC: 2, FAN: 1 }
  
  
  
  function getUniquePrducts(listOfProducts){
    let data = {};
    for(let i=0; i<listOfProducts.length; i++){
      let item = listOfProducts[i].productName;
      if(data[item] === undefined){
        data[item] = listOfProducts[i];
      }else{
        data[item].quantity += listOfProducts[i].quantity;
      }
    }
    // console.log(data);
    let arr = [];
    for(let key in data){
      arr.push(data[key]);
    }
    console.log(arr);
  }
  getUniquePrducts(listOfProducts);
  /*
  [
    { productName: 'TV', quantity: 20, description: 'television' },
    { productName: 'AC', quantity: 10, description: 'air conditioner' },
    { productName: 'FAN', quantity: 10, description: 'Ceiling Fan' }
  ]

  */