class Pizza {
    static pizzaTypes = {
      'Маргарита': { price: 500, calories: 300 },
      'Пепперони': { price: 800, calories: 400 },
      'Баварская': { price: 700, calories: 450 }
    };
  
    static sizeAdditions = {
      'большая': { price: 200, calories: 200 },
      'маленькая': { price: 100, calories: 100 }
    };
  
    static toppings = {
      'сливочная моцарелла': { price: 50, calories: 2 },
      'сырный борт': {
        small: { price: 150, calories: 50 },
        large: { price: 300, calories: 50 }
      },
      'чеддер и пармезан': {
        small: { price: 150, calories: 50 },
        large: { price: 300, calories: 50 }
      }
    };
    


    constructor(type, size) {
      this.type = type;
      this.size = size;
      this.toppingsList = [];
    }
  
    addTopping(topping) {
      if (!Pizza.toppings[topping]) throw new Error('Неизвестная добавка');
      if (!this.toppingsList.includes(topping)) {
        this.toppingsList.push(topping);
      }
    }
  
    removeTopping(topping) {
      const index = this.toppingsList.indexOf(topping);
      if (index !== -1) this.toppingsList.splice(index, 1);
    }
  
    getToppings() {
      return [...this.toppingsList];
    }
  
    getSize() {
      return this.size;
    }
  
    getStuffing() {
      return this.type;
    }
  
    calculatePrice() {
      const basePrice = Pizza.pizzaTypes[this.type].price;
      const sizePrice = Pizza.sizeAdditions[this.size].price;
      
      return this.toppingsList.reduce((total, topping) => {
        if (topping === 'сливочная моцарелла') {
          return total + Pizza.toppings[topping].price;
        } else {
          let sizeKey;
          if (this.size === 'большая') {
            sizeKey = 'large';
          } else {
            sizeKey = 'small';
          }
          return total + Pizza.toppings[topping][sizeKey].price;
        }
      }, basePrice + sizePrice);
    }
  
    calculateCalories() {
      const baseCalories = Pizza.pizzaTypes[this.type].calories;
      const sizeCalories = Pizza.sizeAdditions[this.size].calories;
      
      return this.toppingsList.reduce((total, topping) => {
        if (topping === 'сливочная моцарелла') {
          return total + Pizza.toppings[topping].calories;
        } else {
          let sizeKey;
          if (this.size === 'большая') {
            sizeKey = 'large';
          } else {
            sizeKey = 'small';
          }          return total + Pizza.toppings[topping][sizeKey].calories;
        }
      }, baseCalories + sizeCalories);
    }
  }
  
  const margarita = new Pizza('Маргарита', 'большая');
  margarita.addTopping('сырный борт');
  console.log(margarita.calculatePrice());
  console.log(margarita.calculateCalories());
  
  const pepperoni = new Pizza('Пепперони', 'маленькая');
  pepperoni.addTopping('сливочная моцарелла');
  pepperoni.addTopping('чеддер и пармезан');
  console.log(pepperoni.calculatePrice());
  console.log(pepperoni.calculateCalories());