import {defineStore} from "pinia";

export const useEmployeesStore = defineStore("employees",{
	state: () => ({
		employees: []
	}),
	actions: {
		init(){
			this.employees = [
			{
				id: 1,
				surname: "Афонин",
				name: "Сергей",
				patron: "Александрович"
			},
			{
				id: 2,
				surname: "Балахнин",
				name: "Иван",
				patron: "Александрович"
			},
			{
				id: 3,
				surname: "Бойко",
				name: "Семен",
				patron: "Александрович"
			},
			{
				id: 4,
				surname: "Волканин",
				name: "Юрий",
				patron: "Михайлович"
			},
			{
				id: 5,
				surname: "Гольсман",
				name: ".",
				patron: "."
			},
			{
				id: 6,
				surname: "Ефимченко",
				name: "Николай",
				patron: "Валерьевич"
			},
			{
				id: 7,
				surname: "Забалуев",
				name: "Николай",
				patron: "Константинович"
			},
			{
				id: 8,
				surname: "Завьялов",
				name: "Андрей",
				patron: "Германович"
			},
			{
				id: 9,
				surname: "Игнатов",
				name: "Александр",
				patron: "Валерьевич"
			},
			{
				id: 10,
				surname: "Ильиных",
				name: "Семён",
				patron: "Юрьевич"
			},
			{
				id: 11,
				surname: "Каюров",
				name: "Константин",
				patron: "Николаевич"
			},
			{
				id: 12,
				surname: "Каюров",
				name: "Михаил",
				patron: "Юрьевич"
			},
			{
				id: 13,
				surname: "Котлов",
				name: "Евгений",
				patron: "Анатольевич"
			},
			{
				id: 14,
				surname: "Кочетова",
				name: "Ольга",
				patron: "Анатольевна"
			},
			{
				id: 15,
				surname: "Кривцов",
				name: "Никита",
				patron: "Анатольевич"
			},
			{
				id: 16,
				surname: "Логинов",
				name: "Сергей",
				patron: "Александрович"
			},
			{
				id: 17,
				surname: "Лошкарёв",
				name: "Кирилл",
				patron: "Вячеславович"
			},
			{
				id: 18,
				surname: "ЛУЧ",
				name: "командировка",
				patron: "."
			},
			{
				id: 19,
				surname: "ЛУЧ",
				name: "завод",
				patron: "."
			},
			{
				id: 20,
				surname: "Максимов",
				name: "Семён",
				patron: "Олегович"
			},
			{
				id: 21,
				surname: "Малетин",
				name: "Илья",
				patron: "Андреевич"
			},
			{
				id: 22,
				surname: "Михайлов",
				name: "Андрей",
				patron: "Михайлович"
			},
			{
				id: 23,
				surname: "Мищенко",
				name: "Сергей",
				patron: "Викторович"
			},
			{
				id: 24,
				surname: "Моисеев",
				name: "Алексей",
				patron: "Михайлович"
			},
			{
				id: 25,
				surname: "Насибуллин",
				name: "Илья",
				patron: "Наильевич"
			},
			{
				id: 26,
				surname: "Непомнящих",
				name: "Игорь",
				patron: "Владимирович"
			},
			{
				id: 27,
				surname: "ОРИОН",
				name: ".",
				patron: "."
			},
			{
				id: 28,
				surname: "ОТК",
				name: "-",
				patron: "-"
			},
			{
				id: 29,
				surname: "Петров",
				name: "Федор",
				patron: "Станиславович"
			},
			{
				id: 30,
				surname: "Петров",
				name: "Андрей",
				patron: "Николаевич"
			},
			{
				id: 31,
				surname: "Пустовит",
				name: "Кирилл",
				patron: "Викторович"
			},
			{
				id: 32,
				surname: "Рябченко",
				name: "Наталья",
				patron: "Дмитриевна"
			},
			{
				id: 33,
				surname: "Савельев",
				name: "Игорь",
				patron: "Алексеевич"
			},
			{
				id: 34,
				surname: "Сенько",
				name: "Евгений",
				patron: "Владимирович"
			},
			{
				id: 35,
				surname: "Сергеев",
				name: "Илья",
				patron: "Сергеевич"
			},
			{
				id: 36,
				surname: "Сидельников",
				name: "Алексей",
				patron: "Борисович"
			},
			{
				id: 37,
				surname: "СНГ",
				name: "партия",
				patron: "ИТС"
			},
			{
				id: 38,
				surname: "СНГ",
				name: "БПО УБР-1",
				patron: "."
			},
			{
				id: 39,
				surname: "СНГ",
				name: "БПО УБР-1",
				patron: "Лаборатория зондов"
			},
			{
				id: 40,
				surname: "СНГ",
				name: "БПО УБР-1",
				patron: "Лаборатория резистивиметрии"
			},
			{
				id: 41,
				surname: "СНГ",
				name: "ЦБПО",
				patron: "БНО"
			},
			{
				id: 42,
				surname: "СНГ",
				name: "СНГФ",
				patron: "."
			},
			{
				id: 43,
				surname: "СНГ: Бибарсов",
				name: "Тимур",
				patron: "Ревкатович"
			},
			{
				id: 44,
				surname: "СНГ: Горобец",
				name: "Роман",
				patron: "В."
			},
			{
				id: 45,
				surname: "СНГ: Золотухин",
				name: "Антон",
				patron: "Иванович"
			},
			{
				id: 46,
				surname: "СНГ: Иорданский",
				name: "В.",
				patron: "О."
			},
			{
				id: 47,
				surname: "СНГ: Корнелюк",
				name: "Дмитрий",
				patron: "Леонидович"
			},
			{
				id: 48,
				surname: "СНГ: Кушников",
				name: "В",
				patron: "В"
			},
			{
				id: 49,
				surname: "СНГ: Мартиросян",
				name: "Л.",
				patron: "А."
			},
			{
				id: 50,
				surname: "СНГ: Пестерев",
				name: "Сергей",
				patron: "Александрович"
			},
			{
				id: 51,
				surname: "СНГ: Сосновский",
				name: "Фадей",
				patron: "А"
			},
			{
				id: 52,
				surname: "СНГ: Фаткуллин",
				name: "Фарид",
				patron: "Анварович"
			},
			{
				id: 53,
				surname: "СНГ: Хаминич",
				name: "Александр",
				patron: "Александрович"
			},
			{
				id: 54,
				surname: "Тимин",
				name: "Леонид",
				patron: "Владимирович"
			},
			{
				id: 55,
				surname: "Тугарин",
				name: "Михаил",
				patron: "Александрович"
			},
			{
				id: 56,
				surname: "Тукмачов",
				name: "Константин",
				patron: "Витальевич"
			},
			{
				id: 57,
				surname: "Тюнюков",
				name: "Константин",
				patron: "Борисович"
			},
			{
				id: 58,
				surname: "Харченко",
				name: "Юлия",
				patron: "Игоревна"
			},
			{
				id: 59,
				surname: "Цуканов",
				name: "Игорь",
				patron: "Рафаэльевич"
			},
			{
				id: 60,
				surname: "Шевелёв",
				name: "Вячеслав",
				patron: "Николаевич"
			},
			{
				id: 61,
				surname: "Шейкин",
				name: "Сергей",
				patron: "Григорьевич"
			},
			{
				id: 62,
				surname: "Эбель",
				name: "Александр",
				patron: "Михайлович"
			},
			{
				id: 63,
				surname: "Якубовский",
				name: "Леоднид",
				patron: "Анатольевич"
			}
		]
			this.employees.forEach(item => {
				item.href = '/employees/'
			})
		}
	}
})