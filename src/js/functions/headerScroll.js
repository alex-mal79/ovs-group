//================================================================
// Шапка при скролле
//================================================================
export const headerScroll = () => {
    const header = document.querySelector('.header');
    if(header){
        let lastScroll = 0;
        const defaultOffset = 150;
        const scrollPosition = () => window.scrollY || document.documentElement.scrollTop;
        const containHide = () => header.classList.contains('scroll--active');
        window.addEventListener('scroll--active', () => {
            if(scrollPosition() > lastScroll && !containHide() && scrollPosition() > defaultOffset) {
                //scroll down
                header.classList.add('scroll--active');
            }
            else if(scrollPosition() < lastScroll && containHide()){
                //scroll up
                header.classList.remove('scroll--active');
            }
            lastScroll = scrollPosition();
        });
    }
}