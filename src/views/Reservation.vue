<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title>FakeAffluences</ion-title>
      </ion-toolbar>
    </ion-header>
    
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">FakeAffluences</ion-title>
        </ion-toolbar>
      </ion-header>

      <div id="container">
        <Nav />
        <ReservationForm />
        <Footer />
      </div>
    </ion-content>
  </ion-page>
</template>

<script>
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/vue';
import { defineComponent } from 'vue';
import Nav from '../components/_partials/nav.vue';
import Footer from '../components/_partials/footer.vue';
import ReservationForm from '../components/Reserv/reservationForm.vue';

export default defineComponent({
  name: 'Home',
  data(){
    return{
      description : '',
      scheduleInfos : []
    }
  },
  components: {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    Nav,
    Footer,
    ReservationForm
  },
});
</script>

<style scoped>
#container {
  text-align: center;
  background-color: black;
}

#container strong {
  font-size: 20px;
  line-height: 26px;
}

#container p {
  font-size: 16px;
  line-height: 22px;
  
  color: #8c8c8c;
  
  margin: 0;
}

#container a {
  text-decoration: none;
}

ion-toolbar{
  background-color: black;
}
</style>