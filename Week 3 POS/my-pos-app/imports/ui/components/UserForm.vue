<template>
  <div>
    <div class="row justify-around q-ma-sm">
      <div class="col-md-5 col-xs-12 col-sm-4 q-ma-md">
        <q-input outlined v-model="form.username" label="Username" />
      </div>
      <div class="col-md-5 col-xs-12 col-sm-4 q-ma-md">
        <q-input outlined v-model="form.email" label=" Email" />
      </div>
      <div class="col-md-5 col-xs-12 col-sm-4 q-ma-md">
        <q-input outlined v-model="form.phone" label=" Phone" />
      </div>
      <div class="col-md-5 col-xs-12 col-sm-4 q-ma-md">
        <q-select
          outlined
          v-model="form.role"
          :options="roles"
          label="Role"
          map-options
          emit-value
          option-value="value"
        />
      </div>
      <div class="col-10 q-ma-md" v-if="updateDoc">
        <q-checkbox v-model="reset" label="Reset Password" />
      </div>
    </div>
    <div
      class="row justify-around q-ma-sm"
      vif="!
updateDoc || reset"
    >
      <div class="col-md-5 col-xs-12 col-sm-4 q-ma-md">
        <q-input
          outlined
          v-model="form.password"
          type="password"
          label="Password"
        />
      </div>
      <div class="col-md-5 col-xs-12 col-sm-4 q-ma-md">
        <q-input
          outlined
          vmodel="
confirm"
          type="password"
          label="Confirm"
        />
      </div>
    </div>
    <div class="q-ma-md text-center">
      <q-btn
        :color="updateDoc ? 'info' : 'primary'"
        :label="updateDoc ? 'Update' : 'Submit'"
        @click="handleSubmit"
      >
        <q-tooltip class="bg-white text-primary">(Ctrl + S) </q-tooltip>
      </q-btn>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    updateDoc: {
      default: null,
      type: Object,
    },
  },
  data() {
    return {
      form: {
        username: null,
        email: null,
        phone: null,
        role: null,
        password: null,
      },
      reset: false,
      confirm: null,
      roles: [
        { label: "Admin", value: "admin" },
        { label: "Sale", value: "sale" },
        { label: "User", value: "user" },
      ],
    };
  },
  mounted() {
    if (this.updateDoc) {
      this.form = this.updateDoc;
    }
    window.addEventListener("keydown", this.handleKeydown);
  },
  beforeUnmount() {
    window.removeEventListener("keydown", this.handleKeydown);
  },
  methods: {
    handleSubmit() {
      console.log("Form submit:", this.form);
      this.$emit("submit", this.form);

      if (this.form.password === this.confirm && this.form.password != null) {
        if (this.reset) {
          this.form.reset = this.reset;
        }
      }

      if (this.updateDoc) {
        // code update
      }

      // ✅ Show success notification
      this.$q.notify({
        type: "positive",
        message: `Submit success! Username: ${this.form.username}`,
        timeout: 3000,
        position: "top",
      });

      this.$emit("close");
    },
    handleKeydown(event) {
      if (event.ctrlKey && event.key.toLowerCase() === "s") {
        event.preventDefault(); // prevent browser save dialog
        this.handleSubmit();
      }
    },
  },
};
</script>
