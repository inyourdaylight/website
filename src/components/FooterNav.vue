<template>
  <footer class="footer">
    <table class="footer-inner">
      <td class="col-1">
       <a href="./" class="home-link">
        <IYDLogo class="logo"></IYDLogo>
       </a>
      </td>
      <td class="col-2">
        <ul>
          <li v-for="(item, i) in $cms.nav" :key="i"><a :href="item.link">{{ item.text }}</a></li>
        </ul>
      </td>
      <td class="col-3">
        <ul>
          <li v-for="(item, i) in $cms.socialnav" :key="i">
            <a :href="item.link"><span><img :src="item.icon" class="icon"/></span>{{ item.text }}</a>
          </li>
        </ul>
      <div class="contacts">
        <h3>Contact Us</h3>
          <p>
              <a href="mailto:info@inyourdaylight.com"><span><img class="icon" src="../assets/Email.svg"/></span> info@inyourdaylight.com</a>
          </p>
          <p>
              <a href="tel:6473587767"> <span><img class="icon" src="../assets/Phone.svg"/></span> (647)-358-7767</a>
          </p>
      </div>
      </td>
      <td class="col-4">
        <h1>Work hard.</h1>
        <h1 class="gold">Play hard.</h1>
      </td>
    </table>
    <small>Copyright © {{ year }} <a href="./">In Your Daylight.</a> All Rights Reserved.</small>
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
      year: new Date().toString().split(" ")[3]
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
small {
  text-align: center;
  width: 100%;
  display: block;
  padding-bottom: 20px;
}
h1 {
  color: white;
}
.footer-inner {
  padding-bottom: 40px;
  min-height: 300px;
  padding-top: 60px;

  .col-4 {
    width: 40%;
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
  .logo {
      height: 80%;
      display: inline-block;
      margin: auto;
      :deep svg {
        height: 100px;
      }
    }

  .col-2 {
    text-transform: capitalize;
  }

  @media screen and (min-width: $mobileup) {
    width: calc(100% - 200px);
    margin: 40px 100px 0;
    .col-1 {
      width: 20%;
    }
    .col-3 {
      position: relative;
      width: 20%;
    }
    .col-2 {
      width: 15%;
      padding-right: 20px;
      li:last-child {
        margin-bottom: 0;
      }
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
      text-align: center;
      margin: auto;
    }
    .col-3 {
      margin-top: 10px;
    }
    .col-4 {
      margin-top: 40px;
      text-align: center;
      width: 100%;
    }
    .col-1 {
      margin-bottom: 40px;
      text-align: center;
      img {
        display: block;
        margin: auto;
      }
    }
   }
 
}

.icon {
    width: 16px;
    vertical-align: middle;
    display: inline-block;
    margin-right: 10px;
    transform: translateY(-2px);
}
.contacts {
  @media screen and (min-width: $mobileup) {
    position: absolute;
    top: 100%;
    transform: translateY(-100%);
  }
  @media screen and (max-width: $mobiledown) {
    padding-top: 30px;
  }
  a {
    color: white;
  }
  h3 {
    margin-bottom: 10px;
  }
  p {
    margin-bottom: 8px;
  }
}
</style>
