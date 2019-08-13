<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  /* -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px; */
  margin: 0px;
  padding: 0px;

}
body{
  margin: 0px;
}
body, div, ul, ol, dl, dt, dd, li, dl, h1, h2, h3, h4,span
{margin:0;padding:0;font-style:normal;font-family:"微软雅黑"}

ol, ul ,li{list-style: none;}
img {border: 0; vertical-align:middle;}
body{color:#000000;background:#FFF; text-align:center;}
.clear{clear:both;height:1px;width:100%; overflow:hidden; margin-top:-1px;}
a{color:#000000;text-decoration:none; }
a:hover{color:#BA2636;text-decoration:underline;}
</style>
