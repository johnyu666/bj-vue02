//Child1.tsx
import {h,ref,onMounted} from 'vue'
export default {
    
    setup(){
        const title=ref("Hello")
        function change(){
            alert("change")
            title.value="你好"
        }
        onMounted(()=>{
            
        })
       return  ()=>(<div>
        <h2>{title.value}子组件</h2>
        <button onClick={change}>change</button>
       </div>)
    }
}