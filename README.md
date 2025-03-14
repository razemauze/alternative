# Alternative

Alternative is a small, low-styled HTML & CSS grid-setup.

The size of Minified Alternative is: __~62 kB__.  
The size of Minified and Gzipped Alternative is: __~5 kB__.

As an alternative to Bootstrap and Flexbox Grid, Alternative, uses some of the same methods, but gives you, as a developer, more possibilities to customize and style your website.

You can download the CSS- og SCSS-files and import them directly into your project, or use this repository as CDN.  
CDN: `https://cdn.jsdelivr.net/gh/razemauze/alternative/css/alternative.css`
CDN with version: `https://cdn.jsdelivr.net/gh/razemauze/alternative@v1.0.10/css/alternative.css`

Minimal styling
---------------

For more freedom, theres minimal styling to `.row`s and `.col`s.


Flexible columns
----------------

Just use the `.col` to make the columns split evenly across the row.

```
<div class="row">
  <div class="col">col</div>
  <div class="col">col</div>
  <div class="col">col</div>
  <div class="col">col</div>
  <div class="col">col</div>
</div>
```

Flexible columns with percentages
---------------------------------

Alternative lets you choose how many percent of the page the current
column should take up

```
<div class="row">
  <div class="col col-50">
    50%
  </div>
  <div class="col col-30">
    30%
  </div>
  <div class="col col-20">
    20%<br>
    And it stretches!
  </div>
</div>
```

Two types of Rows
-----------------

`.row` has a max-width of 1400px.  
`.row--full` has no max-width.

```
<div class="row">
  <div class="col col-50">
    <div class="box">50%</div>
  </div>
  <div class="col col-50">
    <div class="box">50%</div>
  </div>
</div>

<div class="row--full">
  <div class="col col-50">
    <div class="box">50%</div>
  </div>
  <div class="col col-50">
    <div class="box">50%</div>
  </div>
</div>
```

Media Queries & breakpoints
---------------------------

Use the breakpoints to make your grid responsive. Just add the breakpoint as a prefix to the col.  
If you want your div to be 50% on screens larger than 1400px, but 100%
on smaller screens, add the classes: `col-100 lg:col-50`.

**Breakpoints:**

- No prefix, min-width: 0px
- sm, min-width: 768px
- md, min-width: 1024px
- lg, min-width: 1400px

```
<div class="row">
  <div class="col col-100 md:col-15 sm:col-50">
    md:15 sm:50
  </div>
  <div class="col col-100 md:col-48 sm:col-25">
    md:48 sm:25
  </div>
  <div class="col col-50 sm:col-25">
    50 sm:25
  </div>
  <div class="col col-50 md:col-12">
    50 md:12
  </div>
</div>
```

Hide and Stealth
----------------

Theres two classes for hiding: `.hide` and `.stealth`.

Both `.hide` and `.stealth` can be used with breakpoints by prefixing with the breakpoint (fx. `<div class="md:hide"></div>`).

### Hide

`.hide` is the hard-hide class, which means it gives a `display: none;` property to the element.

### Stealth

`.stealth` is the soft-hide class, and looks like this:

```
.stealth {
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
}
```

This makes for a good oportunity to make a transition to fade in the element, if it is needed after page load.

Show and Unstealth
----------------

Theres two classes for showing: `.show` and `.unstealth`.

Both `.show` and `.unstealth` can be used with breakpoints by prefixing with the breakpoint (fx. `<div class="md:show"></div>`).

### Show

`.show` is the hard-hide class, which means it gives a `display: block;` property to the element.

You can add a specific way to set the display if you fx want to display as flex, you can write `.show--flex`.

### Unstealth

`.unstealth` is the opposite of `.stealth` and looks like this:

```
.unstealth {
  opacity: 1;
  visibility: visible;
  pointer-events: all;
}
```

Flex and Order
----------------

### Flex

`.flex` gives the div `display: flex;`.
`.flex-row` gives the div `flex-direction: row;`.
`.flex-row-reverse` gives the div `flex-direction: row-reverse;`.
`.flex-column` gives the div `flex-direction: column;`.
`.flex-colum-reverse` gives the div `flex-direction: column-reverse;`.

### Order

You can give order-classes from 1 to 10, like `.order-n`
