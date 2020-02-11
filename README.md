# Alternative

Alternative is a small (62 KB), low-styled HTML & CSS grid-setup.  
As an alternative to Bootstrap and Flexbox Grid, Alternative, uses some of the same methods, but gives you, as a developer, more possibilities to customize and style you website.

CDN: `https://cdn.jsdelivr.net/gh/rasmusbihllarsen/alternative/css/alternative.css`

Minimal styling
---------------

For more freedom, theres minimal styling to `.row`s and `.col`s.


Flexible columns
----------------

Just use the `.col` to make the columns slipt evenly across the row.

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

Gridstraps lets you choose how many percent of the page the current
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
`.row__full` has no max-width.

```
<div class="row">
  <div class="col col-50">
    <div class="box">50%</div>
  </div>
  <div class="col col-50">
    <div class="box">50%</div>
  </div>
</div>

<div class="row__full">
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

- xs, min-width: 0px
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
  <div class="col xs:col-50 sm:col-25">
    sm:25 xs:50
  </div>
  <div class="col xs:col-50 md:col-12">
    md:12 xs:50
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