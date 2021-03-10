<template>
  <div class="errors" v-if="!messages.success">
    <ul>
      <li v-for="message in messages" :key="message">{{ message }}</li>
    </ul>
  </div>
  <div class="success" v-if="messages.success">
    <p v-for="message in messages" :key="message">{{ message }}</p>
  </div>
  <div class="form">
    <form @submit.prevent="submit" class="cancel">
    <input type="text" name="token" id="token" v-model="form.token" placeholder="Code d'annulation" autofocus>
    <button type="submit" :disabled="!form.token">Annuler ma reservation</button>
  </form>
  </div>
</template>

<script>
import {  } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ReservationForm',

  data(){
    return {
      form : {
        token : ""
      },
      today : "",
      messages : {
      }
    }
  },

  components: {
  },

  methods : {
    submit(){
      let init = {
        method : 'DELETE',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body : JSON.stringify(this.form)
      }

      fetch(`https://fakeaffluences.herokuapp.com/api/reservation/annulation/${this.form.token}`, init)
      .then(response => response.json())
      .then(data => {
        if(!data.success){
          return this.messages = data
        }
        this.form = {}
        return this.messages = data
      })
      .catch(error => {console.log(error)})
    }
  }
});

</script>

<style scoped>
.form{
  background-color: #ffc82d;
}

.cancel>input[type=text]{
  height: 40px;
  border : none;
  padding: 0;
  border-bottom: 1px solid black;
  background: none;
  width: 90%;
  padding-left: 10px;
  margin: 5% 0;
}

.cancel>button{
  background: red;
  height: 50px;
  width: 100px;
  border-radius: 50px;
  margin-bottom: 5%;
  color: white;
}

.cancel>input{
  outline: none;
}

::placeholder{
  color : black;
}

.errors, .success{
  background-color: red;
  color: white;
  text-align: justify;
}

.success{
  background-color: green;
  text-align: center;
}
</style>