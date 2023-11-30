import './assets/main.css'
import 'vant/lib/index.css'

import { createApp } from 'vue'
import App from './App.vue'
import { Tab, Tabs, Cell, CellGroup, Row, Col, Card } from 'vant'

createApp(App).use(Tab).use(Tabs).use(Cell).use(CellGroup).use(Row).use(Col).use(Card).mount('#app')
