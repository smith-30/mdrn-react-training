### useEffect

ある値が変わったときに、ある処理を実行する

```javascript
useEffect(() => {
    alert();
}, [num]);
```

num は state から取り出したりしたものを set する

初期化処理にも使える。なぜなら、コンポーネントのマウント時にも必ず実行されるから。

```javascript
useEffect(() => {
    alert();
}, []);
```