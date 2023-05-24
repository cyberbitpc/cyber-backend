import {Strategy, ExtractJwt} from "passport-jwt"
import keys from "../config/keys.js"
import { PassportStatic } from "passport";
// import User from "../models/User.js"

const options = {
    jwtFromRequest:  ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: keys.jwt
}

export default (passport: PassportStatic) => {
    passport.use(
        new Strategy(options, async (payload, done) => {
            try{
                // const user = await User.findById(payload.userId).select('email id')
                const user = true
                if(user) {
                    done(null, user)
                } else {
                    done(null, false)
                }
            } catch (e) {
                console.log(e)
            }
        })
    )
}
