<template>
  <div class="bg-gray-400 font-sans leading-normal tracking-normal mb-5">
    <!--Nav-->
    <nav class="bg-gray-800 p-2 mt-0 fixed w-full z-10 top-0">
      <div class="container mx-auto flex flex-wrap items-center">
        <div
          class="
            flex
            w-full
            md:w-1/2
            justify-center
            md:justify-start
            text-white
            font-extrabold
          "
        >
          <router-link
            class="text-white no-underline hover:text-white hover:no-underline"
            to="/"
          >
            <img
              src="../assets/rick_and_morty.jpg"
              class="inline object-cover w-16 h-16 mr-2 rounded-full"
              alt=""
            />
            <span class="text-2xl pl-2">
              <i class="em em-grinning"></i>
              Rick and Morty Api
            </span>
          </router-link>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Navbar",
};
</script>

<style>
</style>