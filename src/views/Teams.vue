<template>
    <div><Header />
<div class="container2">
    <div>
        <img :src="img"/>
    </div>
    <div class="derecha">
        <p><b> Name :</b> {{ name }}</p>
        <p><b> Base :</b> {{ base }}</p>
        <p><b>Director :</b> {{ director }}</p>
        <p><b>President :</b> {{ president }}</p>
        <p><b> Technical Manager :</b> {{  technical_manager }}</p>
        <p><b>Chassis :</b> {{  chassis }}</p>
        <p><b>Power Unit :</b> {{ power_unit }}</p>
        <p><b> First Team Entry :</b> {{ first_team_entry }}</p>
        <p><b>World Championships :</b> {{ world_champions }}</p>
        <p><b>Highest Race Finish :</b> {{ highest_race_finish }}(x{{ highest_race_finish_number }})</p>
        <p><b>Pole Positions :</b> {{ pole_positions }}</p>
        <p><b>Fastest Laps :</b> {{ fastest_lap }}</p>
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
        this.teams();
    },
    data(){
        return {
            apiKey : import.meta.env.VITE_apiKey,
            img: "",
            name: "",
            base: "",
            president: "",
            director: "",
            technical_manager:"",
            chassis: "",
            power_unit: "",
            first_team_entry:"",
            world_champions:"",
            highest_race_finish:"",
            highest_race_finish_number : "",
            pole_positions:"",
            fastest_lap:"",

        }
    },
    methods:{ teams(){
        fetch(`https://v1.formula-1.api-sports.io/teams?id=${this.$route.params.teamID}`,{
        "method": "GET",
	    "headers": {
		    "x-rapidapi-key": `${this.apiKey}`}
        })
        .then((response) => response.json())
        .then(data => {
            this.name = data.response[0].name
            this.img = data.response[0].logo
            this.base = data.response[0].base
            this.director = data.response[0].director
            this.technical_manager = data.response[0].technical_manager
            this.chassis = data.response[0].chassis
            this.power_unit = data.response[0].engine
            this.first_team_entry = data.response[0].first_team_entry
            this.world_champions = data.response[0].world_championships
            this.highest_race_finish = data.response[0].highest_race_finish.position
            this.highest_race_finish_number = data.response[0].highest_race_finish.number
            this.pole_positions = data.response[0].pole_positions
            this.fastest_lap = data.response[0].fastest_laps
            this.president = data.response[0].president
            /*console.log(this.name)*/

        })

    }
    },
}
</script>

<style>

.container{
  display:flex;
  justify-content: center;
  align-content: center;
  margin-top:50px;
  
}
.container .izq img{
  height:400px;
  width:400px;
}

</style>