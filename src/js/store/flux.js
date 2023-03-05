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
			TYPES: {
				pizza: "Pizza",
				burguer: "Hamburguesas",
				drinks: "Bebidas",
				dessert: "Postres"
			},
			cart: [],
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
						id: 1,
						name: "Margarita",
						cost: 12,
						type: store.TYPES.pizza,
						img: "https://images.pexels.com/photos/3644/pizza-restaurant-dinner-lunch.jpg?auto=compress&cs=tinysrgb&w=1600",
						cantidad: 0
					}, {
						id: 2,
						name: "Napolitana",
						cost: 18,
						type: store.TYPES.pizza,
						img: "https://static.tnn.in/photo/msid-95377151,imgsize-491555,width-100,height-200,resizemode-75/95377151.jpg",
					},
					{
						id: 3,
						name: "Primavera",
						cost: 18,
						type: store.TYPES.pizza,
						img: "https://images.pexels.com/photos/2619970/pexels-photo-2619970.jpeg?auto=compress&cs=tinysrgb&w=1600",
					},
					{
						id: 4,
						name: "Super Junkie",
						cost: 30,
						type: store.TYPES.pizza,
						img: "https://images.pexels.com/photos/2271194/pexels-photo-2271194.jpeg?auto=compress&cs=tinysrgb&w=1600",
					},
					{
						id: 5,
						name: "La Jumbumbis",
						cost: 30,
						type: store.TYPES.burguer,
						img: "https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&w=1600",
					},
					{
						id: 6,
						name: "Pepsi",
						cost: 30,
						type: store.TYPES.drinks,
						img: "https://images.pexels.com/photos/11942002/pexels-photo-11942002.jpeg?auto=compress&cs=tinysrgb&w=1600",
					},
					{
						id: 7,
						name: "Helado de vainilla",
						cost: 30,
						type: store.TYPES.dessert,
						img: "https://images.pexels.com/photos/1132274/pexels-photo-1132274.jpeg?auto=compress&cs=tinysrgb&w=1600",
					}];
				setStore({ foods: data });
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
