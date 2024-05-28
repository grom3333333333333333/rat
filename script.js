document.addEventListener('DOMContentLoaded', function () {
    const ratingData = [
        { name: 'Аня Миронова', avatar: 'img/аням.png', role: 'Редактор', tasks: { posts: 0, articles: 0, design: 0, events: 0, deadlines: 0 } },
      //  { name: 'Илья Райский', avatar: 'img/илья.png', role: 'Папа', tasks: { posts: 0, articles: 0, design: 0, events: 0, deadlines: 0 } },
       // { name: 'Kulek Kulek', avatar: 'img/z.png', role: 'Администратор', tasks: { posts: 0, articles: 0, design: 0, events: 0, deadlines: 0 } },
        { name: 'Kesha Volnisty', avatar: 'img/кеша.png', role: 'Корректор', tasks: { posts: 0, articles: 0, design: 0, events: 0, deadlines: 0 } },
        { name: 'Даниил Аватарский', avatar: 'img/даняа.png', role: 'Редактор', tasks: { posts: 0, articles: 0, design: 0, events: 0, deadlines: 0 } },
        { name: 'София Кошиль', avatar: 'img/соф.png', role: 'Редактор', tasks: { posts: 1, articles: 0, design: 0, events: 0, deadlines: 0 } },
       // { name: 'Лайза Афанасьева', avatar: 'img/лайза.png', role: 'редактор', tasks: { posts: 0, articles: 0, design: 0, events: 0, deadlines: 0 } },
        { name: 'Vld Dlv', avatar: 'img/влд.png', role: 'Редактор', tasks: { posts: 0, articles: 0, design: 0, events: 0, deadlines: 0 } },
        { name: 'Mikhail Kotikov', avatar: 'img/миша.png', role: 'Редактор', tasks: { posts: 1, articles: 0, design: 0, events: 0, deadlines: 0 } }
    ];

    const points = {
        posts: 1,
        articles: 3,
        design: 2,
        events: 10,
        deadlines: 1
    };

    const calculateScore = tasks => {
        let score = 0;
        for (let task in tasks) {
            score += tasks[task] * points[task];
        }
        return score;
    };

    const ratingContainer = document.getElementById('rating');
    const noRatingText = document.getElementById('no-rating');

    if (ratingData.length === 0) {
        noRatingText.style.display = 'block';
        ratingContainer.style.display = 'none';
    } else {
        noRatingText.style.display = 'none';
        ratingContainer.style.display = 'flex';

        ratingData.sort((a, b) => calculateScore(b.tasks) - calculateScore(a.tasks)).forEach(item => {
            const score = calculateScore(item.tasks);

            const ratingItem = document.createElement('div');
            ratingItem.className = 'rating-item';

            const avatar = document.createElement('img');
            avatar.src = item.avatar;
            avatar.alt = `${item.name} avatar`;

            const name = document.createElement('span');
            name.className = 'name';
            name.textContent = item.name;

            const role = document.createElement('span');
            role.className = 'role';
            role.textContent = item.role;

            const scoreElem = document.createElement('span');
            scoreElem.className = 'score';
            scoreElem.textContent = `Баллы: ${score}`;

            const detailsButton = document.createElement('button');
            detailsButton.textContent = 'Подробнее';
            detailsButton.addEventListener('click', () => showModal(item));

            ratingItem.appendChild(role);
            ratingItem.appendChild(avatar);
            ratingItem.appendChild(name);
            ratingItem.appendChild(document.createElement('br'));
            ratingItem.appendChild(scoreElem);
            ratingItem.appendChild(document.createElement('br'));
            ratingItem.appendChild(detailsButton);

            ratingContainer.appendChild(ratingItem);
        });
    }

    function showModal(item) {
        const existingModal = document.querySelector('.modal');
        if (existingModal) {
            existingModal.remove();
        }

        const modal = document.createElement('div');
        modal.className = 'modal';
        modal.style.display = 'flex';

        const modalContent = document.createElement('div');
        modalContent.className = 'modal-content';

        const modalHeader = document.createElement('div');
        modalHeader.className = 'modal-header';

        const modalTitle = document.createElement('h2');
        modalTitle.textContent = item.name;

        const closeModal = document.createElement('span');
        closeModal.className = 'close';
        closeModal.innerHTML = '&times;';
        closeModal.addEventListener('click', () => modal.remove());

        modalHeader.appendChild(modalTitle);
        modalHeader.appendChild(closeModal);

        const modalBody = document.createElement('div');
        modalBody.className = 'modal-body';

        const taskList = document.createElement('ul');
        for (let task in item.tasks) {
            const taskItem = document.createElement('li');
            taskItem.textContent = `${task}: ${item.tasks[task]} (баллы: ${item.tasks[task] * points[task]})`;
            taskList.appendChild(taskItem);
        }

        modalBody.appendChild(taskList);
        modalContent.appendChild(modalHeader);
        modalContent.appendChild(modalBody);
        modal.appendChild(modalContent);
        document.body.appendChild(modal);
    }
});
