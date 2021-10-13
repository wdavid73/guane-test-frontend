<template>
  <div>
    <Navbar />
    <main class="profile-page">
      <section class="relative block h-500-px">
        <div
          class="absolute top-0 w-full h-full bg-center bg-cover"
          style="
            background-image: url('https://www.xtrafondos.com/wallpapers/rick-y-morty-fanart-2020-6344.jpg');
          "
        ></div>
        <div
          class="
            top-auto
            bottom-0
            left-0
            right-0
            w-full
            absolute
            pointer-events-none
            overflow-hidden
            h-70-px
          "
          style="transform: translateZ(0px)"
        ></div>
      </section>
      <section class="relative py-16 bg-blueGray-200">
        <div class="container mx-auto px-4">
          <div
            class="
              relative
              flex flex-col
              min-w-0
              break-words
              bg-white
              w-full
              mb-6
              shadow-xl
              rounded-lg
              -mt-64
            "
          >
            <div class="px-6">
              <div class="flex flex-wrap justify-center">
                <div class="w-full lg:w-3 flex justify-center">
                  <img
                    alt="..."
                    :src="`${character.image}`"
                    class="
                      shadow-xl
                      rounded-full
                      h-auto
                      align-middle
                      border-none
                      mt-10
                    "
                  />
                </div>
                <div
                  class="
                    w-full
                    lg:w-4/12
                    px-4
                    lg:order-3
                    lg:text-right
                    lg:self-center
                  "
                ></div>
              </div>
              <div class="text-center mt-12">
                <h3
                  class="
                    text-4xl
                    font-semibold
                    leading-normal
                    mb-2
                    text-blueGray-700
                    mb-2
                  "
                >
                  {{ character.name }}
                </h3>
                <div
                  class="
                    text-sm
                    leading-normal
                    mt-0
                    mb-2
                    text-blueGray-400
                    font-bold
                    uppercase
                  "
                >
                  <i
                    class="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400"
                  ></i>
                  {{ character.location.name }}
                </div>
                <div class="mb-2 text-blueGray-600 mt-10">
                  <i class="fas fa-globe mr-2 text-lg text-blueGray-400"></i
                  >Origin : {{ character.origin.name }}
                </div>
                <div class="mb-2 text-blueGray-600">
                  <i
                    class="fas fa-fingerprint mr-2 text-lg text-blueGray-400"
                  ></i
                  >Species : {{ character.species }}
                </div>
                <div class="mb-2 text-blueGray-600">
                  <i
                    class="fas fa-venus-mars mr-2 text-lg text-blueGray-400"
                  ></i
                  >Gender : {{ character.gender }}
                </div>
                <div class="mb-2 text-blueGray-600">
                  <i
                    class="fas fa-info-circle mr-2 text-lg text-blueGray-400"
                  ></i
                  >Status : {{ character.status }}
                </div>
              </div>
              <div class="mt-10 py-10 border-t border-blueGray-200 text-center">
                <div class="flex flex-wrap justify-center">
                  <div class="w-full lg:w-9/12 px-4">
                    <div class="grid grid-cols-3 gap-4">
                      <div
                        v-for="(episode, index) in character.episode"
                        :key="index"
                      >
                        <a
                          :href="`/episode/${episode.split('/').pop()}`"
                          class="
                            bg-green-500
                            hover:bg-green-700
                            text-white
                            font-bold
                            py-2
                            px-4
                            rounded rounded-full
                            w-7/12
                          "
                        >
                          Episode {{ episode.split("/").pop() }}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
    <link
      rel="stylesheet"
      href="https://demos.creative-tim.com/notus-js/assets/styles/tailwind.css"
    />
    <link
      rel="stylesheet"
      href="https://demos.creative-tim.com/notus-js/assets/vendor/@fortawesome/fontawesome-free/css/all.min.css"
    />
  </div>
</template>

<script>
import axios from "axios";
import { endpoints } from "../utils/api";
import Navbar from "../components/navbar.vue";

export default {
  name: "Details",
  components: {
    Navbar,
  },
  data() {
    return {
      character: {},
    };
  },

  methods: {
    async getCharacter() {
      let character_id = this.$route.params.id;

      await axios
        .get(`${endpoints.characters}/${character_id}`)
        .then(({ data }) => {
          this.character = data;
        });
      console.log("route params", this.$route.params.id);
    },
  },

  async beforeMount() {
    await this.getCharacter();
  },
};
</script>

<style>
</style>
