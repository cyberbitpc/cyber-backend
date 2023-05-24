import { Strategy, ExtractJwt } from "passport-jwt";
import keys from "../config/keys.js";
const options = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: keys.jwt
};
export default (passport) => {
    passport.use(new Strategy(options, async (payload, done) => {
        try {
            const user = true;
            if (user) {
                done(null, user);
            }
            else {
                done(null, false);
            }
        }
        catch (e) {
            console.log(e);
        }
    }));
};
//# sourceMappingURL=passport.js.map