### memo

対象 Component で宣言しておくことで不要な再レンダリングを防げる。  
例えば、親 Component で状態が変わるが、子要素に関係がないときには子要素を再描画する必要がない場合に有用  

```javascript
const Component = memo(() => {})
```

上記は Component の memo 化

### 関数の memo 化

```javascript
fn = () => {}
<Child onClickReset={fn}>
```

としたとき、Child が memo 化されていても親側の再描画のタイミングで関数も再生性されている。  
そうなると、Child は props が変化しているので再描画が行われてしまう。  
そのときに再描画させないよう、関数の memo 化を行う

第一引数に関数、第二関数に依存配列をとる
下記の場合、依存配列は空なので最初にさ育成されたものが使いまわされる  
依存配列の値が変わったときはそのタイミングで再作成される。

```javascript
fn = useCallback(() => {}, [])
<Child onClickReset={fn}>
```

### 変数の memo 化

```javascript
const sum = useMemo(() => {}, [])
```

この例では初回読み込み時以降、同じ値を使い回すことを約束している。  
