// Данные сотрудников тотал поинтс до 29.05
const employees = [
    {
        id: 1,
        name: "Кирилл Кульков",
        role: "admin",
        avatar: "img/z.png",
        monthPoints: 1,
        totalPoints: 0,
        position: "Администратор",
        employeeOfMonth: 999,
        hoodie: 999,
        avapak: 999
    },
    {
        id: 2,
        name: "Илья Райский",
        role: "admin",
        avatar: "img/ilya.png",
        monthPoints: 0,
        totalPoints: 0,
        position: "Владелец",
        employeeOfMonth: 999,
        hoodie: 999,
        avapak: 999
    },
    {
        id: 3,
        name: "Михаил Котиков",
        role: "admin",
        avatar: "img/misha.png",
        monthPoints: 21,
        totalPoints: 0,
        position: "Главный редактор",
        employeeOfMonth: 999,
        hoodie: 999,
        avapak: 999
    },
    {
        id: 4,
        name: "Диана Фоменко",
        role: "admin",
        avatar: "img/didi.png",
        monthPoints: 15,
        totalPoints: 45,
        position: "Контент-менеджер",
        employeeOfMonth: 1,
        hoodie: 1,
        avapak: 1
    },
    {
        id: 5,
        name: "Денис Галлямов",
        role: "editor",
        avatar: "img/den.png",
        monthPoints: 11,
        totalPoints: 22,
        position: "Редактор",
        employeeOfMonth: 0,
        hoodie: 0,
        avapak: 0
    },
    {
        id: 6,
        name: "Лена Нестерова",
        role: "editor",
        avatar: "img/lena.png",
        monthPoints: 9,
        totalPoints: 11, // до 29.05
        position: "Редактор",
        employeeOfMonth: 0,
        hoodie: 1,
        avapak: 1
    },
    {
        id: 7,
        name: "Innokenty Formalin",
        role: "editor",
        avatar: "img/kesha.png",
        monthPoints: 20,
        totalPoints: 37,
        position: "Корректор",
        employeeOfMonth: 0,
        hoodie: 1,
        avapak: 1
    },	
    {
        id: 8,
        name: "Soon Soon",
        role: "trial",
        avatar: "img/paka.png",
        monthPoints: 0,
        totalPoints: 0,
        position: "Испытательный срок",
        employeeOfMonth: 0,
        hoodie: 0,
        avapak: 0
    },	
    {
        id: 9,
        name: "Soon Soon",
        role: "trial",
        avatar: "img/paka.png",
        monthPoints: 0,
        totalPoints: 0,
        position: "Испытательный срок",
        employeeOfMonth: 0,
        hoodie: 0,
        avapak: 0
    },	
    {
        id: 10,
        name: "Soon Soon",
        role: "trial",
        avatar: "img/paka.png",
        monthPoints: 0,
        totalPoints: 0,
        position: "Испытательный срок",
        employeeOfMonth: 0,
        hoodie: 0,
        avapak: 0
    },
    {
        id: 11,
        name: "Soon Soon",
        role: "trial",
        avatar: "img/paka.png",
        monthPoints: 0,
        totalPoints: 0,
        position: "Испытательный срок",
        employeeOfMonth: 0,
        hoodie: 0,
        avapak: 0
    },
	
];

// Архивные данные 

// 1 - кирилл 2 - илья 3 - миша 4 - диана 5 - денис 6 - лена 7 - кеша
const archiveData = {
    "Апрель 2024": [
        { id: 1, points: 0 },
        { id: 2, points: 0 },
        { id: 3, points: 0 },
		{ id: 4, points: 57 },
        { id: 5, points: 15.6 },
		{ id: 6, points: 0 },
        { id: 7, points: 13 }
    ],
    "Март 2024": [
        { id: 1, points: 0 },
        { id: 2, points: 0 },
        { id: 3, points: 0 },
		{ id: 4, points: 77 },
        { id: 5, points: 19 },
		{ id: 6, points: 11.7 },
        { id: 7, points: 19 }
    ],
};

