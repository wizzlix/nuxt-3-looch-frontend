import {defineStore} from "pinia";

export const useCustomersStore = defineStore("customers",{
	state: () => ({
		customers: []
	}),
	actions: {
		init(){
			this.customers = [
			{id: 1, name: 'Baker Hughes',},
			{id: 2, name: 'ПАО "Сургутнефтегаз" УБР-1'},
			{id: 3, name: 'ООО "ОРИОН"'},
			{id: 4, name: 'ООО «Газпром недра» (бывш. ООО «Газпром георесурс»)'},
			{id: 5, name: 'ПФ «Приволжскгазгеофизика» ООО «Газпром недра»'},
			{id: 6, name: 'ООО НПП ГА «ЛУЧ»'},
			{id: 7, name: 'ПФ «Иркутскгазгеофизика» АО НПФ «Геофизика»'},
			{id: 8, name: 'ООО «ПК Уралтехнология»'},
			{id: 9, name: 'ООО НПП «БУРИНТЕХ»'},
			{id: 10, name: 'ПАО «Сургутнефтегаз» УКРС и ПНП'},
		]
			this.customers.forEach(item => {
				item.href = '/customers/'
			})
		}
	}
})








// export const state = () => ({
// 	customers: []
// })
//
// export const getters = {
//
// }
//
// export const actions = {
// 	async getCustomers({commit}){
// 		// const content = await axios.post('link');
// 		const content =  [
// 			{id: 1, name: 'Baker Hughes', href: '/customers/'},
// 			{id: 2, name: 'ПАО "Сургутнефтегаз" УБР-1', href: '/customers/'},
// 			{id: 3, name: 'ООО "ОРИОН"', href: '/customers/'},
// 			{id: 4, name: 'ООО «Газпром недра» (бывш. ООО «Газпром георесурс»)', href: '/customers/'},
// 			{id: 5, name: 'ПФ «Приволжскгазгеофизика» ООО «Газпром недра»', href: '/customers/'},
// 			{id: 6, name: 'ООО НПП ГА «ЛУЧ»', href: '/customers/'},
// 			{id: 7, name: 'ПФ «Иркутскгазгеофизика» АО НПФ «Геофизика»', href: '/customers/'},
// 			{id: 8, name: 'ООО «ПК Уралтехнология»', href: '/customers/'},
// 			{id: 9, name: 'ООО НПП «БУРИНТЕХ»', href: '/customers/'},
// 			{id: 10, name: 'ПАО «Сургутнефтегаз» УКРС и ПНП', href: '/customers/'},
// 		]
// 		commit('addCustomers', content)
//
// 	}
// }
//
// export const mutations = {
// 	addCustomers(state, content){
// 		state.customers = content
// 	}
// }
