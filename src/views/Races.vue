<template>
<div>
    <Header />
    <div class="container2">
        <div class="izq">
            <img :src="img"/>
        </div>
        <div class="derecha">
            <p><b> Grand Prix Name :</b> {{ gp_name }}</p>
            <p><b>Circuit Name:</b> {{ circuit_name }}</p>
            <p><b>Place:</b> {{ city }},{{ country }}</p>
            <p><b>First Grand Prix:</b> {{ first_gp }}</p>
            <p><b>Number of Laps:</b> {{ laps }}</p>
            <p><b>Circuit Length:</b> {{ circuit_lenght }}</p>
            <p><b>Race Distance:</b> {{ race_distance }}</p>
            <p><b>Lap Record:</b> {{ lap_record_time }}({{ lap_record_person }},{{ lap_record_year }})</p>
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
        this.races();
    },
    data(){
        return{
            apiKey : import.meta.env.VITE_apiKey,
            gp_name: "",
            circuit_name: "",
            img: "",
            city: "",
            country: "",
            first_gp: "",
            laps: "",
            circuit_lenght: "",
            race_distance: "",
            lap_record_time: "",
            lap_record_person: "",
            lap_record_year: ""
        }
    },
    methods:{ races(){
        fetch(`https://v1.formula-1.api-sports.io/circuits?id=${this.$route.params.raceID}`,{
            "method": "GET",
	    "headers": {
		    "x-rapidapi-key": `${this.apiKey}`}
        })
        .then((response) => response.json())
        .then(data => {
            this.gp_name = data.response[0].competition.name
            this.circuit_name = data.response[0].name
            this.img = data.response[0].image
            this.city = data.response[0].competition.location.city
            this.country = data.response[0].competition.location.country
            this.first_gp = data.response[0].first_grand_prix
            this.laps = data.response[0].laps
            this.circuit_lenght = data.response[0].length
            this.race_distance = data.response[0].race_distance
            this.lap_record_time = data.response[0].lap_record.time
            this.lap_record_person = data.response[0].lap_record.driver
            this.lap_record_year = data.response[0].lap_record.year
            /*console.log(this.city)*/
        })
    }}
    
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
  height:300px;
  width:300px;
}

</style>