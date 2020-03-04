import * as jwt from 'jsonwebtoken';
import { Injectable } from '@nestjs/common';


import * as crypto from 'crypto';
import * as config from 'config';


/**
 * Password ユーティリティクラス
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
export class PasswordUtil {
  constructor() { }

  /**
   * アクセストークンの発行
   * @param id
   */
  static async createToken(userId:string, role?:number) {
    const expiresIn = config.get('auth.expiresIn');
    const secretOrKey = config.get('auth.secret');
    return {
      expires_in: expiresIn,
      access_token: jwt.sign({ _id: userId  }, secretOrKey, { expiresIn }),
      role: role
    };
  }

  /**
   * パスワードの暗号化
   * @param password 暗号化するパスワード
   */
  static async encryptPassword(password: string): Promise<string> {
    if (!password) {
      return null;
    }
    const salt = new Buffer(config.get('crypto.salt'), 'base64');
    return crypto.pbkdf2Sync(
      password,
      salt,
      config.get('crypto.iterations'),
      config.get('crypto.keylen'),
      config.get('crypto.digest')).toString('base64');
  }
}
