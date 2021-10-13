<template>
  <div>
    <Navbar />
    <div class="mt-32">
      <div
        class="
          grid grid-cols-4
          sm:grid-cols-2
          md:grid-cols-3
          lg:grid-cols-4
          gap-4
          m-20
        "
      >
        <div v-for="character in characters" :key="character.id">
          <div class="bg-white block py-10">
            <div class="max-w-2xl mx-auto">
              <div class="w-full">
                <div class="w-full bg-green-600 h-48 rounded-t-lg"></div>
                <div class="absolute -mt-20 ml-5">
                  <img
                    :src="`${character.image}`"
                    alt=""
                    class="
                      bg-gray-200
                      border border-gray-300
                      h-36
                      w-35
                      rounded-lg
                      shadow-md
                      border-b border-primary
                    "
                  />
                </div>
              </div>

              <div
                class="
                  bg-primary
                  border border-primary
                  rounded-b-lg
                  p-5
                  pt-20
                  flex flex-col
                "
              >
                <div class="mb-1 border border-gray-300 h-6 w-50 rounded-lg">
                  {{ character.name }}
                </div>

                <div class="text-sm mt-2 text-gray-200">
                  <div class="flex flex-row ml-auto space-x-2 items-center">
                    <div
                      class="
                        mb-1
                        border border-gray-300
                        h-5
                        w-20
                        text-black
                        rounded-lg
                      "
                    >
                      Gender
                    </div>
                    <div
                      class="
                        mb-1
                        border border-gray-300
                        h-5
                        w-20
                        text-black
                        rounded-lg
                      "
                    >
                      {{ character.gender }}
                    </div>
                  </div>
                </div>

                <div class="pt-8 flex gap-8">
                  <div class="flex flex-col">
                    <div
                      class="mb-1 border border-gray-300 h-6 w-20 rounded-lg"
                    >
                      Species
                    </div>
                    <div
                      class="mb-1 border border-gray-300 h-6 w-20 rounded-lg"
                    >
                      Status
                    </div>
                  </div>

                  <div class="flex flex-col">
                    <div
                      class="mb-1 border border-gray-300 h-6 w-20 rounded-lg"
                    >
                      {{ character.species }}
                    </div>
                    <div
                      class="mb-1 border border-gray-300 h-6 w-20 rounded-lg"
                    >
                      {{ character.status }}
                    </div>
                  </div>
                </div>

                <a
                  :href="`details/${character.id}`"
                  class="
                    bg-green-500
                    hover:bg-green-700
                    text-white
                    font-bold
                    py-2
                    px-4
                    rounded-full
                    mt-2
                  "
                >
                  Details
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "../components/navbar.vue";

import axios from "axios";
import { endpoints } from "../utils/api";
export default {
  name: "Home",
  components: {
    Navbar,
  },
  data() {
    return {
      characters: [],
    };
  },
  methods: {
    getCharacters() {
      axios.get(endpoints.characters).then(({ data }) => {
        this.characters = data.results;
      });
    },
  },

  mounted() {
    this.getCharacters();
  },
};
</script>
