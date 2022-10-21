const modals = () => {
    function bindModals(triggerSelector, modalsSelector, closeSelector, closeClickOverlay = true){
        const trigger = document.querySelectorAll(triggerSelector),
              modals = document.querySelector(modalsSelector),
              close = document.querySelector(closeSelector),
              windows = document.querySelectorAll('[data-modal]');

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
            });
        });

        close.addEventListener('click', () =>{
            windows.forEach(item =>{
                item.style.display = 'none';
            });
            modals.style.display = 'none';
            document.body.style.overflow = '';
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

    function showModalsThroughTime(selector, time){
        setTimeout(function(){
            document.querySelector(selector).style.display = 'block';
            document.body.style.overflow = "hidden";
        }, time);
    }
    bindModals('.popup_engineer_btn', '.popup_engineer', '.popup_engineer .popup_close');
    bindModals('.phone_link', '.popup', '.popup .popup_close');
    bindModals('.popup_calc_btn', '.popup_calc', '.popup_calc_close');
    bindModals('.popup_calc_button', '.popup_calc_profile', '.popup_calc_profile_close', false);
    bindModals('.popup_calc_profile_button', '.popup_calc_end', '.popup_calc_end_close', false);
    //showModalsThroughTime('.popup', 60000);
};
export default modals;