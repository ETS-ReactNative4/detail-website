const pricing = require('../models/pricing');

module.exports = {
    add: ( req, res, next ) => {
        const { id } = req.query;
        let { cart } = req.session.user;

        const index = cart.findIndex( pricing => pricing.id == id );

        if ( index === -1 ) {
            const selectedService = pricing.find( pricing => pricing.id == id );

            cart.push( selectedService );
            req.session.user.total += selectedpricing.price;
        }

        res.status(200).send( req.session.user );
    },
    
    delete: ( req, res, next ) => {
        const { id } = req.query;
        const { cart } = req.session.user;

        const selectedService = pricing.find( pricing => pricing.id == id );

        if ( selectedService ) {
            const i = cart.findIndex( pricing => pricing.id == id );
            cart.splice(i, 1);
            req.session.user.total -= selectedService.price;
        }

        res.status(200).send( req.session.user );
    },

    checkout: ( req, res, next ) => {
        const { user } = req.session;
        user.cart = [];
        user.total = 0;

        res.status(200).send( req.session.user );
    }
}