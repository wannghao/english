<template>
  <div class="home">
    <!--    <el-tabs v-model="active" type="border-card">-->
    <!--      <el-tab-pane v-for="(item,key) in list" :key="key" :label="key" :name="key">-->
    <!--        <WViews :list="item" @change="changePage"></WViews>-->
    <!--      </el-tab-pane>-->
    <!--    </el-tabs>-->
    <div class="card-content">
      <div
          v-for="(item,key) in list"
          :key="key"
          :class="{'active':key === active}"
          @click="goTo(key)">{{ key }}
      </div>
    </div>
    <template v-for="(item,key) in list">
      <w-views v-show="active===key" :key="key" :ref="'w_'+key" :list="item" src="./pressSimulate/"
               @change="changePage"></w-views>
    </template>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import {simulateData} from "@/views/img";
import WViews from "@/components/imgViews.vue";

export default {
  name: 'HomeView',
  components: {
    WViews
    // HelloWorld
  },
  data() {
    return {
      active: '1',
      imgItem: [],
      list: {},
    }
  },
  mounted() {
    this.list = Object.freeze(simulateData)
    this.imgItem = this.list[1]
    // Object.freeze(this.list)
    window.addEventListener('keydown', this.handleKeyDown);
  },
  beforeDestroy() {
    // 在组件销毁前移除事件监听器，以防止内存泄漏
    window.removeEventListener('keydown', this.handleKeyDown);
  },
  methods: {
    goTo(key) {
      this.active = key
      this.imgItem = this.list[key]
    },
    changePage(num) {
      let n = Number(this.active) + num
      /* eslint-disable */
      // debugger
      if (n > 0) {
        this.active = n.toString()
        this.goTo(this.active)
      }
    },
    handleKeyDown(event) {
      // 监听左箭头和右箭头键
      const dom = this.$refs['w_' + this.active][0]
      // console.log(this, dom);
      console.log(event);
      if (event.key === 'ArrowLeft') {
        // console.log('Left arrow key pressed');
        dom.subtraction()
        // 在这里执行左箭头键的逻辑
      } else if (event.key === 'ArrowRight') {
        // console.log('Right arrow key pressed');
        dom.addition()
        // 在这里执行右箭头键的逻辑
      } else if (event.key === 'Enter') {
        // console.log('Enter key pressed');
        dom.showAll = !dom.showAll
        // 在这里执行回车键的逻辑
      }
    },
  }
}
</script>

<style scoped>
.card-content {
  display: flex;

  .active {
    color: blue;
  }

  div {
    width: 30px;
    line-height: 30px;
    font-size: 18px;
    margin: 0 10px;
    cursor: pointer;
  }
}
</style>
