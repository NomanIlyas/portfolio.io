<template>
  <div class="dizme_tm_section" id="portfolio">
    <div class="dizme_tm_portfolio">
      <div class="container">
        <div class="dizme_tm_main_title" data-align="center">
          <span>Portfolio</span>
          <h3>My Amazing Works</h3>
          <p>
            Most common methods for developing websites that work well along with responsiveness and user friendly
          </p>
        </div>
        <div class="portfolio_filter">
          <ul>
            <li>
              <a
                class="c-pointer"
                :class="activeNav === '1' ? 'current' : ''"
                @click.prevent="() => (this.activeNav = '1')"
                data-filter="*"
                >All</a
              >
            </li>
            <li>
              <a
                class="c-pointer"
                :class="activeNav === '2' ? 'current' : ''"
                @click.prevent="() => (this.activeNav = '2')"
                data-filter=".youtube"
                >Symfony / Laravel</a
              >
            </li>
            <li>
              <a
                class="c-pointer"
                :class="activeNav === '3' ? 'current' : ''"
                @click.prevent="() => (this.activeNav = '3')"
                data-filter=".vimeo"
                >Blockchain</a
              >
            </li>
            <li>
              <a
                class="c-pointer"
                :class="activeNav === '4' ? 'current' : ''"
                @click.prevent="() => (this.activeNav = '4')"
                data-filter=".paymentInegration"
                >Payment integration</a
              >
            </li>
            <li>
              <a
                class="c-pointer"
                :class="activeNav === '5' ? 'current' : ''"
                @click.prevent="() => (this.activeNav = '5')"
                data-filter=".popup"
                >Node Js</a
              >
            </li>
            <li>
              <a
                class="c-pointer"
                :class="activeNav === '6' ? 'current' : ''"
                @click.prevent="() => (this.activeNav = '6')"
                data-filter=".popup"
                >WordPress / SquareSpace</a
              >
            </li>
          </ul>
        </div>
        <div class="dizme_tm_portfolio_titles"></div>
        <div class="portfolio_list wow fadeInUp" data-wow-duration="1s">
          <ul class="gallery_zoom grid">
            <li class="youtube grid-item">
              <div class="inner">
                <div
                  class="entry dizme_tm_portfolio_animation_wrap"
                  data-title="4-art Technologies"
                  data-category="Symfony"
                >
                  <a
                    class="popup-youtube"
                    href="#"
                    @click.prevent="active = 1"
                  >
                    <img src="/img/thumbs/42-56.jpg" alt="" />
                    <div class="main" data-img-url="/img/portfolio/1.jpg"></div>
                  </a>
                </div>
                <div class="mobile_title">
                  <h3>4-art Technologies</h3>
                  <span>Symfony / Laravel</span>
                </div>
              </div>
            </li>
            <li class="vimeo grid-item">
              <div class="inner">
                <div
                  class="entry dizme_tm_portfolio_animation_wrap"
                  data-title="Creative Repute"
                  data-category="WordPress"
                >
                  <a
                    class="popup-vimeo"
                    href="#"
                    @click.prevent="active = 1"
                  >
                    <img src="/img/thumbs/42-34.jpg" alt="" />
                    <div class="main" data-img-url="/img/portfolio/2.jpg"></div>
                  </a>
                </div>
                <div class="mobile_title">
                  <h3>Ave Bottle</h3>
                  <span>Blockchain</span>
                </div>
              </div>
            </li>
            <li class="paymentInegration grid-item">
              <div class="inner">
                <div
                  class="entry dizme_tm_portfolio_animation_wrap"
                  data-title="BE Luxury"
                  data-category="SquareSpace"
                >
                  <a
                    class="soundcloude_link mfp-iframe audio"
                    href="#"
                    @click.prevent="active = 1"
                  >
                    <img src="/img/thumbs/42-56.jpg" alt="" />
                    <div class="main" data-img-url="/img/portfolio/3.jpg"></div>
                  </a>
                </div>
                <div class="mobile_title">
                  <h3>Magic Art</h3>
                  <span>Payment integration</span>
                </div>
              </div>
            </li>
            <li class="popup grid-item">
              <div class="inner">
                <div
                  class="entry dizme_tm_portfolio_animation_wrap"
                  data-title="Podcast Fellowship"
                  data-category="SquareSpace"
                >
                  <a
                    class="zoom"
                    href="#"
                    @click.prevent="active = 1"
                  >
                    <img src="/img/thumbs/42-56.jpg" alt="" />
                    <div class="main" data-img-url="/img/portfolio/5.jpg"></div>
                  </a>
                </div>
                <div class="mobile_title">
                  <h3>Blue Lemon</h3>
                  <span>Node Js</span>
                </div>
              </div>
            </li>
            <li class="popup grid-item">
              <div class="inner">
                <div
                  class="entry dizme_tm_portfolio_animation_wrap"
                  data-title="Sueep"
                  data-category="WordPress"
                >
                  <a
                    class="zoom"
                    href="#"
                    @click.prevent="active = 1"
                  >
                    <img src="/img/thumbs/42-34.jpg" alt="" />
                    <div class="main" data-img-url="/img/portfolio/4.jpg"></div>
                  </a>
                </div>
                <div class="mobile_title">
                  <h3>Art Stone</h3>
                  <span>Popup</span>
                </div>
              </div>
            </li>
            <li class="paymentIntegration grid-item">
              <div class="inner">
                <div
                  class="entry dizme_tm_portfolio_animation_wrap"
                  data-title="Ruba Ali"
                  data-category="Payment Integration"
                >
                  <a
                    class="portfolio_popup"
                    href="#"
                    @click.prevent="active = 1"
                  >
                    <img src="/img/thumbs/42-34.jpg" alt="" />
                    <div class="main" data-img-url="/img/portfolio/6.jpg"></div>
                  </a>
                </div>
                <div class="mobile_title">
                  <h3>Integrate Stripe Payment Gateway</h3>
                  <span>Detail</span>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="brush_1 wow zoomIn" data-wow-duration="1s">
        <img src="/img/brushes/portfolio/1.png" alt="" />
      </div>
      <div class="brush_2 wow fadeInRight" data-wow-duration="1s">
        <img src="/img/brushes/portfolio/2.png" alt="" />
      </div>
    </div>
  </div>
  <MagnificPopUpVue
    :modal="modal"
    :close="closeModal"
    :name="name"
    :src="src"
  />
  <div :class="`${active === 1 ? '' : 'hidden_content'}`">
    <ModalBox :close="close">
      <div class="popup_details">
        <div class="top_image">
          <img src="img/thumbs/4-2.jpg" alt="" />
          <div
            class="main"
            data-img-url="img/portfolio/6.jpg"
            style="background-image: url('img/portfolio/6.jpg')"
          ></div>
        </div>
        <div class="portfolio_main_title">
          <h3>Stripe, Paypal, Google-Pay, Apple-Pay & Shop-Pay Integration</h3>
          <span><a href="#">Detail</a></span>
          <div></div>
        </div>
        <div class="main_details">
          <div class="textbox">
            <p>
              Rubaali, Gym training application, I've successfully integrated major payment gateways, including Stripe, PayPal, Google Pay, Apple Pay, and Shop Pay, all equipped with secure tokenization. This ensures users can make payments with confidence, and our 'Add to Cart' feature simplifies the process of selecting and purchasing training plans, prodcuts and services.
            </p>
          </div>
          <div class="detailbox">
            <ul>
              <li>
                <span class="first">Client</span>
                <span>Ruba Ali</span>
              </li>
              <li>
                <span class="first">Category</span>
                <span><a href="#">Payment Integrations</a></span>
              </li>
              <li>
                <span class="first">Date</span>
                <span>March 07, 2023</span>
              </li>
            </ul>
          </div>
        </div>
        <div class="additional_images">
          <ul>
            <li>
              <div class="list_inner">
                <div class="my_image">
                  <img src="img/thumbs/4-2.jpg" alt="" />
                  <div
                    class="main"
                    data-img-url="img/portfolio/6-1.jpg"
                    style="background-image: url('img/portfolio/1.jpg')"
                  ></div>
                </div>
              </div>
            </li>
            <li>
              <div class="list_inner">
                <div class="my_image">
                  <img src="img/thumbs/4-2.jpg" alt="" />
                  <div
                    class="main"
                    data-img-url="img/portfolio/6-2.jpg"
                    style="background-image: url('img/portfolio/2.jpg')"
                  ></div>
                </div>
              </div>
            </li>
            <li>
              <div class="list_inner">
                <div class="my_image">
                  <img src="img/thumbs/4-2.jpg" alt="" />
                  <div
                    class="main"
                    data-img-url="img/portfolio/6-3.jpg"
                    style="background-image: url('img/portfolio/3.jpg')"
                  ></div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </ModalBox>
  </div>
