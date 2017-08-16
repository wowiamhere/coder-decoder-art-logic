import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'art-logic-decoder',
	templateUrl: '../templates/decoder.component.html',
	styleUrls: [ '../styles/app.component.css' ]
})

export class DecoderComponent{

	hi_bit: number;
	lo_bit: number;

	error: string;
	result: string;

	set_hi_bit(bit: string):void{
		this.hi_bit = parseInt(bit, 16);
	}


	set_lo_bit(bit: string):void{		
		this.lo_bit = parseInt(bit, 16);
	}	

	calculate():void{

		let temp_lo = this.lo_bit;
		let temp_hi = this.hi_bit;

		let temp_result;

		this.validation()	

		if( !this.error ){
			temp_hi = temp_hi << 7;
			temp_result =  ( temp_hi | temp_lo ) - 8192;
			this.result = temp_result.toString(10);
		}
	}

	validation():void{

		let hi =  this.hi_bit;
		let lo =  this.lo_bit;

		this.result = null;

		if ( hi < parseInt("00", 16) || 
			hi > parseInt("7f", 16)  ||
			lo < parseInt("00", 16) ||
			lo > parseInt("7f", 16) ){
			this.error= "NUMBER OUR OF RANGE";
		}
		else
			this.error = null;
	}
}