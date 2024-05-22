document.addEventListener('DOMContentLoaded', function () {
    const ratingData = [
        // Пример данных. Добавьте свои данные сюда.
        { name: 'Аня Миронова', avatar: 'img/аням.png', score: 1, link: 'https://example.com/ivan' },
        { name: 'Илья Райский', avatar: 'img/илья.png', score: 1, link: 'https://vk.com/i.moiseev2000' },
		{ name: 'Kesha Volnisty', avatar: 'img/кеша.png', score: 1, link: 'https://vk.com/n.ycmo' },
		{ name: 'Даниил Аватарский', avatar: 'img/даняа.png', score: 1, link: 'https://vk.com/avataryagod' },
		{ name: 'София Кошиль', avatar: 'img/соф.png', score: 1, link: 'https://vk.com/sonfixxx' },
		{ name: 'Лайза Афанасьева', avatar: 'img/лайза.png', score: 1, link: 'https://vk.com/layzzzeerrrr' },
		{ name: 'Vld Dlv', avatar: 'img/влд.png', score: 1, link: 'https://vk.com/dashesply' },
		{ name: 'Mikhail Kotikov', avatar: 'img/влд.png', score: 1, link: 'https://vk.com/saumka' },
        // Добавьте больше участников по мере необходимости
    ];

    const ratingContainer = document.getElementById('rating');
    const noRatingText = document.getElementById('no-rating');

    if (ratingData.length === 0 || ratingData.every(item => item.score === 0)) {
        noRatingText.style.display = 'block';
        ratingContainer.style.display = 'none';
    } else {
        noRatingText.style.display = 'none';
        ratingContainer.style.display = 'flex';

        ratingData.sort((a, b) => b.score - a.score).forEach(item => {
            if (item.score > 0) {
                const ratingItem = document.createElement('div');
                ratingItem.className = 'rating-item';

                const avatar = document.createElement('img');
                avatar.src = item.avatar;
                avatar.alt = `${item.name} avatar`;

                const name = document.createElement('span');
                name.className = 'name';
                name.textContent = item.name;

                const score = document.createElement('span');
                score.className = 'score';
                score.textContent = `Баллы: ${item.score}`;

                const link = document.createElement('a');
                link.href = item.link;
                link.textContent = 'Профиль';
                link.target = '_blank';

                ratingItem.appendChild(avatar);
                ratingItem.appendChild(name);
                ratingItem.appendChild(document.createElement('br'));
                ratingItem.appendChild(score);
                ratingItem.appendChild(document.createElement('br'));
                ratingItem.appendChild(link);

                ratingContainer.appendChild(ratingItem);
            }
        });
    }
});
