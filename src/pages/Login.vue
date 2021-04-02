<template>
  <q-page>
    <div class="q-pa-md q-mx-auto q-mt-xl" style="max-width: 320px">
      <q-form @submit="log_in" class="q-gutter-md">
        <q-input
          v-model="form.username"
          dense
          rounded
          outlined
          label="Username"
        />
        <q-input
          v-model="form.password"
          dense
          rounded
          outlined
          :type="isPwd ? 'password' : 'text'"
          label="Password"
        >
          <template v-slot:append>
            <q-icon
              :name="isPwd ? 'visibility_off' : 'visibility'"
              class="cursor-pointer"
              @click="isPwd = !isPwd"
            />
          </template>
        </q-input>

        <div class="text-caption text-red text-center">
          {{ error }}
        </div>

        <div class="text-center q-pa-sm">
          <q-btn
            type="submit"
            class="full-width"
            label="Log in"
            color="primary"
          >
            <template v-slot:loading>
              <q-spinner-radio />
            </template>
          </q-btn>
        </div>
      </q-form>
    </div>
  </q-page>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  data() {
    return {
      loading: false,
      isPwd: true,
      form: new Form({
        username: "",
        password: ""
      })
    };
  },

  computed: {
    ...mapState("users", ["error"])
  },

  methods: {
    ...mapActions("users", ["logIn"]),

    log_in() {
      this.loading = true;
      this.logIn(this.form);
    }
  }
};
</script>
