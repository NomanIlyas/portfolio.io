<template>
  <div class="dizme_tm_section" id="home">
    <div class="dizme_tm_hero">
      <div
        class="background"
        :data-img-url="`/img/slider/${dark ? 2 : 1}.jpg`"
      ></div>
      <div class="container">
        <div class="content">
          <div class="details">
            <div class="hello">
              <h3 class="orangeText">Hello, I'm</h3>
            </div>
            <div class="name">
              <h3>Nauman Ilyas</h3>
            </div>
            <div class="job">
              <p>
                A <span class="greenText">Senior Software Engineer</span> From
                <span class="purpleText">Pakistan</span>
              </p>
            </div>
            <div class="text">
              <p>
                With over 5 years as a Senior Software Engineer, I specialize in crafting software solutions that consistently exceed client expectations and am committed to pushing technology's boundaries for success.
              </p>
            </div>
            <div class="button">
              <div class="dizme_tm_button">
                <a class="anchor" href="#about"><span>About Me</span></a>
              </div>
              <div class="social">
                <ul>
                  <li>
                    <a href="https://web.facebook.com/Noman.Ilyas.software" target="_blank"><i class="icon-facebook-1"></i></a>
                  </li>
                  <li>
                    <a href="https://twitter.com/Nuaman_Malik" target="_blank"><i class="icon-twitter-1"></i></a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/in/nauman-ilyas-495368114/" target="_blank"><i class="icon-linkedin-1"></i></a>
                  </li>
                  <li>
                    <a href="https://www.upwork.com/freelancers/~0159a56a118273d26c" target="_blank">
                      <img src="img/logo/upwork.png" alt="" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="avatar">
            <div class="image">
              <img src="/img/slider/avatar.png" alt="" />
              <span
                class="skills illustrator anim_moveBottom"
                v-html="ai"
              >
            </span>
              <span class="skills photoshop anim_moveBottom" v-html="ps"></span>
              <span class="skills figma anim_moveBottom" v-html="figma"></span>
            </div>
          </div>
        </div>
      </div>
      <div class="dizme_tm_down">
        <a class="anchor" href="#process" v-html="dark ? mouseDark : mouse">
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import { ai, figma, mouse, mouseDark, ps } from "../svg";
export default {
  name: "HomeComponent",
  data() {
    return { ai, ps, figma, mouse, mouseDark };
  },
  props: {
    dark: { type: Boolean },
  },
};
</script>
