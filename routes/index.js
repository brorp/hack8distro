const express = require('express')
const route = express.Router()
const Controller = require('../controllers/controller')

route.get('/') // landing page

// ADD USER FORM
route.get('/add-user') // add user (form)
route.post('/add-user')

// PRODUCT PAGE
route.get('/products/:UserId') // product page (habis login)

route.get('/products/:UserId/edit/:id') // dari button edit product
route.post('/products/:UserId/edit/:id')
route.get('/products/:UserId/add/:id') // dari button add product
route.post('/products/:UserId/add/:id')

// PROFILE PAGE
route.get('/profiles/:UserId') //  dari button see profile by id
route.get('/profiles/:UserId/edit') // dari /profiles/:id ada button edit
route.post('/profiles/:UserId/edit')

route.get('/products/:UserId/delete/:id') // dari button delete product by id
route.get('/profiles/min-stock/:id')// dari button (-) stock by id

module.exports = route