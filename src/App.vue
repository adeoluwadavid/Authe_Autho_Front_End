<template>
  <div id="app">
    <nav class="navbar navbar-expand navbar-dark bg-dark">
      <a href class="navbar-brand" @click.prevent>Adewole</a>
      <div class="navbar-nav mr-auto">
        <li class="nav-item">
          <router-link to="/home" class="nav-link">
            <font-awesome-icon icon="home" />Home
          </router-link>
        </li>
        <li v-if="displayAdminPage" class="nav-item">
          <router-link to="/admin" class="nav-link">Admin Page</router-link>
        </li>
        <li class="nav-item">
          <router-link v-if="currentUser" to="/user" class="nav-link">User Page</router-link>
        </li>
      </div>
      <div v-if="!currentUser" class="navbar-nav ml-auto">
        <li class="nav-item">
          <router-link to="/signup" class="nav-link">
            <font-awesome-icon icon="user-plus" />Sign Up
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/signin" class="nav-link">
            <font-awesome-icon icon="sign-in-alt" />Sign In
          </router-link>
        </li>
      </div>

      <div v-if="currentUser" class="navbar-nav ml-auto">
        <li class="nav-item">
          <router-link to="/profile" class="nav-link">
            <font-awesome-icon icon="user" />
            {{ currentUser.firstName }}
          </router-link>
        </li>
        <li class="nav-item">
          <a class="nav-link" href @click.prevent="SignOut">
            <font-awesome-icon icon="sign-out-alt" />Signout
          </a>
        </li>
      </div>
    </nav>

    <div class="container">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    currentUser() {
      return this.$store.state.auth.user;
    },
    displayAdminPage() {
      if (this.currentUser && this.currentUser.roles) {
        return this.currentUser.roles.includes('ADMIN');
      }

      return false;
    }
  },
  methods: {
    SignOut() {
      this.$store.dispatch('auth/Signout');
      this.$router.push('/signin');
    }
  }
};
</script>