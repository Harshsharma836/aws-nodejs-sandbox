module.exports.handler = async(event)=>{ // This Event has Req and Body
    return{
        statusCode : 200,
        header : {
            'Content-Type' : 'application/json',
        },
        body : JSON.stringify({message: "Hello From Harsh , This is Reactive Forge API"})
    }
}