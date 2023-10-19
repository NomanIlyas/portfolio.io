<template>
  <div class="dizme_tm_section">
    <div class="dizme_tm_skills">
      <div class="container">
        <div class="wrapper">
          <div class="left">
            <div
              class="dizme_tm_main_title wow fadeInUp"
              data-wow-duration="1s"
              data-align="left"
            >
              <span>Coding is Passion</span>
              <h3>I Develop Skills Regularly to Keep Me Update</h3>
              <p>
                Most common methods for developing websites that work well along with responsiveness and user friendly
              </p>
            </div>
            <div class="dodo_progress wow fadeInUp" data-wow-duration="1s">
              <div
                class="progress_inner skillsInner___"
                data-value="95"
                data-color="#f75023"
              >
                <span
                  ><span class="label"> PHP (Symfony / Laravel / WordPress)</span
                  ><span class="number">95%</span></span
                >
                <div class="background">
                  <div class="bar"><div class="bar_in"></div></div>
                </div>
              </div>
              
              <div
                class="progress_inner skillsInner___"
                data-value="90"
                data-color="#1cbe59"
              >
                <span
                  ><span class="label">Python (Django / FastAPI))</span
                  ><span class="number">90%</span></span
                >
                <div class="background">
                  <div class="bar"><div class="bar_in"></div></div>
                </div>
              </div>
              <div
                class="progress_inner skillsInner___"
                data-value="85"
                data-color="#8067f0"
              >
                <span
                  ><span class="label">Node JS</span
                  ><span class="number">85%</span></span
                >
                <div class="background">
                  <div class="bar"><div class="bar_in"></div></div>
                </div>
              </div>
            </div>
          </div>
          <div class="right">
            <img :src="`/img/skills/${dark ? 2 : 1}.jpg`" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SkillComponent",
  components: {},
  props: {
    dark: { type: Boolean },
  },
};
</script>
