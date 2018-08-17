module.exports = {
    create: ( req, res, next ) => {
      const dbInstance = req.app.get('db');
      const {auth_id, year, make, model, rowsofseats, licenseplate} = req.body;
  
      dbInstance.cars.add_car([auth_id, year, make, model, rowsofseats, licenseplate])
        .then( (cars) => res.status(200).send(cars) )
        .catch( err => {
          res.status(500).send({errorMessage: "----- Something went wrong -----"});
          console.log(err)
        } );
    },
  
    getOne: ( req, res, next ) => {
      const dbInstance = req.app.get('db');
      const {params} = req;
  
      dbInstance.cars.read_car([params.id])
        .then( car => res.status(200).send( car ) )
        .catch( err => {
          res.status(500).send({errorMessage: "----- Something went wrong -----"});
          console.log(err)
        } );
    },
  
    getAll: ( req, res, next ) => {
      const dbInstance = req.app.get('db');
      const {params} = req;
  
      dbInstance.cars.get_cars([params.auth_id])
        .then( cars => res.status(200).send( cars ) )
        .catch( err => {
          res.status(500).send({errorMessage: "----- Something went wrong -----"});
          console.log(err)
        } );
    },
  
    update: ( req, res, next ) => {
      const dbInstance = req.app.get('db');
      const {newPlate} = req.body;
      const {licenseplate} = newPlate
      const {id, auth_id} = req.params
      console.log("---req.body---", req.body)
      console.log("---req.params---", req.params.id, req.params.auth_id)
  
      dbInstance.cars.update_car([id, licenseplate, auth_id])
        .then( (cars) => res.status(200).send(cars) )
        .catch( err => {
          res.status(500).send({errorMessage: "----- Something went wrong -----"});
          console.log(err)
        } );
    },
  
    delete: ( req, res, next ) => {
      const dbInstance = req.app.get('db');
      const {id} = req.params;
      const {auth_id} = req.body
      console.log(req.params, req.body)
  
      dbInstance.cars.delete_car(id, auth_id)
        .then( (cars) => res.status(200).send(cars) )
        .catch( err => {
          res.status(500).send({errorMessage: "----- Something went wrong -----"});
          console.log(err)
        } );
    }
  };