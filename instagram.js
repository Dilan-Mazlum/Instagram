const container = document.getElementById('container');

const navigationItems = [
    { icon: 'home', text: 'Ana Sayfa' },
    { icon: 'search', text: 'Ara' },
    { icon: 'explore', text: 'Keşfet' },
    { icon: 'movie', text: 'Reels' },
    { icon: 'chat_bubble', text: 'Mesajlar' },
    { icon: 'favorite', text: 'Bildirimler' },
    { icon: 'add_box', text: 'Oluştur' }

];

const leftDiv = document.createElement('div');
leftDiv.className = 'left';
const logoDiv = document.createElement('div');
const logoImg = document.createElement('img');
logoImg.className = 'logo';
logoImg.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjtjBw4xwF01ZdKL1cmnYZD3vdavlQPOWA7w&s';
logoDiv.appendChild(logoImg);
leftDiv.appendChild(logoDiv);

navigationItems.forEach(item => {
    const navItem = document.createElement('div');
    navItem.className = 'navigation-item';
    const navItemContent = document.createElement('div');
    navItemContent.className = 'item';
    const icon = document.createElement('span');
    icon.className = 'material-symbols-outlined';
    icon.id = 'icon';
    icon.textContent = item.icon;
    const text = document.createElement('div');
    text.className = 'text';
    text.textContent = item.text;

    navItemContent.appendChild(icon);
    navItemContent.appendChild(text);
    navItem.appendChild(navItemContent);
    leftDiv.appendChild(navItem);
});


const moreItem = {
    icon: 'reorder', 
    text: 'Daha Fazla'
};

const moreNavItem = document.createElement('div');
moreNavItem.className = 'navigation-item';
const moreNavItemContent = document.createElement('div');
moreNavItemContent.className = 'item';
const moreIcon = document.createElement('span');
moreIcon.className = 'material-symbols-outlined';
moreIcon.id = 'icon';
moreIcon.textContent = moreItem.icon;
const moreText = document.createElement('div');
moreText.className = 'text';
moreText.textContent = moreItem.text;

moreNavItemContent.appendChild(moreIcon);
moreNavItemContent.appendChild(moreText);
moreNavItem.appendChild(moreNavItemContent);

const profileItem = {
    icon: '/img/profile.jpeg',
    text: 'Profil'
};

const profileNavItem = document.createElement('div');
profileNavItem.className = 'navigation-item';
const profileNavItemContent = document.createElement('div');
profileNavItemContent.className = 'item';
const profileImg = document.createElement('img');
profileImg.className = 'profile-icon';
profileImg.src = profileItem.icon;
const profileText = document.createElement('div');
profileText.className = 'text1';
profileText.textContent = profileItem.text;

profileNavItemContent.appendChild(profileImg);
profileNavItemContent.appendChild(profileText);
profileNavItem.appendChild(profileNavItemContent);



leftDiv.appendChild(profileNavItem);
leftDiv.appendChild(moreNavItem);

container.appendChild(leftDiv);


