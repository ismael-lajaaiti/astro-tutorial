---
title: Simulating food web dynamics in Julia
pubDate: 2024-08-21
description: This is the first post of my new Astro blog.
author: Ismaël Lajaaiti
image:
    url: '/assets/bigeatsmall.jpg'
    alt: 'The Astro logo on a dark background with a pink glow.'
tags: ["ecology", "foodwebs", "julia"]
---

> [!warning]
> Work in progress, coming soon (or not).

Welcome to my _new blog_ about learning Astro! Here, I will share my learning journey as I build a new website.
test

## What I've accomplished

This is a list: 
1. **Installing Astro**: First, I created a new Astro project and set up my online accounts.

2. **Making Pages**: I then learned how to make pages by creating new `.astro` files and placing them in the `src/pages/` folder.

3. **Making Blog Posts**: This is my first blog post! I now have Astro pages and Markdown posts!

And here is an equation 
$$
\phi = 1 
$$

Let $a=1$ and $b=2$ be two numbers.

```r "a" 
library(tidyverse)
a = 1 # This is a comment.
a = 2
```

And here is a julia code block

```julia
using Random
Random.seed!(1234)
```

And here is a code block with collapsed sections

```js collapse={1-5, 12-14}
// All this boilerplate setup code will be collapsed
import { someBoilerplateEngine } from '@example/some-boilerplate'
import { evenMoreBoilerplate } from '@example/even-more-boilerplate'

const engine = someBoilerplateEngine(evenMoreBoilerplate())

// This part of the code will be visible by default
engine.doSomething(1, 2, 3, calcFn)

function calcFn() {
  // You can have multiple collapsed sections
  const a = 1
  const b = 2
  return a + b
}
```

## What's next

I will finish the Astro tutorial, and then keep adding more posts. Watch this space for more to come.
