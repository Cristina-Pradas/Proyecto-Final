import {defineStore} from 'pinia';

export const useFavorites = defineStore('favorites',{
    state: ()=> ({
        favoriteDrivers:[],
        favoriteTeams : [],
        favoriteRaces : [],
    })

});
