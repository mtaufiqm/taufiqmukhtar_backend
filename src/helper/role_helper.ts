


export class RoleHelper {
    static isContainOne(input:{roles:string[] | undefined, required: string[] | undefined}): boolean{
        if(!input.roles){
            return false;
        }
        if(!input.required){
            return true;
        }
        return input.required.some((el) => {
            if(input.roles!.includes(el)){
                return true;
            }
            return false;
        });
    }

    static isNotContainOne(input:{
        roles:string[] | undefined
        required: string[] | undefined
    }): boolean {
        return !this.isContainOne(input);
    }
}