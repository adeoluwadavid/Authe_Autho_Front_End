<template>
  <div class="col-md-12">
    <div class="card card-container">
      <img
        id="profile-img"
        src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
        class="profile-img-card"
      />
      <form name="form" v-on:submit.prevent="Signup">
        <div v-if="successful">
          <div class="form-group">
            <label for="firstName">First Name</label>
            <input
              type="text"
              v-model="user.firstName"
              v-validate="'required|min:3|max:20'"
              name="firstName"
              class="form-control"
            />
          </div>
          <div
            v-if="submitted && errors.has('firstName')"
            class="alert-danger"
          >{{errors.first('firstName')}}</div>

          <div class="form-group">
            <label for="lastName">Last Name</label>
            <input
              type="text"
              v-model="user.lastName"
              v-validate="'required|min:3|max:20'"
              name="lastName"
              class="form-control"
            />
          </div>
          <div
            v-if="submitted && errors.has('lastName')"
            class="alert-danger"
          >{{errors.first('lastName')}}</div>

          <div class="form-group">
            <label for="username">Username</label>
            <input
              type="text"
              v-model="user.username"
              v-validate="'required|min:3|max:20'"
              name="username"
              class="form-control"
            />
          </div>
          <div
            v-if="submitted && errors.has('username')"
            class="alert-danger"
          >{{errors.first('username')}}</div>

          <div class="form-group">
            <label for="email">Email</label>
            <input
              type="email"
              v-model="user.email"
              v-validate="'required|email|max:50'"
              name="email"
              class="form-control"
            />
          </div>
          <div
            v-if="submitted && errors.has('email')"
            class="alert-danger"
          >{{errors.first('email')}}</div>

          <div class="form-group">
            <label for="address">Address</label>
            <input
              type="text"
              v-model="user.address"
              v-validate="'required|min:3|max:70'"
              name="Address"
              class="form-control"
            />
          </div>
          <div
            v-if="submitted && errors.has('address')"
            class="alert-danger"
          >{{errors.first('address')}}</div>

          <div class="form-group">
            <label for="password">Password</label>
            <input
              type="password"
              v-model="user.password"
              v-validate="'required|min:3|max:20'"
              name="password"
              class="form-control"
            />
          </div>
          <div
            v-if="submitted && errors.has('password')"
            class="alert-danger"
          >{{errors.first('password')}}</div>

          <div class="form-group">
            <button class="btn btn-primary btn-block">Sign Up</button>
          </div>
        </div>
      </form>
      <div
        v-if="message"
        class="alert"
        :class="successful ? 'alert-success' : 'alert-success'"
      >{{message}}</div>
    </div>
  </div>
</template>

<script>
import User from "../model/user";
export default {
  name: "Signup",
  data() {
    return {
      user: new User("", "", "", "", "", ""),
      submitted: false,
      successful: true,
      message: ''
    };
  },
  computed: {
    loggedIn() {
      return this.$store.state.auth.status.loggedIn;
    }
  },
  mounted() {
    if (this.loggedIn) {
      this.$router.push("/profile");
    }
  },
  methods: {
    Signup() {
      this.message = "";
      this.submitted = true;
      this.$validator.validate().then(isValid => {
        if (isValid) {
          this.$store.dispatch("auth/Signup", this.user).then(
            data => {
              this.message = data.message;
              this.successful = false;
              
            },
            () => {
              this.message = "User registered successfully!"
                // (error.response && error.response.data) ||
                // error.message ||
                // error.toString();
              this.successful = false;
            }
          );
        }
      });
    }
  }
};
</script>

<style scoped>
label {
  display: block;
  margin-top: 10px;
}

.card-container.card {
  max-width: 350px !important;
  padding: 40px 40px;
}

.card {
  background-color: #f7f7f7;
  padding: 20px 25px 30px;
  margin: 0 auto 25px;
  margin-top: 50px;
  -moz-border-radius: 2px;
  -webkit-border-radius: 2px;
  border-radius: 2px;
  -moz-box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
  -webkit-box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
}

.profile-img-card {
  width: 96px;
  height: 96px;
  margin: 0 auto 10px;
  display: block;
  -moz-border-radius: 50%;
  -webkit-border-radius: 50%;
  border-radius: 50%;
}
</style>