<template>
  <NavbarHeader msg="Sensor Tracker" />

  <section id="table-section">
    <div class="row content">
      <div class="col">
        <div class="card">
          <div ref="videoContainer" style="position: relative;">
            <video id="video" ref="videoPlayer" autoplay></video>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card">
          <div ref="videoContainer2" style="position: relative;">
            <video id="video2" ref="videoPlayer2" autoplay></video>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import NavbarHeader from "./components/NavbarHeader.vue";

// const tf = require("@tensorflow/tfjs-core");
// // import "@tensorflow/tfjs-backend-cpu";
// // import "@tensorflow/tfjs-backend-webgl";
// require("@tensorflow/tfjs-backend-cpu");
// require("@tensorflow/tfjs-backend-webgl");
// // import cocoSsd from '@tensorflow-models/coco-ssd';
// const cocoSsd = require("@tensorflow-models/coco-ssd");

// eslint-disable-next-line @typescript-eslint/no-var-requires
const shaka = require("shaka-player/dist/shaka-player.ui.js");

export default defineComponent({
  name: "App",
  components: {
    NavbarHeader,
  },
  data() {
    return {
      model: null as any,
      children: [],
    };
  },
  mounted() {
    const player = new shaka.Player(this.$refs.videoPlayer);
    const ui = new shaka.ui.Overlay(
      player,
      this.$refs.videoContainer,
      this.$refs.videoPlayer
    );
    ui.getControls();
    console.log(Object.keys(shaka.ui));

    player
      .load("https://cam.dflyboy.me/stream/raspberrypi-zero.mpd")
      // .load("https://cam.dflyboy.me/stream/rpi3.mpd")
      .then(() => {
        // This runs if the asynchronous load is successful.
        console.log("The video has now been loaded!");
        this.$refs.videoPlayer.play();
        this.$refs.videoPlayer.addEventListener("play", () => {});
      })
      .catch(this.onError); // onError is executed if the asynchronous load fails.
    // cocoSsd
    //   .load()
    //   .then((m) => {
    //     require("@tensorflow/tfjs-backend-cpu");
    //     require("@tensorflow/tfjs-backend-webgl");
    //     this.model = Object.freeze(m);
    //     this.predictWebcam();
    //   })
    //   .catch(this.onError);
  },
  methods: {
    // predictWebcam() {
    //   // Now let's start classifying the stream.
    //   this.model
    //     .detect(<HTMLVideoElement>this.$refs.videoPlayer)
    //     .then((predictions) => {
    //       // Remove any highlighting we did previous frame.
    //       for (let i = 0; i < this.children.length; i++) {
    //         this.$refs.videoContainer.removeChild(this.children[i]);
    //       }
    //       this.children.splice(0);

    //       // Now lets loop through predictions and draw them to the live view if
    //       // they have a high confidence score.
    //       for (let n = 0; n < predictions.length; n++) {
    //         console.log(predictions[n]);
    //         // If we are over 66% sure we are sure we classified it right, draw it!
    //         if (predictions[n].score > 0.66) {
    //           const p = document.createElement("p");
    //           p.innerText =
    //             predictions[n].class +
    //             " - with " +
    //             Math.round(predictions[n].score * 100) +
    //             "% confidence.";
    //           // Draw in top left of bounding box outline.
    //           p.style.left = predictions[n].bbox[0] + "px";
    //           p.style.top = predictions[n].bbox[1] + "px";
    //           p.style.width = predictions[n].bbox[2] - 10 + "px";
    //           p.style.zIndex = "100";

    //           // Draw the actual bounding box.
    //           const highlighter = document.createElement("div");
    //           highlighter.setAttribute("class", "highlighter");
    //           highlighter.style.zIndex = "100";
    //           highlighter.style.position = "relative";
    //           highlighter.style.left = predictions[n].bbox[0] + "px";
    //           highlighter.style.top = predictions[n].bbox[1] + "px";
    //           highlighter.style.width = predictions[n].bbox[2] + "px";
    //           highlighter.style.height = predictions[n].bbox[3] + "px";

    //           this.$refs.videoContainer.appendChild(highlighter);
    //           this.$refs.videoContainer.appendChild(p);

    //           // Store drawn objects in memory so we can delete them next time around.
    //           this.children.push(highlighter);
    //           this.children.push(p);
    //         }
    //       }

    //       // Call this function again to keep predicting when the browser is ready.
    //       requestAnimationFrame(this.predictWebcam);
    //     });
    // },
  },
});
</script>
