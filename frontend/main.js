const menuEmail = document.querySelector('.sign-in__navbar-email');
const desktopMenu = document.querySelector('.sign-in__desktop-menu');
const mobileMenuIcon = document.querySelector('.bx-menu-alt-left');
const mobileMenu = document.querySelector('.sign-in__mobile-menu');

const mainSignInContainer = document.querySelector('.sign-in__wrapper');
const accountContainer = document.querySelector('.twitter__container');
const accountCardsContainer = document.querySelector('.twitter__cards-container');

const accountDetailClose = document.querySelector('.twitter__account-detail-close');

const accountDetail = document.querySelector('.twitter__account-detail');

if (menuEmail) {
    menuEmail.addEventListener('click', toggleDesktopMenu);
}

if (mobileMenuIcon) {
    mobileMenuIcon.addEventListener('click', toggleMobileMenu);
}

if (accountDetailClose) {
    accountDetailClose.addEventListener('click', closeAccountDetails);
}


function toggleDesktopMenu() {
    desktopMenu.classList.toggle('inactive');

    const isAccountDetailClosed = accountDetail.classList.contains('inactive');
    if (!isAccountDetailClosed) {
        accountDetail.classList.add('inactive');
    }
}

function toggleMobileMenu() {

    if (mainSignInContainer) {
        mainSignInContainer.classList.add('inactive');
        const isMainSignInContainerClosed = mainSignInContainer.classList.contains('inactive');
        
        if (!isMainSignInContainerClosed) {
            mainSignInContainer.classList.add('inactive');
        }

        const isMobileMenuClosed = mobileMenu.classList.contains('inactive');

        if (!isMobileMenuClosed) {
            mainSignInContainer.classList.remove('inactive');
        }
    }
    if (accountContainer) {
        accountDetail.classList.add('inactive');
        const isAccountContainerClosed = accountContainer.classList.contains('inactive');

        if (!isAccountContainerClosed) {
            accountContainer.classList.add('inactive');
        }

        const isMobileMenuClosed = mobileMenu.classList.contains('inactive');

        if (!isMobileMenuClosed) {
            accountContainer.classList.remove('inactive');
        }
    }
    
    if (mobileMenu) {
        mobileMenu.classList.toggle('inactive');
    }
}

function openAccountDetails() {
    desktopMenu.classList.add('inactive');
    mobileMenu.classList.add('inactive');
    accountDetail.classList.remove('inactive');

}
 function closeAccountDetails() {
    accountDetail.classList.add('inactive');
}

// Twitter

const accountList = [];
accountList.push({
    name: 'Fico Gutierrez',
    followers: 1.431,
    image: 'https://pbs.twimg.com/profile_images/1772786938245685248/BRgPp8cJ_400x400.jpg'
});

accountList.push({
    name: 'Carlos F. Galán',
    followers: 916,
    image: 'https://pbs.twimg.com/profile_images/1810693395062337536/Iurn13K9_400x400.jpg'
});

function renderAccount(arr) {
    for (account of arr) {
        const accountCard = document.createElement('div');
        accountCard.classList.add('twitter__account-card');

        const accountImg = document.createElement('img');
        accountImg.setAttribute('src', account.image);
        accountImg.addEventListener('click',  openAccountDetails);
        
        const accountInfo = document.createElement('div');
        accountInfo.classList.add('twitter__account-info');

        const accountInfoDiv = document.createElement('div');

        const accountName = document.createElement('p');
        accountName.innerText = account.name;
        const accountFollowers = document.createElement('p');
        accountFollowers.innerText = '' + account.followers;

        accountInfoDiv.appendChild(accountName);
        accountInfoDiv.appendChild(accountFollowers);

        accountInfo.appendChild(accountInfoDiv);
        
        accountCard.appendChild(accountImg);
        accountCard.appendChild(accountInfo);

        accountCardsContainer.appendChild(accountCard);
    }
}
if (accountCardsContainer){
    renderAccount(accountList);
}
