<script setup lang="ts">
useUserStore().fetchProfile();

const {smAndUp} = useDisplay();
const route = useRoute();
const isLoggedInView = computed(() => route.path.startsWith('/app'));
</script>

<template>
  <NuxtRouteAnnouncer/>
  <Toaster
      rich-colors
      expand
      close-button
      visible-toasts="3"
      :position="smAndUp ? 'bottom-right' : 'top-center'"
      :offset="'30px'"
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
