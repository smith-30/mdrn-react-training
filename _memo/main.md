## memo

- component ファイルには `.jsx` を使う
  - component なのか、それ以外なのか区別できるようになる
  - jsx ないでは `{}` で囲むことで Javascript を記述できる
- 変数宣言は基本constでいい
  - object などは const で定義してもフィールでの値は操作可能
  - let は内部での切り替え用のフラグなど外にでないもので使える
- js の object 名に `-` は認められてないので、キャメルケースで書く
- `props.childlen` で親から渡される dom (text) にアクセス可能
  - <Hoge>test</Hoge> で Hoge Component は props.children で `test` を取得可能