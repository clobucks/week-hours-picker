(function() {
    const data = [
        {
            hour: 0,
            day: 'Monday',
            id: 0,
        },
        {
            hour: 1,
            day: 'Monday',
            id: 1,
        },
        {
            hour: 2,
            day: 'Monday',
            id: 2,
        },
        {
            hour: 3,
            day: 'Monday',
            id: 3,
        },
        {
            hour: 4,
            day: 'Monday',
            id: 4,
        },
        {
            hour: 5,
            day: 'Monday',
            id: 5,
        },
        {
            hour: 6,
            day: 'Monday',
            id: 6,
        },
        {
            hour: 7,
            day: 'Monday',
            id: 7,
        },
        {
            hour: 8,
            day: 'Monday',
            id: 8,
        },
        {
            hour: 9,
            day: 'Monday',
            id: 9,
        },
        {
            hour: 10,
            day: 'Monday',
            id: 10,
        },
        {
            hour: 11,
            day: 'Monday',
            id: 11,
        },
        {
            hour: 12,
            day: 'Monday',
            id: 12,
        },
        {
            hour: 13,
            day: 'Monday',
            id: 13,
        },
        {
            hour: 14,
            day: 'Monday',
            id: 14,
        },
        {
            hour: 15,
            day: 'Monday',
            id: 15,
        },
        {
            hour: 16,
            day: 'Monday',
            id: 16,
        },
        {
            hour: 17,
            day: 'Monday',
            id: 17,
        },
        {
            hour: 18,
            day: 'Monday',
            id: 18,
        },
        {
            hour: 19,
            day: 'Monday',
            id: 19,
        },
        {
            hour: 20,
            day: 'Monday',
            id: 20,
        },
        {
            hour: 21,
            day: 'Monday',
            id: 21,
        },
        {
            hour: 22,
            day: 'Monday',
            id: 22,
        },
        {
            hour: 23,
            day: 'Monday',
            id: 23,
        },
    ]

    let selectedItems = [];
    
    function generateList() {
        for (let i = 0; i < data.length; i++) {
            listItem = document.createElement('li');
            listItem.innerHTML = data[i].hour;
            listItem.classList.add('item')
            listItem.addEventListener('click', elem => handleClickItem(elem, data[i]), false);
            document.querySelector('.picker-list').appendChild(listItem)
        }
    }

    function handleClickItem(element, item) {
        const isExistingItem = selectedItems.find(_ => _.id === item.id)
        if (!isExistingItem) {
            element.target.classList.add('selected-item')
            selectedItems.push(item)
        } else {
            element.target.classList.remove('selected-item')
            const newState = selectedItems.filter(_ => _.id !== item.id)
            selectedItems = newState
        }
    }
    
    generateList()
    generateList()
    generateList()
    generateList()
    generateList()
    generateList()
    generateList()
})()