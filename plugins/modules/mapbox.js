/*
import Vue from 'vue'
import VueMapbox, { MglMap, MglMarker } from 'vue-mapbox'
import Mapbox from 'mapbox-gl'

Vue.use(VueMapbox, { mapboxgl: Mapbox })
Vue.component('MglMap', MglMap)
Vue.component('MglMarker', MglMarker)

*/

import Vue from 'vue'
import { MglMap, MglMarker, MglNavigationControl } from 'vue-mapbox'
import Mapbox from 'mapbox-gl'

Vue.component('MglMap', MglMap)
Vue.component('MglMarker', MglMarker)
Vue.component('MglNavigationControl', MglNavigationControl)

Vue.prototype.$mapbox = Mapbox
