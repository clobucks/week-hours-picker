((document, window) => {
    window.weekHoursPicker = (node, props = {}, _options = {}) => {
        if (!node) {
            throw new Error('Node element is not defined')
        }

        const glob = {
            render: () => {},
        }

        const options = Object.assign(
            {
                days: {
                    0: 'Monday',
                    2: 'Tuesday',
                    3: 'Wednesday',
                    4: 'Thursday',
                    5: 'Friday',
                    6: 'Saturday',
                    7: 'Sunday',
                },
            },
            _options,
        )

        function getInitialState() {
            return { ...props }
        }

        let state = getInitialState(props)

        function handleDayClick(rowID, update) {
            state = Array.from(
                { length: Object.keys(options.days).length },
                (_, index) => index,
            ).reduce((result, row) => {
                if (row === rowID) {
                    return {
                        ...result,
                        [row]: Array.from({ length: 24 }, (_, i) => i),
                    }
                }

                return {
                    ...result,
                    ...(state[row] ? { [row]: state[row] } : {}),
                }
            }, state)

            return update()
        }

        function handleHeaderClick(colID, update) {
            state = Array.from(
                { length: Object.keys(options.days).length + 1 },
                (_, index) => index,
            ).reduce(
                (result, index) => ({
                    ...result,
                    [index]: state[index]
                        ? state[index].includes(colID)
                            ? state[index]
                            : [...state[index], colID]
                        : [colID],
                }),
                state,
            )

            return update()
        }

        function handleHourClick(index, hour, update) {
            const keys = Object.keys(state)

            if (!keys.includes(index)) {
                Object.assign(state, { [index]: [hour] })
                return update()
            }

            state = keys.reduce((result, rowIndex) => {
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

            return update()
        }

        function getAside() {
            const element = document.createElement('div')

            element.classList.add('week__hours__picker_aside')

            Object.keys(options.days)
                .map((key) => options.days[key])
                .forEach((day, index) => {
                    const dayElement = document.createElement('div')

                    dayElement.classList.add('week__hours__picker_day')
                    dayElement.innerHTML = day

                    dayElement.addEventListener('click', () => {
                        handleDayClick(index, glob.render)
                    })

                    element.appendChild(dayElement)
                })

            return element
        }

        function getRow(index) {
            const element = document.createElement('div')

            element.setAttribute('data-whp-row', index)
            element.classList.add('week__hours__picker_row')

            for (let i = 0; i < 24; i++) {
                const hour = document.createElement('div')

                hour.classList.add('week__hours__picker_hour')

                if (state[index] && state[index].includes(i)) {
                    hour.classList.add('week__hours__picker_hour___selected')
                }

                hour.innerHTML = i

                hour.addEventListener('click', () => {
                    handleHourClick(index, i, glob.render)
                })

                element.appendChild(hour)
            }

            return element
        }

        function getHeader() {
            const element = document.createElement('div')

            element.classList.add('week__hours__picker_header')

            for (let i = 0; i < 24; i++) {
                const hour = document.createElement('div')

                hour.classList.add('week__hours__picker_header-hour')
                hour.innerHTML = i

                hour.addEventListener('click', () => {
                    handleHeaderClick(i, glob.render)
                })

                element.appendChild(hour)
            }

            return element
        }

        function getBody() {
            const element = document.createElement('div')

            element.classList.add('week__hours__picker_body')

            Object.keys(options.days).forEach((index) => {
                element.appendChild(getRow(index))
            })

            return element
        }

        function getGrid() {
            const element = document.createElement('div')

            element.classList.add('week__hours__picker_grid')

            element.appendChild(getHeader())
            element.appendChild(getBody())

            return element
        }

        function getContainer() {
            const element = document.createElement('div')

            element.classList.add('week__hours__picker_container')

            element.append(getAside())
            element.append(getGrid())

            return element
        }

        let dom = getContainer(state)

        glob.render = () => {
            const newDom = getContainer(state)
            node.replaceChild(newDom, dom)

            dom = newDom

            glob.input.setAttribute('value', JSON.stringify(state))
        }

        node.classList.add('week__hours__picker_node')
        node.appendChild(dom)

        glob.input = document.createElement('input')
        glob.input.classList.add('week__hours__picker_input')
        glob.input.setAttribute('id', node.dataset.name)

        node.appendChild(glob.input)

        glob.input.setAttribute('value', JSON.stringify(state))
    }
})(document, window)
