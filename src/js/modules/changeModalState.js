import checkNumInputs from './checkNumInputs';
const changeModalState = (state) =>{
    const windowForm = document.querySelectorAll('.balcon_icons_img'),
          windowWidth = document.querySelectorAll('#width'),
          windowHeight = document.querySelectorAll('#height'),
          windowType = document.querySelectorAll('#view_type'),
          windowProfile = document.querySelectorAll('.checkbox');

    checkNumInputs('#width');
    checkNumInputs('#height');
    function bindElements (elem, event, prop){
        elem.forEach((item, i) =>{
            item.addEventListener(event, () =>{
                switch(item.nodeName){
                    case 'SPAN':
                        state[prop] = i;
                        console.log('span');
                        break;
                    case 'INPUT':
                        if(item.getAttribute('type') === 'checkbox'){
                            i === 0 ? state[prop] = 'Холодное': state[prop] = 'Тёплое';
                            elem.forEach((box, j) =>{
                                box.checked = false;
                                if(i == j){
                                    box.checked = true;
                                }
                            });
                            
                        }else{
                            state[prop] = item.value;
                        }
                        break;
                    case 'SELECT':
                        state[prop] = item.value;
                        break;
                }
            });
        });
    }
    bindElements( windowForm, 'click', 'form');
    bindElements( windowWidth, 'input', 'width');
    bindElements(windowHeight, 'input',  'height');
    bindElements(windowType, 'change', 'type');
    bindElements(windowProfile, 'input',  'profile');
};
export default changeModalState;