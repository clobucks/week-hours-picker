((document, window) => {
    window.weekHoursPicker = (node, props, callback, options = {}) => {
        if (!node) {
            throw new Error('Node element is not defined')
        }

        const factory = {
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
                },
                options,
            ),

            state: props || {},

            getAside: () => {},
            getBody: () => {},
            getContainer: () => {},
            getGrid: () => {},
            getHeader: () => {},
            getRow: () => {},

            handleDayClick: () => {},
            handleHeaderClick: () => {},
            handleHourClick: () => {},

            render: () => {},
        }

        factory.handleDayClick = (day) => {
            const { state } = factory

            factory.state = Array.from(
                { length: Object.keys(factory.options.days).length },
                (_, index) => index,
            ).reduce((result, row) => {
                if (row === day) {
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

            factory.state = Array.from(
                { length: Object.keys(factory.options.days).length + 1 },
                (_, index) => index,
            ).reduce(
                (result, index) => ({
                    ...result,
                    [index]: state[index]
                        ? state[index].includes(hour)
                            ? state[index]
                            : [...state[index], hour]
                        : [hour],
                }),
                state,
            )

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

        factory.getAside = () => {
            const element = document.createElement('div')

            element.classList.add('week__hours__picker_aside')

            Object.keys(factory.options.days)
                .map((key) => factory.options.days[key])
                .forEach((day, index) => {
                    const dayElement = document.createElement('div')

                    dayElement.classList.add('week__hours__picker_day')
                    dayElement.innerHTML = day

                    dayElement.addEventListener('click', () => {
                        factory.handleDayClick(index)
                    })

                    element.appendChild(dayElement)
                })

            return element
        }

        factory.getRow = (index) => {
            const { state } = factory
            const element = document.createElement('div')

            element.classList.add('week__hours__picker_row')

            for (let i = 0; i < 24; i++) {
                const hour = document.createElement('div')

                hour.classList.add('week__hours__picker_hour')

                if (state[index] && state[index].includes(i)) {
                    hour.classList.add('week__hours__picker_hour___selected')
                }

                hour.innerHTML = i

                hour.addEventListener('click', () => {
                    factory.handleHourClick(index, i)
                })

                element.appendChild(hour)
            }

            return element
        }

        factory.getHeader = () => {
            const element = document.createElement('div')

            element.classList.add('week__hours__picker_header')

            for (let i = 0; i < 24; i++) {
                const hour = document.createElement('div')

                hour.classList.add('week__hours__picker_header-hour')
                hour.innerHTML = i

                hour.addEventListener('click', () => {
                    factory.handleHeaderClick(i)
                })

                element.appendChild(hour)
            }

            return element
        }

        factory.getBody = () => {
            const element = document.createElement('div')

            element.classList.add('week__hours__picker_body')

            Object.keys(factory.options.days).forEach((index) => {
                element.appendChild(factory.getRow(index))
            })

            return element
        }

        factory.getGrid = () => {
            const element = document.createElement('div')

            element.classList.add('week__hours__picker_grid')

            element.appendChild(factory.getHeader())
            element.appendChild(factory.getBody())

            return element
        }

        factory.getContainer = () => {
            const element = document.createElement('div')

            element.classList.add('week__hours__picker_container')

            element.append(factory.getAside())
            element.append(factory.getGrid())

            return element
        }

        let DOM = factory.getContainer(factory.state)

        factory.render = () => {
            const { state } = factory

            const _ = factory.getContainer(state)
            node.replaceChild(_, DOM)

            DOM = _

            factory.input.setAttribute('value', JSON.stringify(state))

            callback(factory.state)
        }

        node.classList.add('week__hours__picker_node')

        node.innerHTML = ''
        node.appendChild(DOM)

        factory.input = document.createElement('input')
        factory.input.classList.add('week__hours__picker_input')
        factory.input.setAttribute('id', node.dataset.name)

        node.appendChild(factory.input)

        factory.input.setAttribute('value', JSON.stringify(factory.state))
    }
})(document, window)
