<script setup lang="ts">
useUserStore().fetchProfile();

const { smAndUp } = useDisplay();
const route = useRoute();
const isLoggedInView = computed(() => route.path.startsWith('/app'));
</script>

<template>
  <NuxtRouteAnnouncer/>
  <Toaster
    :position="smAndUp ? 'bottom-right' : 'top-center'"
    :offset="'30px'"
    rich-colors
    expand
    close-button
    visible-toasts="3"
  />
  <v-app>
    <AppBar/>
    <v-main>
      <NuxtPage/>
    </v-main>
    <BottomAppBar v-if="!smAndUp && isLoggedInView"/>
    <ConfirmDialog/>
  </v-app>
</template>
