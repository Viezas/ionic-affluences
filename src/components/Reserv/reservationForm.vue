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
    <form @submit.prevent="submit" class="reservation">
    <input type="email" name="email" id="email" v-model="form.email" placeholder="E-mail" autofocus><br>
    <input type="date" name="date" id="date" v-model="form.date" :min="today" /><br>
    <input type="time" name="time" id="time" v-model="form.time" step="01:00" />
    <div id="cgu">
      <input type="checkbox" name="cgu" id="cgu2"  v-model="form.cgu">
      <label for="cgu2">Accepter les <a href="#" @click.prevent>conditions d'utilisation</a></label>
    </div>
    <button type="submit">Réserver</button>
  </form>
  </div>
</template>

<script>
import {  } from '@ionic/vue';
import { defineComponent } from 'vue';

function today(){
  let unix_timestamp = Date.now()
  let date = new Date(unix_timestamp)
  let today_day =  date.getDate()
  let today_month = date.getMonth()+1
  let today_year = date.getFullYear()
  if((today_month && today_day) < 10){
    return `${today_year}-0${today_month}-0${today_day}`
  }
  return `${today_year}-${today_month}-${today_day}`
}

function time(){
  let unix_timestamp = Date.now()
  let date = new Date(unix_timestamp)
  let hours = date.getHours()
  return `${hours}:00`
}

export default defineComponent({
  name: 'ReservationForm',

  data(){
    return {
      form : {
        email : "",
        date : "",
        time : "",
        cgu : false,
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
        method : 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body : JSON.stringify(this.form)
      }

      fetch("https://fakeaffluences.herokuapp.com/api/reservation", init)
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
  },

  mounted(){
    this.today = today()
    this.form.date = today()
    this.form.time = time()
  }
});

</script>

<style scoped>
.form{
  background-color: #ffc82d;
}

.reservation>input[type=email],.reservation>input[type=date],.reservation>input[type=time]{
  height: 40px;
  border : none;
  padding: 0;
  border-bottom: 1px solid black;
  background: none;
  width: 90%;
  padding-left: 10px;
  margin: 5% 0;
}


#cgu{
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 5%;
}

#cgu>input[type=checkbox]{
  margin-right: 0.5%;
}

#cgu>label{
  padding: 0;
  margin: 0;
}

.reservation>button{
  border: 1px solid black;
  background: none;
  height: 50px;
  width: 100px;
  border-radius: 50px;
  margin-bottom: 5%;
}

.reservation>button:hover{
  background: black;
  color: #FFC82D;
}

.reservation>input{
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