<div><h2 class="title___3qmX3">&#x95EE;&#x7B54;&#x9898;&#x7B2C;7&#x9898;&#xFF1A;e.target &#x548C; e.currentTarget  &#x6709;&#x4EC0;&#x4E48;&#x533A;&#x522B;&#xFF1F;</h2><div class="secondBox___2B0S4"><div>&#x96BE;&#x5EA6;&#xFF1A;<span>0.5/5</span></div><span>&#x66F4;&#x65B0;&#x65F6;&#x95F4;&#xFF1A;<!-- -->2022-04-20</span></div><div><p class="answerTitle___1T-fK">&#x53C2;&#x8003;&#x7B54;&#x6848;&#xFF1A;</p></div><div class="markdown-body"><h2>&#x5192;&#x6CE1; & &#x6355;&#x83B7;</h2>
<p>&#x5F53;&#x4F60;&#x89E6;&#x53D1;&#x4E00;&#x4E2A;&#x5143;&#x7D20;&#x7684;&#x4E8B;&#x4EF6;&#x7684;&#x65F6;&#x5019;&#xFF0C;&#x8BE5;&#x4E8B;&#x4EF6;&#x4ECE;&#x8BE5;&#x5143;&#x7D20;&#x7684;&#x7956;&#x5148;&#x5143;&#x7D20;&#x4F20;&#x9012;&#x4E0B;&#x53BB;&#xFF0C;&#x6B64;&#x8FC7;&#x7A0B;&#x4E3A;<code>&#x6355;&#x83B7;</code>&#xFF0C;&#x800C;&#x5230;&#x8FBE;&#x6B64;&#x5143;&#x7D20;&#x4E4B;&#x540E;&#xFF0C;&#x53C8;&#x4F1A;&#x5411;&#x5176;&#x7956;&#x5148;&#x5143;&#x7D20;&#x4F20;&#x64AD;&#x4E0A;&#x53BB;&#xFF0C;&#x6B64;&#x8FC7;&#x7A0B;&#x4E3A;<code>&#x5192;&#x6CE1;</code></p>
<div>
    
```html
    <div id="a">
      <div id="b">
        <div id="c">
          <div id="d">&#x54C8;&#x54C8;&#x54C8;&#x54C8;&#x54C8;</div>
        </div>
      </div>
    </div>
```

</div>
<p></p><div class="ant-image"><img class="ant-image-img" src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/a2298b84cc0e484a85d4c8e18674ea34~tplv-k3u1fbpfcp-zoom-1.image"></div><p></p>
<h2>addEventListener</h2>
<p><code>addEventListener</code>&#x662F;&#x4E3A;&#x5143;&#x7D20;&#x7ED1;&#x5B9A;&#x4E8B;&#x4EF6;&#x7684;&#x65B9;&#x6CD5;&#xFF0C;&#x4ED6;&#x63A5;&#x6536;&#x4E09;&#x4E2A;&#x53C2;&#x6570;&#xFF1A;</p>
<ul>
<li>&#x7B2C;&#x4E00;&#x4E2A;&#x53C2;&#x6570;&#xFF1A;&#x7ED1;&#x5B9A;&#x7684;&#x4E8B;&#x4EF6;&#x540D;</li>
<li>&#x7B2C;&#x4E8C;&#x4E2A;&#x53C2;&#x6570;&#xFF1A;&#x6267;&#x884C;&#x7684;&#x51FD;&#x6570;</li>
<li>&#x7B2C;&#x4E09;&#x4E2A;&#x53C2;&#x6570;&#xFF1A;<!-- -->
<ul>
<li>false&#xFF1A;&#x9ED8;&#x8BA4;&#xFF0C;&#x4EE3;&#x8868;&#x5192;&#x6CE1;&#x65F6;&#x7ED1;&#x5B9A;</li>
<li>true&#xFF1A;&#x4EE3;&#x8868;&#x6355;&#x83B7;&#x65F6;&#x7ED1;&#x5B9A;</li>
</ul>
</li>
</ul>
<h2>target & currentTarget</h2>
<h3>false</h3>
<p>&#x6211;&#x4EEC;&#x7ED9;&#x56DB;&#x4E2A;div&#x5143;&#x7D20;&#x7ED1;&#x5B9A;&#x4E8B;&#x4EF6;&#xFF0C;&#x4E14;<code>addEventListener</code>&#x7B2C;&#x4E09;&#x4E2A;&#x53C2;&#x6570;&#x4E0D;&#x8BBE;&#x7F6E;&#xFF0C;&#x5219;&#x9ED8;&#x8BA4;&#x8BBE;&#x7F6E;&#x4E3A;<code>false</code></p>
<div>
    
