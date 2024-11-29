function gemsToDiamond(Diamond) {
    if (Diamond > 1000 * 2) {
        const DiamondsWillGot = Diamond - 2000;
        return DiamondsWillGot;
        }
    else {
        return Diamond;
    }
};

const friendsGems = {
    FirstFriend: 20,
    SecondFriend: 200,
    ThirdFriend: 50
};

const totalDiamonds = friendsGems.FirstFriend * 21 + friendsGems.SecondFriend * 32 + friendsGems.ThirdFriend * 43;
const Diamonds = gemsToDiamond(totalDiamonds);
console.log(Diamonds);


