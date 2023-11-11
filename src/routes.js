export const routes = [ { path: '/', component: Home },
{ path: "/drivers/:driverID", component: Drivers },
{ path: "/teams/:teamID", component: Teams},
{ path : "/races/:raceID", component : Races},
{path : "/favorites", component : Favorites} ]

import Home from "./views/Home.vue"
import Drivers from "./views/Drivers.vue"
import Teams from "./views/Teams.vue"
import Races from "./views/Races.vue"
import Favorites from "./views/Favorites.vue"