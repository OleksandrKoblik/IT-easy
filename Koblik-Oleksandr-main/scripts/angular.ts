class Human {
    constructor(public height: number,
                public width: number,
                public name: string,
                public date: Date,
                public gender: string,
                public disability: string){}

    }

    const firstHuman = new Human(182,78, "Alex", new Date(1997,10,20),"male","have");
    console.log(firstHuman);