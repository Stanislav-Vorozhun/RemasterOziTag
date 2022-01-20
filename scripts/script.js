let searchField = document.querySelector('.searchField'),
    select = document.querySelector('select'),
    optionInSelect = document.querySelectorAll('option'),
    optionsDataText = [],
    optionDataLevel = []



searchField.setAttribute('placeholder', "Код ОКРБ или наименование закупаемой продукции")
searchField.addEventListener('click', () => {
    console.log('clck')
})

//Вытягиваем data-level и содержимое из html options 
let catchOptionsData = () => {
        for (let i = 0; i < optionInSelect.length; i++) {
            optionsDataText.push(optionInSelect[i].text)
            optionDataLevel.push(optionInSelect[i].dataset.level)
        }
    }
    //Динамически отрисовываем подменные Options
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

// Приводим к общему виду html options с атрибутом selected
let isSelected = (arr1, arr2) => {
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i].selected) {
            var a = i
            for (var j = 0; j < arr2.length; j++) {
                if (a === j) {
                    arr2[j].classList.toggle('selected')
                    var child = arr2[j].querySelector('input')
                }
                if (arr2[j].classList.contains('selected')) {
                    child.checked = true
                }
            }
        }
    }
}

// Добавляем чекеры на наши кастомные checkboxes
let addChecker = (items) => {
    for (let i = 0; i < items.length; i++) {
        items[i].addEventListener('click', () => {
            child = items[i].querySelector('input')
            if (!items[i].classList.contains('selected')) {
                items[i].classList.toggle('selected')
                child.checked = true
            } else {
                child.checked = false
                items[i].classList.toggle('selected')
            }
        })
    }
}

catchOptionsData(optionsDataText, optionInSelect)
generateCustomOptions(optionsDataText)
newCustomOptions = document.querySelectorAll('.customOption')
isSelected(optionInSelect, newCustomOptions)
allCustomOptions = document.querySelectorAll('.customOption')
addChecker(allCustomOptions)