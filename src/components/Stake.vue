<template>
  <section class="pb-8" id="contact">
    <v-container fluid id="features">
      <v-row align="center" justify="center" class="mt-16" elevation="12">
        <v-col cols="10">
          <v-img class="stake-logo mt-16 mb-4 d-block ml-auto mr-auto" src="@/assets/img/logo2.png"></v-img>
          <h1 class="stake-title mb-8" v-if="!showing_detail">Protocols</h1>
          <v-img class="stake-show-img d-block ml-auto mr-auto" v-if="showing_detail" :src="show_feature.big_img">
          </v-img>
        </v-col>
        <v-col cols="10">
          <v-row align="center" justify="space-around" v-if="!showing_detail">
            <v-col cols="12" sm="3" class="text-center" v-for="(feature, i) in features" :key="i">
              <v-hover v-slot:default="{ hover }">
                <v-responsive :aspect-ratio="16 / 9">
                  <v-card class="stake-card pt-6 pl-4 pr-4" :elevation="hover ? 10 : 4"
                    :class="{ 'stake-card-selected': hover }" @click="show_detail(feature)">
                    <v-img :src="feature.img" class="d-block ml-4 mr-4" :class="{ 'zoom-efect': hover }"></v-img>
                    <h1 class="do-text mb-4 mt-4">{{ feature.title }}</h1>
                    <h3 class="stake-state d-block ml-auto mr-auto">{{ feature.status }}</h3>
                    <v-btn large dark class="mt-4 mb-8" @click="show_detail(feature)"
                      :class="{ 'stake-state-launching': !feature.available, 'stake-state-stake-now': feature.available }">
                      {{ feature.available ? 'Stake Now' : 'Learn More' }}
                    </v-btn>
                  </v-card>
                </v-responsive>
              </v-hover>
            </v-col>
          </v-row>
          <v-btn v-if="showing_detail" @click="hide_detail" dark icon color="white">
            <v-icon>mdi-arrow-left</v-icon>
          </v-btn>
          <StakeDetail v-if="showing_detail" :img="show_feature.img" :title="show_feature.title"
            :desc="show_feature.desc" />
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<style scoped>
#contact {
  background-color: #111111;
  background-image: url("~@/assets/img/bg_stake.png");
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: 495px, 507.38px;
  background-position: top;
  /* height: 500px; */
}

.stake-bg {
  /* position: absolute; */
  width: 495px;
  height: 507.38px;
  /* left: 473px;
  top: 59.08px; */

  opacity: 0.9;
}

.stake-logo {
  width: 73.33px;
  height: 73.33px;
}

.stake-show-img {
  width: 300px;
  height: 88px;
}

.stake-title {

  font-family: 'Poppins';
  font-style: normal;
  font-weight: 800;
  font-size: 56px;
  line-height: 72px;
  /* identical to box height, or 129% */

  text-align: center;
  text-transform: capitalize;

  /* Linear */

  background: linear-gradient(90deg, #B224EF 0%, #7579FF 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;

}

.stake-card {
  /* width: 240px;
  height: 320px; */
  background: #251D2C;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
}

.stake-card-selected {
  box-sizing: border-box;
}

.stake-state {
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  /* identical to box height, or 171% */

  display: flex;
  align-items: center;
  text-align: center;

  color: #6B6B6B;
}

.stake-state-stake-now {
  text-align: center;
  text-transform: capitalize;
  background: linear-gradient(90deg, #B224EF 0%, #7579FF 100%);
  border-radius: 8px;
}

.stake-state-launching {
  text-align: center;
  text-transform: capitalize;
  outline-color: linear-gradient(90deg, #B224EF 0%, #7579FF 100%);
  border-radius: 8px;
}
</style>
<script>
import StakeDetail from './StakeDetail.vue'

export default {

  components: {
    StakeDetail,
  },
  data() {
    return {
      showing_detail: false,
      show_feature: null,
      features: [
        {
          big_img: require("@/assets/img/icon-agoric-big.png"),
          img: require("@/assets/img/icon-agoric.png"),
          title: "Agoric",
          status: "MainNet",
          available: true,
          desc: `Agoric is a smart contract platform designed to bring millions of developers to the DeFi frontier. By using JavaScript as its smart contract language, the Agoric developer experience will be familiar, secure, and composable.

The Agoric chain is built to be:
- A DeFi Powerhouse - Contract framework and integrated stablecoins built in enabling predictable costs and long-term smart contracts.
- Extensible - Chain governance and staking economics implemented as smart contracts enabling quick ideation and future improvements like staking derivatives.
- Interoperable - Dynamic IBC enables the Agoric chain to leverage assets, collateral, and services from other chains.`
        },
        {
          img: require("@/assets/img/icon-nym.png"),
          title: "Nym",
          status: "Launching",
          available: false,
        },
        {
          img: require("@/assets/img/icon-axelar.png"),
          title: "Axelar",
          status: "Public TestNet",
          available: false,
        },
        {
          img: require("@/assets/img/icon-kyve.png"),
          title: "KYVE",
          status: "Public TestNet",
          available: false,
        },
      ],
    };
  },
  watch: {

  },
  methods: {
    show_detail(feature) {
      this.showing_detail = true;
      this.show_feature = feature;
    },
    hide_detail() {
      this.showing_detail = false;
      this.show_feature = null;
    }
  },
};
</script>
