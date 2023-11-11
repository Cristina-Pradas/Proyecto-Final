<template>
<div>
  <Header />
<body>
  <div class="bigdiv">
    <div class="container">
        <img src="https://e00-elmundo.uecdn.es/assets/multimedia/imagenes/2018/09/14/15369524830111.jpg" alt="F1">
        <div class="texto">
            <p>“If you no longer go for a gap that exists, you’re no longer a racing driver.”</p>
            <p>-Ayrton Senna</p>
        </div>
    </div>
  </div>



<h1>DRIVERS</h1>
<div class="drivers">
    <div v-for="driver in drivers" class="card">
      <button @click="addFavoritesD(driver)"><img src="https://cdn-icons-png.flaticon.com/512/55/55299.png"/> </button>
      <router-link :to="`/drivers/${driver.id}`" >
        <p>{{ driver.name }}</p>
      </router-link>
    </div>
</div>

<h1>TEAMS</h1>
<div class="drivers">
 <div v-for="team in teams" class="card">
  <button @click="addFavoritesT(team)"><img src="https://cdn-icons-png.flaticon.com/512/55/55299.png"/> </button>
  <router-link :to="`/teams/${team.id}`">
    <p>{{ team.name }}</p>
  </router-link>
 </div>
</div>

<h1>RACES</h1>
<div class="drivers">
  <div v-for="race in races" class="card">
    <button @click="addFavoritesR(race)"><img src="https://cdn-icons-png.flaticon.com/512/55/55299.png"/> </button>
    <router-link :to="`/races/${race.id}`">
      <p>{{ race.name }}</p>
    </router-link>
  </div>
</div>


</body> 
<div>
  <Footer />
</div>

</div>
</template>

<script >
import { useFavorites} from "../store/favoritos.js"
import Header from "../components/Header.vue"
import Footer from "../components/footer.vue"
export default {
  components: { Header, Footer },
  mounted(){
    this.getDrivers();
    this.getTeams();
    this.getRaces();
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
  setup(){
    const favoritesStore = useFavorites();
    return {favoritesStore};

  },
  methods: {
    getDrivers() {
      fetch(`https://v1.formula-1.api-sports.io/rankings/drivers?season=${this.season}`, {
	    "method": "GET",
	    "headers": {
		    "x-rapidapi-key": `${this.apiKey}`
	    }
      })
      .then((response) => response.json())
      .then(data => {
        for (let i = 0; i <= 21; i++) {
            this.drivers.push({
              id :data.response[i].driver.id,
              name : data.response[i].driver.name});
        };
        /*console.log(this.drivers);*/
      })
      .catch(err => {
	      console.log(err);
      });
    },
    getTeams() {
      fetch(`https://v1.formula-1.api-sports.io/rankings/teams?season=${this.season}`, {
	    "method": "GET",
	    "headers": {
		    "x-rapidapi-key": `${this.apiKey}`
	    }
      })
      .then((response) => response.json())
      .then(data => {
        for (let i = 0; i <= 9; i++) {
            this.teams.push({
              id: data.response[i].team.id,
              name : data.response[i].team.name});
          };
        /*console.log(this.teams);*/
      })
      .catch(err => {
	      console.log(err);
      });
    },
    getRaces() {
  fetch(`https://v1.formula-1.api-sports.io/races?season=${this.season}&type=race`, {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": `${this.apiKey}`
	}
})
.then((response) => response.json())
.then(data => {

  for (let i = 0; i <= 22; i++) {
            this.races.push({
              id :data.response[i].competition.id,
              name :data.response[i].competition.name
            });
          };
          	/*console.log(this.races);*/
})
.catch(err => {
	console.log(err);
});
  
    },
    addFavoritesD(driver){
      this.favoritesStore.favoriteDrivers.push(driver)
    },
    addFavoritesT(team){
      this.favoritesStore.favoriteDrivers.push(team)
    },
    addFavoritesR(race){
      this.favoritesStore.favoriteDrivers.push(race)
    }

   
  
  },
};
</script>


<style>
@import url('https://fonts.googleapis.com/css2?family=Orbitron&family=Teko:wght@300&display=swap');
body{
    margin: 0;
    background-color: #1F1F1F
    
  }

  a{
    text-decoration: none;
  }
  .container{
    position:relative;
    display:inline-block;
    
    
    
  }
  .container img{
    width:100%;
    height:auto;
    text-align:center;
    filter: brightness(50%);
  }

  .texto{
    position: absolute;
    color:white;
    top:50%;
    left:40%;
    font-size: 42px;
    font-weight: 600;
    display: flex;
    flex-direction:column;
    transform: translate(-30%,-50%);
  }

.bigdiv{
    text-align: center;
}


.drivers{
    display:flex;
    flex-wrap: wrap;
    padding-bottom: 50px;
}

.card{
    display:flex;
    justify-content: center;
    align-items: center;
    width:15%;
    padding:5px;
    margin:20px;
    border-radius:6px;
    background:whitesmoke;
    box-shadow: 0px 1px 15px rgb(244, 46, 46);
    font-family: 'Teko', sans-serif;
    font-size: 20px;
    
}

.card p{
  color: black;
  font-weight: 600;

}
.card  img{
    height:50px;
    width:55px;
}
 button{
    border:none;
    background-color: whitesmoke;
}
h1{
    font-family: 'Orbitron', sans-serif;
    color:white;
    margin-left:20px;
}

</style>
