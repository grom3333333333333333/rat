document.addEventListener('DOMContentLoaded', function () {
    let currentMonth = 'August'; // начальный месяц
    const ratingDataByMonth = {
        'June': [
            { name: 'Аня Миронова', avatar: 'img/аням.png', role: 'Редактор', tasks: { posts: 17, articles: 0, design: 1, events: 1, deadlines: 0, correction: 0, discussion: 0 }, merch: { points: 2, networks: ['Худи (VK)', 'АП (VK)'] } },
            { name: 'Innokenty Formalin', avatar: 'img/кеша.png', role: 'Корректор', tasks: { posts: 0, articles: 0, design: 0, events: 0, deadlines: 0, correction: 11, discussion: 0 }, merch: { points: 3, networks: ['Худи (VK)', 'АП (VK)', 'Худи (ОК)'] } },
            { name: 'Даниил Неаватарский', avatar: 'img/даняа.png', role: 'Корректор', tasks: { posts: 2, articles: 0, design: 0, events: 0, deadlines: 0, correction: 0, discussion: 0 }, merch: { points: 2, networks: ['Худи (VK)', 'АП (VK)'] } },
            { name: 'София Кошиль', avatar: 'img/соф.png', role: 'Редактор', tasks: { posts: 9, articles: 1, design: 1, events: 2, deadlines: 1, correction: 0, discussion: 0 }, merch: { points: 2, networks: ['Худи (VK)', 'АП (VK)'] } },
            { name: 'Mikhail Kotikov', avatar: 'img/миша.png', role: 'Редактор', tasks: { posts: 20, articles: 0, design: 2, events: 1, deadlines: 0, correction: 0, discussion: 0 }, merch: { points: 2, networks: ['Худи (VK)', 'АП (VK)'] } },
        ],
        'July': [
            { name: 'Илья Райский', avatar: 'img/илья.png', role: 'Король', tasks: { posts: 3, articles: 0, design: 0, events: 0, deadlines: 0, correction: 0, discussion: 0, penalty: 0 }, merch: { points: 0, networks: ['Везде.'] } },
            { name: 'Kulek Kulek', avatar: 'img/z.png', role: 'Администратор', tasks: { posts: 8, articles: 0, design: 3, events: 0, deadlines: 0, correction: 4, discussion: 0, penalty: 0 }, merch: { points: 0, networks: ['Везде.'] } },
            { name: 'Аня Миронова', avatar: 'img/аням.png', role: 'Редактор', tasks: { posts: 5, articles: 1, design: 0, events: 0, deadlines: 0, correction: 3, discussion: 0, penalty: 0 }, merch: { points: 2, networks: ['Худи (VK)', 'АП (VK)'] } },
            { name: 'Innokenty Formalin', avatar: 'img/кеша.png', role: 'Корректор', tasks: { posts: 0, articles: 0, design: 0, events: 0, deadlines: 0, correction: 8, discussion: 0, penalty: 0 }, merch: { points: 3, networks: ['Худи (VK)', 'АП (VK)', 'Худи (ОК)'] } },
            { name: 'Даниил Неаватарский', avatar: 'img/даняа.png', role: 'Корректор', tasks: { posts: 2, articles: 0, design: 0, events: 0, deadlines: 0, correction: 4, discussion: 0, penalty: 0 }, merch: { points: 2, networks: ['Худи (VK)', 'АП (VK)'] } },
            { name: 'София Кошиль', avatar: 'img/соф.png', role: 'Редактор', tasks: { posts: 2, articles: 0, design: 0, events: 0, deadlines: 0, correction: 0, discussion: 0, penalty: 0 }, merch: { points: 2, networks: ['Худи (VK)', 'АП (VK)'] } },
            { name: 'Mikhail Kotikov', avatar: 'img/миша.png', role: 'Глав. Редактор', tasks: { posts: 13, articles: 0, design: 5, events: 0, deadlines: 0, correction: 1, discussion: 0, penalty: 0 }, merch: { points: 2, networks: ['Худи (VK)', 'АП (VK)'] } },
            { name: 'Екатерина Фраерок', avatar: 'img/катя.png', role: 'Редактор', tasks: { posts: 1, articles: 1, design: 0, events: 0, deadlines: 1, correction: 0, discussion: 0, penalty: 0 }, merch: { points: 0, networks: ['Нет'] } },
            { name: 'Оля Шокорева', avatar: 'img/оля.png', role: 'Редактор', tasks: { posts: 7, articles: 1, design: 0, events: 0, deadlines: 1, correction: 0, discussion: 0, penalty: 0 }, merch: { points: 0, networks: ['Нет'] } },
            { name: 'Roman Bazhukov', avatar: 'img/рома.png', role: 'Редактор', tasks: { posts: 0, articles: 1, design: 0, events: 0, deadlines: 1, correction: 0, discussion: 0, penalty: 0 }, merch: { points: 0, networks: ['Нет'] } }
        ],
		'August': [
			{ name: 'Илья Райский', avatar: 'img/илья.png', role: 'Король', tasks: { posts: 0, articles: 0, design: 0, events: 0, deadlines: 0, correction: 0, discussion: 0, penalty: 0 }, merch: { points: 0, networks: ['Везде.'] } },
            { name: 'Kulek Kulek', avatar: 'img/z.png', role: 'Администратор', tasks: { posts: 12, articles: 0, design: 2, events: 1, deadlines: 0, correction: 0, discussion: 0, penalty: 0 }, merch: { points: 0, networks: ['Везде.'] } },
            { name: 'Аня Миронова', avatar: 'img/аням.png', role: 'Редактор', tasks: { posts: 8, articles: 1, design: 0, events: 3, deadlines: 2, correction: 0, discussion: 0, penalty: 0 }, merch: { points: 2, networks: ['Худи (VK)', 'АП (VK)'] } },
            { name: 'Innokenty Formalin', avatar: 'img/кеша.png', role: 'Корректор', tasks: { posts: 0, articles: 0, design: 0, events: 3, deadlines: 0, correction: 10, discussion: 0, penalty: 0 }, merch: { points: 3, networks: ['Худи (VK)', 'АП (VK)', 'Худи (ОК)'] } },
            { name: 'Даниил Неаватарский', avatar: 'img/даняа.png', role: 'Корректор', tasks: { posts: 0, articles: 0, design: 0, events: 1, deadlines: 0, correction: 2, discussion: 0, penalty: 0 }, merch: { points: 2, networks: ['Худи (VK)', 'АП (VK)'] } },
            { name: 'София Кошиль', avatar: 'img/соф.png', role: 'Редактор', tasks: { posts: 7, articles: 0, design: 0, events: 0, deadlines: 1, correction: 0, discussion: 0, penalty: 0 }, merch: { points: 2, networks: ['Худи (VK)', 'АП (VK)'] } },
            { name: 'Mikhail Kotikov', avatar: 'img/миша.png', role: 'Глав. Редактор', tasks: { posts: 7, articles: 0, design: 9, events: 3, deadlines: 2, correction: 1, discussion: 0, penalty: 0 }, merch: { points: 2, networks: ['Худи (VK)', 'АП (VK)'] } },
            { name: 'Екатерина Фраерок', avatar: 'img/катя.png', role: 'Редактор', tasks: { posts: 2, articles: 0, design: 0, events: 3, deadlines: 2, correction: 1, discussion: 0, penalty: 0 }, merch: { points: 0, networks: ['Нет'] } },
            { name: 'Оля Шокорева', avatar: 'img/оля.png', role: 'Редактор', tasks: { posts: 3, articles: 1, design: 0, events: 1, deadlines: 0, correction: 0, discussion: 0, penalty: 0 }, merch: { points: 0, networks: ['Нет'] } },
            { name: 'Roman Bazhukov', avatar: 'img/рома.png', role: 'Редактор', tasks: { posts: 0, articles: 0, design: 0, events: 3, deadlines: 2, correction: 0, discussion: 0, penalty: 0 }, merch: { points: 0, networks: ['Нет'] } }
        ]
    };

    const points = {
        posts: 1,
        articles: 3,
        design: 2,
        events: 10,
        deadlines: 1,
        correction: 0.5,
        discussion: 1.5,
        penalty: -1 // Штрафы
    };

    const monthSelector = document.getElementById('month-selector');
    const ratingContainer = document.getElementById('rating');
    const noRatingMessage = document.getElementById('no-rating');
    const progressBar = document.getElementById('progress-bar');
    const topEmployeeAvatar = document.getElementById('top-employee-avatar');
    const topEmployeeName = document.getElementById('top-employee-name');
    const topEmployeeScore = document.getElementById('top-employee-score');
    const socialMerchList = document.getElementById('social-merch-list');

    // Заполнение выпадающего списка месяцами
    for (let month in ratingDataByMonth) {
        let option = document.createElement('option');
        option.value = month;
        option.textContent = month;
        monthSelector.appendChild(option);
    }

    // Обновление данных при изменении месяца
    monthSelector.addEventListener('change', function () {
        currentMonth = this.value;
        updateRating();
    });

    // Функция обновления данных о рейтинге
    function updateRating() {
        const data = ratingDataByMonth[currentMonth];
        if (data && data.length > 0) {
            // Сортировка по убыванию баллов
            data.sort((a, b) => calculateScore(b.tasks) - calculateScore(a.tasks));

            ratingContainer.innerHTML = ''; // Очищаем текущие данные
            noRatingMessage.style.display = 'none';

            let totalPoints = 0;
            data.forEach((person, index) => {
                const ratingItem = document.createElement('div');
                ratingItem.classList.add('rating-item');

                ratingItem.innerHTML = `
                    <div class="image-container">
                        <img src="${person.avatar}" alt="${person.name}">
                        <div>
                            <div class="name">${person.name}</div>
                            <div class="role">${person.role}</div>
                            <div class="score">Баллы: ${calculateScore(person.tasks)}</div>
                            <div class="merch-info">Мерч: ${person.merch.points} баллов (${person.merch.networks.join(', ')})</div>
                        </div>
                    </div>
                `;

                ratingContainer.appendChild(ratingItem);

                ratingItem.addEventListener('click', function () {
                    showModal(person);
                });

                // Рассчитываем общие баллы для прогресс-бара
                totalPoints += calculateScore(person.tasks);
            });

            // Обновляем прогресс-бар
            updateProgressBar(totalPoints);

            // Находим самого активного сотрудника
            const topEmployee = data[0]; // Предполагаем, что первый элемент отсортированного массива - самый активный
            if (topEmployee) {
                topEmployeeAvatar.src = topEmployee.avatar;
                topEmployeeAvatar.alt = topEmployee.name;
                topEmployeeName.textContent = topEmployee.name;
                topEmployeeScore.textContent = `Баллы: ${calculateScore(topEmployee.tasks)}`;
            }
        } else {
            ratingContainer.innerHTML = '';
            noRatingMessage.style.display = 'block';
            progressBar.style.width = '0%';
            topEmployeeAvatar.src = '';
            topEmployeeName.textContent = '';
            topEmployeeScore.textContent = '';
        }
    }

    // Функция расчета общего количества баллов
    function calculateScore(tasks) {
        let totalScore = 0;
        for (let task in tasks) {
            totalScore += tasks[task] * points[task];
        }
        return totalScore;
    }

    // Функция отображения модального окна с деталями задач
    function showModal(item) {
        const modal = document.querySelector('.modal');
        const modalTitle = document.getElementById('modal-title');
        const modalBody = document.getElementById('modal-body');
        const modalTaskList = document.getElementById('modal-task-list');

        modalTitle.textContent = item.name;
        modalBody.textContent = ''; // Очищаем содержимое body перед добавлением новых данных

        const tasks = item.tasks;
        for (let task in tasks) {
            const taskItem = document.createElement('li');
            taskItem.textContent = `${task}: ${tasks[task]} (баллы: ${tasks[task] * points[task]})`;
            modalTaskList.appendChild(taskItem);
        }

        modal.style.display = 'block';

        // Закрытие модального окна при клике на крестик или вне окна
        const closeModal = modal.querySelector('.close');
        closeModal.addEventListener('click', () => {
            modal.style.display = 'none';
            modalTaskList.innerHTML = ''; // Очищаем список задач при закрытии модального окна
        });

        window.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.style.display = 'none';
                modalTaskList.innerHTML = ''; // Очищаем список задач при закрытии модального окна
            }
        });
    }

    // Функция обновления прогресс-бара
    function updateProgressBar(totalPoints) {
        if (totalPoints > 0) {
            const plan = 100; // Здесь можно указать план в баллах
            const progress = (totalPoints / plan) * 100;
            progressBar.style.width = `${progress}%`;
        } else {
            progressBar.style.width = '0%';
        }
    }

    // Инициализация при загрузке страницы
    updateRating();

    // Добавление блока для мерча сообщества
    const socialMerch = [
        { name: 'Аня Миронова', merch: { points: 2, networks: ['Худи (VK)', 'АП (VK)'] } },
        { name: 'Kesha Volnisty', merch: { points: 2, networks: ['Худи (VK)', 'АП (VK)'] } },
        { name: 'Даниил Аватарский', merch: { points: 2, networks: ['Худи (VK)', 'АП (VK)'] } },
        { name: 'София Кошиль', merch: { points: 2, networks: ['Худи (VK)', 'АП (VK)'] } },
        { name: 'Миша Котиков', merch: { points: 2, networks: ['Худи (VK)', 'АП (VK)'] } }
    ];

    socialMerch.forEach(person => {
        const merchDiv = document.createElement('div');
        merchDiv.classList.add('employee-merch-item');
        merchDiv.innerHTML = `
            <p>${person.name}:</p>
            <p>Баллы: ${person.merch.points}</p>
            <p>Доступен на: ${person.merch.networks.join(', ')}</p>
        `;
        socialMerchList.appendChild(merchDiv);
    });
});