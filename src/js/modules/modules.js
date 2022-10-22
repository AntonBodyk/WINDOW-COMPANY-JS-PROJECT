const modals = () => {
    
    function bindModals(triggerSelector, modalsSelector, closeSelector, closeClickOverlay = true){
        const trigger = document.querySelectorAll(triggerSelector),
              modals = document.querySelector(modalsSelector),
              close = document.querySelector(closeSelector),
              windows = document.querySelectorAll('[data-modal]'),
              offWindows = document.querySelectorAll('[data-close]'),
              scroll = calcScroll();


        offWindows.forEach(items =>{
            items.addEventListener('click', (e) =>{
                e.preventDefault();
                windows.forEach(item =>{
                    item.style.display = 'none';
                });
                modals.style.display = 'none';
                document.body.style.overflow = '';
            });
        });
       trigger.forEach(item =>{
            item.addEventListener('click', (e) =>{
                if(e.target){
                    e.preventDefault();
                }
                windows.forEach(item =>{
                    item.style.display = 'none';
                });
                modals.style.display = 'block';
                document.body.style.overflow = 'hidden';
                document.body.style.marginRight = `${scroll}px`;
            });
        });

        close.addEventListener('click', () =>{
            windows.forEach(item =>{
                item.style.display = 'none';
            });
            modals.style.display = 'none';
            document.body.style.overflow = '';
            document.body.style.marginRight = `0px`;
        });

        modals.addEventListener('click', (e) => {
            if(e.target === modals && closeClickOverlay){
                windows.forEach(item =>{
                    item.style.display = 'none';
                });
                modals.style.display = 'none';
                document.body.style.overflow = '';
            }
        });
        
    }
    
    function calcScroll(){
        let div = document.createElement('div');

        div.style.width = '50px';
        div.style.height = '50px';
        div.style.overflowY = 'scroll';
        div.style.visibility = 'hidden';

        document.body.appendChild(div);
        let scrollWidth = div.offsetWidth - div.clientWidth;
        div.remove();

        return scrollWidth;
    }
    bindModals('.popup_engineer_btn', '.popup_engineer', '.popup_engineer .popup_close');
    bindModals('.phone_link', '.popup', '.popup .popup_close');
    bindModals('.popup_calc_btn', '.popup_calc', '.popup_calc_close');
    bindModals('.popup_calc_button', '.popup_calc_profile', '.popup_calc_profile_close', false);
    bindModals('.popup_calc_profile_button', '.popup_calc_end', '.popup_calc_end_close', false);
    
};
export default modals;
