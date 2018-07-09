<template>
  <div class="login"  id="guild-and-grace-login">

    <h1>Sign In</h1>
    <input type="text" v-model="email" placeholder="Email" id="email-form-input"><br>
    <input type="password" v-model="password" placeholder="Password" id="password-form-input"><br>

    <div class="btn-center-container">
      <div class="btn primary-btn" v-on:click="signIn" id="sign-in-button">Sign In</div>
    </div>
    <p>You don't have an account ? You can <router-link id="sign-up-link" to="/sign-up">create one</router-link></p>
  </div>
</template>

<script>
  import firebase from 'firebase'

  export default {
    name: 'login',
    data: function() {
      return {
        email: '',
        password: ''
      }
    },
    methods: {
      signIn: function() {
        firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(
          (user) => {
            console.log(user)
            this.$router.replace('profile2')
          },
          (err) => {
            alert('Oops. ' + err.message)
          }
        );
      }
    }
  }
</script>

<style scoped>  /* "scoped" attribute limit the CSS to this component only */
.login {
  margin-top: 40px;
}
input {
  margin: 10px 0;
  width: 20%;
  padding: 15px;
}
button {
  margin-top: 20px;
  width: 10%;
  cursor: pointer;
}
p {
  margin-top: 40px;
  font-size: 13px;
}
p a {
  text-decoration: underline;
  cursor: pointer;
}
</style>
