import { Component } from '@angular/core';

@Component({
	selector: 'art-logic-encoder',
	templateUrl: '../templates/encoder.component.html',
	styleUrls: [ '../styles/app.component.css' ]
})

export class EncoderComponent{

	result: string = "";

	encode_number(number: string):void{
		
		let input = Number(number);

		if(input < -8192 || input > 8191 )
		
			this.result = 'NUMBER IS OUT OF RANGE';
		
		else{
		
			input = input + 8192;

			let mask = 127;
			let bit1 = input & mask;
			let bit2 = (input >> 7) << 8;
			
			this.result = ( bit2 | bit1 ).toString(16);
		
		}
	}

}