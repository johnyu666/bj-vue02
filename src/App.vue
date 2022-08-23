<template>
  <user-item>
    <template v-slot:default="scope">
      <button>{{scope.row.name}}</button>
    </template>
  </user-item>
  <my-title v-for="i in [1,2,3,4]" :level="i">标题：{{i}}</my-title>

  <h2>{{$rt.id}}</h2>
 <h1 v-txt3.color="'green'">{{title}}</h1> 
 <button @click="change">change</button>
 <child1></child1>
</template>
<script lang="ts" setup>
import {ref} from "vue"
import Child1 from '@/components/Child1'
import MyTitle from '@/components/MyTitle'
import UserItem from '@/components/UserItem'
const item=ref({price:2,count:3})
const title=ref("ok")
function change(){
  title.value="no ok"
}

const vTxt=(el,binding)=>{ 
    if(binding.modifiers.color){
      el.style.color=binding.value
    }
    
    el.firstChild.nodeValue=el.textContent.toUpperCase()
}
// const vTxt={
//   mounted(el:HTMLElement,binding:any) {
    
//     el.style.color=binding.value
    
//     el.firstChild.nodeValue=el.textContent.toUpperCase()
//   },
//   updated(el,binding) {
//      el.style.color=binding.value
    
//     el.firstChild.nodeValue=el.textContent.toUpperCase()
//   }
// }
</script>