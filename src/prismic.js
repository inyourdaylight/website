
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
              component: ErrorPage
            },
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
                        link: "/cdap"
                      }
                    ]
                  }
                },
              ]
            },
            {
              path: "/contact-us",
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
                    title: "Canadian <br/>Digital <br/>Adoption <br/>Plan",
                    subtitle: "CDAP or CDAP Canada is a Canada CDAP program to help small and medium sized businesses in Canada to adopt new digital technology and digital operating systems.",
                    text: 
                    `<ol>
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
                        link: "/cdap-application"
                      }
                    ]
                  }
                },
                {
                  component: 'FloatingCard',
                  data: {
                    title: "More about CDAP Canada",
                    text: `<p>Once you pass CDAP eligibility for the CDAP Canada (CDAP Stream 2), you will have access to CDAPs Digital Advisor Marketplace that shows CDAP digital advisor list. Considering the advisor’s identity and features, you select the right CDAP digital advisor to create a digital adoption plan together.</p>
                    
                    <p>After submitting the required documents, you get an approval from the CDAP team. And you will have access to apply for a CDAP grant also known as BDC CDAP.</p>`
                  }
                },
                {
                  component: 'TextAndImage',
                  data: {
                    orientation: "text-on-left",
                    textalign: "text-align-left",
                    // title: "Any Questions?",
                    text: `
                    <p>BDC is the Business Development bank of Canada who will guide you to receive the CDAP grant. BDC CDAP and CDAP Canada are the same CDAP program.</p>
                    
                    <p>CDAP application starts from the CDAP login site and Digital Needs Assessment known as DNA.</p>
                    `,
                    image: require("./assets/BDC Zero Interest Loan.webp")
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
              // children: [
              //   {
              //     path: "nice",
              //     component: Page,
              //     slices: [
              //       {
              //         component: 'TextComponent',
              //         data: {
              //           title: "Blog",
              //           subtitle: "Read up on some of our latest our blog posts!",
              //           text: ``,
              //           columns: 1,
              //           textalign: "text-align-center",
              //         }
              //       },
              //     ]
              //   }
              // ],
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
                // {
                //   component: 'TextAndImage',
                //   data: {
                //     orientation: "text-on-left",
                //     textalign: "text-align-right",
                //     title: "Digital marketing vs traditional marketing.",
                //     text: "Highly effective way to reach customers",
                //     image: require("./assets/Illustration-sample.png"),
                //     date: "AUG 01, 2021",
                //     cta_buttons: [
                //       {
                //         text: "Read More",
                //         link: "/blog/digital-vs-traditional-marketing"
                //       }
                //     ]
                //   }
                // },
                // {
                //   component: 'TextAndImage',
                //   data: {
                //     orientation: "text-on-right",
                //     textalign: "text-align-left",
                //     title: "How much will it cost me to advertise on social media?",
                //     text: `Much cheaper than traditional advertising`,
                //     image: require("./assets/Illustration-sample.png"),
                //     date: "JUL 01, 2021",
                //     cta_buttons: [
                //       {
                //         text: "Read More",
                //         link: "/blog/advertising-on-social-media"
                //       }
                //     ]
                //   }
                // },
                // {
                //   component: 'TextAndImage',
                //   data: {
                //     orientation: "text-on-left",
                //     textalign: "text-align-right",
                //     title: "The advantages of digital marketing.",
                //     text: "Powerful tool for small and medium sized businesses",
                //     image: require("./assets/Illustration-sample.png"),
                //     date: "JUN 01, 2021",
                //     cta_buttons: [
                //       {
                //         text: "Read More",
                //         link: "/blog/the-advantages-of-digital-marketing"
                //       }
                //     ]
                //   }
                // },
                // {
                //   component: 'TextAndImage',
                //   data: {
                //     orientation: "text-on-right",
                //     textalign: "text-align-left",
                //     title: "Why does digital marketing matter?",
                //     text: `You're probably thinking to yourself, "Why should I care?"`,
                //     image: require("./assets/Illustration-sample.png"),
                //     date: "MAY 01, 2021",
                //     cta_buttons: [
                //       {
                //         text: "Read More",
                //         link: "/blog/why-digital-marketing-matters"
                //       }
                //     ]
                //   }
                // },
                // {
                //   component: 'TextAndImage',
                //   data: {
                //     orientation: "text-on-left",
                //     textalign: "text-align-right",
                //     title: "What is digital marketing?",
                //     text: "Communicate with customers.",
                //     image: require("./assets/Illustration-sample.png"),
                //     date: "APR 01, 2021",
                //     cta_buttons: [
                //       {
                //         text: "Read More",
                //         link: "/blog/what-is-digital-marketing"
                //       }
                //     ]
                //   }
                // },
                // {
                //   component: 'TextAndImage',
                //   data: {
                //     orientation: "text-on-right",
                //     textalign: "text-align-left",
                //     title: "A clear vision and marketing plan can help drive growth in your business",
                //     text: "A clear vision and marketing plan can help drive growth in your business.",
                //     image: require("./assets/Illustration-sample.png"),
                //     date: "MAR 01, 2021",
                //     cta_buttons: [
                //       {
                //         text: "Read More",
                //         link: "/blog/clear-vision-marketing-plan"
                //       }
                //     ]
                //   }
                // },
                // {
                //   component: 'TextAndImage',
                //   data: {
                //     orientation: "text-on-left",
                //     textalign: "text-align-right",
                //     title: "Develop content for your site and social media channels.",
                //     text: "Content is the most important part of your marketing strategy.",
                //     image: require("./assets/Illustration-sample.png"),
                //     date: "FEB 01, 2021",
                //     cta_buttons: [
                //       {
                //         text: "Read More",
                //         link: "/blog/social-media-channels"
                //       }
                //     ]
                //   }
                // },
                {
                  component: 'TextAndImage',
                  data: {
                    orientation: "text-on-right",
                    textalign: "text-align-left",
                    title: "Implement a marketing strategy.",
                    text: "What are 4Ps?",
                    image: require("./assets/marketing-strategy.png"),
                    date: "JAN 01, 2021",
                    cta_buttons: [
                      {
                        text: "Read More",
                        link: "/blog/implement-a-marketing-strategy"
                      }
                    ]
                  }
                },
                {
                  component: 'TextAndImage',
                  data: {
                    orientation: "text-on-left",
                    textalign: "text-align-right",
                    title: "Create an effective sales funnel.",
                    text: "Use analytics to monitor progress and adjust course as needed.",
                    image: require("./assets/sales-funnel.png"),
                    date: "DEC 01, 2020",
                    cta_buttons: [
                      {
                        text: "Read More",
                        link: "/blog/create-effective-sales-funnel"
                      }
                    ]
                  }
                },
                {
                  component: 'TextAndImage',
                  data: {
                    orientation: "text-on-right",
                    textalign: "text-align-left",
                    title: "Clear growth strategy for the future",
                    text: "understanding of your customers and the market you serve",
                    image: require("./assets/goals.png"),
                    date: "NOV 01, 2020",
                    cta_buttons: [
                      {
                        text: "Read More",
                        link: "/blog/clear-growth-strategy"
                      }
                    ]
                  }
                },
              ],
              bg: "dark"
            },
            //------ BLOGS ---------
           
            {
              path: "/blog/social-media-channels",
              component: Page,
              slices: [
                {
                  component: 'TextComponent',
                  data: {
                    title: "Create an effective sales funnel.",
                    subtitle: "Use analytics to monitor progress and adjust course as needed.",
                    date: 'DEC 01, 2020',
                    columns: 1,
                    textalign: "text-align-left",
                  }
                },
                {
                  component: 'TextAlone',
                  data: {
                    text: `<p>
                    Create an effective sales funnel. The most important part of your business is the process that takes customers from being interested in your product or service, to buying it. This can be done through various methods such as lead generation and lead nurturing, but ultimately ends with a conversion rate--the number of leads who become paying customers for example.
                    </p>
                    <p>Define your target market and customer needs. Once you know who you're selling to (your target market), it's important to understand their needs so that you can tailor products accordingly and give them what they want rather than just selling them something random just because it exists! It's also useful for creating marketing strategies; if someone's looking for specific information about how something works then make sure this info is available on all platforms where potential buyers will see it!
                    </p>
                    <p>Use analytics to monitor progress and adjust course as needed. If you're tracking a goal, such as increasing sales or growing your email list, use analytics to track and measure your progress. If you see that something isn't working (or is working too well), make adjustments for the future.
                    </p>
                    <p>Analytics can also help identify areas for improvement in your marketing efforts so that you can set goals for the future based on real data instead of assumptions or guesses at what might work best given limited information about what has worked in the past or what competitors are doing now--and then measure whether those efforts were successful after they've been implemented!
                    </p>`,
                  }
                }
              ]
            },
            {
              path: "/blog/create-effective-sales-funnel",
              component: Page,
              slices: [
                {
                  component: 'TextComponent',
                  data: {
                    title: "Create an effective sales funnel.",
                    subtitle: "Use analytics to monitor progress and adjust course as needed.",
                    date: 'DEC 01, 2020',
                    columns: 1,
                    textalign: "text-align-left",
                  }
                },
                {
                  component: 'TextAlone',
                  data: {
                    text: `<p>
                    Create an effective sales funnel. The most important part of your business is the process that takes customers from being interested in your product or service, to buying it. This can be done through various methods such as lead generation and lead nurturing, but ultimately ends with a conversion rate--the number of leads who become paying customers for example.
                    </p>
                    <p>Define your target market and customer needs. Once you know who you're selling to (your target market), it's important to understand their needs so that you can tailor products accordingly and give them what they want rather than just selling them something random just because it exists! It's also useful for creating marketing strategies; if someone's looking for specific information about how something works then make sure this info is available on all platforms where potential buyers will see it!
                    </p>
                    <p>Use analytics to monitor progress and adjust course as needed. If you're tracking a goal, such as increasing sales or growing your email list, use analytics to track and measure your progress. If you see that something isn't working (or is working too well), make adjustments for the future.
                    </p>
                    <p>Analytics can also help identify areas for improvement in your marketing efforts so that you can set goals for the future based on real data instead of assumptions or guesses at what might work best given limited information about what has worked in the past or what competitors are doing now--and then measure whether those efforts were successful after they've been implemented!
                    </p>`,
                  }
                }
              ]
            },
            {
              path: "/blog/clear-growth-strategy",
              component: Page,
              slices: [
                {
                  component: 'TextComponent',
                  data: {
                    title: "Clear growth strategy for the future",
                    subtitle: "understanding of your customers and the market you serve",
                    date: 'AUG 01, 2021',
                    columns: 1,
                    textalign: "text-align-left",
                  }
                },
                {
                  component: 'TextAlone',
                  data: {
                    text: `<p>Understanding your customers and the market you serve is crucial to delivering the best possible service, which in turn helps you retain them. As a business owner, it's important to know who your target audience is and what they need from you. You can then use this information when creating marketing plans or developing products or services that will appeal directly to them.
                    </p>
                    <p>Understanding your customers' needs will help ensure that they continue interacting with your brand in positive ways (like buying products). If there are any issues with how things are currently being done at work or home, understanding why people behave in certain ways can help us improve our relationships with those around us while also improving productivity within organizations overall.</p>
                    <p>We are sharing how you analyze your business development process</p>
                    <ul>
                      <li>Identify your goals.</li>
                      <li>Define your customer's needs.</li>
                      <li>Define your product or service.</li>
                      <li>Target market: who is the ideal customer for this product/service? What are their demographics? What do they care about, and how can we help them solve their problems in a way that benefits our company too (and vice versa)?</li>
                      <li>Messaging: what is the key benefit we want to communicate about our offering in order to build trust with prospects and drive sales conversions down the funnel?</li>
                      <li>Marketing budget: how much money should I spend on marketing activities throughout the year so that my business grows steadily over time without having any significant dips or spikes in revenue from month-to-month growth rates being skewed by seasonal fluctuations due to weather conditions affecting consumer behavior patterns during certain times of year like summertime when people tend not go out as much because it's hot outside so there's less demand for entertainment options such as going out shopping or dining at restaurants etcetera.</li>
                    </ul>`,
                  }
                }
              ]
            },
            {
              path: "/blog/implement-a-marketing-strategy",
              component: Page,
              slices: [
                {
                  component: 'TextComponent',
                  data: {
                    title: "Implement a marketing strategy.",
                    subtitle: "What are 4Ps?",
                    date: 'JAN 01, 2021',
                    columns: 1,
                    textalign: "text-align-left",
                  }
                },
                {
                  component: 'TextAlone',
                  data: {
                    text: `<p>
                    Marketing is not just advertising. It's a process that involves the planning, implementation and control of the strategy, policies and activities of an organization to achieve its goals.
                    </p>
                    <p>Marketing can be broken down into four main areas:
                    </p>
                   <ul>
                   <li>Product - this includes developing new products or services based on customer needs, ensuring that these are available at the right time in the right place (retailers like Amazon use this approach).
                   </li>
                   <li>
                   Pricing - deciding how much you want to charge for your product or service; this may involve considering costs such as materials used plus labour costs if applicable (eBay does this).
                   </li>
                   <li>
                   Promotion - deciding how best to communicate about your product/service so customers know about them (online retailers such as eBay do this).
                   </li>
                   <li>
                   Place/Distribution - deciding where exactly in which locations should stock be placed so it reaches customers easily?
                   </li>
                   </ul>
                   <p>Analyze the 4Ps of your business above and let us know what your concerns are.</p>
                   <p><a href="mailto:info@inyourdaylight.com">info@inyourdaylight.com</a></p>`,
                  }
                }
              ]
            },
            //------ BLOGS END---------
            {
              path: "/services",
              component: Page,
              slices: [
                {
                  component: 'TextComponent',
                  data: {
                    title: "Services",
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
                    title: "Digital Advisory Services & Implementation",
                    text: "Digital Advisory Services and Implementation range from helping clients select new platforms, to implementing them into the business, to optimizing the system they currently use.",
                    image: require("./assets/1.png"),
                    // cta_buttons: [
                    //   {
                    //     text: "sadas",
                    //     link: "dd"
                    //   }
                    // ]
                  }
                },
                {
                  component: 'TextAndImage',
                  data: {
                    orientation: "text-on-left",
                    textalign: "text-align-left",
                    title: "Cyber Security Enhancement",
                    text: `<p>Cyber security has become a necessity for businesses of all sizes as their systems and networks containing sensitive and valuable data. Without a cyber security strategy, your business cannot defend itself from cyber threats leaving it vulnerable to malicious actors, who will identify your business as an easy target.</p>
                    <p>Cyber strategies should take into account:</p>
                    <ul>
                      <li>Infrastructure security</li>
                      <li>Network security</li>
                      <li>Application security</li>
                      <li>Information security</li>
                      <li>Cloud security</li>
                      <li>Employee security training and awareness</li>
                      <li>Disaster recovery or business continuity etc.</li>
                    </ul>`,
                    image: require("./assets/2.webp")
                  }
                },
                {
                  component: 'TextAndImage',
                  data: {
                    orientation: "text-on-right",
                    textalign: "text-align-left",
                    title: "e-Commerce / Website Building & Landing Page (Booking System) Management",
                    text: `<p>In Your Daylight is the official Shopify Partner!</p>
                    <p>Are you looking for a professional who can build your online store from the scratch or who can make your already-built store look even nicer with additional new functionalities?</p>

                    <p>Our team is surely ready to address your concerns and help you think bigger. You can boost your business's growth with our knowledge and skill set.</p>`,
                    image: require("./assets/3.webp")
                  }
                },
                {
                  component: 'TextAndImage',
                  data: {
                    orientation: "text-on-left",
                    textalign: "text-align-left",
                    title: "Localization / Market Research / Competitor Research",
                    text: `
                    <p>Our clients include the companies that plan to expand their audience from their countries to North America (Canada & the U.S.). Before setting up marketing strategies to help their businesses globalize, we complete market research and competitor research as well as proceed with consulting sessions to help C-level stakeholders understand the structural and cultural circumstances of the North American market. We always make sure that we and our clients are on the same page to prevent over-promising and under-delivering situations. </p>
                    <p>We believe that businesses can be developed through detailed examination and analysis, not just through general wishes and hopes.</p>
                    <p>Not confident in speaking English?</p>
                    <p>Not a problem at all. The majority of our specialists are bilingual or brilliantly talented in multiple languages.</p>`,
                    image: require("./assets/4.webp")
                  }
                },
                {
                  component: 'TextAndImage',
                  data: {
                    orientation: "text-on-right",
                    textalign: "text-align-left",
                    title: "SEO (Search Engine Optimization) & SEM (Search Engine Marketing)",
                    text: `<p>It is all about being "searchable and relevant".</p>
                    <p>When research more about a service, people search on Google to find the business' website, social media pages, Amazon store (if applicable), and reviews. Is your business landing page searchable online and beating your competitors in Google?</p>

                    <p>We DO NOT create content based on what we want or what you like.</p>
                    <p>We DO create content based on what customers want to see and what your competitors are doing in response to their customers. That's why we need Search Engine Marketing (SEM).</p>`,
                    image: require("./assets/5.webp")
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
                link: '/'
            },
            // {
            //     text: "Who we are",
            //     link: "./who-we-are"
            // },
            {
                text: "CDAP",
                link: "/cdap"
            },
            {
              text: "CDAP Application",
              link: "/cdap-application"
            },
            {
                text: "services",
                link: '/services',
                submenu: [
                  {
                    text: "sub menu item",
                    link: "/cdap"
                  },
                  {
                    text: "sub menu item 2",
                    link: "/cdap"
                  }
                ]
            },
            {
              text: "Blog",
              link: "/blog"
          },
            {
                text: "contact us",
                link: '/contact-us'
            },
        ],
        this.socialnav = [
          {
            icon: require('./assets/Linkedin-icon.svg'),
            text: "Linkedin",
            link: "https://www.linkedin.com/company/in-your-daylight/mycompany/"
          },
        ]
    }
}

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