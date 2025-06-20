const express = require('express')
const cors = require('cors')
const Employee = require('./models/Employee')
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://dsciplegenos:CSGO....@rskillmatrixcluster.rygmwyw.mongodb.net/rSkillMatrix?retryWrites=true&w=majority&appName=RSkillMatrixCluster')
.then(() => {console.log('✅ Connected to MongoDB Atlas')
console.log('🧠 Connected to DB:', mongoose.connection.name)
})
.catch((err) => console.error('❌ MongoDB connection error:', err))
.then(() => console.log('MongoDB connected'))
.catch(err => console.log('MongoDB connection error:', err));




const app = express()
const cors = require("cors");

app.use(cors())
const PORT = 8000
app.get('/api/employees', async (req, res) => {
  try {
    const employees = await Employee.find(); // fetch all from MongoDB
    console.log('Fetched employees:', employees);
    res.json(employees);
  } catch (err) {
    console.error('Error fetching employees:', err);
    res.status(404).json({ message: 'Error fetching employees' });
  }
})

app.get('/', (req , res) => {
    res.send('Backend is working!')
})



app.listen(PORT, ()=>{ console.log(`server is running on port ${PORT}`)})