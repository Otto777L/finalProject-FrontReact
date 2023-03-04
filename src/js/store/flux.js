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
			cart: []
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
				}];	
				setStore({foods: data});
			}
		}
	};
};

export default getState;
