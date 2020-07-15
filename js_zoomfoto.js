(function() {

    const zoom = function(event) {
        event.stopPropagation();
        event.preventDefault();        
        //console.log(this);

        if (!this.href) return;
        
        let divZoomImage = document.querySelector('#' + this.dataset.zoomImage),
            someListDelete = document.createElement('button');

        

        if (!divZoomImage) { 
            divZoomImage = document.createElement('div');
            divZoomImage.classList.add('zoomImage');
            divZoomImage.id = this.dataset.zoomImage;       
        };

        divZoomImage.innerHTML = '<img src="' + this.href + '" />';

        document.body.appendChild(divZoomImage);

        someListDelete.classList.add('list_tdl_delete');
        someListDelete.innerHTML = '&#215;';
        divZoomImage.appendChild(someListDelete);
        someListDelete.addEventListener('click', delString);
            //console.log(divZoomImage);
    };

    const delString = function() {
        //console.log('clear');
        //console.log(this.closest('div')); ищем ближайшего родителя
        this.closest('div').remove();
};

    const init = function() {

        let listA = document.querySelectorAll('a[data-zoom-image]');
        //console.log(listA);

        listA.forEach(function(a) {
            a.addEventListener('click', zoom);
        });

        document.addEventListener('click', function(event) {
            event.stopPropagation();
           //console.log(event);

           if  (event.target.parentElement.className != 'zoomImage' &&
                event.target.className != 'zoomImage') { 
                let divZoomImage = document.querySelector('.zoomImage');
                if (!divZoomImage) return;
                divZoomImage.remove();
             }
        });
    };

    if (init) window.addEventListener('load', init);

}());

