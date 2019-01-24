module.exports = {
  getOne: (req, res) => {
    const db = req.app.get('db')
    const {id} = req.params
    db.read_product(id)
    .then( product => res.status(200).send(product))
    .catch(error => console.log(error))
  },
  getAll: (req, res) => {
    const db = req.app.get('db')
    db.read_products()
    .then(products => res.status(200).send(products))
    .catch(error => console.log(error))
  },
  create: (req, res) => {
    const db = req.app.get('db')
    const {name, description, price, image_url} = req.body
    console.log(name)
    db.create_product([name, description, price, image_url])
    .then(products => {
      console.log(products)
      res.status(200).send(products)
    })
    .catch(error => console.log(error))
  },
  update: (req, res) => {
    const db = req.app.get('db')
    const {id} = req.params
    const {description} = req.body
    console.log(description)
    db.update_product([id, description])
    .then(products => res.status(200).send(products))
    .catch(error => console.log(error))
  },
  delete: (req, res) => {
    const db = req.app.get('db')
    const {id} = req.params
    db.delete_product(id)
    .then(products => res.status(200).send(products))
    .catch(error => console.log(error))
  }
}
