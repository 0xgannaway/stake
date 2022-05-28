<template>
  <div>
    <v-navigation-drawer v-model="drawer" app temporary dark src="@/assets/img/bgDrawer.jpg">
      <v-list>
        <v-list-item>
          <v-list-item-avatar>
            <img src="@/assets/img/logo2.png" alt="Logo" />
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title class="title">PELICAN</v-list-item-title>
            <!-- <v-list-item-subtitle>WEB</v-list-item-subtitle> -->
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <v-divider />

      <v-list dense>
        <v-list-item v-for="([icon, text, link], i) in items" :key="i" link @click="$vuetify.goTo(link)">
          <v-list-item-icon class="justify-center">
            <v-icon>{{ icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title class="subtitile-1">{{
                text
            }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app :color="color" :flat="flat" dark class="px-15" :class="{ expand: flat }">
      <v-toolbar-title>
        <v-img src="@/assets/img/logo2.png" contain max-height="45px"/>
      </v-toolbar-title>
      <v-spacer />
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" class="mr-4" v-if="isXs" />
      <div v-else>
        <v-btn class="mr-2" text @click="$vuetify.goTo('#hero')">
          <span>About</span>
        </v-btn>
        <v-btn class="mr-4" text @click="$vuetify.goTo('#features')">
          <span>Stake</span>
        </v-btn>
        <v-btn class="mr-2" fab small @click="$vuetify.goTo('#features')">
          <v-icon>mdi-twitter</v-icon>
        </v-btn>
        <v-btn class="mr-2" fab small @click="$vuetify.goTo('#features')">
          <v-icon>mdi-Medium</v-icon>
        </v-btn>
        <v-btn class="mr-2" fab small @click="$vuetify.goTo('#features')">
          <v-icon>mdi-telegram</v-icon>
        </v-btn>
        <v-btn class="mr-2" fab small @click="$vuetify.goTo('#features')">
          <v-icon>mdi-discord</v-icon>
        </v-btn>
      </div>
    </v-app-bar>
  </div>
</template>

<style scoped>
.v-toolbar {
  transition: 0.6s;
}

.expand {
  height: 80px !important;
  padding-top: 10px;
}
.mdi-twitter {
  background: radial-gradient(
    circle at 30% 107%,
    #fdf497 0%,
    #fdf497 5%,
    #fd5949 45%,
    #d6249f 60%,
    #285aeb 90%
  );
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>

<script>
export default {
  data: () => ({
    drawer: null,
    isXs: false,
    items: [
      ["mdi-home-outline", "About", "#hero"],
      ["mdi-information-outline", "Stake", "#features"],
    ],
  }),
  props: {
    color: String,
    flat: Boolean,
  },
  methods: {
    onResize() {
      this.isXs = window.innerWidth < 850;
    },
  },

  watch: {
    isXs(value) {
      if (!value) {
        if (this.drawer) {
          this.drawer = false;
        }
      }
    },
  },
  mounted() {
    this.onResize();
    window.addEventListener("resize", this.onResize, { passive: true });
  },
};
</script>
