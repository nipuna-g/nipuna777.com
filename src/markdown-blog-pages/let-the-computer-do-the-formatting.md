---

path: "/blog/let-the-computer-do-the-formatting"
date: "2019-01-14"
title: "Let the computer do the formatting"
featuredImage: ../images/prettier.png
---When I was first introduced to Prettier by my friend Mr. Ishan ‘Fishy’ I couldn’t understand what the big deal was. We already had linters that would catch errors and do some automated formatting like adding semicolons. And some text editors had beautify built in. I could not see why we needed yet another tool to make our code prettier.

I may be in the minority but it took me some time to get the value of using Prettier for formatting. In this article, I’ll try my best to explain what Prettier is and how it can help your project.

## What is prettier?

According to the Prettier Docs:

> Prettier is an opinionated code formatted which supports a variety of languages including JavaScript, TypeScript, HTML, CSS, JSON and more.

So what would an ‘opinionated code formatter’ do? Well, we can start with the following:

1. Formats your code in an opinionated way — For example, an opinion here can be things like where to break a line in your code, or how HTML attributes should be listed
2. Allow us to tweak opinions with a config — While Prettier has preset opinions on how code should look, we can tweak them by using a prettier configuration to suit the team's needs
3. Share and apply styles consistently using the config — Once the config is added to the project, most editors can automatically apply the opinionated styling as soon as you press save

### How does it work?

Prettier will take your code in and completely re-write it in a constant format. This is fundamentally different from code linters work because a linter’s job is only to point out the lint errors in your code, not to re-write it.

