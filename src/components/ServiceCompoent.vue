<template>
  <div class="dizme_tm_section" id="service">
    <div class="dizme_tm_services">
      <div class="container">
        <div class="dizme_tm_main_title" data-align="center">
          <span>Services</span>
          <h3>What I Do for Clients</h3>
          <p>
            Most common methods for developing websites that work well along with responsiveness and user friendly
          </p>
        </div>
        <div class="service_list">
          <ul>
            <li
              class="wow fadeInLeft"
              data-wow-duration="1s"
              @click.prevent="active = 1"
            >
              <div class="list_inner tilt-effect">
                <span class="icon">
                  <img class="svg" src="/img/svg/service/anchor.svg" alt="" />
                  <img
                    class="back"
                    :src="`/img/brushes/service${dark ? '/dark' : ''}/1.png`"
                    alt=""
                  />
                </span>
                <div class="title">
                  <h3>Custom PHP Application Development</h3>
                  <span class="price">Starts from <span>$99</span></span>
                </div>
                <div class="text">
                  <p>
                    Crafting tailored PHP solutions, including web applications, CMS, and e-commerce platforms, to meet the unique needs of businesses. These applications are designed for performance, security, and scalability
                  </p>
                </div>
                <a class="dizme_tm_full_link" href="#"></a>
                <img
                  class="popup_service_image"
                  src="/img/service/1.jpg"
                  alt=""
                />
              </div>
            </li>
            <li
              class="wow fadeInRight"
              data-wow-duration="1s"
              data-wow-delay="0.2s"
              @click.prevent="active = 2"
            >
              <div class="list_inner tilt-effect">
                <span class="icon">
                  <img class="svg" src="/img/svg/service/physics.svg" alt="" />
                  <img
                    class="back"
                    :src="`/img/brushes/service${dark ? '/dark' : ''}/2.png`"
                    alt=""
                  />
                </span>
                <div class="title">
                  <h3>Payment Gateway Integration</h3>
                  <span class="price">Starts from <span>$99</span></span>  
                </div>
                <div class="text">
                  <p>
                    Seamlessly integrating secure payment solutions into websites and applications. This service includes setting up payment gateways, subscription models, and ensuring compliance with payment industry standards for smooth transactions.
                  </p>
                </div>
                <a class="dizme_tm_full_link" href="#"></a>
                <img
                  class="popup_service_image"
                  src="/img/service/2.jpg"
                  alt=""
                />
                <div class="service_hidden_details">
                  <div class="service_popup_informations">
                    <div class="descriptions">
                      <p>
                        Dizme is a leading web design agency with an
                        award-winning design team that creates innovative,
                        effective websites that capture your brand, improve your
                        conversion rates, and maximize your revenue to help grow
                        your business and achieve your goals.
                      </p>
                      <p>
                        In today’s digital world, your website is the first
                        interaction consumers have with your business. That's
                        why almost 95 percent of a user’s first impression
                        relates to web design. It’s also why web design services
                        can have an immense impact on your company’s bottom
                        line.
                      </p>
                      <p>
                        That’s why more companies are not only reevaluating
                        their website’s design but also partnering with Kura,
                        the web design agency that’s driven more than $2.4
                        billion in revenue for its clients. With over 50 web
                        design awards under our belt, we're confident we can
                        design a custom website that drives sales for your
                        unique business.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li
              class="wow fadeInLeft"
              data-wow-duration="1s"
              @click.prevent="active = 3"
            >
              <div class="list_inner tilt-effect">
                <span class="icon">
                  <img class="svg" src="/img/svg/service/contact.svg" alt="" />
                  <img
                    class="back"
                    :src="`/img/brushes/service${dark ? '/dark' : ''}/3.png`"
                    alt=""
                  />
                </span>
                <div class="title">
                  <h3>Software Development & Optimization</h3>
                  <span class="price">Starts from <span>$99</span></span>
                </div>
                <div class="text">
                  <p>
                    From concept to deployment, providing comprehensive software development services. This includes building new software products or optimizing existing ones to improve efficiency, performance, and user experience.
                  </p>
                </div>
                <a class="dizme_tm_full_link" href="#"></a>
                <img
                  class="popup_service_image"
                  src="/img/service/3.jpg"
                  alt=""
                />
                <div class="service_hidden_details">
                  <div class="service_popup_informations">
                    <div class="descriptions">
                      <p>
                        Dizme is a leading web design agency with an
                        award-winning design team that creates innovative,
                        effective websites that capture your brand, improve your
                        conversion rates, and maximize your revenue to help grow
                        your business and achieve your goals.
                      </p>
                      <p>
                        In today’s digital world, your website is the first
                        interaction consumers have with your business. That's
                        why almost 95 percent of a user’s first impression
                        relates to web design. It’s also why web design services
                        can have an immense impact on your company’s bottom
                        line.
                      </p>
                      <p>
                        That’s why more companies are not only reevaluating
                        their website’s design but also partnering with Kura,
                        the web design agency that’s driven more than $2.4
                        billion in revenue for its clients. With over 50 web
                        design awards under our belt, we're confident we can
                        design a custom website that drives sales for your
                        unique business.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li
              class="wow fadeInRight"
              data-wow-duration="1s"
              data-wow-delay="0.2s"
              @click.prevent="active = 4"
            >
              <div class="list_inner tilt-effect">
                <span class="icon">
                  <img class="svg" src="/img/svg/service/web.svg" alt="" />
                  <img
                    class="back"
                    :src="`/img/brushes/service${dark ? '/dark' : ''}/4.png`"
                    alt=""
                  />
                </span>
                <div class="title">
                  <h3>Technical Consultation & Project Planning</h3>
                  <span class="price">Starts from <span>$99</span></span>
                </div>
                <div class="text">
                  <p>
                    Offering expert insights and guidance on technical matters, software architecture, and project planning. Collaborating with clients to define strategies, select the right technologies, and ensure successful project execution.
                  </p>
                </div>
                <a class="dizme_tm_full_link" href="#"></a>
                <img
                  class="popup_service_image"
                  src="/img/service/4.jpg"
                  alt=""
                />
                <div class="service_hidden_details">
                  <div class="service_popup_informations">
                    <div class="descriptions">
                      <p>
                        Dizme is a leading web design agency with an
                        award-winning design team that creates innovative,
                        effective websites that capture your brand, improve your
                        conversion rates, and maximize your revenue to help grow
                        your business and achieve your goals.
                      </p>
                      <p>
                        In today’s digital world, your website is the first
                        interaction consumers have with your business. That's
                        why almost 95 percent of a user’s first impression
                        relates to web design. It’s also why web design services
                        can have an immense impact on your company’s bottom
                        line.
                      </p>
                      <p>
                        That’s why more companies are not only reevaluating
                        their website’s design but also partnering with Kura,
                        the web design agency that’s driven more than $2.4
                        billion in revenue for its clients. With over 50 web
                        design awards under our belt, we're confident we can
                        design a custom website that drives sales for your
                        unique business.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="brush_1 wow fadeInLeft" data-wow-duration="1s">
        <img src="/img/brushes/service/5.png" alt="" />
      </div>
      <div class="brush_2 wow zoomIn" data-wow-duration="1s">
        <img src="/img/brushes/service/6.png" alt="" />
      </div>
    </div>
  </div>
  <div :class="active == 1 ? '' : 'service_hidden_details'">
    <ModalBox :close="close">
      <div class="service_popup_informations">
        <div class="image">
          <img src="img/thumbs/4-2.jpg" alt="" />
          <div
            class="main"
            data-img-url="img/service/1.jpg"
            style="background-image: url('img/service/1.jpg')"
          ></div>
        </div>
        <div class="main_title">
          <h3>Custom PHP Application Development</h3>
          <span class="price">Starts from <span>$99</span></span>
        </div>
        <div class="descriptions">
          <p>
            I am an experienced Senior Software Engineer specializing in Custom PHP Application Development. One of my notable achievements in <b> Laravel</b> development includes implementing a Subscription flow for a finance Customer Relationship Management (CRM) system. This project was completed during my tenure at Techloyce organization.
          </p>
          <p>
            In my role at Techloyce, I successfully architected and built this Subscription flow, ensuring that it seamlessly integrated into the finance CRM, providing a smooth and reliable user experience.          </p>
          <p>
            My extensive experience with <b> Symfony</b> spans more than 5 years, covering various versions from 3.4 to 5.2. I contributed significantly to projects while working at Coeus Solution and 4-art Technologies. In addition to my Symfony work, I also ventured into Image processing using Python and spearheaded API development in Symfony. This allowed me to create robust and efficient APIs to support complex business processes.
          </p>
          <p>
            Furthermore, I was part of the development team at Jeeny, a popular Middle East mobile ride-hailing application. During my tenure there, I worked with the<b> Slim framework </b>, particularly Slim 4. I was tasked with optimizing the application structure to handle a high volume of daily requests, ensuring the delivery of fast and reliable APIs.
          </p>
          <p>
            My portfolio reflects my dedication to delivering quality and efficient solutions using PHP and these prominent frameworks. I'm enthusiastic about contributing my expertise to your next project.
          </p>
        </div>
      </div>
    </ModalBox>
  </div>
  <div :class="active == 2 ? '' : 'service_hidden_details'">
    <ModalBox :close="close">
      <div class="service_popup_informations">
        <div class="image">
          <img src="img/thumbs/4-2.jpg" alt="" />
          <div
            class="main"
            data-img-url="img/service/2.jpg"
            style="background-image: url('img/service/2.jpg')"
          ></div>
        </div>
        <div class="main_title">
          <h3>Payment Gateway Integration</h3>
          <span class="price">Starts from <span>$199</span></span>
        </div>
        <div class="descriptions">
          <p>
            Expertise to Integrate Payment solutions into web applications and e-commerce platforms. With a deep understanding of payment gateways, such as <b>PayPal, Square, Stripe, Braintree, Adyen, GoCardless , Authorize.net, Razorpay, 2Checkout, CCAvenue, BillDesk, MaxiCash, Verifone and many more.</b>  
            </p>
            <p>
            I can effectively handle payment transactions, implement secure tokenization methods, and ensure compliance with industry standards like PCI-DSS. I am experienced in integrating various payment methods, including credit cards, digital wallets, and bank transfers, catering to diverse customer preferences. Through thorough API documentation comprehension and utilization of SDKs provided by payment gateway providers, I can effortlessly incorporate secure payment functionalities into applications.
          </p>
          <p>
            Additionally, I prioritize user experience by creating smooth and secure payment flows, incorporating features like recurring payments and effectively managing failed transactions. My continuous learning mindset allows me to stay updated with the latest payment technologies, ensuring that I deliver robust and reliable payment integration solutions that meet the evolving needs of clients.
          </p>
        </div>
      </div>
    </ModalBox>
  </div>
  <div :class="active == 3 ? '' : 'service_hidden_details'">
    <ModalBox :close="close">
      <div class="service_popup_informations">
        <div class="image">
          <img src="img/thumbs/4-2.jpg" alt="" />
          <div
            class="main"
            data-img-url="img/service/3.jpg"
            style="background-image: url('img/service/3.jpg')"
          ></div>
        </div>
        <div class="main_title">
          <h3>Software Development & Optimization</h3>
          <span class="price">Starts from <span>$99</span></span>
        </div>
        <div class="descriptions">
          <p>
            Throughout my career in software development, I've consistently demonstrated a strong commitment to optimization and efficiency. One of the standout examples of my optimization work was during my tenure with the EKomi project. The project encountered server timeouts and memory exhaustion issues due to the immense task of importing millions of records on a daily basis. I took on the challenge of optimizing the importer, which played a critical role in this process. I initiated an ongoing optimization process, reengineering the import mechanism from JSON to CSV. This transformation allowed for more efficient data processing. I implemented CSV streaming, which divided the records into manageable chunks, processing 1000 lines at a time. If the data size exceeded 100MB, I further subdivided it into 50MB portions, ensuring that server performance remained stable. This solution not only resolved the server issues but also significantly improved the import process's speed and reliability.
          </p>
          <p>
            In addition to server-side optimizations, I possess the expertise to optimize WordPress websites. My skills in this area were exemplified during my collaboration with a US-based graphic agency, Creative Repute. Their requirement for pixel-perfect work didn't deter me; instead, I embraced the challenge and optimized WordPress websites to achieve Google PageSpeed Insight scores consistently above 90. This achievement not only showcased my commitment to delivering high-performance websites but also my ability to meet demanding quality standards, ensuring a seamless user experience. My passion for optimization and my knack for finding effective solutions have been integral to my success in software development
          </p>
        </div>
      </div>
    </ModalBox>
  </div>
  <div :class="active == 4 ? '' : 'service_hidden_details'">
    <ModalBox :close="close">
      <div class="service_popup_informations">
        <div class="image">
          <img src="img/thumbs/4-2.jpg" alt="" />
          <div
            class="main"
            data-img-url="img/service/4.jpg"
            style="background-image: url('img/service/4.jpg')"
          ></div>
        </div>
        <div class="main_title">
          <h3>Technical Consultation & Project Planning</h3>
          <span class="price">Starts from <span>$99</span></span>
        </div>
        <div class="descriptions">
          <p>
          As a seasoned professional in the field of project management, I take pride in my ability to steer projects towards successful outcomes. Over the course of my career, I have consistently demonstrated my expertise in project management, overseeing a wide array of initiatives across diverse industries. My approach is characterized by meticulous planning, meticulous execution, and effective team collaboration. I firmly believe in the power of setting clear project goals, defining realistic timelines, and allocating resources strategically to ensure that each project is executed seamlessly.
        </p>
        <p>
          During my tenure at 4-art Technologies, I played a pivotal role in technical consultation and project planning. Leveraging my experience, I adeptly managed project planning using a variety of industry-standard tools. This included utilizing JIRA for agile project management, Trello for visual task organization, Asana for comprehensive project tracking, Microsoft Project for detailed project scheduling, Smartsheet for collaborative project planning, and Wrike for versatile project management. I meticulously organized and strategized each project, ensuring that every aspect was well-prepared and streamlined for success.
          </p>
          <p> My commitment to effective project planning encompassed defining goals, setting timelines, and allocating resources optimally. I also provided valuable technical consultation to address challenges and optimize processes. This comprehensive approach ensured that projects were not only well-executed but also aligned with organizational objectives
        </p>
        <p>
          My unwavering commitment to delivering results has earned the trust of numerous clients and partners, making me a dependable choice for your project management needs. I look forward to the opportunity of bringing my expertise to your projects, ensuring their success from inception to completion.
        </p>
        </div>
      </div>
    </ModalBox>
  </div>
</template>

<script>
import ModalBox from "./popup/ModalBox.vue";
export default {
  name: "ServiceCompoent",
  data() {
    return {
      active: 0,
    };
  },
  mounted() {
    let VanillaTilt = require("vanilla-tilt");
    VanillaTilt.init(document.querySelectorAll(".tilt-effect"), {
      maxTilt: 6,
      easing: "cubic-bezier(.03,.98,.52,.99)",
      speed: 500,
      transition: true,
    });
  },
  methods: {
    close() {
      this.active = 0;
    },
  },
  components: { ModalBox },
  props: {
    dark: { type: Boolean },
  },
};
</script>
