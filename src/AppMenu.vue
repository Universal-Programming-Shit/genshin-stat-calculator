<template>
  <div class="menu">
    <div class="links">
      <router-link to="/">Stats</router-link>
      <router-link to="/character"
        >Character: {{ characterStore.name }}</router-link
      >
      <router-link to="/artifact/flower">Flower</router-link>
      <router-link to="/artifact/feather">Feather</router-link>
      <router-link to="/artifact/sands">Sands</router-link>
      <router-link to="/artifact/goblet">Goblet</router-link>
      <router-link to="/artifact/circlet">Circlet</router-link>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useCharacterStore } from "./character/CharacterStore";

const characterStore = useCharacterStore();
</script>
<style scoped>
.menu {
  background-color: #2b28a8;
}

.links {
  display: flex;
}

.links * {
  color: white;
  font-weight: bold;
}

.links a {
  padding: 0.7em;
  height: 100%;
}

.links :deep(.router-link-active) {
  color: dimgray;
}

.links a:hover {
  background-color: #5654af;
}

@media screen and (orientation: landscape) {
  .menu {
    height: 100vh;
  }
  .links {
    width: 8em;
    flex-direction: column;
  }
}
</style>
