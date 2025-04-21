import { app }  from "./app"
import { createUser } from "./http/users/UserController"

app.listen(3000, ()=>{
    console.log("the server is running on port 3000")
})
