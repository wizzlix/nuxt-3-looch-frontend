import {defineStore} from "pinia";

export const useUserStore = defineStore("user",{
    state: () => ({
        user: null
    }),
    actions: {
        init(){
            this.user = {
                name: 'Дмитрий Братчиков',
            }
        }
    }
})