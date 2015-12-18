$.fn.filterAndFind = function(el) {
    return this.filter(el).add(this.find(el));
};
