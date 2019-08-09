// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

axios
  .get('https://lambda-times-backend.herokuapp.com/topics')
  .then(response =>
    response.data.topics.forEach(element => {
      const topics = document.querySelector('.topics');
      topics.append(createTab(element));
    }),
  )
  .catch(err => console.log(err));

function createTab(topic) {
  const tab = document.createElement('div');
  tab.classList.add('tab');
  tab.textContent = topic;

  tab.addEventListener('click', event => {
    const allTabs = document.querySelectorAll('.tab');
    allTabs.forEach(element => element.classList.remove('active-tab'));
    tab.classList.add('active-tab');

    topic === 'node.js' ? (topic = 'node') : topic;

    const allCards = document.querySelectorAll('.topic');
    allCards.forEach(element => {
      element.style.display = 'none';
      if (element.classList.contains(topic)) {
        element.style.display = 'block';
      }
    });
  });

  return tab;
}
