<template>
  <div class="nav">
    <router-link :to="{ name: 'Home' }"><img src="/assets/img/logo_vitality.png" alt="Team Vitality logo" id="icon"></router-link>
  </div>
</template>

<script>
import {  } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Nav',
  components: {
  }
});
</script>

<style scoped>
#icon{
  height: 50px;
}

.nav{
  color: white;
}
</style>