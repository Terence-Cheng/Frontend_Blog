// Type can use the Union Type

// function and it has it's own type

{
    interface ICounter {
        (): number,
        count: number
    }
}
{
    interface IFruit {
        a: string,
        b: string,
        c?: string,
        // [prop: string]: string
    }
    
    let totato: IFruit = {
        a: '1',
        b: '2',
        d: '3'
    } as IFruit
}

{
    interface ISpeakChinese {
        speakChinese: () => void 
        // void in interface function means, it does not care the type of return
    }

    interface ISpeakEnglish {
        speakEnglish: () => void
    }

    class Speak implements ISpeakChinese, ISpeakEnglish {
        speakChinese() {
            return '333'
        }
        speakEnglish() {
            return 2222
        }
    }
}

{
    /* 
        Abstract class

        can have unabstract properties

        can not be new
    */

    abstract class Animal {
        abstract eat():  void
        abstract name: string

        drink() {
            console.log('drink')
        }
    }

    class Cat extends Animal {
        name: string = 'sss'
        eat = () => {

        }
    }

    const c = new Cat()
    console.log(c.name, c.drink, c.eat)
}