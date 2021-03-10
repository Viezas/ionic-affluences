<template>
  <div class="description">
    <p><span v-html="descriptionPassed"></span></p>
    <img src="/assets/img/VHive_gaming_room.jpg" alt="V.Hive open public gaming room">
  </div>
</template>

<script>
import {  } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Description',
  data(){
    return {
    }
  },

  props :  {
    descriptionPassed : String,
  },

  components: {
  },
});
</script>

<style scoped>
.description{
  color: white;
  padding : 0 5%;
  padding-bottom: 10%;
  text-align: justify;
}
</style>