// Товары в магазине
const products = [
    {
        id: "hoodie",
        name: "Худи GROMNEWS",
        price: 199,
        description: "999"
    },
    {
        id: "avapak",
        name: "Авапака GROMNEWS",
        price: 299,
        description: "999"
    }
];

// DOM элементы
const preloader = document.getElementById('preloader');
const mainContent = document.getElementById('main-content');
const monthRatingContainer = document.getElementById('month-rating');
const totalRatingContainer = document.getElementById('total-rating');
const monthSelect = document.getElementById('month-select');
const archiveResults = document.getElementById('archive-results');
const tabButtons = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');
const purchaseModal = document.getElementById('purchase-modal');
const profileModal = document.getElementById('profile-modal');
const modalTitle = document.getElementById('modal-title');
const modalText = document.getElementById('modal-text');
const confirmPurchase = document.getElementById('confirm-purchase');
const cancelPurchase = document.getElementById('cancel-purchase');
const closeModal = document.querySelectorAll('.close-modal');
const updateDate = document.getElementById('update-date');

// Элементы профиля
const profileAvatar = document.getElementById('profile-avatar');
const profileName = document.getElementById('profile-name');
const profilePosition = document.getElementById('profile-position');
const profilePoints = document.getElementById('profile-points');
const employeeOfMonth = document.getElementById('employee-of-month');
const hoodieCount = document.getElementById('hoodie-count');
const avapakCount = document.getElementById('avapak-count');

// Установка даты обновления
function setUpdateDate() {
    const now = new Date();
    const options = { 
        day: 'numeric', 
        month: 'long', 
        year: 'numeric', 
        hour: '2-digit', 
        minute: '2-digit' 
    };
    updateDate.textContent = now.toLocaleDateString('ru-RU', options);
}

// Создание карточки сотрудника
function createEmployeeCard(employee, showTotal = false) {
    const points = showTotal ? employee.totalPoints : employee.monthPoints;
    
    const card = document.createElement('div');
    card.className = `employee-card ${employee.role}`;
    card.style.backgroundImage = `url('${employee.avatar}')`;
    card.dataset.id = employee.id;
    
    card.innerHTML = `
        <div class="role-badge">${employee.position}</div>
        <div class="employee-info">
            <div class="employee-name">${employee.name}</div>
            <div class="employee-points">
                <i class="fas fa-bolt"></i>${points}
            </div>
        </div>
    `;
    
    // Добавляем обработчик клика для открытия профиля
    card.addEventListener('click', () => openProfileModal(employee.id));
    
    return card;
}

// Открытие модального окна профиля
function openProfileModal(employeeId) {
    const employee = employees.find(emp => emp.id === employeeId);
    if (!employee) return;
    
    profileAvatar.style.backgroundImage = `url('${employee.avatar}')`;
    profileName.textContent = employee.name;
    profilePosition.textContent = employee.position;
    profilePoints.textContent = employee.totalPoints;
    employeeOfMonth.textContent = `x${employee.employeeOfMonth}`;
    hoodieCount.textContent = `x${employee.hoodie}`;
    avapakCount.textContent = `x${employee.avapak}`;
    
    profileModal.style.display = 'flex';
}

// Загрузка рейтинга месяца
function loadMonthRating() {
    monthRatingContainer.innerHTML = '';
    
    // Сортируем по баллам за месяц
    const sortedEmployees = [...employees].sort((a, b) => b.monthPoints - a.monthPoints);
    
    sortedEmployees.forEach(employee => {
        monthRatingContainer.appendChild(createEmployeeCard(employee));
    });
}

// Загрузка накопительного рейтинга
function loadTotalRating() {
    totalRatingContainer.innerHTML = '';
    
    // Сортируем по общим баллам
    const sortedEmployees = [...employees].sort((a, b) => b.totalPoints - a.totalPoints);
    
    sortedEmployees.forEach(employee => {
        totalRatingContainer.appendChild(createEmployeeCard(employee, true));
    });
}

