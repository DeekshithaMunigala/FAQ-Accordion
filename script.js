document.addEventListener('DOMContentLoaded', function() {
    const questions = document.querySelectorAll(".faq .row .question");

    questions.forEach(function(question) {
        question.addEventListener('click', function() {
            const answer = this.nextElementSibling.querySelector('.answer p');
            const plusIcon = this.querySelector('#plus-icon');
            const minusIcon = this.querySelector('#minus-icon');

            answer.classList.toggle('show');

            plusIcon.classList.toggle('hide');
            minusIcon.classList.toggle('show');
        });
    });
});