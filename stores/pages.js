import {defineStore} from "pinia";

export const usePagesStore = defineStore("pages",{
    state: () => ({
        pages: null,
        subpages: null
    }),
    actions: {
        init(){
            this.pages = [
                {name: 'Модули',href: '/modules',visible: true, description: "Модули",subpages: [
                        {name: 'Выпущенные модули',href: '/modules',visible: true, description: "Выпущенные модули",subpages: null,last: false,},
                        {name: 'Ремонты модулей',href: '/repairs',visible: true,description: "Ремонты модулей",subpages: null,last: true,}],
                },
                { name: 'Заказы', href: '/orders', visible: true,description: "Заказы", subpages: null },
                { name: 'Платы и изделия', href: '/items', visible: true,description: "Платы и изделия", subpages: null },
                { name: 'Прошивки', href: '/firmwares', visible: true,description: "Прошивки", subpages: null },
                {name: 'Заказчики',href: '/customers',visible: true,description: "Заказчики",subpages: null,},
                { name: 'Персонал', href: '/employees', visible: true,description: "Персонал", subpages: null },
                {name: 'Базовые спецификации',href: '/config',visible: true,description: "Базовые спецификации",subpages: null,},
                { name: 'Трансфер', href: '/move_item', visible: true,description: "Трансфер", subpages: null },
            ]

            this.pages.forEach(item => {
                if (item.subpages === null){
                    item.icon = '/static/icons/pages' + item.href + ".svg"
                }
                else {
                    let subpagesArrayTEMP = []
                    item.subpages.forEach(item => {
                        let obgOfSubpages = {}

                        obgOfSubpages.name = item.name
                        obgOfSubpages.href = item.href
                        obgOfSubpages.visible = item.visible
                        obgOfSubpages.subpages = item.subpages
                        obgOfSubpages.description = item.description
                        obgOfSubpages.last = item.last

                        obgOfSubpages.icon = '/static/icons/pages' + item.href + ".svg"

                        subpagesArrayTEMP.push(obgOfSubpages)

                        return subpagesArrayTEMP
                    })
                    this.subpages=subpagesArrayTEMP
                }
            })
        }
    }
})