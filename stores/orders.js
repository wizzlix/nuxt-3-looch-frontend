import {defineStore} from "pinia";

export const useOrdersStore = defineStore("orders",{
	state: () => ({
		orders: []
	}),
	actions: {
		init(){
			this.orders = [
			{
				id: 1,
				orderNumber: "400" ,
				orderOpeningDate: "2020/11/27" ,
				scheduledClosingDate: "2020/12/31" ,
				dateOfActualClosing: "" ,
				customer: "ПТО",
				comment: "№20379014, 20379015, 20379016, 20379017, 20379018, 20379019, 20370020, 20379021, 20379022, 20379023" ,
			},
			{
				id: 2,
				orderNumber: "015" ,
				orderOpeningDate: "2021/01/15" ,
				scheduledClosingDate: "2021/01/20" ,
				dateOfActualClosing: "" ,
				customer: "НПФ \"Геофизика\"",
				comment: "ОП, по договору №33/10-20 от 07.10.2020г."
			},
			{
				id: 3,
				orderNumber: "-1007" ,
				orderOpeningDate: "2022/03/05" ,
				scheduledClosingDate: "2022/03/12" ,
				dateOfActualClosing: "" ,
				customer: "Семён - МОЛОДЕЦ",
				comment: "Семён - МОЛОДЕЦ, И Серёжа тоже"
			},
		]
			this.orders.forEach(item => {
				item.orders = '/orders/'
			})
		}
	}
})








// export const state = () => ({
// 	orders: []
// })
//
// export const getters = {
//
// }
//
// export const actions = {
// 	async getOrders({commit}){
// 		// const content = await axios.post('link');
// 		const content =  [
// 			{
// 				id: 1,
// 				orderNumber: "400" ,
// 				orderOpeningDate: "2020/11/27" ,
// 				scheduledClosingDate: "2020/12/31" ,
// 				dateOfActualClosing: "" ,
// 				customer: "ПТО",
// 				comment: "№20379014, 20379015, 20379016, 20379017, 20379018, 20379019, 20370020, 20379021, 20379022, 20379023" ,
// 			},
// 			{
// 				id: 2,
// 				orderNumber: "015" ,
// 				orderOpeningDate: "2021/01/15" ,
// 				scheduledClosingDate: "2021/01/20" ,
// 				dateOfActualClosing: "" ,
// 				customer: "НПФ \"Геофизика\"",
// 				comment: "ОП, по договору №33/10-20 от 07.10.2020г."
// 			},
// 			{
// 				id: 3,
// 				orderNumber: "-1007" ,
// 				orderOpeningDate: "2022/03/05" ,
// 				scheduledClosingDate: "2022/03/12" ,
// 				dateOfActualClosing: "" ,
// 				customer: "Семён - МОЛОДЕЦ",
// 				comment: "Семён - МОЛОДЕЦ, И Серёжа тоже"
// 			},
// 		]
// 		commit('addOrders', content)
//
// 	}
// }
//
// export const mutations = {
// 	addOrders(state, content){
// 		state.orders = content
// 	}
// }
