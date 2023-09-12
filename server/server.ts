import express from 'express'
import path from 'path'
import fs from 'fs'
import { Data } from '../server/common/Data'
import { Datatwo } from './common/Datatwo'

const dataset: Data[] = require('./testdata.json')
const datasettwo: Datatwo[] = require('./testdatatwo')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

server.use('/api/data', (req, res) => {
  try {
    res.status(200)
    res.json(datasettwo)
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' })
  }
})

export default server
