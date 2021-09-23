const { User, Profile, Category, Product } = require('../models/index')
const { Op } = require('sequelize')

class Controller {
// HOME PAGE
    static home(req,res){
        Product.findAll()
        .then(data => {
            res.render('home', {data: data})
        })
        .catch(error => {
            res.send(error)
        })
    }

// ADD USER

    static register(req,res){
        User.findAll()
        .then(data => {
            res.render('registerForm', {data: data})
        })
        .catch(error => {
            res.send(error)
        })
    }

    static register(req,res){
        let {username, password, email} = req.body
        User.create({username, password, email})
    }

    static productList(req, res){
        Product.findAll( { where: {
            UserId: req.params.id
            }
        })
        .then(data => {
            res.render('product-page', {data: data}) // page habis login //
        })
        .catch(error => {
            res.send(error)
        })
    }

// PRODUCT 

    static productAddForm(req, res){
        Product.findAll({
            include: [
                {model: Category}
            ]
        })
        .then(data => {
            res.render('product-add-form', {data: data}) 
        })
        .catch(error => {
            res.send(error)
        })
    }

    static productAddPost(req, res){
        let {productName, imageUrl, description, price, stock, CategoryId} = req.body
        Product.create({productName, imageUrl, description, price, stock, CategoryId},
            {
            where: {
                UserId: req.params.id
            }
        })
        .then(data => {
            res.redirect('/products') 
        })
        .catch(error => {
            res.send(error)
        })
    }

    static productEditForm(req, res){
        Product.findByPk({ 
            where: {
                UserId: req.params.id
                }
            })
        .then(data => {
            res.render('product-edit-form', {data: data}) 
        })
        .catch(error => {
            res.send(error)
        })
    }

    static productEditPost(req,res){
        let {productName, imageUrl, description, price, stock, CategoryId} = req.body
        Product.update({productName, imageUrl, description, price, stock, CategoryId}, 
        {
          where: {
            UserId: req.params.id
          }
        })
        .then(data => {
            res.redirect('/products') 
        })
        .catch(error => {
            res.send(error)
        })
    }

    static deleteProduct(req,res){
        Product.destroy(
            {
                where: {
                  id: req.params.id
                }
              }
        )
    }

    static minStock(req,res){
        Product.decrement('stock', {
            where: {
              id: req.params.id,
              stock: {
                [Op.gt]: 0
              }
            }
          })
            .then(() => res.redirect('/products'))
            .catch(err => res.send(err))
    }

// PROFILES

    static profileUserId(req,res){
        Profile.findByPk({ 
            where: {
                UserId: req.params.id
            }
        })
        .then((data) => res.render('profile-page', {data}))
        .catch(err => res.send(err))
    }

    static profileEditForm(req,res){

    }

    static profileEditPost(req,res){
        let {fullName, displayPicture, address, phone} = req.body
        Profile.update({fullName, displayPicture, address, phone},{ 
            where: {
                UserId: req.params.id
            }
        })
        .then(() => res.redirect('/profiles/:UserId'))
        .catch(err => res.send(err))
    }
}

module.exports = Controller