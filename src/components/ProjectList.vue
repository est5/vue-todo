<script setup lang="ts">
import type { Project } from '@/models/project';
import { state } from '@/store';
const toggle = (k: Project) => {
  k.selected = !k.selected;
};
</script>
<template>
  <h2 class="font-mono mt-5 text-xl">Projects</h2>
  <p
    class="project"
    @click="() => toggle(k)"
    :key="i"
    v-for="(k, i) in state.keys()"
    :class="{
      'selected-prj': k.selected,
    }"
  >
    {{ k.name }}
  </p>
  <p class="mt-5 flex flex-col gap-1">
    <label for="project-input"></label>
    <input
      type="text"
      class="rounded-md border-2 p-1"
      placeholder="Enter project name"
    />
    <button
      class="hover:shadow-slate-400 hover:shadow-sm font-light self-center w-1/2 border-2 bg-slate-200 rounded-xl hover:bg-slate-100"
    >
      Add
    </button>
  </p>
</template>
<style>
.project {
  @apply text-slate-800 text-lg text-center w-full cursor-pointer;
}
.selected-prj {
  @apply underline underline-offset-1;
}
</style>
