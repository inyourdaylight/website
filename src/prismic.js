
import App from "./App.vue";
import ErrorPage from "./ErrorPage.vue";
import Page from "./Page.vue";
export default new class Prismic {
    constructor() {
        this.routes = [
            {
              path: "/",
              name: 'App',
              component: App,
            },
            {
              path: "/404",
              component: ErrorPage,
            },
            // {
            //   path: "/who-we-are",
            //   component: Page,
            //   slices: [
            //     {
            //       component: 'FullsizeImage',
            //       data: {
            //         image: require("./assets/team-photo-sample.jpeg"),
            //         cover: true
            //       }
            //     },
            //     {
            //       component: 'TextAndImage',
            //       data: {
            //         orientation: "text-on-right",
            //         textalign: "text-align-left",
            //         title: "Not Your Ordinary Creative Team",
            //         text: "at. Duis autem vel eum iriure dolor in hendrerit in vulputate vell eum iriure dolor in hendrerit in vulputate vell eum iriure dolor in hendrerit in vulputate vell eum iriure dolor in hendrerit in vulputate vell eum iriure dolor in hendrerit in vulputate vell eum iriure dolor in hendrerit in vulputate vell ",
            //         image: require("./assets/team-photo-sample.jpeg")
            //       }
            //     }
            //   ]
            // },
            {
              path: "/cdap-application",
              component: Page,
              slices: [
                {
                  component: 'CDAPApplication'
                },
                {
                  component: 'FloatingCard',
                  data: {
                    title: "Canadian Digital Adoption Plan",
                    text: `
                    <p>CDAP or CDAP Canada is a Canada CDAP program to help small and medium sized businesses in Canada to adopt new digital technology and digital operating systems.</p>
                    <p>Once you pass CDAP eligibility for the CDAP Canada (CDAP Stream 2), you will have access to CDAPs Digital Advisor Marketplace that shows CDAP digital advisor list. Considering the advisor’s identity and features, you select the right CDAP digital advisor to create a digital adoption plan together.</p>
                    
                    <p>After submitting the required documents, you get an approval from the CDAP team. And you will have access to apply for a CDAP grant also known as BDC CDAP.</p>
                   
                    <p>BDC is the Business Development bank of Canada who will guide you to receive the CDAP grant. BDC CDAP and CDAP Canada are the same CDAP program.</p>
                    
                    <p>CDAP application starts from the CDAP login site and Digital Needs Assessment known as DNA.</p>`,
                    cta_buttons: [
                      {
                        text: "Read More on CDAP",
                        link: "./cdap"
                      }
                    ]
                  }
                },
              ]
            },
            {
              path: "/contact",
              component: Page,
              slices: [
                {
                  component: 'ContactForm'
                },
              ]
            },
            {
              path: "/cdap",
              component: Page,
              slices: [
                {
                  component: 'TextComponent',
                  data: {
                    title: "Canadian Digital Adoption Plan",
                    subtitle: "CDAP or CDAP Canada is a Canada CDAP program to help small and medium sized businesses in Canada to adopt new digital technology and digital operating systems.",
                    text: `<ol>
                    <li><p>Canadian SMEs access the Stream assessment tool on CDAP website</p></li>
                    <li><p>Eligible SMEs are directed to Stream 2</p></li>
                    <li><p>SMEs use the Digital Needs Assessment (DNA) tool to assess their digital maturity</p></li>
                    <li><p>SMEs accepted into Stream 2 are provided access to CDAP's Digital Advisor Marketplace to find a Digital Advisor to work with</p></li>
                    <li><p>SME (Small and Medium-sized Enterprises) and Digital Advisor agree on cost and scope of digital adoption plan SME submits their completed digital plan to CDAP and then requests a grant to cover up to 90% (max $15,000) of the cost of the plan</p></li>
                    <li><p>With a digital adoption plan in hand, SMEs can apply to BDC for an interest-free loan of up to $100,000 depending on their business size and tax credit history, to help execute their plan</p></li>
                    <li><p>SMEs who participate in Stream 2 will be eligible for a youth placement wage subsidy to help them implement their plans</p></li>
                    <li><p>SMEs will be asked to provide feedback on their program experience and share how it helped their business</p></li>
                    </ol>`,
                    columns: 2,
                    textalign: "text-align-left",
                    cta_buttons: [
                      {
                        text: "Apply to CDAP Today!",
                        link: "./cdap-application"
                      }
                    ]
                  }
                },
                {
                  component: 'FloatingCard',
                  data: {
                    title: "More about CDAP Canada",
                    text: `<p>Once you pass CDAP eligibility for the CDAP Canada (CDAP Stream 2), you will have access to CDAPs Digital Advisor Marketplace that shows CDAP digital advisor list. Considering the advisor’s identity and features, you select the right CDAP digital advisor to create a digital adoption plan together.</p>
                    
                    <p>After submitting the required documents, you get an approval from the CDAP team. And you will have access to apply for a CDAP grant also known as BDC CDAP.</p>
                   
                    <p>BDC is the Business Development bank of Canada who will guide you to receive the CDAP grant. BDC CDAP and CDAP Canada are the same CDAP program.</p>
                    
                    <p>CDAP application starts from the CDAP login site and Digital Needs Assessment known as DNA.</p>`
                  }
                },
                {
                  component: 'TextAndImage',
                  data: {
                    orientation: "text-on-right",
                    textalign: "text-align-left",
                    title: "Any Questions?",
                    text: `
                      <p>Call us at <a href="tel:6473587767">+1 647-358-7767</a>.</p>

                      <p>Our CDAP Specialist or CDAP Digital Advisor is ready to help you, or</p>

                      <p> Feel free to shoot an email to <a href="mailto:info@inyourdaylight.com">info@inyourdaylight.com</a>.</p>
                      <p>You will receive our response within 5 hours</p>
                    `,
                    image: require("./assets/CDAP-image.png")
                  }
                },
              ],
              bg: "dark"
            },
            {
              path: "/blog",
              component: Page,
              slices: [
                {
                  component: 'TextComponent',
                  data: {
                    title: "Blog",
                    subtitle: "Read up on some of our latest our blog posts!",
                    text: ``,
                    columns: 1,
                    textalign: "text-align-center",
                  }
                },
                {
                  component: 'TextAndImage',
                  data: {
                    orientation: "text-on-right",
                    textalign: "text-align-left",
                    title: "title",
                    text: "at. Duis autem vel eum iriure dolor in hendrerit in vulputate vell eum iriure dolor in hendrerit in vulputate vell eum iriure dolor in hendrerit in vulputate vell eum iriure dolor in hendrerit in vulputate vell eum iriure dolor in hendrerit in vulputate vell eum iriure dolor in hendrerit in vulputate vell ",
                    image: require("./assets/Illustration-sample.png")
                  }
                },
                {
                  component: 'TextAndImage',
                  data: {
                    orientation: "text-on-left",
                    textalign: "text-align-right",
                    title: "title",
                    text: "at. Duis autem vel eum iriure dolor in hendrerit in vulputate vell eum iriure dolor in hendrerit in vulputate vell eum iriure dolor in hendrerit in vulputate vell eum iriure dolor in hendrerit in vulputate vell eum iriure dolor in hendrerit in vulputate vell eum iriure dolor in hendrerit in vulputate vell ",
                    image: require("./assets/Illustration-sample.png")
                  }
                },
                {
                  component: 'TextAndImage',
                  data: {
                    orientation: "text-on-right",
                    textalign: "text-align-left",
                    title: "title",
                    text: "at. Duis autem vel eum iriure dolor in hendrerit in vulputate vell eum iriure dolor in hendrerit in vulputate vell eum iriure dolor in hendrerit in vulputate vell eum iriure dolor in hendrerit in vulputate vell eum iriure dolor in hendrerit in vulputate vell eum iriure dolor in hendrerit in vulputate vell ",
                    image: require("./assets/Illustration-sample.png")
                  }
                },
              ],
              bg: "dark"
            },
            {
              path: "/our-services",
              component: Page,
              slices: [
                {
                  component: 'TextComponent',
                  data: {
                    title: "Our Services",
                    subtitle: "Our team of expert creators are always learning, creating, and growing.",
                    text: ``,
                    columns: 1,
                    textalign: "text-align-center",
                  }
                },
                {
                  component: 'TextAndImage',
                  data: {
                    orientation: "text-on-right",
                    textalign: "text-align-left",
                    title: "title",
                    text: "at. Duis autem vel eum iriure dolor in hendrerit in vulputate vell eum iriure dolor in hendrerit in vulputate vell eum iriure dolor in hendrerit in vulputate vell eum iriure dolor in hendrerit in vulputate vell eum iriure dolor in hendrerit in vulputate vell eum iriure dolor in hendrerit in vulputate vell ",
                    image: require("./assets/Illustration-sample.png")
                  }
                },
                {
                  component: 'TextAndImage',
                  data: {
                    orientation: "text-on-left",
                    textalign: "text-align-right",
                    title: "title",
                    text: "at. Duis autem vel eum iriure dolor in hendrerit in vulputate vell eum iriure dolor in hendrerit in vulputate vell eum iriure dolor in hendrerit in vulputate vell eum iriure dolor in hendrerit in vulputate vell eum iriure dolor in hendrerit in vulputate vell eum iriure dolor in hendrerit in vulputate vell ",
                    image: require("./assets/Illustration-sample.png")
                  }
                },
                {
                  component: 'TextAndImage',
                  data: {
                    orientation: "text-on-right",
                    textalign: "text-align-left",
                    title: "title",
                    text: "at. Duis autem vel eum iriure dolor in hendrerit in vulputate vell eum iriure dolor in hendrerit in vulputate vell eum iriure dolor in hendrerit in vulputate vell eum iriure dolor in hendrerit in vulputate vell eum iriure dolor in hendrerit in vulputate vell eum iriure dolor in hendrerit in vulputate vell ",
                    image: require("./assets/Illustration-sample.png")
                  }
                },
              ],
              bg: "dark"
            },
            {
              path: "/:catchAll(.*)",
              component: ErrorPage,
            }
          ];
          this.nav = [
            {
                text: "Home",
                link: './'
            },
            // {
            //     text: "Who we are",
            //     link: "./who-we-are"
            // },
            {
                text: "CDAP",
                link: "./cdap"
            },
            {
              text: "CDAP Application",
              link: "./cdap-application"
            },
            {
                text: "Our services",
                link: './our-services',
                submenu: [
                  {
                    text: "sub menu item",
                    link: "./cdap"
                  },
                  {
                    text: "sub menu item 2",
                    link: "./cdap"
                  }
                ]
            },
            {
              text: "Blog",
              link: "./blog"
          },
            {
                text: "contact",
                link: './contact'
            },
        ],
        this.socialnav = [
          {
            text: "Instagram",
            link: ""
          },
          {
            text: "Twitter",
            link: ""
          },
          {
            text: "Linkeidn",
            link: ""
          },
          {
            text: "Facebook",
            link: ""
          }
        ]
    }
}