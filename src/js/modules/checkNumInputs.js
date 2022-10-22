const checkNumInputs = (selector) =>{
    const numInputs = document.querySelectorAll(selector);
    numInputs.forEach(item =>{
        item.addEventListener('input', () =>{
            item.value = item.value.replace(/[^+\d]/g, '');
        });
   });
};
export default checkNumInputs;