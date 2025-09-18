<template>
  <div>
    <h4>this is Component</h4>
  </div>
</template>

<script>
export default {

    beforeDestroy(){
        console.log("Before Destroyed is Component");
    },
    destroyed(){
        console.log("Destroyed is Component");
    }

}
</script>

<style>

</style>