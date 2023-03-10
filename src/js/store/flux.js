const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white",
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white",
				},
			],
			foods: [],
			TYPES: {
				pizza: "Pizza",
				burguer: "Hamburguesas",
				drinks: "Bebidas",
				dessert: "Postres",
			},
			cart: [],
			cartAPI: [],
      shoppingReceipt: {
        products_cart: [],
        location_customer: '',
      },
			userList: [
				{
					username: "admin1@gmail.com",
					password: "admin1@1",
					firstName: "admin1",
					lastName: "admin1",
					adresses: {},
				},
				{
					username: "admin2@gmail.com",
					password: "admin2@2",
					firstName: "admin2",
					lastName: "admin2",
					adresses: {},
				},
			],
			currentUser: undefined,
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
							fetch().then().then(data => setStore({ "foo": data.bar }))
						*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

        //reset the global store
        setStore({ demo: demo });
      },
      getFoods: async () => {
        //const response = await fetch(endpoint);
        const store = getStore();
        let data = [
          {
            id: 1,
            name: "Margarita",
            default_price_data: {
              unit_amount: 1200,
              currency: "usd",
            },
            quantity: 1,
            type: store.TYPES.pizza,
            images: [
              "https://images.pexels.com/photos/3644/pizza-restaurant-dinner-lunch.jpg?auto=compress&cs=tinysrgb&w=1600",
            ],
          },
          {
            id: 2,
            name: "Napolitana",
            default_price_data: {
              unit_amount: 1800,
              currency: "usd",
            },
            quantity: 1,
            type: store.TYPES.pizza,
            images: [
              "https://static.tnn.in/photo/msid-95377151,imgsize-491555,width-100,height-200,resizemode-75/95377151.jpg",
            ],
          },
          {
            id: 3,
            name: "Primavera",
            default_price_data: {
              unit_amount: 1800,
              currency: "usd",
            },
            quantity: 1,
            type: store.TYPES.pizza,
            images: [
              "https://images.pexels.com/photos/2619970/pexels-photo-2619970.jpeg?auto=compress&cs=tinysrgb&w=1600",
            ],
          },
          {
            id: 4,
            name: "Super Junkie",
            default_price_data: {
              unit_amount: 3000,
              currency: "usd",
            },
            quantity: 1,
            type: store.TYPES.pizza,
            images: [
              "https://images.pexels.com/photos/2271194/pexels-photo-2271194.jpeg?auto=compress&cs=tinysrgb&w=1600",
            ],
          },
          {
            id: 5,
            name: "La Jumbumbis",
            default_price_data: {
              unit_amount: 3000,
              currency: "usd",
            },
            quantity: 1,
            type: store.TYPES.burguer,
            images: [
              "https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&w=1600",
            ],
          },
          {
            id: 6,
            name: "Pepsi",
            default_price_data: {
              unit_amount: 3000,
              currency: "usd",
            },
            quantity: 1,
            type: store.TYPES.drinks,
            images: [
              "https://images.pexels.com/photos/11942002/pexels-photo-11942002.jpeg?auto=compress&cs=tinysrgb&w=1600",
            ],
          },
          {
            id: 7,
            name: "Helado de vainilla",
            default_price_data: {
              unit_amount: 3000,
              currency: "usd",
            },
            quantity: 1,
            type: store.TYPES.dessert,
            images: [
              "https://images.pexels.com/photos/1132274/pexels-photo-1132274.jpeg?auto=compress&cs=tinysrgb&w=1600",
            ],
          },
          {
            id: 8,
            name: "Bigguer",
            default_price_data: {
              unit_amount: 3000,
              currency: "usd",
            },
            quantity: 1,
            type: store.TYPES.burguer,
            images: [
              "https://www.shutterstock.com/shutterstock/photos/1785575501/display_1500/stock-photo-burguer-is-a-food-international-1785575501.jpg",
            ],
          },
          {
            id: 9,
            name: "Double Chicken",
            default_price_data: {
              unit_amount: 3000,
              currency: "usd",
            },
            quantity: 1,
            type: store.TYPES.burguer,
            images: [
              "https://www.shutterstock.com/shutterstock/photos/1662857290/display_1500/stock-photo-burguer-with-handmade-bread-on-white-background-1662857290.jpg",
            ],
          },
          {
            id: 10,
            name: "Coca-Cola",
            default_price_data: {
              unit_amount: 3000,
              currency: "usd",
            },
            quantity: 1,
            type: store.TYPES.drinks,
            images: [
              "https://www.shutterstock.com/shutterstock/photos/193222430/display_1500/stock-photo-ankara-turkey-may-editorial-photo-of-classic-coca-cola-can-on-white-background-coca-193222430.jpg",
            ],
          },
          {
            id: 11,
            name: "Nestea",
            default_price_data: {
              unit_amount: 3000,
              currency: "usd",
            },
            quantity: 1,
            type: store.TYPES.drinks,
            images: [
              "https://www.shutterstock.com/shutterstock/photos/2248909741/display_1500/stock-photo-tallinn-estonia-january-nestea-tea-black-iced-tea-drink-with-lemon-by-nestea-isolated-on-2248909741.jpg",
            ],
          },
          {
            id: 12,
            name: "Cheese Cake",
            default_price_data: {
              unit_amount: 3000,
              currency: "usd",
            },
            quantity: 1,
            type: store.TYPES.dessert,
            images: [
              "https://www.shutterstock.com/shutterstock/photos/628459994/display_1500/stock-photo-slice-of-plain-cheesecake-with-cranberry-sauce-on-white-plate-decorated-with-mint-leaf-closeup-view-628459994.jpg",
            ],
          },
          {
            id: 13,
            name: "Red Velvet",
            default_price_data: {
              unit_amount: 3000,
              currency: "usd",
            },
            quantity: 1,
            type: store.TYPES.dessert,
            images: [
              "https://www.shutterstock.com/shutterstock/photos/626025608/display_1500/stock-photo-red-velvet-cake-isolated-on-white-background-626025608.jpg",
            ],
          },
        ];

        setStore({ foods: data });
      },
      addToCart: async (dataCart) => {
		let newCart = [];
		if (getStore().cart.find(product => product.id == dataCart.id)) {
			newCart = getStore().cart.map(product => {
				if (product.id == dataCart.id) {
					product.quantity += 1;
				}
				return product;
			})
		} else {
			newCart = [...getStore().cart,dataCart];// Hace una copia de lo que ya esta en cart y luego agrega un nuevo objeto al final
		}
		setStore({cart: newCart});        
      },
	  subFromCart: async (dataCart) => {		
		if (getStore().cart.find(product => product.id == dataCart.id)) {			
			let newCart = getStore().cart.map(product => {
				if ((product.id == dataCart.id) && (product.quantity > 1)) {
					product.quantity -= 1;
				}
				return product;
			})
			setStore({cart: newCart});
		}        
      },
      addFoodtoCart: (id) => {
        const store = getStore();
        const add = store.foods.find((item) => item.id === id);
	  },
    addDeliveryLoc: (location) => {
      setStore({shoppingReceipt : {location_customer : location} });
    },

			foodsListAddApi: async () => {
				const store = getStore();
				const stripe = require("stripe")("sk_test_51Mj0qaDYy6AFzbjNNFCR94y6ODRmOGgfniCC1oGNsNRwUcKSasJtjtuKspeiEOeNqmN3MdirkltJO2dvw0fdru7b00riId0U45");

				const productList = await stripe.products.list({
					active: true,
					limit: 50,
				});
				console.log(productList)

				const foodData = await store.foods.map(async (comida) => {
					if (productList.data.length < 1 && store.foods.length > 0) {
						const product = await stripe.products.create({
							name: comida.name,
							id: comida.id,
							images: comida.images,
							default_price_data: comida.default_price_data,
						});
					} // else if() {AQUI DEBERIA HABER UNA LOGICA POR SI EL ADMINISTRADOR AGREGA PRODUCTOS}
				});

			},

			prepareItemstoCheckout: async (stripePromise) => {
				const store = getStore();
				const actions = getActions();
				const stripe = require('stripe')('sk_test_51Mj0qaDYy6AFzbjNNFCR94y6ODRmOGgfniCC1oGNsNRwUcKSasJtjtuKspeiEOeNqmN3MdirkltJO2dvw0fdru7b00riId0U45');

				let auxCart = []
				const foodCart = await store.cart.map(async (comida) => {
					const productSearch = await stripe.products.search({ query: `name~"${comida.name}"` });
					auxCart.push({ price: productSearch.data[0].default_price, quantity: comida.quantity })
				});
				setStore({ cartAPI: auxCart, cart: []}) //store.cart se debe hacer a vacio aqui o luego del resumen de compra??
				
			},

			checkOutStripe: async (productos, stripePromise) => {
				let items = productos
				console.log(productos)
				const stripe = await stripePromise;
				const { error } = await stripe.redirectToCheckout({
					lineItems: items,
					mode: 'payment',
					successUrl: 'http://localhost:3000/resumencompra',
					cancelUrl: 'http://localhost:3000/pagocancelado',
				})
			},

			addUser: (e) => {
				const store = getStore();
				e.preventDefault();

				const toCompare = {
					username: e.target.elements.username.value,
				};

        const userExist = store.userList.find((user) => {
          if (
            user.username === toCompare.username &&
            user.password === toCompare.password
          ) {
			localStorage.setItem("isLogged",true);
            setStore({ currentUser: user });
            return true;
          }
          return false;
        });
        return userExist;
      },

      handleLogout: (e) => {
        const store = getStore();
        e.preventDefault();
		localStorage.setItem("isLogged",false);
        setStore({ currentUser: undefined });

				const toCompare = {
					username: e.target.elements.username.value,
					password: e.target.elements.password.value,
				};

				const userExist = store.userList.find((user) => {
					if (
						user.username === toCompare.username &&
						user.password === toCompare.password
					) {
						setStore({ currentUser: user });
						return true;
					}
					return false;
				});
				return userExist;
			},

			handleLogout: (e) => {
				const store = getStore();
				e.preventDefault();
				setStore({ currentUser: undefined });

				return true;
			},
		},
	};
};

export default getState;
