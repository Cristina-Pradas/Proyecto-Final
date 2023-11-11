<template>
  <div>
  <Header />
    <div class="drivers">
    <div v-for="driver in driversfav" class="card">
      <button><img src="https://cdn-icons-png.flaticon.com/512/55/55299.png"/> </button>
      <router-link :to="`/drivers/${driver.id}`" >
        <p>{{ driver.name }}</p>
      </router-link>
      <div v-for="team in teamsfav" class="card">
  <button><img src="https://cdn-icons-png.flaticon.com/512/55/55299.png"/> </button>
  <router-link :to="`/teams/${team.id}`">
    <p>{{ team.name }}</p>
  </router-link>
  <div v-for="race in racesfav" class="card">
    <button><img src="https://cdn-icons-png.flaticon.com/512/55/55299.png"/> </button>
    <router-link :to="`/races/${race.id}`">
      <p>{{ race.name }}</p>
    </router-link>
  </div>
    </div>
  </div>
  <Footer />
</div>
</div>
</template>
<script>
import { useFavorites} from "../store/favoritos.js"
import Header from "../components/Header.vue"
import Footer from "../components/footer.vue"
export default {
  components: { Header, Footer },
    setup(){
    const favoritesStore = useFavorites();
    return {favoritesStore};

  },
  data() {
    return {
      drivers: [],
      season : 2023,
      apiKey : import.meta.env.VITE_apiKey,
      teams : [],
      races : [],
    };
  },
  computed : {
    driversfav(){
        return this.favoritesStore.favoriteDrivers;
    
    },
    teamsfav(){
        return this.favoritesStore.favoriteTeams;
    },
    teamsfav(){
        return this.favoritesStore.favoriteRaces;
    },

  }
    
}
</script>

<style >

</style>