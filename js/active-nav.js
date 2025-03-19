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
    const isHomePage = currentPath === '/' || 
                        currentPath === '/index.html' || 
                        currentPage === '' || 
                        currentPage === 'index.html';
    
    console.log('Debug - Is home page:', isHomePage);
    
    // Käy läpi kaikki linkit
    navLinks.forEach(link => {
        const linkHref = link.getAttribute('href');
        const linkPage = linkHref.split('/').pop();
        
        console.log('Debug - Link href:', linkHref, 'Link page:', linkPage);
        
        // Tarkista vastaako linkki nykyistä sivua
        let isActive = false;
        
        // Etusivu - tarkistetaan onko tämä kotisivu-linkki JA ollaanko kotisivulla
        if (isHomePage) {
            if (linkPage === 'index.html' || 
                linkHref === 'index.html' || 
                linkHref === './' || 
                linkHref === '/' || 
                linkHref === '../index.html' ||
                link.textContent.trim().toLowerCase() === 'koti') {
                isActive = true;
                console.log('Debug - Activating home link:', linkHref);
            }
        }
        // Muut sivut - verrataan tarkasti nykyistä sivua linkin kohteeseen
        else if (currentPage !== '' && currentPage === linkPage) {
            isActive = true;
            console.log('Debug - Activating page link:', currentPage, linkPage);
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
            
            // Muuta linkin tyylejä manuaalisesti vastaamaan aktiivista tilaa
            link.style.background = 'linear-gradient(135deg, rgba(0, 120, 215, 0.8), rgba(0, 80, 170, 0.8))';
            link.style.color = 'white';
            link.style.fontWeight = '600';
            link.style.boxShadow = '0 3px 10px rgba(0, 100, 200, 0.3)';
            
            console.log('Aktiivinen sivu: ' + currentPage + ', Aktiivinen linkki: ' + linkHref);
        } else {
            // Varmistetaan että ei-aktiivisilla linkeillä ei ole active-luokkaa
            link.parentElement.classList.remove('active');
        }
    });
}); 