<template>
  <div>
    <h5>this is a root</h5>
    <my-button-vue :title="titleT"/><br>
    <MyButtonVue :title="titleT"/>
  </div>
</template>

<script>
import MyButtonVue from './components/MyButton.vue'

export default {

  data(){
    return{
      titleT:"On Submit",
    }
  },
  components:{
    MyButtonVue
  },

}
</script>

<style>

</style>