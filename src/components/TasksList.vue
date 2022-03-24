<script setup lang="ts">
import type { Project } from '@/models/project';
import type { Todo } from '@/models/todo';
import { state, addTask } from '@/store';
import { ref } from 'vue';

const checkTask = (t: Todo) => {
  t.done = !t.done;
};

let text = ref('');
const task = (prj: Project) => {
  addTask(text.value, prj);
  text.value = '';
};

const handleIpnut = (e: Event) => {
  text.value = e.target.value;
};
</script>

<template>
  <div class="wrapper">
    <h1 class="font-mono text-3xl text-center">Tasks</h1>

    <div v-for="(set, k) in state.keys()" :key="k" class="flex flex-col mb-5">
      <div v-if="set.selected" class="text-black font-black border-b-2">
        <h2 class="text-xl">{{ set.name }}</h2>
        <div
          v-for="a in state.get(set)"
          :key="a.id"
          class="text-slate-800 font-mono font-light"
        >
          <div
            class="cursor-pointer"
            :class="{ done: a.done }"
            @click="() => checkTask(a)"
          >
            {{ a.text }}
          </div>
        </div>
        <div>
          <input
            @input="(e) => handleIpnut(e)"
            class="outline-none p-1"
            type="text"
            placeholder="Add new task"
          />
          <button @click="() => task(set)" class="ml-1 font-light">ok</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.wrapper {
  @apply mt-10;
}
.done {
  @apply line-through;
}
</style>
