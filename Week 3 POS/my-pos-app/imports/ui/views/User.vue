<template>
  <div class="q-pa-md">
    <q-dialog
      v-model="dialog"
      persistent
      :maximized="true"
      transition-show="slide-up"
      transition-hide="slide-down"
    >
      <q-card class="bg-white">
        <q-bar>
          <q-space />

          <q-btn
            dense
            flat
            icon="close"
            class="text-white bg-red"
            @click="dialog = false"
            round
          >
            <q-tooltip class="bg-white text-primary">Close (ESC)</q-tooltip>
          </q-btn>
        </q-bar>

        <user-form @submit="handleSubmit" />
      </q-card>
    </q-dialog>

    <q-btn
      dense
      icon="add"
      color="primary"
      round
      class="q-mb-sm"
      @click="handleAdd"
    >
      <q-tooltip class="bg-white text-primary"> Add (Ctrl + A) </q-tooltip>
    </q-btn>

    <user-table :users="users" @delete="handleDelete" @edit="handleEdit" />
  </div>
</template>

<script>
import UserForm from "../components/UserForm.vue";
import UserTable from "../components/UserTable.vue";

export default {
  components: { UserForm, UserTable },
  data() {
    return {
      users: [
        {
          _id: "01",
          username: "john_doe",
          email: "john@gmial.com",
          phone: "0123456789",
          role: "admin",
        },
        {
          _id: "02",
          username: "dara",
          email: "dara@gmial.com",
          phone: "0123456789",
          role: "admin",
        },
        {
          _id: "03",
          username: "vibol",
          email: "vibol@gmial.com",
          phone: "0123456789",
          role: "admin",
        },
      ],
      dialog: false,
    };
  },

  methods: {
    handleSubmit(doc) {
      this.users.push(doc);
      this.dialog = false;
    },
    handleAdd() {
      this.dialog = true;
    },
    handleDelete(id) {
      console.log("Page delete", id);
    },
    handleEdit(user) {
      console.log("Page edit", user);
    },
    handleKeydown(event) {
      if (event.key === "Escape" && this.dialog) {
        this.dialog = false;
      }

      // Ctrl + A shortcut
      if (event.ctrlKey && event.key.toLowerCase() === "a") {
        event.preventDefault(); // prevent default browser select-all
        this.handleAdd();
      }
    },
  },

  mounted() {
    window.addEventListener("keydown", this.handleKeydown);
  },

  beforeUnmount() {
    window.removeEventListener("keydown", this.handleKeydown);
  },
};
</script>

<style></style>
