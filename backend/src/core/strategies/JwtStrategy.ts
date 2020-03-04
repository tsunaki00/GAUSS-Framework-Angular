import * as passport from 'passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { Injectable } from '@nestjs/common';
import * as config from 'config';

// import { AuthService } from '../../modules/auth/AuthService';

/**
 * Passport用
 * JWT Strategyクラス
 *
 * @author GAUSS
 * @since 1.0.0
 *
 * 履歴：
 * NO 日付         内容
 *  1 2020/01/01  新規作成
 *
 */
@Injectable()
export class JwtStrategy extends Strategy {

  // constructor(private service:AuthService) {
  //   super(
  //     {
  //       jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  //       passReqToCallback: true,
  //       secretOrKey: config.get('auth.secret'),
  //     },
  //     async (req, payload, next) => await this.verify(req, payload, next),
  //   );
  //   passport.use(this);
  // }

  // public async verify(req, payload, done) {
  //   const user = await this.service.authUser(payload._id);
  //   if (!user) {
  //     return done(null, false);
  //   }
  //   done(null, user);
  // }
}
