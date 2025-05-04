if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}

function init() {
    document.getElementById('list-items').addEventListener('click', (event) => {
        const open = event.target.closest('[data-open]');
        if (open) {
            const parent = open.closest('[data-parent]');
            parent.classList.toggle('list-item_open');
        }
    });
}
