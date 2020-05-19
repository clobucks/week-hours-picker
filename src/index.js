const getClassName = () => `__${Math.random()
    .toString(36)
    .substring(2)}_${Math.random()
    .toString(36)
    .substring(2)}`

const classnames = {
    aside: getClassName(),
    body: getClassName(),
    container: getClassName(),
    day: getClassName(),
    grid: getClassName(),
    header: getClassName(),
    headerHour: getClassName(),
    hour: getClassName(),
    input: getClassName(),
    node: getClassName(),
    row: getClassName(),
    selected: getClassName(),
}

const css = `
    @import url('https://fonts.googleapis.com/css?family=Roboto:400,500&display=swap&subset=cyrillic');

    .${classnames.node} {
        font-family: 'Roboto', sans-serif;
        font-size: 14px;
        display: -webkit-flex;
        display: -moz-flex;
        display: -ms-flex;
        display: -o-flex;
        display: flex;
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    .${classnames.container} {
        display: -webkit-flex;
        display: -moz-flex;
        display: -ms-flex;
        display: -o-flex;
        display: flex;

        box-shadow: 0 2px 7px 0 rgba(0, 0, 0, .17);
        background-color: #FFFFFF;
        z-index: 100;

        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        -o-user-select: none;
        user-select: none;
        border: 1px solid #EEEEEE;
        border-radius: 2px;
    }

    .${classnames.aside} {
        display: -webkit-flex;
        display: -moz-flex;
        display: -ms-flex;
        display: -o-flex;
        display: flex;

        -webkit-flex-direction: column;
        -moz-flex-direction: column;
        -ms-flex-direction: column;
        -o-flex-direction: column;
        flex-direction: column;

        flex-shrink: 0;

        -ms-align-items: center;
        align-items: center;
        min-width: 100px;

        padding-top: 26px;

        background-color: #EFEFEF;
        border-right: 1px solid #CCCCCC;
    }

    .${classnames.grid} {
        display: -webkit-flex;
        display: -moz-flex;
        display: -ms-flex;
        display: -o-flex;
        display: flex;

        flex-grow: 1;
        -webkit-flex-direction: column;
        -moz-flex-direction: column;
        -ms-flex-direction: column;
        -o-flex-direction: column;
        flex-direction: column;
    }

    .${classnames.header} {
        display: -webkit-flex;
        display: -moz-flex;
        display: -ms-flex;
        display: -o-flex;
        display: flex;

        height: 26px;

        border-bottom: 1px solid #CCCCCC;

        flex-shrink: 0;
        background-color: #F5F5F5;
    }

    .${classnames.headerHour} {
        display: -webkit-flex;
        display: -moz-flex;
        display: -ms-flex;
        display: -o-flex;
        display: flex;

        -ms-align-items: center;
        align-items: center;
        height: 100%;
        width: 26px;
        justify-content: center;

        cursor: pointer;

        color: #777777;

        font-size: 12px;
    }

    .${classnames.headerHour}:not(:last-child) {
        border-right: 1px solid #CCCCCC;
    }

    .${classnames.body} {
        display: -webkit-flex;
        display: -moz-flex;
        display: -ms-flex;
        display: -o-flex;
        display: flex;

        -webkit-flex-direction: column;
        -moz-flex-direction: column;
        -ms-flex-direction: column;
        -o-flex-direction: column;
        flex-direction: column;
    }

    .${classnames.day} {
        display: -webkit-flex;
        display: -moz-flex;
        display: -ms-flex;
        display: -o-flex;
        display: flex;

        color: #444444;

        height: 26px;
        -ms-align-items: center;
        align-items: center;


        width: 100%;
        justify-content: center;

        cursor: pointer;
    }

    .${classnames.day}:first-child {
        border-top: 1px solid transparent;
    }

    .${classnames.day}:not(:last-child) {
        border-bottom: 1px solid #CCC;
    }

    .${classnames.row} {
        display: -webkit-flex;
        display: -moz-flex;
        display: -ms-flex;
        display: -o-flex;
        display: flex;

        height: 26px;
        -ms-align-items: center;
        align-items: center;
        flex-shrink: 0;
    }

    .${classnames.row}:not(:last-child) {
        border-bottom: 1px solid #DDDDDD;
    }

    .${classnames.hour} {
        display: -webkit-flex;
        display: -moz-flex;
        display: -ms-flex;
        display: -o-flex;
        display: flex;

        -ms-align-items: center;
        align-items: center;
        height: 100%;
        width: 26px;
        justify-content: center;

        cursor: pointer;

        color: #555555;
        font-size: 12px;
    }

    .${classnames.hour}:hover {
        background-color: #EEEEEE;
    }

    .${classnames.hour}:not(:last-child) {
        border-right: 1px solid #DDDDDD;
    }

    .${classnames.selected}, .${classnames.selected}:hover {
        background-color: #DDDDDD;
        color: #333333;
        font-weight: 500;
    }

    .${classnames.input} {
        visibility: hidden;
        width: 0;
        height: 0;
    }
`

