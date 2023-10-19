<template>
  <div class="dizme_tm_section" id="process">
    <div class="dizme_tm_process">
      <div class="container">
        <div class="list">
          <ul>
            <li class="wow fadeInUp" data-wow-duration="1s">
              <div class="list_inner">
                <div class="icon">
                  <span v-html="dark ? pixelPerfectDark : pixelPerfectLight">
                  </span>
                </div>
                <div class="title">
                  <h3>Your Development Partner</h3>
                </div>
                <div class="text">
                  <p>
                    Your partner in bringing innovative digital solutions to life.
                  </p>
                </div>
              </div>
            </li>
            <li
              class="wow fadeInUp"
              data-wow-duration="1s"
              data-wow-delay="0.2s"
            >
              <div class="list_inner">
                <div class="icon">
                  <span v-html="dark ? highQualityDark : highQualityLight">
                  </span>
                </div>
                <div class="title">
                  <h3>Elevating Web Excellence</h3>
                </div>
                <div class="text">
                  <p>
                    Taking your online presence to new heights with cutting-edge development.
                  </p>
                </div>
              </div>
            </li>
            <li
              class="wow fadeInUp"
              data-wow-duration="1s"
              data-wow-delay="0.4s"
            >
              <div class="list_inner">
                <div class="icon">
                  <span v-html="dark ? awesomeIdeaDark : awesomeIdeaLight">
                  </span>
                </div>
                <div class="title">
                  <h3>Empowering Your Vision</h3>
                </div>
                <div class="text">
                  <p>
                    Empowering your digital dreams with innovative and scalable solutions.
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  awesomeIdeaDark,
  awesomeIdeaLight,
  highQualityDark,
  highQualityLight,
  pixelPerfectDark,
  pixelPerfectLight,
} from "@/svg";
export default {
  name: "ProcessComponent",
  data() {
    return {
      pixelPerfectLight,
      highQualityDark,
      awesomeIdeaDark,
      pixelPerfectDark,
      awesomeIdeaLight,
      highQualityLight,
    };
  },
  components: {},
  props: {
    dark: { type: Boolean },
  },
};
</script>
