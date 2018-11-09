import { ApiModelProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

/**
 * AuthDto
 *
 * @author GAUSS
 * @since 1.0.0
 *
 * 履歴：
 * NO 日付         内容
 *  1 2018/10/01  新規作成
 *
 */

/**
 * ユーザ認証リクエスト(ACM01-I01)
 * /auth/login
 */
export class TodoCreateDto {

  @ApiModelProperty({ required: true, description: 'メッセージ' })
  readonly message: string;

}
