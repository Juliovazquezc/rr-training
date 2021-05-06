<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import AOS from 'aos';
import 'aos/dist/aos.css';

export default {
  created(){
    AOS.init();
  }
}
</script>
