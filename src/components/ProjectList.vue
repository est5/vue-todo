<script setup lang="ts"></script>
<template>
  <h2 class="font-mono mt-5 text-xl">Projects</h2>
  <p class="project"></p>
  <p class="flex flex-col gap-1">
    <label for="project-input"></label>
    <input
      type="text"
      class="rounded-md border-2 p-1"
      placeholder="Enter project name"
    />
    <button
      class="font-light self-center w-1/2 border-2 bg-slate-200 rounded-xl hover:bg-slate-100 hover:font-normal"
    >
      Add
    </button>
  </p>
</template>
