<script setup lang="ts">
import type { Project } from '@/models/project';
import { state, addProject, removeProject } from '@/store';
import { ref } from 'vue';
const toggle = (k: Project) => {
  k.selected = !k.selected;
};
let inputText = ref('');

const addNewProject = () => {
  if (inputText.value === '') {
    return;
  }
  addProject(inputText.value);
  inputText.value = '';
};
</script>

<template>
  <h2 class="font-mono mt-5 text-xl">Projects</h2>
  <p class="project" :key="i" v-for="(k, i) in state.keys()">
    <span
      @click="() => toggle(k)"
      class="cursor-pointer"
      :class="{
        'selected-prj': k.selected,
      }"
      >{{ k.name }}</span
    >
    <button
      @click="removeProject(i)"
      class="text-sm no-underlin hover:text-red-600 text-black ml-10 border-[1px] border-slate-500 rounded-lg p-1"
    >
      Delete
    </button>
  </p>
  <p class="border-b-4 border-slate-800 mt-5 flex flex-col gap-1">
    <label for="project-input"></label>
    <input
      v-model="inputText"
      type="text"
      class="rounded-md border-2 p-1"
      placeholder="Enter project name"
    />
    <button
      @click="addNewProject"
      class="mt-1 mb-4 hover:shadow-slate-400 hover:shadow-sm font-light self-center w-1/2 border-2 bg-slate-200 rounded-xl hover:bg-slate-100"
    >
      Add
    </button>
  </p>
</template>

<style>
.project {
  @apply text-slate-800 text-lg grid grid-cols-2;
}
.selected-prj {
  @apply underline underline-offset-1;
}
</style>
