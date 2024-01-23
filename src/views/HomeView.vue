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
      <w-views v-show="active===key" :key="key" :list="item" @change="changePage"></w-views>
    </template>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import {dataList} from "@/views/img";
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
      list: {}
    }
  },
  mounted() {
    this.list = Object.freeze(dataList)
    this.imgItem = this.list[1]
    // Object.freeze(this.list)
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
    }
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
