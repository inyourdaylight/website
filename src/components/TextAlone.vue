<template>
  <div class="textalone">
    <p v-html="data.text"></p>
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

.textalone {
    padding: 30px 0;
    @media screen and (max-width: $mobiledown) {
      padding: 20px;
    }
    max-width: 700px;
    margin: auto;
}
</style>