![alt text](https://miro.medium.com/max/804/1*-ZOl6U4MocW_QQ8fC7hxjQ.png "How prettier works")

How Prettier does this is as follows:

1. Read all the code you write
2. Get the Abstract Syntax Tree(AST) of the code. AST is a generic representation of the code that will keep all the logic intact.
3. Using the AST and the Rules provide, re-write the code in a consistent and opinionated way.

## Prettier Usage

The fastest way to try out prettier would be to use the Prettier Playground. You can just visit that page and try out how this all works. Here you can see how code gets formatted by Prettier in real time.

![alt text](https://miro.medium.com/max/2000/1*KNJVvH6EHAc_P4DDXSADuA.png "How prettier works")

If you are sufficiently impressed, you might consider adding an extension to your existing browser. Since I’m using VSCode most of the time, I’m using this [VSCode Plugin](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode). But similarly, you should be able to find one for your favorite editor.

### Can’t We Use a Code Linter for this?

That’s a very good question. and was the exact one I had for quite some time.

As it turns out, while there is a significant overlap of the two, there are things Prettier excels at and other things that we need a Linter for.

Let’s take a look at a code sample:

```
function HelloWorld({greeting = "hello", greeted = '"World"', silent = false, onMouseOver,}) {
  if(!greeting){return null}
  else {greetingMethod(greeting)}
}
```

I think it is fair to say that this code is a bit messy. There are a few things that can be called not so pretty in this code.

1. The code goes pass the set max width of 80 characters leaving a long list of params
2. The if statement is in one line (this works just fine and your team may even prefer it. If so great. But with this configuration, it is considered ugly) `greetingMethod` is not defined.

Running this through prettier gives us this value.

```javascript
function HelloWorld({
  greeting = "hello",
  greeted = '"World"',
  silent = false,
  onMouseOver,
}) {
  if (!greeting) {
    return null;
  } else {
    greetingMethod(greeting);
  }
}
```

As you can see, the formatting is much better!

If we were only using a linter with a max-width, we would still have gotten an error. But the difference is that since linters are not opinionated, we could have fixed the lint issue in multiple ways.

```
// valid according to eslint
function HelloWorld({greeting = "hello", greeted = '"World"', silent = false,
onMouseOver,}) {
  if(!greeting){return null}
  else {greetingMethod(greeting)}
}

// also valid accoridng to eslint
function HelloWorld({greeting = "hello",
  greeted = '"World"', silent = false, onMouseOver,}) {
  if(!greeting){
    return null
  } else {
    greetingMethod(greeting)
  }
}
```

As you can see, since ESLint does not enforce an opinion on how your code should be, we could write the same code in a variety of ways. This could cause problems in keeping consistency in a project, especially when working in a team.

## If Prettier is so Great Can I Get rid of My Linter?

Now you might be saying, “That’s great Nipuna, let me uninstall my linter”.

_Not so fast!_

The astute of you might have noticed that while Prettier did make the code prettier in the last example, it did not do anything about the undefined `greetingMethod` method.

This is where the Linters come in.

As explained in this prettier doc, Linters have two sets of rules.

1. Formatting Rules
2. Code Quality

Linters can be used to catch Code Quality rules in addition to the Formatting rules which can now be handed off to Prettier.

Using something like ESLint along with Prettier would allow you to catch errors early while keeping the code consistent.

## Advantages of Letting the Computer do all the Formatting

### 1. Stylistic decisions are decided on project-wide

There are some stylistic decisions we are always making when coding. You have to spend some time thinking about how to style code. While you do develop some methods to do this with time, it always takes up a few precious minutes that you’d otherwise spend on coding.

### 2. Enforced styles

Teams usually agree on a coding style guide. But it’s easy to have slight variations within the rules of this guide which could lead to bikeshedding or different styles of code being committed. Having automated code styling in place allows us to solve this issue once and then get on with more important things.

### 3. Tool agnostic

We had code formatters on many of the different IDEs and text editors, but Prettier is a step up because it is tool agnostic. You could even develop on Notepad(Not recommended btw. :D ) and run it through prettier with the command line tool.

### 4. Onboarding new members

When new members come on to a team, there’s this song and dance where we have to teach them how to organize the imports and how we really don’t like if conditions on a single line. When joining a new project having a prettier config will take most of these discussions away allowing more time to be spent on more productive learning.

### 5. Fewer merge conflicts due to formatting

> _The main advantage of having prettier in place, in my opinion, is that it allows for a team to keep consistent styles applied throughout a project._

If someone would like to change an aspect of code formatting, the team can have a discussion, and change the prettier file as needed. Once committed, prettier takes care of applying the styles for all added or modified files.

## What All the Formatters in the World Will Not Solve

It may feel like you are giving up control by letting the computer do all the formatting. But in reality, you are saving your valuable time and the limited brain power to work on more important things than aligning stuff.

While prettier, as the name suggests, helps you write cleaner looking code, it does not help you write code that is logically cleaner. Writing readable, and reusable code takes a lot more effort than just nice formatting. I would highly recommend Uncle Bob’s book ‘Clean Code’ if you’d like to improve on it.

## My Workflow

I’ve found myself using VSCode for most of my code editing. So this part would be mainly focused on its plugins. But this general workflow can be applied to most editors.

- [TSLint Plugin](https://marketplace.visualstudio.com/items?itemName=eg2.tslint) for linting TypeScript code. This is especially useful in TypeScript where we get to detect type errors early. (With style rules disabled)
- Prettier Plugin to do everything we’ve discussed in the article
- _HTML Formatting (JS-beautify via VSCode integration)_ — I used to use this but now Prettier has built-in support for this.
- Organize imports on save
- Format on save enabled on
- Setup Prettier on a CI tool to avoid rouge commit from getting in

This is my current setup and it will change going as I find new things. If you have any suggestions, I’ll be happy to try them out!

## Conclusion

That was a longer write-up than what I was expecting but there is a lot to talk about Prettier. We looked at what it is, how it works, how it is different from Linters, what the advantages of using it and finally how to use it in your project.

That’s all I have to say about Prettier for now. I have found some more interesting things about it like the pre-commit hooks and some packages to remove style related lint rules by default. I will keep using Prettier on all my future projects and hopefully learn more interesting things with time.
