<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<style>
#app {
  font-family: 'Roboto', sans-serif !important;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

body {
  /* background-color: #212529 !important; */
  font-family: 'Roboto', sans-serif !important;
  background-color: #000 !important;
}
@media (max-width: 575px){
  body {
      background: #0E1011 !important;
  }
}
</style>
