class CommunityMember{

    constructor(email, name, phoneNumber){
        this.email = email;
        this.name = name;
        this.phoneNumber = phoneNumber;
        this.nickName = "";
        this.birthDay = "";
        this.role = "member";
    }

    static sample(){
        return new CommunityMember("aasd1234@plateer.com","hong","01012341234");
    }
}

export default CommunityMember