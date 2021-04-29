// console.log('working');
// console.log(axios);

const root = document.querySelector('.container')

axios
    .get('https://api.hnpwa.com/v0/newest/1.json')
    .then(data => {
        createListItem(data);
    })
// .catch(function (error) {
//     console.log(error);
// })

//Create List item
function createListItem(response) {
    // console.log(response);

    // newsDiv = document.createElement('div');
    // newsDiv.classList.add('root');

    const list = document.createElement('ul');
    list.classList.add('list-group');
    root.appendChild(list);

    response.data.forEach(function (listItem) {
        // console.log('hello i reached here');
        // console.log(listItem.title);

        const { user, url, title, domain, id, points } = listItem;

        // CREATE LIST ITEM
        let li = document.createElement('li');
        li.classList.add('list-group-item');
        li.innerHTML = title;

        // POINTS
        let point = document.createElement('span');
        point.classList.add('badge', 'badge-primary');
        point.innerHTML = points;

        li.appendChild(point);
        list.appendChild(li);
    })
}