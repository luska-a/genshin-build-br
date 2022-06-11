/* - Animação de Rolagem - */
const scrollReveal = ScrollReveal({
    origin: 'top',
    distance: '5px',
    duration: 600,
    reset: false
})

scrollReveal.reveal(
    `#home, .container, .container .char_container,
    .char_container .char_title,
    #footer .logo,
    
    .page_char_section,
    .page_char_title,
    .page_char_image,

    .page_weapon_section,
    .page_weapon_container,
    .page_weapon_item,

    .page_artifact_section,
    .page_artifact_item,
    .page_artifact_item_double,
    .page_artifact_subitem,

    .page_priority_section,
    .page_priority_container,
    .page_priority_item,
    .page_priority_subitem,
    
    .page_talent_section,
    .page_talent_container,
    .page_talent_item,
    .page_talent_greaterthan,

    .page_section_comp,
    .page_comp_container,
    .page_comp_item,

    .page_section_title
    `, 
    { interval: 0 }
)

/*========== Botão voltar para o início ========== */
const backToTopButton = document.querySelector('.back-to-top')

window.addEventListener('scroll', function() {
    if(window.scrollY >= 150) {
        backToTopButton.classList.add('show')
    }
    else {
        backToTopButton.classList.remove('show')
    }
})