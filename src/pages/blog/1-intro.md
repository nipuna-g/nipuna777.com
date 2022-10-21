---
type: "css-rabbit-hole"
---

One of my co-workers posted a seemingly simple CSS quiz.

Given the CSS below, What background color will the div end up with?

```css
:root {
  --bg-color: red;
}

div {
  --bg-color: revert;
  background: var(--bg-color, blue);
}
```
