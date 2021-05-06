<template>
  <div class="bg-hero bg-no-repeat bg-center">
    <div class="h-screen container mx-auto overflow-y-hidden">
      <Header />
      <HeroContent />
    </div>
  </div>
</template>

<script>
import Header from "../components/Header";
import HeroContent from "../components/HeroContent";
export default {
  name: "Hero",
  components: {
    Header,
    HeroContent
  },
};
</script>
