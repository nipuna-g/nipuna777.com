---

path: "/blog/building-blocks-of-web-components"
date: "2019-01-06"
title: "Building Blocks of Web Components"
featuredImage: ../images/building-blocks.jpg
---In a [previous article](/blog/simple-introduction-to-web-components) we discussed what Web Components are and how they can be useful for your project. In that I mentioned that they are made out of four main components.

In this article, we will take a look at these four building blocks that make up Web Components in a bit more detail.

> _This article is based on a talk I’ve given at the Colombo JavaScript Meetup. You can find the slides for that presentation [here](https://docs.google.com/presentation/d/1F1kC8hAvy8U003KhlHnJrKKwbb2iPbTLYKJR-IotfGA/edit#slide=id.p), and the source code in a github repo [here](https://github.com/nipuna777/cmbjs-web-components)._

## Web Component Standards

There are four main standards that make up web components. Those are:

1. Custom Elements
1. Shadow DOM
1. Templates
1. HTML Imports (Currently replaced with ES Modules)

![alt text](https://miro.medium.com/max/1400/1*0ycWlJurHpXDfq0m7EXaEA.png "Web component main standards")

Building blocks of Web Components (source: http://webcomponents.github.io)

Combined with other web technologies, these new standards allows us to make useful Web Components.

We will look at each standard and how they enable the creation of Web Components.

## 1. Custom Elements

![alt text](https://miro.medium.com/max/756/1*ObrFUl6n-eSXc7vgZESd6Q.png "Custom Elements")

Custom elements are a set of APIs that give us the ability to create and register a custom component.

To create a custom component, you first need to create a class that extends HTMLElement. This class will handle things such as attribute binding, life cycle methods, template binding among other things.

Then, you can register the new component in the document as a valid custom component. The name must contain a hyphen.

With a component defined, you can simply use the <cmbjs-toggle> in your template as you would use other tags.

```html
// define component class CmbjsToggleElement extends HTMLElement { //
constructor and template bindings // lifecycle methods etc. … } // register
component window.customElements.define('cmbjs-toggle', CmbjsToggleElement);
```

## 2. Template (and Slot)

![alt text](https://miro.medium.com/max/756/1*i1fdqie8cfI0VANkTmB8Qw.png "Template")

With a component defined, we need a way to bind some HTML to it. If we used regular HTML for this, the browser would have to work rendering these items even before the component is displayed. Also, we won’t have a way to slot in custom items in to our custom component.

The template allows us to create inert DOM elements which we can then use in the web component.

We also have access to the new <slot> element which can be useful for slotting in items. If we have a slot element in the template, anything we have between our custom element tag will get slotted in there. We can have multiple named slots as well.

```html
<template id="toggle-template">
  <input type="checkbox" /> <slot> // content will go here </slot>
</template>
<!-- Slot Usage -->
<cmbjs-toggle> <h1>Content to go in the `slot`</h1> </cmbjs-toggle>
```

## 3. The shadow DOM

![alt text](https://miro.medium.com/max/756/1*tH-gwTCv8XrS0clpLv5Ojg.png "The shadow DOM")

We need all the complex logic and the styles to stay inside the components we create. This is where the shadow DOM come in. Leaking styles could break the styling in the entire page.

The shadow DOM spec allows us to encapsulate the logic and styles in the component.

In the element class, we can append a shadow root and attach the template there. This creates a new shadow DOM in the DOM tree which will be separate from the overall app.

```javascript
// Binding Shadow DOM
let shadowRoot = this.attachShadow({ mode: "open" });
shadowRoot.appendChild(toggleTemplate.content.cloneNode(true));
```

## 4. HTML Imports\*

![alt text](https://miro.medium.com/max/756/1*7UdLu07KSFIMjvaS8iiA_g.png "HTML Imports")

With our shiny new component created, we need a way to import and use it. This is where the HTML imports come in.

HTML imports provided us a way of easily importing the component into a page.

The bad news is(the reason for the astrix after the title) this feature would be dropped from Chrome soon and the other browsers don’t support it as well. So we would need to use ES6 imports to import web components for now.

The syntax for importing and using Web Components using HTML Imports used to look like this.

But it’s not all bad, HTML components might be re-visited sometime in the future. Until then we have module imports which once setup works really well.

```javascript
<!-- Importing HTML Component -->
<head>
  <!-- HTML Imports are deprecated at M70, and will be removed in M73 -->
  <link rel="import" href="./toggle-component/toggle-component.html" />
</head>

<!-- Using imported HTML Component -->
<body>
  <cmbjs-toggle></<cmbjs-toggle>
<body>
```

## Summary

We looked at the standards that were introduced to give browsers the ability to host Web Components and how they work together.

You can read a lot more technical details about in the MDN documentation here which goes into a lot more technical detail: https://developer.mozilla.org/en-US/docs/Web/Web_Components
