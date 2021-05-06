<template>
    <!-- sticky top-8 - to test -->
    <nav class="flex flex-wrap justify-between items-center h-auto text-white p-9" data-aos="fade-right" data-aos-duration="1000">
        <!-- Logo -->
        <div class="text-center">
            <a href="#" class="uppercase font-roboto font-black text-2xl tracking-wider"> RR Training & Sport Nutrition </a>
        </div>
        <!-- Pages and social -->
        <div class="flex w-2/4 items-center">
            <!-- Pages -->
            <div class="flex flex-grow justify-around text-lg uppercase">
                <!-- <router-link class="hover-a-header" to="/">Home</router-link> -->
                <a href="#" class="hover-a-header">About</a>
                <a href="#" class="hover-a-header">Services</a>
                <a href="#" class="hover-a-header">Shop</a>
                <a href="#" class="hover-a-header">Contact</a>
            </div>
            <!-- Social -->
            <div class="flex">
                <a target="_blank" href="https://www.facebook.com/RR-Training-Sport-Nutrition-105536484496267"><i class="fab fa-facebook text-3xl hover-a-header"></i></a>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    name: 'Header'
}
</script>

<style>
    /* a.router-link-exact-active {
        color: #42b983;
    } */

</style>