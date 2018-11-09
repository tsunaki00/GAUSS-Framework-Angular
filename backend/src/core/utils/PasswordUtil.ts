import * as crypto from 'crypto';
import * as config from 'config';

/**
 * パスワードユーティリティ
 *
 * @author GAUSS
 * @since 1.0.0
 *
 * 履歴：
 * NO 日付         内容
 *  1 2018/08/13  新規作成
 *
 */
export default class PasswordUtil {

  /**
   * パスワードの暗号化
   * @param password 暗号化するパスワード
   */
  static async encrypt(password: string): Promise<string> {
    if (!password) {
      return null;
    }
    const salt = Buffer.from(config.get('crypto.salt'), 'base64');
    return crypto.pbkdf2Sync(
      password,
      salt,
      config.get('crypto.iterations'),
      config.get('crypto.keylen'),
      config.get('crypto.digest')).toString('base64');
  }

  /**
   * パスワード検証
   * @param password ハッシュ済みパスワード
   * @param check チェック対象パスワード
   */
  static async verify(password: string, check: string) {
    const test = await this.encrypt(check);
    return password === test;
  }

}
