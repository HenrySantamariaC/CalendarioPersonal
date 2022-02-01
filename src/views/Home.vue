<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <div class="">
          <!-- <img src="https://bing.ioliu.cn/v1/rand" alt="img random" class="img-fluid"> -->
          <section class="bg-1 p-4 m-4 rounded-3">
            <div class="row">
              <div class="col">
                <h1 class="text-light text-start px-4">Mi área de trabajo</h1>
                <h6 class="text-start px-4 text-white-50">Lunes 31 de Enero del 2022</h6>
              </div>
            </div>
            <div class="row">
              <div class="col-5 py-3">
                <a class="p-2 mx-4 my-3 bg-2 text-white-50 rounded-3 d-block text-decoration-none pe-auto" href="https://meet.google.com/ucg-pgck-peo">
                  <h6>Planeamiento estrategico</h6>
                  <h6 class="mb-0">07:30pm - 10:00pm</h6>
                </a>
                <div class="p-3 mx-4 my-3 bg-danger text-light rounded-3">
                  <h4>Ingenieria del software</h4>
                  <h5 class="mb-0 text-white-50">10:00pm - 12:30pm</h5>
                </div>
                <div class="p-2 mx-4 my-3 bg-2 text-white-50 rounded-3">
                  <h6>Microprocesadores</h6>
                  <h6 class="mb-0 text-white-50">12:30pm - 3:00pm</h6>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col">
                <h5 class="text-light text-start px-4">Mis enlaces</h5>
                <div class="row">
                  <div class="col-2 bg-2 rounded-3 mx-1">
                    <a class="m-2 d-block text-decoration-none pe-auto" :href="enlaces[0].link">
                        <img class="img-fluid img-favicon" :src="enlaces[0].faviconLink+enlaces[0].link" alt="hola"/>
                        <h6 class="text-light">{{enlaces[0].name}}</h6>
                    </a>
                  </div>
                  <div class="col-2 bg-2 rounded-3 mx-1">
                    <a class="m-2 d-block text-decoration-none pe-auto" :href="enlaces[1].link">
                        <img class="img-fluid img-favicon" :src="enlaces[1].faviconLink+enlaces[1].link" alt="hola"/>
                        <h6 class="text-light">{{enlaces[1].name}}</h6>
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
export default {
  name: 'Home',
  data() {
    return {
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
      ]
    }
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
