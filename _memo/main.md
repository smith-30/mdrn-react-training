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


### props 

component に渡す引数のようなもの
props によって表示内容を出力する


### state

component が持つ `状態`
React では Hooks という機能の中の `useState` 関数を用いて State を扱っていく

```javascript
// 第一引数に State 変数
// 第二引数に State を更新するための関数
const [num, setNum] = useState();

// 初期値を入れたい場合
const [num, setNum] = useState(0);

// 初期値入れた場合、なんか型推論ぽいことして定義してくれる
const [num, setNum] = useState(0);
const [str, setStr] = useState("");
// この状態だと num は undefined 型
const [num, setNum] = useState();
```

基本的には num のような State 変数は参照用に使って関数は前の状態を引数にとって処理するのがよさそう

```javascript
setNum((prev) => prev + 1)

// 省略しないならこう。ちゃんと型を返す
setNum((prev) => {
    console.log(prev)
    return prev + 1
})

// 表示
<p>{num}</p>
```

```javascript
// num はstate 内では increment されるが、render されないと値が更新されない?
() => {
    setNum(num + 1);
}
```

state を変更する scope が終了してから画面が再描画される

```javascript
() => {
    setNum((prev) => {
        console.log(prev) // 0
        return prev + 1
    })
    // ここで内部的に 1 を描画しているわけではない
    setNum((prev) => {
        console.log(prev) // 1
        return prev + 1
    })
}
```

### CSS modules

component で 必要な css を import して適用する  
**component で閉じられるので競合しない**