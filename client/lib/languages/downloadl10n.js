#!/usr/bin/env node
const Converter = require('csvtojson').Converter
const request = require('request')

const converter = new Converter({ constructResult: false })
const random = Math.random(0, 10000)
const url = 'https://docs.google.com/spreadsheets/d/1iz5DR-KNJLLOid7rrAWX7YLQp8VKWcBGm5zAYF8bSCI/export?format=csv&single=true&rd=' + random

const Log = {
  info: console.log.bind(console)
}

Log.info('=== Start loading localization ===')

function download () {
  converter.on('record_parsed', function (jsonObj) {
     console.log(jsonObj) //here is your result json object
  })
  request.get(url).pipe(converter)
}
