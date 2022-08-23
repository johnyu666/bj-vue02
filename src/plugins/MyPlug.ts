import type { App } from "vue";

//plugins/Myplug.ts
export default{
    install(app:App,options:any){
        app.config.globalProperties.$rt={id:1}
        app.directive("txt3",(el,binding)=>{ 
            if(binding.modifiers.color){
              el.style.color=binding.value
            }
            
            el.firstChild.nodeValue=el.textContent.toUpperCase()
        })
    }
}