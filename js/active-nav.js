// Funktio aktiivisen navigointilinkin korostamiseen
document.addEventListener('DOMContentLoaded', function() {
    // Hae nykyinen sivu URL:sta
    const currentPath = window.location.pathname;
    const currentPage = currentPath.split('/').pop();
    
    console.log('Debug - Current path:', currentPath);
    console.log('Debug - Current page:', currentPage);
    
    // Hae kaikki navigointilinkit
    const navLinks = document.querySelectorAll('nav ul li a');
    
    // Tarkista onko nykyinen sivu etusivu (joko / tai /index.html)
    const isHomePage = currentPath === '/' || currentPath === '/index.html' || currentPage === '' || currentPage === 'index.html';
    
    // Käy läpi kaikki linkit
    navLinks.forEach(link => {
        const linkHref = link.getAttribute('href');
        const linkPage = linkHref.split('/').pop();
        
        console.log('Debug - Link href:', linkHref, 'Link page:', linkPage);
        
        // Tarkista vastaako linkki nykyistä sivua
        let isActive = false;
        
        // Etusivu - tarkistetaan onko tämä kotisivu-linkki JA ollaanko kotisivulla
        if (isHomePage && (linkPage === 'index.html' || linkHref === '../index.html' || linkHref === 'index.html' || linkHref === './')) {
            // Tarkistetaan lisäksi onko tämä navigaation Koti-linkki
            if (link.textContent.trim() === 'Koti') {
                isActive = true;
            }
        }
        // Muut sivut - verrataan tarkasti nykyistä sivua linkin kohteeseen
        else if (currentPage !== '' && currentPage === linkPage) {
            isActive = true;
        }
        
        // Jos linkki on aktiivinen
        if (isActive) {
            // Poista mahdolliset inline-tyylit jos niitä on
            if (link.hasAttribute('onmouseover')) {
                link.removeAttribute('onmouseover');
            }
            if (link.hasAttribute('onmouseout')) {
                link.removeAttribute('onmouseout');
            }
            
            // Lisää parent li-elementille active-luokka
            link.parentElement.classList.add('active');
            
            console.log('Aktiivinen sivu: ' + currentPage + ', Aktiivinen linkki: ' + linkHref);
        } else {
            // Varmistetaan että ei-aktiivisilla linkeillä ei ole active-luokkaa
            link.parentElement.classList.remove('active');
        }
    });
}); 