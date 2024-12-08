function loadContent(page, selectedItem = null) {
    fetch(page)
        .then(response => response.text())
        .then(data => {
            document.getElementById('content-area').innerHTML = data;

            // Aqui você pode chamar a função do edit_nutriJS.js se a página for a que você deseja
            if (page === '/edit_nutri') {
                
            }
            if (selectedItem) {
                selectSidebarItem(selectedItem);
            }
        })
        .catch(error => {
            document.getElementById('content-area').innerHTML = '<p>Error loading content</p>';
            console.error('Error:', error);
        });
}




function toggleSubmenu(submenuId, menuItem) {
    const submenu = document.getElementById(submenuId);
    const chevron = menuItem.querySelector('.fa-chevron-down');
    
    if (submenu.style.maxHeight) {
        submenu.style.maxHeight = null;
        chevron.classList.remove('rotate');
    } else {
        submenu.style.maxHeight = submenu.scrollHeight + "px";
        chevron.classList.add('rotate');
    }
}

function selectSidebarItem(selectedItem) {
    document.querySelectorAll('.sidebar-item-idx_identifier').forEach(item => {
        item.classList.remove('active');
    });
    selectedItem.classList.add('active');
}

document.addEventListener('DOMContentLoaded', function() {
    
});