</template>

<script>
import MagnificPopUpVue from "./popup/MagnificPopUp.vue";
import ModalBox from "./popup/ModalBox.vue";
export default {
  name: "PortfolioComponent",
  data() {
    return {
      activeNav: "1", // props
      name: "",
      src: "",
      modal: false,
      // Content
      active: 0,
    };
  },
  mounted() {
    let Isotope = require("isotope-layout");
    setTimeout(() => {
      let iso = new Isotope(".gallery_zoom", {
        itemSelector: ".grid-item",
        //    layoutMode: "fitRows",
        percentPosition: true,
        masonry: {
          columnWidth: ".grid-item",
        },
        animationOptions: {
          duration: 750,
          easing: "linear",
          queue: false,
        },
      });
      let filterFns = {
        // show if number is greater than 50
        numberGreaterThan50: function (itemElem) {
          let number = itemElem.querySelector(".number").textContent;
          return parseInt(number, 10) > 50;
        },
        // show if name ends with -ium
        ium: function (itemElem) {
          let name = itemElem.querySelector(".name").textContent;
          return name.match(/ium$/);
        },
      };
      // bind filter button click filter main funtion
      let filtersElem = document.querySelector(".portfolio_filter ul");
      filtersElem.addEventListener("click", function (event) {
        if (event.target.getAttribute("data-filter")) {
          let filterValue = event.target.getAttribute("data-filter");
          filterValue = filterFns[filterValue] || filterValue;
          iso.arrange({ filter: filterValue });
        }
      });
    }, 1000);
  },
  methods: {
    onClick(name, src) {
      this.name = name;
      this.src = src;
      this.modal = true;
    },
    closeModal() {
      this.modal = false;
      this.name = "";
      this.src = "";
    },
    close() {
      this.active = 0;
    },
  },
  components: { MagnificPopUpVue, ModalBox },
};
</script>
