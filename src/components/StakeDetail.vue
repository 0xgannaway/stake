<template>
  <section class="pb-8">
    <v-container fluid id="detail">
      <v-row align="center" justify="center">
        <div class="stake-desc">
          <!-- <div v-html="markdownToHtml"></div> -->
          <Vue2MarkdownItLight class="md-body" :content="desc" />
        </div>
      </v-row>
      <v-row align="center" justify="center">
        <h2 class="staking-guide-title">Staking Guide & Instructions</h2>
      </v-row>
      <v-row align="center" justify="center">
        <v-col cols="2">
          <v-img src="@/assets/img/guide-1.png" width="64" height="64"></v-img>
        </v-col>
      </v-row>
      <v-row align="center" justify="center">
        <v-col cols="2">
          <v-img src="@/assets/img/guide-2.png" width="64" height="64"></v-img>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<style scoped>
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

.staking-guide-title {

  font-family: 'Poppins';
  font-style: normal;
  font-weight: 800;
  font-size: 32px;
  line-height: 72px;
  /* identical to box height, or 225% */

  text-align: center;
  text-transform: capitalize;

  /* Linear */

  background: linear-gradient(90deg, #B224EF 0%, #7579FF 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;

}

.stake-desc {

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
import { Vue2MarkdownItLight } from 'vue2-markdown-it'
export default {
  components: {
    Vue2MarkdownItLight
  },
  data() {
    return {
    };
  },
  props: {
    img: String,
    title: String,
    desc: String,
  },
  watch: {

  },
  computed: {
  },
  methods: {

  },
};
</script>
