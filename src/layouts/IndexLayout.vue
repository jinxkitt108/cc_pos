<template>
  <q-layout view="hHh lpR fFf">

    <q-header elevated class="bg-primary text-white">
      <q-toolbar>
        <q-toolbar-title>
          <q-avatar square>
            <img src="/icons/favicon-96x96.png">
          </q-avatar>
          <span class="text-bold q-ml-sm">POS</span>
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer elevated class="bg-grey-8 text-white">
      <q-toolbar>
        <q-toolbar-title>
          <q-avatar square>
            <img src="/icons/favicon-96x96.png">
          </q-avatar>
          <span class="text-caption q-ml-sm">Developed by CCWeb Group</span>
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>

  </q-layout>
</template>

<script>
export default {
  data () {
    return {

    }
  }
}
</script>
