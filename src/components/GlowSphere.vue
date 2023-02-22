<template>
<div class="glow-sphere">
    <svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_56_22)">
        <path d="M22.7532 45.5064C35.3194 45.5064 45.5064 35.3194 45.5064 22.7532C45.5064 10.187 35.3194 0 22.7532 0C10.187 0 0 10.187 0 22.7532C0 35.3194 10.187 45.5064 22.7532 45.5064Z" fill="url(#paint0_radial_56_22)"/>
        <path d="M22.7532 32.9814C28.402 32.9814 32.9812 28.4022 32.9812 22.7534C32.9812 17.1046 28.402 12.5254 22.7532 12.5254C17.1044 12.5254 12.5252 17.1046 12.5252 22.7534C12.5252 28.4022 17.1044 32.9814 22.7532 32.9814Z" :fill="color"/>
        </g>
        <defs>
        <radialGradient id="paint0_radial_56_22" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(22.7532 22.7532) scale(22.7532)">
        <stop :stop-color="color"/>
        <stop offset="0.0784" :stop-color="color" stop-opacity="0.8857"/>
        <stop offset="0.2745" :stop-color="color" stop-opacity="0.6204"/>
        <stop offset="0.4607" :stop-color="color" stop-opacity="0.3992"/>
        <stop offset="0.6315" :stop-color="color" stop-opacity="0.2266"/>
        <stop offset="0.7836" :stop-color="color" stop-opacity="0.1026"/>
        <stop offset="0.9116" :stop-color="color" stop-opacity="0.0271"/>
        <stop offset="1" :stop-color="color" stop-opacity="0"/>
        </radialGradient>
        <clipPath id="clip0_56_22">
        <rect width="45.5063" height="45.5063" :fill="color"/>
        </clipPath>
        </defs>
    </svg>
</div>
</template>

<script>
export default {
  name: 'TimeMoon',
  props: {
    color: {
        type: String,
        default: "#DBAA47"
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
      
    }
  },
  mounted() {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import "../styles.scss";
svg {
    pointer-events: none;
}

</style>
