<template>
  <div :class="`textcomponent ${data.textalign} column-count-${data.columns}`" v-if="data">
   <div class="title col animate-fade-in" :style="`width: calc(${100 / data.columns}% - 40px)`">
    <div class="title-inner">
        <h1 class="largeh1 animate-fade-in" v-html="data.title"></h1>
        <h2 class="subtitle animate-fade-in animate-delay-250">{{ data.subtitle }}</h2>
        <br/>
        <small v-show="data.date" class="meta">{{data.date}}</small>
        <div class="ctas" v-show="data.cta_buttons">
          <a v-for="(item, i) in data.cta_buttons" :key="i" class="cta" :href="item.link">
            <p>{{ item.text }}</p>
          </a>
        </div>
    </div>
   </div>
   <div class="text col animate-fade-in animate-delay-250" v-show="data.text">
    <span v-html="data.text"></span>
    <!-- <div class="ctas" v-show="data.cta_buttons">
      <a v-for="(item, i) in data.cta_buttons" :key="i" class="cta" :href="item.link">
        <p>{{ item.text }}</p>
      </a>
    </div> -->
   </div>
  </div>
</template>

<script>
export default {
  name: 'TextComponent',
  props: {
    data: {
      type: Object,
      default: () => {}
    },
    clickEvents: {
      type: Object,
      default: () => {}
    }
  },
  watch: {},
  methods: {

  },
  data() {
    return {
      ol: [
        'Canadian SMEs access the Stream assessment tool on CDAP website',
        'Eligible SMEs are directed to Stream 2',
        'SMEs use the Digital Needs Assessment (DNA) tool to assess their digital maturity',
        'SMEs accepted into Stream 2 are provided access to CDAP`s Digital Advisor Marketplace to find a Digital Advisor to work with',
        'SME (Small and Medium-sized Enterprises) and Digital Advisor agree on cost and scope of digital adoption plan SME submits their completed digital plan to CDAP and then requests a grant to cover up to 90% (max $15,000) of the cost of the plan',
        'With a digital adoption plan in hand, SMEs can apply to BDC for an interest-free loan of up to $100,000 depending on their business size and tax credit history, to help execute their plan',
        'SMEs who participate in Stream 2 will be eligible for a youth placement wage subsidy to help them implement their plans',
        'SMEs will be asked to provide feedback on their program experience and share how it helped their business'
      ]
    }
  },
  mounted() {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import "../styles.scss";
@import "../fonts.scss";

.textcomponent {
    padding: 20px 100px;
    @media screen and (max-width: $mobiledown) {
      padding: 20px;
    }
}
.text-align-center {
  text-align: center;
}
.text-align-left {
  text-align: left;
}
.text-align-right {
  text-align: right;
}

.title-inner {
    // max-width: 400px;
    width: 100%;
    margin: auto;
}
.col {
    display: inline-block;
    @media screen and (max-width: $mobiledown) {
      width: 100% !important;
    }
    vertical-align: middle;
}
.title {
  width: 50%;
}
.column-count-1 {
    .title {
      display: block;
      margin: auto;
      max-width: 700px;
  }
}

h1 {
    margin-top: 0;
    margin-bottom: 40px;
}
@media screen and (max-width: $mobiledown) {
    :deep(ol) {
      width: calc(100% - 40px) !important;
      margin: auto;
      margin-left: 40px;
      display: block;
    }
  }
:deep(.text) {
    @media screen and (max-width: $mobiledown) {
      margin-top: 60px;
    }
    @media screen and (min-width: $mobileup) {
      width: calc(50% - 80px);
      margin-left: 80px;
    }
    ol {
        padding: 0;
        margin: auto;
        li {
            margin-bottom: 20px;
            p {
                transform: translateY(-10px);
                margin-left: 10px;
            }
            &::marker {
                font-family: $heading;
                font-size: 30px;
                margin-top: 30px;
                display: block;
            }
        }
    }
}
.largeh1 {
  max-width: 1000px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 20px;
  text-transform: capitalize;
}
.subtitle {
  // width: 100%;
  // display: inline-block;
  margin-top: 0;
  margin-left: auto;
  margin-right: auto;
  max-width: 700px;
  color: white;
  font-family: $body;
  font-size: 30px;
}
.cta {
  text-transform: capitalize;
  width: calc(100% - 30px);
  margin-top: 40px;
}
.meta {
  color: grey;
  width: 100%;
  display: block;
  max-width: 700px;
  margin: auto;
  text-align: left;
}
</style>
