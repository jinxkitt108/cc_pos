<template>
  <q-page padding>
    <q-btn
      @click="user_dialog = true"
      color="primary"
      icon="person_add"
      label="Add User"
    />

    <q-dialog v-model="user_dialog">
      <q-card style="width: 400px">
        <q-card-section>
          <div class="text-h6">{{ edit_mode ? "Edit" : "Add" }} User</div>
        </q-card-section>
        <ValidationObserver v-slot="{ handleSubmit }">
          <q-form @submit="edit_mode ? update_user() : add_user()" class="q-gutter-md">
            <q-card-section>
              <q-input
                :rules="[val => !!val || 'Field is required']"
                v-model="user_form.name"
                outlined
                filled
                dense
                label="Name"
                lazy-rules
              />
              <ValidationProvider
                name="Email"
                rules="required|email"
                v-slot="v"
              >
                <q-input
                  v-model="user_form.email"
                  outlined
                  dense
                  label="Email"
                  :error="v.errors.length > 0"
                  :error-message="v.errors[0]"
                />
              </ValidationProvider>
              <q-separator />
            </q-card-section>

            <q-card-section class="bg-grey-2">
              <div class="q-mx-auto" style="width: 250px">
                <q-input
                  :rules="[val => !!val || 'Field is required']"
                  v-model="user_form.username"
                  outlined
                  dense
                  hint="Username"
                  lazy-rules
                />
                <q-input
                  :rules="[val => !!val || 'Field is required']"
                  v-model="user_form.password"
                  outlined
                  dense
                  hint="Password"
                  lazy-rules
                />
              </div>
            </q-card-section>

            <q-card-actions align="right">
              <q-btn flat type="submit" color="primary" label="Save" />
              <q-btn
                @click="user_form.reset()"
                flat
                color="primary"
                label="Clear"
              />
              <q-btn flat label="Cancel" v-close-popup />
            </q-card-actions>
          </q-form>
        </ValidationObserver>
      </q-card>
    </q-dialog>

    <!-- Users Table -->
    <q-table class="q-mt-md" title="Users" :data="users" :columns="columns">
      <template v-slot:body="props">
        <q-tr :props="props">
          <q-td key="name" :props="props">
            {{ props.row.name }}
          </q-td>
          <q-td key="email" :props="props">
            {{ props.row.email }}
          </q-td>
          <q-td key="created_at" :props="props">
            {{ formatDate(props.row.created_at) }}
          </q-td>
          <q-td key="actions" :props="props">
            <div class="q-gutter-md">
              <q-btn
                @click="edit_user(props.row)"
                color="primary"
                size="sm"
                round
                icon="edit"
              />
              <q-btn color="red" size="sm" round icon="delete" />
            </div>
          </q-td>
        </q-tr>
      </template>
    </q-table>
  </q-page>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  data() {
    return {
      user_dialog: false,
      edit_mode: false,
      user_form: new Form({
        id: "",
        name: "",
        email: "",
        username: "",
        password: ""
      }),

      //Users Table
      columns: [
        {
          name: "name",
          align: "center",
          label: "Name",
          field: "name",
          sortable: true
        },
        {
          name: "email",
          align: "center",
          label: "Email",
          field: "email",
          sortable: true
        },
        {
          name: "created_at",
          align: "center",
          label: "Registered",
          field: "created_at",
          sortable: true
        },
        {
          name: "actions",
          align: "center",
          label: "Actions",
          field: "actions"
        }
      ]
    };
  },

  computed: {
    ...mapState("users", ["users"])
  },

  methods: {
    ...mapActions("users", ["addUser", "setUsersRef", "updateUser"]),

    formatDate(timestamp) {
      let date = new Date(timestamp.seconds * 1000);
      return quasarDate.formatDate(date, "ddd MMMM D, YYYY | h:mm a");
    },

    add_user() {
      this.addUser(this.user_form);
    },

    update_user() {
      this.updateUser(this.user_form);
    },

    edit_user(user) {
      console.log(user);
      this.edit_mode = true;
      this.user_form.fill(user);
      this.user_dialog = true;
    }
  },

  created() {
    this.setUsersRef();
  }
};
</script>
