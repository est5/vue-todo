<script setup lang="ts"></script>
<template>
  <nav class="navbar">
    <h1 class="text-slate-200 font-semibold text-5xl shadow-sm">TODO!</h1>
    <h2 class="text-1xl font-mono text-slate-200">
      <a
        href="https://github.com/est5/vue-todo"
        class="hover:text-2xl hover:text-slate-100"
        >Github</a
      >
    </h2>
  </nav>
</template>

<style>
.navbar {
  @apply flex items-center justify-between flex-wrap bg-red-800 p-6 shadow-sm shadow-rose-500;
}
</style>
