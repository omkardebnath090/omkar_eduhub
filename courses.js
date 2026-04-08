function filterCourses(grade, clickedButton) {

    const allButtons = document.querySelectorAll('.filter-btn');
    allButtons.forEach(function(btn) {
        btn.classList.remove('active');  
    });
    clickedButton.classList.add('active');  


    const allCards = document.querySelectorAll('.course-card');


    allCards.forEach(function(card) {
        const cardGrade = card.getAttribute('data-grade'); 

        if (grade === 'all' || cardGrade === grade) {
            card.classList.remove('hidden'); 
        } else {
            card.classList.add('hidden');    
        }
    });
}

const params = new URLSearchParams(window.location.search)
const type = params.get('type')

if(type == 'free') {
    document.getElementById('paidCourses').style.display = 'none'
} else if (type == 'paid') {
    document.getElementById('freeCourses').style.display = 'none'
}