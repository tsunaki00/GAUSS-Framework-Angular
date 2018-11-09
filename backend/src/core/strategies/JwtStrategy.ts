// import * as passport from 'passport';
// import { ExtractJwt, Strategy } from 'passport-jwt';
// import { Injectable } from '@nestjs/common';
// import { AuthService } from '../../modules/auth/AuthService';
// import * as config from 'config';

// @Injectable()
// export class JwtStrategy extends Strategy {
// //  constructor(private readonly authService: AuthService) {
//   constructor() {

//   super(
//       {
//         jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
//         passReqToCallback: true,
//         secretOrKey: config.get('auth.secret'),
//       },
//       async (req, payload, next) => await this.verify(req, payload, next),
//     );
//     passport.use(this);
//   }

//   public async verify(req, payload, done) {
//     // const isValid = await this.authService.validateUser(payload);
//     // if (!isValid) {
//     //   return done(null, false);
//     // }
//     done(null, payload);
//   }
// }
