<template>
  <div class="svg" ref="svg">
    <svg width="100%" class="svg__itself">
      <line
        v-for="i in yAxis.length"
        x1="0"
        :x2="blockWidth"
        :y1="`${(90 / yAxis.length) * i}%`"
        :y2="`${(90 / yAxis.length) * i}%`"
        :key="i"
        stroke="#525456"
      />
      <text
        v-for="i in yAxis.length"
        :key="`text-${i}`"
        :y="`${(90 / yAxis.length) * i - 3}%`"
        x="3"
        fill="#525456"
        font-size="0.75em"
      >
        {{ yAxis[yAxis.length - i] }}
      </text>
      <g
        v-for="(value, key, index) in finalObj"
        :transform="`translate(${index * eachStep + padding}, 0)`"
        :key="key"
      >
        <rect
          x="3"
          :y="90 - multiply(value) + '%'"
          :width="eachStep - gap"
          :height="multiply(value) + '%'"
          :fill="colors[index % colors.length]"
        ></rect>
        <text
          v-if="value"
          :y="90 - multiply(value) / 2 + '%'"
          :x="(eachStep - gap) / 2"
          fill="#000067"
          font-size="1em"
        >
          {{ value }}
        </text>
        <text
          text-anchor="middle"
          y="99%"
          :x="(eachStep - gap) / 2"
          fill="#525456"
          font-size="0.75em"
        >
          {{ key }}
        </text>
      </g>
    </svg>
  </div>
</template>

<script>
export default {
  props: {
    finalObj: Object,
  },
  data() {
    return {
      blockWidth: 500,
      padding: 15,
      gap: 10,
      maxValue: 1,
      colors: ["#FEE10D"],
    };
  },
  computed: {
    eachStep() {
      return (
        (this.blockWidth - this.padding) / Object.keys(this.finalObj).length
      );
    },
    yAxis() {
      if (this.maxValue < 5) {
        return Array.from(Array(5).keys());
      }
      let arr = [0];
      for (let i = 1; i < 5; i++) {
        arr.push(Math.floor((this.maxValue / 5) * i));
      }
      return arr;
    },
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    async fetchData() {
      let arr = Object.values(this.finalObj);
      this.maxValue = Math.max(...arr) < 5 ? 5 : Math.max(...arr);

      this.$nextTick(() => {
        this.blockWidth = this.$refs.svg.clientWidth;
      });
    },
    multiply(item) {
      return (item / this.maxValue) * 100 || 0;
    },
  },
};
</script>

<style lang="scss" scoped>
.svg {
  padding: 0;
  height: 15rem;
  position: relative;
  margin: 1rem 0;

  &__itself {
    position: absolute;
    width: 100%;
    height: 90%;
    bottom: 0;
  }
}
</style>
