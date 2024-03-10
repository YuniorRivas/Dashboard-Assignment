document.addEventListener('DOMContentLoaded', () => {
    const mainContentFilter = document.getElementById('mainContentFilter');
    const functionalityFilter = document.getElementById('functionalityFilter');
    const targetAudienceFilter = document.getElementById('targetAudienceFilter');

    function resetOtherFilters(currentFilter) {
        [mainContentFilter, functionalityFilter, targetAudienceFilter].forEach(filter => {
            if (filter !== currentFilter) {
                filter.value = 'all';
            }
        });
    }

    function filterCards() {
        const contentValue = mainContentFilter.value;
        const functionalityValue = functionalityFilter.value;
        const targetAudienceValue = targetAudienceFilter.value;

        const cards = document.querySelectorAll('.card');
        cards.forEach(card => {
            const contentMatch = contentValue === 'all' || card.getAttribute('data-category') === contentValue;
            const functionalityMatch = functionalityValue === 'all' || card.getAttribute('data-functionality') === functionalityValue;
            const targetAudienceMatch = targetAudienceValue === 'all' || card.getAttribute('data-audience') === targetAudienceValue;

            if (contentMatch && functionalityMatch && targetAudienceMatch) {
                card.style.display = '';
            } else {
                card.style.display = 'none';
            }
        });
    }

    mainContentFilter.addEventListener('change', function() {
        resetOtherFilters(this);
        filterCards();
    });

    functionalityFilter.addEventListener('change', function() {
        resetOtherFilters(this);
        filterCards();
    });

    targetAudienceFilter.addEventListener('change', function() {
        resetOtherFilters(this);
        filterCards();
    });
});
