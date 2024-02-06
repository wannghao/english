<template>
  <div class="imgViews">
    <div v-for="(t,index) in list" :key="index">
      <div v-show="active === index">
        <img v-show="showAll" :src="'./pressAll/'+ t + '.jpg'" class="img" @click="showAll=!showAll">
        <img v-show="!showAll" :src="'./pressAll/'+ t + '(1).png'" class="img" @click="showAll=!showAll">
      </div>
    </div>
    <button class="up-btn" @click="subtraction">上一页</button>
    <button class="down-btn" @click="addition">下一页</button>
  </div>
</template>

<script>

export default {
  name: "WViews",
  props: {
    list: Array
  },
  data() {
    return {
      active: 0,
      showAll: true
    }
  },
  computed: {},
  watch: {
    active: {
      handler() {
        this.showAll = false
      },
      immediate: true
    }
  },
  created() {
  },

  methods: {
    subtraction() {
      if (this.active === 0) {
        // this.$message.error('已经是第一张了')
        this.$emit('change', -1)
        return
      }
      this.active--
      this.scrollToTop()
    },
    scrollToTop() {
      console.log('指定');
      this.$nextTick(() => {
        window.scrollTo(0, 0);
      })
    },
    addition() {
      if (this.active === this.list.length - 1) {
        // this.$message.error('已经是最后一张了')
        this.$emit('change', 1)
        return
      }
      this.active++
      this.scrollToTop()
    }
  }
}
</script>


<style scoped>
.imgViews {
  position: relative;
}

.img {
  width: 700px;
//height: 1000px;
}

.up-btn {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-500px, 0);
}

.down-btn {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(500px, 0);
}
</style>