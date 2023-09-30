<template>
  <div>
    <router-view v-slot="{ Component}">
      <template v-if="Component">
        <transition mode="out-in">
          <keep-alive>
            <suspense>
              <!-- 主要内容-->
              <component :is="Component"></component>

              <!-- 加载中状态 todo -->
              <!-- <template #fallback>
                ...
              </template> -->
            </suspense>
          </keep-alive>
        </transition>
      </template>
    </router-view>
    <!-- AppMain -->
  </div>
</template>
<script setup lang='ts'>
</script>
<style lang='scss' scoped>
</style>