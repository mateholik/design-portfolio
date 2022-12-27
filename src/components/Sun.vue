<template>
  <article class="card card--sun">
    <div class="card__planet">
      <div class="planet__atmosphere">
        <div class="planet__surface"></div>
      </div>
    </div>
  </article>
</template>

<script>
export default {};
</script>

<style lang="scss">
//List of planets - used for mixin interation and interpolation
$solarSystem: (
  "mercury",
  "venus",
  "earth",
  "mars",
  "jupiter",
  "saturn",
  "uranus",
  "neptune",
  "pluto",
  "sun"
);

//Planet propeties
:root {
  --sun-image: url(~@/assets/img/sun.jpeg);
  --sun-tilt: rotate(0deg);
  --sun-day: 600;
  --sun-color: #cc9f4c;
}

//Mixin for styling each planet
@mixin planetization {
  @each $planet in $solarSystem {
    &--#{$planet} {
      .planet__atmosphere {
        box-shadow: inset 10px 0px 12px -2px rgba(255, 255, 255, 0.2),
          inset -70px 0px 50px 0px black,
          -5px 0px 10px -4px var(--#{$planet}-color);
      }
      .planet__surface {
        background-image: var(--#{$planet}-image);
        transform: var(--#{$planet}-tilt) scale(1.2);
        animation: planetRotate
          calc(var(--#{$planet}-day) * 0.1s)
          linear
          infinite;
      }
      .card__planet {
        // &::before {
        //   transform: var(--#{$planet}-tilt) scale(1.2);
        //   border-color: var(--#{$planet}-color);
        //   color: var(--#{$planet}-color);
        // }
      }
      .tilt__icon {
        transform: var(--#{$planet}-tilt);
        color: var(--#{$planet}-color);
      }
    }
  }
}

//Planet rotation animation
@keyframes planetRotate {
  0% {
    background-position: 0% center;
  }
  100% {
    background-position: -200% center;
  }
}
// End definitions
//---------------------------
//Start styles

.card {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  @include planetization;
}

.card__planet {
  margin-left: 94px;
  transform: scale(1.5);
  @media (max-width: 768px) {
    transform: scale(0.8);
    margin-left: 0;
  }
  //   &::before {
  //     content: "";
  //     position: absolute;
  //     height: 190px;
  //     z-index: -2;
  //     left: 50%;
  //     top: 0%;
  //     border-left: 1px dashed rgba(255, 255, 255, 0.25);
  //   }
}

.planet {
  &__atmosphere {
    height: 190px;
    width: 190px;
    position: relative;
    background: radial-gradient(
      circle at 30% 50%,
      rgba(255, 255, 255, 0.3) 0%,
      rgba(255, 255, 255, 0) 65%
    );
    border-radius: 100px;
    overflow: hidden;
  }
  &__surface {
    position: absolute;
    height: 100%;
    width: 100%;
    z-index: -1;
    background-size: cover;
  }
}

//Different box-shadow for the sun
.card--sun {
  .planet__atmosphere {
    box-shadow: 0px 0px 10px 0px var(--sun-color),
      0px 0px 1000px -36px var(--sun-color);
  }
}
</style>
