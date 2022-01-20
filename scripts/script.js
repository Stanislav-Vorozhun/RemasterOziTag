let searchField = document.querySelector('.searchField'),
    select = document.querySelector('select'),
    optionInSelect = document.querySelectorAll('option'),
    optionsDataText = []

searchField.setAttribute('placeholder', "Код ОКРБ или наименование закупаемой продукции")
searchField.addEventListener('click', () => {
    console.log('clck')
})

// переделать
let isSelected = (arr1, arr2) => {
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i].selected) {
            var a = i
            for (var j = 0; j < arr2.length; j++) {
                if (a === j) {
                    arr2[j].classList.toggle('selected')
                }
                if (arr2[j].classList.contains('selected')) {
                    document.querySelector('.customChexboxInput').checked = true
                }
            }
        }
    }
}

let catchOptionsData = (arr) => {
    for (let i = 0; i < optionInSelect.length; i++) {
        arr.push(optionInSelect[i].text)
    }
}

let generateCustomOptions = (items) => {
    items.map((text) => (
        customOption = document.createElement('div'),
        customOption.className = 'customOption',


        customCheckBoxInput = document.createElement('input'),
        customCheckBoxInput.setAttribute('type', 'checkbox'),
        customCheckBoxInput.className = 'customChexboxInput',
        customCheckBoxInput.id = 'customChexboxInput' + Math.floor(Math.random() * 999),

        customCheckBoxLabel = document.createElement('label'),
        customCheckBoxLabel.className = 'customCheckBoxLabel',
        customCheckBoxLabel.setAttribute('for', `${customCheckBoxInput.id}`),

        customOptionTitle = document.createElement('p'),
        customOptionTitle.className = 'customChexboxTitle',
        customOptionTitle.innerHTML = text,


        document.querySelector('.dropDown').append(customOption),
        customOption.append(customCheckBoxInput, customCheckBoxLabel, customOptionTitle)
    ))

}

let addChecker = (items) => {
    for (let i = 0; i < items.length; i++) {
        items[i].addEventListener('click', () => {
            child = items[i].querySelector('input')
            if (!items[i].classList.contains('selected')) {
                items[i].classList.toggle('selected')
                child.checked = true
            }
            else {
                child.checked = false
                items[i].classList.toggle('selected')
            }
        })
    }
}

catchOptionsData(optionsDataText)
generateCustomOptions(optionsDataText)
newCustomOptions = document.querySelectorAll('.customOption')
isSelected(optionInSelect, newCustomOptions)
allCustomOptions = document.querySelectorAll('.customOption')
addChecker(allCustomOptions)