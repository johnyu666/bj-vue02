//UserItem.ts
import {ref,h} from 'vue'
export default{

    setup(props,{slots}) {
        const user=ref({id:1,name:'john'})

        return ()=>h('li',slots.default({row:user.value}))
    }
}