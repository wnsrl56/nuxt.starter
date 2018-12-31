import Vue from 'vue'
import util  from '~~/assets/js/util.js'

const _ = Symbol('_');

util[_] = util;

Vue.mixin({
  methods: util[_]
});
