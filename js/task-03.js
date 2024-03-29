const images = [
    {
        url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        alt: 'White and Black Long Fur Cat',
    },
    {
        url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
    },
    {
        url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        alt: 'Group of Horses Running',
    },
];

// Получаем ссылку на элемент
const galleryRef = document.querySelector('.gallery');

// Разметка огного элемента
const makeGalleryItemMarkup = ({ url, alt }) => {
    return `<li>
            <img src="${url}" alt="${alt}" width="320" height="240" />
          </li>`;
};

// создаем все элементы
const makeGalleryMarkup = images
    .map(image => makeGalleryItemMarkup(image))
    .join('');

// добавляем в Dom
galleryRef.insertAdjacentHTML('beforeend', makeGalleryMarkup);
