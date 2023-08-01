
function User({user}){
    return(
        <div>
            <b>{user.username}</b> <br/>
            <b>{user.email}</b>
        </div>
    );
}

function UserList() {
    const users = [
        {
            id       : 1,
            username : "1004",
            email    : "1004@gmail.com"
        },
        {
            id       : 2,
            username : "jumi",
            email    : "jumi@kh.com"
        },
        {
            id       : 3,
            username : "nany",
            email    : "nany@naver.com"
        }
    ];
    return (
        <div>
           <User user={users[0]}/>
           <User user={users[1]}/>
           <User user={users[2]}/>
        </div>
    );
}
export default UserList;
