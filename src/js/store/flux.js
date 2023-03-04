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
			userList: [
				{
					username: 'admin1@gmail.com',
					password: 'admin1@1',
				},
				{
					username: 'admin2@gmail.com',
					password: 'admin2@2',
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
			addUser: (e) => {
				const store = getStore()
				e.preventDefault();
				const toCompare = {
					username: e.target.elements.username.value,
					password: e.target.elements.password.value,
				};
		
				if (store.userList.some((u) => JSON.stringify(u) === JSON.stringify(toCompare))) {
					return false;
				} else {
					let newUser = [...store.userList, {username: e.target.elements.username.value, password: e.target.elements.password.value}]
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
		
				if (store.userList.some((u) => JSON.stringify(u) === JSON.stringify(toCompare))) {
					console.log('User exists in array');
					return true
				} else {
					return false
				}
			},
		}
	};
};

export default getState;
