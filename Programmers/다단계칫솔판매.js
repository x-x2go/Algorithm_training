const enroll = ["john", "mary", "edward", "sam", "emily", "jaimie", "tod", "young"];
const referral = ["-", "-", "mary", "edward", "mary", "mary", "jaimie", "edward"];
const seller = ["young", "john", "tod", "emily", "mary"];
const amount = [12, 4, 2, 5, 10];

console.log(solution(enroll, referral, seller, amount));

function solution(enroll, referral, seller, amount) {
    let roll = {};
    let totalProfit = new Map();

    const findRef =(seller, profit) => {
        if(seller === "-") return;
        
        const allocation = Math.floor(profit /10);
        const total = totalProfit.get(seller) + profit - allocation;
        totalProfit.set(seller, total);

        findRef(roll[seller], allocation);
        
    };

    enroll.forEach((name, i)=>{
        roll[name] = referral[i];
        totalProfit.set(name, 0);
    })

    seller.forEach((name, i)=>{
        findRef(name, amount[i] * 100);
    });

    return [...totalProfit.values()];
}