// Загрузка архива
function loadArchive() {
    // Очищаем и добавляем варианты выбора
    monthSelect.innerHTML = '<option value="">Выберите месяц</option>';
    
    Object.keys(archiveData).forEach(month => {
        const option = document.createElement('option');
        option.value = month;
        option.textContent = month;
        monthSelect.appendChild(option);
    });
    
    // Обработчик выбора месяца
    monthSelect.addEventListener('change', function() {
        const selectedMonth = this.value;
        
        if (!selectedMonth) {
            archiveResults.innerHTML = '<p>Выберите месяц для просмотра архивных данных</p>';
            return;
        }
        
        const monthData = archiveData[selectedMonth];
        
        // Находим сотрудников для этого месяца
        const employeesWithData = employees.map(employee => {
            const archiveEntry = monthData.find(item => item.id === employee.id);
            return {
                ...employee,
                monthPoints: archiveEntry ? archiveEntry.points : 0
            };
        });
        
        // Сортируем и отображаем
        const sortedEmployees = [...employeesWithData].sort((a, b) => b.monthPoints - a.monthPoints);
        
        archiveResults.innerHTML = `
            <h3>Рейтинг за ${selectedMonth}</h3>
            <div class="rating-container" id="archive-rating-container"></div>
        `;
        
        const archiveContainer = document.getElementById('archive-rating-container');
        
        sortedEmployees.forEach(employee => {
            archiveContainer.appendChild(createEmployeeCard(employee));
        });
    });
}

// Переключение табов
tabButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Удаляем активный класс у всех кнопок и контента
        tabButtons.forEach(btn => btn.classList.remove('active'));
        tabContents.forEach(content => content.classList.remove('active'));
        
        // Добавляем активный класс к выбранной кнопке и соответствующему контенту
        button.classList.add('active');
        const tabId = button.getAttribute('data-tab');
        document.getElementById(tabId).classList.add('active');
    });
});

// Управление модальными окнами
function openModal(product) {
    modalTitle.textContent = `Заказ ${product.name}`;
    modalText.textContent = `Ты хочешь обменять свои баллы на "${product.name}" за ${product.price} баллов. Для подтверждения заказа напишите Кириллу в личные сообщения.`;
    purchaseModal.style.display = 'flex';
}

function closeModalFunc() {
    purchaseModal.style.display = 'none';
    profileModal.style.display = 'none';
}

// Обработчики событий для модальных окон
closeModal.forEach(btn => btn.addEventListener('click', closeModalFunc));
cancelPurchase.addEventListener('click', closeModalFunc);
confirmPurchase.addEventListener('click', () => {
    alert('Отлично.');
    closeModalFunc();
});

// Обработчики для кнопок покупки
document.querySelectorAll('.buy-btn').forEach(button => {
    button.addEventListener('click', function() {
        if (this.disabled) return;
        
        const productId = this.getAttribute('data-product');
        const product = products.find(p => p.id === productId);
        
        if (product) {
            openModal(product);
        }
    });
});

// Закрытие модального окна при клике вне его
window.addEventListener('click', (e) => {
    if (e.target === purchaseModal || e.target === profileModal) {
        closeModalFunc();
    }
});

// Инициализация страницы
function init() {
    setUpdateDate();
    loadMonthRating();
    loadTotalRating();
    loadArchive();
    
    // Симулируем загрузку (вы можете изменить время по своему усмотрению)
    setTimeout(() => {
        preloader.style.opacity = '0';
        setTimeout(() => {
            preloader.style.display = 'none';
            mainContent.classList.add('show');
        }, 500);
    }, 3000); // 3 секунды загрузки
}

// Запуск при загрузке страницы
document.addEventListener('DOMContentLoaded', init);