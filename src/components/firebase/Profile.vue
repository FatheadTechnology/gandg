<template>
  <div id="guild-and-grace-user-profile">
    <h3>{{fullName}}</h3>
    <h4>favorites</h4>
    <div v-for="favorite in favorites">
      <router-link :to="{ name: 'PDP', params: { pattern: favorite.pattern, colorway : favorite.colorway }}">
        <img :src="'http://res.cloudinary.com/rfathead/image/upload/v1/test_patterns/'+favorite.pattern+'_'+favorite.colorway" alt="" style="max-width: 100px;">

        product/{{favorite.pattern}}/{{favorite.colorWay}}
      </router-link>
    </div>

    <h4>recently viewed</h4>
    <div v-for="viewed in recentlyViewed">
      <router-link :to="{ name: 'PDP', params: { pattern: viewed.routeParam.pattern, colorway : viewed.routeParam.colorWay }}">
        <img :src="'http://res.cloudinary.com/rfathead/image/upload/v1/test_patterns/'+viewed.routeParam.pattern+'_'+viewed.routeParam.colorway" alt="" style="max-width: 100px;">

        product/{{viewed.routeParam.pattern}}/{{viewed.routeParam.colorway}}
      </router-link>
<!--
      **TODO : MAKE THIS INTO A RECENTLY VIEWED COMPONENT**
-->
    </div>
 <!--   <input type="text" v-model="fullName">
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
    <router-link to="/">home</router-link>-->
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
        chosenColorsFromServer : [],
        recentlyViewed : [],
          favorites : []
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
    },
    mounted(){
      var userId = firebase.auth().currentUser.uid;
      return firebase.database().ref('/users/' + userId).once('value').then(snapshot => {
        this.recentlyViewed = (snapshot.val() && snapshot.val().recentlyViewed) || '';
        this.favorites = (snapshot.val() && snapshot.val().favorites) || '';
      });
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
