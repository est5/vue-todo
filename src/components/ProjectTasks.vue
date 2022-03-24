<script setup lang="ts">
import ProjectList from './ProjectList.vue';
import TasksList from './TasksList.vue';
import { state } from '@/store';
</script>
<template>
  <div class="container-projects">
    <ProjectList />
    <TasksList v-if="state.size" />
  </div>
</template>

<style>
.container-projects {
  @apply md:container  md:mx-auto  md:h-screen flex flex-col place-items-center md:place-items-center;
}
</style>
