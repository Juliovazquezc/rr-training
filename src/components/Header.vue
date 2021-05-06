<template>
    <!-- sticky top-8 - to test -->
    <nav class="flex flex-wrap justify-around lg:justify-between items-center h-auto text-white p-9" data-aos="fade-right" data-aos-duration="1000">
        <!-- Logo -->
        <div class="w-10/12 lg:w-2/4 text-center">
            <a href="#" class="uppercase text-2xl lg:text-3xl font-roboto font-black tracking-wider"> RR Training & Sport Nutrition </a>
        </div>
        <!-- Pages and social -->
        <div class="hidden lg:flex lg:w-2/4 items-center">
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

        <div id="btn" class="lg:hidden w-2/12 flex items-center justify-center">
            <i class="fas fa-bars text-2xl"></i>
        </div>

        <div id="mobile-menu" class="text-base text-center font-roboto custom-hidden uppercase lg:hidden">
            <a href="#" class="block py-2 px-4">About</a>
            <a href="#" class="block py-2 px-4">Services</a>
            <a href="#" class="block py-2 px-4">Shop</a>
            <a href="#" class="block py-2 px-4">Contact</a>
        </div>
    </nav>
</template>

<script>
export default {
    name: 'Header',
    mounted(){
        const btn = document.getElementById('btn');
        const menu = document.getElementById('mobile-menu');
        btn.addEventListener('click', () =>{
            menu.classList.toggle('custom-hidden');
            menu.classList.toggle('custom-visible');
        });
    }
}
</script>

<style>
    .custom-hidden{
        visibility: hidden;
        opacity: 0;
        height: 0;
        transition: all .1s ease-in;
        transform: translateY(-50px);
    }
    .custom-visible{
        opacity: 1;
        visibility: visible;
        height: auto;
        transition: all .5s ease-in;
        transform: translateY(0px);
    }
</style>