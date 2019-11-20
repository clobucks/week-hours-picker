(() => {
    const node = document.querySelector('#input')

    const state = {
        0: [1, 2, 5, 10],
        5: [4, 9, 10, 20],
    }

    window.weekHoursPicker(node, state)
})()
