<template>
  <div>
    <q-toolbar>
      <q-btn flat to="/">Home</q-btn>
      <q-btn flat to="/about">About</q-btn>
      <q-btn flat to="/user">User</q-btn>
      <q-btn flat to="/customer">Customer</q-btn>
    </q-toolbar>

    <router-view /> <!-- ✅ This renders the current page -->
  </div>
</template>

<script setup></script>