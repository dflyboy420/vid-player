<template>
  <NavbarHeader msg="Sensor Tracker" />

  <div class="divider"></div>
  <section id="table-section">
    <div class="row content">
      <div class="col">
        <div class="card">
          <div class="content">
            <vue-plyr :options="options" ref="plyr" v-on:ready="playStream">
              <video controls playsinline autoplay type="video/mp4">
                <!-- <source
                  size="720"
                  src="http://localhost:8333/fd.webm"
                  type="video/webm"
                />
                <source
                  size="720"
                  src="http://localhost:8333/e13.mp4"
                  type="video/mp4"
                /> -->
                <!-- <source
                  src="http://localhost:8333/e13/stream.m3u8"
                  type="application/vnd.apple.mpegurl"
                /> -->
                <!-- <track
                  default
                  kind="captions"
                  label="English captions"
                  src="/path/to/english.vtt"
                  srclang="en"
                /> -->
              </video>
            </vue-plyr>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import NavbarHeader from "./components/NavbarHeader.vue";
import Hls from "hls.js";

export default defineComponent({
  name: "App",
  components: {
    NavbarHeader,
  },
  data() {
    return {
      options: {
        autoplay: true,
        debug: true,
      },
    };
  },
  mounted() {
    console.log(this.$refs.plyr);
  },
  methods: {
    playStream() {
      var hls = new Hls({
        // autoStartLoad: true,
        // liveMaxLatencyDurationCount: 4
      });
      hls.attachMedia((<any>(<any>this.$refs.plyr).player.media));
      hls.on(Hls.Events.MEDIA_ATTACHED, function () {
        hls.loadSource("https://cam.dflyboy.me/hls/raspberrypi-zero.m3u8");
        hls.on(Hls.Events.MANIFEST_LOADED, function (ev, data) {
          console.log("manifest loaded, found " + data.url + " quality level"); // hls.
          (<HTMLVideoElement>hls.media).play();
        });
      });
    },
  },
});
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
