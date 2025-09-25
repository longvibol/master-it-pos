<template>
  <div>
    <q-markup-table>
      <thead class="bg-primary text-white">
        <tr>
          <th class="text-left">No</th>
          <th class="text-left">Username</th>
          <th class="text-left">Email</th>
          <th class="text-left">Phone</th>
          <th class="text-left">Role</th>
          <th class="text-left">Actions</th>
        </tr>
      </thead>
      <!-- <tbody>
        <tr v-for="(user, index) in users" :key="user._id">
          <td class="text-left">{{ index + 1 }}</td>
          <td class="text-left">{{ user.username }}</td>
          <td class="text-left">{{ user.email }}</td>
          <td class="text-left">{{ user.phone }}</td>
          <td class="text-left">{{ user.role }}</td>
          <td class="text-left">
            <q-btn
              color="red"
              dense
              icon="delete"
              rounded
              @click="handleDelete(user._id)"
            />
            <q-btn
              color="info"
              dense
              icon="edit"
              rounded
              @click="habndleEdit(user)"
            />
          </td>
        </tr>
      </tbody> -->
      <tbody>
        <tr v-for:="(user, index) in users" :key="index">
          <td class="text-left">{{ index+1 }}</td>
          <td class="text-left">{{user.username}}</td>
          <td class="text-left">{{user.email}}</td>
          <td class="text-left">{{user.phone}}</td>
          <td class="text-left">{{user.role}}</td>
          <td class="text-left">
            <q-btn
              color="red"
              dense
              icon="delete"
              round
              @click="handleDelete(user._id)"
            />
            <q-btn
              color="info"
              dense
              icon="edit"
              class="q-ml-sm"
              round
              @click="habndleEdit(user)"
            />
          </td>
        </tr>
      </tbody>
    </q-markup-table>
  </div>
</template>

<script>
export default {
  props: {
    users: {
      type: Array,
      default: null,
      required: true,
    },
  },
  methods: {
    handleDelete(id) {
      console.log("delete ",id);
      this.$emit("delete ", id);
    },
    habndleEdit(user) {
      console.log("edit ",user);
      this.$emit("edit ", user);
    },
  },
};
</script>

<style></style>
