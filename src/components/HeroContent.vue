<template>
  <div
    class="flex flex-col justify-center h-4/5 w-2/4 font-roboto text-white text-6xl uppercase font-bold"
    data-aos="flip-up"
    data-aos-duration="1000"
  >
    <h1 class="mb-8 tracking-widest">Perfect Workout</h1>
    <h2 class="stroke mb-8 tracking-widest">For Your Body</h2>
    <p class="text-xl font-normal normal-case mb-8">
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam
      excepturi iusto nulla odit esse beatae! Error dolorum officia pariatur,
      nisi, iure illo omnis dolorem, nulla impedit esse ratione fuga obcaecati.
      Totam aperiam labore, tempore dolore, nam amet libero eligendi velit quo
    </p>
    <a
      class="w-max cursor-pointer uppercase text-lg p-8 text-green-600 border-green-500 border rounded-md tracking-widest hover:text-white hover:bg-green-500 transition duration-300"
    >
      Lets train
    </a>
  </div>
</template>

<script>
export default {
  name: "HeroContent",
};
</script>

<style>
.stroke {
  -webkit-text-fill-color: transparent; /* Will override color (regardless of order) */
  -webkit-text-stroke-width: 0.5px;
  -webkit-text-stroke-color: white;
}
</style>