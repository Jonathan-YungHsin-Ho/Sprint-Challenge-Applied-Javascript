// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

document.querySelector('.topics').append(createTab('All'));

axios
  .get('https://lambda-times-backend.herokuapp.com/topics')
  .then(response =>
    response.data.topics.forEach(element =>
      document.querySelector('.topics').append(createTab(element)),
    ),
  )
  .catch(err => console.log(err));

function createTab(topic) {
  const tab = document.createElement('div');
  tab.classList.add('tab');
  tab.textContent = topic;

  tab.addEventListener('click', event => {
    document
      .querySelectorAll('.tab')
      .forEach(element => element.classList.remove('active-tab'));
    tab.classList.add('active-tab');

    topic === 'node.js' ? (topic = 'node') : topic;
    topic === 'All' ? (topic = 'topic') : topic;

    document.querySelectorAll('.topic').forEach(element => {
      element.classList.contains(topic)
        ? (element.style.display = 'block')
        : (element.style.display = 'none');
    });
  });

  return tab;
}
