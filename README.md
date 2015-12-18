# jQuery-filterAndFind
[Article on why this function is useful](http://cereal.co/jquery-filter-find-and-ajax/)

## The filterAndFind() function

<pre>
$.fn.filterAndFind = function(el) {
    return this.filter(el).add(this.find(el));
};
</pre>

## Usage

data = $(data).filterAndFind(".element");
