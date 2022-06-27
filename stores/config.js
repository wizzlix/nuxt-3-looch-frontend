import { defineStore } from 'pinia'

export const useConfigStore = defineStore('config', {
    state: () => ({
			config: []
	}),
    actions: {
        init() {
            this.config = [
			{
				id: 1,
				name: "Колпак транспортный",
				designation: "ЛУЧ.570.00.00.03" ,
				executor: "Производство 1" ,
				type: "Деталь",
			},
			{
				id: 2,
				name: "Пробка транспортная",
				designation: "ЛУЧ.570.00.00.04" ,
				executor: "Производство 1" ,
				type: "Деталь",
			},
			{
				id: 3,
				name: "Корпус",
				designation: "ЛУЧ.598.00.00.01" ,
				executor: "Производство 1" ,
				type: "Деталь",
			},
			{
				id: 4,
				name: "Узел стыковочный верхний",
				designation: "ЛУЧ.596.02.00.00" ,
				executor: "Производство 2" ,
				type: "Узел",
			},
		]
        },
    },
})