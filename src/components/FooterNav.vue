<template>
  <footer class="footer">
    <table class="footer-inner">
      <td class="col-1">
        <img src="../assets/IYD-White-Small.svg"/>
      </td>
      <td class="col-2">
        <ul>
          <li v-for="(item, i) in $cms.nav" :key="i"><a :href="item.link">{{ item.text }}</a></li>
        </ul>
      </td>
      <td class="col-3">
        <ul>
          <li v-for="(item, i) in $cms.socialnav" :key="i"><a :href="item.link">{{ item.text }}</a></li>
        </ul>
      </td>
      <td class="col-4">
        <h1>Work hard.</h1>
        <h1 class="gold">Play hard.</h1>
      </td>
    </table>
  </footer>
</template>

<script>

export default {
  name: 'NavSticky',
  props: {
    clickEvents: {
      type: Object,
      default: () => {}
    }
  },
  watch: {

  },
  methods: {

  },
  data() {
    return {
  
    }
  },
  
  mounted() {
 
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import "../styles.scss";
.footer {
  width: 100vw;
  left: 0px;

  background: linear-gradient(180deg, rgba(50, 62, 71, 0) 0%, $darkturquoise 94.79%);
}

h1 {
  color: white;
}
.footer-inner {
  padding-bottom: 40px;
  min-height: 300px;
  text-transform: capitalize;
  padding-top: 60px;

  .col-4 {
    width: 50%;
    h1 {
      margin: 0;
    }
  }
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    line-height: 2;
    li {
      margin-bottom: 10px;
    }
  }
  td {
    vertical-align: top;
  }

  @media screen and (min-width: $mobileup) {
    width: calc(100% - 80px);
    margin: 40px 40px 0;
    .col-1 {
      width: 20%;
    }
    .col-2, .col-3 {
      width: 15%;
    }
   }

   @media screen and (max-width: $mobiledown) {
    width: calc(100% - 40px);
    margin: 40px 20px 0;
    li {
      margin-bottom: 0;
      line-height: 1.25;

    }
    td {
      width: 100%;
      display: block;
    }
    .col-2, .col-3 {
      width:calc(50% - 4px);
      display: inline-block;
      text-align: center;
    }
    .col-4 {
      margin-top: 40px;
      text-align: center;
      width: 100%;
    }
    .col-1 {
      margin-bottom: 40px;
      img {
        display: block;
        margin: auto;
      }
    }
   }
 
}


</style>
