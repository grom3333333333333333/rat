document.addEventListener('DOMContentLoaded', function () {
    let currentMonth = 'НАКОПИТЕЛЬНАЯ СИСТЕМА'; // начальный месяц
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
		 ],
		'September': [
			{ name: 'Илья Райский', avatar: 'img/илья.png', role: 'Король', tasks: { posts: 3, articles: 0, design: 0, events: 0, deadlines: 0, correction: 0, discussion: 0, penalty: 0 }, merch: { points: 0, networks: ['Везде.'] } },
            { name: 'Kulek Kulek', avatar: 'img/z.png', role: 'Администратор', tasks: { posts: 23, articles: 0, design: 3, events: 0, deadlines: 0, correction: 0, discussion: 0, penalty: 0 }, merch: { points: 0, networks: ['Везде.'] } },
            { name: 'Аня Миронова', avatar: 'img/аням.png', role: 'Редактор', tasks: { posts: 4, articles: 1, design: 0, events: 0, deadlines: 1, correction: 0, discussion: 0, penalty: 0 }, merch: { points: 2, networks: ['Худи (VK)', 'АП (VK)'] } },
            { name: 'Innokenty Formalin', avatar: 'img/кеша.png', role: 'Корректор', tasks: { posts: 0, articles: 0, design: 0, events: 0, deadlines: 0, correction: 17, discussion: 0, penalty: 0 }, merch: { points: 3, networks: ['Худи (VK)', 'АП (VK)', 'Худи (ОК)'] } },
            { name: 'София Кошиль', avatar: 'img/соф.png', role: 'Редактор', tasks: { posts: 3, articles: 1, design: 0, events: 0, deadlines: 1, correction: 0, discussion: 0, penalty: 0 }, merch: { points: 2, networks: ['Худи (VK)', 'АП (VK)'] } },
            { name: 'Mikhail Kotikov', avatar: 'img/миша.png', role: 'Глав. Редактор', tasks: { posts: 1, articles: 0, design: 1, events: 0, deadlines: 0, correction: 0, discussion: 0, penalty: 0 }, merch: { points: 2, networks: ['Худи (VK)', 'АП (VK)'] } },
            { name: 'Екатерина Фраерок', avatar: 'img/катя.png', role: 'Редактор', tasks: { posts: 0, articles: 0, design: 0, events: 0, deadlines: 0, correction: 0, discussion: 0, penalty: 0 }, merch: { points: 0, networks: ['Нет'] } },
            { name: 'Оля Шокорева', avatar: 'img/оля.png', role: 'Редактор', tasks: { posts: 1, articles: 1, design: 0, events: 0, deadlines: 1, correction: 0, discussion: 0, penalty: 0 }, merch: { points: 0, networks: ['Нет'] } },
            { name: 'Roman Bazhukov', avatar: 'img/рома.png', role: 'Редактор', tasks: { posts: 0, articles: 0, design: 0, events: 0, deadlines: 0, correction: 0, discussion: 0, penalty: 0 }, merch: { points: 0, networks: ['Нет'] } }
 	 ],
		'october': [
			{ name: 'Илья Райский', avatar: 'img/илья.png', role: 'Король', tasks: { posts: 5, articles: 0, design: 0, events: 0, deadlines: 0, correction: 0, discussion: 0, penalty: 0 }, merch: { points: 0, networks: ['Везде.'] } },
            { name: 'Kulek Kulek', avatar: 'img/z.png', role: 'Администратор', tasks: { posts: 6, articles: 0, design: 5, events: 0, deadlines: 0, correction: 1, discussion: 0, penalty: 0 }, merch: { points: 0, networks: ['Везде.'] } },
            { name: 'Аня Миронова', avatar: 'img/аням.png', role: 'Редактор', tasks: { posts: 5, articles: 0, design: 0, events: 0, deadlines: 0, correction: 0, discussion: 1, penalty: 0 }, merch: { points: 2, networks: ['Худи (VK)', 'АП (VK)'] } },
            { name: 'Innokenty Formalin', avatar: 'img/кеша.png', role: 'Корректор', tasks: { posts: 0, articles: 0, design: 0, events: 0, deadlines: 0, correction: 10, discussion: 0, penalty: 0 }, merch: { points: 3, networks: ['Худи (VK)', 'АП (VK)', 'Худи (ОК)'] } },
            { name: 'София Кошиль', avatar: 'img/соф.png', role: 'Уволена', tasks: { posts: 1, articles: 0, design: 0, events: 0, deadlines: 0, correction: 0, discussion: 0, penalty: 0 }, merch: { points: 2, networks: ['Худи (VK)', 'АП (VK)'] } },
            { name: 'Mikhail Kotikov', avatar: 'img/миша.png', role: 'Глав. Редактор', tasks: { posts: 9, articles: 0, design: 1, events: 1, deadlines: 0, correction: 0, discussion: 0, penalty: 0 }, merch: { points: 2, networks: ['Худи (VK)', 'АП (VK)'] } },
            { name: 'Екатерина Фраерок', avatar: 'img/катя.png', role: 'Редактор', tasks: { posts: 1, articles: 0, design: 0, events: 0, deadlines: 0, correction: 0, discussion: 3, penalty: 0 }, merch: { points: 0, networks: ['Нет'] } },
            { name: 'Оля Шокорева', avatar: 'img/оля.png', role: 'Уволена', tasks: { posts: 0, articles: 0, design: 0, events: 1, deadlines: 0, correction: 0, discussion: 0, penalty: 0 }, merch: { points: 0, networks: ['Нет'] } },
            { name: 'Саша Меньковский', avatar: 'img/саша.png', role: 'Редактор', tasks: { posts: 10, articles: 0, design: 12, events: 0, deadlines: 0, correction: 0, discussion: 0, penalty: 0 }, merch: { points: 0, networks: ['Нет'] } }
 	 ],
		'November': [
			{ name: 'Илья Райский', avatar: 'img/илья.png', role: 'Король', tasks: { posts: 1, articles: 0, design: 0, events: 0, deadlines: 0, correction: 0, discussion: 0, penalty: 0 }, merch: { points: 0, networks: ['Везде.'] } },
            { name: 'Kulek Kulek', avatar: 'img/z.png', role: 'Администратор', tasks: { posts: 23, articles: 0, design: 1, events: 0, deadlines: 0, correction: 0, discussion: 0, penalty: 0 }, merch: { points: 0, networks: ['Везде.'] } },
            { name: 'Аня Миронова', avatar: 'img/аням.png', role: 'Редактор', tasks: { posts: 23, articles: 0, design: 0, events: 1, deadlines: 0, correction: 5, discussion: 0, penalty: 0 }, merch: { points: 2, networks: ['Худи (VK)', 'АП (VK)'] } },
            { name: 'Innokenty Formalin', avatar: 'img/кеша.png', role: 'Корректор', tasks: { posts: 0, articles: 0, design: 0, events: 1, deadlines: 0, correction: 24, discussion: 0, penalty: 0 }, merch: { points: 3, networks: ['Худи (VK)', 'АП (VK)', 'Худи (ОК)'] } },    
            { name: 'Mikhail Kotikov', avatar: 'img/миша.png', role: 'Глав. Редактор', tasks: { posts: 12, articles: 0, design: 2, events: 0, deadlines: 0, correction: 0, discussion: 0, penalty: 0 }, merch: { points: 2, networks: ['Худи (VK)', 'АП (VK)'] } },
            { name: 'Екатерина Фраерок', avatar: 'img/катя.png', role: 'Редактор', tasks: { posts: 2, articles: 0, design: 0, events: 0, deadlines: 0, correction: 3, discussion: 25, penalty: 0 }, merch: { points: 0, networks: ['Нет'] } },
            { name: 'Саша Меньковский', avatar: 'img/саша.png', role: 'Редактор', tasks: { posts: 9, articles: 0, design: 20, events: 1, deadlines: 0, correction: 0, discussion: 0, penalty: 0 }, merch: { points: 0, networks: ['Нет'] } }
 	 ],
		'December': [
			{ name: 'Илья Райский', avatar: 'img/илья.png', role: 'Король', tasks: { posts: 8, articles: 0, design: 0, events: 0, deadlines: 0, correction: 0, discussion: 0, penalty: 0 }, merch: { points: 0, networks: ['Везде.'] } },
            { name: 'Kulek Kulek', avatar: 'img/z.png', role: 'Администратор', tasks: { posts: 10, articles: 1, design: 0, events: 0, deadlines: 0, correction: 8, discussion: 0, penalty: 0 }, merch: { points: 0, networks: ['Везде.'] } },
            { name: 'Аня Миронова', avatar: 'img/аням.png', role: 'Редактор', tasks: { posts: 22, articles: 0, design: 0, events: 0, deadlines: 0, correction: 4, discussion: 0, penalty: 0 }, merch: { points: 2, networks: ['Худи (VK)', 'АП (VK)'] } },
			{ name: 'Innokenty Formalin', avatar: 'img/кеша.png', role: 'Корректор', tasks: { posts: 0, articles: 1, design: 0, events: 0, deadlines: 0, correction: 34, discussion: 0, penalty: 0 }, merch: { points: 3, networks: ['Худи (VK)', 'АП (VK)', 'Худи (ОК)'] } },    
            { name: 'Mikhail Kotikov', avatar: 'img/миша.png', role: 'Глав. Редактор', tasks: { posts: 5, articles: 0, design: 1, events: 0, deadlines: 0, correction: 0, discussion: 0, penalty: 0 }, merch: { points: 2, networks: ['Худи (VK)', 'АП (VK)'] } },
            { name: 'Екатерина Фраерок', avatar: 'img/катя.png', role: 'Редактор', tasks: { posts: 25, articles: 0, design: 0, events: 0, deadlines: 0, correction: 1, discussion: 8, penalty: 0 }, merch: { points: 0, networks: ['Нет'] } },
            { name: 'Саша Меньковский', avatar: 'img/саша.png', role: 'Редактор', tasks: { posts: 3, articles: 0, design: 30, events: 0, deadlines: 0, correction: 0, discussion: 0, penalty: 0 }, merch: { points: 0, networks: ['Нет'] } },
			{ name: 'Света Никулина', avatar: 'img/свет.png', role: 'Редактор', tasks: { posts: 24, articles: 0, design: 0, events: 0, deadlines: 0, correction: 1, discussion: 0, penalty: 0 }, merch: { points: 0, networks: ['Нет'] } },
			{ name: 'Егорка Финесс', avatar: 'img/егор.png', role: 'Редактор', tasks: { posts: 11, articles: 1, design: 0, events: 0, deadlines: 0, correction: 0, discussion: 0, penalty: 0 }, merch: { points: 0, networks: ['Нет'] } },
			{ name: 'Диана Фоменко', avatar: 'img/диана.png', role: 'Редактор', tasks: { posts: 27, articles: 0, design: 0, events: 0, deadlines: 0, correction: 1, discussion: 0, penalty: 0 }, merch: { points: 0, networks: ['Нет'] } }
 	 ],
		'Jan': [
			{ name: 'Илья Райский', avatar: 'img/илья.png', role: 'Король', tasks: { posts: 0, articles: 0, design: 1, events: 0, deadlines: 0, correction: 0, discussion: 0, penalty: 0 }, merch: { points: 0, networks: ['Везде.'] } },
            { name: 'Kulek Kulek', avatar: 'img/z.png', role: 'Администратор', tasks: { posts: 6, articles: 1, design: 0, events: 0, deadlines: 0, correction: 0, discussion: 0, penalty: 0 }, merch: { points: 0, networks: ['Везде.'] } },
            { name: 'Аня Миронова', avatar: 'img/аням.png', role: 'Редактор', tasks: { posts: 15, articles: 0, design: 0, events: 0, deadlines: 2, correction: 28, discussion: 0, penalty: 0 }, merch: { points: 2, networks: ['Худи (VK)', 'АП (VK)'] } },
			{ name: 'Innokenty Formalin', avatar: 'img/кеша.png', role: 'Корректор', tasks: { posts: 0, articles: 1, design: 0, events: 0, deadlines: 0, correction: 30, discussion: 0, penalty: 0 }, merch: { points: 3, networks: ['Худи (VK)', 'АП (VK)', 'Худи (ОК)'] } },    
            { name: 'Mikhail Kotikov', avatar: 'img/миша.png', role: 'Глав. Редактор', tasks: { posts: 5, articles: 0, design: 1, events: 0, deadlines: 0, correction: 0, discussion: 0, penalty: 0 }, merch: { points: 2, networks: ['Худи (VK)', 'АП (VK)'] } },
            { name: 'Екатерина Фраерок', avatar: 'img/катя.png', role: 'Редактор', tasks: { posts: 1, articles: 0, design: 0, events: 0, deadlines: 0, correction: 1, discussion: 1, penalty: 0 }, merch: { points: 0, networks: ['Нет'] } },
            { name: 'Саша Меньковский', avatar: 'img/саша.png', role: 'Редактор', tasks: { posts: 0, articles: 0, design: 19, events: 0, deadlines: 0, correction: 0, discussion: 0, penalty: 0 }, merch: { points: 0, networks: ['Нет'] } },
			{ name: 'Света Никулина', avatar: 'img/свет.png', role: 'Редактор', tasks: { posts: 15, articles: 1, design: 0, events: 0, deadlines: 2, correction: 4, discussion: 0, penalty: 0 }, merch: { points: 0, networks: ['Нет'] } },
			{ name: 'Егорка Финесс', avatar: 'img/егор.png', role: 'Редактор', tasks: { posts: 21, articles: 0, design: 0, events: 0, deadlines: 0, correction: 1, discussion: 0, penalty: 0 }, merch: { points: 0, networks: ['Нет'] } },
			{ name: 'Диана Фоменко', avatar: 'img/диана.png', role: 'Редактор', tasks: { posts: 20, articles: 1, design: 0, events: 0, deadlines: 2, correction: 20, discussion: 0, penalty: 6 }, merch: { points: 0, networks: ['Нет'] } }
	 ],
		'Feb': [
			{ name: 'Илья Райский', avatar: 'img/илья.png', role: 'Король', tasks: { posts: 1, articles: 0, design: 0, events: 0, deadlines: 0, correction: 0, discussion: 0, penalty: 0 }, merch: { points: 0, networks: ['Везде.'] } },
            { name: 'Kulek Kulek', avatar: 'img/z.png', role: 'Администратор', tasks: { posts: 19, articles: 0, design: 2, events: 0, deadlines: 1, correction: 0, discussion: 0, penalty: 0 }, merch: { points: 0, networks: ['Везде.'] } },
            { name: 'Аня Миронова', avatar: 'img/аням.png', role: 'Редактор', tasks: { posts: 12, articles: 0, design: 0, events: 0, deadlines: 2, correction: 4, discussion: 8, penalty: 3 }, merch: { points: 2, networks: ['Худи (VK)', 'АП (VK)'] } },
			{ name: 'Innokenty Formalin', avatar: 'img/кеша.png', role: 'Корректор', tasks: { posts: 0, articles: 0, design: 0, events: 0, deadlines: 0, correction: 18, discussion: 0, penalty: 0 }, merch: { points: 3, networks: ['Худи (VK)', 'АП (VK)', 'Худи (ОК)'] } },    
            { name: 'Mikhail Kotikov', avatar: 'img/миша.png', role: 'Главный Редактор', tasks: { posts: 24, articles: 0, design: 0, events: 0, deadlines: 0, correction: 0, discussion: 0, penalty: 0 }, merch: { points: 2, networks: ['Худи (VK)', 'АП (VK)'] } },
            { name: 'Виктория Восстания', avatar: 'img/вика.png', role: 'Редактор', tasks: { posts: 5, articles: 0, design: 1, events: 0, deadlines: 7, correction: 0, discussion: 0, penalty: 0 }, merch: { points: 0, networks: ['Нет'] } },
            { name: 'Саша Меньковский', avatar: 'img/саша.png', role: 'Оформитель', tasks: { posts: 2, articles: 0, design: 28, events: 0, deadlines: 0, correction: 0, discussion: 0, penalty: 0 }, merch: { points: 0, networks: ['Нет'] } },
			{ name: 'Света Никулина', avatar: 'img/свет.png', role: 'Редактор', tasks: { posts: 28, articles: 0, design: 0, events: 0, deadlines: 43, correction: 1, discussion: 0, penalty: 0 }, merch: { points: 0, networks: ['Нет'] } },
			{ name: 'Егорка Финесс', avatar: 'img/егор.png', role: 'Редактор', tasks: { posts: 1, articles: 0, design: 0, events: 0, deadlines: 0, correction: 0, discussion: 0, penalty: 0 }, merch: { points: 0, networks: ['Нет'] } },
			{ name: 'Диана Фоменко', avatar: 'img/диана.png', role: 'Редактор', tasks: { posts: 7, articles: 0, design: 0, events: 0, deadlines: 53, correction: 16, discussion: 6, penalty: 6 }, merch: { points: 0, networks: ['Нет'] } }
	 ],
		'Mar': [
			{ name: 'Илья Райский', avatar: 'img/илья.png', role: 'Король', tasks: { posts: 2, articles: 0, design: 0, events: 0, deadlines: 0, correction: 0, discussion: 0, penalty: 0 }, merch: { points: 0, networks: ['Везде.'] } },
            { name: 'Kulek Kulek', avatar: 'img/z.png', role: 'Администратор', tasks: { posts: 8, articles: 0, design: 0, events: 1, deadlines: 0, correction: 1, discussion: 0, penalty: 0 }, merch: { points: 0, networks: ['Везде.'] } },
            { name: 'Аня Миронова', avatar: 'img/аням.png', role: 'Редактор', tasks: { posts: 8, articles: 0, design: 0, events: 3, deadlines: 0, correction: 0, discussion: 2, penalty: 4 }, merch: { points: 2, networks: ['Худи (VK)', 'АП (VK)'] } },
			{ name: 'Innokenty Formalin', avatar: 'img/кеша.png', role: 'Корректор', tasks: { posts: 0, articles: 0, design: 0, events: 0, deadlines: 0, correction: 13, discussion: 0, penalty: 0 }, merch: { points: 3, networks: ['Худи (VK)', 'АП (VK)', 'Худи (ОК)'] } },    
            { name: 'Mikhail Kotikov', avatar: 'img/миша.png', role: 'Главный Редактор', tasks: { posts: 10, articles: 0, design: 0, events: 1, deadlines: 0, correction: 0, discussion: 0, penalty: 0 }, merch: { points: 2, networks: ['Худи (VK)', 'АП (VK)'] } },
            { name: 'Виктория Восстания', avatar: 'img/вика.png', role: 'Редактор', tasks: { posts: 1, articles: 0, design: 0, events: 0, deadlines: 1, correction: 0, discussion: 0, penalty: 0 }, merch: { points: 0, networks: ['Нет'] } },
            { name: 'Саша Меньковский', avatar: 'img/саша.png', role: 'Оформитель', tasks: { posts: 1, articles: 0, design: 30, events: 0, deadlines: 0, correction: 1, discussion: 0, penalty: 0 }, merch: { points: 0, networks: ['Нет'] } },
			{ name: 'Света Никулина', avatar: 'img/свет.png', role: 'Редактор', tasks: { posts: 11, articles: 0, design: 0, events: 0, deadlines: 7, correction: 1, discussion: 0, penalty: 0 }, merch: { points: 0, networks: ['Нет'] } },
			{ name: 'Денис Галлямов', avatar: 'img/ден.png', role: 'Редактор', tasks: { posts: 11, articles: 0, design: 0, events: 0, deadlines: 9, correction: 0, discussion: 0, penalty: 1 }, merch: { points: 0, networks: ['Нет'] } },
			{ name: 'Диана Фоменко', avatar: 'img/диана.png', role: 'Редактор', tasks: { posts: 20, articles: 0, design: 0, events: 0, deadlines: 46, correction: 7, discussion: 7, penalty: 0 }, merch: { points: 0, networks: ['Нет'] } }
	 ],
		'aprl': [
		//	{ name: 'Илья Райский', avatar: 'img/илья.png', role: 'Король', tasks: { posts: 0, articles: 0, design: 0, events: 0, deadlines: 0, correction: 0, discussion: 0, penalty: 0 }, merch: { points: 0, networks: ['Везде.'] } },
        //  { name: 'Kulek Kulek', avatar: 'img/z.png', role: 'Администратор', tasks: { posts: 0, articles: 0, design: 0, events: 0, deadlines: 0, correction: 0, discussion: 0, penalty: 0 }, merch: { points: 0, networks: ['Везде.'] } },
		//  { name: 'Mikhail Kotikov', avatar: 'img/миша.png', role: 'Главный Редактор', tasks: { posts: 10, articles: 0, design: 0, events: 0, deadlines: 0, correction: 0, discussion: 0, penalty: 0 }, merch: { points: 2, networks: ['Худи (VK)', 'АП (VK)'] } },
        //  { name: 'Аня Миронова', avatar: 'img/аням.png', role: 'Редактор', tasks: { posts: 1, articles: 0, design: 0, events: 0, deadlines: 0, correction: 0, discussion: 0, penalty: 15 }, merch: { points: 2, networks: ['Худи (VK)', 'АП (VK)'] } },
			{ name: 'Innokenty Formalin', avatar: 'img/кеша.png', role: 'Корректор', tasks: { posts: 0, articles: 0, design: 0, events: 0, deadlines: 0, correction: 19, discussion: 0, penalty: 0 }, merch: { points: 3, networks: ['Худи (VK)', 'АП (VK)', 'Худи (ОК)'] } },    
            { name: 'Виктория Восстания', avatar: 'img/вика.png', role: 'Редактор', tasks: { posts: 6, articles: 0, design: 0, events: 0, deadlines: 0, correction: 0, discussion: 10, penalty: 0 }, merch: { points: 0, networks: ['Нет'] } },
       //   { name: 'Саша Меньковский', avatar: 'img/саша.png', role: 'Оформитель', tasks: { posts: 1, articles: 0, design: 4, events: 0, deadlines: 0, correction: 0, discussion: 0, penalty: 0 }, merch: { points: 0, networks: ['Нет'] } },
			{ name: 'Света Никулина', avatar: 'img/свет.png', role: 'Редактор', tasks: { posts: 2, articles: 0, design: 0, events: 0, deadlines: 0, correction: 0, discussion: 7, penalty: 0 }, merch: { points: 0, networks: ['Нет'] } },
			{ name: 'Денис Галлямов', avatar: 'img/ден.png', role: 'Редактор', tasks: { posts: 18, articles: 0, design: 0, events: 0, deadlines: 0, correction: 1, discussion: 0, penalty: 0 }, merch: { points: 0, networks: ['Нет'] } },
			{ name: 'Диана Фоменко', avatar: 'img/диана.png', role: 'Редактор', tasks: { posts: 53, articles: 0, design: 0, events: 0, deadlines: 0, correction: 9, discussion: 15, penalty: 0 }, merch: { points: 0, networks: ['Нет'] } },
			{ name: 'Лена Нестерова', avatar: 'img/лена.png', role: 'Редактор', tasks: { posts: 10, articles: 0, design: 0, events: 0, deadlines: 0, correction: 0, discussion: 0, penalty: 17 }, merch: { points: 0, networks: ['Нет'] } },
			{ name: 'Влад Арзамасов', avatar: 'img/хатсвен.png', role: 'Редактор', tasks: { posts: 13, articles: 0, design: 0, events: 0, deadlines: 0, correction: 0, discussion: 0, penalty: 0 }, merch: { points: 0, networks: ['Нет'] } },
        ],
		'НАКОПИТЕЛЬНАЯ СИСТЕМА': [
		//	{ name: 'Илья Райский', avatar: 'img/илья.png', role: 'Король', tasks: { posts: 0, articles: 0, design: 0, events: 0, deadlines: 0, correction: 0, discussion: 0, penalty: 0 }, merch: { points: 0, networks: ['Везде.'] } },
        //  { name: 'Kulek Kulek', avatar: 'img/z.png', role: 'Администратор', tasks: { posts: 0, articles: 0, design: 0, events: 0, deadlines: 0, correction: 0, discussion: 0, penalty: 0 }, merch: { points: 0, networks: ['Везде.'] } },
		//  { name: 'Mikhail Kotikov', avatar: 'img/миша.png', role: 'Главный Редактор', tasks: { posts: 10, articles: 0, design: 0, events: 0, deadlines: 0, correction: 0, discussion: 0, penalty: 0 }, merch: { points: 2, networks: ['Худи (VK)', 'АП (VK)'] } },
        //  { name: 'Аня Миронова', avatar: 'img/аням.png', role: 'Редактор', tasks: { posts: 44, articles: 0, design: 0, events: 0, deadlines: 0, correction: 0, discussion: 0, penalty: 0 }, merch: { points: 2, networks: ['Худи (VK)', 'АП (VK)'] } },
			{ name: 'Innokenty Formalin', avatar: 'img/кеша.png', role: 'Корректор', tasks: { posts: 37, articles: 0, design: 0, events: 0, deadlines: 0, correction: 0, discussion: 0, penalty: 0 }, merch: { points: 3, networks: ['Худи (VK)', 'АП (VK)', 'Худи (ОК)'] } },    
            { name: 'Виктория Восстания', avatar: 'img/вика.png', role: 'Редактор', tasks: { posts: 2, articles: 0, design: 0, events: 0, deadlines: 0, correction: 0, discussion: 0, penalty: 0 }, merch: { points: 0, networks: ['Нет'] } },
        //  { name: 'Саша Меньковский', avatar: 'img/саша.png', role: 'Оформитель', tasks: { posts: 62, articles: 0, design: 0, events: 0, deadlines: 0, correction: 0, discussion: 0, penalty: 0 }, merch: { points: 0, networks: ['Нет'] } },
			{ name: 'Света Никулина', avatar: 'img/свет.png', role: 'Редактор', tasks: { posts: 23, articles: 0, design: 0, events: 0, deadlines: 0, correction: 0, discussion: 0, penalty: 0 }, merch: { points: 0, networks: ['Нет'] } },
			{ name: 'Денис Галлямов', avatar: 'img/ден.png', role: 'Редактор', tasks: { posts: 3, articles: 0, design: 0, events: 0, deadlines: 0, correction: 0, discussion: 0, penalty: 0 }, merch: { points: 0, networks: ['Нет'] } },
			{ name: 'Диана Фоменко', avatar: 'img/диана.png', role: 'Редактор', tasks: { posts: 45, articles: 0, design: 0, events: 0, deadlines: 0, correction: 0, discussion: 0, penalty: 0 }, merch: { points: 0, networks: ['Нет'] } },
			{ name: 'Лена Нестерова', avatar: 'img/лена.png', role: 'Редактор', tasks: { posts: 0, articles: 0, design: 0, events: 0, deadlines: 0, correction: 0, discussion: 0, penalty: 0 }, merch: { points: 0, networks: ['Нет'] } },
        ]
    };

    const points = {
        posts: 1,
        articles: 0,
        design: 2,
        events: 5,
        deadlines: 0.5,
        correction: 1,
        discussion: 1,
        penalty: 0.1 // Штрафы
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

const ctx = document.getElementById('lineChart').getContext('2d');

// Трендовый цвет сезона
const seasonalColor = '#ff6347'; // Например, цвет "Tomato"

const data = {
    labels: ['Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь', 'Январь'],
    datasets: [{
        label: 'Значения по месяцам',
        data: [97, 98, 216, 78, 97.2, 173.5, 257.4, 238],
        borderColor: seasonalColor, // Устанавливаем трендовый цвет сразу
        fill: false,
        tension: 0.1
    }]
};

const config = {
    type: 'line',
    data: data,
    options: {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: 'Общее количество баллов по месяцам <3'
            },
            tooltip: {
                mode: 'nearest',
                intersect: false
            }
        },
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'Месяц'
                }
            },
            y: {
                title: {
                    display: true,
                    text: 'Баллы'
                },
                min: 0
            }
        }
    }
};

const chart = new Chart(ctx, config);