```js
const a = document.getElementById('a')
const b = document.getElementById('b')
const c = document.getElementById('c')
const d = document.getElementById('d')
a.addEventListener('click', (e) => {
  const {
    target,
    currentTarget
  } = e
  console.log(`target&#x662F;${target.id}`)
  console.log(`currentTarget&#x662F;${currentTarget.id}`)
})
b.addEventListener('click', (e) => {
  const {
    target,
    currentTarget
  } = e
  console.log(`target&#x662F;${target.id}`)
  console.log(`currentTarget&#x662F;${currentTarget.id}`)
})
c.addEventListener('click', (e) => {
  const {
    target,
    currentTarget
  } = e
  console.log(`target&#x662F;${target.id}`)
  console.log(`currentTarget&#x662F;${currentTarget.id}`)
})
d.addEventListener('click', (e) => {
  const {
    target,
    currentTarget
  } = e
  console.log(`target&#x662F;${target.id}`)
  console.log(`currentTarget&#x662F;${currentTarget.id}`)
})
```

</div>
<p>&#x73B0;&#x5728;&#x6211;&#x4EEC;&#x70B9;&#x51FB;&#xFF0C;&#x770B;&#x770B;&#x8F93;&#x51FA;&#x7684;&#x4E1C;&#x897F;&#xFF0C;&#x53EF;&#x4EE5;&#x770B;&#x51FA;&#x89E6;&#x53D1;&#x7684;&#x662F;d&#xFF0C;&#x800C;&#x6267;&#x884C;&#x7684;&#x5143;&#x7D20;&#x662F;&#x5192;&#x6CE1;&#x7684;&#x987A;&#x5E8F;</p>
<div>
    
```js
target&#x662F;d currentTarget&#x662F;d
target&#x662F;d currentTarget&#x662F;c
target&#x662F;d currentTarget&#x662F;b
target&#x662F;d currentTarget&#x662F;a

```

</div>
<h3>true</h3>
<p>&#x6211;&#x4EEC;&#x628A;&#x56DB;&#x4E2A;&#x4E8B;&#x4EF6;&#x7B2C;&#x4E09;&#x4E2A;&#x53C2;&#x6570;&#x90FD;&#x8BBE;&#x7F6E;&#x4E3A;<code>true</code>&#xFF0C;&#x6211;&#x4EEC;&#x770B;&#x770B;&#x8F93;&#x51FA;&#x7ED3;&#x679C;&#xFF0C;&#x53EF;&#x4EE5;&#x770B;&#x51FA;&#x89E6;&#x53D1;&#x7684;&#x662F;d&#xFF0C;&#x800C;&#x6267;&#x884C;&#x7684;&#x5143;&#x7D20;&#x662F;&#x6355;&#x83B7;&#x7684;&#x987A;&#x5E8F;</p>
<div>
    
```js
target&#x662F;d currentTarget&#x662F;a
target&#x662F;d currentTarget&#x662F;b
target&#x662F;d currentTarget&#x662F;c
target&#x662F;d currentTarget&#x662F;d

```

</div>
<h3>&#x533A;&#x522B;</h3>
<p>&#x6211;&#x4EEC;&#x53EF;&#x4EE5;&#x603B;&#x7ED3;&#x51FA;&#xFF1A;</p>
<ul>
<li><code>e.target</code>&#xFF1A;<strong>&#x89E6;&#x53D1;</strong>&#x4E8B;&#x4EF6;&#x7684;&#x5143;&#x7D20;</li>
<li><code>e.currentTarget</code>&#xFF1A;<strong>&#x7ED1;&#x5B9A;</strong>&#x4E8B;&#x4EF6;&#x7684;&#x5143;&#x7D20;</li>
</ul></div><div style="margin-top:20px"></div></div>