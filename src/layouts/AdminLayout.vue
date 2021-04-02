<template>
  <q-layout view="hHh Lpr fFf">
    <!-- Be sure to play with the Layout demo on docs -->

    <!-- (Optional) The Header -->
    <q-header elevated>
      <q-toolbar>
        <q-btn flat round dense icon="menu" @click="leftDrawer = !leftDrawer" />
        <q-toolbar-title class="text-bold">
          Admin Dashboard
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <!-- (Optional) The Footer -->
    <q-footer class="q-pa-sm">
      <div>
        This is the CC POS Admin Dashboard.
      </div>
    </q-footer>

    <!-- (Optional) A Drawer; you can add one more with side="right" or change this one's side -->
    <q-drawer
      v-model="leftDrawer"
      side="left"
      bordered
      content-class="bg-grey-2"
    >
      <!-- QScrollArea is optional -->
      <q-scroll-area class="fit q-pa-sm">
        <q-list>
          <AdminLink v-for="(link, i) in adminLinks" :key="i" v-bind="link" />
          <q-item @click="logOut" class="q-mt-md" clickable v-ripple>
            <q-item-section avatar>
              <q-icon name="logout" />
            </q-item-section>

            <q-item-section>
              <q-item-label class="text-red">Log Out</q-item-label>
            </q-item-section>
          </q-item>
        </q-list>
      </q-scroll-area>
    </q-drawer>

    <q-page-container>
      <!-- This is where pages get injected -->
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import AdminLink from "components/AdminLink.vue";
import { mapActions } from "vuex";

const linksData = [
  {
    title: "Home",
    icon: "home",
    link: "/admin/home"
  },
  {
    title: "User Management",
    icon: "people_alt",
    link: "/admin/users"
  }
];

export default {
  components: { AdminLink },

  data() {
    return {
      leftDrawer: true,
      adminLinks: linksData
    };
  },
  methods: {
    ...mapActions("users", ["logOut"])
  }
};
</script>
