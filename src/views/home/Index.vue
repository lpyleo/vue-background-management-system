<template>
  <div class="w-full h-screen">
    <el-container class="w-full h-full">
      <el-aside class="w-200px h-full bg-gray-800 text-white" width="200px"><Menu /></el-aside>
      <el-container>
        <el-header class="bg-gray-100">
          <div class="w-full flex justify-between items-center">
            <div>title</div>
            <div><el-avatar :size="50" :src="circleUrl" /></div>
          </div>
        </el-header>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup>
import Menu from '@/components/Menu.vue';

import { reactive, toRefs } from 'vue'

const state = reactive({
  circleUrl:
    'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
})
const { circleUrl } = toRefs(state)
</script>
