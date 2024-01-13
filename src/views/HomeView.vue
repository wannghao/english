<template>
  <div class="home">
    <el-tabs v-model="active" type="border-card">
      <el-tab-pane v-for="(item,key) in list" :key="key" :label="key" :name="key">
        <img-views :list="item" @change="changePage"></img-views>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

import ImgViews from "@/components/imgViews.vue";

export default {
  name: 'HomeView',
  components: {
    ImgViews
    // HelloWorld
  },
  data() {
    return {
      active: '1',
      list: {
        1: ['1t1', '1y1', '1y2'],
        2: ['2-1', '2-2', '2-3', '2-4'],
        3: ['3-1', '3-2', '3-3'],
        4: ['4-1', '4-2', '4-3'],
        5: ['5-1', '5-2'],
        6: ['6-1', '6-2', '6-3'],
        7: ['7t1', '7t2', '7y1', '7y2'],
        8: ['8t1', '8t2', '8y1', '8y2'],
        9: ['9t1', '9t2', '9y1', '9y2'],
        10: ['10t1', '10t2', '10t3', '10y1', '10y2'],
        11: ['11t1', '11t2'],
        12: ['12t1', '12t2'],
        98: ['98y1', '98y2', '98y3', '98y4', '98y5', '98y6', '98y7', '98y8', '98y9']
      }
    }
  },
  methods: {
    changePage(num) {
      let n = Number(this.active) + num
      /* eslint-disable */
      // debugger
      if (n > 0) {
        this.active = n.toString()
      }
    }
  }
}
</script>
