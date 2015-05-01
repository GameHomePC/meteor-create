Template.postItem.helpers({
    domain: function(e) {
        var element = document.createElement('a');

        element.href = this.url;

        return element.hostname
    }
});