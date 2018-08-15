// module.exports = {
//     read: (req, res, next ) => {
//         const dbInstance = req.app.get('db');

//         dbInstance.get_cars()
//             .then(cars => {res.status(200).send(cars); })
//             .catch(err => {
//                 console.log(err);
//                 res.status(500).send(err);
//             });
//         },
// }

module.exports = {
    create: ( req, res, next ) => {
      const dbInstance = req.app.get('db');
      const {year, make, model, rowsofseats, licenseplate} = req.body;
  
      dbInstance.cars.add_car([year, make, model, rowsofseats, licenseplate])
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
  
      dbInstance.cars.get_cars()
        .then( cars => res.status(200).send( cars ) )
        .catch( err => {
          res.status(500).send({errorMessage: "----- Something went wrong -----"});
          console.log(err)
        } );
    },
  
    update: ( req, res, next ) => {
      const dbInstance = req.app.get('db');
      const {licenseplate} = req.body;
      const {id} = req.params
      console.log(req.body)
      console.log(req.params.id)
  
      dbInstance.cars.update_car([id, licenseplate])
        .then( (cars) => res.status(200).send(cars) )
        .catch( err => {
          res.status(500).send({errorMessage: "----- Something went wrong -----"});
          console.log(err)
        } );
    },
  
    delete: ( req, res, next ) => {
      const dbInstance = req.app.get('db');
      const {params} = req;
  
      dbInstance.cars.delete_car(params.id)
        .then( (cars) => res.status(200).send(cars) )
        .catch( err => {
          res.status(500).send({errorMessage: "----- Something went wrong -----"});
          console.log(err)
        } );
    }
  };