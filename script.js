document.addEventListener('DOMContentLoaded', () => {

    // Config for all sections
    const sections = [
        {
            toggleId: 'toggle-productivity',
            gridId: 'grid-productivity',
            storageKey: 'section-productivity-visible',
            labelId: 'label-productivity' // (Optional if we wanted animations on label)
        },
        {
            toggleId: 'toggle-google',
            gridId: 'grid-google',
            storageKey: 'section-google-visible'
        },
        {
            toggleId: 'toggle-ai-tools',
            gridId: 'grid-ai-tools',
            storageKey: 'section-ai-tools-visible'
        },
        {
            toggleId: 'toggle-jobs',
            gridId: 'grid-jobs',
            storageKey: 'section-jobs-visible'
        },
        {
            toggleId: 'toggle-online-editors',
            gridId: 'grid-online-editors',
            storageKey: 'section-online-editors-visible'
        },
        {
            toggleId: 'toggle-entertainment',
            gridId: 'grid-entertainment',
            storageKey: 'section-entertainment-visible'
        },
        {
            toggleId: 'toggle-shopping',
            gridId: 'grid-shopping',
            storageKey: 'section-shopping-visible'
        },
        {
            toggleId: 'toggle-bank-invest',
            gridId: 'grid-bank-invest',
            storageKey: 'section-bank-invest-visible'
        },
        {
            toggleId: 'toggle-other-productivity',
            gridId: 'grid-other-productivity',
            storageKey: 'section-other-visible'
        },
        {
            toggleId: 'toggle-things-tools',
            gridId: 'grid-things-tools',
            storageKey: 'section-things-tools-visible'
        }
    ];

    sections.forEach(config => {
        const toggle = document.getElementById(config.toggleId);
        const grid = document.getElementById(config.gridId);

        if (!toggle || !grid) return; // Guard clause

        // Function to toggle visibility
        function setVisibility(isVisible) {
            if (isVisible) {
                grid.classList.remove('hidden');
            } else {
                grid.classList.add('hidden');
            }
        }

        // 1. Initial Load: Read from LocalStorage (default true)
        const savedState = localStorage.getItem(config.storageKey);
        const isVisible = savedState === null ? true : JSON.parse(savedState);

        // Apply state
        toggle.checked = isVisible;
        setVisibility(isVisible);

        // 2. Event Listener: Handle changes
        toggle.addEventListener('change', (e) => {
            const checked = e.target.checked;
            setVisibility(checked);
            localStorage.setItem(config.storageKey, JSON.stringify(checked));
        });
    });
});
