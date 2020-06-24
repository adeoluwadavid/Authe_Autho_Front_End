<template>
  <div class="container">
    <header class="jumbotron">
      <h3>{{content}}</h3>
    </header>
  </div>
</template>

<script>
import Authorization from '../services/authorization';

export default {
  name: 'User',
  data() {
    return {
      content: ''
    };
  },
  mounted() {
    Authorization.getUserPage().then(
      response => {
        this.content = response.data;
        console.log(this.content)
      },
      error => {
        this.content =
          (error.response && error.response.data) ||
          error.message ||
          error.toString();

          console.log(this.content)
      }
    );
  }
};
</script>