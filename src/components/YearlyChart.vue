<template>
  <canvas ref="canvas"></canvas>
</template>

<script>
const BOTTOM_PADDING = 20;
export default {
  props: {
    matches: Array
  },
  data() {
    return {
      finalObj: {}
    };
  },
  computed: {
    maxValue() {
      return Math.max(...Object.values(this.finalObj));
    }
  },
  mounted() {
    const years = this.matches.map(x => new Date(x.date).getFullYear());
    const uniqueYears = [...new Set(years)];
    const minYear = Math.min(...uniqueYears);
    const maxYear = Math.max(...uniqueYears);

    for (let i = minYear; i <= maxYear; i++) {
      console.log(i);
      this.finalObj[i] = years.filter(x => x == i).length;
    }

    const canvas = this.$refs.canvas;
    canvas.width = 400;
    canvas.height = 300;
    const ctx = canvas.getContext("2d");

    ctx.beginPath();

    ctx.beginPath();
    let index = 0;

    for (let key in this.finalObj) {
      // ctx.fillStyle = "#ffffff";
      // ctx.font = "20px Verdana";
      // ctx.fillText(
      //   this.finalObj[key],
      //   this.calculateX(index),
      //   this.calculateY(this.finalObj[key], canvas.height)
      // );
      // ctx.fillStyle = "#ffffff";
      // ctx.font = "20px Verdana";
      // ctx.fillText(key, 0, this.calculateX(index));

      ctx.fillStyle = "#FEE10D";
      ctx.rect(
        this.calculateX(index),
        this.calculateY(this.finalObj[key], canvas.height),
        30,
        this.calculateHeight(this.finalObj[key], canvas.height)
      );

      index++;
    }
    ctx.fill();
  },
  methods: {
    calculateX(index) {
      return 40 * index;
    },
    calculateY(data, height) {
      var valueRatio = (data / this.maxValue) * height;
      return height - valueRatio;
    },
    calculateHeight(data, height) {
      return height - this.calculateY(data, height);
    }
  }
};
</script>

<style lang="scss" scoped>
canvas {
  width: 100%;
}
</style>