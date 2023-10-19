<template>
  <div class="dizme_tm_section">
    <div class="dizme_tm_testimonials">
      <div class="dizme_tm_main_title" data-align="center">
        <span>Testimonials</span>
        <h3>What My Clients Say</h3>
        <p>
          Unlock the potential of your online presence with our responsive and user-friendly web design – ensuring your website shines on desktop and dazzles on every device. No one can do better than Nauman
        </p>
      </div>
      <div class="list_wrapper">
        <div class="total">
          <div class="in">
            <swiper
              :pagination="{ clickable: true, el: '.owl-dots' }"
              :modules="modules"
              class="owl-carousel owl-theme"
            >
            <swiper-slide>
                <div class="icon" v-html="testimonialIcon"></div>
                <div class="text">
                  <p>
                    Job completed successfully. Noman came up with a solution to add a custom navigation menu to our website. It required expert coding. I highly recommend Noman and will re-hire.                  </p>
                </div>
                <div class="short">
                  <div class="image">
                    <div
                      class="main"
                      data-img-url="/img/testimonials/6.jpg"
                    ></div>
                  </div>
                  <div class="detail">
                    <h3>Nile Livingston</h3>
                    <span>Creative Repute CEO</span>
                  </div>
                </div>
              </swiper-slide>
              <swiper-slide>
                <div class="icon" v-html="testimonialIcon"></div>
                <div class="text">
                  <p>
                    I have worked with Noman at eKomi for about 3 years. Noman is a passionate developer, that worked at eKomi on a web-facing application (Symfony/PHP) that is implemented on the websites of thousands of customers. Noman managed to keep it cool at all times and delivered what was asked from him. He is eager to learn and growing each day
                  </p>
                </div>
                <div class="short">
                  <div class="image">
                    <div
                      class="main"
                      data-img-url="/img/testimonials/4.jpg"
                    ></div>
                  </div>
                  <div class="detail">
                    <h3>Maurice Fons</h3>
                    <span class="center">Product Manager at Ekomi</span>
                  </div>
                </div>
              </swiper-slide>
              <swiper-slide>
                <div class="icon" v-html="testimonialIcon"></div>
                <div class="text">
                  <p>
                    Once again, Noman has completed another project with me with complete satisfaction. He is a trustworthy freelancer and goes above and beyond the task at hand. He is also very informative about his line of work and offers suggestions and recommendations to make the project even better. I highly recommend him and will definitely work with him again.
                  </p>
                </div>
                <div class="short">
                  <div class="image">
                    <div
                      class="main"
                      data-img-url="/img/testimonials/3.jpg"
                    ></div>
                  </div>
                  <div class="detail">
                    <h3>Mean Debat</h3>
                    <span>ASCE CEO</span>
                  </div>
                </div>
              </swiper-slide>
              <swiper-slide>
                <div class="icon" v-html="testimonialIcon"></div>
                <div class="text">
                  <p>
                    Awesome seller, honest, upfront, available when you need him for questions or concerns. One of a kind and HIGHLY recommended. He was available and arranged for a video conference call within 30 minutes of being hired and then joined with me any time that I had questions or concerns. Job well done!
                  </p>
                </div>
                <div class="short">
                  <div class="image">
                    <div
                      class="main"
                      data-img-url="/img/testimonials/6.jpg"
                    ></div>
                  </div>
                  <div class="detail">
                    <h3>Jeff Gray</h3>
                    <span>Payeezy CEO</span>
                  </div>
                </div>
              </swiper-slide>
              <swiper-slide>
                <div class="icon" v-html="testimonialIcon"></div>
                <div class="text">
                  <p>
                    Noman was eager to please and share his talents with me and our project. I appreciated his diligence in trying to get our project right.                  </p>
                </div>
                <div class="short">
                  <div class="image">
                    <div
                      class="main"
                      data-img-url="/img/testimonials/6.jpg"
                    ></div>
                  </div>
                  <div class="detail">
                    <h3>Jonathan Davis</h3>
                    <span>Launchworx CEO</span>
                  </div>
                </div>
              </swiper-slide>

            
            </swiper>
            <div class="owl-dots"></div>
          </div>
          <div class="left_details">
            <div
              class="det_image one wow fadeIn"
              data-wow-duration="1s"
              data-img-url="/img/testimonials/2.jpg"
            ></div>
            <div
              class="det_image two wow fadeIn"
              data-wow-duration="1s"
              data-wow-delay="0.2s"
              data-img-url="/img/testimonials/1.jpg"
            ></div>
            <div
              class="det_image three wow fadeIn"
              data-wow-duration="1s"
              data-wow-delay="0.4s"
              data-img-url="/img/testimonials/3.jpg"
            ></div>
            <div
              class="det_image four wow fadeIn"
              data-wow-duration="1s"
              data-wow-delay="0.6s"
              data-img-url="/img/testimonials/4.jpg"
            ></div>
            <span class="circle green animPulse"></span>
            <span class="circle yellow animPulse"></span>
            <span class="circle border animPulse"></span>
          </div>
          <div class="right_details">
            <div
              class="det_image one wow fadeIn"
              data-wow-duration="1s"
              data-img-url="/img/testimonials/5.jpg"
            ></div>
            <div
              class="det_image two wow fadeIn"
              data-wow-duration="1s"
              data-wow-delay="0.2s"
              data-img-url="/img/testimonials/6.jpg"
            ></div>
            <div
              class="det_image three wow fadeIn"
              data-wow-duration="1s"
              data-wow-delay="0.4s"
              data-img-url="/img/testimonials/7.jpg"
            ></div>
            <span class="circle yellow animPulse"></span>
            <span class="circle purple animPulse"></span>
            <span class="circle border animPulse"></span>
          </div>
        </div>
      </div>
      <div class="brush_1 wow fadeInRight" data-wow-duration="1s">
        <img src="/img/brushes/testimonials/1.png" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
import { testimonialIcon } from "@/svg";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
export default {
  name: "TestimonialsComponent",
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      testimonialIcon,
    };
  },
  setup() {
    return {
      modules: [Pagination],
    };
  },
};
</script>
