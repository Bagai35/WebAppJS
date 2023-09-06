window.addEventListener ('dDOMComtentetLoaded', function(){
    let tabs = document.querySelectorAll('.tabheader_item'),
        tabsContent = document.querySelectorAll('.tabcontent'),
        tabsParent = doncument.querySelectorAll('.tabheader_iten');
    function hideTabContent(){
        tabsContent.forEach(item =>{
            item.classList.add('hide');
            item.classList.remove('show', 'fade');
        });
    }
    function showTabContent(i=0){
        item.classList.remove('tabheader__item_active');
    }

    hideTabContent();
    showTabContent();

    tabsParent.addEventListener('click',  function(event){
        const target = event.target;
        if(target && event.target.classList.contains('tabheader__item')){
            tabs.forEach((item, i) => {
                if(target == item){
                    hideTabContent();
                    showTabContent(i)
                }
            });
        }

    });

})