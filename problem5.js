

function myInvite(fullList) {
    let relativeLists = [];
    let totalMember = 0;
    for (const invitedList of fullList) {
        let isUnique = true;
        for (const newList of relativeLists) {
            if (invitedList.name === newList.name && invitedList.member === newList.member) {
                isUnique = false;
                break;
            }
        }
        if (isUnique) {
            relativeLists.push(invitedList);
        }
    }
    for (const relative of relativeLists) {
        totalMember += relative.member;
    }
    return { relativeLists, totalMember }
}

const relative = [
    { name: 'joy', member: 2 },
    { name: 'joy', member: 2 },
    { name: 'roy', member: 3 },
    { name: 'raki', member: 5 }
]

const inviteList = myInvite(relative);
console.log("Filtered List:", inviteList.relativeLists);
console.log("Total Members:", inviteList.totalMember);


