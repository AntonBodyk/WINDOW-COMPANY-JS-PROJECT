import checkNumInputs from './checkNumInputs';


const forms = (state) =>{
    const forms = document.querySelectorAll('form'),
          inputs = document.querySelectorAll('input');
          
          
    checkNumInputs('input[name="user_phone"]');
  
    const message = {
        loading: 'Загрузка...',
        success: 'Спасибо!Мы с Вами свяжемся',
        failure: 'Что-то пошло не так...'
    };

    const postData = async (url, data) => {
        document.querySelector('.status').textContent = message.loading;
        let res = await fetch(url, {
            method: 'POST',
            body: data
        });
        return await res.text();
    };

    const clearInputs = () =>{
        inputs.forEach(item =>{
            item.value = '';
        });
    };
    forms.forEach(item => {
        item.addEventListener('submit', (e) =>{
            e.preventDefault();
            
            let statusMessage = document.createElement('div');
            statusMessage.classList.add('status');
            item.appendChild(statusMessage);

            const formData = new FormData(item);
            if(item.getAttribute('data-calc') === 'end'){
                for(let key in state){
                    formData.append(key, state[key]);
                }
            }
            
            postData('assets/server.php', formData)
                .then(res =>{
                    console.log(res);
                    statusMessage.textContent = message.success;
                })
                .catch(() => statusMessage.textContent = message.failure)
                .finally(() =>{
                    clearInputs();
                    setTimeout(() =>{
                        statusMessage.remove();
                    }, 5000);
                    setTimeout(() =>{
                        const window = document.querySelectorAll('[data-modal]');
                        window.forEach(items =>{
                            items.style.display = 'none';
                            document.body.style.overflow = '';
                            document.body.style.marginRight = `0px`;
                        }, 7000);
                    });
                });
        });
    });

};
export default forms;