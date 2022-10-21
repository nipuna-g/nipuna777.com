---
path: "/blog/css"
date: "2022-09-03"
title: "Learning CSS by going through a rabbit hole."
featuredImage: ../images/ux.jpg
---

One of my co-workers posted a seemingly simple CSS quizz.

Given the CSS below, What background color will the div end up with?

1. blue
2. red
3. default // transparent

```css
:root {
  --bg-color: red;
}

div {
  --bg-color: revert;
  background: var(--bg-color, blue);
}
```

Any guesses? Keep scrolling for the answer.

.<br/>.<br/>.<br/>.<br/>.<br/>.<br/>.<br/>.<br/>.<br/>.<br/>.<br/>.<br/>.<br/>.<br/>.<br/>.<br/>.<br/>.<br/>.<br/>.<br/>.<br/>

The correct answer was 1. The background color ends up `red`.

I guessed 3 which was way off.

So... Why did I select 3?

1. I assumed that the `var()` function only accepts one parameter. This would mean that whatever is in the --bg-color would be the background color.
2. My intuition about `revert` was that it would revert all properties to `empty` which would make the background have no colors

I love getting these 'intuition' based guesses wrong. It forces me to go down the rabbit hole and try to understand how things actually work. If I got this right by sheer blind luck, I might never have learned what was beneath the surface.

**_Down the rabbit hole we go..._**

## Custom Properties Fallback

The first thing I got wrong was fallback values for the `var` function.
Turns out that custom properties can have fallback values.

