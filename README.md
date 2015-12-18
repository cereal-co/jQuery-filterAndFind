# jQuery-filterAndFind
For information about this function, please read this [Article](http://cereal.co/jquery-filter-find-and-ajax/).

## The filterAndFind() function

<pre>
$.fn.filterAndFind = function(el) {
    return this.filter(el).add(this.find(el));
};
</pre>

## Usage

<pre>
data = $(data).filterAndFind(".element");
</pre>
