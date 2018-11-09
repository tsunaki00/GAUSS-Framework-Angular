# GAUSS Framework! ToDoチュートリアル

## はじめに 
GAUSS FramworkはGAUSS内のWEBシステム開発における共通基盤として活用します。

#### [GAUSS Framworkの内容]
 - frontend (Angular6)
 - backend (Nest5)  
※RDBMS, NoSQLのどちらも準備してあります。


#### [開発対象者(必須スキル）]
 - HTML5
 - CSS3 (sass)
 - Javascript（ECMAScript 6～)


#### Framework(フレームワーク)とは？  
アプリケーションソフトを開発する際によく必要をされる汎用的な機能をまとめて提供し、アプリケーションの土台として機能するソフトウェアのこと。  
元々は枠組み、下部構想、構造、組織という意味の英単となる。

フレームワークはアプリケーションのひな形であり、これを開発に利用することで、大幅な効率の向上が見込める。


## フレームワークの全体像
GAUSS Frameworkはクライアント処理にAngular、サーバ処理にnestを基盤として構築します。

#### [GAUSS Framwork Overview]

![GAUSS Framwork Overview](https://github.com/tsunaki00/GAUSS-Framework-Angular/blob/master/readme_images/framework_overview.png)

関連
[Angular](https://angular.jp/), [nest](http://nestjs.com/)


[GAUSS Framwork Frontend Architecture]

![GAUSS Framwork Frontend Architecture](https://github.com/tsunaki00/GAUSS-Framework-Angular/blob/master/readme_images/front_architecture.png)

#### [各コンポーネントの主な振る舞い]
  - <span style="color: red; ">View</span>  
  ViewはHTMLや画像などの静的情報の表示およびModelから関連するデータを取得して表示する層となる。  
  Viewの役割はレイアウトのみ※1を記述。記述方法はHTMLおよびDirective※2を使用する。  
   <span style="color: red; ">※1</span> インラインでのJavaScript、CSSの実装は禁止  
   <span style="color: red; ">※2</span> Directive（ディレクティブ）とは・・・  
    Angularで以下の3つのDirectiveがある  
    - Component　………　テンプレート付きDirective
    - Structural directives　………　DOM要素を追加、削除してDOMレイアウトを変更するDirective
    - Attribute directives　………　別のDirectiveの見た目や動作を変更するDirective  

  - <span style="color: red; ">Controller</span>   
   ControllerはScopeをセットアップするための役割で、ユーザのアクションに応じてModelのメソッドを呼ぶなどの処理を行う。  
      - Scopeにサービスの呼び出しを結びつける  
      - Modelのイベント通知をScopeに結びつける
      - Controllerにはプレゼンテーションロジックを記述する。  
    ※ ビジネスロジックはModelに記述し極力シンプルにする

 -  <span style="color: red; ">Model</span>     
   Modelはプレゼンテーションに関わらない部分すべてがModelで処理を行う。
    - ビジネスロジック
    - データの入れ物
    - サーバーサイドとの通信処理
    - ローカルストレージの処理

