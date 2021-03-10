<template>
  <div class="cancel">
    <h1>Annulation</h1>
    <router-link :to="{ name: 'Cancel' }"><button>Annuler ma réservation</button></router-link>
  </div>
</template>

<script>
import {  } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Cancel',
  components: {
  },
});

</script>

<style scoped>
.cancel{
  height: 100px;
  color: white;
}
button{
  border: 1px solid #FFC82D;
  background: red;
  height: 50px;
  width: 100px;
  border-radius: 50px;
  color: white;
}

button:focus{
	outline:none;
}

</style>