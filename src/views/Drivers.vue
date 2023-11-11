<template>
<div>
  <Header />
    <div class="container2">
      <div class="izq">
        <img :src="img"/> 
      </div>
      <div class="derecha">
        <p><b>Name : </b> {{ name }}</p>
        <p><b>Driver number :</b> {{ num }}</p>
        <p><b>Team :</b> {{ team }}</p>
        <p> <b>Country :</b> {{ country }}</p>
        <p><b>Podiums :</b> {{ podiums }}</p>
        <p><b>Points:</b> {{ points }}</p>
        <p><b>Grands Prix entered:</b> {{ GP_entred }}</p>
        <p><b>World Championships:</b> {{ World_champion }}</p>
        <p><b>Highest race finish:</b> {{ Highest_race_finish }}(x{{ Highest_race_finish_number }})</p>
        <p><b>Highest grid position:</b> {{ Hightest_grid_position }}</p>
        <p><b>Date of birth:</b> {{ Date_birth }}</p>
        <p><b>Place of birth:</b> {{ Place_birth }}</p>
      </div>
    </div>
 
  <Footer />
</div>
</template>

<script>
import Header from "../components/Header.vue"
import Footer from "../components/footer.vue"
export default {
  components: { Header, Footer },
    mounted(){
    this.drivers();
  },
    data(){
        return {
            apiKey : import.meta.env.VITE_apiKey,
            name: "",
            team: "",
            position : "",
            country: "",
            img: "",
            points: "",
            GP_entred: "",
            World_champion: "",
            points: "",
            podiums : "",
            Highest_race_finish : "",
            Highest_race_finish_number : "",
            Hightest_grid_position : "",
            Date_birth: "",
            Place_birth: "",
            num: ""

        }
        
    },
    methods: {
        drivers(){
            fetch(`https://v1.formula-1.api-sports.io/drivers?id=${this.$route.params.driverID}`,{
	    "method": "GET",
	    "headers": {
		    "x-rapidapi-key": `${this.apiKey}`}
	    })
        .then((response) => response.json())
      .then(data => {
        this.name = data.response[0].name
        this.img = data.response[0].image
        this.num = data.response[0].number
        this.team = data.response[0].teams[0].team.name
        this.country = data.response[0].country.name
        this.podiums = data.response[0].podiums
        this.points = data.response[0].career_points
        this.GP_entred = data.response[0].grands_prix_entered
        this.World_champion = data.response[0].world_championships
        this.Highest_race_finish = data.response[0].highest_race_finish.position
        this.Highest_race_finish_number = data.response[0].highest_race_finish.number
        this.Hightest_grid_position = data.response[0].highest_grid_position
        this.Date_birth = data.response[0].birthdate
        this.Place_birth = data.response[0].birthplace
      })
   
        }
    },
}
</script>

<style>
header{
    display:flex;
    justify-content : space-between;
    height : 75px;
    background-color:rgb(244, 46, 46);
    align-items: center;
    padding:10px;
  
  }
  .logo{
    display:flex;
    font-family: 'Orbitron', sans-serif;
  }
  .logo img{
    height : 50px;
  }

  header button{
    background-color: white;
    font-family: 'Teko', sans-serif;
    height: 30px;
    border-radius:5px;
    font-size: 20px;
  }

  a{
    text-decoration: none;
  }


.pie-pagina{
    width:100%;
    background-color: rgb(244, 46, 46);
}

.pie-pagina .grupo-1{
    width:100%;
    max-width:1200px;
    margin:auto;
    display: grid;
    grid-template-columns: repeat(3,1fr);
    grid-gap:50px;
    padding:45px 0px;

}
.pie-pagina .grupo-1 .box figure{
    width:100%;
    height:100%;
    display:flex;
    justify-content:center;
    align-items: center;
}
.pie-pagina .grupo-1 .box figure img{
    width:250px;
}

.pie-pagina .grupo-1 .box h2{
    color:black;
    margin-bottom:25px;
    font-size:20px;
    font-family: 'Orbitron', sans-serif;
}

.pie-pagina .grupo-1 .box h6{
    color:black;
    margin-bottom: 10px;
    font-family: 'Teko', sans-serif;
    font-size: 15px;
}

.pie-pagina .grupo-1 .red-social a{
    display:inline-block;
    text-decoration: none;
    width:45px;
    height:45px;
    line-height: 45px;
    color:black;
    margin-right:10px;
    background-color: whitesmoke;
    text-align: center;
    transition: all 300ms ease;
    border-radius: 3px;;
}



.pie-pagina .grupo-2{
    padding: 15px 10px;
    text-align: center;
    color:black;
}

.pie-pagina .grupo-2 small{
    text-align: center;
    font-size: 15px;
    font-family: 'Teko', sans-serif;
}
.container2{
  display:flex;
  justify-content: space-around;
  align-content: center;
  margin-top:50px;
  margin-bottom: 50px;
  
}
.container2 .izq img{
  height:300px;
  width:300px;
}

.izq{
  background-color:whitesmoke;
  height : 300px;
  border-radius: 5px;


}

.derecha{
  display:flex;
  flex-wrap:wrap;
  flex-direction:column;
  color:white;
  font-family: 'Teko', sans-serif;
  height : 300px;
  font-size: 20px;
}
.derecha p{
  width: 200px;
}
</style>