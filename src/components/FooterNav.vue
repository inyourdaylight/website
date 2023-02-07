<template>
  <footer class="footer">
    <table class="footer-inner">
      <td class="col-1">
        <img src="../assets/IYD-White-Small.svg"/>
      </td>
      <td class="col-2">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Case Studies</li>
          <li>Contact</li>
        </ul>
      </td>
      <td class="col-3">
        <ul>
          <li>Instagram</li>
          <li>Twitter</li>
          <li>Linkedin</li>
          <li>Facebook</li>
        </ul>
      </td>
      <td class="col-4">
        <h1>Work hard.</h1>
        <h1 class="gold">play hard.</h1>
      </td>
    </table>
  </footer>
</template>

<script>

export default {
  name: 'NavSticky',
  props: {

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
  min-height: 400px;
  left: 0px;

  background: linear-gradient(180deg, rgba(50, 62, 71, 0) 0%, #323E47 94.79%);
}
.footer-inner {
  width: calc(100% - 80px);
  margin: 40px;
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
    li {
      margin-bottom: 10px;
    }
  }
  td {
    vertical-align: top;
  }

  .col-1 {
    width: 20%;
  }
  .col-2, .col-3 {
    width: 15%;
  }
}

</style>
