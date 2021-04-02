<template>
  <q-item clickable :to="link" v-ripple>
    <q-item-section avatar>
      <q-icon :name="icon" />
    </q-item-section>

    <q-item-section>
      <q-item-label>{{ title }}</q-item-label>
    </q-item-section>
  </q-item>
</template>

<script>
export default {
  name: "AdminLink",
  props: {
    title: {
      type: String,
      required: true
    },

    link: {
      type: String,
      default: ""
    },

    icon: {
      type: String,
      default: ""
    }
  }
};
</script>
