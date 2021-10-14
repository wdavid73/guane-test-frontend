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
                    {{ episode.name }}
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
                      class="
                        fas
                        fa-map-marker-alt
                        mr-2
                        text-lg text-blueGray-400
                      "
                    ></i>
                    {{ episode.air_date }}
                  </div>
                  <div class="mb-2 text-blueGray-600 mt-10">
                    <i class="fas fa-globe mr-2 text-lg text-blueGray-400"></i
                    >Episode : {{ episode.episode }}
                  </div>
                </div>
              </div>
              <div class="mt-10 py-10 border-t border-blueGray-200 text-center">
                <div class="flex flex-wrap justify-center">
                  <div class="w-full lg:w-9/12 px-4">
                    <div class="grid grid-cols-3 gap-4">
                      <div
                        v-for="(character, index) in episode.characters"
                        :key="index"
                      >
                        <div
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
                          <router-link
                            :to="{
                              name: 'Details',
                              params: { id: character.split('/').pop() },
                            }"
                          >
                            <p>Character {{ character.split("/").pop() }}</p>
                          </router-link>
                        </div>
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
import Navbar from "../components/navbar.vue";
import axios from "axios";
import { endpoints } from "../utils/api";

export default {
  name: "Episode",
  components: {
    Navbar,
  },
  data() {
    return {
      episode: {},
    };
  },

  methods: {
    async getEpisode() {
      let episode_id = this.$route.params.id;
      await axios
        .get(`${endpoints.episodes}/${episode_id}`)
        .then(({ data }) => {
          this.episode = data;
        });
      console.log("route params", this.$route.params.id);
    },
  },

  async beforeMount() {
    await this.getEpisode();
  },
};
</script>

<style>
</style>