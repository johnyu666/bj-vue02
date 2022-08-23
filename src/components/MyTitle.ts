//MyTitle.ts
import {h} from 'vue'
export default{
    props:["level"],
    setup(props,context) {
        // props.level
        // <slot v-slot:default></slot>
        return ()=>h("h"+props.level,context.slots.default())
    }
}