const library = (node, props, callback = () => {}, options = {}) => {
    if (!node) {
        throw new Error('Node element is not defined')
    }

    const factory = {
        state: {},

        options: Object.assign(
            {
                days: {
                    0: 'Monday',
                    1: 'Tuesday',
                    2: 'Wednesday',
                    3: 'Thursday',
                    4: 'Friday',
                    5: 'Saturday',
                    6: 'Sunday',
                },

                classes: {
                    aside: '',
                    body: '',
                    container: '',
                    day: '',
                    grid: '',
                    header: '',
                    headerHour: '',
                    hour: '',
                    input: '',
                    node: '',
                    row: '',
                    selected: '',
                },
            },
            options,
        ),

        getAside: () => {},
        getBody: () => {},
        getContainer: () => {},
        getGrid: () => {},
        getHeader: () => {},
        getRow: () => {},

        handleDayClick: () => {},
        handleHeaderClick: () => {},
        handleHourClick: () => {},

        getState: (state) => state,
        mapState: (state) => state,

        render: () => {},

        input: null,
    }

    const style = document.createElement('style')

    style.type = 'text/css'
    style.innerHTML = css

    factory.getAside = () => {
        const element = document.createElement('div')

        element.classList.add(classnames.aside)

        if (factory.options.classes && factory.options.classes.aside) {
            element.classList.add(factory.options.classes.aside)
        }

        Object.keys(factory.options.days)
            .map((key) => factory.options.days[key])
            .forEach((day, index) => {
                const dayElement = document.createElement('div')

                dayElement.classList.add(classnames.day)

                if (factory.options.classes && factory.options.classes.day) {
                    dayElement.classList.add(factory.options.classes.day)
                }

                dayElement.innerHTML = day

                dayElement.addEventListener('click', () => {
                    factory.handleDayClick(index)
                })

                element.appendChild(dayElement)
            })

        return element
    }

    factory.getBody = () => {
        const element = document.createElement('div')

        element.classList.add(classnames.body)

        if (factory.options.classes && factory.options.classes.body) {
            element.classList.add(factory.options.classes.body)
        }

        Object.keys(factory.options.days).forEach((index) => {
            element.appendChild(factory.getRow(index))
        })

        return element
    }

    factory.getContainer = () => {
        const element = document.createElement('div')

        element.classList.add(classnames.container)

        if (factory.options.classes && factory.options.classes.container) {
            element.classList.add(factory.options.classes.container)
        }

        element.append(factory.getAside())
        element.append(factory.getGrid())

        return element
    }

    factory.getGrid = () => {
        const element = document.createElement('div')

        element.classList.add(classnames.grid)

        if (factory.options.classes && factory.options.classes.grid) {
            element.classList.add(factory.options.classes.grid)
        }

        element.appendChild(factory.getHeader())
        element.appendChild(factory.getBody())

        return element
    }

    factory.getHeader = () => {
        const element = document.createElement('div')

        element.classList.add(classnames.header)

        if (factory.options.classes && factory.options.classes.header) {
            element.classList.add(factory.options.classes.header)
        }

        for (let i = 0; i < 24; i++) {
            const hour = document.createElement('span')

            hour.classList.add(classnames.headerHour)

            if (factory.options.classes && factory.options.classes.headerHour) {
                hour.classList.add(factory.options.classes.headerHour)
            }

            hour.innerHTML = i

            hour.addEventListener('click', () => {
                factory.handleHeaderClick(i)
            })

            element.appendChild(hour)
        }

        return element
    }

    factory.getRow = (index) => {
        const { state } = factory
        const element = document.createElement('div')

        element.classList.add(classnames.row)

        if (factory.options.classes && factory.options.classes.row) {
            element.classList.add(factory.options.classes.row)
        }

        for (let i = 0; i < 24; i++) {
            const hour = document.createElement('span')

            hour.classList.add(classnames.hour)

            if (factory.options.classes && factory.options.classes.hour) {
                hour.classList.add(factory.options.classes.hour)
            }

            if (state[index] && state[index].includes(i)) {
                hour.classList.add(classnames.selected)

                if (factory.options.classes && factory.options.classes.active) {
                    hour.classList.add(factory.options.classes.active)
                }
            }

            hour.innerHTML = i

            hour.addEventListener('click', () => {
                factory.handleHourClick(index, i)
            })

            element.appendChild(hour)
        }

        return element
    }

    factory.handleDayClick = (day) => {
        const { state } = factory

        factory.state = Object.keys(state).reduce((result, row) => {
            if (row.toString() === day.toString()) {
                return {
                    ...result,
                    [row]:
                        state[row] && state[row].length === 24
                            ? []
                            : Array.from({ length: 24 }, (_, i) => i),
                }
            }

            return {
                ...result,
                ...(state[row] ? { [row]: state[row] } : {}),
            }
        }, state)

        factory.render()
    }

    factory.handleHeaderClick = (hour) => {
        const { state } = factory

        const isFull = Object.keys(state)
            .map((_) => state[_])
            .filter((_) => _.includes(hour))

        factory.state = Object.keys(state).reduce((result, index) => {
            if (isFull.length !== Object.keys(state).length) {
                return {
                    ...result,
                    [index]: !state[index].includes(hour)
                        ? [...state[index], hour]
                        : [...state[index]],
                }
            }

            const hourIndex = state[index].findIndex((_) => _.toString() === hour.toString())

            return {
                ...result,
                [index]: [
                    ...state[index].slice(0, hourIndex),
                    ...state[index].slice(hourIndex + 1),
                ],
            }
        }, state)

        factory.render()
    }

    factory.handleHourClick = (index, hour) => {
        const { state } = factory

        const keys = Object.keys(state)

        if (!keys.includes(index)) {
            Object.assign(state, { [index]: [hour] })
            factory.render()

            return
        }

        factory.state = keys.reduce((result, rowIndex) => {
            if (rowIndex !== index) {
                return result
            }

            if (!state[index].includes(hour)) {
                return {
                    ...result,
                    [index]: [...state[index], hour],
                }
            }

            if (state[index].includes(hour)) {
                const hourIndex = state[index].findIndex((_) => _ === hour)

                return {
                    ...result,
                    [index]: [
                        ...state[index].slice(0, hourIndex),
                        ...state[index].slice(hourIndex + 1),
                    ],
                }
            }

            return result
        }, state)

        factory.render()
    }

    factory.getState = (state) => Array.from(
        { length: Object.keys(factory.options.days).length },
        (_, index) => index,
    ).reduce(
        (result, index) => ({
            ...result,
            [index]: state[index] ? [...state[index]] : [],
        }),
        {},
    )

    factory.mapState = (state) => Object.keys(state).reduce(
        (result, key) => ({
            ...result,
            ...(state[key].length && { [key]: state[key] }),
        }),
        {},
    )

    factory.state = factory.getState(props || {})
    callback(factory.mapState(factory.state))

    let DOM = factory.getContainer(factory.state)

    factory.render = () => {
        const { state } = factory

        const _ = factory.getContainer(state)
        node.replaceChild(_, DOM)

        DOM = _

        if (factory.input) {
            factory.input.setAttribute('value', JSON.stringify(state))
        }

        callback(factory.mapState(factory.state))
    }

    node.classList.add(classnames.node)

    node.innerHTML = ''
    node.appendChild(DOM)

    const head = document.getElementsByTagName('head')[0]
    const headStyle = document.getElementsByTagName('style')[0]

    head.insertBefore(style, headStyle)

    if (node.dataset.name) {
        factory.input = document.createElement('input')
        factory.input.classList.add(classnames.input)

        factory.input.setAttribute('id', node.dataset.name)
        node.appendChild(factory.input)

        factory.input.setAttribute('value', JSON.stringify(factory.mapState(factory.state)))
    }
}

try {
    if (module) {
        module.exports = library
    }
} catch (error) {
    window.weekHoursPicker = library
}
