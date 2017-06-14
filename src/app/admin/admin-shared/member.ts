export class Member {
    constructor(
        public adminAccount: boolean,
        public displayName: string,
        public firstName?: string,
        public surname?: string,
        public twitterHandle?: string,
        public cellNumber?: string
    ){}
    
}
