const images = () =>{
    const popupImg = document.createElement('div'),
          workSection = document.querySelector('.works'),
          bigImage = document.createElement('img');

    popupImg.classList.add('popup');
    workSection.appendChild(popupImg);

    popupImg.style.justifyContent = 'center';
    popupImg.style.alignItems = 'center';
    popupImg.style.display = 'none';

    popupImg.appendChild(bigImage);

    workSection.addEventListener('click', (e) => {
        e.preventDefault();

        let target = e.target;

        if (target && target.classList.contains('preview')) {
            popupImg.style.display = 'flex';
            const path = target.parentNode.getAttribute('href');
            bigImage.setAttribute('src', path);
        }

        if (target && target.matches('div.popup')) {
            popupImg.style.display = 'none';
        }
    });
};

export default images;