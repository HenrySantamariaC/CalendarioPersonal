<template>
  <div class="container">
    <div class="row">
      <div class="col px-0 px-md-auto">
        <div class="">
          <!-- <img src="https://bing.ioliu.cn/v1/rand" alt="img random" class="img-fluid"> -->
          <section class="bg-1 p-4 m-sm-4 rounded-3">
            <div class="row">
              <div class="col">
                <h1 class="text-light text-start px-4">Mi área de trabajo</h1>
                <h6 class="text-start px-4 text-white-50 text-capitalize">{{today}}</h6>
              </div>
            </div>
            <div class="row">
              <div class="col-lg-5 py-3" v-if="!existMeets">
                <div>
                  <a class="p-2 mx-md-4 my-3 bg-2 text-white-50 rounded-3 d-block text-decoration-none pe-auto">
                    <h6>No hay eventos en lista</h6>
                    <h6 class="mb-0"> --:-- </h6>
                  </a>
                </div>
              </div>
              <div class="col-lg-5 py-3" v-else>
                <div v-for="(reunion,i) in reuniones" :key="i">
                  <a class="p-2 mx-md-4 my-3 bg-2 text-white-50 rounded-3 d-block text-decoration-none pe-auto" 
                  :href="reunion.link"
                  v-if="!reunion.active">
                    <h6>{{reunion.name}}</h6>
                    <h6 class="mb-0">{{reunion.start}} - {{reunion.end}}</h6>
                  </a>
                  <a class="p-3 mx-md-4 my-3 bg-danger text-light rounded-3 d-block text-decoration-none pe-auto"
                  :href="reunion.link"
                  v-else>
                    <h4>{{reunion.name}}</h4>
                    <h5 class="mb-0 text-white-50">{{reunion.start}} - {{reunion.end}}</h5>
                  </a>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col">
                <h5 class="text-light text-start px-4">Mis enlaces</h5>
                <div class="row">
                  <div class="col-5 col-sm-2 bg-2 rounded-3 my-1 mx-auto mx-sm-1" v-for="(enlace,i) in enlaces" :key="i">
                    <a class="m-2 d-block text-decoration-none pe-auto" :href="enlace.link">
                        <img class="img-fluid img-favicon" :src="enlaces[0].faviconLink+enlace.link" :alt="enlace.name"/>
                        <h6 class="text-light">{{enlace.name}}</h6>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import moment from 'moment'
import Reuniones from '@/db/listMeet.js'
export default {
  name: 'Home',
  data() {
    return {
      today: '',
      existMeets: false,
      reuniones: [],
      enlaces: [
        {
          name: 'Aula virtual',
          link: 'https://aulavirtual.unprg.edu.pe/my/',
          faviconLink: 'http://www.google.com/s2/favicons?domain='
        },
        {
          name: 'Campus UNPRG',
          link: 'https://campus.unprg.edu.pe/alumno/entrar',
          faviconLink: 'http://www.google.com/s2/favicons?domain='
        },
        {
          name: 'Github',
          link: 'https://github.com/HenrySantamariaC',
          faviconLink: 'http://www.google.com/s2/favicons?domain='
        },
      ],
    }
  },
  methods: {
    loadHour(hour){
      let time = new Date()
      let objTime = hour.split(':')
      time.setHours(objTime[0],objTime[1],0)
      return time
    },
    isActiveMeeting(reunion){
      let start = this.loadHour(reunion.start)
      let end = this.loadHour(reunion.end)
      let now = new Date()
      let flag = moment(now).isBetween(start,end)
      return flag
    },
    currentMeeting(){
      let time = new Date()
      let day = Reuniones[time.getDay()]
      this.reuniones = day
      moment.locale('es')
      this.today = moment().format('dddd DD [de] MMMM [del] YYYY')
      this.existMeets = Array.isArray(day)
      if (this.existMeets) {
        for (let i = 0; i < day.length; i++) {
          day[i].active = this.isActiveMeeting(day[i])
        }
      }
    }
  },
  created() {
    this.currentMeeting()
  }
}
</script>
<style scoped>
  .bg-1 {
    background-color: #0E1011;
  }
  .bg-2 {
    background-color: #1A1D25;
  }
  .bg-3 {
    background-color: #1D232A;
  }
  .bg-4 {
    background-color: #2A343E;
  }
  .img-favicon {
    width: 32px;
    height: 32px;
  }
</style>
