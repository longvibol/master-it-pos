<template>
  <div>
    <button class="btn">{{title}}</button>
  </div>
</template>

<script>
export default {
props:{
    title:{
        type:String,
        default:null,
    }
}
}
</script>
.btn{
  background-color: #3498db;
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
}
<style>

</style>