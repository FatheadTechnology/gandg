<template>
  <div id="guild-and-grace-user-profile">
    <h3>{{fullName}}</h3>
    <input type="text" v-model="fullName">
    <button v-on:click="addName">Add Name</button>
    {{nameFromServer}}
    <button v-on:click="getName">Get Name</button>
    <br>
    <h3>{{chosenColors}}</h3>
    <div v-for="color in colorChoices">
      <span v-on:click="addColorToDB(color)">{{color}}</span>
    </div>

    <button v-on:click="getChosenColors()">get colors</button>
    <h3>chosen colors from server</h3>
    {{chosenColorsFromServer}}
    <button v-on:click="logout">Logout</button>
    <router-link to="/">home</router-link>
  </div>
</template>

<script>
  import firebase from 'firebase'
  import _ from 'lodash'

  export default {
    name: 'hello',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App',
        fullName : '',
        nameFromServer : '',
        colorChoices : ['red','blue','yellow','green'],
        chosenColors : [],
        chosenColorsFromServer : []
      }
    },
    methods: {
      logout: function() {
        firebase.auth().signOut().then(() => {
          this.$router.replace('login')
        })
      },
      addName : function() {
        let userId = firebase.auth().currentUser.uid;
        firebase.database().ref('users/' + userId).update({
          displayName : this.fullName
        });
        console.log('done?')
      },
      getName : function() {
        var userId = firebase.auth().currentUser.uid;
        return firebase.database().ref('/users/' + userId).once('value').then(snapshot => {
          this.nameFromServer = (snapshot.val() && snapshot.val().displayName) || 'Anonymous';
        });
      },
      getChosenColors : function() {
        var userId = firebase.auth().currentUser.uid;
        return firebase.database().ref('/users/' + userId).once('value').then(snapshot => {
          this.chosenColorsFromServer = (snapshot.val() && snapshot.val().chosenColors) || 'Anonymous';
        });
      },
      addColorToDB : function(color){
        if (this.chosenColors !== []){
          this.chosenColors = _.xor(this.chosenColors, [color])
        }

        console.log('chosen colors = ', this.chosenColors)
        let userId = firebase.auth().currentUser.uid;
        firebase.database().ref('users/' + userId).update({
          chosenColors : this.chosenColors
        });
      },
      writeUserData(userName){
        firebase.database().ref('users/' + userId).set({
          username: name,
          email: email,
          profile_picture : imageUrl
        });
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>