const stories = [
    { imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAtjq3lnIJrUFlWeo_8INh4lpXqH1KcCl_dA&s', userName: 'Sefo' },
    { imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMXyBV-qnK9gMR8DUgEKgXo3bayQhg-lpCzA&s', userName: 'Galatasaray' },
    { imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTa6PyQdW9nFg6g2vH98lHkCnolrCp2rSQJgA&s', userName: 'firatal...' },
    { imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6libnWmIPKxWA_GZiYar2r_yPVLpQVoKW5A&s', userName: 'ceydaka...' },
    { imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLJC2y1Yl6Kwopu61kX1E_dfp-36Awx9heKQ&s', userName: 'barbiloji' },
    { imgSrc: 'https://i.pinimg.com/474x/a7/50/e0/a750e07ba31af94f9c629e1dc670c1da.jpg', userName: 'sarkifm' },
    { imgSrc: 'https://m.media-amazon.com/images/S/pv-target-images/c7fc75a423fc33698265a27fe446a41026f3c8642fd6c8706c43b897d2ffb3e6.jpg', userName: 'friends' }
];

const storyContainer = document.getElementById('storys-container');
const storyRingSrc = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsmAoer6wIiNsi8YNCUTrMe-ZM01tmAkXIzEb0C8kzCCfB_tBIRANdHL-rXuP7Uh3Ek0k&usqp=CAU';

stories.forEach(story => {
    const strDiv = document.createElement('div');
    strDiv.className = 'str';
    const imgDiv = document.createElement('div');
    imgDiv.className = 'story-ring-container';
    const ringImg = document.createElement('img');
    ringImg.className = 'story-ring';
    ringImg.src = storyRingSrc;  
    const img = document.createElement('img');
    img.className = 'story-image';
    img.src = story.imgSrc;
    
    imgDiv.appendChild(ringImg);
    imgDiv.appendChild(img);

    const userNameDiv = document.createElement('div');
    userNameDiv.className = 'userName';
    userNameDiv.textContent = story.userName;

    strDiv.appendChild(imgDiv);
    strDiv.appendChild(userNameDiv);

    storyContainer.appendChild(strDiv);
});

const posts = [
    {
        profileImg: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMCFGIFQr0cEkae2FdPhYyxW_Lb9D6t_ZdxA&s',
        userName: 'galatasaray',
        postTime: '24d',
        postImg: 'https://pbs.twimg.com/media/F-CAsFtXoAAf-Rx.jpg:large',
        likes: '125.546 beğenme',
        comments: '24.865 yorumun tümünü gör'
    },
    {
        profileImg: 'https://m.media-amazon.com/images/S/pv-target-images/c7fc75a423fc33698265a27fe446a41026f3c8642fd6c8706c43b897d2ffb3e6.jpg',
        userName: 'friends',
        postTime: '3s',
        postImg: 'https://www.marieclaire.com.tr/wp-content/uploads/2021/03/friends-dizisinin-bizlere-ogrettigi-10-hayat-dersi.jpg',
        likes: '10.689.234 beğenme',
        comments: '72.569 yorumun tümünü gör'
    },
];


function createPost(postData) {

    const postContainer = document.createElement('div');
    postContainer.classList.add('post');
    const postDiv = document.createElement('div');
    postDiv.classList.add('post-div');
    const profileImg = document.createElement('img');
    profileImg.classList.add('post-profile');
    profileImg.src = postData.profileImg;
    const userName = document.createElement('div');
    userName.classList.add('post-userName');
    userName.textContent = postData.userName;
    const postTime = document.createElement('div');
    postTime.classList.add('post-time');
    postTime.textContent = postData.postTime;
    const followButton = document.createElement('div');
    followButton.classList.add('post-follow');
    followButton.textContent = 'Takip';
    const moreIcon = document.createElement('div');
    const moreIconSpan = document.createElement('span');
    moreIconSpan.classList.add('material-symbols-outlined');
    moreIconSpan.id='more'
    moreIconSpan.textContent = 'more_horiz';
    moreIcon.appendChild(moreIconSpan);


    postDiv.appendChild(profileImg);
    postDiv.appendChild(userName);
    postDiv.appendChild(postTime);
    postDiv.appendChild(followButton);
    postDiv.appendChild(moreIcon);


    const postImgDiv = document.createElement('div');
    const postImg = document.createElement('img');
    postImg.classList.add('post-img');
    postImg.src = postData.postImg;
    postImgDiv.appendChild(postImg);

    const postFeedbackDiv = document.createElement('div');
    postFeedbackDiv.classList.add('post-feedback')
    const denemeDiv = document.createElement('div');
    denemeDiv.classList.add('deneme');


    const feedbackIcons = ['favorite', 'mode_comment', 'send'];
    feedbackIcons.forEach(iconName => {
        const iconDiv = document.createElement('div');
        const iconSpan = document.createElement('span');
        iconSpan.classList.add('material-symbols-outlined');
        iconSpan.id = 'post-feedback-icon';
        iconSpan.textContent = iconName;
        iconDiv.appendChild(iconSpan);
        denemeDiv.appendChild(iconDiv);
    });


    const bookmarkDiv = document.createElement('div');
    const bookmarkSpan = document.createElement('span');
    bookmarkSpan.classList.add('material-symbols-outlined');
    bookmarkSpan.id='post-feedback-icon';
    bookmarkSpan.textContent = 'bookmark';
    bookmarkDiv.appendChild(bookmarkSpan);

    postFeedbackDiv.appendChild(denemeDiv);
    postFeedbackDiv.appendChild(bookmarkDiv);


    const endDiv = document.createElement('div');
    endDiv.classList.add('end');
    const likes = document.createElement('div');
    likes.classList.add('end-icon1');
    likes.textContent = postData.likes;
    const user = document.createElement('div');
    user.classList.add('end-icon1');
    user.textContent = postData.userName;
    const viewComments = document.createElement('div');
    viewComments.classList.add('end-icon');
    viewComments.textContent = postData.comments;
    const addComment = document.createElement('div');
    addComment.classList.add('end-icon');
    addComment.textContent = 'Yorum ekle...';
    const smileIcon = document.createElement('span');
    smileIcon.classList.add('material-symbols-outlined');
    smileIcon.id = 'smile';
    smileIcon.textContent = 'sentiment_satisfied';
    addComment.appendChild(smileIcon);


    endDiv.appendChild(likes);
    endDiv.appendChild(user);
    endDiv.appendChild(viewComments);
    endDiv.appendChild(addComment);

    postContainer.appendChild(postDiv);
    postContainer.appendChild(postImgDiv);
    postContainer.appendChild(postFeedbackDiv);
    postContainer.appendChild(endDiv);

    document.querySelector('.post-container').appendChild(postContainer);
}


posts.forEach(postData => createPost(postData));


const profiles = [
    {
        imgSrc: "/img/profile.jpeg",
        userName: "dilanmazlum_6",
        nameSurname: "Dilan Mazlum",
        switchText: "Geçiş Yap"
    },
    {
        imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjhvh0Jgns1sRx1kj1ojf1SpBbUcjsiVb_IA&s",
        userName: "denizcanaktas",
        nameSurname: "Önerilen",
        switchText: "Takip et"
    },
    {
        imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDeYSt591BJTqm0KXg03Gi4ok28uY60QY2ug&s",
        userName: "iynemliarasbult",
        nameSurname: "Önerilen",
        switchText: "Takip et"
    },
    {
        imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcRTnZWUSN45MhtAG5sDa_0H-eeO-UIgZBJA&s",
        userName: "alperenduymaz",
        nameSurname: "Önerilen",
        switchText: "Takip et"
    }
];


const rightSection = document.getElementById('rightSection');


const rightContainer = document.createElement('div');
rightContainer.classList.add('right');
const mainProfile = profiles[0];
const mainProfileDiv = document.createElement('div');
mainProfileDiv.classList.add('rightContainer');
const mainProfileImg = document.createElement('img');
mainProfileImg.classList.add('right-img');
mainProfileImg.src = mainProfile.imgSrc;
const mainUserDiv = document.createElement('div');
mainUserDiv.classList.add('user');
const mainUserNameDiv = document.createElement('div');
mainUserNameDiv.classList.add('userName-right');
mainUserNameDiv.textContent = mainProfile.userName;
const mainNameSurnameDiv = document.createElement('div');
mainNameSurnameDiv.classList.add('nameSurname-right');
mainNameSurnameDiv.textContent = mainProfile.nameSurname;

mainUserDiv.appendChild(mainUserNameDiv);
mainUserDiv.appendChild(mainNameSurnameDiv);


const mainSwitchDiv = document.createElement('div');
mainSwitchDiv.classList.add('switch');
mainSwitchDiv.textContent = mainProfile.switchText;

mainProfileDiv.appendChild(mainProfileImg);
mainProfileDiv.appendChild(mainUserDiv);
mainProfileDiv.appendChild(mainSwitchDiv);

rightContainer.appendChild(mainProfileDiv);


const suggestionDiv = document.createElement('div');
suggestionDiv.classList.add('suggestion');
const youAreDiv = document.createElement('div');
youAreDiv.classList.add('youAre');
youAreDiv.textContent = 'Senin için önerilenler';
const allDiv = document.createElement('div');
allDiv.classList.add('all');
allDiv.textContent = 'Tümünü Gör';

suggestionDiv.appendChild(youAreDiv);
suggestionDiv.appendChild(allDiv);


rightContainer.appendChild(suggestionDiv);

for (let i = 1; i < profiles.length; i++) {
    const profile = profiles[i]; 
    const suggestionProfileDiv = document.createElement('div');
    suggestionProfileDiv.classList.add('suggesContainer');

    const suggestionProfileImg = document.createElement('img');
    suggestionProfileImg.classList.add('right-img');
    suggestionProfileImg.src = profile.imgSrc;
    const suggestionUserDiv = document.createElement('div');
    suggestionUserDiv.classList.add('user');
    const suggestionUserNameDiv = document.createElement('div');
    suggestionUserNameDiv.classList.add('userName-right');
    suggestionUserNameDiv.textContent = profile.userName;
    const suggestionNameSurnameDiv = document.createElement('div');
    suggestionNameSurnameDiv.classList.add('nameSurname-right');
    suggestionNameSurnameDiv.textContent = profile.nameSurname;

    suggestionUserDiv.appendChild(suggestionUserNameDiv);
    suggestionUserDiv.appendChild(suggestionNameSurnameDiv);

    const suggestionSwitchDiv = document.createElement('div');
    suggestionSwitchDiv.classList.add('switch');
    suggestionSwitchDiv.textContent = profile.switchText;

    suggestionProfileDiv.appendChild(suggestionProfileImg);
    suggestionProfileDiv.appendChild(suggestionUserDiv);
    suggestionProfileDiv.appendChild(suggestionSwitchDiv);


    rightContainer.appendChild(suggestionProfileDiv);
}


rightSection.appendChild(rightContainer);

