<template>
  <div class="homepage-banner">
    <transition appear name="fadein">
       <div class="sun-container">
            <img class="sun" src="../assets/Sun-animated.svg"/>
       </div>
    </transition>
    <transition appear name="fadein">
        <h1 class="text">
            <span class="inyour">In Your</span> <br/>
            <span class="phrase-container">
                <transition appear name="phrase">
                    <span class="phrase" :key="int+''">{{ phrases[int]}}</span>
                </transition>
                <span class="invisible" :key="int+''">{{ phrases[0]}}</span>
            </span>
            <p>
                We are a CDAP (Canada Digital Adoption Plan)-certified multidisciplinary digital agency, specializing in business development and digital marketing.
            </p>
        </h1>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'HomepageBanner',
  props: {
    clickEvents: {
      type: Object,
      default: () => {}
    }
  },
  watch: {},
  methods: {
    phraseChange() {
        setInterval(() => {
            this.counter++
            this.int = this.counter % 4;
        }, 4000);
    }
  },
  data() {
    return {
        phrases: [
            'Daylight','Business Development','Marketing','IT Support','Branding'
        ],
        images: [
            require('../assets/placeholdersize1.png'),
            require('../assets/placeholdersize1.png'),
            require('../assets/placeholdersize1.png'),
            require('../assets/placeholdersize1.png'),

        ],
        counter:0,
        int: 0
    }
  },
  mounted() {
    this.phraseChange();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import "../styles.scss";

.homepage-banner {
    min-height: 100vh;
}

.sun-container {
    border-bottom: 1px solid $gold;
    height: 50vh;
    position:absolute;
    width: 100%;
    height: 90vh;
    overflow: hidden;
    top: 0vh;
    opacity: 1;
    transition: all 1s ease;
    .sun {
        // max-height: 200vh;
        // height: 100%;
        position: absolute;
        // height: 150vh;
        width: 100%;
        left: 50%;
        bottom: 0;
        opacity: .5;
        transform: translateX(-50%);
        // z-index: 0;
        transition: all 1s ease;
    }
}
.image {
    z-index: 1;
    position: absolute;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    top: 50vh;
    max-height: 80vh;
    height: 100%;
    opacity: 1;
    overflow: hidden;
    img {
        transform: translateY(0%);
        opacity: 1;
        display: block;
        max-height: 80vh;
        height: 100%;
        margin: auto;
        border-radius: 20px;
    }
    .image-flip-enter-active {
        transform: translateY(100%);
        opacity: 0;
        transition: all 2s ease;
        transition-delay: 1s;
    }

    .image-flip-leave-active {
        transition: all 2s ease;
    }
    .image-flip-leave-to {
        transition: all 1s ease;
        transform: translateY(-100%) !important;
        opacity: 0;
    }
    .image-flip-enter-to, .image-flip-leave-active {
        transform: translateY(0%);
        opacity: 1;
    }
}
.image-fade-in-enter-active {
    opacity: 0;
    transform: translateX(-50%) translateY(0%);
    transition: all 1s ease 1.5s;
}
.image-fade-in-enter-to {
    transform: translateX(-50%) translateY(-50%);
    opacity: 1;
}

.text {
    position: absolute;
    // text-shadow: 0px 0px 12px rgba(0,0,0,0.75);
    text-shadow: 0px 0px 20px $darkblue;
    text-align: center;
    margin: 0;
    left: 50%;
    top: 50vh;
    transform: translateX(-50%) translateY(-50%);
    line-height: 1;
    z-index: 2;
    opacity: 1;
    transition: all .5s ease;
    .phrase {
        white-space: nowrap;
        color: $gold;
        font-size: 90px;
        @media screen and (max-width: $mobiledown) {
            font-size: 60px;
        }
        display: block;
        transform: translateY(0%) translateX(-50%);
        transition: all .5s ease;
        position: absolute;
        left: 50%;
    }
    .invisible {
        color: $gold;
        font-size: 80px;
        display: block;
        opacity: 0;
        width: 100%;
        pointer-events: none;
    }
    .inyour {
        font-family: $subheading;
        color: white;
        margin: 0;
        line-height: 0;
        font-size: 60px;
        @media screen and (max-width: $mobiledown) {
            font-size: 40px;
        }
    }
    p {
        text-transform:none;
        max-width: 500px;
        margin: 40px auto 0;
        @media screen and (max-width: $mobiledown) {
            margin-top: 10px;
            width: calc(100% - 40px);
        }
    }
}
.phrase-container {
    display: block;
    width: 100vw;
    // overflow: hidden;
    position: relative;
}
.fadein-enter {
    opacity: 1;
}
.fadein-enter-active {
    opacity: 0 !important;
}
.phrase-enter, .phrase-leave-active {
    opacity: 1;
    transform: translateY(0%) translateX(-50%);
    transition: all .5s ease;

}
.phrase-leave-active {
    transition: all 2s ease !important;
}
.phrase-enter-active {
    transform: translateY(100%) translateX(-50%) !important;
    opacity: 0;
    transition: all .5s ease;
}
.phrase-leave-to {
    transform: translateY(-100%) translateX(-50%) !important;
    opacity: 0;
    transition: all .5s ease;
}

</style>

    <!-- <transition appear name="image-fade-in">
        <div class="image">
            <transition appear name="image-flip">
               <div class="image-wrap"  :key="int+''">
                    <img :src="images[int]"/>
               </div>
            </transition>
        </div>
    </transition> -->