function calculateScore() {
    const answers = {
        q1: 'C',
        q2: 'B',
        // Add correct answers for questions 3 to 10
    };

    let score = 0;
    const form = document.getElementById('quizForm');

    for (let question in answers) {
        const selected = form[question].value;
        if (selected === answers[question]) {
            score += 4; // Correct answer
        } else if (selected) {
            score -= 1; // Wrong answer
        }
    }

    document.getElementById('result').innerText = `Your score is: ${score}`;
}
