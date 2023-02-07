<template>
  <div class="homepage-banner">
    <img class="sun" src="../assets/Sun-animated.svg"/>
    <h1>
        <span class="inyour">In Your</span> <br/>
        <span class="phrase-container">
            <transition appear name="phrase">
                <span class="phrase" :key="int+''">{{ phrases[int]}}</span>
            </transition>
            <span class="invisible" :key="int+''">{{ phrases[0]}}</span>
        </span>
    </h1>
  </div>
</template>

<script>
export default {
  name: 'HomepageBanner',
  props: {
  },
  watch: {},
  methods: {
    phraseChange() {
        setInterval(() => {
            this.int = this.counter % 4;
            this.counter++
        }, 2000);
    }
  },
  data() {
    return {
        phrases: [
            'Creativity','Marketing','Imagination','Success'
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
h1 {
    position: absolute;
    text-align: center;
    margin: 0;
    left: 50%;
    top: 50vh;
    transform: translateX(-50%) translateY(-50%);
    .phrase {
        color: $gold;
        font-size: 80px;
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
        font-family: "Joane Light";
    }
}
.phrase-container {
    display: block;
    width: 100vw;
    overflow: hidden;
    position: relative;
}
.phrase-enter, .phrase-leave-active {
    transform: translateY(0%) translateX(-50%);
    transition: all .5s ease;
}
.phrase-leave-active {
    transition: all 2s ease !important;
}
.phrase-enter-active {
    transform: translateY(100%) translateX(-50%) !important;
    transition: all .5s ease;
}
.phrase-leave-to {
    transform: translateY(-100%) translateX(-50%) !important;
    transition: all .5s ease;
}
.sun {
    max-height: 100vh;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    z-index: 0;
}
</style>
