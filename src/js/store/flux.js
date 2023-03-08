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
			foods:[],
			TYPES: {
				pizza: "Pizza",
				burguer: "Hamburguesas",
				drinks: "Bebidas",
				dessert: "Postres"
			},
			cart: [{
				key:1231213, 
				name: 'Inicial Prueba', 
				cost: 1515, img: 'https://w7.pngwing.com/pngs/441/722/png-transparent-pikachu-thumbnail.png',
				qta: 0
				}],
			userList: [
				{
					userLogin: {
						username: 'admin1@gmail.com',
						password: 'admin1@1',
					},
					userStatus: 'loggedOut',
					userData: { firstName: 'admin1', lastName: 'admin1', adresses: {} },
				},
				{
					userLogin: {
						username: 'admin2@gmail.com',
						password: 'admin2@2',
					},
					userStatus: 'loggedOut',
					userData: { firstName: 'admin2', lastName: 'admin2', adresses: {} },
				},]
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
					id:1, 
					name: "Margarita", 
					cost: 12, 
					type: store.TYPES.pizza,
					img: "https://images.pexels.com/photos/3644/pizza-restaurant-dinner-lunch.jpg?auto=compress&cs=tinysrgb&w=1600",
					cantidad: 0
				},{
					id:2, 
					name: "Napolitana", 
					cost: 18, 
					type: store.TYPES.pizza,
					img: "https://static.tnn.in/photo/msid-95377151,imgsize-491555,width-100,height-200,resizemode-75/95377151.jpg", 
				},
				{
					id:3, 
					name: "Primavera", 
					cost: 18, 
					type: store.TYPES.pizza,
					img: "https://images.pexels.com/photos/2619970/pexels-photo-2619970.jpeg?auto=compress&cs=tinysrgb&w=1600", 
				},
				{
					id:4, 
					name: "Super Junkie", 
					cost: 30, 
					type: store.TYPES.pizza,
					img: "https://images.pexels.com/photos/2271194/pexels-photo-2271194.jpeg?auto=compress&cs=tinysrgb&w=1600", 
				},
				{
					id:5,
					name: "La Jumbumbis", 
					cost: 30, 
					type: store.TYPES.burguer,
					img: "https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&w=1600", 
				},
				{
					id:6, 
					name: "Pepsi", 
					cost: 30, 
					type: store.TYPES.drinks,
					img: "https://images.pexels.com/photos/11942002/pexels-photo-11942002.jpeg?auto=compress&cs=tinysrgb&w=1600", 
				},
				{
					id:7, 
					name: "Helado de vainilla", 
					cost: 30, 
					type: store.TYPES.dessert,
					img: "https://images.pexels.com/photos/1132274/pexels-photo-1132274.jpeg?auto=compress&cs=tinysrgb&w=1600", 
				},{
					id:8,
					name: "Bigguer", 
					cost: 30, 
					type: store.TYPES.burguer,
					img: "https://www.shutterstock.com/shutterstock/photos/1785575501/display_1500/stock-photo-burguer-is-a-food-international-1785575501.jpg", 
				},{
					id:9,
					name: "Double Chicken",
					cost: 30, 
					type: store.TYPES.burguer,
					img: "https://www.shutterstock.com/shutterstock/photos/1662857290/display_1500/stock-photo-burguer-with-handmade-bread-on-white-background-1662857290.jpg", 
				},{
					id:10,
					name: "Coca-Cola", 
					cost: 30, 
					type: store.TYPES.drinks,
					img: "https://www.shutterstock.com/shutterstock/photos/193222430/display_1500/stock-photo-ankara-turkey-may-editorial-photo-of-classic-coca-cola-can-on-white-background-coca-193222430.jpg", 
				},{
					id:11,
					name: "Nestea", 
					cost: 30, 
					type: store.TYPES.drinks,
					img: "https://www.shutterstock.com/shutterstock/photos/2248909741/display_1500/stock-photo-tallinn-estonia-january-nestea-tea-black-iced-tea-drink-with-lemon-by-nestea-isolated-on-2248909741.jpg", 
				},{
					id:12,
					name: "Cheese Cake", 
					cost: 30, 
					type: store.TYPES.dessert,
					img: "https://www.shutterstock.com/shutterstock/photos/628459994/display_1500/stock-photo-slice-of-plain-cheesecake-with-cranberry-sauce-on-white-plate-decorated-with-mint-leaf-closeup-view-628459994.jpg", 
				},{
					id:13,
					name: "Red Velvet", 
					cost: 30, 
					type: store.TYPES.dessert,
					img: "https://www.shutterstock.com/shutterstock/photos/626025608/display_1500/stock-photo-red-velvet-cake-isolated-on-white-background-626025608.jpg", 
				},{
					id:14,
					name: "Red Velvet", 
					cost: 30, 
					type: store.TYPES.dessert,
					img: "https://www.shutterstock.com/shutterstock/photos/626025608/display_1500/stock-photo-red-velvet-cake-isolated-on-white-background-626025608.jpg", 
				},{
					id:15,
					name: "Red Velvet", 
					cost: 30, 
					type: store.TYPES.dessert,
					img: "https://www.shutterstock.com/shutterstock/photos/626025608/display_1500/stock-photo-red-velvet-cake-isolated-on-white-background-626025608.jpg", 
				},{
					id:16,
					name: "Red Velvet", 
					cost: 30, 
					type: store.TYPES.dessert,
					img: "https://www.shutterstock.com/shutterstock/photos/626025608/display_1500/stock-photo-red-velvet-cake-isolated-on-white-background-626025608.jpg", 
				},{
					id:17,
					name: "Red Velvet", 
					cost: 30, 
					type: store.TYPES.dessert,
					img: "https://www.shutterstock.com/shutterstock/photos/626025608/display_1500/stock-photo-red-velvet-cake-isolated-on-white-background-626025608.jpg", 
				},{
					id:18,
					name: "Red Velvet", 
					cost: 30, 
					type: store.TYPES.dessert,
					img: "https://www.shutterstock.com/shutterstock/photos/626025608/display_1500/stock-photo-red-velvet-cake-isolated-on-white-background-626025608.jpg", 
				}];	
				setStore({foods: data});
			},
			getCart: async (dataCart) => {
				setStore(getStore().cart.push(dataCart));
			},
			addUser: (e) => {
				const store = getStore()
				e.preventDefault();

				const toCompare = {
					userLogin: {
						username: e.target.elements.username.value,
						password: e.target.elements.password.value,
					}
				};

				if (store.userList.some((u) => JSON.stringify(u) === JSON.stringify(toCompare))) {
					return false;
				} else {
					let newUser = [...store.userList, { userLogin: { username: e.target.elements.username.value, password: e.target.elements.password.value }, userStatus: 'loggedOut', userData: { firstName: '', lastName: '', adresses: {} } }]
					setStore({ userList: newUser });
					return true
				}
			},
			handleLogin: (e) => {
				const store = getStore()
				e.preventDefault();

				const toCompare = {
					userLogin: {
						username: e.target.elements.username.value,
						password: e.target.elements.password.value,
					}
				};

				const checkArray = store.userList.map(({userLogin}) => { return {userLogin}})
				const indexOfObj = checkArray.findIndex((u) => JSON.stringify(u) == JSON.stringify(toCompare))

				if (checkArray.some((u) => JSON.stringify(u) == JSON.stringify(toCompare))) {
					store.userList[indexOfObj].userStatus = 'loggedIn'
					console.log('User exists in array');
					return true
				} else {
					return false
				}
			},
			handleLogout: (e) => {
				const store = getStore()
				e.preventDefault()

				const toCompare = {
					userStatus: 'loggedIn'
				};

				const checkArray = store.userList.map(({userStatus}) => { return {userStatus}})
				const indexOfObj = checkArray.findIndex((u) => JSON.stringify(u) == JSON.stringify(toCompare))

				if (checkArray.some((u) => JSON.stringify(u) == JSON.stringify(toCompare))) {
					store.userList[indexOfObj].userStatus = 'loggedOut'
					return true
				} else {
					return false
				}


			}
		}
	};
};

export default getState;
