module.exports = {
    message: (req,res,next) => {
        const accountSid = process.env.TWILIO_ACCOUNT_SID
        const authToken = process.env.TWILIO_AUTH_TOKEN

        const client = require('twilio')(accountSid, authToken)
        const {textMessage} = req.body
        
        client.messages.create({
                to: process.env.MY_PHONE_NUMBER,
                from: '+13312143265',
                body: textMessage
        })
        .then((message) => console.log(message.sid))
        .done()
            }
}