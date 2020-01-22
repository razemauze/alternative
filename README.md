Gridstrap
=========

Flexible columns
----------------

Just use the `.col` to make the columns slipt evenly across the row.

```
<div class="row">
	<div class="col">
		<div class="box">col</div>
	</div>
	<div class="col">
		<div class="box">col</div>
	</div>
	<div class="col">
		<div class="box">col</div>
	</div>
	<div class="col">
		<div class="box">col</div>
	</div>
	<div class="col">
		<div class="box">col</div>
	</div>
</div>
```

Flexible columns with percentages
---------------------------------

Gridstraps lets you choose how many percent of the page the current
column should take up

```
<div class="row">
	<div class="col col-50">
		<div class="box">50%</div>
	</div>
	<div class="col col-30">
		<div class="box">30%</div>
	</div>
	<div class="col col-20">
		<div class="box">
			20%<br>
			And it stretches!
		</div>
	</div>
</div>
```

Media Queries & breakpoints
---------------------------

Use the breakpoints to make your grid responsive. Just add the
breakpoint as a prefix to the col.  
If you want your div to be 50% on screens larger than 1400px, but 100%
on smaller screens, add the classes: `col-100 lg:col-50`.

**Breakpoints:**

xs: 0 - 767px  
sm: 768px - 1024px  
md: 1024px - 1400px  
lg: 1400px +

```
<div class="row">
	<div class="col col-100 md:col-15 sm:col-50">
		<div class="box">md:15 sm:50</div>
	</div>
	<div class="col col-100 md:col-48 sm:col-25">
		<div class="box">md:48 sm:25</div>
	</div>
	<div class="col xs:col-50 sm:col-25">
		<div class="box">sm:25 xs:50</div>
	</div>
	<div class="col xs:col-50 md:col-12">
		<div class="box">md:12 xs:50</div>
	</div>
</div>
```