The var function is [defined](https://www.w3.org/TR/css-variables-1/#using-variables) in the CSS spec as follows:

```
var() = var( <custom-property-name> , <declaration-value>? )
```

`declaration-value` can be anything that is a valid custom property value. This value is used if the value for the custom property is [`guaranteed-invalid value`](https://www.w3.org/TR/css-variables-1/#guaranteed-invalid)(which is the default value for any custom property), we fallback to

Couple of interesting learnings:

1. Since the fallback value can be anything that a custom property can be, we can have commas in the second value.

```css
background-color: var(--bg-color, red, blue);
```

Would result in the following evaluated CSS:

```css
background-color: red, blue;
```

Since this is invalid, browser will fall back to black text.

2. `guaranteed-invalid value` is not the same as an empty value. This means that if you define a custom property as empty, we would not get a fallback.

```css
--bg-color: "";
background-color: var(--bg-color, red);
```

Would result in the following evaluated CSS:

```css
background-color: "";
```

Since this is invalid, browser will fall back to black text.

---

Armed with this new-found knowledge, that we would have to use the fallback if the custom property returned `guaranteed-invalid value`.

This would mean that if `--bg-color` was not defined, the answer would have been `blue`. But since we know it's `red` let's keep on digging...

### Figuring out `revert`

I always assumed that `revert` would just reset a property value to the browser default.

####

#### Also, what about `unset` and `initial`?

I've heard of and used `revert`, `initial`, and `unset`. But never really got around to understanding the differences. We will re-visit these later.

#### What does MDN say?

So as any good FE dev would do, I went [to MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/revert) to try and figure out what `revert` did.

And this is what I found:

> The revert CSS keyword reverts the cascaded value of the property from its current value to the value the property would have had if no changes had been made by the current style origin to the current element. Thus, it resets the property to its inherited value if it inherits from its parent or to the default value established by the user agent's stylesheet (or by user styles, if any exist). It can be applied to any CSS property, including the CSS shorthand property all.

While this was very accurate, it wasn't very clear for me what's going on. I had a few questions:

1. What is the `style origin`?
1. What are the `cascaded value`?
   1. Is the `div` not cascaded from `:root`? If so, why is `--bg-color` not reverted?
1. What are `inherited value`? How are they different from `cascaded value`?

Let's try to figure each one out:

1. What is the `style origin`

Thankfully, MDN has another great [article](https://developer.mozilla.org/en-US/docs/Glossary/Style_origin) on this.

There are three categories or sources for style changes:

1. User-agent origin - browser's default styles
1. User-origin - user's customizations, ex - styles added in devtools, browser extension etc.
1. Author origin - styles that are part of the HTML document (the styles the web developer writes)

Okay, that makes understanding the first sentence a bit easier:

> The revert CSS keyword reverts the cascaded value of the property from its current value to the value the property would have had if no changes had been made by the current style origin to the current element.

`current style origin` in this case is the "Author Origin". This means that all cascaded properties from our CSS should be reverted to browser defaults.

Now this made things a bit more confusing. Why is the `--bg-color` value not reverted to `guaranteed-invalid value`?

There's a hint in the next part of the description:

> Thus, it resets the property to its inherited value if it inherits from its parent or to the default value established by the user agent's stylesheet...

If we know that all the cascaded values are now ignored, the `red` color for `--bg-color` has to come from the

### Inheritance and Cascade

I feel especially daft for not knowing this, but these are two of the some of the fundemental building blocks of CSS.

I had the intuition of how they worked, but never really bothered to learn what they were.

You can read a lot more about this here: https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Cascade_and_inheritance, but I'll try to provide a TLDR; here for anyone(like me) finds this useful.

### Cascade - Figuring out what style property wins out

For some reason, I always assumed that Cascade in CSS stood for how the property values are passed down to the child elements. This was another wrong intuition that I had to fix.

#### What does `Cascade` really stand for in CSS?

Turns our the cascade in CSS stands for an algorithm that's used determines what value to apply for each property for each document element.

This algorithm goes through multiple stages to determine which value wins out when there's more than one matching values.

1. Filter out irrelevant styles based on @media
2. Origin and !important
3. Specificity
4. Order of appearance

5. Filter out irrelevant styles based on @media

```
    p {
        color: red;
    }

    @media(screen min-width: 100px) {
        p {
            color: blue
        }
    }
```

2. Origin and !important

```
    // user-agent styles, not shown in the browser: TODO: add screenshot
    p {
        color: black;
    }

    p {
        color: red;
    }
```

@layers come in here as well

3. Specificity

```
    body p {
        color: blue;
    }

    p {
        color: red;
    }
```

4. Order of appearance

```
    p {
        color: blue;
    }

    p {
        color: red;
    }
```

Hopefully it's clear how the cascade doesn't have anything to do with cascading styles down to child elements.

All cascade does is help figure out what styles to apply given multiple styles.

### Inheritance

But what about cases where we want children to inherit properties?

That's where Inheritance comes in.

Some css properties are automatically inherited from the parent classes. For example, given the following example

```html
<style>
    p {
        font-weight: bold;
    }
</style>
<p>hello world <span class="red">notice</span></p>
```

You can notice that both the the `span` tag displays the text in the same font-weight although we only specifies the font-weight on it's parent element.

But some CSS properties are not inherited

```html
<style>
    p {
        padding: 12px;
    }
</style>
<p>hello world <span class="red">notice</span></p>
```

As you can see, the padding only applies to the parent element.

This is a good thing as it would have been very difficult to use CSS if padding was inherited.

---

But what if we wanted to inherit a value?
Well you can using well named `inherit` value.
TODO: check this works

```html
<style>
    p {
        padding: 12px;
    }
    span {
        padding: inherit;
    }
</style>
<p>hello world <span class="red">notice</span></p>
```

Okay. Now we know that inheritance allows some properties to go through to the child elements. But what are these properties?

---

We are almost at the home stretch.
Let's re-visit the second half of the definition of `revert`

> Thus, it resets the property to its inherited value if it inherits from its parent or to the default value established by the user agent's stylesheet (or by user styles, if any exist). It can be applied to any CSS property, including the CSS shorthand property all.

We know that --bg-color is not defined in user agent or user styles. So it has to be inherited from its parent.

For this to be possible, custom properties need to be an inheritable property. Which it is! https://www.w3.org/TR/css-variables-1/#defining-variables

---

Let's put it all together by going back to the very first example and work out what exactly happens.

```css
:root {
  --bg-color: red;
}

div {
  --bg-color: revert;
  background: var(--bg-color, blue);
}
```

`--bg-color` is not directly defined on `div` in the cascade.
But, since it's inheritable, and because the `:root` pusdo selector is a parent to all elements including `div` the color gets applied.

`--bg-color: revert;` takes the `--bg-color` property and removes all cascaded styles. Since there are no cascaded styles applied this does nothing.

Therefor, the behaviour remains.

### But what if `--bg-color` was cascaded?

If that was the case, the outcome would have been different.

```css
div {
  --bg-color: red;
}

div.container {
  background: var(--bg-color, blue);
}
```

This displays red

```css
div {
  --bg-color: red;
}

div.container {
  --bg-color: revert;
  background: var(--bg-color, blue);
}
```

Since `--bg-color` is now inherited, this will revert the value to the default value which is: TODO: fill in

Therefor, the fallback kicks in and `blue` is applied.

### unset and initial

With everything we learned to understand this quizz, it is now much easier to understand what `unset` and `initial` are doing.

### initial

> The initial CSS keyword applies the initial (or default) value of a property to an element. It can be applied to any CSS property, including the CSS shorthand property all. With all set to initial, all CSS properties can be restored to their respective initial values in one go instead of restoring each one separately.

One new thing here is the concept of the `initial value`.

This initial value here stands for the properties initial value and NOT the property's initial value for the given element.

For example:

// example button background?

### unset

> The unset CSS keyword resets a property to its inherited value if the property naturally inherits from its parent, and to its initial value if not. In other words, it behaves like the inherit keyword in the first case, when the property is an inherited property, and like the initial keyword in the second case, when the property is a non-inherited property.

Unset is initial for all but elements with inherited values.

/// example with p font-size and background-color.

// TODO: quizz to how the same quizz works but with unset and initial
