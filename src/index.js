import { createApp } from 'vue'
import { formartDate } from '@/utils/index';
import { createAEl } from '@/components/a';
import { createBEl } from '@/components/b';

import './assets/less/index.less'
import './assets/css/index.css'

import VueComponent from '@/vue/index'

const data = formartDate('2019-01-01')

console.log(data)

createAEl()
createBEl()

createApp(VueComponent).mount('#app')

const foo = () => 'foo'

console.log(foo())
