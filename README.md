[![npm version](https://badge.fury.io/js/week-hours-picker.svg)](https://badge.fury.io/js/week-hours-picker)
[![Downloads](http://img.shields.io/npm/dm/week-hours-picker.svg?style=flat)](https://npmjs.org/package/week-hours-picker)

# week-hours-picker 

Hours picker by week day

### Usage
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
    <link rel="stylesheet" href="https://unpkg.com/week-hours-picker@1.0.2/src/style.css">
</head>
<body>
    <div id="input" data-name="name"></div>

    <script src="https://unpkg.com/week-hours-picker@1.0.2/src/index.js"></script>
    <script>
        (() => {
            const node = document.querySelector('#input')
    
            // [row]: [hours]
            const state = {
                0: [1, 2, 5, 10],
                5: [4, 9, 10, 20],
            }

            function handleStateChange(newState) {
                console.log(newState)
            }

            window.weekHoursPicker(node, state, handleStateChange)
        })()
    </script>
</body>
</html>
```
