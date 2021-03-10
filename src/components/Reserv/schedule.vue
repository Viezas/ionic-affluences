<template>
  <div class="schedule">
    <h1>Horaires</h1>
    <table>
      <tr v-for="day in schedule.days" :key="day">
        <td>{{ day }}</td>
        <td>{{ schedule['min-hours'] }}h - {{ schedule['max-hours'] }}h</td>
      </tr>
    </table>
    <router-link :to="{ name: 'Reservation' }"><button>Réserver</button></router-link>
  </div>
</template>

<script>
import {  } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Schedule',
  data(){
    return {
    }
  },

  props :  {
    schedule : Object,
  },

  components: {
  },
});
</script>

<style scoped>
.schedule{
  padding : 2% 5% 10% 5%;
  text-align: center;
  background-color: #FFC82D;
}

td{
  text-align: center;
  border-bottom: 1px solid black;
  height: 50px;
}

table{
  width: 100%;
  margin-bottom: 10%;
}

button{
  border: 1px solid black;
  background: none;
  height: 50px;
  width: 100px;
  border-radius: 50px;
}

button:focus{
	outline:none;
}

button:hover{
  background-color: black;
  color: #FFC82D;
}
</style>