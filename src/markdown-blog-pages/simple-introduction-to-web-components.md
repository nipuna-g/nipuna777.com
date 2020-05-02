---

path: "/blog/simple-introduction-to-web-components"
date: "2019-01-04"
title: "A Simple Introduction to Web Components"
featuredImage: ../images/simple.jpg

---If you have been doing web development for in the recent past, you must have heard of this new thing called web components. You may know that it has something to do with creating HTML elements and that there are some related libraries such as Polymer, Stencil and litHTML that are often associated with the term.

In this article, we will quick look at what these web components are and how you can use them in a project.

> _This article is based on a talk I’ve given at the Colombo JavaScript Meetup. You can find the slides for that presentation [here](https://docs.google.com/presentation/d/1F1kC8hAvy8U003KhlHnJrKKwbb2iPbTLYKJR-IotfGA/edit#slide=id.p), and the source code in a github repo [here](https://github.com/nipuna777/cmbjs-web-components)._

## What are Web Components?

As the name suggests, web components allow us to create custom HTML components which can then be used in our applications. Web Components provide this feature through four new web standards.

By using these new standards, we now get the ability to create our own HTML components that are encapsulated natively without having to use any third party library at all.

In simple terms, if you ever wanted to create a custom element called `<cmbjs-toggle>` to be used in your web app, now you can without having to use any third party library with the power of Web Components.

## Why do we need them?

You might be thinking that while it’s all good and well that we can create custom components, do we really need them?

### The web has changed a lot

To understand the need of Web Components, we can start by looking at a very old web site. We can start by looking at worlds first web site.

![alt text](https://miro.medium.com/max/1354/1*F5Hu2kqus89PViPSqkQs0Q.png "First website")

You can probably look at this site and identify each of the native HTML component that should be used. The header should be an `<h1>` links should be `<a href=>`, lists are `<ul>` and so on. Back in the ‘good old days’, HTML pages were basically used as linked documents and the built in components were more than sufficient to support this use case.

The web has changed a LOT since then. If we look at a modern web app, things are a lot more complex. It’s not simple to name the components that gmail is made of.

![alt text](https://miro.medium.com/max/1400/1*3djr84V2FlH9Pp9dUl6e2A.png "gmail in multiple form factors")

There are cards, fancy menus, list of items, notifications and so much more. It is simply not practical to build provide all the platforms we need pre-built in the browsers.

## Why Not Just Use Framework XYZ?

Now you might be thinking that while it’s true that we can benefit from web components, we already have Angular, React and many other libraries that provide the same functionality for creating custom components. Why add another to the list?

There are some key differences of using native web components when compared to other libraries.

1. **Fewer Dependencies** — We don’t need to drag in a lot of peer dependencies to build Web Components. Pulling a framework in just to have components could mean getting a lot of dependencies you don’t need. Joe Armstrong called this the banana gorilla jungle problem, where we just need a banana-component but it comes with a lot of baggage!

![alt text](https://miro.medium.com/max/372/1*h_SQcikXFx4p4u9IUfrTSA.png "Gorilla, banana, Jungle!")

2. **Framework Agnostic** — Web Component can be used in projects that are written using various libraries and frameworks.

## How Do They Work?

Web components are made possible by adding a set of new standards for the browsers to support. We can target the features exposed by these standards and create our own Web Components that would run on any browser that has the implementation.

The four main standards are the following. I will write more about them in a later article. But there are already a lot of quality reference material on these.

1. Custom Elements
2. Shadow DOM
3. Templates
4. HTML Imports (Currently replaced with ES Modules)

## How Would Web Components Help Our Team?

Web Components can help your project in many ways. Here are a few that I can come up with right now.

1. You can use a set of common components through out the organization. This will help maintain brand consistency and allow developers to spend less hours working on the same component.
2. You can build in core features such as Accessibility into the components. Now, whenever these components are re-used, you get accessibility for free.
3. You can use components that others have made. webcomponents.org maintains a list of components that you can drag into your project right now. This can help cut down time of development. While other frameworks have similar components, they are all dependent on the framework while web components will continue to work even after the framework support is dropped.
4. You can cut down on dependencies used. For a simple project, you might be able to get away with only using a simple set of Web Components. Try it out at your next pet project and see how it goes.
5. Help you migrate if and when you move on to a new framework/library. You can take your components with you potentially saving hundreds of hours of re-work.

While there are many advantages, they are not a one-size-fits-all miracle solution. I think they make sense when using on smaller components such as buttons and date pickers. But your millage will vary.

## When can we use them?

**Right Now!**

The good news is that as of now (December 2018) most modern browsers support the standards required for web components to work.

And the even better news is that for the browsers that don’t support it, relatively light weight poly-fills are available. You can find more about them [here](https://www.webcomponents.org/polyfills/).

## Can I use it with \<Insert Your Favorite Library Here\>?

I harped on about how you can write Web Components once and use them anywhere. But is it really true? Can we use Web Components with any library?

Well… It’s complicated.

Right now, some libraries such as Angular and Vue provide complete support for Web Components. While other frameworks such as React has some compatibility issues that need to resolved.

The good news is that most major frameworks are moving towards supporting Web Components.

If you want to know if your favorite framework already supports Web Components or if they are making progress, the best place to visit would be from the https://custom-elements-everywhere.com website developed by Rob Dodson.

## Summary

Web components are here to stay. They provide us a way to make native components for the web that are re-usable without the need of bringing in any other dependency.

You will soon see more and more people using Web Components and the ecosystem around it growing rapidly. It has been a long time coming, but 2019 could very well be the year of Web Components.
