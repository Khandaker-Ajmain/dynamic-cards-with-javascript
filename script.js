const card_data = [
    {
        image: 'img/img1.jpg',
        category: 'ADVENTURE',
        title: 'What is the true meaning of adventure?',
        shortDes: 'An adventure is an exciting experience or undertaking that is typically bold, sometimes risky...',
        writerImg: 'img/writer1.jpg',
        writerName: 'July Dec',
        postTime: '2h day ago'
    },

    {
        image: 'img/img2.jpg',
        category: 'POPULAR',
        title: 'How to Keep Going When You Don’t Know What’s Next',
        shortDes: 'The future can be scary, but there are ways to deal with that fear...',
        writerImg: 'img/writer2.jpg',
        writerName: 'Eyup Ucmaz',
        postTime: '1 day ago'
    },

    {
        image: 'img/img3.jpg',
        category: 'DESIGN',
        title: 'What is a design in simple words?',
        shortDes: 'In simple and brief words, a design is a plan to make something...',
        writerImg: 'img/writer3.jpg',
        writerName: 'Carrie Brewer',
        postTime: '6h ago'
    },

    {
        image: 'img/img4.jpg',
        category: 'PROGRAMMING',
        title: 'What is Computer programming?',
        shortDes: 'Computer programming is the process of performing a particular computation, usually by designing and building an executable computer program...',
        writerImg: 'img/writer3.jpg',
        writerName: 'July Dec',
        postTime: '2h day ago'
    },

    {
        image: 'img/img5.jpg',
        category: 'LEARNING',
        title: 'Why are skills very important?',
        shortDes: 'It helps you get new and knowledge-based perspectives on the world around you...',
        writerImg: 'img/writer1.jpg',
        writerName: 'Eyup Ucmaz',
        postTime: '1 day ago'
    },

    {
        image: 'img/img6.jpg',
        category: 'GAMING',
        title: 'What is the oldest video game that is still played today?',
        shortDes: 'Remarkably, he still works on the game to this day, potentially making Kingdom of Drakkar the oldest living game still run...',
        writerImg: 'img/writer2.jpg',
        writerName: 'Carrie Brewer',
        postTime: '6h ago'
    }
];

const seletElem = document.querySelector('.container');
console.log(seletElem)

const loadAllCard = () => {
    card_data.map((post) => {
        const createCard = document.createElement('div');
        createCard.classList.add('card'); 
        createCard.innerHTML = `
        <div class="card-header">
            <img src="${post.image}" alt="rover" />
        </div>
        <div class="card-body">
            <span class="tag tag-teal">${post.category}</span>
            <h4>${post.title}</h4>
            <p>${post.shortDes}</p>
            <div class="user">
                <img src="${post.writerImg}" alt="user" />
                <div class="user-info">
                    <h5>${post.writerName}</h5>
                    <small>${post.postTime}</small>
                </div>
            </div>
        </div>`;

        seletElem.appendChild(createCard);        
    });
}

loadAllCard();