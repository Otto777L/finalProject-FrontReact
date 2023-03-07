const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			foods:
				[],
			foodsUser: [],
			TYPES: {
				pizza: "Pizza",
				burguer: "Hamburguesas",
				drinks: "Bebidas",
				dessert: "Postres"
			},
			cart: [],
			userList: [
				{
					username: 'admin1@gmail.com',
					password: 'admin1@1',
					firstName: 'admin1',
					lastName: 'admin1',
					adresses: {},
				},
				{
					username: 'admin2@gmail.com',
					password: 'admin2@2',
					firstName: 'admin2',
					lastName: 'admin2',
					adresses: {},
				},],
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
				let data =
					[{
						id: 1,
						name: "Margarita",
						default_price_data: {
							unit_amount: 1200,
							currency: 'usd',
						},
						type: store.TYPES.pizza,
						images: ["https://images.pexels.com/photos/3644/pizza-restaurant-dinner-lunch.jpg?auto=compress&cs=tinysrgb&w=1600"],
						cantidad: 0
					}, {
						id: 2,
						name: "Napolitana",
						default_price_data: {
							unit_amount: 1800,
							currency: 'usd',
						},
						type: store.TYPES.pizza,
						images: ["https://static.tnn.in/photo/msid-95377151,imgsize-491555,width-100,height-200,resizemode-75/95377151.jpg"],
					},
					{
						id: 3,
						name: "Primavera",
						default_price_data: {
							unit_amount: 1800,
							currency: 'usd',
						},
						type: store.TYPES.pizza,
						images: ["https://images.pexels.com/photos/2619970/pexels-photo-2619970.jpeg?auto=compress&cs=tinysrgb&w=1600"],
					},
					{
						id: 4,
						name: "Super Junkie",
						default_price_data: {
							unit_amount: 3000,
							currency: 'usd',
						},
						type: store.TYPES.pizza,
						images: ["https://images.pexels.com/photos/2271194/pexels-photo-2271194.jpeg?auto=compress&cs=tinysrgb&w=1600"],
					},
					{
						id: 5,
						name: "La Jumbumbis",
						default_price_data: {
							unit_amount: 3000,
							currency: 'usd',
						},
						type: store.TYPES.burguer,
						images: ["https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&w=1600"],
					},
					{
						id: 6,
						name: "Pepsi",
						default_price_data: {
							unit_amount: 3000,
							currency: 'usd',
						},
						type: store.TYPES.drinks,
						images: ["https://images.pexels.com/photos/11942002/pexels-photo-11942002.jpeg?auto=compress&cs=tinysrgb&w=1600"],
					},
					{
						id: 7,
						name: "Helado de vainilla",
						default_price_data: {
							unit_amount: 3000,
							currency: 'usd',
						},
						type: store.TYPES.dessert,
						images: ["https://images.pexels.com/photos/1132274/pexels-photo-1132274.jpeg?auto=compress&cs=tinysrgb&w=1600"],
					}, {
						id: 8,
						name: "Bigguer",
						default_price_data: {
							unit_amount: 3000,
							currency: 'usd',
						},
						type: store.TYPES.burguer,
						images: ["https://www.shutterstock.com/shutterstock/photos/1785575501/display_1500/stock-photo-burguer-is-a-food-international-1785575501.jpg"],
					}, {
						id: 9,
						name: "Double Chicken",
						default_price_data: {
							unit_amount: 3000,
							currency: 'usd',
						},
						type: store.TYPES.burguer,
						images: ["https://www.shutterstock.com/shutterstock/photos/1662857290/display_1500/stock-photo-burguer-with-handmade-bread-on-white-background-1662857290.jpg"],
					}, {
						id: 10,
						name: "Coca-Cola",
						default_price_data: {
							unit_amount: 3000,
							currency: 'usd',
						},
						type: store.TYPES.drinks,
						images: ["https://www.shutterstock.com/shutterstock/photos/193222430/display_1500/stock-photo-ankara-turkey-may-editorial-photo-of-classic-coca-cola-can-on-white-background-coca-193222430.jpg"],
					}, {
						id: 11,
						name: "Nestea",
						default_price_data: {
							unit_amount: 3000,
							currency: 'usd',
						},
						type: store.TYPES.drinks,
						images: ["https://www.shutterstock.com/shutterstock/photos/2248909741/display_1500/stock-photo-tallinn-estonia-january-nestea-tea-black-iced-tea-drink-with-lemon-by-nestea-isolated-on-2248909741.jpg"],
					}, {
						id: 12,
						name: "Cheese Cake",
						default_price_data: {
							unit_amount: 3000,
							currency: 'usd',
						},
						type: store.TYPES.dessert,
						images: ["https://www.shutterstock.com/shutterstock/photos/628459994/display_1500/stock-photo-slice-of-plain-cheesecake-with-cranberry-sauce-on-white-plate-decorated-with-mint-leaf-closeup-view-628459994.jpg"],
					}, {
						id: 13,
						name: "Red Velvet",
						default_price_data: {
							unit_amount: 3000,
							currency: 'usd',
						},
						type: store.TYPES.dessert,
						images: ["https://www.shutterstock.com/shutterstock/photos/626025608/display_1500/stock-photo-red-velvet-cake-isolated-on-white-background-626025608.jpg"],
					}];

				setStore({ foods: data });
			},
			addFoodtoCart: (id) => {
				const store = getStore()
				const add = store.foods.find(item => item.id === id);

				setStore({ foodsUser: [...foodsUser, add]})
			},
			rmvFoodtoCart: (id) => {
				const store = getStore()
				const rmv = store.foodsUser.filter(item => item.id !== id);
				setStore({ foodsUser: [rmv]})
			},

			foodsUserListAddApi: async () => {
				const store = getStore()
				const stripe = require('stripe')('sk_test_51Mj0qaDYy6AFzbjNNFCR94y6ODRmOGgfniCC1oGNsNRwUcKSasJtjtuKspeiEOeNqmN3MdirkltJO2dvw0fdru7b00riId0U45');

				const productList = await stripe.products.list({
					active: true,
					limit: 50,
				});

				const foodData = await store.foodsUser.map(async (comida) => {
					if (productList.data.length < 1 && store.foodsUser.length > 0) {
						const product = await stripe.products.create({
							name: comida.name,
							id: comida.id,
							images: comida.images,
							default_price_data: comida.default_price_data,
						});
					} 

				})
			},


			addUser: (e) => {
				const store = getStore()
				e.preventDefault();

				const toCompare = {
					username: e.target.elements.username.value,
				};

				const userExist = store.userList.find(user => user.username === toCompare.username)

				if (userExist) {
					return false;
				} else {
					let newUser = [...store.userList, {
						username: e.target.elements.username.value,
						password: e.target.elements.password.value,
						firstName: '',
						lastName: '',
						adresses: {},
					}]
					setStore({ userList: newUser });
					return true
				}
			},

			handleLogin: (e) => {
				const store = getStore()
				e.preventDefault();

				const toCompare = {
					username: e.target.elements.username.value,
					password: e.target.elements.password.value,
				};

				const userExist = store.userList.find((user) => {
					if (user.username === toCompare.username && user.password === toCompare.password) {
						setStore({ currentUser: user })
						return true
					}
					return false
				});
				return userExist
			},

			handleLogout: (e) => {
				const store = getStore()
				e.preventDefault()
				setStore({ currentUser: undefined })

				return true
			}
		}
	};
};

export default getState;
