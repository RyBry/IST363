console.log('Js has been loaded');

const menuBtn = document.getElementById('menuBtn');
const mobileMenu = document.getElementById('mobileMenu');
const closeBtn = document.getElementById('closeBtn');
const contentDiv = document.getElementById('content'); // hold onto the div "content" box ID in html

// "event name", callback function
menuBtn.addEventListener('click', function () {
  // console.log("clcc");
  mobileMenu.classList.add('active');
});

closeBtn.addEventListener('click', function () {
  // console.log("clcc");
  mobileMenu.classList.remove('active');
});

const rooms = [
  {
    name: 'Luxury King Room',
    price: 300,
    guests: 2,
    description:
      'A beautiful room with a king size bed, a private bathroom, and a balcony with a view of the ocean.',
  },
  {
    name: 'Luxury King Room',
    price: 300,
    guests: 2,
    description:
      'A beautiful room with a king size bed, a private bathroom, and a balcony with a view of the ocean.',
  },
  {
    name: 'Luxury King Room',
    price: 300,
    guests: 2,
    description:
      'A beautiful room with a king size bed, a private bathroom, and a balcony with a view of the ocean.',
  },
];

const displayCategory = (category, properties) => {
  // console.log({category});
  const sectionElement = document.createElement('section');
  sectionElement.classList.add('category');

  const containerDiv = document.createElement('div');
  containerDiv.classList.add('container');

  const sectionTitle = document.createElement('h2');
  sectionTitle.textContent = category.label.plural;

  containerDiv.appendChild(sectionTitle);

  //1. Filter properties
  // Loop thorught properties, place the element into "property"
  console.log(category.label.singular);
  // .filter() builds an array into const filteredProperties with every item which returned "true." Yes this is horrible.
  const filteredProperties = properties.filter((property) => {
    return category.label.singular === property.type;
    // return the elements into the list where the singular name matches the requested property type.
  });

  // sort performs "quickSort" based on the provided parameters.
  // -1 moves a before b. 1 moves a after b. 0 says there the same order.
  filteredProperties.sort((a, b) => {
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
    return 0;
  });

  filteredProperties.forEach((property) => {
    const articleElement = document.createElement('article');
    articleElement.classList.add('property');

    // Backticks allow writing HTML
    let propertyHtml = `
      <h3 class="property--title">${property.name}</h3>
      <p class="property--description">${property.description}</p>
      <p class="property--price">${property.price}</p>
    `;

    articleElement.innerHTML = propertyHtml;

    containerDiv.appendChild(articleElement);
  }); // end of forEach

  //2. Loop and append properties
  sectionElement.appendChild(containerDiv);
  contentDiv.appendChild(sectionElement);
}; // end of displayCategory

Promise.all([
  // fetch 1. When response is fetched, it is just interpreted as a string,
  // even though the file ends in .JSON. We must tell the system it is a JSON.
  fetch('js/properties.json').then((response) => response.json()),
  // fetch 2
  fetch('js/categories.json').then((response) => response.json()),
])
  .then(([properties, categories]) => {
    // console.log({ properties });
    // console.log({ categories });
    categories.forEach((category) => {
      displayCategory(category, properties);
    });
  })
  .catch((error) => {
    console.error('There was a problem fetching the data:', error);
  });
