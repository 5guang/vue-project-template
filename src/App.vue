<template>
  <Suspense>
    <template #default>
      <router-view />
    </template>
    <template #fallback>
      <span>I'm a loading screen, I'm waiting the view to be ready!</span>
    </template>
  </Suspense>
</template>
