<template>
  <div>
    name <input type="text" v-model="name"><br>
    price <input type="text" v-model="price"><br>
    quantity <input type="text" v-model="qty"><br>
    amount: {{amount}} <br>
    <button @click="handleCompute">Submit</button>


  </div>
</template>

<script>
export default {

data(){
  return{
    name:null,
    price:0,
    qty:0,
    amount:0
  }
},
computed:{
  
}
}
</script>

<style>

</style>