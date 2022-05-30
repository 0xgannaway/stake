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
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" class="mr-4" v-if="isXs" />
      <v-img src="@/assets/img/logo3.png" class="mr-2" contain max-height="50px" max-width="200px" />
      <!-- <v-avatar color="primary" size="36" class="mr-2"><img src="@/assets/img/logo2.png" alt="Logo" /></v-avatar>
      <v-toolbar-title>
        PELICAN
      </v-toolbar-title> -->
      <!-- <v-btn class="mr-2" text @click="$vuetify.goTo('#hero')">
        <span>About</span>
      </v-btn>
      <v-btn class="mr-4" text @click="$vuetify.goTo('#features')">
        <span>Stake</span>
      </v-btn> -->
      <v-tabs v-model="tab" left slider-color="#B224EF">
        <v-tab>About</v-tab>
        <v-tab>Stake</v-tab>
      </v-tabs>
      <!-- <v-item-group mandatory>
        <v-container>
          <v-row>
            <v-col v-for="n in 2" :key="n" cols="6" md="3">
              <v-item v-slot="{ active, toggle }">
                <v-card class="d-flex " dark flat width="100" height="50" @click="toggle">
                  <div class="text-h5 flex-grow-1 text-center" :color="active ? 'white' : 'grey'">{{ n }}</div>
                  <div v-if="active" class="btn-1 align-self-end" :color="active ? 'primary' : ''" height="10"></div>
                </v-card>
              </v-item>
            </v-col>
          </v-row>
        </v-container>
      </v-item-group> -->
      <v-spacer />
      <v-btn class="mr-2 btn-1" fab x-small v-if="!isXs" @click="$vuetify.goTo('#features')">
        <v-icon>mdi-twitter</v-icon>
      </v-btn>
      <v-btn class="mr-2 btn-2" fab x-small v-if="!isXs" @click="$vuetify.goTo('#features')">
        <v-icon>mdi-Medium</v-icon>
      </v-btn>
      <v-btn class="mr-2 btn-3" fab x-small v-if="!isXs" @click="$vuetify.goTo('#features')">
        <v-icon>mdi-telegram</v-icon>
      </v-btn>
      <v-btn class="mr-2 btn-4" fab x-small v-if="!isXs" @click="$vuetify.goTo('#features')">
        <v-icon>mdi-discord</v-icon>
      </v-btn>
    </v-app-bar>
  </div>
</template>

<style scoped>
.v-toolbar {
  transition: 0.6s;
}
.v-tab {
  transition: 0.6s;
}
.expand {
  height: 80px !important;
  padding-top: 10px;
}

.btn-1 {
  background: linear-gradient(90deg, #B224EF 0%, #7579FF 100%);
}

.btn-2 {
  background: linear-gradient(90deg, #B224EF 0%, #7579FF 100%);
}

.btn-3 {
  background: linear-gradient(90deg, #B224EF 0%, #7579FF 100%);
}

.btn-4 {
  background: linear-gradient(90deg, #B224EF 0%, #7579FF 100%);
}
</style>

<script>
export default {
  data: () => ({
    tab: null,
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
