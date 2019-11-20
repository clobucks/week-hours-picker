(() => {
    const node = document.querySelector('#input')

    const state = {
        0: [1, 2, 5, 10],
        5: [4, 9, 10, 20],
    }

    const resultNode = document.querySelector('#result')

    resultNode.innerHTML = JSON.stringify(state)

    window.weekHoursPicker(node, state, (model) => {
        resultNode.innerHTML = JSON.stringify(model)
    })
})()
