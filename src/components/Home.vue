<template>
  <section id="hero">
    <v-parallax dark height="583">
      <v-row align="center" justify="center">
        <v-col cols="10">
          <v-row align="center" justify="center">
            <v-col cols="12" md="6" xl="8">
              <!-- <v-row align="center" justify="center"> -->
                <v-row align="center" justify="start">
                  <h1 class="who-we-are mb-4 ml-n4">Who We Are</h1>
                </v-row>
                <v-row align="center" justify="start">
                  <h1 class="who-we-are-desc">
                    To Become An Unique And Irreplaceable Institution<br />
                    Dedicated to the Emerging frontier of crypto
                  </h1>
                </v-row>
                <v-row align="center" justify="start">
                  <v-btn large dark @click="$vuetify.goTo('#features')" class="mt-5 who-we-are-btn">
                    Get started
                  </v-btn>
                </v-row>
              <!-- </v-row> -->
            </v-col>
            <v-col cols="12" md="6" xl="4" class="hidden-sm-and-down">
              <v-img src="@/assets/img/bg.png"></v-img>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-parallax>
    <v-container fluid id="features" class="do-bg">
      <v-row align="center" justify="center">
        <v-col cols="10">
          <v-row align="center" justify="space-around">
            <v-col cols="12" class="text-center">
              <h1 class="do-title mt-16 mb-16">What We Do</h1>
            </v-col>
            <v-col cols="12" sm="4" class="text-center" v-for="(feature, i) in features" :key="i">
              <v-hover v-slot:default="{ hover }">
                <div class="card" shaped :elevation="hover ? 10 : 4" :class="{ up: hover }">
                  <v-img :src="feature.img" max-width="100px" class="d-block ml-auto mr-auto"
                    :class="{ 'zoom-efect': hover }"></v-img>
                  <h1 class="do-text">{{ feature.title }}</h1>
                </div>
              </v-hover>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
    <foote />
  </section>
</template>

<script>
import foote from "./Footer";

export default {

  components: {
    foote,
  },
  data() {
    return {
      features: [
        {
          img: require("@/assets/img/icon2.png"),
          title: "Asset Management",
          text: "",
        },
        {
          img: require("@/assets/img/icon1.png"),
          title: "Utility Platform",
          text: "",
        },
        {
          img: require("@/assets/img/icon3.png"),
          title: "Research",
          text: "",
        },
      ],
    };
  },
  watch: {

  },
  methods: {

  },
};
</script>

<style lang="scss">
.circle {
  stroke: white;
  stroke-dasharray: 650;
  stroke-dashoffset: 650;
  -webkit-transition: all 0.5s ease-in-out;
  opacity: 0.3;
}

.btn-1 {
  background: linear-gradient(90deg, #B224EF 0%, #7579FF 100%);
}

.who-we-are {

  font-family: 'Poppins';
  font-style: normal;
  font-weight: 800;
  font-size: 72px;
  line-height: 72px;
  /* identical to box height, or 100% */

  text-align: center;
  text-transform: capitalize;

  /* Linear */

  background: linear-gradient(90deg, #B224EF 0%, #7579FF 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;

}

.who-we-are-desc {

  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  /* or 150% */

  display: flex;
  align-items: center;

  color: #FFFFFF;
}

.who-we-are-btn {
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 800;
  font-size: 16px;
  line-height: 16px;
  /* identical to box height, or 100% */
  text-transform: capitalize;
  text-align: center;
  // font-feature-settings: 'pnum'on, 'lnum'on;
  /* #FFFFFF */
  color: #FFFFFF;
  /* Inside auto layout */
  flex: none;
  order: 0;
  flex-grow: 0;
  background: linear-gradient(90deg, #B224EF 0%, #7579FF 100%);
  border-radius: 8px;
}

.do-bg {
  // width: 1440px;
  // height: 560px;
  // left: 0px;
  // top: 583px;
  background: linear-gradient(90deg, #B224EF 0%, #7579FF 100%);
}

.do-title {
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 800;
  font-size: 72px;
  line-height: 72px;
  /* identical to box height, or 100% */

  text-align: center;
  text-transform: capitalize;

  /* #FFFFFF */

  color: #FFFFFF;
}

.do-text {
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 800;
  font-size: 24px;
  line-height: 24px;
  /* identical to box height, or 100% */

  text-align: center;
  text-transform: capitalize;

  color: #FFFFFF;
}

.playBut {
  /*  border: 1px solid red;*/
  display: inline-block;
  -webkit-transition: all 0.5s ease;

  .triangle {
    -webkit-transition: all 0.7s ease-in-out;
    stroke-dasharray: 240;
    stroke-dashoffset: 480;
    stroke: white;
    transform: translateY(0);
  }

  &:hover {
    .triangle {
      stroke-dashoffset: 0;
      opacity: 1;
      stroke: white;
      animation: nudge 0.7s ease-in-out;

      @keyframes nudge {
        0% {
          transform: translateX(0);
        }

        30% {
          transform: translateX(-5px);
        }

        50% {
          transform: translateX(5px);
        }

        70% {
          transform: translateX(-2px);
        }

        100% {
          transform: translateX(0);
        }
      }
    }

    .circle {
      stroke-dashoffset: 0;
      opacity: 1;
    }
  }
}
</style>

<style>
.btn-play {
  transition: 0.2s;
}

.svg-border-waves .v-image {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 3rem;
  width: 100%;
  overflow: hidden;
}

#hero {
  z-index: 0;
}

.svg-border-waves img {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  margin-bottom: -2px;
  z-index: -1;
}

.card {
  min-height: 300px;
  padding: 10px;
  transition: 0.5s ease-out;
}

.card .v-image {
  margin-bottom: 15px;
  transition: 0.75s;
}

.card h1 {
  margin-bottom: 10px;
}

.zoom-efect {
  transform: scale(1.1);
}

.up {
  transform: translateY(-20px);
  transition: 0.5s ease-out;
}
</style>

<style>
section {
  position: relative;
}
</style>
