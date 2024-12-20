import { Pipe, PipeTransform } from "@angular/core";

interface AddressLike{
    address1: string;
    address2?: string;
    city: string;
    state: string;
    zip: string;
    country?: string;
}

@Pipe({
    name: 'formatAddress'
})

export class formatAddressPipe implements PipeTransform{
    transform(addr: AddressLike) {
        console.log('pipe run', addr);
        return (addr.address1 + " " + addr.address2 + ", " + addr.city + ", " 
    + addr.state + ", " + addr.zip + ", " + addr.country);
    }
    
}