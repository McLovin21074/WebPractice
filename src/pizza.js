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
          }          
          return total + Pizza.toppings[topping][sizeKey].calories;
        }
      }, baseCalories + sizeCalories);
    }
  }
  

let selectedPizza = new Pizza('Маргарита', 'маленькая');

const pizzaOptions = document.querySelectorAll('.pizza-option');
pizzaOptions.forEach((el) => {
  el.addEventListener('click', () => {
    const name = el.innerText.trim();
    selectedPizza = new Pizza(name, selectedPizza.size);
    updateDisplay();
  });
});

const sizeButtons = document.querySelectorAll('.size-switch button');
sizeButtons.forEach((btn) => {
  btn.addEventListener('click', () => {
    sizeButtons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    selectedPizza.size = btn.innerText.toLowerCase();
    updateDisplay();
  });
});

const toppingCards = document.querySelectorAll('.topping-card');
toppingCards.forEach(card => {
  card.addEventListener('click', () => {
    const topping = card.innerText.split('\n')[0].trim().toLowerCase();
    if (selectedPizza.toppingsList.includes(topping)) {
      selectedPizza.removeTopping(topping);
      card.classList.remove('active');
    } else {
      selectedPizza.addTopping(topping);
      card.classList.add('active');
    }
    updateDisplay();
  });
});

function updateDisplay() {
  const price = selectedPizza.calculatePrice();
  const calories = selectedPizza.calculateCalories();
  document.querySelector('.add-to-cart').innerText = `Добавить в корзину за ${price}₽ (${calories} кКал)`;
}