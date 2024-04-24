<script setup>
import NavBar from './components/navigation/NavBar.vue'
import HomePage from './components/homepage/HomePage.vue';
// import LogIn from './components/auth/LogIn.vue';

</script>

<template>
     <RouterView></RouterView>
     <HomePage>
          <NavBar/>
     </HomePage>
     
   
    
    
</template>




