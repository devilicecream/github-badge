# Github Badge
Very simple *Github* badge embeddable in every website.
It uses the public *Github* APIs to get info about the specified user and his contibution.

## Included
Easily customizable via CSS, it comes with Boostrap 3 support (you will need to write less CSS to make it look fancy)
and two CSS files that make it look good without any effort.

## Requirements
The only requirement is jQuery.

## How does it work
Include the CSS file and jQuery at the top of your HTML page, and JS file at the bottom.

```html
<html>
    <head>
        <link rel="stylesheet" type="text/css" media="screen" href="<path to>/github-badge.css" />
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"></script>    
    </head>
    <body>
        <script type="text/javascript" src="<path to>/github-badge.js"></script>
    </body>
</html>

```

Add a div element with id `github-badge` (You can choose your own element id, but then you'll have to edit the default CSS file)

```html
<html>
    <head>
        <link rel="stylesheet" type="text/css" media="screen" href="<path to>/github-badge.css" />
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"></script>    
    </head>
    <body>
        
        <div id="github-badge"></div>
        
        <script type="text/javascript" src="<path to>/github-badge.js"></script>
    </body>
</html>

```

Initialize the badge with this JS string

```javascript
new GitHubBadge(<'#github-badge' or a jQuery selector that picks the badge element>, <github username>);
```

## Examples
There are a couple of examples in the *example* folder.
The first one `no_bootstrap.html`, as you can tell, doesn't use bootstrap to render the badge, while the second one `with_bootstrap.html` does.

This is how the `no_boostrap.html` example looks like:

![alt text](https://github.com/devilicecream/github-badge/blob/master/example/screen.png?raw=true "Github Badge")


### Enjoy!