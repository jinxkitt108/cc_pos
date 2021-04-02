<template>
  <div id="q-app">
    <router-view />
  </div>
</template>
<script>
import { mapActions } from "vuex";

export default {
  methods: {
    ...mapActions("users", ["handleAuthState"])
  },

  mounted() {
    this.handleAuthState();
  }
};
</script>
