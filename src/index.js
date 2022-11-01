import './style.css';

const doc = document.body;


const content = document.createElement('div');
content.setAttribute('id', 'content');
content.classList.add('content');

const testP = document.createElement('p');
testP.textContent = 'To-Do-List.'

content.appendChild(testP)


let items = []

const item = (_title, _dueDate, _description ='some description', _priority ='low', _notes = 'some notes', _checklist = 'not done') => {
    let title = _title;
    let description = _description;
    let dueDate = _dueDate;
    let priority = _priority;
    let notes = _notes;
    let checkist = _checklist;

    const getTitle = () => {
        return title;
    }
    const getDueDate = () => {
        return dueDate
    }


    return {getTitle, getDueDate};
}


items.push (item('finish app', '05-11-2022'))
items.push (item('clean room', '04-11-2022'))

const itemsMarkUp = () => {
    let itemDivs = [];

    const addAnItem = () => {

    }

    const addItemMarkUp = () => {
        const addItem = document.createElement('div');

        addItem.setAttribute('id', 'itemForm')

        const addItemForm = document.createElement('form');
        addItemForm.setAttribute('name', 'addForm');

        const titleLabel = document.createElement('label');
        titleLabel.setAttribute('for', 'tit')
        titleLabel.textContent = 'Enter item title'

        addItem.appendChild(titleLabel);


        const titleInput = document.createElement('input');
        titleInput.setAttribute('id', 'tit')
        titleInput.setAttribute('type', 'text');


        const btn2 = document.createElement('button');
        btn2.textContent = 'addBook';
        btn2.addEventListener('click', addBook)

        addItem.appendChild(btn2)

        addItem.appendChild(titleInput);

        addItem.classList.add('hidden');

        doc.appendChild(addItem);

    }

    const addBook = () => {
        const itemForm = document.getElementById('itemForm');
        itemForm.classList.remove('show')
        itemForm.classList.add('hidden')
        console.log('worked')

        const bookTitle = document.getElementById('tit').value; 

        document.getElementById('tit').value = ''

    
        const bookDate = '20-10-2022';

        items.push(item(bookTitle, bookDate));

        newItem();


    }

    const newItem = () => {
        const newItem = document.createElement('div');
        
        newItem.setAttribute('id', item.length-1)
        newItem.textContent = items[items.length-1].getTitle();
        content.appendChild(newItem)
    }

    const showItemMarkup = () => {
        const itemForm = document.getElementById('itemForm');
        itemForm.classList.add('show')

    }

    const addNewItem = () => {
        const btn = document.createElement('button');
        btn.textContent = 'Add New Item'
        btn.addEventListener('click', showItemMarkup)
        content.appendChild(btn)

    }


    const addItems = () => {
        for (let i = 0; i < items.length; i++){
            const newItem = document.createElement('div');
            console.log(items[i].getTitle())
            newItem.textContent = items[i].getTitle();
            itemDivs.push(newItem);
        }
    }



    const appendItems = () => {

        for (let i = 0; i < itemDivs.length; i ++){
            content.appendChild(itemDivs[i]);
        }
    }

    const itemControl = () => {
        addItems();
        addNewItem();
        console.log('worked')
        addItemMarkUp();

        appendItems();

    }

    itemControl();

}

itemsMarkUp();

doc.appendChild(content);
