const menu = document.querySelector('.mobile-menu');
const menuItems = document.querySelectorAll('.icon-menu');
const openIcon = document.querySelector('.hamburger');
const closeIcon = document.querySelector('.close-icon');

function openMenu() {
  if (menu.classList.contains('open-menu')) {
    menu.classList.remove('open-menu');
    openIcon.style.display = 'block';
    closeIcon.style.display = 'none';
  } else {
    menu.classList.add('open-menu');
    openIcon.style.display = 'none';
    closeIcon.style.display = 'block';
  }
}

openIcon.addEventListener('click', openMenu);

menuItems.forEach(
  (e) => {
    e.addEventListener('click', openMenu);
  },
);

const writers = [
  {
    image: './img/speakers/mob-jamesclear.png',
    name: 'James Clear',
    title: 'Author of the #1 New York Times bestseller, Atomic Habits',
    description: 'He is a regular speaker at Fortune 500 companies. Previous clients include Honda, Intel, LinkedIn, and many more. His "Atomic Habits" has sold more than 7 million copies worldwide.',
  },

  {
    image: './img/speakers/mob-joshuarfoer.png',
    name: 'Joshua Foer',
    title: 'Freelance journalist and science author',
    description: 'He was the 2006 U.S.A. Memory Champion, which was described in his 2011 book, Moonwalking with Einstein: The Art and Science of Remembering Everything.',
  },

  {
    image: './img/speakers/mob-markmanson.png',
    name: 'Mark Manson',
    title: 'Author of the New York Times bestselling book The Subtle Art of Not Giving a F*ck.',
    description: 'As of 2019, he had authored three books, two of which were The New York Times bestsellers. His books have sold over 13 million copies.',
  },

  {
    image: './img/speakers/mob-matthewwalker.png',
    name: 'Matthew Walker',
    title: 'Scientist and professor of neuroscience and psychology at the University of California, Berkeley',
    description: 'He became a public intellectual following the publication of "Why We Sleep", his first work of popular science, in 2017. It became an international bestseller.',
  },

  {
    image: './img/speakers/mob-niccomele.png',
    name: 'Nicco Mele',
    title: 'Academic, writer, and businessman. Author of "The End of Big"',
    description: 'He is widely published on matters exploring the intersection of internet policy, new media, journalism, and politics.',
  },

  {
    image: './img/speakers/mob-olarosling.png',
    name: 'Ola Rosling',
    title: 'Statistician known for his work for the Gapminder Foundation',
    description: 'He co-authored the book "Factfulness" where suggests that the vast majority of people are wrong about the state of the world.',
  },
];

const writersContainer = document.querySelector('.writers-container');
const allWriters = document.createElement('div');
allWriters.classList.add('allwriters');
writersContainer.append(allWriters);

for (let i = 0; i < writers.length; i += 1) {
  const writer = document.createElement('div');
  writer.classList.add('writer');
  allWriters.append(writer);

  writer.innerHTML = `
    <img class="writer-img" src="${writers[i].image}">
    <div class="writer-card">
      <p class="writer-title black-title">${writers[i].name}</p>
      <p class="orange-italic-text">${writers[i].title}</p>
      <span class="gray-line"></span>
      <p class="writer-description">${writers[i].description}</p>
    </div>  
  `;
}