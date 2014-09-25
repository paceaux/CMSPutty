# CMSPutty 
An HTML/CSS/JS template that fits into any CMS



## Under the Hood of CMSPutty

###BEM
CMSPutty relies on BEM: Block, Element, Modifier. BEM is a methodology for writing CSS classes and applying them to HTML. 

####General Overview
The big idea with BEM is that every element gets a class. The way that you construct the class is with a combination of block, element, and modifier keywords. 

A block is the largest unit of consumable data. An element is something inside of the block, that doesn't make sense if it ever leaves the block.A modifier is a change to either the block, or the element.   

Using BEM, `<header>` could be a block. So, we get this:

````
<header class="header">

</header>
````

This could map to a component, or a schema in a content management system. The block is the piece of content-managed, syndicated content. 

Inside of the Block, we have our Elements. These could map to a field in a component or schema within that CMS. We indicate an element with a double-underscore ( __ );

````

<header class="header">
	<h1 class="header__title">Title</h1>
</header>
````

The Modifier is a change to the original state. We indicate this by adding the block class again, appending a double-hyphen, and adding the modifier name:
````
<header class="header header--stretchScreen">
	<h1 class="header__title">Title</h1>
</header>

````
#### Hybrid BEM
CMSPutty uses a slight twist on BEM, which we call "Hybrid BEM". Another way to describe it is that we 'reset blocks'. All this means is that an element can also be a block. 

Here, we have a `header__nav` which is an element within the header. So we know that this particular navigation is meant for the header. 

We also see that it's a `nav`, so we know that it is also its own unique block. 

We then see that the list inside is a `nav__list`, meaning that it's a list specific to the context of a navigation. But we also see that this is also a `list`, meaning that it's a list block which could be used anywhere. 
````
	<nav class="header__nav nav nav--horizontal">
		<ul class="nav__list list">
			<li class="list__item"><a class="list__item__link" href="#">Home</a></li>
		</ul>
	</nav>
````


#### Why BEM is being used
* Synchronicity with the CMS. BEM allows us to create a class-naming system that can synchronize the back-end with the front-end. We can see from something like `article__title` that this is the article schema and the title field. 
* Highly specific class names. BEM creates class names that can be as specific as an ID. Something like `header__hgroup__title` isn't likely going to be used anywhere else, so you get the uniqueness of an ID without using an ID. 
* 


