//mixins/MyMixin.ts
export default{
    mounted() {
        
        console.log("mixin mounted...")
    },
    directives:{
        'txt2':(el,binding)=>{ 
            if(binding.modifiers.color){
              el.style.color=binding.value
            }
            
            el.firstChild.nodeValue=el.textContent.toUpperCase()
        }
    }
}