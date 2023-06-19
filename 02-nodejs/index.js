'use strict'

const express = require('express')
const User = require('./models/User')
const csvWriter = require('csv-write-stream')

// Setup Express.js app
const app = express()

app.get('/users', (req, res) => {
  try {
    // Create a read stream from the database
    const userStream = User.find().cursor()

    // Set up the response headers to inform the client that we are sending a CSV file
    res.setHeader('Content-Type', 'text/csv')
    res.setHeader('Content-Disposition', 'attachment; filename=users.csv')

    // Create CSV stream with csv-write-stream
    const writer = csvWriter({ headers: ['id', 'name', 'email'] })
    writer.pipe(res)

    // Write each user obtained from the stream to the CSV file
    userStream.on('data', (user) => {
      writer.write({
        id: user._id,
        name: user.name,
        email: user.email
      })
    })

    // Ends writing to the CSV file when all users have been processed
    userStream.on('end', () => writer.end())
  } catch (error) {
    console.error(error)
    res.status(500).send('There was an error trying to obtain the users')
  }
})

app.listen(3000)
