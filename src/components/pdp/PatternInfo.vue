<template>
  <div class="pattern-info">
    <h1>{{info.DisplayName}}</h1>
    <p>By
      <router-link :to="info.ArtistUrl">{{info.ArtistDisplayName}}</router-link>
    </p>
    <h3>{{info.PrimaryCategory.DisplayName}}</h3>
    <p>{{info.Description}}</p>
  </div>
</template>

<script>
export default {
  props: ["info"]
};
</script>
